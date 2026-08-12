import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { MiniMark } from "@/components/mini-mark";
import { FaqSection } from "@/components/faq";
import { PRICING_FAQ } from "@/lib/faq-content";
import { Breadcrumbs } from "@/components/breadcrumbs";

export const metadata: Metadata = {
  alternates: { canonical: "/pricing" },
  title: "BPO Pricing & Outsourcing Engagement Options",
  description:
    "Explore BPO pricing models for project support, dedicated outsourced professionals, and managed customer support or back-office teams.",
};

const PLANS = [
  {
    eyebrow: "Task-based",
    title: "Project support",
    price: "Custom",
    blurb: "For defined projects, backlogs, or short-term workloads.",
    features: [
      "Clear scope and deliverables",
      "Agreed timeline",
      "Ideal for cleanup or overflow",
      "Progress reporting",
    ],
    cta: "Request a quote",
    featured: false,
  },
  {
    eyebrow: "Most flexible",
    title: "Dedicated support",
    price: "Monthly",
    blurb: "For recurring work that needs consistent ownership.",
    features: [
      "Dedicated professional",
      "Part-time or full-time options",
      "Workflow documentation",
      "Regular check-ins",
    ],
    cta: "Build your plan",
    featured: true,
  },
  {
    eyebrow: "Multi-skill",
    title: "Managed team",
    price: "Custom",
    blurb: "For businesses combining several capabilities or shifts.",
    features: [
      "Multiple roles and skills",
      "Managed coverage",
      "Quality and capacity oversight",
      "Scalable operating model",
    ],
    cta: "Talk to an advisor",
    featured: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <Breadcrumbs crumbs={[{ name: "Pricing", path: "/pricing" }]} />
      <section className="page-hero">
        <div className="container">
          <Reveal className="section-heading">
            <p className="eyebrow">
              <MiniMark /> Pricing
            </p>
            <h1>
              Flexible support,
              <br />
              priced around <span className="hl">the work</span>.
            </h1>
            <p>
              Choose an engagement model based on workload, ownership, coverage,
              and the level of management you need.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="pricing-grid">
            {PLANS.map((plan, i) => (
              <Reveal
                as="article"
                key={plan.title}
                className={`price-card${plan.featured ? " featured" : ""}`}
                delay={i * 0.06}
              >
                <p className="eyebrow">{plan.eyebrow}</p>
                <h2>{plan.title}</h2>
                <p className="price">{plan.price}</p>
                <p className="muted">{plan.blurb}</p>
                <ul>
                  {plan.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <Link
                  className={`btn ${plan.featured ? "btn-dark" : "btn-outline"}`}
                  href="/contact"
                >
                  {plan.cta}
                </Link>
              </Reveal>
            ))}
          </div>
          <p className="center muted" style={{ marginTop: 35 }}>
            Final pricing depends on role complexity, hours, coverage, tools, and
            management requirements.
          </p>
        </div>
      </section>

      <FaqSection items={PRICING_FAQ} />
    </>
  );
}
