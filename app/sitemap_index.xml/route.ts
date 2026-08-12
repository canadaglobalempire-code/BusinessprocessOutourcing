import { renderSitemapIndex, xmlResponse } from "@/lib/sitemap-sections";

/*
 * Legacy alias for /sitemapindex.xml.
 *
 * This underscored path was submitted to Search Console in 2020 by whatever ran
 * on this domain previously and sat on a stale "Success / 0 pages" reading for
 * years. It now serves the same index as the canonical path.
 *
 * Kept rather than deleted: a submitted sitemap that starts returning 404 is a
 * standing error in the Sitemaps report, which is strictly worse than an alias.
 */
export const dynamic = "force-static";

export function GET() {
  return xmlResponse(renderSitemapIndex());
}
