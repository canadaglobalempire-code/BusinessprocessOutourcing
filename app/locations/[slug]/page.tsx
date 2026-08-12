import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MiniMark } from "@/components/mini-mark";
import { Reveal } from "@/components/reveal";
import { SvgIcon } from "@/components/icons";
import { FaqSection } from "@/components/faq";
import { LeadCta } from "@/components/lead-cta";
import {
  LOCATIONS,
  getLocation,
  DEFAULT_LOCATION_LINKS,
} from "@/lib/locations";
import { CrossLinks } from "@/components/cross-links";
import { LOCATION_IMAGES } from "@/lib/page-images";
import { Breadcrumbs } from "@/components/breadcrumbs";

type Params = { params: Promise<{ slug: string }> };

const BASE = "https://businessprocessoutsourcing.info";

const ACCENTS = [
  "accent-blue",
  "accent-mint",
  "accent-purple",
  "accent-orange",
  "accent-green",
  "accent-pink",
];

export function generateStaticParams() {
  return LOCATIONS.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) return {};
  return {
    // No brand suffix: it cost 31 characters on every title and pushed all of
    // them past the SERP truncation point. "Outsourcing" already appears in the
    // titles themselves, so the brand added no term Google wasn't already given.
    title: { absolute: location.seoTitle },
    description: location.metaDescription,
    alternates: { canonical: `/locations/${slug}` },
  };
}

