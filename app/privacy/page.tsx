import type { Metadata } from "next";
import { MiniMark } from "@/components/mini-mark";

export const metadata: Metadata = {
  alternates: { canonical: "/privacy" },
  title: "Privacy Policy",
  description:
    "Privacy policy for Business Process Outsourcing, including contact form information, service enquiries, cookies, and data use.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">
            <MiniMark /> Legal
          </p>
          <h1>Privacy policy</h1>
          <p>
            This policy explains how Business Process Outsourcing handles
            information submitted through this website and related service
            enquiries.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="article-body">
          <h2>Information collected</h2>
          <p>
            The website may collect information submitted through contact forms,
            including names, email addresses, company information, service
            interests, phone numbers, and messages. Basic technical information
            may also be processed to keep the website secure and functioning.
          </p>
          <h2>How information is used</h2>
          <p>
            Information may be used to respond to enquiries, provide requested
            information, plan outsourced support services, improve the website,
            maintain security, and comply with applicable obligations.
          </p>
          <h2>Storage and service providers</h2>
          <p>
            Information may be handled by trusted service providers that support
            website hosting, form delivery, email, customer relationship
            management, analytics, or security. These providers should only use
            information as needed to support the requested business purpose.
          </p>
          <h2 id="cookies">Cookies</h2>
          <p>
            The website may use essential cookies or similar technologies for
            security and basic functionality. Analytics or advertising tools, if
            added, should be disclosed through an appropriate cookie notice.
          </p>
          <h2>Contact</h2>
          <p>
            To ask a privacy question or request an update to information you
            submitted, contact Business Process Outsourcing through the website
            contact form.
          </p>
        </div>
      </section>
    </>
  );
}
