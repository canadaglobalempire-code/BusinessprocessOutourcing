import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SvgIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { MiniMark } from "@/components/mini-mark";
import { PAGE_IMAGES, SERVICE_IMAGES, pageImage } from "@/lib/page-images";
import { SERVICES } from "@/lib/services";
import { FaqSection } from "@/components/faq";
import { SERVICES_INDEX_FAQ } from "@/lib/faq-content";
import { Breadcrumbs } from "@/components/breadcrumbs";

export const metadata: Metadata = {
  alternates: { canonical: "/services" },
  title: { absolute: "BPO Services | Customer Support & Back Office Outsourcing" },
  description:
    "Explore BPO services for customer support, virtual assistance, accounting support, digital marketing, e-commerce operations, content, IT help desk, data entry.",
};

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs crumbs={[{ name: "Services", path: "/services" }]} />
      <section className="page-hero">
        <div className="container page-hero-grid">
          <Reveal>
            <p className="eyebrow">
              <MiniMark /> Services
            </p>
            <h1>Business outsourcing services for <span className="hl">growing teams</span>.</h1>
            <p>
              Choose one BPO service or combine customer support, technical
              support, back-office, marketing, data entry, and lead generation
              into a flexible outsourced team.
            </p>
            <Link className="btn btn-dark btn-large" href="/contact">
              Build your support plan
              <SvgIcon name="arrow-right" />
            </Link>
          </Reveal>
          <Reveal className="page-visual media-visual">
            <Image
              src={PAGE_IMAGES.services.src}
              alt={PAGE_IMAGES.services.alt}
              width={640}
              height={480}
            />
            <span className="floating-note note-a">One partner</span>
            <span className="floating-note note-b">Multiple capabilities</span>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-heading">
            <p className="eyebrow">
              <span className="eyebrow-icon" aria-hidden="true">
                <SvgIcon name="workspace-grid" />
              </span>{" "}
              Outsourcing capabilities
            </p>
            <h2>BPO services for <span className="hl">customer support</span>, back office &amp; marketing.</h2>
            <p>
              Start with your biggest bottleneck, then add trained support as
              volume, coverage hours, and customer expectations grow.
            </p>
          </Reveal>
          <div className="service-grid">
            {SERVICES.map((service, index) => (
              <Reveal
                as="article"
                key={service.slug}
                className={`service-card ${service.accent}`}
                delay={(index % 4) * 0.05}
              >
                <div className="card-media">
                  <Image
                    src={pageImage(SERVICE_IMAGES, service.slug, `${service.name} outsourcing support`).src}
                    alt={pageImage(SERVICE_IMAGES, service.slug, `${service.name} outsourcing support`).alt}
                    fill
                    sizes="(max-width: 800px) 100vw, 33vw"
                  />
                  <span className="card-media-chip">
                    <SvgIcon name={service.icon} />
                  </span>
                </div>
                <h3>{service.name}</h3>
                <p>{service.short}</p>
                <Link className="card-cta" href={`/services/${service.slug}`}>
                  View service <span>→</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="values-grid">
            <Reveal as="article" className="value-card accent-purple">
              <div className="round-icon">
                <SvgIcon name="people" />
              </div>
              <h3>Choose the right team model</h3>
              <ul className="check-list industry-list">
                <li>Dedicated or shared support options</li>
                <li>Part-time, full-time, or task-based capacity</li>
                <li>One service or a combined team</li>
              </ul>
            </Reveal>
            <Reveal as="article" className="value-card accent-green" delay={0.05}>
              <div className="round-icon">
                <SvgIcon name="workspace-grid" />
              </div>
              <h3>Fit support around your workflow</h3>
              <ul className="check-list industry-list">
                <li>Coverage aligned to your business hours</li>
                <li>Workflows documented around your tools</li>
                <li>Regular performance and priority reviews</li>
              </ul>
            </Reveal>
            <Reveal as="article" className="value-card accent-orange" delay={0.1}>
              <div className="round-icon">
                <SvgIcon name="growth" />
              </div>
              <h3>Flexible by design</h3>
              <p>
                Add capabilities, expand coverage, or adjust scope as your
                customer demand and internal workload change.
              </p>
              <Link className="card-cta" href="/solutions">
                Explore all solutions <span>→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <FaqSection items={SERVICES_INDEX_FAQ} />
    </>
  );
}
