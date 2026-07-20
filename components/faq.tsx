"use client";

import { useState } from "react";

type Item = { num: string; accent: string; q: string; a: string };

const ITEMS: Item[] = [
  {
    num: "01",
    accent: "accent-purple",
    q: "What tasks can I outsource?",
    a: "Admin, customer support, data entry, bookkeeping support, marketing assistance, research, e-commerce operations, and other back-office tasks.",
  },
  {
    num: "02",
    accent: "accent-orange",
    q: "How quickly can I get started?",
    a: "After discovery, we define the role, workflow, and start matching. Timelines depend on skill and coverage requirements.",
  },
  {
    num: "03",
    accent: "accent-green",
    q: "Will I have a dedicated team member?",
    a: "Yes. You can choose a dedicated professional or managed team with clear ownership and accountability.",
  },
  {
    num: "04",
    accent: "accent-yellow",
    q: "How do you ensure quality?",
    a: "Documented workflows, quality reviews, performance standards, and regular check-ins keep work consistent.",
  },
  {
    num: "05",
    accent: "accent-blue",
    q: "Can I scale support as I grow?",
    a: "Yes. Increase hours, add capabilities, or bring in more team members as your needs evolve.",
  },
  {
    num: "06",
    accent: "accent-lilac",
    q: "Is my business information secure?",
    a: "We use controlled access, confidentiality practices, and role-based workflows tailored to your requirements.",
  },
];

function FaqCard({ item, defaultOpen }: { item: Item; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <article className={`faq-item ${item.accent}${open ? " open" : ""}`}>
      <button
        className="faq-question"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="faq-num">{item.num}</span>
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

export function Faq() {
  const columns = [ITEMS.slice(0, 3), ITEMS.slice(3, 6)];
  return (
    <div className="faq-grid">
      {columns.map((col, ci) => (
        <div className="faq-column" key={ci}>
          {col.map((item, i) => (
            <FaqCard key={item.num} item={item} defaultOpen={ci === 0 && i === 0} />
          ))}
        </div>
      ))}
    </div>
  );
}
