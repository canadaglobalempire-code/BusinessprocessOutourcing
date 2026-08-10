import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { MiniMark } from "@/components/mini-mark";
import { SvgIcon } from "@/components/icons";
import { INDUSTRIES, slugify } from "@/lib/industries";
import { PAGE_IMAGES, INDUSTRY_IMAGES, pageImage } from "@/lib/page-images";
import { FaqSection } from "@/components/faq";
import { INDUSTRIES_INDEX_FAQ } from "@/lib/faq-content";

export const metadata: Metadata = {
  alternates: { canonical: "/industries" },
  title: { absolute: "Industries We Support | BPO & Call Center Outsourcing" },
  description:
    "Industry-specific outsourcing support for healthcare, retail, ecommerce, technology, utilities, banking, telecommunications, travel, insurance, government, and emergency call centers.",
};

const ACCENTS = [
  "accent-purple",
  "accent-green",
  "accent-orange",
  "accent-blue",
  "accent-yellow",
  "accent-pink",
];

function industryOptions(services: string[]) {
  return services.length > 3
    ? [...services.slice(0, 3), `+${services.length - 3} more support areas`]
    : services;
}

export default function IndustriesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <Reveal>
            <p className="eyebrow">
              <MiniMark /> Our experience
            </p>
            <h1>Industry-specific <span className="hl">outsourcing support</span>.</h1>
            <p>
              Business Process Outsourcing supports industries with real customer
              pressure: healthcare, retail, ecommerce, technology, financial
              services, telecommunications, utilities, travel, insurance,
              government, and emergency response. We shape each outsourced team
              around the calls, tickets, back-office work, and service standards
              your market requires.
            </p>
          </Reveal>
          <Reveal className="page-visual media-visual">
            <Image
              src={PAGE_IMAGES.industries.src}
              alt={PAGE_IMAGES.industries.alt}
              width={760}
              height={570}
              priority
            />
            <span className="floating-note note-a">Industry aware</span>
            <span className="floating-note note-b">Global support</span>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="values-grid industry-grid">
            {INDUSTRIES.map((industry, index) => (
              <Reveal
                as="article"
                key={industry.name}
                className={`value-card industry-card ${ACCENTS[index % ACCENTS.length]}`}
                delay={(index % 3) * 0.05}
              >
                <div className="card-media">
                  <Image
                    src={pageImage(INDUSTRY_IMAGES, slugify(industry.name), `${industry.name} outsourcing support`).src}
                    alt={pageImage(INDUSTRY_IMAGES, slugify(industry.name), `${industry.name} outsourcing support`).alt}
                    fill
                    sizes="(max-width: 800px) 100vw, 33vw"
                  />
                  <span className="card-media-chip">
                    <SvgIcon name="target" />
                  </span>
                </div>
                <h3>{industry.name}</h3>
                <p>{industry.summary}</p>
                <ul className="check-list industry-list">
                  {industryOptions(industry.services).map((service) => (
                    <li key={service} className={service.startsWith("+") ? "industry-more" : undefined}>
                      {service}
                    </li>
                  ))}
                </ul>
                <Link className="card-cta" href={`/industries/${slugify(industry.name)}`}>
                  View industry <span>→</span>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="inline-cta">
            <span className="cta-orb">↗</span>
            <div>
              <strong>
                Need outsourced support for your industry?
              </strong>
              <small>
                Talk to us about customer care, help desk, back-office,
                collections, appointment scheduling, and overflow coverage.
              </small>
            </div>
            <Link className="btn btn-dark" href="/contact">
              Get In Touch →
            </Link>
          </Reveal>
        </div>
      </section>

      <FaqSection items={INDUSTRIES_INDEX_FAQ} cta={false} />
    </>
  );
}
