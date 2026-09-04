import type { MetadataRoute } from "next";
import { INDUSTRIES, slugify } from "@/lib/industries";
import { LOCATIONS } from "@/lib/locations";
import { POSTS } from "@/lib/posts";
import { SERVICES } from "@/lib/services";
import { SOLUTIONS } from "@/lib/solutions";

export const BASE = "https://businessprocessoutsourcing.info";

/*
 * lastmod must be STABLE across builds.
 *
 * This previously used `new Date()` for every entry, so all URLs carried an
 * identical timestamp that changed on every deploy. Google discounts lastmod
 * when it behaves that way — it reads as "everything changed", which is the
 * same as no signal at all. Bump CONTENT_UPDATED when generated pages actually
 * change; blog posts carry their own publication date.
 */
export const CONTENT_UPDATED = new Date("2026-08-12T00:00:00.000Z");

type Entry = MetadataRoute.Sitemap[number];

const entry = (
  path: string,
  priority: number,
  lastModified: Date = CONTENT_UPDATED,
  changeFrequency: Entry["changeFrequency"] = "monthly",
): Entry => ({ url: `${BASE}${path}`, lastModified, changeFrequency, priority });

/*
 * Sections are the unit of publication, not just of organisation.
 *
 * Search Console reports coverage per submitted sitemap. With one flat file,
 * "38 pages not indexed" tells you nothing about WHICH kind of page is
 * failing. Split by silo and the report says "locations are fine, blog is
 * stalling", which is the difference between a diagnosis and a shrug.
 */
export const SECTIONS: Record<string, Entry[]> = {
  core: [
    entry("/", 1.0, CONTENT_UPDATED, "weekly"),
    entry("/services", 0.9),
    entry("/locations", 0.9),
    entry("/industries", 0.9),
    entry("/solutions", 0.8),
    entry("/contact", 0.8),
    entry("/pricing", 0.7),
    entry("/about-us", 0.6),
    entry("/how-it-works", 0.6),
    entry("/why-choose-us", 0.6),
  ],

  services: SERVICES.map((s) => entry(`/services/${s.slug}`, 0.9)),

  locations: LOCATIONS.map((l) => entry(`/locations/${l.slug}`, 0.8)),

  industries: INDUSTRIES.map((i) => entry(`/industries/${slugify(i.name)}`, 0.8)),

  solutions: SOLUTIONS.map((s) => entry(`/solutions/${slugify(s.title)}`, 0.7)),

  blog: [
    entry("/blog", 0.8, CONTENT_UPDATED, "weekly"),
    ...POSTS.map((p) => entry(`/blog/${p.slug}`, 0.6, new Date(p.date))),
  ],
};

export const SECTION_NAMES = Object.keys(SECTIONS);

/** Every URL in one list, for the canonical /sitemap.xml. */
export const ALL_ENTRIES: Entry[] = SECTION_NAMES.flatMap((n) => SECTIONS[n]);

const xmlEscape = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export function renderUrlset(entries: Entry[]): string {
  const urls = entries
    .map((e) => {
      const lastmod = e.lastModified
        ? `\n    <lastmod>${new Date(e.lastModified).toISOString()}</lastmod>`
        : "";
      const freq = e.changeFrequency
        ? `\n    <changefreq>${e.changeFrequency}</changefreq>`
        : "";
      const prio =
        e.priority !== undefined
          ? `\n    <priority>${e.priority}</priority>`
          : "";
      return `  <url>\n    <loc>${xmlEscape(e.url)}</loc>${lastmod}${freq}${prio}\n  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

export function xmlResponse(body: string): Response {
  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
