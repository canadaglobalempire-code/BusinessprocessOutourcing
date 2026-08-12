import { SECTIONS, SECTION_NAMES, renderUrlset, xmlResponse } from "@/lib/sitemap-sections";

/*
 * Child sitemaps, served at /sitemaps/<section>.xml.
 *
 * The `.xml` is part of the captured segment rather than a literal suffix,
 * because Next cannot mix literal text and a dynamic param inside one path
 * segment. Capturing the whole thing keeps the URLs conventional without
 * needing one route file per section.
 */
export const dynamic = "force-static";

export function generateStaticParams() {
  return SECTION_NAMES.map((section) => ({ section: `${section}.xml` }));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ section: string }> },
) {
  const { section } = await params;
  const name = section.replace(/\.xml$/, "");
  const entries = SECTIONS[name];

  if (!entries) return new Response("Not found", { status: 404 });

  return xmlResponse(renderUrlset(entries));
}
