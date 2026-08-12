import type { MetadataRoute } from "next";
import { BASE } from "@/lib/sitemap-sections";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    /*
     * The index is listed first so a crawler that follows only the first entry
     * still reaches every child. The flat file stays declared because it is the
     * path already submitted in Search Console. The underscored legacy alias is
     * deliberately NOT declared — it still resolves for the old submission, but
     * advertising two URLs for one identical document invites duplicate
     * discovery reports.
     */
    sitemap: [`${BASE}/sitemapindex.xml`, `${BASE}/sitemap.xml`],
    host: BASE.replace(/^https?:\/\//, ""),
  };
}
