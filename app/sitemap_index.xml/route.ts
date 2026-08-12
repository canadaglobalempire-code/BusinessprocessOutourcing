import {
  BASE,
  SECTION_NAMES,
  sectionLastmod,
  xmlResponse,
} from "@/lib/sitemap-sections";

/*
 * The sitemap index.
 *
 * Two reasons this path exists:
 *
 * 1. /sitemap_index.xml was submitted to Search Console in 2020 by whatever ran
 *    on this domain previously. It sat on a stale "Success / 0 pages" reading
 *    from Jan 2025 because it was pointing at nothing real.
 *
 * 2. Search Console caches fetch state per sitemap path. When an entry wedges,
 *    a newly submitted path forces a fresh fetch rather than waiting on the
 *    stuck one — which is what the per-section children below provide.
 *
 * It now lists real child sitemaps instead of pointing back at the flat file,
 * so coverage is reported per silo.
 */
export const dynamic = "force-static";

export function GET() {
  const children = SECTION_NAMES.map((name) => {
    const loc = `${BASE}/sitemaps/${name}.xml`;
    const lastmod = sectionLastmod(name).toISOString();
    return `  <sitemap>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </sitemap>`;
  }).join("\n");

  return xmlResponse(`<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${children}
</sitemapindex>
`);
}
