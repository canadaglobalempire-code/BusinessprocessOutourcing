#!/usr/bin/env node
/*
 * Submit new or changed canonical URLs to IndexNow (Bing, Yandex, Naver, …).
 *
 *   INDEXNOW_KEY=… node scripts/indexnow.mjs            dry run, prints what would be sent
 *   INDEXNOW_KEY=… node scripts/indexnow.mjs --submit   POST to api.indexnow.org, update manifest
 *
 * Options
 *   --sitemap <url|file>   where to read the URL set (default: live /sitemap.xml)
 *   --base <origin>        fetch pages from this origin instead of the live host
 *                          (e.g. http://localhost:3001 to check a local build);
 *                          submitted URLs are always the canonical https host
 *   --manifest <path>      url -> {lastmod, hash} state (default .indexnow/manifest.json)
 *   --retire               also submit URLs that left the sitemap AND now 404/410
 *   --concurrency <n>      parallel page checks (default 2 — Hostinger's WAF bans bursts)
 *
 * A URL is submitted when it is not in the manifest, or its sitemap lastmod or
 * visible-text hash changed. Pages that redirect, error, carry noindex, or
 * declare a different canonical are skipped and left out of the manifest so
 * they are re-checked next run. The key is never printed.
 */
import { createHash } from "node:crypto";
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";
import { pathToFileURL } from "node:url";

export const HOST = "businessprocessoutsourcing.info";
export const BASE = `https://${HOST}`;
export const ENDPOINT = "https://api.indexnow.org/indexnow";
export const BATCH_SIZE = 10_000;
const DEFAULT_MANIFEST = ".indexnow/manifest.json";

/** Fail closed: no usable key means nothing runs. */
export function requireKey(env = process.env) {
  const key = (env.INDEXNOW_KEY ?? "").trim();
  if (!/^[A-Za-z0-9-]{8,128}$/.test(key)) {
    throw new Error(
      "INDEXNOW_KEY is not set (8-128 chars, a-z A-Z 0-9 and dashes). Nothing was submitted.",
    );
  }
  return key;
}

export const keyLocation = (key) => `${BASE}/indexnow/${key}`;

export const redact = (text, key) =>
  key ? String(text).split(key).join("<redacted>") : String(text);

const decodeXml = (s) =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'");

/** [{ loc, lastmod }] from a <urlset> document. */
export function parseSitemap(xml) {
  const out = [];
  for (const m of xml.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
    const loc = m[1].match(/<loc>\s*([^<]+?)\s*<\/loc>/)?.[1];
    const lastmod = m[1].match(/<lastmod>\s*([^<]+?)\s*<\/lastmod>/)?.[1] ?? "";
    if (loc) out.push({ loc: decodeXml(loc), lastmod });
  }
  return out;
}

/** Normalised href when the URL is a canonical page on our host, else null. */
export function validateUrl(input, host = HOST) {
  let url;
  try {
    url = new URL(String(input));
  } catch {
    return null;
  }
  if (url.protocol !== "https:") return null;
  if (url.hostname !== host) return null;
  if (url.search || url.hash) return null;
  return url.href;
}

export function dedupe(urls) {
  return [...new Set(urls)];
}

