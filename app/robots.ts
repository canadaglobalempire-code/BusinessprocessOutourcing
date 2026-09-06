import type { MetadataRoute } from "next";
import { BASE } from "@/lib/sitemap-sections";

export const revalidate = 300;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${BASE}/sitemap.xml`,
  };
}
