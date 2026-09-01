import { BASE } from "@/lib/sitemap-sections";

/*
 * Legacy alias for /sitemapindex.xml.
 *
 * Keep old submissions working without serving a duplicate sitemap document.
 */
export const dynamic = "force-static";

export function GET() {
  return Response.redirect(`${BASE}/sitemapindex.xml`, 308);
}
