import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogList, TOTAL_BLOG_PAGES } from "@/components/blog-list";

type Params = { params: Promise<{ page: string }> };

/* Page 1 lives at /blog, so this route starts at 2. */
export function generateStaticParams() {
  return Array.from({ length: Math.max(0, TOTAL_BLOG_PAGES - 1) }, (_, i) => ({
    page: String(i + 2),
  }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { page } = await params;
  const n = Number(page);
  if (!Number.isInteger(n) || n < 2 || n > TOTAL_BLOG_PAGES) return {};
  return {
    title: `BPO Blog & Outsourcing Guides — Page ${n}`,
    description: `More BPO and outsourcing guides on customer support, call center operations, delivery locations, and scaling back-office work. Page ${n} of ${TOTAL_BLOG_PAGES}.`,
    alternates: { canonical: `/blog/page/${n}` },
  };
}

export default async function BlogPaged({ params }: Params) {
  const { page } = await params;
  const n = Number(page);
  if (!Number.isInteger(n) || n < 2 || n > TOTAL_BLOG_PAGES) notFound();
  return <BlogList page={n} />;
}