/** Visible text only, so build ids and script chunks never count as a change. */
export function visibleText(html) {
  return String(html)
    .replace(/<(script|style|noscript|svg)\b[\s\S]*?<\/\1>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export const hashText = (text) =>
  createHash("sha256").update(text).digest("hex").slice(0, 16);

/**
 * Decide whether a fetched page is safe to submit for `url`.
 * Returns { ok: true } or { ok: false, reason }.
 */
export function inspectPage({ url, status, headers = {}, html = "" }) {
  if (status >= 300 && status < 400) return { ok: false, reason: `redirect ${status}` };
  if (status !== 200) return { ok: false, reason: `status ${status}` };
  const xRobots = String(headers["x-robots-tag"] ?? "");
  if (/noindex/i.test(xRobots)) return { ok: false, reason: "noindex (header)" };
  const meta = html.match(
    /<meta\s+[^>]*name=["']robots["'][^>]*content=["']([^"']*)["']/i,
  )?.[1];
  if (meta && /noindex/i.test(meta)) return { ok: false, reason: "noindex (meta)" };
  const canonical = html.match(
    /<link\s+[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i,
  )?.[1];
  if (canonical && new URL(canonical, url).href !== url) {
    return { ok: false, reason: `canonical -> ${canonical}` };
  }
  return { ok: true };
}

/** Split current entries against the manifest. */
export function diffManifest(entries, manifest) {
  const changed = [];
  const unchanged = [];
  const current = new Set();
  for (const e of entries) {
    current.add(e.url);
    const prev = manifest[e.url];
    if (prev && prev.lastmod === e.lastmod && prev.hash === e.hash) unchanged.push(e);
    else changed.push(e);
  }
  const retired = Object.keys(manifest).filter((u) => !current.has(u));
  return { changed, unchanged, retired };
}

export function buildPayload(key, urlList, host = HOST) {
  return { host, key, keyLocation: keyLocation(key), urlList };
}

export function chunk(list, size = BATCH_SIZE) {
  const out = [];
  for (let i = 0; i < list.length; i += size) out.push(list.slice(i, i + size));
  return out;
}

/* ------------------------------------------------------------------------ */

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function fetchPage(url, base) {
  const target = base ? url.replace(BASE, base.replace(/\/$/, "")) : url;
  const res = await fetch(target, {
    redirect: "manual",
    headers: { "User-Agent": "indexnow-submitter (+scripts/indexnow.mjs)" },
  });
  const headers = { "x-robots-tag": res.headers.get("x-robots-tag") ?? "" };
  const html = res.status === 200 ? await res.text() : "";
  return { url, status: res.status, headers, html };
}

async function mapLimit(items, limit, fn, delay) {
  const results = new Array(items.length);
  let next = 0;
  const worker = async () => {
    while (next < items.length) {
      const i = next++;
      results[i] = await fn(items[i]);
      if (delay) await sleep(delay);
    }
  };
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));
  return results;
}

async function readSitemap(source) {
  if (/^https?:\/\//.test(source)) {
    const res = await fetch(source, { headers: { "User-Agent": "indexnow-submitter" } });
    if (!res.ok) throw new Error(`sitemap fetch failed: ${res.status} ${source}`);
    return res.text();
  }
  return readFileSync(source, "utf8");
}

function parseArgs(argv) {
  const opts = { submit: false, retire: false, sitemap: `${BASE}/sitemap.xml`, base: "", manifest: DEFAULT_MANIFEST, concurrency: 2, delay: 150 };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--submit") opts.submit = true;
    else if (a === "--retire") opts.retire = true;
    else if (a === "--sitemap") opts.sitemap = argv[++i];
    else if (a === "--base") opts.base = argv[++i];
    else if (a === "--manifest") opts.manifest = argv[++i];
    else if (a === "--concurrency") opts.concurrency = Number(argv[++i]) || 2;
    else if (a === "--delay") opts.delay = Number(argv[++i]) || 0;
    else throw new Error(`unknown option ${a}`);
  }
  return opts;
}

export async function main(argv = process.argv.slice(2), env = process.env) {
  const key = requireKey(env); // before any network call
  const opts = parseArgs(argv);
  const log = (...a) => console.log(...a.map((x) => redact(typeof x === "string" ? x : JSON.stringify(x), key)));

  let manifest = {};
  try {
    manifest = JSON.parse(readFileSync(opts.manifest, "utf8"));
  } catch {
    /* first run */
  }

  const raw = parseSitemap(await readSitemap(opts.sitemap));
  const rejected = raw.filter((e) => !validateUrl(e.loc));
  const candidates = dedupe(raw.map((e) => validateUrl(e.loc)).filter(Boolean));
  const lastmodOf = new Map(raw.map((e) => [validateUrl(e.loc), e.lastmod]));
  log(`sitemap: ${raw.length} entries, ${candidates.length} canonical after validation (${rejected.length} rejected, ${raw.length - rejected.length - candidates.length} duplicates)`);

  const pages = await mapLimit(candidates, opts.concurrency, (u) => fetchPage(u, opts.base), opts.delay);
  const skipped = [];
  const entries = [];
  for (const page of pages) {
    const verdict = inspectPage(page);
    if (!verdict.ok) skipped.push({ url: page.url, reason: verdict.reason });
    else entries.push({ url: page.url, lastmod: lastmodOf.get(page.url) ?? "", hash: hashText(visibleText(page.html)) });
  }
  for (const s of skipped) log(`skip ${s.url} — ${s.reason}`);

  const { changed, unchanged, retired } = diffManifest(entries, manifest);
  let urlList = changed.map((e) => e.url);

  const retiredToSend = [];
  if (retired.length && opts.retire) {
    const gone = await mapLimit(retired, opts.concurrency, (u) => fetchPage(u, opts.base), opts.delay);
    for (const g of gone) {
      if (g.status === 404 || g.status === 410) retiredToSend.push(g.url);
      else log(`keep ${g.url} — left sitemap but returns ${g.status}, not retiring`);
    }
    urlList = urlList.concat(retiredToSend);
  }

  log(`changed ${changed.length}, unchanged ${unchanged.length}, skipped ${skipped.length}, retired ${retired.length}${opts.retire ? ` (${retiredToSend.length} submitted as gone)` : " (pass --retire to submit)"}`);

  if (!urlList.length) {
    log("nothing to submit");
    return 0;
  }

  if (!opts.submit) {
    const sample = buildPayload("<redacted>", urlList.slice(0, 5));
    log(`dry run — would POST ${urlList.length} URL(s) to ${ENDPOINT} in ${chunk(urlList).length} batch(es); first payload (truncated to 5 urls):`);
    log(JSON.stringify(sample, null, 2));
    return 0;
  }

  let allOk = true;
  for (const batch of chunk(urlList)) {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(buildPayload(key, batch)),
    });
    const ok = res.status === 200 || res.status === 202;
    allOk &&= ok;
    log({ ok, status: res.status, count: batch.length });
  }
  if (!allOk) {
    console.error("one or more batches were rejected; manifest not updated");
    return 1;
  }

  const next = {};
  for (const e of [...unchanged, ...changed]) next[e.url] = { lastmod: e.lastmod, hash: e.hash };
  for (const u of retired) if (!retiredToSend.includes(u)) next[u] = manifest[u];
  mkdirSync(dirname(opts.manifest), { recursive: true });
  writeFileSync(opts.manifest, JSON.stringify(Object.fromEntries(Object.entries(next).sort()), null, 2) + "\n");
  log(`manifest written: ${Object.keys(next).length} URLs → ${opts.manifest}`);
  return 0;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().then(
    (code) => process.exit(code),
    (err) => {
      console.error(redact(err.message ?? String(err), (process.env.INDEXNOW_KEY ?? "").trim()));
      process.exit(1);
    },
  );
}
