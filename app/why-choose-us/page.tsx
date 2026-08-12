import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SvgIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { MiniMark } from "@/components/mini-mark";
import { PAGE_IMAGES } from "@/lib/page-images";
import { FaqSection } from "@/components/faq";
import { WHY_CHOOSE_US_FAQ } from "@/lib/faq-content";
import { Breadcrumbs } from "@/components/breadcrumbs";

export const metadata: Metadata = {
  alternates: { canonical: "/why-choose-us" },
  title: { absolute: "Why Choose Us | Reliable BPO Outsourcing Partner" },
  description:
    "Why companies choose Business Process Outsourcing for reliable customer support outsourcing, contact center services, technical support.",
};

const VALUES = [
  {
    title: "Hold Yourself to The Highest Expectations",
    icon: "target",
    accent: "accent-purple",
    description:
      "We are proud of our relationships with our customers and encourage open communication, transparency and excellence in our operations internally and with the people we do business with.",
  },
  {
    title: "Putting Ourselves in Our Clients Shoes",
    icon: "people",
    accent: "accent-orange",
    description:
      "We will always strive to understand the challenges our customers face on a daily basis and do our best to ensure that our goal always remains to help our customers find solutions that work.",
  },
  {
    title: "Positivity and Optimism Works",
    icon: "sparkle",
    accent: "accent-yellow",
    description:
      "We know that by remaining positive and encouraging our path to success is always more clear.",
  },
  {
    title: "Embracing Each Other",
    icon: "globe",
    accent: "accent-green",
    description:
      "Our company and the people who work here are supportive, respectful, truthful, and without prejudice. We embrace other cultures, genders, and beliefs to create a healthy and holistic work environment for everyone involved.",
  },
  {
    title: "Strive for Greatness",
    icon: "growth",
    accent: "accent-blue",
    description:
      "We will always work hard to make sure we are ahead of the game in terms of technology and best practices in the industry. Our skills will never run dry, will always remain relevant and leading edge.",
  },
  {
    title: "Act With Integrity",
    icon: "shield",
    accent: "accent-pink",
    description:
      "We do what we say we will do, take ownership of our work, and make decisions that protect the trust our clients place in us.",
  },
];

export default function WhyChooseUsPage() {
  return (
    <>
      <Breadcrumbs crumbs={[{ name: "Why Choose Us", path: "/why-choose-us" }]} />
      <section className="page-hero">
        <div className="container page-hero-grid">
          <Reveal>
            <p className="eyebrow">
              <MiniMark /> A partner you can trust
            </p>
            <h1>Why <span className="hl">choose</span> Business Process Outsourcing?</h1>
            <p>
              Choosing a BPO company means trusting another team with your
              customers, operations, and reputation. We take that responsibility
              seriously.
            </p>
            <p>
              Business Process Outsourcing operates under strict ethical guidelines
              which include how we conduct business with our clients. We want you to
              know that we see our clients as respected partners, and therefore
              strive to deliver the results you need, reduce the stress you face in
              your search for an outsourcing company, and give you the advice and
              expertise you can respect.
            </p>
          </Reveal>
          <Reveal className="page-visual media-visual">
            <Image
              src={PAGE_IMAGES["why-choose-us"].src}
              alt={PAGE_IMAGES["why-choose-us"].alt}
              width={760}
              height={570}
              priority
            />
            <span className="floating-note note-a">Trusted partner</span>
            <span className="floating-note note-b">Clear communication</span>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-heading">
            <p className="eyebrow">
              <MiniMark /> What guides our work
            </p>
            <h2>Our outsourcing core values</h2>
          </Reveal>
          <div className="benefit-list core-values-list">
            {VALUES.map((value, index) => (
              <Reveal
                as="article"
                key={value.title}
                className={`benefit-item ${value.accent}`}
                delay={(index % 2) * 0.05}
              >
                <span className="benefit-icon">
                  <SvgIcon name={value.icon} />
                </span>
                <div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="inline-cta">
            <span className="cta-orb">
              <SvgIcon name="chat" />
            </span>
            <div>
              <strong>Together we can do more.</strong>
              <small>Feel free to say hello.</small>
            </div>
            <Link className="btn btn-dark" href="/contact">
              Contact us
              <SvgIcon name="arrow-right" />
            </Link>
          </Reveal>
        </div>
      </section>

      <FaqSection items={WHY_CHOOSE_US_FAQ} cta={false} />
    </>
  );
}
