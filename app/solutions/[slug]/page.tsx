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
import { FaqSection } from "@/components/faq";
import { LeadCta } from "@/components/lead-cta";
import { solutionFaq } from "@/lib/faq-content";
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
  return SOLUTIONS.map((solution) => ({ slug: slugify(solution.title) }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) return {};
  return {
    title: {
      absolute: solution.seoTitle ?? `${solution.title} Outsourcing Services`,
    },
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
  const imagePool = Object.values(SOLUTION_IMAGES);
  const secondaryImage = imagePool[(index + 1) % imagePool.length];
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
      <Breadcrumbs
        crumbs={[
          { name: "Solutions", path: "/solutions" },
          { name: solution.title, path: `/solutions/${slug}` },
        ]}
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
        <div className="container split-section detail-section">
          <Reveal className="split-copy">
            <p className="eyebrow">
              <MiniMark /> Why outsource this
            </p>
            <h2>Why companies outsource <span className="hl">{solution.title.toLowerCase()}</span>.</h2>
            <p>
              Building this in-house means hiring, training, scheduling, and
              managing people before you ever answer a customer. Outsourcing{" "}
              {solution.title.toLowerCase()} gives you a team that is already
              trained, already staffed, and already accountable to reporting and
              quality standards from day one.
            </p>
            <p>
              It also removes the cost of idle capacity. Instead of paying for a
              full-time hire during slow periods, you pay for coverage that flexes
              with call volume, order volume, or ticket volume as it actually
              happens.
            </p>
          </Reveal>
          <Reveal className="page-visual media-visual">
            <Image src={secondaryImage.src} alt={secondaryImage.alt} width={760} height={570} />
          </Reveal>
        </div>
      </section>

      <LeadCta
        heading={
          <>
            Get a {solution.title.toLowerCase()} plan,{" "}
            <span className="hl">not a sales call</span>.
          </>
        }
        intro={`Tell us how ${solution.title.toLowerCase()} needs to work for your customers and we will scope the coverage, team size, and reporting around it.`}
        points={[
          `A scoped ${solution.title.toLowerCase()} setup`,
          "Channels, hours, and escalation rules confirmed up front",
          "No obligation and no cost for the consultation",
        ]}
      />

      <FaqSection
        items={solutionFaq(solution)}
        heading={
          <>
            {solution.title} outsourcing, <span className="hl">answered directly</span>.
          </>
        }
        intro={`Common questions about outsourcing ${solution.title.toLowerCase()}.`}
        cta={false}
      />

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
