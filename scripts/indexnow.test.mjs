import { test } from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import {
  BASE,
  buildPayload,
  dedupe,
  diffManifest,
  inspectPage,
  parseSitemap,
  redact,
  requireKey,
  validateUrl,
} from "./indexnow.mjs";

const SCRIPT = fileURLToPath(new URL("./indexnow.mjs", import.meta.url));

test("URL validation accepts only canonical https URLs on our host", () => {
  assert.equal(validateUrl(`${BASE}/services/customer-support`), `${BASE}/services/customer-support`);
  assert.equal(validateUrl(`${BASE}/`), `${BASE}/`);
  assert.equal(validateUrl("http://businessprocessoutsourcing.info/blog"), null, "http");
  assert.equal(validateUrl(`${BASE}/blog?page=2`), null, "query string");
  assert.equal(validateUrl(`${BASE}/privacy#cookies`), null, "fragment");
  assert.equal(validateUrl("not a url"), null);
});

test("host matching rejects URLs on another host", () => {
  assert.equal(validateUrl("https://www.businessprocessoutsourcing.info/blog"), null, "www");
  assert.equal(validateUrl("https://example.com/blog"), null);
  assert.equal(validateUrl("https://businessprocessoutsourcing.info.evil.com/blog"), null);
});

test("de-duplication keeps first occurrence and order", () => {
  const a = `${BASE}/a`;
  const b = `${BASE}/b`;
  assert.deepEqual(dedupe([a, b, a, a, b]), [a, b]);
});

test("missing configuration fails closed", () => {
  assert.throws(() => requireKey({}), /INDEXNOW_KEY/);
  assert.throws(() => requireKey({ INDEXNOW_KEY: "   " }), /INDEXNOW_KEY/);
  assert.throws(() => requireKey({ INDEXNOW_KEY: "short" }), /INDEXNOW_KEY/);
  assert.throws(() => requireKey({ INDEXNOW_KEY: "has spaces in it" }), /INDEXNOW_KEY/);
  assert.equal(requireKey({ INDEXNOW_KEY: " abcdef1234567890 " }), "abcdef1234567890");

  // The CLI exits non-zero with a clear message and makes no request.
  const run = spawnSync(process.execPath, [SCRIPT, "--submit"], {
    env: { PATH: process.env.PATH },
    encoding: "utf8",
  });
  assert.equal(run.status, 1);
  assert.match(run.stderr, /INDEXNOW_KEY is not set/);
});

test("payload carries keyLocation on our host and never leaks through redact", () => {
  const key = "abcdef1234567890abcdef";
  const p = buildPayload(key, [`${BASE}/`]);
  assert.equal(p.host, "businessprocessoutsourcing.info");
  assert.equal(p.keyLocation, `${BASE}/indexnow/${key}`);
  assert.deepEqual(p.urlList, [`${BASE}/`]);
  assert.equal(redact(JSON.stringify(p), key).includes(key), false);
});

test("sitemap parsing and manifest diff", () => {
  const xml = `<?xml version="1.0"?><urlset>
    <url><loc>${BASE}/</loc><lastmod>2026-08-12T00:00:00.000Z</lastmod></url>
    <url><loc>${BASE}/a&amp;b</loc></url></urlset>`;
  const entries = parseSitemap(xml);
  assert.deepEqual(entries, [
    { loc: `${BASE}/`, lastmod: "2026-08-12T00:00:00.000Z" },
    { loc: `${BASE}/a&b`, lastmod: "" },
  ]);

  const manifest = {
    [`${BASE}/same`]: { lastmod: "x", hash: "h1" },
    [`${BASE}/moved`]: { lastmod: "x", hash: "h1" },
    [`${BASE}/gone`]: { lastmod: "x", hash: "h1" },
  };
  const now = [
    { url: `${BASE}/same`, lastmod: "x", hash: "h1" },
    { url: `${BASE}/moved`, lastmod: "x", hash: "h2" },
    { url: `${BASE}/new`, lastmod: "y", hash: "h3" },
  ];
  const d = diffManifest(now, manifest);
  assert.deepEqual(d.changed.map((e) => e.url), [`${BASE}/moved`, `${BASE}/new`]);
  assert.deepEqual(d.unchanged.map((e) => e.url), [`${BASE}/same`]);
  assert.deepEqual(d.retired, [`${BASE}/gone`]);
});

test("pages that redirect, error, noindex or point elsewhere are skipped", () => {
  const url = `${BASE}/p`;
  const ok = `<html><head><link rel="canonical" href="${url}"/></head></html>`;
  assert.deepEqual(inspectPage({ url, status: 200, html: ok }), { ok: true });
  // "https://host" and "https://host/" are the same URL.
  assert.equal(inspectPage({ url: `${BASE}/`, status: 200, html: `<link rel="canonical" href="${BASE}"/>` }).ok, true);
  assert.equal(inspectPage({ url, status: 308, html: "" }).ok, false);
  assert.equal(inspectPage({ url, status: 500, html: "" }).ok, false);
  assert.equal(inspectPage({ url, status: 200, headers: { "x-robots-tag": "noindex" }, html: ok }).ok, false);
  assert.equal(inspectPage({ url, status: 200, html: `<meta name="robots" content="noindex, follow">${ok}` }).ok, false);
  assert.equal(inspectPage({ url, status: 200, html: `<link rel="canonical" href="${BASE}/other"/>` }).ok, false);
});
