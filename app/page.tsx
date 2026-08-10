import { Fragment } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SvgIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { MiniMark } from "@/components/mini-mark";
import { FaqSection } from "@/components/faq";
import { HOME_FAQ } from "@/lib/faq-content";
import { SERVICES } from "@/lib/services";
import { SERVICE_IMAGES, pageImage } from "@/lib/page-images";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  title: { absolute: "Business Process Outsourcing | Call Center & Back Office Support" },
  description:
    "Outsource customer support, call center operations, technical support, data entry, back-office work, and lead generation with flexible BPO teams.",
};

const HERO_TILES = [
  { src: "/assets/img/work-dashboard.webp", alt: "Outsourced work dashboard" },
  { src: "https://images.unsplash.com/photo-1553775282-20af80779df7?auto=format&fit=crop&w=1000&q=80", alt: "Customer support headset at an agent workstation" },
  { src: "/assets/img/visibility-card.webp", alt: "Task visibility card" },
  { src: "/assets/img/team-updates.webp", alt: "Team updates card" },
  { src: "/assets/img/services-overview.jpg", alt: "Outsourced support team reviewing work together" },
];

const STEPS = [
  {
    accent: "accent-purple",
    icon: "chat",
    n: "01",
    title: "It starts with a call",
    desc: "We discuss your needs, challenges, timeline, hours, and the number of agents your program may require.",
  },
  {
    accent: "accent-green",
    icon: "people",
    n: "02",
    title: "We create a strategy",
    desc: "Your project manager maps the process, prepares the systems, and trains agents around your brand.",
  },
  {
    accent: "accent-orange",
    icon: "growth",
    n: "03",
    title: "We launch your plan",
    desc: "Your team starts work with ongoing quality control, analytics, and progress reporting.",
  },
];

const BENEFITS = [
  { accent: "accent-purple", icon: "target", title: "5,000+ agents", desc: "Professional agents available 24/7." },
  { accent: "accent-green", icon: "shield", title: "365-day support", desc: "We work for you every day of the year." },
  { accent: "accent-orange", icon: "growth", title: "Built for efficiency", desc: "Cost, process, and time efficient." },
  { accent: "accent-blue", icon: "lock", title: "Quality assured", desc: "Advanced technology and quality assurance." },
  { accent: "accent-yellow", icon: "globe", title: "Multilingual teams", desc: "Serve your customers around the world." },
  { accent: "accent-pink", icon: "smile", title: "20+ years", desc: "Experience across multiple industries." },
];

