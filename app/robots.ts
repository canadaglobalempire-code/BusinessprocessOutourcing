import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: [
      "https://businessprocessoutsourcing.info/sitemap.xml",
      "https://businessprocessoutsourcing.info/sitemap_index.xml",
    ],
  };
}
