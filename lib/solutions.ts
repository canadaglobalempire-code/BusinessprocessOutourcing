import { slugify } from "./industries";

export type Solution = {
  title: string;
  /** Overrides the <title> tag without changing the URL slug or display name. */
  seoTitle?: string;
  summary: string;
  metaDescription: string;
  services: string[];
  /**
   * One sentence per entry in `services`, keyed by the entry. Rendered in
   * place of the generic template line. Only the pages measured thin enough
   * to stall in Bing's crawl queue carry these; add more as pages are written.
   */
  details?: Record<string, string>;
  /** An extra section of page-specific copy, rendered only when present. */
  body?: { heading: string; paragraphs: string[] };
  icon: string;
};

export const SOLUTIONS: Solution[] = [
  {
    title: "Multilingual Support",
    seoTitle: "Multilingual Call Center Outsourcing Services",
    summary:
      "Multilingual call center outsourcing for companies serving callers, shoppers, patients, and users across several language markets.",
    metaDescription:
      "Multilingual call center outsourcing: live agents across several languages on one queue, multilingual customer support and help desk coverage.",
    services: [
      "Live coverage across several languages",
      "Multilingual customer support and help desk",
      "Bilingual agents on the same queue",
      "One service standard in every language",
      "Coverage that flexes by market",
    ],
    details: {
      "Live coverage across several languages":
        "Each language is staffed on its own hours, so a Spanish queue and an English queue are both answered during their own business day rather than one region's.",
      "Multilingual customer support and help desk":
        "Tier-one support and help desk tickets handled in the customer's language, with technical escalations passed to your team in English with a translated summary attached.",
      "Bilingual agents on the same queue":
        "Agents who hold two languages take contacts from both queues, which keeps low-volume languages covered without a dedicated seat sitting idle.",
      "One service standard in every language":
        "The same scripts, quality scorecard, and escalation rules are translated and applied per language, so a review in Portuguese is scored against the same rubric as one in English.",
      "Coverage that flexes by market":
        "Hours and headcount are set per language market and adjusted as volume shifts; a product launch in one country does not mean re-staffing every other queue.",
    },
    body: {
      heading: "How a multilingual queue is set up",
      paragraphs: [
        "Language routing comes first. Callers and chats are identified by IVR selection, site locale, or the language of the first message, and land with an agent who works in that language instead of being transferred after a greeting. Where a language has too little volume for a dedicated seat it is folded into a bilingual pool with a defined fallback language.",
        "Quality is measured per language, not per programme. Each language has its own reviewer, its own weekly sample of scored contacts, and its own translated knowledge base, so a tone or accuracy problem in one market shows on its own line in reporting instead of being averaged away.",
        "Reporting is delivered in one language of your choice, with volume, handle time, and satisfaction broken out by market, so you can see which languages are growing and where coverage hours should move next.",
      ],
    },
    icon: "globe",
  },
  {
    title: "Phone Support",
    summary:
      "Inbound and outbound phone support for customer care, sales questions, order help, returns, and everyday call volume.",
    metaDescription:
      "Outsource phone support for inbound calls, customer care, product questions, purchasing support, returns, exchanges, and problem solving.",
    services: [
      "Complete customer care",
      "Product questions and purchasing support",
      "Returns, exchanges, and problem solving",
    ],
    icon: "customer-support",
  },
  {
    title: "Chat and Social Media",
    summary:
      "Live chat and social media support that keeps customers answered quickly across public and private channels.",
    metaDescription:
      "Outsource live chat and social media support for 24/7 chat coverage, message management, and fast customer responses.",
    services: [
      "24/7 chat support",
      "Public and private message management",
      "Fast responses across social channels",
    ],
    icon: "chat",
  },
  {
    title: "Email Support",
    summary:
      "High-volume email and ticket support for customer questions, order updates, policy replies, and trained responses.",
    metaDescription:
      "Outsource email support for high-volume inbox handling, order status questions, policy support, and trained customer responses.",
    services: [
      "High-volume email handling",
      "Order status and policy support",
      "Quick, trained customer responses",
    ],
    icon: "monitor",
  },
  {
    title: "Click-To-Call",
    summary:
      "Callback support that reduces missed opportunities and connects interested customers with live agents faster.",
    metaDescription:
      "Outsource click-to-call and callback support to reduce hold-time frustration and follow up quickly with interested customers.",
    services: [
      "Customer callback requests",
      "Reduced hold-time frustration",
      "Fast follow-up from live agents",
    ],
    icon: "customer-support",
  },
  {
    title: "Financial and Accounting Services",
    summary:
      "Back-office finance support for companies that need organized accounting help without adding internal load.",
    metaDescription:
      "Outsource financial and accounting services for bookkeeping assistance, back-office finance support, and cost-efficient accounting help.",
    services: [
      "Outsourced financial support",
      "Clear accounting assistance",
      "Cost-efficient back-office help",
    ],
    details: {
      "Outsourced financial support":
        "Accounts payable and receivable processing: invoice capture, coding against your chart of accounts, approval routing, and payment-run preparation inside your accounting system.",
      "Clear accounting assistance":
        "Bank and ledger reconciliations, expense and card-statement matching, and month-end close checklists worked to your calendar, with exceptions flagged rather than quietly adjusted.",
      "Cost-efficient back-office help":
        "Vendor and customer statement queries, collection reminders, and document filing handled as a scheduled workload, so your controller reviews results instead of doing the entry.",
    },
    body: {
      heading: "What outsourced finance support covers day to day",
      paragraphs: [
        "The work runs inside your systems. Agents are given scoped access to your accounting platform, expense tool, and shared inbox and follow your approval matrix; releasing payments stays with your team.",
        "Every task has a defined owner and turnaround: invoices coded within one business day, reconciliations completed to a fixed schedule, and a close checklist with each item signed off by name. Anything that does not match, such as a duplicate invoice, an unmatched deposit, or a vendor asking to change bank details, is escalated with the evidence attached rather than resolved by guesswork.",
        "Reporting covers throughput, ageing, and exception counts, so you can see where volume comes from and where the process upstream of the team needs attention.",
      ],
    },
    icon: "accounting",
  },
  {
    title: "Appointment Setting",
    summary:
      "Live scheduling support for leads, customers, patients, tenants, and service appointments across busy teams.",
    metaDescription:
      "Outsource appointment setting for live booking, inbound call answering, lead scheduling, and customer appointment coordination.",
    services: [
      "Live appointment booking",
      "Inbound call answering",
      "Lead and customer scheduling",
    ],
    icon: "calendar",
  },
  {
    title: "Event RSVP and Reservation Taking",
    summary:
      "Reservation and RSVP support for events, travel, hospitality, and organizations that need reliable front-end intake.",
    metaDescription:
      "Outsource event RSVP and reservation taking for event sign-ups, registrations, reservation inquiries, and attendee support.",
    services: [
      "Event sign-ups and registrations",
      "Reservation inquiries",
      "Front-end attendee support",
    ],
    icon: "calendar",
  },
  {
    title: "Employee Hotline Services",
    summary:
      "Employee hotline coverage for schedule questions, sick-day calls, check-ins, message taking, and after-hours support.",
    metaDescription:
      "Outsource employee hotline services for sick-day calls, schedule inquiries, employee check-ins, and 24/7/365 message taking.",
    services: [
      "Sick-day and schedule inquiries",
      "Employee check-ins",
      "24/7/365 message taking",
    ],
    icon: "people",
  },
  {
    title: "Customer Service",
    summary:
      "Customer service outsourcing for inquiries, retention, sales support, save-the-sale conversations, and customer care.",
    metaDescription:
      "Outsource customer service for customer inquiries, save-the-sale support, cross-sell and upsell conversations, and customer care.",
    services: [
      "Customer inquiries",
      "Save-the-sale support",
      "Cross-sell and upsell conversations",
    ],
    icon: "smile",
  },
  {
    title: "Consumer Hotlines",
    summary:
      "Consumer hotline support for product questions, process inquiries, urgent call volume, and always-on customer coverage.",
    metaDescription:
      "Outsource consumer hotline services for live hotline answering, product and process inquiries, and 24/7/365 customer support.",
    services: [
      "Live hotline answering",
      "Product and process inquiries",
      "24/7/365 customer support",
    ],
    icon: "customer-support",
  },
  {
    title: "Order Processing",
    summary:
      "Order processing support that helps customers place orders, check status, complete purchases, and resolve order issues.",
    metaDescription:
      "Outsource order processing for order placement, purchase assistance, order status inquiries, and customer order support.",
    services: [
      "Order placement support",
      "Purchase assistance",
      "Order status inquiries",
    ],
    icon: "ecommerce",
  },
];

export function getSolution(slug: string) {
  return SOLUTIONS.find((solution) => slugify(solution.title) === slug);
}
