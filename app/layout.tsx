import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ModalProvider } from "@/components/modal";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://businessprocessoutsourcing.info"),
  verification: {
    google: "zVuKAWJs1nU23vAO-7188SOub_AadTuqan2-RXvafk0",
  },
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
        <Script id="clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "xpgvj7fywe");`}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CDQ3NZYHG2"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CDQ3NZYHG2');`}
        </Script>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <ModalProvider>
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
        </ModalProvider>
      </body>
    </html>
  );
}
