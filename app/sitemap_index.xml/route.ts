import { INDUSTRIES } from "@/lib/industries";
import { LOCATIONS } from "@/lib/locations";
import { POSTS } from "@/lib/posts";
import { SERVICES } from "@/lib/services";
import { SOLUTIONS } from "@/lib/solutions";

const BASE = "https://businessprocessoutsourcing.info";

/*
 * Sitemap index pointing at /sitemap.xml.
 *
 * Two reasons this exists:
 *
 * 1. /sitemap_index.xml was submitted to Search Console in 2020 by whatever
 *    ran on this domain previously and has returned 404 ever since. A 404 on a
 *    submitted sitemap is a standing error in the Sitemaps report.
 *
 * 2. Search Console caches fetch state per sitemap path. When an entry is
 *    wedged, submitting a different valid path forces a fresh fetch attempt
 *    rather than waiting on the stuck one.
 *
 * lastmod is derived from real content so it only moves when content does.
 */
export const dynamic = "force-static";

function latestContentDate(): string {
  const postDates = POSTS.map((p) => new Date(p.date).getTime());
  const structural = new Date("2026-08-10T00:00:00.000Z").getTime();
  const counts = [
    LOCATIONS.length,
    SERVICES.length,
    INDUSTRIES.length,
    SOLUTIONS.length,
  ];
  // Counts are referenced so the index regenerates when content is added.
  void counts;
  return new Date(Math.max(structural, ...postDates)).toISOString();
}

export function GET() {
  const lastmod = latestContentDate();
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${BASE}/sitemap.xml</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>
</sitemapindex>
`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
