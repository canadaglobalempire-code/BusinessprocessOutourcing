import { renderSitemapIndex, xmlResponse } from "@/lib/sitemap-sections";

/*
 * The sitemap index — the path to submit in Search Console.
 *
 * It lists the per-section child sitemaps under /sitemaps/, so coverage is
 * reported per silo (locations, services, blog, …) rather than as one
 * undifferentiated number across the whole site.
 *
 * The older /sitemap_index.xml still serves the identical document. It was
 * submitted to Search Console years ago and removing it would turn a working
 * entry into a 404, so it stays as an alias rather than being deleted.
 */
export const dynamic = "force-static";

export function GET() {
  return xmlResponse(renderSitemapIndex());
}
