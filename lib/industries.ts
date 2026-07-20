export type Industry = {
  name: string;
  summary: string;
  metaDescription: string;
  seoTitle?: string;
  seoIntro?: string;
  seoBody?: {
    heading: string;
    paragraphs: string[];
  };
  serviceDetails?: Record<string, string>;
  services: string[];
};

export const INDUSTRIES: Industry[] = [
  {
    name: "Automotive",
    seoTitle: "Automotive Call Center Outsourcing for Dealers and OEMs",
    summary:
      "Outsourced automotive support for dealers, OEMs, service teams, customer inquiries, appointment scheduling, and follow-up.",
    metaDescription:
      "Outsource automotive call center support for dealerships, OEMs, service departments, customer inquiries, test drive scheduling, service appointments, and follow-up.",
    seoIntro:
      "Business Process Outsourcing helps automotive dealerships, OEM programs, and service departments manage customer calls, lead follow-up, appointment requests, campaign outreach, and post-sale communication without adding internal headcount.",
    seoBody: {
      heading: "Automotive BPO support built for high-intent customer moments.",
      paragraphs: [
        "Automotive customers often contact your business when they are ready to book a test drive, compare vehicles, ask about service, check repair timing, or respond to a campaign. Slow response times can mean missed appointments, lost leads, and lower customer satisfaction.",
        "Our automotive outsourcing team supports inbound and outbound communication with documented workflows, escalation rules, reporting, and quality checks. Use the team for overflow call center coverage, dealer support, service scheduling, customer care, lead qualification, and follow-up campaigns.",
      ],
    },
    serviceDetails: {
      "Reach more potential customers":
        "Support outbound automotive campaigns, lead follow-up, and customer outreach so your sales team can focus on qualified conversations.",
      "Connect customers to dealers and OEMs":
        "Route customer inquiries to the right dealer, OEM program, service team, or sales contact with clear handoff notes.",
      "Answer customer queries quickly":
        "Handle common questions about vehicles, availability, pricing, financing, service timing, warranties, and next steps.",
      "Target outbound messaging campaigns":
        "Run structured outbound support for promotions, service reminders, recalls, appointment confirmations, and retention campaigns.",
      "Schedule test drives and service appointments":
        "Book test drives, service visits, repair appointments, and follow-up calls while keeping calendars and CRM records updated.",
      "Support customer follow-up after purchase":
        "Keep post-sale communication moving with satisfaction calls, review requests, onboarding notes, and service reminders.",
    },
    services: [
      "Reach more potential customers",
      "Connect customers to dealers and OEMs",
      "Answer customer queries quickly",
      "Target outbound messaging campaigns",
      "Schedule test drives and service appointments",
      "Support customer follow-up after purchase",
    ],
  },
  {
    name: "Government Services",
    summary:
      "Citizen support, surveys, alerts, email campaigns, and information-line coverage for public-sector programs.",
    metaDescription:
      "Outsource government service support for citizen information lines, surveys, emergency alerts, social messaging, and after-hours handling.",
    services: [
      "Social messaging",
      "Email campaigns",
      "Inbound and outbound survey support",
      "National emergency alerts",
      "Citizen information line support",
      "After-hours message handling",
    ],
  },
  {
    name: "Travel and Hospitality",
    summary:
      "Guest support for reservations, cancellations, loyalty programs, social moderation, retention, and travel changes.",
    metaDescription:
      "Outsource travel and hospitality support for reservations, cancellations, loyalty programs, guest feedback, and customer retention.",
    services: [
      "Reservations",
      "Lead generation",
      "Social media moderation of your brand",
      "Customer retention and win-back",
      "Loyalty and reward program management",
      "Digital and traditional marketing",
      "Sales and lead generation",
      "Guest feedback follow-up",
      "Travel change and cancellation support",
    ],
  },
  {
    name: "Airlines",
    summary:
      "Airline support for reservations, refunds, baggage inquiries, mobile check-ins, disruption communication, and customer care.",
    metaDescription:
      "Outsource airline call center support for reservations, refunds, baggage inquiries, flight disruption communication, and customer care.",
    services: [
      "Crisis management",
      "Customer care",
      "Mobile check-ins",
      "VRU",
      "Claims and refunds",
      "Technical support",
      "Reservation systems",
      "Baggage inquiry support",
      "Flight disruption communication",
    ],
  },
  {
    name: "Healthcare",
    summary:
      "Healthcare customer support for patient inquiries, appointment reminders, communication services, and demand spikes.",
    metaDescription:
      "Outsource healthcare call center support for patient inquiries, appointment reminders, communication services, and fast response coverage.",
    services: [
      "Boost your healthcare customer support",
      "Adapt and scale to the critical spikes in demand for fast responses",
      "Improve your patient experience",
      "Provide accurate communication services to your patients",
      "Appointment reminder support",
      "Patient inquiry triage",
    ],
  },
  {
    name: "Retail",
    summary:
      "Retail support for order taking, refunds, returns, disputes, retention, upsells, cross-sells, and order status calls.",
    metaDescription:
      "Outsource retail customer support for order taking, refunds, returns, customer disputes, retention, upsells, and order status support.",
    services: [
      "Increase your order taking 24/7",
      "Process refunds and returns quickly",
      "Settle customer disputes",
      "Improve customer retention",
      "Upsell and cross-sell",
      "Order status support",
    ],
  },
  {
    name: "Cable and Media",
    summary:
      "Cable and media support for billing, collections, customer care, sales, equipment troubleshooting, and technical help desk coverage.",
    metaDescription:
      "Outsource cable and media support for billing, collections, customer care, sales, equipment troubleshooting, and technical support.",
    services: [
      "Billing and collection support",
      "Sales",
      "Customer care",
      "Cable and equipment trouble shooting",
      "Back office functions",
      "HSD Tier 1, Tier 2, Tier3 technical support",
    ],
  },
  {
    name: "Ecommerce",
    summary:
      "Ecommerce support for customer acquisition, order processing, product inquiries, cart recovery, shipping, refunds, and maintenance.",
    metaDescription:
      "Outsource ecommerce support for order processing, customer acquisition, product inquiries, cart recovery, shipping, refunds, and store maintenance.",
    services: [
      "Customer acquisition",
      "Order Placement & Processing",
      "Query management",
      "Web design and digital ad campaigns",
      "SEO & Social Media",
      "Sales, Refunds and customer maintenance",
      "Shipping",
      "Cart recovery follow-up",
      "Product inquiry support",
    ],
  },
  {
    name: "Insurance",
    summary:
      "Insurance support for inbound and outbound sales, policy inquiries, renewals, claims status, upsells, and cross-sells.",
    metaDescription:
      "Outsource insurance call center support for policy inquiries, claims status, renewals, inbound sales, outbound sales, upsells, and cross-sells.",
    services: [
      "Inbound and outbound insurance sales",
      "Cross-sell and upsell insurance features",
      "Warranty and insurance policy inquiries",
      "Automated claims submissions",
      "Policy renewal reminders",
      "Claim status support",
    ],
  },
  {
    name: "Technology",
    summary:
      "Technology support for help desk, 24/7 technical support, onboarding, ticket triage, knowledge bases, and customer success.",
    metaDescription:
      "Outsource technology support for 24/7 technical support, customer help desk, ticket triage, onboarding, and knowledge base support.",
    services: [
      "24/7 technical support",
      "Customer helpdesk",
      "Upsell and cross-sell services",
      "Software and platform onboarding",
      "Tier 1 ticket triage",
      "Knowledge base support",
    ],
  },
  {
    name: "Disaster and Emergency Call Centers",
    summary:
      "Emergency call center support for disaster hotlines, incident intake, crisis information, weather events, and rapid scaling.",
    metaDescription:
      "Outsource disaster and emergency call center support for crisis hotlines, weather events, incident intake, emergency notifications, and rapid scaling.",
    services: [
      "Provide critical information during any crisis",
      "Scale your disaster hotline and emergency support fast",
      "Weather and natural disaster call center hotlines",
      "24/7 inbound emergency and disaster call centers",
      "Emergency outbound notifications",
      "Incident intake and routing",
    ],
  },
  {
    name: "Energy and Utilities",
    summary:
      "Utility support for demand spikes, billing inquiries, payment arrangements, outage updates, connection processing, and collections.",
    metaDescription:
      "Outsource energy and utility call center support for billing inquiries, payment arrangements, outage updates, collections, and demand spikes.",
    services: [
      "Manage spikes in customer demands",
      "Credit management including collections and payment arrangements",
      "Customer management including fee reversals, balance inquiries and billing inquiries",
      "Customer acquisition including connection processing and insurance referrals",
      "Outage and service update support",
      "Meter reading inquiry support",
    ],
  },
  {
    name: "Banking and Financial Services",
    summary:
      "Banking and financial services support for customer care, account activations, payment questions, product sales, and multilingual support.",
    metaDescription:
      "Outsource banking and financial services support for customer care, account activations, product sales, payment inquiries, and multilingual support.",
    services: [
      "Customer care",
      "Account activations",
      "Product sales",
      "Upsell and cross-sell",
      "Multilingual support",
      "Payment and billing inquiry support",
    ],
  },
  {
    name: "Telecommunications",
    summary:
      "Telecom support for billing, customer care, collections, equipment troubleshooting, retention, upgrades, and sales support.",
    metaDescription:
      "Outsource telecommunications support for billing, customer care, collections, equipment troubleshooting, plan upgrades, and retention.",
    services: [
      "Billing support",
      "Customer care",
      "Collections",
      "Pre- and post-sales support",
      "Equipment troubleshooting and repair",
      "Plan upgrade and retention support",
    ],
  },
  {
    name: "Real Estate",
    summary:
      "Real estate support for property inquiries, lead qualification, appointment scheduling, tenant communication, and maintenance intake.",
    metaDescription:
      "Outsource real estate support for property inquiries, lead qualification, appointment scheduling, tenant communication, and maintenance requests.",
    services: [
      "Property inquiry support",
      "Lead qualification",
      "Appointment scheduling",
      "Tenant and owner communication",
      "Listing information support",
      "Maintenance request intake",
    ],
  },
];

export function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function getIndustry(slug: string) {
  return INDUSTRIES.find((industry) => slugify(industry.name) === slug);
}
