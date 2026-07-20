import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MiniMark } from "@/components/mini-mark";
import { Reveal } from "@/components/reveal";
import { SvgIcon } from "@/components/icons";
import { SOLUTION_IMAGES } from "@/lib/page-images";
import { slugify } from "@/lib/industries";
import { SOLUTIONS, getSolution } from "@/lib/solutions";

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
  return SOLUTIONS.map((solution) => ({ slug: slugify(solution.title) }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) return {};
  return {
    title: { absolute: `${solution.title} Outsourcing | Business Process Outsourcing` },
    description: solution.metaDescription,
    alternates: { canonical: `/solutions/${slug}` },
  };
}

export default async function SolutionDetail({ params }: Params) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) notFound();

  const index = SOLUTIONS.indexOf(solution);
  const accent = ACCENTS[index % ACCENTS.length];
  const contactUrl = `/contact?service=${encodeURIComponent(solution.title)}`;
  const related = SOLUTIONS.filter((item) => item !== solution).slice(0, 3);
  const image = SOLUTION_IMAGES[slugify(solution.title)] ?? {
    src: "/assets/img/service-customer-support.jpg",
    alt: `${solution.title} outsourcing support team helping customers`,
  };
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${solution.title} Outsourcing`,
    description: solution.metaDescription,
    provider: {
      "@type": "Organization",
      name: "Business Process Outsourcing",
      url: "https://businessprocessoutsourcing.info",
    },
    serviceType: `${solution.title} outsourcing`,
    areaServed: "Global",
    url: `https://businessprocessoutsourcing.info/solutions/${slugify(solution.title)}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <section className={`page-hero service-detail-hero ${accent}`}>
        <div className="container page-hero-grid">
          <Reveal>
            <p className="eyebrow">
              <MiniMark /> Outsourcing solution
            </p>
            <h1>{solution.title}</h1>
            <p>{solution.summary}</p>
            <Link className="btn btn-dark btn-large" href={contactUrl}>
              Discuss this solution
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
              <SvgIcon name={solution.icon} />
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
            <h2>Support areas for {solution.title.toLowerCase()}.</h2>
          </Reveal>
          <div className={`task-grid ${accent}`}>
            {solution.services.map((service, index) => (
              <Reveal as="article" key={service} className="task-item" delay={(index % 3) * 0.05}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{service}</h3>
                <p>Handled by trained BPO agents working from clear process notes, priorities, and quality checks.</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-section detail-section">
          <Reveal className="split-copy">
            <p className="eyebrow">
              <MiniMark /> Flexible delivery
            </p>
            <h2>Use one capability or combine it with a <span className="hl">larger team</span>.</h2>
            <p>
              We can support this as a focused service or connect it with phone,
              chat, back-office, and industry-specific workflows.
            </p>
          </Reveal>
          <Reveal className="soft-panel detail-side-card">
            <h3>How we keep it clear</h3>
            <ul className="check-list">
              <li>Defined scope and handoff rules</li>
              <li>Coverage matched to your business hours</li>
              <li>Regular reporting and priority reviews</li>
            </ul>
            <Link className="btn btn-dark" href={contactUrl}>
              Get solution support
              <SvgIcon name="arrow-right" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-heading">
            <p className="eyebrow">
              <MiniMark /> Related solutions
            </p>
            <h2>Related {solution.title.toLowerCase()} and <span className="hl">outsourcing solutions</span>.</h2>
          </Reveal>
          <div className="related-grid">
            {related.map((item) => (
              <Link className="related-card" key={item.title} href={`/solutions/${slugify(item.title)}`}>
                <strong>{item.title}</strong>
                <span>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
