import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MiniMark } from "@/components/mini-mark";
import { Reveal } from "@/components/reveal";
import { SvgIcon } from "@/components/icons";
import { INDUSTRIES, getIndustry, slugify } from "@/lib/industries";
import { INDUSTRY_IMAGES } from "@/lib/page-images";
import { FaqSection } from "@/components/faq";
import { LeadCta } from "@/components/lead-cta";
import { CrossLinks } from "@/components/cross-links";
import { industryFaq } from "@/lib/faq-content";
import { Breadcrumbs } from "@/components/breadcrumbs";

type Params = { params: Promise<{ slug: string }> };

const ACCENTS = [
  "accent-purple",
  "accent-green",
  "accent-orange",
  "accent-blue",
  "accent-yellow",
  "accent-pink",
];

export function generateStaticParams() {
  return INDUSTRIES.map((industry) => ({ slug: slugify(industry.name) }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  const title = industry.seoTitle ?? `${industry.name} Outsourcing Support`;
  return {
    title: { absolute: title },
    description: industry.metaDescription,
    alternates: { canonical: `/industries/${slug}` },
  };
}

export default async function IndustryDetail({ params }: Params) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const index = INDUSTRIES.indexOf(industry);
  const accent = ACCENTS[index % ACCENTS.length];
  const title = industry.seoTitle ?? `${industry.name} Outsourcing Support`;
  const contactUrl = `/contact?service=${encodeURIComponent(industry.name)}`;
  const related = INDUSTRIES.filter((item) => item !== industry).slice(0, 3);
  const image = INDUSTRY_IMAGES[slugify(industry.name)] ?? {
    src: "/assets/img/services-overview.jpg",
    alt: `${industry.name} outsourcing support team reviewing client work`,
  };
  const seoBody = industry.seoBody ?? {
    heading: `${industry.name} BPO support built around customer demand.`,
    paragraphs: [
      `${industry.name} teams need support that can keep up with customer questions, service requests, sales opportunities, and operational follow-up without adding pressure to internal staff.`,
      `Our outsourced ${industry.name.toLowerCase()} support team works from documented workflows, escalation rules, reporting, and quality checks so your customer-facing work stays clear and consistent.`,
    ],
  };
  const supportNeeds = industry.services.slice(0, 4);
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description: industry.metaDescription,
    url: `https://businessprocessoutsourcing.info/industries/${slugify(industry.name)}`,
    provider: {
      "@type": "Organization",
      name: "Business Process Outsourcing",
      url: "https://businessprocessoutsourcing.info",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Breadcrumbs
        crumbs={[
          { name: "Industries", path: "/industries" },
          { name: industry.name, path: `/industries/${slug}` },
        ]}
      />
      <section className={`page-hero service-detail-hero ${accent}`}>
        <div className="container page-hero-grid">
          <Reveal>
            <p className="eyebrow">
              <MiniMark /> Industry support
            </p>
            <h1 className="industry-detail-title">{title}</h1>
            <p>{industry.seoIntro ?? industry.summary}</p>
            <Link className="btn btn-dark btn-large" href={contactUrl}>
              Discuss this industry
              <SvgIcon name="arrow-right" />
            </Link>
          </Reveal>
          <Reveal className="page-visual service-hero-visual">
            <div className="service-hero-media">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 960px) 100vw, 44vw"
                priority
              />
            </div>
            <div className="service-icon-chip">
              <SvgIcon name="target" />
            </div>
            <span className="floating-note note-a">Industry aware</span>
            <span className="floating-note note-b">Flexible capacity</span>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-heading">
            <p className="eyebrow">
              <MiniMark /> What we support
            </p>
            <h2>Services for {industry.name.toLowerCase()} teams.</h2>
            <p>{industry.summary}</p>
          </Reveal>
          <div className={`task-grid ${accent}`}>
            {industry.services.map((service, index) => (
              <Reveal as="article" key={service} className="task-item" delay={(index % 3) * 0.05}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{service}</h3>
                <p>
                  {industry.serviceDetails?.[service] ??
                    `Use outsourced ${industry.name.toLowerCase()} support to keep this work moving with clear ownership, reporting, and customer-ready process notes.`}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${accent}`}>
        <div className="container split-section industry-seo-section detail-section">
          <Reveal className="split-copy">
            <p className="eyebrow">
              <MiniMark /> {industry.name} support
            </p>
            <h2>{seoBody.heading}</h2>
            {seoBody.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>
          <Reveal className="soft-panel industry-seo-card">
            <div className="industry-seo-card-head">
              <span className="industry-seo-chip">
                <SvgIcon name="check-circle" />
              </span>
              <div>
                <h3>Where {industry.name.toLowerCase()} teams usually start</h3>
                <p>The support areas handed over first, in the order most teams add them.</p>
              </div>
            </div>
            <ul className="industry-need-list">
              {supportNeeds.map((need, needIndex) => (
                <li key={need}>
                  <span>{String(needIndex + 1).padStart(2, "0")}</span>
                  {need}
                </li>
              ))}
            </ul>
            <p className="industry-seo-card-note">
              Scope is confirmed with you before launch. Start with one area and
              add the rest as coverage settles.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container split-section detail-section">
          <Reveal className="split-copy">
            <p className="eyebrow">
              <MiniMark /> Built around demand
            </p>
            <h2>Scale coverage <span className="hl">without rebuilding your team</span>.</h2>
            <p>
              Start with the support areas you need most, then expand hours,
              channels, or scope as customer demand changes.
            </p>
          </Reveal>
          <Reveal className="soft-panel detail-side-card">
            <h3>Common setup needs</h3>
            <ul className="check-list">
              <li>Inbound and outbound coverage</li>
              <li>Documented workflows and escalation rules</li>
              <li>Quality reviews and performance reporting</li>
            </ul>
            <Link className="btn btn-dark" href={contactUrl}>
              Get industry support
              <SvgIcon name="arrow-right" />
            </Link>
          </Reveal>
        </div>
      </section>

      {industry.crossLinks && (
        <CrossLinks
          items={industry.crossLinks}
          eyebrow="Go deeper"
          heading={
            <>
              Services, delivery, and <span className="hl">further reading</span>.
            </>
          }
        />
      )}

      <LeadCta
        heading={
          <>
            Get a {industry.name.toLowerCase()} support plan,{" "}
            <span className="hl">not a sales call</span>.
          </>
        }
        intro={`Tell us the ${industry.name.toLowerCase()} work that is consuming your team's time and we will map the coverage, team size, and reporting it needs.`}
        points={[
          `A scoped ${industry.name.toLowerCase()} coverage plan`,
          "Team size, hours, and escalation rules confirmed up front",
          "No obligation and no cost for the consultation",
        ]}
      />

      <FaqSection
        items={industryFaq(industry)}
        heading={
          <>
            {industry.name} outsourcing, <span className="hl">answered directly</span>.
          </>
        }
        intro={`Common questions about outsourcing ${industry.name.toLowerCase()} support.`}
        cta={false}
      />

      <section className="section">
        <div className="container">
          <Reveal className="section-heading">
            <p className="eyebrow">
              <MiniMark /> Related industries
            </p>
            <h2>Explore adjacent <span className="hl">support needs</span>.</h2>
          </Reveal>
          <div className="related-grid">
            {related.map((item) => (
              <Link className="related-card" key={item.name} href={`/industries/${slugify(item.name)}`}>
                <strong>{item.name}</strong>
                <span>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
