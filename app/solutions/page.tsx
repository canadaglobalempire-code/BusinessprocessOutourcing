import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { MiniMark } from "@/components/mini-mark";
import { SvgIcon } from "@/components/icons";
import { PAGE_IMAGES, SOLUTION_IMAGES, pageImage } from "@/lib/page-images";
import { SOLUTIONS } from "@/lib/solutions";
import { slugify } from "@/lib/industries";
import { FaqSection } from "@/components/faq";
import { SOLUTIONS_INDEX_FAQ } from "@/lib/faq-content";
import { Breadcrumbs } from "@/components/breadcrumbs";

export const metadata: Metadata = {
  alternates: { canonical: "/solutions" },
  title: { absolute: "Outsourcing Solutions | Phone, Email & Chat Support" },
  description:
    "Explore outsourcing solutions for phone support, email support, live chat, multilingual customer service, appointment setting, order processing, hotlines.",
};

const ACCENTS = [
  "accent-purple",
  "accent-green",
  "accent-orange",
  "accent-blue",
  "accent-yellow",
  "accent-pink",
];

export default function SolutionsPage() {
  return (
    <>
      <Breadcrumbs crumbs={[{ name: "Solutions", path: "/solutions" }]} />
      <section className="page-hero">
        <div className="container page-hero-grid">
          <Reveal>
            <p className="eyebrow">
              <MiniMark /> Solutions
            </p>
            <h1>Outsourcing solutions built around <span className="hl">your workflow</span>.</h1>
            <p>
              We support the daily work behind your customer experience: inbound
              calls, email support, live chat, help desk support, order
              processing, appointment setting, hotlines, and back-office
              operations.
            </p>
          </Reveal>
          <Reveal className="page-visual media-visual">
            <Image
              src={PAGE_IMAGES.solutions.src}
              alt={PAGE_IMAGES.solutions.alt}
              width={760}
              height={570}
              priority
            />
            <span className="floating-note note-a">One workflow</span>
            <span className="floating-note note-b">Many solutions</span>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="values-grid industry-grid">
            {SOLUTIONS.map((detail, index) => (
              <Reveal
                as="article"
                key={detail.title}
                className={`value-card industry-card ${ACCENTS[index % ACCENTS.length]}`}
                delay={(index % 3) * 0.05}
              >
                <div className="card-media">
                  <Image
                    src={pageImage(SOLUTION_IMAGES, slugify(detail.title), `${detail.title} outsourcing support`).src}
                    alt={pageImage(SOLUTION_IMAGES, slugify(detail.title), `${detail.title} outsourcing support`).alt}
                    fill
                    sizes="(max-width: 800px) 100vw, 33vw"
                  />
                  <span className="card-media-chip">
                    <SvgIcon name={detail.icon} />
                  </span>
                </div>
                <h3>{detail.title}</h3>
                <p>{detail.summary}</p>
                <ul className="check-list industry-list">
                  {detail.services.map((service) => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>
                <Link className="card-cta" href={`/solutions/${slugify(detail.title)}`}>
                  View solution <span>→</span>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="inline-cta">
            <span className="cta-orb">↗</span>
            <div>
              <strong>
                Ready to turn your outsourcing plan into a working team?
              </strong>
              <small>
                We can start with one support channel or combine several solutions
                into a managed customer care and operations team.
              </small>
            </div>
            <Link className="btn btn-dark" href="/contact">
              Get In Touch →
            </Link>
          </Reveal>
        </div>
      </section>

      <FaqSection items={SOLUTIONS_INDEX_FAQ} cta={false} />
    </>
  );
}
