import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://businessprocessoutsourcing.info"),
  title: {
    default: "Business Process Outsourcing | Call Center & Back Office Support",
    template: "%s - Business Process Outsourcing",
  },
  description:
    "Business Process Outsourcing provides outsourced call center, customer support, technical support, data entry, back-office, and lead generation services for growing companies.",
  keywords: [
    "business process outsourcing",
    "BPO services",
    "call center outsourcing",
    "customer support outsourcing",
    "back office outsourcing",
    "technical support outsourcing",
    "data entry outsourcing",
    "lead generation outsourcing",
  ],
  openGraph: {
    title: "Business Process Outsourcing | Call Center & Back Office Support",
    description:
      "Outsourced call center, customer support, technical support, data entry, back-office, and lead generation services.",
    url: "https://businessprocessoutsourcing.info",
    siteName: "Business Process Outsourcing",
    type: "website",
    images: [
      {
        url: "/assets/img/services-overview.jpg",
        width: 1200,
        height: 630,
        alt: "Business Process Outsourcing support team reviewing work together",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Process Outsourcing | Call Center & Back Office Support",
    description:
      "Outsourced call center, customer support, technical support, data entry, back-office, and lead generation services.",
    images: ["/assets/img/services-overview.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://businessprocessoutsourcing.info/#organization",
      name: "Business Process Outsourcing",
      url: "https://businessprocessoutsourcing.info",
      logo: "https://businessprocessoutsourcing.info/icon.png",
      description:
        "Business Process Outsourcing provides outsourced call center, customer support, technical support, data entry, back-office, and lead generation services.",
      areaServed: "Global",
      serviceType: [
        "Business process outsourcing",
        "Call center outsourcing",
        "Customer support outsourcing",
        "Technical support outsourcing",
        "Back-office outsourcing",
        "Data entry outsourcing",
        "Lead generation outsourcing",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://businessprocessoutsourcing.info/#website",
      url: "https://businessprocessoutsourcing.info",
      name: "Business Process Outsourcing",
      publisher: {
        "@id": "https://businessprocessoutsourcing.info/#organization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={inter.variable}
      id="top"
      data-scroll-behavior="smooth"
    >
      <body>
        {/* No-JS fallback: reveal animations start at opacity:0, so make
            content visible if the animation library never hydrates. */}
        <noscript>
          <style>{`[style*="opacity:0"],[style*="opacity: 0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
