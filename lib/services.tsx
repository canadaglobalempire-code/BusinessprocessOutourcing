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
  /* ---- Optional depth, rendered only when present. Used on money pages
     that need to outrank established competitors rather than just exist. ---- */
  deepDive?: { heading: string; paragraphs: string[] }[];
  models?: { name: string; bestFor: string; tradeoff: string }[];
  onboarding?: { title: string; detail: string }[];
  concerns?: { q: string; a: string }[];
  /** Contextual links OUT of the services silo (locations, industries). */
  crossLinks?: { href: string; label: string }[];
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
    metaTitle:
      "Customer Support Outsourcing | Outsourced Customer Service Solutions",
    metaDescription:
      "Customer support outsourcing across phone, email, live chat, and social. Outsourced customer service with dedicated or shared teams, documented quality standards, and reporting you can audit.",
    heroDesc:
      "Outsourced customer service across phone, email, live chat, tickets, and social channels — built around your tools, your tone, your response times, and the hours your customers actually contact you.",
    heroImage: "/assets/img/service-customer-support.jpg",
    heroImageAlt:
      "Customer support specialist assisting a client by headset and laptop",
    tasksHeading: "What an outsourced customer service team handles.",
    tasks: [
      t(
        "Email and ticket support",
        "First-response and resolution against your SLA targets, working inside your existing helpdesk so history and reporting stay in one place.",
      ),
      t(
        "Live chat assistance",
        "Staffed chat coverage during the hours your traffic actually peaks, with handoff rules for what moves to a ticket or a call.",
      ),
      t(
        "Inbound phone support",
        "Live answering for customer questions, orders, accounts, and complaints, handled to a documented script and escalation path.",
      ),
      t(
        "Social inbox and review response",
        "Comments, direct messages, and public reviews monitored and answered in your brand voice, with escalation rules for anything sensitive.",
      ),
      t(
        "Returns, refunds, and issue resolution",
        "Apply your returns and refund policy consistently, including the judgment calls, so outcomes do not vary by who picked up.",
      ),
      t(
        "Order and account management",
        "Order changes, address updates, subscription changes, cancellations, and billing questions handled inside your systems.",
      ),
      t(
        "Tier-one technical triage",
        "Screen and resolve common technical issues, and route anything genuinely complex to your engineers with reproduction steps attached.",
      ),
      t(
        "Knowledge base maintenance",
        "Turn recurring questions into documented answers, so ticket volume falls instead of compounding as you grow.",
      ),
      t(
        "Quality review and reporting",
        "Volume, first-response time, resolution time, CSAT, and reviewed call and ticket samples, reported on a cadence you set.",
      ),
    ],
    bestSuited: [
      "SaaS and technology companies with rising ticket volume",
      "E-commerce brands with seasonal peaks",
      "Businesses losing contacts outside business hours",
      "Teams whose engineers are answering support tickets",
      "Companies expanding into new time zones or languages",
    ],
    related: ["virtual-assistance", "technical-support", "ecommerce-support"],
    crossLinks: [
      { href: "/locations/nearshore-call-center", label: "Nearshore delivery" },
      { href: "/locations/offshore-call-center", label: "Offshore delivery" },
      { href: "/blog/outsourced-customer-service-cost", label: "What it costs" },
    ],
    deepDive: [
      {
        heading: "What outsourcing customer service actually changes",
        paragraphs: [
          "The visible change is capacity: more hours covered, faster first responses, and a queue that does not build up overnight. The change that matters more is structural. To hand support to an outside team you have to write down how it works — what a good answer looks like, when to refund, what gets escalated, who decides. Most teams have never documented any of that, and the exercise itself removes a surprising amount of inconsistency before a single call is outsourced.",
          "The second change is that support stops competing with other work. In most growing companies, tickets are answered by whoever has capacity — a founder in the evening, an engineer between deploys, an office manager between other duties. That model produces good answers at unpredictable times and a support function nobody actually owns.",
          "What does not change is who sets the standard. Outsourced customer service means someone else executes the process. It does not mean someone else decides what your customers are entitled to.",
        ],
      },
      {
        heading: "Choosing what to outsource first",
        paragraphs: [
          "Start with the highest-volume, most repeatable contact types: order status, password and access issues, returns, billing questions, and delivery inquiries. These are documentable, measurable, and account for the majority of contacts in most businesses. They are also the contacts your internal team resents handling.",
          "Keep escalations, angry high-value accounts, and anything requiring commercial judgment in-house at first. Move them across later, once the outsourced team has enough context to handle them well — and only after you have seen how they handle the straightforward work.",
          "A common mistake is outsourcing by channel instead of by contact type — handing over all of chat, for example, including the complex conversations. Splitting by complexity works better than splitting by channel.",
        ],
      },
      {
        heading: "Protecting quality and brand voice",
        paragraphs: [
          "Quality does not survive on instruction alone; it survives on sampling. A defined share of tickets and calls should be reviewed against a written scorecard every week, with results fed back to agents individually. Programmes that skip this drift within a month and nobody notices until CSAT moves.",
          "Brand voice needs examples rather than adjectives. \"Friendly but professional\" means nothing to a new agent. Ten real answers you were happy with, and three you were not, teach it in an afternoon.",
          "Response templates should be starting points, not scripts to paste. The test is whether a customer reading two replies can tell they came from different people who both knew what they were doing.",
        ],
      },
      {
        heading: "What drives the cost of outsourced support",
        paragraphs: [
          "Four things set the price: where the team is based, whether agents are dedicated to you or shared across clients, how many hours you need covered, and how much skill the work requires. Delivery location has the largest effect — onshore, nearshore, and offshore differ substantially per seat for the same work.",
          "Dedicated agents cost more than shared coverage and are worth it when product knowledge is deep or brand voice is distinctive. Shared or pooled coverage is more efficient for straightforward, high-volume contact types where any trained agent can handle any ticket.",
          "The cost that is easiest to overlook is your own management time. A programme with clear documentation, defined escalation, and a regular reporting rhythm takes very little. One without them consumes more of your week than the support did.",
        ],
      },
    ],
    models: [
      {
        name: "Dedicated team",
        bestFor:
          "Deep product knowledge, distinctive brand voice, complex or regulated support",
        tradeoff:
          "Highest cost per seat; needs enough steady volume to keep a dedicated team busy",
      },
      {
        name: "Shared / pooled coverage",
        bestFor:
          "High-volume, repeatable contacts — order status, returns, billing, access issues",
        tradeoff:
          "Less product depth per agent; works best with strong documentation and templates",
      },
      {
        name: "Overflow and after-hours",
        bestFor:
          "Teams with adequate daytime coverage that lose contacts at night, at weekends, or during peaks",
        tradeoff:
          "Does not reduce your daytime workload; sits alongside an internal team rather than replacing it",
      },
    ],
    onboarding: [
      {
        title: "Scope and discovery",
        detail:
          "Agree contact types, volumes, channels, coverage hours, and which work stays in-house. This is where the split by complexity gets decided.",
      },
      {
        title: "Documentation and access",
        detail:
          "Capture your policies, escalation rules, tone examples, and response templates, and set up least-privilege access to your helpdesk and systems.",
      },
      {
        title: "Team assignment and training",
        detail:
          "Agents are assigned and trained on your product, policies, and tone, then tested against real historical tickets before touching live volume.",
      },
      {
        title: "Pilot on a narrow slice",
        detail:
          "Go live on one contact type or one channel. Review every ticket in the first week, then sample as confidence builds.",
      },
      {
        title: "Expand and set the reporting rhythm",
        detail:
          "Widen scope once quality holds, and lock a reporting cadence covering volume, response and resolution times, CSAT, and reviewed samples.",
      },
    ],
    concerns: [
      {
        q: "Will outsourced agents actually know our product?",
        a: "They know what you document and what they are tested on. Dedicated agents working your queue daily build real depth within weeks — the constraint is almost always the quality of the documentation and training material, not the agents. Pooled coverage builds less depth, which is why it suits repeatable contacts rather than complex ones.",
      },
      {
        q: "Will customers be able to tell?",
        a: "They can tell when answers are slow, inconsistent, or obviously scripted — which is equally true of in-house teams. What prevents it is a written quality standard, real examples of good answers, and weekly sampling. Customers notice quality, not payroll.",
      },
      {
        q: "What happens to our customer data?",
        a: "Access should be least-privilege inside your own systems — agents work in your helpdesk with the permissions the role needs and nothing more. Establish where data is processed, what agents can see and export, how recordings are retained, and what the data processing agreement covers before launch, not after.",
      },
      {
        q: "Do we lose control of the customer relationship?",
        a: "You keep every decision that matters: what customers are entitled to, when to refund, how to handle a complaint, what gets escalated to you. The outsourced team executes those decisions consistently. If a programme feels like a loss of control, it usually means the escalation rules were never written down.",
      },
      {
        q: "What if it does not work out?",
        a: "This is why the pilot matters. Start on one contact type with a defined review period, and agree in advance what success looks like — response time, resolution rate, and quality scores. A programme that cannot show those numbers by the end of a pilot is not one to expand.",
      },
    ],
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

