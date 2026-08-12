import { BASE } from "@/lib/sitemap-sections";

export type Crumb = { name: string; path: string };

/*
 * BreadcrumbList JSON-LD.
 *
 * Without it Google builds the SERP breadcrumb line from the URL itself, so a
 * result reads ".../locations/call-center-outsourcing-costa-rica" instead of
 * "Locations > Costa Rica". Declaring the trail also tells Google the silo a
 * page sits in, which matters once one section holds a couple of hundred pages.
 *
 * Home is prepended here so callers only describe the part of the trail that
 * is actually specific to their page.
 */
export function breadcrumbSchema(crumbs: Crumb[]) {
  const trail: Crumb[] = [{ name: "Home", path: "/" }, ...crumbs];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${BASE}${c.path}`,
    })),
  };
}

export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbSchema(crumbs)),
      }}
    />
  );
}
