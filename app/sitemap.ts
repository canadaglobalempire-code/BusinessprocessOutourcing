import type { MetadataRoute } from "next";
import { ALL_ENTRIES } from "@/lib/sitemap-sections";

/*
 * The flat, every-URL sitemap.
 *
 * Superseded by /sitemap_index.xml and its per-section children, but kept
 * because this path is already submitted in Search Console and linked from
 * robots.txt. Removing a submitted sitemap turns a working entry into a 404
 * error for no gain. URL data comes from the same source as the children, so
 * the two can never drift apart.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return ALL_ENTRIES;
}
