import type { MetadataRoute } from "next";
import { ALL_ENTRIES } from "@/lib/sitemap-sections";

/*
 * The canonical sitemap: flat, every URL, one document.
 *
 * This is the path robots.txt advertises and the one submitted to Google and
 * Bing. The per-section children under /sitemaps/ read the same ALL_ENTRIES
 * source, so the two can never drift apart.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return ALL_ENTRIES;
}
