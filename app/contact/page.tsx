import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { MiniMark } from "@/components/mini-mark";
import { LeadForm } from "@/components/lead-form";
import { SERVICE_NAMES } from "@/lib/services";

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
  title: { absolute: "Contact Business Process Outsourcing | Get a BPO Support Plan" },
  description:
    "Contact Business Process Outsourcing to discuss customer support, call center, technical support, back-office, data entry, or lead generation outsourcing.",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const { service } = await searchParams;
  const defaultService =
    service && SERVICE_NAMES.includes(service) ? service : "";

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal className="section-heading">
            <p className="eyebrow">
              <MiniMark /> Contact
            </p>
            <h1>
              <span className="hl">Get Started</span> with
              <br />
              Business Process Outsourcing.
            </h1>
          </Reveal>
          <div className="contact-layout">
            <Reveal as="div" className="contact-info">
              <h2>Ready to build a more efficient business process plan?</h2>
              <p>
                Tell us what you need outsourced. One of our representatives will
                follow up to answer your questions and map the right support plan.
              </p>
              <ul className="check-list">
                <li>Customer support and back-office needs</li>
                <li>Service coverage, team size, and timing</li>
                <li>Clear next steps after we review your request</li>
              </ul>
            </Reveal>
            <Reveal>
              <LeadForm variant="contact" defaultService={defaultService} />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