SERVICES.push(
  {
    slug: "hipaa-medical-answering-service",
    name: "HIPAA Medical Answering Service",
    accent: "accent-mint",
    icon: "shield",
    short:
      "HIPAA-aware patient call handling for practices, clinics, and medical groups — day, night, and weekend.",
    metaTitle:
      "HIPAA Compliant Medical Answering Service | Patient Call Handling",
    metaDescription:
      "HIPAA compliant medical answering service for practices and clinics: 24/7 patient call handling, appointment scheduling, prescription refill intake, and after-hours triage routing.",
    heroDesc:
      "A medical answering service built around protected health information. Patient calls are answered live, handled under documented HIPAA-aware rules, and routed to your on-call staff by urgency — not left on a machine until morning.",
    heroImage: "/assets/img/service-customer-support.jpg",
    heroImageAlt:
      "Medical answering service agent handling a patient call at a desk",
    tasksHeading: "Patient calls handled the way your practice handles them.",
    tasks: [
      t(
        "24/7 patient call answering",
        "Patients calling in the evening, overnight, or at the weekend reach a trained person rather than voicemail, with your after-hours protocol applied.",
      ),
      t(
        "Appointment scheduling and reminders",
        "Book, confirm, reschedule, and cancel directly in your practice management system, and run reminder calls that reduce no-shows.",
      ),
      t(
        "Prescription refill request intake",
        "Capture refill requests with the medication, pharmacy, and patient details your clinical staff need, then route them to the right prescriber queue.",
      ),
      t(
        "After-hours triage routing",
        "Apply the escalation rules your clinicians define to decide what reaches the on-call provider immediately and what waits for the next business day.",
      ),
      t(
        "New patient intake and insurance capture",
        "Collect demographics, insurance details, and referral information so new patients arrive already entered rather than filling forms in the waiting room.",
      ),
      t(
        "Bilingual patient support",
        "Spanish-language patient calls handled live on the same queue, not routed to a callback that many patients never take.",
      ),
      t(
        "Test result and follow-up callbacks",
        "Outbound follow-up calls made under your instructions, with clinical information released only by staff authorised to release it.",
      ),
      t(
        "Documented HIPAA-aware handling",
        "Least-privilege system access, defined rules for what agents may record and repeat, and a signed business associate agreement before any call is taken.",
      ),
      t(
        "Call reporting and quality review",
        "Volume, answer rate, wait times, and recorded-call reviews so patient communication is measured rather than assumed.",
      ),
    ],
    bestSuited: [
      "Practices losing patients to voicemail after hours",
      "Clinics where front-desk staff cannot keep up with call volume",
      "Multi-provider groups needing consistent triage rules",
      "Practices with a significant Spanish-speaking patient base",
      "Dental, veterinary, and specialty practices with high no-show rates",
    ],
    related: ["customer-support", "virtual-assistance", "technical-support"],
    crossLinks: [
      { href: "/industries/healthcare", label: "Healthcare outsourcing" },
      { href: "/locations/healthcare-bpo-philippines", label: "Healthcare BPO Philippines" },
      { href: "/blog/hipaa-compliance-outsourcing-patient-calls", label: "HIPAA vendor checklist" },
    ],
  },
  {
    slug: "inside-sales-outsourcing",
    name: "Inside Sales Outsourcing",
    accent: "accent-orange",
    icon: "growth",
    short:
      "An outsourced inside sales team that researches, calls, qualifies, and books — so your closers close.",
    metaTitle: "Inside Sales Outsourcing | Outsourced Inside Sales Team",
    metaDescription:
      "Outsource inside sales: prospect research, outbound calling, lead qualification, and booked meetings run by a trained team against your ICP, with your closers keeping the close.",
    heroDesc:
      "Outsourced inside sales covers the work that fills a pipeline — research, first contact, follow-up, and qualification — while your own team keeps the conversations that actually close revenue.",
    heroImage: "/assets/img/service-lead-generation.jpg",
    heroImageAlt:
      "Inside sales representative working a call list at a desk with a laptop",
    tasksHeading: "The top of the funnel, run properly.",
    tasks: [
      t(
        "Prospect research and list building",
        "Build target lists against your ideal customer profile with the firmographic and contact detail your team actually needs to open a conversation.",
      ),
      t(
        "Outbound calling and first contact",
        "Consistent outbound activity against your approved messaging, run daily rather than whenever your closers find a spare morning.",
      ),
      t(
        "Lead qualification against your criteria",
        "Screen for budget, authority, need, and timing using the qualifying and disqualifying questions you define, so meetings are worth taking.",
      ),
      t(
        "Appointment and demo setting",
        "Book qualified meetings straight into your team's calendars with confirmation and reminder steps that reduce no-shows.",
      ),
      t(
        "Follow-up on unconverted leads",
        "Work the inbound enquiries, trial signups, and aged opportunities your sales team never gets back to.",
      ),
      t(
        "CRM hygiene and pipeline reporting",
        "Every touch logged in your CRM with consistent fields, so pipeline reporting reflects reality instead of guesswork.",
      ),
      t(
        "Multi-channel sequencing",
        "Coordinated call, email, and social touches in a defined sequence rather than one channel used in isolation.",
      ),
      t(
        "Handoff to your closers",
        "A documented handoff with full context so the closer opens the call knowing what was said and what the prospect needs.",
      ),
      t(
        "Campaign testing and reporting",
        "Test messaging, list segments, and sequences, and report on qualified meetings booked rather than dials made.",
      ),
    ],
    bestSuited: [
      "Sales teams whose closers spend mornings prospecting",
      "Companies growing faster than they can hire SDRs",
      "B2B teams with a defined ICP and a repeatable pitch",
      "Businesses sitting on aged leads nobody has worked",
      "Teams needing predictable meeting volume month to month",
    ],
    related: ["lead-generation", "customer-support", "data-research"],
    crossLinks: [
      { href: "/locations/telemarketing-philippines", label: "Telemarketing Philippines" },
      { href: "/locations/nearshore-call-center", label: "Nearshore delivery" },
      { href: "/solutions/appointment-setting", label: "Appointment setting" },
    ],
  },
);

import { EXTRA_SERVICES } from "./services-extra";
SERVICES.push(...EXTRA_SERVICES);

export const SERVICE_NAMES = SERVICES.map((s) => s.name);

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
