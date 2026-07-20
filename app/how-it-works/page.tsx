import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SvgIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { MiniMark } from "@/components/mini-mark";
import { PAGE_IMAGES } from "@/lib/page-images";
import { FaqSection } from "@/components/faq";
import { HOW_IT_WORKS_FAQ } from "@/lib/faq-content";

export const metadata: Metadata = {
  alternates: { canonical: "/how-it-works" },
  title: { absolute: "How Outsourcing Works | BPO Onboarding & Support Process" },
  description:
    "See how Business Process Outsourcing maps your workflow, trains outsourced agents, launches support, and keeps performance visible with reporting.",
};

const STEPS = [
  {
    number: "01",
    title: "It starts with a Call...",
    accent: "accent-purple",
    description:
      "We discuss your needs, pain points, timeline, campaign details, and the approximate hours or agents required.",
  },
  {
    number: "02",
    title: "We create a Strategy...",
    accent: "accent-orange",
    description:
      "A project manager maps your process, prepares the systems, and trains agents around your brand standards.",
  },
  {
    number: "03",
    title: "We launch your Plan...",
    accent: "accent-green",
    description:
      "Your outsourced team starts work with clear guidelines, quality control, analytics, and progress reporting.",
  },
  {
    number: "04",
    title: "Ongoing Checks & Balances",
    accent: "accent-blue",
    description:
      "Regular reporting shows performance, customer activity, and the impact of the work on your bottom line.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="page-hero how-hero">
        <div className="container page-hero-grid">
          <Reveal>
            <p className="eyebrow">
              <MiniMark /> A flexible outsourcing model
            </p>
            <h1>How outsourced support <span className="hl">works for your business</span>.</h1>
            <p>
              We map your customer support, call center, help desk, back-office,
              or sales support needs, build the right outsourced team, launch the
              work, and keep performance visible with reporting.
            </p>
            <Link className="btn btn-dark btn-large" href="/contact">
              Start with a call
              <SvgIcon name="arrow-right" />
            </Link>
          </Reveal>
          <Reveal className="page-visual media-visual">
            <Image
              src={PAGE_IMAGES["how-it-works"].src}
              alt={PAGE_IMAGES["how-it-works"].alt}
              width={760}
              height={570}
              priority
            />
            <span className="floating-note note-a">Clear roadmap</span>
            <span className="floating-note note-b">Ongoing reporting</span>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container split-section">
          <Reveal className="split-copy">
            <p className="eyebrow">
              <MiniMark /> Getting it right
            </p>
            <h2>
              Getting your outsourced support right the first time.
            </h2>
            <p>
              Outsourcing should reduce pressure, not create another management
              problem. We define the work clearly before launch so fewer people can
              do more focused work.
            </p>
            <p>
              They say you only have one shot at making a great first impression,
              and that goes for every customer interaction. The goal is a practical
              roadmap, efficient staffing, and a customer experience your brand can
              trust.
            </p>
          </Reveal>
          <Reveal className="soft-panel process-proof">
            <h3>What you get before launch</h3>
            <ul className="check-list">
              <li>Clear scope and coverage needs</li>
              <li>Agents trained around your standards</li>
              <li>Reporting rhythm agreed upfront</li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="benefit-list process-step-list">
            {STEPS.map((step, index) => (
              <Reveal
                as="article"
                key={step.number}
                className={`benefit-item ${step.accent}`}
                delay={(index % 2) * 0.05}
              >
                <span className="benefit-icon">
                  <strong>{step.number}</strong>
                </span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="inline-cta">
            <span className="cta-orb">
              <SvgIcon name="chat" />
            </span>
            <div>
              <strong>Together we can do more.</strong>
              <small>Feel free to say hello.</small>
            </div>
            <Link className="btn btn-dark" href="/contact">
              Contact us
              <SvgIcon name="arrow-right" />
            </Link>
          </Reveal>
        </div>
      </section>

      <FaqSection items={HOW_IT_WORKS_FAQ} cta={false} />
    </>
  );
}
