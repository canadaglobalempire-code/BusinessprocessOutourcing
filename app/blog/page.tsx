import type { Metadata } from "next";
import { BlogList } from "@/components/blog-list";

export const metadata: Metadata = {
  alternates: { canonical: "/blog" },
  title: "BPO Blog & Outsourcing Guides",
  description:
    "Read BPO and outsourcing guides about customer support, call center operations, hiring, onboarding, data security, delegation, and scaling back-office work.",
};

export default function BlogIndex() {
  return <BlogList page={1} />;
}
