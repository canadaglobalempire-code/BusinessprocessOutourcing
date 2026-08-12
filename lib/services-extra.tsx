import type { Service } from "./services";

const d =
  "Handled by trained BPO agents using documented steps, clear ownership, and quality checks.";
const t = (title: string, desc: string = d) => ({ title, desc });

/*
 * Second tier of service pages, each targeting a commercial keyword the core
 * nine did not cover. Kept in a separate file so services.tsx stays readable.
 */
export const EXTRA_SERVICES: Service[] = [
  {
    slug: "inbound-call-center-services",
    name: "Inbound Call Center Services",
    accent: "accent-blue",
    icon: "customer-support",
    short:
      "Live answering for the calls your customers make to you — support, orders, accounts, and urgent issues.",
    metaTitle: "Inbound Call Center Services | Outsourced Inbound Support",
    metaDescription:
      "Outsourced inbound call center services: live answering for customer support, order taking, account queries, and urgent issues.",
    heroDesc:
      "Inbound coverage for the calls customers make to you. Answered live, handled to your script, escalated by your rules, and reported on so you can see what is actually arriving.",
    heroImage: "/assets/img/service-customer-support.jpg",
    heroImageAlt: "Inbound call center agent answering a customer call",
    tasksHeading: "Every call answered, every outcome recorded.",
    tasks: [
      t("Live customer support answering", "Product, account, and service questions answered against your documented workflows rather than improvised."),
      t("Order and booking intake", "Take orders, bookings, and reservations directly into your systems with confirmation steps."),
      t("Account and billing queries", "Balance, invoice, and payment questions handled to the limits your finance team sets."),
      t("Urgent and escalation routing", "Rules that decide what reaches an on-call person immediately and what waits for business hours."),
      t("Overflow and after-hours cover", "Catch calls your own team cannot when volume spikes or the office closes."),
      t("Call reporting and quality review", "Volume, answer rate, wait time, abandonment, and reviewed call samples on a cadence you set."),
    ],
    bestSuited: [
      "Businesses sending calls to voicemail during working hours",
      "Teams losing contacts outside office hours",
      "Companies with sharp seasonal call peaks",
      "Organisations needing documented escalation rules",
    ],
    related: ["customer-support", "technical-support", "virtual-assistance"],
    crossLinks: [
      { href: "/services/outbound-call-center-services", label: "Outbound call center services" },
      { href: "/services/after-hours-answering-service", label: "After-hours answering" },
      { href: "/locations/nearshore-call-center", label: "Nearshore delivery" },
    ],
  },
  {
    slug: "outbound-call-center-services",
    name: "Outbound Call Center Services",
    accent: "accent-orange",
    icon: "growth",
    short:
      "Structured outbound calling for follow-up, qualification, renewals, and win-back campaigns.",
    metaTitle: "Outbound Call Center Services | Outsourced Outbound Calling",
    metaDescription:
      "Outsourced outbound call center services: lead follow-up, qualification, renewals, reactivation, and appointment setting.",
    heroDesc:
      "Outbound calling run as a programme rather than an activity — defined lists, approved scripts, compliance rules in the dialer, and reporting on outcomes rather than dials.",
    heroImage: "/assets/img/service-lead-generation.jpg",
    heroImageAlt: "Outbound call center agent working a campaign list",
    tasksHeading: "Outbound that is measured on outcomes.",
    tasks: [
      t("Lead follow-up and qualification", "Work inbound enquiries and aged leads against the qualifying criteria you define."),
      t("Appointment and demo setting", "Book meetings straight into your team's calendars with confirmation and reminder steps."),
      t("Renewal and retention calling", "Contact customers ahead of renewal dates and work save conversations to your rules."),
      t("Reactivation and win-back", "Reach lapsed customers with approved offers and log every outcome."),
      t("Customer surveys and feedback", "Structured outbound research with consistent question wording and clean data capture."),
      t("Compliance-aware dialing", "Consent rules, suppression lists, and calling-hour windows configured before the first call."),
    ],
    bestSuited: [
      "Sales teams whose closers are prospecting",
      "Businesses sitting on aged or unworked leads",
      "Subscription and contract businesses with renewals",
      "Companies needing predictable meeting volume",
    ],
    related: ["lead-generation", "inside-sales-outsourcing", "customer-support"],
    crossLinks: [
      { href: "/services/inside-sales-outsourcing", label: "Inside sales outsourcing" },
      { href: "/locations/telemarketing-philippines", label: "Telemarketing Philippines" },
      { href: "/solutions/appointment-setting", label: "Appointment setting" },
    ],
  },
  {
    slug: "after-hours-answering-service",
    name: "After-Hours Answering Service",
    accent: "accent-purple",
    icon: "customer-support",
    short:
      "Live coverage for evenings, weekends, and holidays, so urgent calls never reach a recording.",
    metaTitle: "After-Hours Answering Service | 24/7 Call Coverage",
    metaDescription:
      "After-hours answering service: live evening, weekend, and holiday coverage with urgency-based escalation, message handling.",
    heroDesc:
      "Coverage for the hours your team is not working. Calls answered live, triaged against your urgency rules, and escalated or held until morning according to criteria you set.",
    heroImage: "/assets/img/service-customer-support.jpg",
    heroImageAlt: "Agent providing after-hours call coverage at night",
    tasksHeading: "What happens after you close.",
    tasks: [
      t("Evening and overnight answering", "Live coverage through the hours a domestic team would charge a night-shift premium for."),
      t("Weekend and holiday cover", "Continuous availability across the days most businesses go dark."),
      t("Urgency triage and escalation", "Your rules decide what wakes an on-call colleague and what waits for the next working day."),
      t("Message capture and morning handover", "Structured notes waiting in your system when the office opens, not a voicemail queue."),
      t("Emergency and incident lines", "Dedicated handling for outages, incidents, and time-critical contacts."),
      t("Bilingual after-hours coverage", "Out-of-hours calls answered in the languages your customers actually use."),
    ],
    bestSuited: [
      "Businesses whose customers contact them at night",
      "Practices and firms with urgent client needs",
      "Service businesses with emergency call-outs",
      "Companies serving customers in other time zones",
    ],
    related: ["inbound-call-center-services", "customer-support", "technical-support"],
    crossLinks: [
      { href: "/locations/offshore-call-center", label: "Offshore delivery for overnight cover" },
      { href: "/services/hipaa-medical-answering-service", label: "HIPAA medical answering" },
      { href: "/industries/legal", label: "Legal call center services" },
    ],
  },
  {
    slug: "omnichannel-contact-center",
    name: "Omnichannel Contact Center",
    accent: "accent-mint",
    icon: "workspace-grid",
    short:
      "One team and one standard across phone, chat, email, social, and messaging.",
    metaTitle: "Omnichannel Contact Center Services | Multichannel Support",
    metaDescription:
      "Omnichannel contact center outsourcing: phone, chat, email, social, and messaging handled by one team to one standard, with context carried across channels.",
    heroDesc:
      "Customers do not think in channels. Omnichannel coverage puts one trained team behind phone, chat, email, social, and messaging, working to the same documented standard.",
    heroImage: "/assets/img/service-customer-support.jpg",
    heroImageAlt: "Contact center agent handling multiple support channels",
    tasksHeading: "One standard, whichever way they reach you.",
    tasks: [
      t("Phone, chat, and email coverage", "The core three handled by the same team, so answers do not vary by channel."),
      t("Social and review response", "Comments, direct messages, and public reviews answered in your brand voice."),
      t("Messaging app support", "WhatsApp and similar channels covered where your customers actually are."),
      t("Context carried across channels", "A customer who starts on chat and calls back does not repeat themselves."),
      t("Channel routing and prioritisation", "Rules for what belongs on which channel and what escalates to a call."),
      t("Unified reporting across channels", "One view of volume, response time, and resolution rather than separate silos."),
    ],
    bestSuited: [
      "Brands whose customers use several channels",
      "Businesses with inconsistent answers by channel",
      "Companies adding chat or messaging to phone support",
      "Teams with separate tools and no unified view",
    ],
    related: ["customer-support", "ecommerce-support", "inbound-call-center-services"],
    crossLinks: [
      { href: "/solutions/chat-and-social-media", label: "Chat and social media support" },
      { href: "/services/customer-support", label: "Customer support outsourcing" },
      { href: "/locations/nearshore-call-center", label: "Nearshore delivery" },
    ],
  },
  {
    slug: "call-center-analytics",
    name: "Call Center Analytics",
    accent: "accent-blue",
    icon: "monitor",
    short:
      "Reporting that explains why your numbers moved, not just what they are.",
    metaTitle: "Call Center Analytics Services | Contact Center Reporting",
    metaDescription:
      "Call center analytics and reporting: volume and contact-driver analysis, agent performance metrics, quality scorecards, SLA tracking.",
    heroDesc:
      "Most contact centre reporting says what happened. Analytics should say why it happened and what to do about it — which contact drivers are growing, where handle time is going, and which changes actually moved the number.",
    heroImage: "/assets/img/service-data-research.jpg",
    heroImageAlt: "Analyst reviewing contact center performance dashboards",
    tasksHeading: "From dashboards to decisions.",
    tasks: [
      t("Contact driver analysis", "Categorise why customers actually contact you, so volume can be reduced at source rather than absorbed."),
      t("Agent performance metrics", "Handle time, resolution rate, quality score, and adherence reported per agent and per team."),
      t("Quality assurance scorecards", "A written scorecard applied to sampled calls and tickets, with results fed back individually."),
      t("SLA and service level tracking", "Answer rate, wait time, abandonment, and first-response targets tracked against commitments."),
      t("CSAT and customer feedback analysis", "Survey results tied back to contact type, agent, and channel rather than reported in isolation."),
      t("Benchmarking and trend reporting", "Period-on-period comparison so you can tell a real change from ordinary variance."),
    ],
    bestSuited: [
      "Teams with dashboards nobody acts on",
      "Operations leaders who cannot explain a metric move",
      "Businesses whose contact volume keeps growing",
      "Companies preparing to renegotiate a vendor SLA",
    ],
    related: ["customer-support", "data-research", "technical-support"],
    crossLinks: [
      { href: "/services/speech-analytics", label: "Speech analytics" },
      { href: "/services/customer-support", label: "Customer support outsourcing" },
      { href: "/services/data-research", label: "Data and research support" },
    ],
  },
  {
    slug: "speech-analytics",
    name: "Speech Analytics",
    accent: "accent-pink",
    icon: "monitor",
    short:
      "Analyse what is actually said on calls, across all of them rather than a sample.",
    metaTitle: "Speech Analytics for Call Centers | Conversation Analysis",
    metaDescription:
      "Speech analytics for contact centers: analyse every call rather than a sample, detect compliance risk, surface emerging contact drivers.",
    heroDesc:
      "Manual quality review samples a fraction of calls. Speech analytics reads all of them — surfacing compliance risk, emerging issues, and the phrases that reliably precede an escalation.",
    heroImage: "/assets/img/service-data-research.jpg",
    heroImageAlt: "Speech analytics dashboard showing call conversation analysis",
    tasksHeading: "Every call analysed, not one in fifty.",
    tasks: [
      t("Full-coverage call analysis", "Analyse the whole call population rather than the small sample manual review can reach."),
      t("Compliance phrase monitoring", "Detect required disclosures that were missed and prohibited statements that were made."),
      t("Emerging contact driver detection", "Spot a new problem in the first week from rising phrase frequency, not in the monthly report."),
      t("Escalation and churn indicators", "Identify the language patterns that reliably precede a complaint or a cancellation."),
      t("Agent coaching insight", "Evidence-based coaching points drawn from real calls rather than impressions."),
      t("Silence, talk-over, and pacing metrics", "Structural call quality signals that correlate with customer satisfaction."),
    ],
    bestSuited: [
      "Regulated programmes with disclosure requirements",
      "Operations reviewing only a small call sample",
      "Teams reacting to problems weeks after they start",
      "Businesses with unexplained churn or complaint spikes",
    ],
    related: ["call-center-analytics", "customer-support", "data-research"],
    crossLinks: [
      { href: "/services/call-center-analytics", label: "Call center analytics" },
      { href: "/services/pci-compliant-call-center", label: "PCI-compliant call handling" },
      { href: "/services/customer-support", label: "Customer support outsourcing" },
    ],
  },
  {
    slug: "pci-compliant-call-center",
    name: "PCI-Compliant Call Center",
    accent: "accent-green",
    icon: "shield",
    short:
      "Take card payments over the phone without pulling your whole operation into PCI scope.",
    metaTitle: "PCI Compliant Call Center Services | Secure Phone Payments",
    metaDescription:
      "PCI DSS compliant call center services: secure phone payment handling, pause-and-resume recording, DTMF masking, scope reduction.",
    heroDesc:
      "Handling card details on a call is the fastest way to drag your entire contact centre into PCI DSS scope. The work is arranging things so that never happens.",
    heroImage: "/assets/img/service-accounting-support.jpg",
    heroImageAlt: "Secure phone payment handling in a compliant contact center",
    tasksHeading: "Take the payment, keep the scope small.",
    tasks: [
      t("Secure phone payment handling", "Card payments taken through controls designed so agents never hold card data."),
      t("DTMF masking and agent-blind entry", "Customers key card details directly; agents stay on the line but never see or hear them."),
      t("Pause-and-resume call recording", "Recording suspended around payment capture so card data never enters the recording store."),
      t("Scope reduction design", "Structure the flow so the smallest possible part of your estate falls inside PCI scope."),
      t("Documented agent controls", "Clean-desk rules, device restrictions, and access controls written down and enforced."),
      t("Evidence for assessment", "Documentation and logs prepared so an assessment is a review rather than an investigation."),
    ],
    bestSuited: [
      "Businesses taking card payments by phone",
      "Contact centres recording calls that include payments",
      "Companies preparing for a PCI assessment",
      "Retail, travel, and subscription businesses",
    ],
    related: ["customer-support", "ecommerce-support", "accounting-support"],
    crossLinks: [
      { href: "/services/speech-analytics", label: "Speech analytics" },
      { href: "/industries/retail", label: "Retail contact center outsourcing" },
      { href: "/industries/banking-and-financial-services", label: "Financial services outsourcing" },
    ],
  },
  {
    slug: "back-office-outsourcing",
    name: "Back Office Outsourcing",
    accent: "accent-yellow",
    icon: "workspace-grid",
    short:
      "The processing work behind the front line — documents, data, claims, and reconciliation.",
    metaTitle: "Back Office Outsourcing Services | BPO Back Office Support",
    metaDescription:
      "Back office outsourcing: document processing, data entry and validation, claims handling, order processing, reconciliation.",
    heroDesc:
      "Back office work is invisible until it is late. Outsourced processing keeps documents, claims, orders, and reconciliation moving to a defined turnaround rather than whenever someone finds time.",
    heroImage: "/assets/img/service-data-research.jpg",
    heroImageAlt: "Back office team processing documents and data",
    tasksHeading: "Processing that clears rather than accumulates.",
    tasks: [
      t("Document processing and indexing", "Receive, classify, extract, and file documents against your naming and storage rules."),
      t("Data entry and validation", "Structured entry with validation rules and error thresholds rather than volume alone."),
      t("Claims and application handling", "Process claims and applications to your criteria, flagging exceptions for review."),
      t("Order processing and fulfilment support", "Order entry, amendments, and fulfilment coordination inside your systems."),
      t("Reconciliation and exception management", "Match records, surface discrepancies, and escalate what needs a decision."),
      t("Turnaround and accuracy reporting", "Throughput, turnaround time, and error rate reported against agreed targets."),
    ],
    bestSuited: [
      "Teams with growing document or claims backlogs",
      "Businesses where processing delays reach customers",
      "Finance and operations teams doing manual matching",
      "Companies scaling volume faster than headcount",
    ],
    related: ["data-research", "accounting-support", "virtual-assistance"],
    crossLinks: [
      { href: "/locations/offshore-call-center", label: "Offshore delivery" },
      { href: "/industries/insurance", label: "Insurance outsourcing" },
      { href: "/services/accounting-support", label: "Accounting support" },
    ],
  },
  {
    slug: "help-desk-outsourcing",
    name: "Help Desk Outsourcing",
    accent: "accent-blue",
    icon: "tech",
    short:
      "A service desk for your users — tier one resolution, clean escalation, and SLA tracking.",
    metaTitle: "Help Desk Outsourcing | Outsourced IT Service Desk",
    metaDescription:
      "Help desk outsourcing and IT service desk support: tier-one resolution, ticket triage, access and account management, SLA tracking.",
    heroDesc:
      "An outsourced service desk that resolves what is documented, escalates what is genuinely novel, and keeps your engineers out of the ticket queue.",
    heroImage: "/assets/img/service-technical-support.jpg",
    heroImageAlt: "IT help desk agent supporting a user request",
    tasksHeading: "Resolve tier one, escalate cleanly.",
    tasks: [
      t("Tier-one issue resolution", "Access problems, configuration questions, and known issues resolved without touching engineering."),
      t("Ticket triage and categorisation", "Consistent categorisation so reporting reflects reality and trends are visible."),
      t("Account and access management", "Provisioning, resets, and permission changes handled through a documented process."),
      t("Onboarding and offboarding support", "Account setup and revocation as a checklist rather than an afterthought."),
      t("Documented escalation to engineering", "Escalations arrive with reproduction steps and context attached, not as forwarded confusion."),
      t("SLA tracking and service reporting", "Response and resolution times tracked against the targets you committed to."),
    ],
    bestSuited: [
      "Companies whose engineers answer support tickets",
      "Businesses growing headcount faster than IT capacity",
      "Teams with no consistent ticket categorisation",
      "Organisations with SLA commitments to meet",
    ],
    related: ["technical-support", "customer-support", "data-research"],
    crossLinks: [
      { href: "/locations/it-support-outsourcing-usa", label: "US-based IT support" },
      { href: "/services/technical-support", label: "Technical support outsourcing" },
      { href: "/industries/technology", label: "Technology outsourcing" },
    ],
  },
  {
    slug: "order-taking-services",
    name: "Order Taking Services",
    accent: "accent-orange",
    icon: "ecommerce",
    short:
      "Take orders by phone and chat, accurately, at whatever volume the day brings.",
    metaTitle: "Order Taking Services | Outsourced Phone Order Processing",
    metaDescription:
      "Outsourced order taking services: phone and chat order capture, upsell prompts, payment handling, order status and amendments.",
    heroDesc:
      "Order taking is revenue capture, not customer service. Every unanswered call at peak is a sale that went somewhere else.",
    heroImage: "/assets/img/service-ecommerce-support.jpg",
    heroImageAlt: "Agent taking a customer order by phone",
    tasksHeading: "Capture the order, protect the accuracy.",
    tasks: [
      t("Phone and chat order capture", "Orders taken directly into your system with validation at the point of entry."),
      t("Upsell and cross-sell prompts", "Approved prompts offered naturally rather than read mechanically."),
      t("Payment handling", "Card payments taken through controls that keep card data out of agents' hands."),
      t("Order status and amendments", "Changes, cancellations, and delivery queries handled inside your systems."),
      t("Peak and campaign surge capacity", "Scale into trading peaks and promotional spikes without dropping calls."),
      t("Order accuracy checks", "Validation and confirmation steps that keep error rates down as volume rises."),
    ],
    bestSuited: [
      "Retailers and brands taking phone orders",
      "Businesses with sharp promotional peaks",
      "Catalogue and direct-response operations",
      "Food, hospitality, and service booking businesses",
    ],
    related: ["ecommerce-support", "customer-support", "inbound-call-center-services"],
    crossLinks: [
      { href: "/services/pci-compliant-call-center", label: "PCI-compliant payment handling" },
      { href: "/industries/retail", label: "Retail contact center outsourcing" },
      { href: "/industries/ecommerce", label: "Ecommerce call center outsourcing" },
    ],
  },
  {
    slug: "customer-acquisition-outsourcing",
    name: "Customer Acquisition Outsourcing",
    accent: "accent-green",
    icon: "growth",
    short:
      "Turn enquiries into customers — speed to lead, qualification, and conversion follow-up.",
    metaTitle: "Customer Acquisition Outsourcing Services",
    metaDescription:
      "Customer acquisition outsourcing: speed-to-lead response, enquiry qualification, conversion follow-up, onboarding support.",
    heroDesc:
      "Most acquisition spend is wasted at the point of response. Outsourced acquisition support answers enquiries fast, qualifies them properly, and follows up until the customer either converts or clearly does not.",
    heroImage: "/assets/img/service-lead-generation.jpg",
    heroImageAlt: "Acquisition team following up on inbound enquiries",
    tasksHeading: "The work between an enquiry and a customer.",
    tasks: [
      t("Speed-to-lead response", "Contact new enquiries within minutes, when conversion rates are several times higher than an hour later."),
      t("Enquiry qualification", "Screen against your criteria so sales time goes to opportunities worth working."),
      t("Multi-touch conversion follow-up", "Sequenced follow-up until a clear outcome, rather than one attempt and a silent drop."),
      t("Onboarding and first-order support", "Help new customers complete setup or a first purchase so acquisition is not wasted at the last step."),
      t("Channel and source reporting", "Conversion reported by source so marketing spend can move toward what works."),
      t("Cost per acquired customer tracking", "Report the number that actually matters rather than leads generated."),
    ],
    bestSuited: [
      "Businesses with slow response to inbound enquiries",
      "Companies spending on ads with weak follow-up",
      "Teams that never work an enquiry more than once",
      "Businesses unclear on cost per acquired customer",
    ],
    related: ["lead-generation", "inside-sales-outsourcing", "digital-marketing"],
    crossLinks: [
      { href: "/services/inside-sales-outsourcing", label: "Inside sales outsourcing" },
      { href: "/services/outbound-call-center-services", label: "Outbound call center services" },
      { href: "/services/digital-marketing", label: "Digital marketing support" },
    ],
  },
  {
    slug: "customer-experience-consulting",
    name: "Customer Experience Consulting",
    accent: "accent-mint",
    icon: "target",
    short:
      "Diagnose why your support underperforms before you spend money scaling it.",
    metaTitle: "Customer Experience Consulting | CX Outsourcing Advisory",
    metaDescription:
      "Customer experience consulting: contact driver analysis, journey mapping, support process design, quality framework build.",
    heroDesc:
      "Scaling a support operation that is not working produces a larger operation that is not working. This is the diagnostic step that comes first.",
    heroImage: "/assets/img/services-overview.jpg",
    heroImageAlt: "Team mapping a customer experience improvement plan",
    tasksHeading: "Understand it before you scale it.",
    tasks: [
      t("Contact driver analysis", "Establish why customers actually contact you and which drivers can be removed at source."),
      t("Customer journey mapping", "Map where effort, delay, and drop-off occur across the whole journey rather than one channel."),
      t("Support process design", "Design workflows, escalation rules, and ownership before they are handed to any team."),
      t("Quality framework build", "Build the scorecard, sampling rate, and coaching loop that keep standards from drifting."),
      t("Technology and channel review", "Assess whether your tooling and channel mix match how customers behave."),
      t("Costed improvement roadmap", "A sequenced plan with effort and expected effect, not a list of recommendations."),
    ],
    bestSuited: [
      "Teams about to scale a struggling support function",
      "Businesses with rising volume and falling satisfaction",
      "Companies choosing between tools or vendors",
      "Operations leaders needing a costed plan to present",
    ],
    related: ["customer-support", "call-center-analytics", "technical-support"],
    crossLinks: [
      { href: "/services/call-center-analytics", label: "Call center analytics" },
      { href: "/services/customer-support", label: "Customer support outsourcing" },
      { href: "/blog/outsourced-customer-service-cost", label: "What outsourced support costs" },
    ],
  },
  {
    /*
     * Bilingual support is referenced as a requirement on almost every US state
     * and metro page — Texas, California, Florida, Arizona, San Antonio — and
     * had nowhere to link to. It is also what takes the services grid to 24, so
     * every row on /services is full.
     */
    slug: "bilingual-call-center-services",
    name: "Bilingual Call Center Services",
    accent: "accent-yellow",
    icon: "globe",
    short:
      "Live Spanish and English agents on one queue, because a callback is a lost customer.",
    metaTitle: "Bilingual Call Center Services | Spanish Support",
    metaDescription:
      "Bilingual call center outsourcing: live Spanish and English agents on one queue, with identical service standards and verification in both languages.",
    heroDesc:
      "Routing Spanish-speaking callers to a callback rather than a live agent measurably costs conversions. Bilingual agents on the same queue keep the experience identical whichever language the caller opens with.",
    heroImage: "/assets/img/service-customer-support.jpg",
    heroImageAlt: "Bilingual support agent taking a customer call",
    tasksHeading: "One queue, one standard, two languages.",
    tasks: [
      t("Live bilingual answering", "Spanish and English handled by the same agents on the same queue rather than a separate line with its own wait time."),
      t("Written scripts in both languages", "Scripts authored in Spanish rather than translated live, so accuracy does not depend on the agent improvising."),
      t("Verification in both languages", "Identity and authority checks held to identical rigour whichever language the call is in."),
      t("Neutral Spanish for mixed markets", "Neutral register where your customers span several Spanish-speaking countries, regional where they do not."),
      t("Bilingual written follow-up", "Confirmations, emails, and messages that match the language of the call rather than defaulting to English."),
      t("Language mix reporting", "Report what share of contact arrives in each language so staffing follows the data."),
    ],
    bestSuited: [
      "Consumer businesses in Texas, California, Florida, and Arizona",
      "Companies routing Spanish callers to a callback today",
      "Healthcare and insurance with mixed-language members",
      "Retail and services with a national US customer base",
    ],
    related: ["customer-support", "inbound-call-center-services", "order-taking-services"],
    crossLinks: [
      { href: "/solutions/multilingual-support", label: "Multilingual support" },
      { href: "/locations/call-center-outsourcing-texas", label: "Texas coverage" },
      { href: "/locations/call-center-outsourcing-california", label: "California coverage" },
    ],
  },
];
