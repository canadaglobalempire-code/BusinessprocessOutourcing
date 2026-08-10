import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { MiniMark } from "@/components/mini-mark";
import { POSTS } from "@/lib/posts";

export const metadata: Metadata = {
  alternates: { canonical: "/blog" },
  title: "BPO Blog & Outsourcing Guides",
  description:
    "Read BPO and outsourcing guides about customer support, call center operations, hiring, onboarding, data security, delegation, and scaling back-office work.",
};

export default function BlogIndex() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal className="section-heading">
            <p className="eyebrow">
              <MiniMark /> Resources
            </p>
            <h1>
              Practical BPO ideas for
              <br />
              outsourcing better.
            </h1>
            <p>
              Clear guidance for building outsourced workflows, protecting quality,
              and scaling support with confidence.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="blog-grid">
            {POSTS.map((post, i) => (
              <Reveal as="article" key={post.slug} className="blog-card" delay={(i % 3) * 0.06}>
                <Link href={`/blog/${post.slug}`}>
                  <Image
                    src={post.img}
                    alt={post.title}
                    width={640}
                    height={230}
                    sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                    // Only the first row is above the fold; the rest defer.
                    priority={i < 3}
                    loading={i < 3 ? "eager" : "lazy"}
                  />
                  <div className="blog-card-body">
                    <span className="tag">{post.tag}</span>
                    <h2>{post.title}</h2>
                    <p>{post.excerpt}</p>
                    <div className="blog-meta">
                      <span>{post.read}</span>
                      <span>Read article →</span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
