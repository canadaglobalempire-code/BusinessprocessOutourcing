import { renderSitemapIndex, xmlResponse } from "@/lib/sitemap-sections";

/*
 * The sitemap index — the path to submit in Search Console.
 *
 * It lists the per-section child sitemaps under /sitemaps/, so coverage is
 * reported per silo (locations, services, blog, …) rather than as one
 * undifferentiated number across the whole site.
 *
 * The older /sitemap_index.xml redirects here so old submissions keep working
 * without creating a second sitemap-index URL.
 */
export const dynamic = "force-static";

export function GET() {
  return xmlResponse(renderSitemapIndex());
}
