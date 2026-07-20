export type Service = {
  slug: string;
  name: string;
  accent: string; // accent-* class
  icon: string; // key into ICONS
  short: string; // grid card description
  metaTitle: string;
  metaDescription: string;
  heroDesc: string;
  heroImage: string;
  heroImageAlt: string;
  tasksHeading: string;
  tasks: { title: string; desc: string }[];
  bestSuited: string[];
  related: string[]; // slugs
};

const DEFAULT_TASK_DESC =
  "Handled by trained BPO agents using documented steps, clear ownership, and quality checks.";

const t = (title: string, desc: string = DEFAULT_TASK_DESC) => ({ title, desc });

export const SERVICES: Service[] = [
  {
    slug: "customer-support",
    name: "Customer Support",
    accent: "accent-purple",
    icon: "customer-support",
    short:
      "Friendly, professional support across email, chat, phone, and social channels.",
    metaTitle: "Customer Support Outsourcing | Business Process Outsourcing",
    metaDescription:
      "Outsource customer support for phone, email, live chat, social inboxes, returns, and ticket resolution with trained BPO agents.",
    heroDesc:
      "Outsource customer support across phone, email, live chat, tickets, and social channels. Your team is shaped around the tools, tone, response times, and coverage your business requires.",
    heroImage: "/assets/img/service-customer-support.jpg",
    heroImageAlt:
      "Customer support specialist assisting a client by headset and laptop",
    tasksHeading: "Practical support for everyday work.",
    tasks: [
      t("Email and ticket support"),
      t("Live chat assistance"),
      t("Phone support coordination"),
      t("Social inbox management"),
      t("Returns and issue resolution"),
      t("Knowledge base maintenance"),
    ],
    bestSuited: [
      "SaaS and technology companies",
      "E-commerce brands",
      "Professional service firms",
      "Growing teams with rising ticket volume",
    ],
    related: ["virtual-assistance", "accounting-support", "digital-marketing"],
  },
  {
    slug: "virtual-assistance",
    name: "Virtual Assistance",
    accent: "accent-green",
    icon: "virtual-assistance",
    short:
      "Skilled support for inboxes, calendars, admin, coordination, and daily operations.",
    metaTitle: "Virtual Assistant Outsourcing | Business Process Outsourcing",
    metaDescription:
      "Outsource virtual assistant services for admin work, scheduling, inbox management, CRM updates, research, and daily operations.",
    heroDesc:
      "Outsource virtual assistant services for inboxes, calendars, admin coordination, CRM updates, research, and daily operations. Your assistant works inside your tools and rhythm so nothing slips through the cracks.",
    heroImage: "/assets/img/service-virtual-assistance.jpg",
    heroImageAlt:
      "Virtual assistant planning work with a laptop and notebook",
    tasksHeading: "Everyday admin, handled reliably.",
    tasks: [
      t("Inbox and email triage"),
      t("Calendar and scheduling"),
      t("Travel and meeting coordination"),
      t("Document and file management"),
      t("Data entry and CRM updates"),
      t("Research and reporting"),
    ],
    bestSuited: [
      "Founders and busy executives",
      "Small and growing teams",
      "Consultants and agencies",
      "Anyone drowning in admin work",
    ],
    related: ["customer-support", "accounting-support", "data-research"],
  },
  {
    slug: "accounting-support",
    name: "Accounting Support",
    accent: "accent-orange",
    icon: "accounting",
    short:
      "Bookkeeping assistance, invoicing, reconciliations, and organized reporting.",
    metaTitle: "Accounting & Bookkeeping Support | Business Process Outsourcing",
    metaDescription:
      "Outsource bookkeeping support, invoicing, accounts payable, accounts receivable, reconciliations, expense tracking, and reporting assistance.",
    heroDesc:
      "Outsource bookkeeping assistance, invoicing, reconciliations, accounts payable, accounts receivable, and organized reporting. We keep day-to-day finance work tidy so your accountant and leadership have cleaner numbers.",
    heroImage: "/assets/img/service-accounting-support.jpg",
    heroImageAlt:
      "Accounting professional reviewing receipts with a calculator",
    tasksHeading: "Keep your books clean and current.",
    tasks: [
      t("Bookkeeping and data entry"),
      t("Invoicing and billing"),
      t("Accounts payable & receivable"),
      t("Bank and account reconciliation"),
      t("Expense tracking"),
      t("Monthly reporting support"),
    ],
    bestSuited: [
      "Small businesses and startups",
      "E-commerce and retail brands",
      "Service firms billing clients",
      "Teams without in-house bookkeeping",
    ],
    related: ["virtual-assistance", "data-research", "customer-support"],
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    accent: "accent-blue",
    icon: "marketing",
    short:
      "Campaign, social media, content, and reporting support for consistent growth.",
    metaTitle: "Digital Marketing Support | Business Process Outsourcing",
    metaDescription:
      "Outsource digital marketing support for social media, content scheduling, email campaigns, campaign coordination, creative requests, and reporting.",
    heroDesc:
      "Outsource digital marketing support for campaigns, social media, content scheduling, email marketing, and reporting. We handle execution so your marketing stays active and on-brand every week.",
    heroImage: "/assets/img/service-digital-marketing.jpg",
    heroImageAlt: "Marketing team reviewing campaign performance together",
    tasksHeading: "Keep marketing consistent and on-brand.",
    tasks: [
      t("Social media management"),
      t("Content scheduling & publishing"),
      t("Email marketing support"),
      t("Campaign coordination"),
      t("Basic graphic requests"),
      t("Performance reporting"),
    ],
    bestSuited: [
      "Brands building an online presence",
      "E-commerce and DTC stores",
      "Agencies needing extra capacity",
      "Teams without a full marketing hire",
    ],
    related: ["content-creation", "ecommerce-support", "customer-support"],
  },
  {
    slug: "ecommerce-support",
    name: "E-commerce Support",
    accent: "accent-yellow",
    icon: "ecommerce",
    short:
      "Product, order, marketplace, customer care, and store operations support.",
    metaTitle: "E-commerce Support Outsourcing | Business Process Outsourcing",
    metaDescription:
      "Outsource e-commerce support for product listings, order processing, inventory updates, marketplace management, customer care, and returns.",
    heroDesc:
      "Outsource e-commerce support for product listings, order processing, inventory updates, marketplace management, customer care, and returns. We keep your storefront accurate, orders moving, and customers looked after.",
    heroImage: "/assets/img/service-ecommerce-support.jpg",
    heroImageAlt: "E-commerce team packing an order beside a laptop",
    tasksHeading: "Keep your store running smoothly.",
    tasks: [
      t("Product listing & uploads"),
      t("Order processing"),
      t("Inventory updates"),
      t("Marketplace management"),
      t("Customer care & returns"),
      t("Store maintenance"),
    ],
    bestSuited: [
      "Shopify and WooCommerce stores",
      "Amazon and marketplace sellers",
      "Multi-channel retail brands",
      "Stores scaling order volume",
    ],
    related: ["customer-support", "digital-marketing", "content-creation"],
  },
  {
    slug: "content-creation",
    name: "Content Creation",
    accent: "accent-pink",
    icon: "content",
    short:
      "Brand-aligned content that helps you stay visible, relevant, and consistent.",
    metaTitle: "Content Creation Outsourcing | Business Process Outsourcing",
    metaDescription:
      "Outsource content creation for blogs, social media copy, newsletters, product descriptions, repurposing, editing, and proofreading.",
    heroDesc:
      "Outsource content creation for blogs, social media copy, newsletters, product descriptions, repurposing, editing, and proofreading. We keep your content calendar moving without draining your internal team.",
    heroImage: "/assets/img/service-content-creation.jpg",
    heroImageAlt: "Content creator editing photography on a laptop",
    tasksHeading: "Publish consistently, without the grind.",
    tasks: [
      t("Blog & article writing"),
      t("Social media copy"),
      t("Newsletter content"),
      t("Product descriptions"),
      t("Content repurposing"),
      t("Editing & proofreading"),
    ],
    bestSuited: [
      "Brands publishing regularly",
      "SaaS and content-led businesses",
      "E-commerce product catalogs",
      "Teams behind on their calendar",
    ],
    related: ["digital-marketing", "ecommerce-support", "virtual-assistance"],
  },
  {
    slug: "technical-support",
    name: "IT & Technical Support",
    accent: "accent-mint",
    icon: "tech",
    short:
      "Reliable first-line technical help, documentation, onboarding, and troubleshooting.",
    metaTitle: "IT & Technical Support Outsourcing | Business Process Outsourcing",
    metaDescription:
      "Outsource IT and technical support for first-line help desk, ticket triage, user onboarding, documentation, troubleshooting, and monitoring support.",
    heroDesc:
      "Outsource IT and technical support for first-line help desk, ticket triage, user onboarding, documentation, troubleshooting, and monitoring support. We keep users unblocked and your knowledge base current.",
    heroImage: "/assets/img/service-technical-support.jpg",
    heroImageAlt: "Technical support specialist diagnosing computer hardware",
    tasksHeading: "Keep your users and systems supported.",
    tasks: [
      t("First-line help desk"),
      t("Ticket triage & routing"),
      t("User onboarding & access"),
      t("Documentation & guides"),
      t("Software troubleshooting"),
      t("System monitoring support"),
    ],
    bestSuited: [
      "SaaS and software products",
      "Growing internal IT teams",
      "Companies scaling user support",
      "Teams needing coverage hours",
    ],
    related: ["customer-support", "virtual-assistance", "data-research"],
  },
  {
    slug: "data-research",
    name: "Data Entry & Research",
    accent: "accent-lilac",
    icon: "data",
    short:
      "Accurate data processing, list building, web research, and database maintenance.",
    metaTitle: "Data Entry & Research Outsourcing | Business Process Outsourcing",
    metaDescription:
      "Outsource data entry and research for data cleanup, list building, web research, database maintenance, lead enrichment, and reporting.",
    heroDesc:
      "Outsource data entry and research for data cleanup, list building, web research, database maintenance, lead enrichment, and reporting. We turn messy inputs into clean, reliable data your team can act on.",
    heroImage: "/assets/img/service-data-research.jpg",
    heroImageAlt: "Research professional reviewing documents beside a laptop",
    tasksHeading: "Clean, accurate data you can trust.",
    tasks: [
      t("Data entry & cleanup"),
      t("List building"),
      t("Web & market research"),
      t("Database maintenance"),
      t("Lead enrichment"),
      t("Report preparation"),
    ],
    bestSuited: [
      "Sales and marketing teams",
      "Research-heavy businesses",
      "Operations and RevOps teams",
      "Anyone with messy datasets",
    ],
    related: ["virtual-assistance", "accounting-support", "digital-marketing"],
  },
  {
    slug: "lead-generation",
    name: "Lead Generation",
    accent: "accent-purple",
    icon: "target",
    short:
      "Prospect research, qualification, outreach support, and appointment-ready leads.",
    metaTitle: "Lead Generation Outsourcing | Business Process Outsourcing",
    metaDescription:
      "Outsource lead generation for prospect research, lead list building, qualification, outbound campaign support, appointment handoff, and CRM updates.",
    heroDesc:
      "Outsource lead generation for prospect research, lead list building, qualification, outbound campaign support, appointment handoff, and CRM updates. We help your team spend more time speaking with the right opportunities.",
    heroImage: "/assets/img/service-digital-marketing.jpg",
    heroImageAlt: "Marketing team reviewing lead generation campaign results",
    tasksHeading: "Build a cleaner pipeline.",
    tasks: [
      t("Prospect research"),
      t("Lead list building"),
      t("Lead qualification"),
      t("Outbound campaign support"),
      t("Appointment handoff"),
      t("CRM updates"),
    ],
    bestSuited: [
      "Sales teams building pipeline",
      "Agencies and B2B service firms",
      "Companies testing new markets",
      "Teams needing qualified outreach support",
    ],
    related: ["digital-marketing", "data-research", "virtual-assistance"],
  },
];

export const SERVICE_NAMES = SERVICES.map((s) => s.name);

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