export default async function LocationDetail({ params }: Params) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) notFound();

  const index = LOCATIONS.indexOf(location);
  const accent = ACCENTS[index % ACCENTS.length];
  const contactUrl = `/contact?service=${encodeURIComponent(location.name)}`;
  const related = LOCATIONS.filter(
    (item) => item !== location && item.kind === location.kind,
  ).slice(0, 3);
  const image = LOCATION_IMAGES[location.slug] ?? {
    src: "/assets/img/services-overview.jpg",
    alt: `Outsourced support team working with ${location.name}`,
  };

  const isMarket = location.kind === "market";
  // A page-specific FAQ beats the generated one wherever it exists — the
  // generated version repeats the intro verbatim, which is fine on a country
  // page and wasteful on a page written to rank.
  const faq = location.faq ?? [
    {
      q: isMarket
        ? `What call center services do you provide for ${location.name}?`
        : `What can be outsourced to ${location.name}?`,
      a: `${location.highlights.slice(0, 4).join(", ")}, and related back-office support.`,
    },
    {
      q: isMarket
        ? `Why do companies in ${location.name} outsource customer contact?`
        : `Why do companies outsource to ${location.name}?`,
      a: location.intro,
    },
    {
      q: `How quickly can coverage start?`,
      a: "Most engagements begin within one to two weeks of confirming scope, tools, coverage hours, and escalation rules.",
    },
    {
      q: `Can coverage scale up or down?`,
      a: "Yes. Start with the hours and channels you need now, then adjust team size as demand changes without rebuilding the programme.",
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: location.seoTitle,
    description: location.metaDescription,
    serviceType: "Call center outsourcing",
    // A bare string leaves Google to guess what kind of place this is. For an
    // administrative area the containment is worth stating outright.
    areaServed: location.withinCountry
      ? {
          "@type": "State",
          name: location.name,
          containedInPlace: {
            "@type": "Country",
            name: location.withinCountry,
          },
        }
      : location.name,
    provider: {
      "@type": "Organization",
      name: "Business Process Outsourcing",
      url: BASE,
    },
    url: `${BASE}/locations/${location.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Breadcrumbs
        crumbs={[
          { name: "Locations", path: "/locations" },
          { name: location.name, path: `/locations/${location.slug}` },
        ]}
      />
      <section className={`page-hero service-detail-hero ${accent}`}>
        <div className="container page-hero-grid">
          <Reveal>
            <p className="eyebrow">
              <MiniMark /> {isMarket ? "Market coverage" : "Delivery location"}
            </p>
            <h1 className="industry-detail-title">
              {location.h1 ?? location.seoTitle}
            </h1>
            <p>{location.intro}</p>
            <Link className="btn btn-dark btn-large" href={contactUrl}>
              Discuss coverage
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
              <SvgIcon name="workspace-grid" />
            </div>
            <span className="floating-note note-a">
              {isMarket ? "Local hours" : "Flexible capacity"}
            </span>
            <span className="floating-note note-b">Documented workflows</span>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-heading">
            <p className="eyebrow">
              <MiniMark /> What you get
            </p>
            <h2>{location.body.heading}</h2>
            <p>{location.summary}</p>
          </Reveal>
          <div className={`task-grid ${accent}`}>
            {location.highlights.map((highlight, highlightIndex) => (
              <Reveal
                as="article"
                key={highlight}
                className="task-item"
                delay={(highlightIndex % 3) * 0.05}
              >
                <span>{String(highlightIndex + 1).padStart(2, "0")}</span>
                <h3>{highlight}</h3>
                <p>{location.highlightDetails[highlight]}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${accent}`}>
        <div className="container split-section industry-seo-section detail-section">
          <Reveal className="split-copy">
            <p className="eyebrow">
              <MiniMark /> {location.name}
            </p>
            <h2>{location.body.heading}</h2>
            {location.body.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>
          <Reveal className="soft-panel industry-seo-card">
            <div className="industry-seo-card-head">
              <span className="industry-seo-chip">
                <SvgIcon name="check-circle" />
              </span>
              <div>
                <h3>What most programmes start with</h3>
                <p>The coverage teams put in place first, in the order they add it.</p>
              </div>
            </div>
            <ul className="industry-need-list">
              {location.highlights.slice(0, 4).map((highlight, needIndex) => (
                <li key={highlight}>
                  <span>{String(needIndex + 1).padStart(2, "0")}</span>
                  {highlight}
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

      {location.metros && location.metros.length > 0 && (
        <section className="section">
          <div className="container">
            <Reveal className="section-heading">
              <p className="eyebrow">
                <MiniMark /> Where the volume is
              </p>
              <h2>
                Metro coverage across{" "}
                <span className="hl">{location.name}</span>.
              </h2>
              <p>
                Support is delivered to businesses across the state. These are
                the metros that generate most of the contact volume.
              </p>
            </Reveal>
            <div className={`task-grid ${accent}`}>
              {location.metros.map((metro, metroIndex) => (
                <Reveal
                  as="article"
                  key={metro.name}
                  className="task-item"
                  delay={(metroIndex % 3) * 0.05}
                >
                  <span>{String(metroIndex + 1).padStart(2, "0")}</span>
                  <h3>{metro.name}</h3>
                  <p>{metro.note}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {location.deepDive && (
        <section className="section">
          <div className="container narrow deep-dive">
            {location.deepDive.map((block) => (
              <Reveal as="article" key={block.heading} className="deep-dive-block">
                <h2>{block.heading}</h2>
                {block.sections.map((item) => (
                  <div key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                ))}
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <CrossLinks
        items={location.crossLinks ?? DEFAULT_LOCATION_LINKS}
        eyebrow="Available from here"
        heading={
          <>
            Services delivered from{" "}
            <span className="hl">{location.name}</span>.
          </>
        }
      />

      <LeadCta
        heading={
          <>
            Get a coverage plan for {location.name},{" "}
            <span className="hl">not a sales call</span>.
          </>
        }
        intro={`Tell us the volume, hours, and channels you need covered and we will scope the team, reporting, and escalation rules around them.`}
        points={[
          `A scoped plan for ${location.name}`,
          "Coverage hours, team size, and reporting confirmed up front",
          "No obligation and no cost for the consultation",
        ]}
      />

      <FaqSection
        items={faq}
        heading={
          <>
            {location.name}, <span className="hl">answered directly</span>.
          </>
        }
        intro={`Common questions about ${isMarket ? `outsourcing customer contact in ${location.name}` : `outsourcing to ${location.name}`}.`}
        cta={false}
      />

      {related.length > 0 && (
        <section className="section">
          <div className="container">
            <Reveal className="section-heading">
              <p className="eyebrow">
                <MiniMark /> {isMarket ? "Other markets" : "Other locations"}
              </p>
              <h2>
                Compare <span className="hl">delivery options</span>.
              </h2>
            </Reveal>
            <div className="related-grid">
              {related.map((item) => (
                <Link
                  className="related-card"
                  key={item.slug}
                  href={`/locations/${item.slug}`}
                >
                  <strong>{item.name}</strong>
                  <span>→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
