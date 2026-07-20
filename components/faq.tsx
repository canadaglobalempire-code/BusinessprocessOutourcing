"use client";

import { useState } from "react";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { MiniMark } from "@/components/mini-mark";
import { SvgIcon } from "@/components/icons";

export type FaqItem = { q: string; a: string };

const ACCENTS = [
  "accent-purple",
  "accent-orange",
  "accent-green",
  "accent-yellow",
  "accent-blue",
  "accent-lilac",
  "accent-pink",
  "accent-mint",
];

function FaqCard({
  item,
  index,
  defaultOpen,
}: {
  item: FaqItem;
  index: number;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <article className={`faq-item ${ACCENTS[index % ACCENTS.length]}${open ? " open" : ""}`}>
      <button
        className="faq-question"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="faq-num">{String(index + 1).padStart(2, "0")}</span>
        <strong>{item.q}</strong>
        <span className="faq-toggle">{open ? "−" : "+"}</span>
      </button>
      <div className="faq-answer">
        <div>
          <p>{item.a}</p>
        </div>
      </div>
    </article>
  );
}

/* Renders FAQPage JSON-LD alongside the visible accordion so answers are
   eligible for AI Overviews / answer-engine citations, not just rich results. */
export function Faq({ items }: { items: FaqItem[] }) {
  const half = Math.ceil(items.length / 2);
  const columns = [items.slice(0, half), items.slice(half)];
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="faq-grid">
        {columns.map((col, ci) => (
          <div className="faq-column" key={ci}>
            {col.map((item, i) => {
              const index = ci === 0 ? i : half + i;
              return (
                <FaqCard key={item.q} item={item} index={index} defaultOpen={index === 0} />
              );
            })}
          </div>
        ))}
      </div>
    </>
  );
}

export function FaqSection({
  items,
  heading = (
    <>
      Frequently asked <span className="hl">questions</span>.
    </>
  ),
  intro = "Direct answers to the questions we hear most.",
  cta = true,
}: {
  items: FaqItem[];
  heading?: React.ReactNode;
  intro?: string;
  cta?: boolean;
}) {
  return (
    <section className="section" id="faq">
      <div className="container">
        <Reveal className="section-heading">
          <p className="eyebrow">
            <MiniMark /> FAQ
          </p>
          <h2>{heading}</h2>
          <p>{intro}</p>
        </Reveal>
        <Faq items={items} />
        {cta && (
          <Reveal className="inline-cta">
            <span className="cta-orb">
              <SvgIcon name="customer-support" />
            </span>
            <div>
              <strong>Still have questions?</strong>
              <small>Our team is here to help with your specific requirements.</small>
            </div>
            <Link className="btn btn-dark" href="/contact">
              Contact us →
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  );
}
