import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MiniMark } from "@/components/mini-mark";
import { Reveal } from "@/components/reveal";
import { SvgIcon } from "@/components/icons";
import { LeadCta } from "@/components/lead-cta";
import {
  MARKET_LOCATIONS,
  DELIVERY_LOCATIONS,
  SPECIALTY_LOCATIONS,
} from "@/lib/locations";
import { PAGE_IMAGES } from "@/lib/page-images";

export const metadata: Metadata = {
  title: { absolute: "Call Center Outsourcing Locations | Business Process Outsourcing" },
  description:
    "Call center outsourcing across the markets we serve — the US, UK, Europe, and the UAE — and the locations we deliver from, including Mexico, the Philippines, Colombia, and India.",
  alternates: { canonical: "/locations" },
};

const GROUPS = [
  {
    key: "markets",
    eyebrow: "Markets we serve",
    heading: "Where your customers are.",
    intro:
      "Coverage built around the business hours, languages, and data expectations of the market you sell into.",
    items: MARKET_LOCATIONS,
  },
  {
    key: "delivery",
    eyebrow: "Where we deliver from",
    heading: "Where the work happens.",
    intro:
      "Choose delivery by what the programme needs — same-day overlap, round-the-clock coverage, language, or cost.",
    items: DELIVERY_LOCATIONS,
  },
  {
    key: "specialty",
    eyebrow: "Specialist programmes",
    heading: "Where a sector and a location meet.",
    intro:
      "Some combinations of industry and delivery location are established enough to be a category of their own. These are those.",
    items: SPECIALTY_LOCATIONS,
  },
];

export default function LocationsPage() {
  const hero = PAGE_IMAGES.industries;

  return (
    <>
      <section className="page-hero accent-blue">
        <div className="container page-hero-grid">
          <Reveal>
            <p className="eyebrow">
              <MiniMark /> Locations
            </p>
            <h1>Call center outsourcing, wherever you sell and wherever you deliver.</h1>
            <p>
              Two questions decide an outsourcing programme: which market your
              customers are in, and which delivery location fits the work. These
              pages cover both.
            </p>
            <Link className="btn btn-dark btn-large" href="/contact">
              Discuss coverage
              <SvgIcon name="arrow-right" />
            </Link>
          </Reveal>
          <Reveal className="page-visual">
            <div className="service-hero-media">
              <Image
                src={hero.src}
                alt={hero.alt}
                fill
                sizes="(max-width: 960px) 100vw, 44vw"
                priority
              />
            </div>
          </Reveal>
        </div>
      </section>

      {GROUPS.map((group) => (
        <section className="section" key={group.key}>
          <div className="container">
            <Reveal className="section-heading">
              <p className="eyebrow">
                <MiniMark /> {group.eyebrow}
              </p>
              <h2>{group.heading}</h2>
              <p>{group.intro}</p>
            </Reveal>
            <div className="content-grid">
              {group.items.map((location, index) => (
                <Reveal
                  as="article"
                  key={location.slug}
                  className="content-card"
                  delay={(index % 3) * 0.05}
                >
                  <h3>
                    <Link href={`/locations/${location.slug}`}>{location.name}</Link>
                  </h3>
                  <p>{location.summary}</p>
                  <Link className="text-link" href={`/locations/${location.slug}`}>
                    Read more
                    <SvgIcon name="arrow-right" />
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      <LeadCta
        heading={
          <>
            Not sure which location <span className="hl">fits your programme</span>?
          </>
        }
        intro="Tell us your volume, hours, and languages and we will tell you which delivery option makes sense — including when the answer is a split across two."
      />
    </>
  );
}
