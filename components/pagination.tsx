import Link from "next/link";

/** Blog listing page size. Shared by /blog and /blog/page/[page]. */
export const POSTS_PER_PAGE = 12;

export function blogPageHref(page: number) {
  return page <= 1 ? "/blog" : `/blog/page/${page}`;
}

export function Pagination({
  current,
  total,
}: {
  current: number;
  total: number;
}) {
  if (total <= 1) return null;
  const pages = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <nav className="pagination" aria-label="Blog pages">
      {current > 1 ? (
        <Link className="page-step" href={blogPageHref(current - 1)} rel="prev">
          ← Previous
        </Link>
      ) : (
        <span className="page-step is-disabled" aria-hidden="true">
          ← Previous
        </span>
      )}

      <ol className="page-numbers">
        {pages.map((page) => (
          <li key={page}>
            {page === current ? (
              <span className="page-number is-current" aria-current="page">
                {page}
              </span>
            ) : (
              <Link
                className="page-number"
                href={blogPageHref(page)}
                aria-label={`Page ${page}`}
              >
                {page}
              </Link>
            )}
          </li>
        ))}
      </ol>

      {current < total ? (
        <Link className="page-step" href={blogPageHref(current + 1)} rel="next">
          Next →
        </Link>
      ) : (
        <span className="page-step is-disabled" aria-hidden="true">
          Next →
        </span>
      )}
    </nav>
  );
}
