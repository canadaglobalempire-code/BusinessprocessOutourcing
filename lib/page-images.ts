const unsplash = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=80`;

export type PageImage = {
  src: string;
  alt: string;
};

export const SERVICE_IMAGES: Record<string, PageImage> = {
  "customer-support": {
    src: unsplash("photo-1590650153855-d9e808231d41"),
    alt: "Customer support specialist at an office service desk",
  },
  "virtual-assistance": {
    src: unsplash("photo-1497366754035-f200968a6e72"),
    alt: "Virtual assistant workspace with laptop and organized office tools",
  },
  "accounting-support": {
    src: unsplash("photo-1554224155-6726b3ff858f"),
    alt: "Accounting documents and calculator for bookkeeping support",
  },
  "digital-marketing": {
    src: unsplash("photo-1460925895917-afdab827c52f"),
    alt: "Digital marketing analytics dashboard on a laptop",
  },
  "ecommerce-support": {
    src: unsplash("photo-1556742049-0cfed4f6a45d"),
    alt: "E-commerce order and customer support workspace",
  },
  "content-creation": {
    src: unsplash("photo-1516321318423-f06f85e504b3"),
    alt: "Content creation planning on a laptop",
  },
  "technical-support": {
    src: unsplash("photo-1516321497487-e288fb19713f"),
    alt: "Technical support team working on software help desk issues",
  },
  "data-research": {
    src: unsplash("photo-1551288049-bebda4e38f71"),
    alt: "Data research and analytics dashboard for business reporting",
  },
  "lead-generation": {
    src: unsplash("photo-1556761175-b413da4baf72"),
    alt: "Sales team reviewing lead generation pipeline opportunities",
  },
};

export const PAGE_IMAGES: Record<string, PageImage> = {
  services: {
    src: unsplash("photo-1552664730-d307ca884978"),
    alt: "Business team planning outsourced service coverage",
  },
  industries: {
    src: unsplash("photo-1542744173-8e7e53415bb0"),
    alt: "Operations leaders reviewing industry support plans",
  },
  solutions: {
    src: unsplash("photo-1553877522-43269d4ea984"),
    alt: "Support team coordinating customer service solutions",
  },
  about: {
    src: unsplash("photo-1521737604893-d14cc237f11d"),
    alt: "Business Process Outsourcing team collaborating in a meeting",
  },
  "how-it-works": {
    src: unsplash("photo-1551434678-e076c223a692"),
    alt: "Team mapping an outsourcing workflow before launch",
  },
  "why-choose-us": {
    src: unsplash("photo-1556761175-4b46a572b786"),
    alt: "Business team discussing reliable outsourcing support",
  },
};

export const INDUSTRY_IMAGES: Record<string, PageImage> = {
  automotive: {
    src: unsplash("photo-1533473359331-0135ef1b58bf"),
    alt: "Automotive dealership support for customer appointments",
  },
  "government-services": {
    src: unsplash("photo-1529107386315-e1a2ed48a620"),
    alt: "Government building representing citizen service support",
  },
  "travel-and-hospitality": {
    src: unsplash("photo-1566073771259-6a8506099945"),
    alt: "Hotel hospitality desk for guest reservation support",
  },
  airlines: {
    src: unsplash("photo-1436491865332-7a61a109cc05"),
    alt: "Commercial airplane for airline customer service support",
  },
  healthcare: {
    src: unsplash("photo-1576091160550-2173dba999ef"),
    alt: "Healthcare professional using technology for patient communication",
  },
  retail: {
    src: unsplash("photo-1441986300917-64674bd600d8"),
    alt: "Retail store shelves for customer order and return support",
  },
  "cable-and-media": {
    src: unsplash("photo-1497366811353-6870744d04b2"),
    alt: "Media operations workspace for cable and customer care support",
  },
  ecommerce: {
    src: unsplash("photo-1472851294608-062f824d29cc"),
    alt: "Online retail storefront for ecommerce support operations",
  },
  insurance: {
    src: unsplash("photo-1450101499163-c8848c66ca85"),
    alt: "Insurance paperwork and policy support documents",
  },
  technology: {
    src: unsplash("photo-1518770660439-4636190af475"),
    alt: "Technology hardware for software and technical support teams",
  },
  "disaster-and-emergency-call-centers": {
    src: unsplash("photo-1500530855697-b586d89ba3ee"),
    alt: "Emergency response environment for disaster hotline support",
  },
  "energy-and-utilities": {
    src: unsplash("photo-1509391366360-2e959784a276"),
    alt: "Energy utility infrastructure for customer support operations",
  },
  "banking-and-financial-services": {
    src: unsplash("photo-1579621970563-ebec7560ff3e"),
    alt: "Financial services documents for banking customer support",
  },
  telecommunications: {
    src: unsplash("photo-1519389950473-47ba0277781c"),
    alt: "Telecommunications technology team supporting connected services",
  },
  "real-estate": {
    src: unsplash("photo-1560518883-ce09059eeffa"),
    alt: "Real estate property interior for tenant and owner support",
  },
};

export const SOLUTION_IMAGES: Record<string, PageImage> = {
  "multilingual-support": {
    src: unsplash("photo-1521791136064-7986c2920216"),
    alt: "Multilingual team collaborating with global customer support",
  },
  "phone-support": {
    src: unsplash("photo-1516387938699-a93567ec168e"),
    alt: "Phone support agent handling customer calls",
  },
  "chat-and-social-media": {
    src: unsplash("photo-1556155092-490a1ba16284"),
    alt: "Support team handling live chat and social media messages on laptops",
  },
  "email-support": {
    src: unsplash("photo-1555421689-491a97ff2040"),
    alt: "Email support inbox and customer message handling",
  },
  "click-to-call": {
    src: unsplash("photo-1596524430615-b46475ddff6e"),
    alt: "Customer callback and click to call support conversation",
  },
  "financial-and-accounting-services": {
    src: unsplash("photo-1554224154-22dec7ec8818"),
    alt: "Financial accounting support with reports and calculations",
  },
  "appointment-setting": {
    src: unsplash("photo-1506784365847-bbad939e9335"),
    alt: "Appointment calendar for live scheduling support",
  },
  "event-rsvp-and-reservation-taking": {
    src: unsplash("photo-1511578314322-379afb476865"),
    alt: "Event venue setup for RSVP and reservation support",
  },
  "employee-hotline-services": {
    src: unsplash("photo-1551836022-d5d88e9218df"),
    alt: "Employee support team handling internal hotline requests",
  },
  "customer-service": {
    src: unsplash("photo-1556761175-5973dc0f32e7"),
    alt: "Customer service team coordinating customer care workflows",
  },
  "consumer-hotlines": {
    src: unsplash("photo-1525182008055-f88b95ff7980"),
    alt: "Consumer hotline support agent answering product questions",
  },
  "order-processing": {
    src: unsplash("photo-1563013544-824ae1b704d3"),
    alt: "Order processing and package fulfillment support",
  },
};
