import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MiniMark } from "@/components/mini-mark";
import { POSTS, getPost } from "@/lib/posts";
import { LeadCta } from "@/components/lead-cta";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

const BASE = "https://businessprocessoutsourcing.info";

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `${BASE}/blog/${slug}`,
      images: [post.img],
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.img],
    },
  };
}

export default async function Article({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const published = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: post.img,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "Business Process Outsourcing",
      url: BASE,
    },
    publisher: {
      "@type": "Organization",
      name: "Business Process Outsourcing",
      logo: { "@type": "ImageObject", url: `${BASE}/icon.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${BASE}/blog/${slug}` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article>
        <header className="article-hero">
          <div className="container">
            <span className="tag">{post.tag}</span>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
            <div className="blog-meta" style={{ maxWidth: 420, margin: "24px auto 0" }}>
              <span>Business Process Outsourcing Editorial</span>
              <time dateTime={post.date}>{published}</time>
            </div>
          </div>
        </header>

        <div className="article-cover">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={post.img} alt={post.title} />
        </div>

        <div className="article-body">{post.body}</div>
      </article>

      <LeadCta
        heading={
          <>
            Ready to delegate with <span className="hl">clarity</span>?
          </>
        }
        intro="Tell us which workflow is consuming your team's time and we will map a practical support plan around it."
      />

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">
              <MiniMark /> More resources
            </p>
            <h2>Keep learning.</h2>
          </div>
          <div className="related-grid">
            <Link className="related-card" href="/blog">
              <strong>View all articles</strong>
              <span>→</span>
            </Link>
            <Link className="related-card" href="/services">
              <strong>Explore services</strong>
              <span>→</span>
            </Link>
            <Link className="related-card" href="/contact">
              <strong>Talk to our team</strong>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
