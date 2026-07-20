import { slugify } from "./industries";

export type Solution = {
  title: string;
  summary: string;
  metaDescription: string;
  services: string[];
  icon: string;
};

export const SOLUTIONS: Solution[] = [
  {
    title: "Multilingual Support",
    summary:
      "Customer support in multiple languages for companies serving callers, shoppers, patients, and users across regions.",
    metaDescription:
      "Outsource multilingual customer support for global callers, multilingual help desk coverage, and friendly customer conversations across regions.",
    services: [
      "Support in several languages",
      "Friendly customer conversations",
      "Comfortable support for global callers",
    ],
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
