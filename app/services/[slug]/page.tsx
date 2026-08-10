import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SvgIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { MiniMark } from "@/components/mini-mark";
import { SERVICE_IMAGES } from "@/lib/page-images";
import { SERVICES, getService } from "@/lib/services";
import { FaqSection } from "@/components/faq";
import { LeadCta } from "@/components/lead-cta";
import { CrossLinks } from "@/components/cross-links";
import { serviceFaq } from "@/lib/faq-content";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: { absolute: service.metaTitle },
    description: service.metaDescription,
    alternates: { canonical: `/services/${slug}` },
  };
}

export default async function ServiceDetail({ params }: Params) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const q = `/contact?service=${encodeURIComponent(service.name)}`;
  const related = service.related
    .map((r) => getService(r))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));
  const image = SERVICE_IMAGES[service.slug] ?? {
    src: service.heroImage,
    alt: service.heroImageAlt,
  };
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.metaDescription,
    provider: {
      "@type": "Organization",
      name: "Business Process Outsourcing",
      url: "https://businessprocessoutsourcing.info",
    },
    serviceType: `${service.name} outsourcing`,
    areaServed: "Global",
    url: `https://businessprocessoutsourcing.info/services/${service.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <section className={`page-hero service-detail-hero ${service.accent}`}>
        <div className="container page-hero-grid">
          <Reveal>
            <p className="eyebrow">
              <MiniMark /> Outsourced service
            </p>
            <h1>{service.name}</h1>
            <p>{service.heroDesc}</p>
            <Link className="btn btn-dark btn-large" href={q}>
              Discuss {service.name.toLowerCase()}
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
              <SvgIcon name={service.icon} />
            </div>
            <span className="floating-note note-a">Dedicated ownership</span>
            <span className="floating-note note-b">Flexible capacity</span>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-heading">
            <p className="eyebrow">
              <MiniMark /> What we handle
            </p>
            <h2>{service.tasksHeading}</h2>
            <p>
              Choose the tasks you need now and expand the scope when the workload
              changes.
            </p>
          </Reveal>
          <div className={`task-grid ${service.accent}`}>
            {service.tasks.map((task, i) => (
              <Reveal as="article" key={task.title} className="task-item" delay={(i % 3) * 0.05}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <h3>{task.title}</h3>
                <p>{task.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-section detail-section">
          <Reveal className="split-copy">
            <p className="eyebrow">
              <MiniMark /> Designed around you
            </p>
            <h2>{service.name} built around <span className="hl">your existing workflow</span>.</h2>
            <p>
              We adapt to your tools, communication rhythm, approvals, brand
              standards, and escalation process.
            </p>
            <ul className="check-list">
              <li>Clear task ownership and priorities</li>
              <li>Documented processes and access controls</li>
              <li>Regular reporting and performance check-ins</li>
              <li>Capacity that can grow with demand</li>
            </ul>
          </Reveal>
          <Reveal className="soft-panel detail-side-card">
            <h3>Best suited for</h3>
            <ul className="check-list">
              {service.bestSuited.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <Link className="btn btn-dark" href={q}>
              Build a support plan
              <SvgIcon name="arrow-right" />
            </Link>
          </Reveal>
        </div>
      </section>

      {service.deepDive && (
        <section className="section">
          <div className="container narrow deep-dive">
            {service.deepDive.map((block) => (
              <Reveal as="article" key={block.heading} className="deep-dive-block">
                <h2>{block.heading}</h2>
                {block.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {service.models && (
        <section className={`section ${service.accent}`}>
          <div className="container">
            <Reveal className="section-heading">
              <p className="eyebrow">
                <MiniMark /> Engagement models
              </p>
              <h2>
                Three ways to <span className="hl">structure the team</span>.
              </h2>
              <p>
                Most programmes use one of these, or a dedicated core with pooled
                coverage for overflow.
              </p>
            </Reveal>
            <div className="model-grid">
              {service.models.map((model, modelIndex) => (
                <Reveal
                  as="article"
                  key={model.name}
                  className="model-card"
                  delay={(modelIndex % 3) * 0.05}
                >
                  <h3>{model.name}</h3>
                  <p className="model-label">Best for</p>
                  <p>{model.bestFor}</p>
                  <p className="model-label">Trade-off</p>
                  <p className="model-tradeoff">{model.tradeoff}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {service.onboarding && (
        <section className="section">
          <div className="container">
            <Reveal className="section-heading">
              <p className="eyebrow">
                <MiniMark /> How launch works
              </p>
              <h2>
                From scope to live in <span className="hl">five steps</span>.
              </h2>
              <p>
                Most engagements begin within one to two weeks of confirming
                scope, tools, coverage hours, and escalation rules.
              </p>
            </Reveal>
            <ol className="onboarding-steps">
              {service.onboarding.map((step, stepIndex) => (
                <Reveal as="li" key={step.title} delay={(stepIndex % 3) * 0.05}>
                  <span className="onboarding-n">
                    {String(stepIndex + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.detail}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>
      )}

      {service.concerns && (
        <section className="section">
          <div className="container narrow">
            <Reveal className="section-heading">
              <p className="eyebrow">
                <MiniMark /> Before you commit
              </p>
              <h2>
                The objections worth <span className="hl">raising early</span>.
              </h2>
            </Reveal>
            <div className="concern-list">
              {service.concerns.map((concern, concernIndex) => (
                <Reveal
                  as="article"
                  key={concern.q}
                  className="concern-item"
                  delay={(concernIndex % 3) * 0.04}
                >
                  <h3>{concern.q}</h3>
                  <p>{concern.a}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {service.crossLinks && (
        <CrossLinks
          items={service.crossLinks}
          eyebrow="Where this runs"
          heading={
            <>
              Delivery, sectors, and <span className="hl">further reading</span>.
            </>
          }
        />
      )}

      <LeadCta
        defaultService={service.name}
        heading={
          <>
            Start with a {service.name.toLowerCase()} plan,{" "}
            <span className="hl">not a sales call</span>.
          </>
        }
        intro={`Tell us what your team is spending time on and we will scope the ${service.name.toLowerCase()} coverage, team size, and reporting that fits.`}
        points={[
          `A scoped ${service.name.toLowerCase()} plan for your workload`,
          "Coverage hours, team size, and tools confirmed up front",
          "No obligation and no cost for the consultation",
        ]}
      />

      <FaqSection
        items={serviceFaq(service)}
        heading={
          <>
            {service.name} outsourcing, <span className="hl">answered directly</span>.
          </>
        }
        intro={`Common questions about outsourcing ${service.name.toLowerCase()}.`}
        cta={false}
      />

      <section className="section">
        <div className="container">
          <Reveal className="section-heading">
            <p className="eyebrow">
              <MiniMark /> Related services
            </p>
            <h2>Related {service.name.toLowerCase()} and <span className="hl">outsourcing services</span>.</h2>
          </Reveal>
          <div className="related-grid">
            {related.map((r) => (
              <Link className="related-card" key={r.slug} href={`/services/${r.slug}`}>
                <strong>{r.name}</strong>
                <span>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
