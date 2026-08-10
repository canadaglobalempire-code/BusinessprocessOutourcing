import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./reveal";
import { MiniMark } from "./mini-mark";
import { Pagination, POSTS_PER_PAGE } from "./pagination";
import { POSTS } from "@/lib/posts";

export const TOTAL_BLOG_PAGES = Math.max(
  1,
  Math.ceil(POSTS.length / POSTS_PER_PAGE),
);

/* Shared listing body for /blog and /blog/page/[page]. */
export function BlogList({ page }: { page: number }) {
  const start = (page - 1) * POSTS_PER_PAGE;
  const posts = POSTS.slice(start, start + POSTS_PER_PAGE);

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
              Clear guidance for building outsourced workflows, protecting
              quality, and scaling support with confidence.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {page > 1 && (
            <p className="page-position">
              Page {page} of {TOTAL_BLOG_PAGES}
            </p>
          )}
          <div className="blog-grid">
            {posts.map((post, i) => (
              <Reveal
                as="article"
                key={post.slug}
                className="blog-card"
                delay={(i % 3) * 0.06}
              >
                <Link href={`/blog/${post.slug}`}>
                  <Image
                    src={post.img}
                    alt={post.title}
                    width={640}
                    height={230}
                    sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                    // Only the first row is above the fold; the rest defer.
                    priority={page === 1 && i < 3}
                    loading={page === 1 && i < 3 ? "eager" : "lazy"}
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
          <Pagination current={page} total={TOTAL_BLOG_PAGES} />
        </div>
      </section>
    </>
  );
}