const WORKFLOW = [
  { accent: "accent-purple", img: "/assets/img/workflow-1.webp", alt: "Sharing business needs", icon: "chat", n: "01", title: "Tell us your needs", desc: "Share your tasks, goals, and customer experience requirements." },
  { accent: "accent-green", img: "/assets/img/workflow-2.webp", alt: "Finding the right professional", icon: "people", n: "02", title: "We find the right fit", desc: "We align the right professionals to your processes and industry." },
  { accent: "accent-orange", img: "/assets/img/workflow-3.webp", alt: "Virtual professional at work", icon: "monitor", n: "03", title: "Your team gets ready", desc: "Systems, brand standards, and training are prepared for launch." },
  { accent: "accent-blue", img: "/assets/img/workflow-4.webp", alt: "Task tracking dashboard", icon: "growth", n: "04", title: "Track and collaborate", desc: "Quality checks and reporting keep performance visible." },
  { accent: "accent-lilac", img: "/assets/img/workflow-5.webp", alt: "Business owner achieving more", icon: "check-circle", n: "05", title: "Achieve more", desc: "Scale support while your internal team focuses on growth." },
];

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="container">
          <Reveal className="hero-copy">
            <h1>
              Everything your business{" "}
              <span className="hl">needs</span> in one place
            </h1>
            <p className="hero-sub">Call center, back-office, and business process outsourcing</p>
            <Link className="btn btn-dark btn-large" href="/contact">
              Get started today
              <SvgIcon name="arrow-right" />
            </Link>
            <p className="hero-micro">24/7 customer support, data processing, help desk, and sales support teams</p>
          </Reveal>

          <div className="hero-mosaic" aria-label="Business process outsourcing preview">
            {HERO_TILES.map((tile, index) => (
              <Reveal as="div" key={tile.src} className="hero-tile" delay={index * 0.06}>
                <Image src={tile.src} alt={tile.alt} width={520} height={520} priority={index < 2} />
                {index === 4 && (
                  <Link className="play-chip" href="/how-it-works">
                    <span className="play-dot">▶</span> See how it works
                  </Link>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <Reveal className="section-heading">
            <p className="eyebrow">
              <span className="eyebrow-icon" aria-hidden="true">
                <SvgIcon name="workspace-grid" />
              </span>{" "}
              BPO services
            </p>
            <h2>
              Outsource <span className="hl">customer support</span>, back-office,
              <br />
              and data entry work.
            </h2>
            <p>
              Build a flexible outsourcing team for customer service, virtual assistance,
              accounting support, e-commerce operations, content, technical support,
              data entry, and lead generation.
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
          <Reveal className="centered-cta">
            <Link className="btn btn-outline" href="/solutions">
              View all BPO solutions
              <SvgIcon name="arrow-right" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section process-overview" id="how-it-works">
        <div className="container">
          <Reveal className="section-heading">
            <p className="eyebrow">
              <MiniMark /> Simple process
            </p>
            <h2>
              How Business Process
              <br />
              Outsourcing <span className="hl">works for you</span>.
            </h2>
            <p>Getting it right the first time starts with a clear plan.</p>
          </Reveal>
          <div className="three-steps">
            {STEPS.map((step, index) => (
              <Fragment key={step.n}>
                <Reveal as="article" className={`step-card ${step.accent}`}>
                  <span className="step-number">{step.n}</span>
                  <div className="round-icon">
                    <SvgIcon name={step.icon} />
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </Reveal>
                {index < STEPS.length - 1 && <span className="step-arrow" />}
              </Fragment>
            ))}
          </div>
          <div className="center" style={{ marginTop: 46 }}>
            <Link className="btn btn-dark btn-large" href="/how-it-works">
              See the complete process
            </Link>
          </div>
        </div>
      </section>

      <section className="section" id="benefits">
        <div className="container">
          <Reveal className="section-heading">
            <p className="eyebrow">
              <MiniMark /> Built for changing times
            </p>
            <h2>Real <span className="hl">solutions</span> for business process challenges.</h2>
            <p>
              Improve customer care, reduce operational pressure, and save money
              with skilled agents supporting your customers and internal workflows
              24/7/365.
            </p>
          </Reveal>
          <div className="benefits-layout">
            <Reveal className="benefit-visual">
              <Image src="/assets/img/benefits-visual.webp" alt="Business owner working with outsourcing support" width={760} height={720} />
            </Reveal>
            <div className="benefit-list">
              {BENEFITS.map((benefit, index) => (
                <Reveal as="article" key={benefit.title} className={`benefit-item ${benefit.accent}`} delay={(index % 2) * 0.05}>
                  <span className="benefit-icon">
                    <SvgIcon name={benefit.icon} />
                  </span>
                  <div>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal className="inline-cta">
            <span className="cta-orb">
              <SvgIcon name="sparkle" />
            </span>
            <div>
              <strong>Ready to improve your business process management?</strong>
              <small>Talk to us about customer care, back-office, help desk, and sales support.</small>
            </div>
            <Link className="btn btn-purple" href="/contact">
              Get In Touch →
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-heading section-heading-wide">
            <p className="eyebrow">
              <MiniMark /> Who are WE?
            </p>
            <h2>
              Outsourcing experience across <span className="hl">industries</span>,
              <br />
              built around each customer.
            </h2>
            <p>
              From healthcare and telecommunications to travel, ecommerce,
              financial services, utilities, government services, and emergency
              response, we provide outsourced teams trained around each workflow.
            </p>
            <p>
              Over 20 years in the industry has taught us that a gold standard of
              service is never a cookie-cutter approach.
            </p>
          </Reveal>
          <div className="workflow-grid">
            {WORKFLOW.map((step, index) => (
              <Reveal as="article" key={step.n} className={`workflow-step ${step.accent}`} delay={(index % 5) * 0.04}>
                <div className="photo">
                  <Image src={step.img} alt={step.alt} width={620} height={490} />
                </div>
                <span className="workflow-number">{step.n}</span>
                <div className="workflow-icon">
                  <SvgIcon name={step.icon} />
                </div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="inline-cta">
            <span className="cta-orb">↗</span>
            <div>
              <strong>Only the Best for the Best.</strong>
              <small>Talk to us today about your business processing needs.</small>
            </div>
            <Link className="btn btn-purple" href="/about-us">
              About us →
            </Link>
          </Reveal>
        </div>
      </section>

      <FaqSection
        items={HOME_FAQ}
        heading={
          <>
            Outsourcing questions,
            <br />
            <span className="hl">answered clearly</span>.
          </>
        }
        intro="Everything you need to know before outsourcing with us."
      />
    </>
  );
}
