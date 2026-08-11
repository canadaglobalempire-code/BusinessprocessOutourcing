import type { MetadataRoute } from "next";
import { INDUSTRIES, slugify } from "@/lib/industries";
import { LOCATIONS } from "@/lib/locations";
import { POSTS } from "@/lib/posts";
import { POSTS_PER_PAGE } from "@/components/pagination";
import { SERVICES } from "@/lib/services";
import { SOLUTIONS } from "@/lib/solutions";

const BASE = "https://businessprocessoutsourcing.info";

/*
 * lastmod must be STABLE across builds.
 *
 * This previously used `new Date()` for every entry, so all 151 URLs carried an
 * identical timestamp that changed on every deploy. Google discounts lastmod
 * when it behaves that way — it reads as "everything changed", which is the
 * same as no signal at all. Bump CONTENT_UPDATED when generated pages actually
 * change; blog posts carry their own publication date.
 */
const CONTENT_UPDATED = new Date("2026-08-10T00:00:00.000Z");

type Entry = MetadataRoute.Sitemap[number];

const entry = (
  path: string,
  priority: number,
  lastModified: Date = CONTENT_UPDATED,
  changeFrequency: Entry["changeFrequency"] = "monthly",
): Entry => ({ url: `${BASE}${path}`, lastModified, changeFrequency, priority });

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPages = Math.max(0, Math.ceil(POSTS.length / POSTS_PER_PAGE) - 1);

  return [
    // Homepage and primary hubs carry the highest weight.
    entry("", 1.0, CONTENT_UPDATED, "weekly"),
    entry("/services", 0.9),
    entry("/locations", 0.9),
    entry("/industries", 0.9),
    entry("/solutions", 0.8),
    entry("/contact", 0.8),
    entry("/blog", 0.8, CONTENT_UPDATED, "weekly"),

    // Commercial detail pages — the ones that produce enquiries.
    ...SERVICES.map((s) => entry(`/services/${s.slug}`, 0.9)),
    ...LOCATIONS.map((l) => entry(`/locations/${l.slug}`, 0.8)),
    ...INDUSTRIES.map((i) => entry(`/industries/${slugify(i.name)}`, 0.8)),
    ...SOLUTIONS.map((s) => entry(`/solutions/${slugify(s.title)}`, 0.7)),

    // Articles use their own publication date.
    ...POSTS.map((p) => entry(`/blog/${p.slug}`, 0.6, new Date(p.date))),
    ...Array.from({ length: blogPages }, (_, i) =>
      entry(`/blog/page/${i + 2}`, 0.4),
    ),

    // Supporting pages.
    entry("/about-us", 0.6),
    entry("/how-it-works", 0.6),
    entry("/why-choose-us", 0.6),
    entry("/pricing", 0.7),
  ];
}
