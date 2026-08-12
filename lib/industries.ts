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
  /** Contextual links OUT of the industries silo (services, locations). */
  crossLinks?: { href: string; label: string }[];
};

export const INDUSTRIES: Industry[] = [
  {
    name: "Automotive",
    seoTitle: "Automotive Call Center Outsourcing for Dealers and OEMs",
    summary:
      "Outsourced automotive support for dealers, OEMs, service teams, customer inquiries, appointment scheduling, and follow-up.",
    metaDescription:
      "Outsource automotive call center support for dealerships, OEMs, service departments, customer inquiries, test drive scheduling, service appointments.",
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
    crossLinks: [
      { href: "/services/hipaa-medical-answering-service", label: "HIPAA medical answering service" },
      { href: "/locations/healthcare-bpo-philippines", label: "Healthcare BPO Philippines" },
      { href: "/blog/hipaa-compliance-outsourcing-patient-calls", label: "HIPAA vendor checklist" },
    ],
    seoTitle: "Healthcare Call Center Services and Medical BPO Support",
    seoIntro:
      "Healthcare call center services cover the patient communication a practice cannot afford to drop: appointment calls, inquiry triage, reminders, and the demand spikes that follow a clinic closure, a recall, or a public health event.",
    seoBody: {
      heading: "Healthcare call center outsourcing built around patient communication.",
      paragraphs: [
        "Patients call when something is wrong, and a call that reaches voicemail is a patient who either goes elsewhere or arrives in an emergency department. Extending answering coverage across evenings, weekends, and overflow periods is usually the single largest improvement a practice or provider group can make to patient experience without hiring.",
        "Healthcare work carries requirements most contact center programmes never encounter. Access to protected health information must be least-privilege, call recording rules must be explicit, agents must know exactly where clinical judgment begins and their role ends, and a business associate agreement must be in place before the first call is taken.",
        "Our healthcare support team works from protocols your clinical staff approve, escalates by the urgency rules you define, and reports on volume, answer rate, and wait times so patient access is measured rather than assumed.",
      ],
    },
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
    crossLinks: [
      { href: "/services/customer-support", label: "Customer support outsourcing" },
      { href: "/services/ecommerce-support", label: "Ecommerce support" },
      { href: "/locations/offshore-call-center", label: "Offshore delivery for peaks" },
    ],
    seoTitle: "Retail Contact Center Outsourcing and Customer Support",
    seoIntro:
      "Retail contact center outsourcing covers order taking, returns and refunds, dispute handling, order status calls, and the seasonal volume that arrives faster than any in-house team can hire for.",
    seoBody: {
      heading: "Retail contact center outsourcing built for seasonal volume.",
      paragraphs: [
        "Retail demand is not flat, and the peaks are the entire problem. Black Friday, holiday returns, a product recall, or a campaign that performs better than expected can multiply contact volume in days. Outsourced capacity scales into those windows and back out again, which is why retailers use it even when in-house coverage is adequate the rest of the year.",
        "Returns and refunds are where retail customer relationships are usually won or lost. A clear, quick, consistently applied returns process handled by trained agents protects repeat purchase rates more reliably than any loyalty programme.",
        "Coverage spans phone, email, chat, and social channels against one documented standard, so a customer gets the same answer regardless of where they ask.",
      ],
    },
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
    crossLinks: [
      { href: "/services/ecommerce-support", label: "Ecommerce support" },
      { href: "/services/customer-support", label: "Customer support outsourcing" },
      { href: "/locations/call-center-outsourcing-philippines", label: "Philippines delivery" },
    ],
    seoTitle: "Ecommerce Call Center Outsourcing and Order Support",
    seoIntro:
      "Ecommerce call center outsourcing covers order processing, product questions, shipping and delivery inquiries, cart recovery follow-up, refunds, and the customer contact that decides whether a first order becomes a second.",
    seoBody: {
      heading: "Ecommerce support across the whole order lifecycle.",
      paragraphs: [
        "Most ecommerce support volume is predictable and repetitive: where is my order, can I change the address, how do I return this, why was I charged twice. Handling that reliably at speed is a process problem rather than a skill problem, which is exactly the kind of work an outsourced team runs well.",
        "Cart recovery and post-purchase follow-up are the parts most stores never staff. Abandoned carts worked within hours, and first-order follow-up done consistently, produce measurable revenue that sits untouched in most operations because nobody has the capacity.",
        "Support runs inside your existing stack, working from your helpdesk, store platform, and shipping tools so nothing is rekeyed and your reporting stays in one place.",
      ],
    },
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
    crossLinks: [
      { href: "/services/customer-support", label: "Customer support outsourcing" },
      { href: "/locations/nearshore-call-center", label: "Nearshore delivery" },
      { href: "/services/data-research", label: "Data and back-office support" },
    ],
    seoTitle: "Insurance Outsourcing Services and Insurance BPO Support",
    seoIntro:
      "Insurance outsourcing covers the volume work that sits between a policyholder and a decision: policy inquiries, claims status calls, renewal reminders, first notice of loss intake, and the inbound and outbound sales activity that keeps a book growing.",
    seoBody: {
      heading: "Insurance BPO support across the policy lifecycle.",
      paragraphs: [
        "Insurance call volume is uneven by nature. Renewal cycles, weather events, regulatory changes, and campaign launches all produce spikes that in-house teams cannot staff for permanently. Outsourced capacity absorbs those peaks without leaving you overstaffed for the quiet months in between.",
        "Most inbound insurance calls are answerable without underwriting judgment: where a claim stands, what a policy covers, when a renewal is due, how to submit a document. Handling those with a trained team frees licensed staff for the work that genuinely requires them.",
        "Escalation rules define exactly where an agent stops and a licensed professional takes over, and those boundaries are documented with you before launch rather than discovered during a difficult call.",
      ],
    },
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
  {
    name: "Legal",
    crossLinks: [
      { href: "/blog/top-call-center-services-for-law-firms", label: "Top 10 services for law firms" },
      { href: "/blog/top-bpo-companies-for-legal-services", label: "Top 10 BPO for legal" },
      { href: "/services/customer-support", label: "Customer support outsourcing" },
    ],
    seoTitle: "Legal Call Center Services for Law Firms and Legal Teams",
    summary:
      "Legal call center support for new client intake, conflict pre-screening, consultation scheduling, case status updates, and after-hours coverage.",
    metaDescription:
      "Legal call center services for law firms: 24/7 new client intake, conflict-of-interest pre-screening, consultation scheduling, case status lines.",
    seoIntro:
      "Legal call centers answer the calls a law firm cannot afford to miss. Outsourced legal intake covers new client inquiries, consultation scheduling, conflict pre-screening questions, case status calls, and after-hours coverage so potential clients reach a person instead of voicemail.",
    seoBody: {
      heading: "Legal call center services built around intake, not just call volume.",
      paragraphs: [
        "Most legal matters begin with a phone call made at a stressful moment. If that call goes to voicemail, the caller usually dials the next firm on the list. Legal call center support keeps a trained person on the line during business hours, after hours, weekends, and overflow periods when your staff is already on other calls.",
        "Our legal support team works from intake scripts your firm approves. Callers are greeted consistently, screened against the questions you define, scheduled into the right calendar, and passed to your attorneys with complete notes. Agents capture information and follow your instructions; they do not give legal advice, quote fees, or form an attorney-client relationship on your behalf.",
        "Because intake rules, conflict questions, practice areas, and escalation paths differ by firm, every workflow is documented with you before the first call is answered, then reviewed against call recordings and quality checks as volume grows.",
      ],
    },
    serviceDetails: {
      "New client intake":
        "Answer new matter inquiries with your approved intake script, capture caller details, matter type, jurisdiction, and key dates, then route the lead to the right attorney or practice group.",
      "Conflict-of-interest pre-screening":
        "Collect the party names, opposing parties, and matter details your firm needs to run a conflicts check, and flag anything questionable before a consultation is scheduled.",
      "Consultation scheduling":
        "Book initial consultations directly into attorney calendars, confirm appointments, send reminders, and handle reschedules so fewer prospective clients drop off before they are seen.",
      "Case status and update lines":
        "Handle routine status calls from existing clients using the information your team makes available, and escalate anything requiring legal judgment to the assigned paralegal or attorney.",
      "After-hours and weekend coverage":
        "Keep the firm reachable outside business hours for urgent matters, arrests, accidents, and time-sensitive inquiries, with clear rules for what warrants an immediate attorney callback.",
      "Bilingual and Spanish-language intake":
        "Take intake calls in Spanish and other languages so language is never the reason a qualified matter goes to another firm.",
      "Billing and payment inquiry support":
        "Answer routine questions about invoices, payment plans, and retainer balances using the information your billing team approves, and escalate disputes.",
      "Overflow and disaster-recovery coverage":
        "Absorb call spikes from advertising campaigns, verdicts, weather events, or staff absence so the main line keeps being answered.",
      "Intake reporting and call quality reviews":
        "Report calls received, answered live, average wait, consultations booked, and matters screened out, with recorded-call reviews so intake quality is measured instead of assumed.",
    },
    services: [
      "New client intake",
      "Conflict-of-interest pre-screening",
      "Consultation scheduling",
      "Case status and update lines",
      "After-hours and weekend coverage",
      "Bilingual and Spanish-language intake",
      "Billing and payment inquiry support",
      "Overflow and disaster-recovery coverage",
      "Intake reporting and call quality reviews",
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
