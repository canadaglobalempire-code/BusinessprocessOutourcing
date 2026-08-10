import Link from "next/link";
import { MiniMark } from "./mini-mark";
import { Reveal } from "./reveal";

export type CrossLink = { href: string; label: string };

/*
 * Contextual links out of a detail page into a *different* section of the site.
 *
 * Services, industries, solutions, and locations were previously sealed silos —
 * each linked only within itself and to /contact — so location and money pages
 * received contextual link equity from blog posts alone. This is the fix.
 */
export function CrossLinks({
  items,
  eyebrow = "Related",
  heading,
}: {
  items: CrossLink[];
  eyebrow?: string;
  heading: React.ReactNode;
}) {
  if (!items.length) return null;
  return (
    <section className="section">
      <div className="container">
        <Reveal className="section-heading">
          <p className="eyebrow">
            <MiniMark /> {eyebrow}
          </p>
          <h2>{heading}</h2>
        </Reveal>
        <div className="related-grid">
          {items.map((item) => (
            <Link className="related-card" key={item.href} href={item.href}>
              <strong>{item.label}</strong>
              <span>→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
