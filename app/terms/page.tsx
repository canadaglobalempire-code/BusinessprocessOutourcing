import type { Metadata } from "next";
import { MiniMark } from "@/components/mini-mark";

export const metadata: Metadata = {
  alternates: { canonical: "/terms" },
  robots: { index: false, follow: true },
  title: "Website Terms",
  description:
    "Website terms for using the Business Process Outsourcing website and requesting information about outsourced support services.",
};

export default function TermsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">
            <MiniMark /> Legal
          </p>
          <h1>Website terms</h1>
          <p>
            These terms explain the basic conditions for using this website and
            requesting information from Business Process Outsourcing.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="article-body">
          <h2>Website use</h2>
          <p>
            Users may access the website for lawful informational and business
            enquiry purposes. Content may not be misused, copied at scale, or used
            to interfere with website operation, security, or availability.
          </p>
          <h2>Information and availability</h2>
          <p>
            Service information is general and does not create a binding offer.
            Final services, pricing, responsibilities, and terms are defined in a
            written agreement between Business Process Outsourcing and the client.
          </p>
          <h2>Intellectual property</h2>
          <p>
            Website content, brand materials, page designs, text, graphics, and
            related materials are owned by or licensed to Business Process
            Outsourcing and may not be reused without permission.
          </p>
          <h2>Limitation and jurisdiction</h2>
          <p>
            The website is provided for general business information. To the
            fullest extent allowed by applicable law, Business Process Outsourcing
            is not responsible for losses arising from misuse of the website or
            reliance on general website information without a written service
            agreement.
          </p>
          <h2>Contact</h2>
          <p>
            Questions about these terms can be sent through the Business Process
            Outsourcing contact form.
          </p>
        </div>
      </section>
    </>
  );
}
