import type { Metadata } from "next";
import { BlogList } from "@/components/blog-list";
import { Breadcrumbs } from "@/components/breadcrumbs";

export const metadata: Metadata = {
  alternates: { canonical: "/blog" },
  title: "BPO Blog & Outsourcing Guides",
  description:
    "Read BPO and outsourcing guides about customer support, call center operations, hiring, onboarding, data security, delegation, and scaling back-office work.",
};

export default function BlogIndex() {
  return (
    <>
      <Breadcrumbs crumbs={[{ name: "Blog", path: "/blog" }]} />
      <BlogList page={1} />
    </>
  );
}
