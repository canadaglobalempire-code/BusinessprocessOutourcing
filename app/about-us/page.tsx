import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SvgIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { MiniMark } from "@/components/mini-mark";
import { PAGE_IMAGES } from "@/lib/page-images";
import { FaqSection } from "@/components/faq";
import { ABOUT_FAQ } from "@/lib/faq-content";
import { Breadcrumbs } from "@/components/breadcrumbs";

export const metadata: Metadata = {
  alternates: { canonical: "/about-us" },
  title: { absolute: "About Business Process Outsourcing | BPO Partner Since 2000" },
  description:
    "Learn about Business Process Outsourcing, a BPO and contact center outsourcing partner helping companies reduce pressure, improve customer care.",
};

const STATEMENTS = [
  { title: "We know your concerns", icon: "shield", accent: "accent-purple" },
  { title: "We know your challenges", icon: "target", accent: "accent-orange" },
  { title: "We have the solutions", icon: "check-circle", accent: "accent-green" },
];

export default function AboutUsPage() {
  return (
    <>
      <Breadcrumbs crumbs={[{ name: "About Us", path: "/about-us" }]} />
      <section className="page-hero">
        <div className="container page-hero-grid">
          <Reveal>
            <p className="eyebrow">
              <MiniMark /> Business Process Outsourcing
            </p>
            <h1>A business process outsourcing <span className="hl">partner</span> since 2000.</h1>
            <p>
              Since 2000 Business Process Outsourcing has operated by the motto
              “Only the Best for the Best.” We started this company with the goal
              of creating an easy, economical, and stress-free outsourcing solution
              for companies that need dependable customer care, call center,
              technical support, and back-office help. Our company is operated by
              experienced professionals who understand the contact center industry.
            </p>
          </Reveal>
          <Reveal className="page-visual media-visual">
            <Image
              src={PAGE_IMAGES.about.src}
              alt={PAGE_IMAGES.about.alt}
              width={760}
              height={570}
              priority
            />
            <span className="floating-note note-a">Since 2000</span>
            <span className="floating-note note-b">Experienced teams</span>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="values-grid">
            {STATEMENTS.map((statement, index) => (
              <Reveal
                as="article"
                key={statement.title}
                className={`value-card ${statement.accent}`}
                delay={index * 0.05}
              >
                <div className="round-icon">
                  <SvgIcon name={statement.icon} />
                </div>
                <h3>{statement.title}</h3>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-section">
          <Reveal className="split-copy">
            <p>
              Let’s face it, there are a lot of fancy websites out there and their
              companies do sound great – but are they? How would you know? You need
              to have a reliable and trustworthy relationship with a company you
              know will do the work you need done quickly, efficiently, and at a
              fair price.
            </p>
            <p>
              Business Process Outsourcing is truly a leader in our industry. We
              operate to succeed when you succeed. Isn’t that what a great business
              relationship is all about?
            </p>
            <p>
              We provide business process services to some of the biggest names in
              healthcare, telecommunications and wireless services, computer
              hardware, gaming, entertainment, travel, financial services, retail,
              ecommerce, sports, and beyond.
            </p>
            <Link className="btn btn-dark" href="/contact">
              Get started today
              <SvgIcon name="arrow-right" />
            </Link>
          </Reveal>
          <Reveal className="page-visual media-visual">
            <Image
              src={PAGE_IMAGES["why-choose-us"].src}
              alt={PAGE_IMAGES["why-choose-us"].alt}
              width={760}
              height={570}
            />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container split-section">
          <Reveal className="split-copy">
            <p className="eyebrow">
              <MiniMark /> The right outsourced team
            </p>
            <h2>Helping you find the right outsourcing solution</h2>
            <p>
              We know you are looking for the right outsourced team to provide
              sales support, technical support, customer care, and back-office
              functions on your behalf. You need a multi-channel approach to
              creating personalized customer experiences, and you need to trust
              the company speaking with your customers.
            </p>
            <p>
              We strive to better understand our clients’ competitive and market
              challenges so we can play a more effective role as a trusted partner,
              building customer loyalty and reducing total cost of ownership though
              actionable improvement efforts.
            </p>
            <Link className="btn btn-dark" href="/contact">
              Contact us
              <SvgIcon name="arrow-right" />
            </Link>
          </Reveal>
          <Reveal className="page-visual media-visual">
            <Image
              src={PAGE_IMAGES["how-it-works"].src}
              alt={PAGE_IMAGES["how-it-works"].alt}
              width={760}
              height={570}
            />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container split-section">
          <Reveal className="split-copy">
            <p className="eyebrow">
              <MiniMark /> Built around your needs
            </p>
            <h2 className="h2-tight">Budget Sensitive{" –"} Time Sensitive{" –"} Industry Sensitive</h2>
            <p>
              Outsourcing can save time and money when hiring, recruiting,
              training, and management are slowing your team down. With Business
              Process Outsourcing, you can launch support quickly, scale up or down
              as needed, and manage customer needs faster. We also recognize
              industry-sensitive needs in healthcare, government, finance,
              utilities, emergency response, and other regulated or high-pressure
              environments.
            </p>
          </Reveal>
          <Reveal className="page-visual media-visual">
            <Image
              src={PAGE_IMAGES.solutions.src}
              alt={PAGE_IMAGES.solutions.alt}
              width={760}
              height={570}
            />
          </Reveal>
        </div>
      </section>

      <FaqSection items={ABOUT_FAQ} />
    </>
  );
}
