import type { MetadataRoute } from "next";
import { INDUSTRIES, slugify } from "@/lib/industries";
import { LOCATIONS } from "@/lib/locations";
import { POSTS } from "@/lib/posts";
import { SERVICES } from "@/lib/services";
import { SOLUTIONS } from "@/lib/solutions";

const BASE = "https://businessprocessoutsourcing.info";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/about-us",
    "/how-it-works",
    "/why-choose-us",
    "/industries",
    "/solutions",
    "/contact",
    "/services",
    "/pricing",
    "/blog",
    "/locations",
    ...LOCATIONS.map(({ slug }) => `/locations/${slug}`),
    ...SERVICES.map(({ slug }) => `/services/${slug}`),
    ...INDUSTRIES.map(({ name }) => `/industries/${slugify(name)}`),
    ...SOLUTIONS.map(({ title }) => `/solutions/${slugify(title)}`),
    ...POSTS.map(({ slug }) => `/blog/${slug}`),
  ].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));
}
