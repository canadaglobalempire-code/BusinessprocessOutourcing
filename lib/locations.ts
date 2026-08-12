/*
 * Location pages.
 *
 * Two distinct kinds, deliberately in one route because the template is shared:
 *   "market"   — where the BUYER is. Someone in London searching for a provider
 *                who serves the UK.
 *   "delivery" — where the WORK happens. A US buyer searching "bpo mexico"
 *                who wants to outsource to Mexico.
 *   "specialty" — an industry or service qualified by a place, e.g.
 *                "healthcare bpo philippines". Only built where the combined
 *                keyword actually has search volume — see PHASE-4 note below.
 *
 * Copy describes the market and the coverage we staff for it. It deliberately
 * does NOT assert owned facilities, seat counts, or certifications — add those
 * per location once they can be stated accurately.
 */
import { COUNTRY_LOCATIONS } from "./locations-countries";
import { CITY_LOCATIONS } from "./locations-cities";
import { STATE_LOCATIONS } from "./locations-states";
import { METRO_LOCATIONS } from "./locations-metros";

export type Location = {
  slug: string;
  name: string;
  kind: "market" | "delivery" | "specialty";
  seoTitle: string;
  metaDescription: string;
  summary: string;
  intro: string;
  body: { heading: string; paragraphs: string[] };
  highlights: string[];
  highlightDetails: Record<string, string>;
  /** Contextual links OUT of the locations silo. Falls back to DEFAULT_LOCATION_LINKS. */
  crossLinks?: { href: string; label: string }[];

  /* ---- Optional depth, rendered only when present. ----------------------
     Used by the US state pages, which have to outrank established directory
     sites rather than merely exist. Each block adds a real heading level:
     deepDive gives H2 + H3, metros gives H3 + H4. Country and city pages
     leave these undefined and render exactly as before. -------------------- */
  deepDive?: { heading: string; sections: { title: string; body: string }[] }[];
  /** Major metros inside a state, each with its own economic reason to appear. */
  metros?: { name: string; note: string }[];
  /** Page-specific FAQ. Falls back to the generated one when absent. */
  faq?: { q: string; a: string }[];
  /**
   * Headline, where it should differ from the title tag. Titles carry a
   * "| qualifier" tail for the SERP that reads badly as an on-page headline.
   */
  h1?: string;
  /** Set on administrative areas so schema can express geographic containment. */
  withinCountry?: string;
};

const CORE_LOCATIONS: Location[] = [
  /* ---------- Buyer markets ---------- */
  {
    slug: "call-center-outsourcing-usa",
    name: "United States",
    kind: "market",
    seoTitle: "Call Center Outsourcing for US Companies",
    metaDescription:
      "Call center outsourcing for US companies: US-based and nearshore agents, all four continental time zones, inbound and outbound coverage.",
    summary:
      "Outsourced call center and back-office coverage for companies operating in the United States, across US-based and nearshore delivery.",
    intro:
      "US companies outsource for two different reasons: to cover hours their own staff cannot, and to add capacity faster than they can hire. Both are solvable without giving up control of how customers are treated.",
    body: {
      heading: "Coverage that matches how US customers actually call.",
      paragraphs: [
        "A team in New York and a customer in Los Angeles are three hours apart, which means a nine-to-five support desk is closed for a large share of the working day somewhere in your customer base. Extending coverage across all four continental time zones is usually the first thing worth fixing, and it rarely requires a larger internal team.",
        "You can choose where the work sits. US-based agents suit regulated work, sensitive accounts, and any program where callers must reach a domestic agent. Nearshore delivery in Latin America runs on overlapping business hours at lower cost and handles most volume-driven support well. Many programs use both, splitting by call type rather than by cost alone.",
        "Whichever mix you choose, scripts, escalation rules, quality standards, and reporting are agreed with you before launch and reviewed against recorded calls as volume grows.",
      ],
    },
    highlights: [
      "Coverage across all US time zones",
      "US-based agents where the work requires it",
      "Nearshore delivery on overlapping hours",
      "Inbound customer care and technical support",
      "Outbound sales, follow-up, and appointment setting",
      "Compliance-aware handling for regulated programs",
    ],
    highlightDetails: {
      "Coverage across all US time zones":
        "Extend answering hours to cover Eastern through Pacific, plus evenings and weekends, without adding internal headcount.",
      "US-based agents where the work requires it":
        "Keep sensitive, regulated, or brand-critical programs on domestic agents while routing volume work elsewhere.",
      "Nearshore delivery on overlapping hours":
        "Latin American delivery runs on US business hours, which removes the handoff delays that offshore-only models create.",
      "Inbound customer care and technical support":
        "Phone, email, chat, and ticket coverage handled against your documented workflows and escalation rules.",
      "Outbound sales, follow-up, and appointment setting":
        "Structured outbound programs for lead follow-up, renewals, reactivation, and booked meetings.",
      "Compliance-aware handling for regulated programs":
        "Access controls, recorded-call handling rules, and documented boundaries for what agents may and may not say.",
    },
  },
  {
    slug: "call-center-outsourcing-uk",
    name: "United Kingdom",
    kind: "market",
    seoTitle: "Call Centre Outsourcing for UK Companies",
    metaDescription:
      "Call centre outsourcing for UK companies: UK business-hours coverage, UK data protection expectations, inbound customer service, and outbound sales support.",
    summary:
      "Outsourced call centre and back-office coverage for companies serving customers in the United Kingdom.",
    intro:
      "UK companies outsourcing customer contact usually care about three things before price: who answers, when they answer, and where customer data sits. Those are the questions this page is built around.",
    body: {
      heading: "Coverage built for UK business hours and UK expectations.",
      paragraphs: [
        "UK callers expect to reach a person during UK business hours, and increasingly outside them. Coverage that only overlaps with a US working day misses the British morning entirely, which is when a large share of inbound volume arrives. Delivery is scheduled against UK hours rather than fitted around another market's shift pattern.",
        "Data protection is the second question and it deserves a direct answer rather than reassurance. UK GDPR expectations mean you should establish where customer data is processed, what access agents have, how recordings are handled, and what the data processing agreement covers before any calls are taken. We will document all four for your programme.",
        "Scripts, tone, and escalation rules are agreed with you first. For UK consumer-facing brands, tone in particular is worth defining explicitly — the register that works for a US audience often reads as overfamiliar to a British one.",
      ],
    },
    highlights: [
      "UK business-hours and out-of-hours coverage",
      "Documented data handling and processing terms",
      "Inbound customer service and enquiry handling",
      "Outbound sales and appointment setting",
      "Overflow cover for busy periods",
      "Tone and scripting matched to a UK audience",
    ],
    highlightDetails: {
      "UK business-hours and out-of-hours coverage":
        "Shifts scheduled against UK time rather than fitted around another market, including evenings and weekends where needed.",
      "Documented data handling and processing terms":
        "Where data is processed, what agents can access, how recordings are handled, and what the processing agreement covers — established before launch.",
      "Inbound customer service and enquiry handling":
        "Phone, email, and chat coverage for customer questions, orders, accounts, and service requests.",
      "Outbound sales and appointment setting":
        "Outbound programmes for lead follow-up, renewals, and booked meetings, run against criteria you define.",
      "Overflow cover for busy periods":
        "Absorb seasonal peaks, campaign spikes, and staff absence so your main line keeps being answered.",
      "Tone and scripting matched to a UK audience":
        "Scripts written and reviewed for a British register rather than translated from a US template.",
    },
  },
  {
    slug: "call-center-outsourcing-dubai",
    name: "Dubai and the UAE",
    kind: "market",
    seoTitle: "Call Center Outsourcing in Dubai and the UAE",
    metaDescription:
      "Call center outsourcing for Dubai and UAE companies: Arabic and English bilingual agents, Gulf business-hours coverage including Sunday to Thursday weeks.",
    summary:
      "Outsourced call center coverage for companies operating in Dubai and the wider UAE, including Arabic and English bilingual support.",
    intro:
      "The UAE market has requirements most outsourcing templates ignore: a working week that starts on Monday but historically ran Sunday to Thursday, a customer base that switches between Arabic and English mid-conversation, and a resident population drawn from dozens of language groups.",
    body: {
      heading: "Bilingual coverage built for how the Gulf actually communicates.",
      paragraphs: [
        "Arabic and English bilingual capability is the baseline, not an upgrade. A UAE caller may open in English and switch to Arabic when the conversation gets detailed, and an agent who cannot follow that switch loses the thread of the call. Bilingual agents are staffed on the same queue rather than behind a callback.",
        "Beyond Arabic and English, the UAE's resident population makes additional language coverage genuinely useful — Hindi, Urdu, Tagalog, and Malayalam all appear in ordinary consumer support volume. Which languages you need depends entirely on your customer base, so it is worth measuring before it is worth buying.",
        "Coverage is scheduled against Gulf business hours, including the weekend pattern your customers actually keep. Ramadan hours and public holidays are planned rather than absorbed as a service dip.",
      ],
    },
    highlights: [
      "Arabic and English bilingual agents",
      "Gulf business-hours and weekend coverage",
      "Additional South Asian language coverage",
      "Inbound customer care and enquiry handling",
      "Outbound sales and appointment setting",
      "Ramadan and public holiday planning",
    ],
    highlightDetails: {
      "Arabic and English bilingual agents":
        "Agents who can follow a conversation that switches language mid-call, staffed live on the same queue rather than behind a callback.",
      "Gulf business-hours and weekend coverage":
        "Shifts scheduled against the working week your customers keep, not a Western default.",
      "Additional South Asian language coverage":
        "Hindi, Urdu, Tagalog, and Malayalam coverage where your customer base calls for it.",
      "Inbound customer care and enquiry handling":
        "Phone, chat, and email coverage for customer questions, bookings, accounts, and service requests.",
      "Outbound sales and appointment setting":
        "Outbound programmes for lead follow-up and booked meetings, run against criteria you define.",
      "Ramadan and public holiday planning":
        "Adjusted coverage planned in advance rather than absorbed as a drop in service level.",
    },
  },
  {
    slug: "call-center-outsourcing-europe",
    name: "Europe",
    kind: "market",
    seoTitle: "Call Center Outsourcing for European Companies",
    metaDescription:
      "Multilingual call center outsourcing for European companies: coverage across major European languages, GDPR-aware data handling.",
    summary:
      "Multilingual outsourced call center coverage for companies serving customers across European markets.",
    intro:
      "Selling across Europe means supporting across Europe, and that is a language problem before it is a capacity problem. A single English-only support line quietly caps how well you perform in every non-English market you sell into.",
    body: {
      heading: "One programme, several languages, one standard of service.",
      paragraphs: [
        "The practical question is which languages earn a dedicated queue and which are better served by scheduled coverage. High-volume markets usually justify their own agents; smaller markets are often better handled by pooled multilingual agents covering several languages across a shift. Getting this split right is most of the cost difference between a workable European programme and an expensive one.",
        "GDPR is the second consideration and it is not satisfied by a checkbox. Where data is processed, which agents can access what, how call recordings are retained, and what your data processing agreement specifies should all be documented before the first call. We establish these with you rather than after go-live.",
        "Service standards are defined once and applied across every language, so a customer in Warsaw and a customer in Lisbon get the same handling — not whichever standard the local team happened to inherit.",
      ],
    },
    highlights: [
      "Coverage across major European languages",
      "GDPR-aware data handling and processing terms",
      "Support scheduled to European business hours",
      "Inbound customer service across channels",
      "One service standard applied across languages",
      "Capacity that flexes by market",
    ],
    highlightDetails: {
      "Coverage across major European languages":
        "Dedicated queues for high-volume markets and pooled multilingual coverage for smaller ones, split to match your actual volume.",
      "GDPR-aware data handling and processing terms":
        "Processing location, agent access, recording retention, and the data processing agreement documented before launch.",
      "Support scheduled to European business hours":
        "Shifts built around Central and Western European hours rather than fitted around another region.",
      "Inbound customer service across channels":
        "Phone, email, and chat handled to the same documented standard in every language you support.",
      "One service standard applied across languages":
        "Quality checks and reporting applied uniformly, so service does not vary by market.",
      "Capacity that flexes by market":
        "Add or reduce coverage in a single language as that market grows without rebuilding the whole programme.",
    },
  },

  /* ---------- Delivery origins ---------- */
  {
    slug: "call-center-outsourcing-mexico",
    name: "Mexico",
    kind: "delivery",
    seoTitle: "Call Center Outsourcing in Mexico | Nearshore BPO",
    metaDescription:
      "Call center outsourcing in Mexico: nearshore agents on US time zones, Spanish and English bilingual support, and lower delivery cost than onshore US staffing.",
    summary:
      "Nearshore call center outsourcing in Mexico for US companies that need bilingual coverage on overlapping business hours.",
    intro:
      "Mexico is the default nearshore choice for US companies, and the reason is time zones before it is cost. Mexican delivery runs on the same business day as your US team, which removes the overnight handoff that offshore-only models depend on.",
    body: {
      heading: "Nearshore delivery on your business day.",
      paragraphs: [
        "The operational argument for Mexico is same-day overlap. When an escalation happens at 2 p.m. in Chicago, someone is at their desk in Mexico to handle it — not starting a shift twelve hours later. For any program where supervisors, account managers, and agents need to talk during the working day, that overlap is worth more than the per-seat difference between delivery locations.",
        "Bilingual capability is the second reason. Spanish-language support is a growing requirement for most US consumer businesses, and Mexican delivery supplies genuinely bilingual agents rather than English speakers with Spanish as a second language. For Spanish-dominant callers that distinction is immediately audible.",
        "Cultural proximity matters more than it sounds. Agents who follow US references, holidays, retail seasons, and consumer expectations need less scripting to sound natural, which shortens onboarding and reduces the number of escalations that exist only because a caller felt misunderstood.",
      ],
    },
    highlights: [
      "US time zone overlap through the working day",
      "Spanish and English bilingual agents",
      "Lower cost than onshore US delivery",
      "Cultural proximity to US customers",
      "Inbound customer care and technical support",
      "Outbound sales and collections support",
    ],
    highlightDetails: {
      "US time zone overlap through the working day":
        "Escalations, coaching, and account conversations happen inside the same business day rather than across an overnight gap.",
      "Spanish and English bilingual agents":
        "Genuinely bilingual coverage for Spanish-dominant callers, not English speakers reading a translated script.",
      "Lower cost than onshore US delivery":
        "Meaningfully lower per-seat cost than domestic US staffing while keeping same-day working hours.",
      "Cultural proximity to US customers":
        "Shorter onboarding and fewer escalations caused by missed context, references, or expectations.",
      "Inbound customer care and technical support":
        "Phone, chat, and email coverage against your documented workflows and escalation rules.",
      "Outbound sales and collections support":
        "Outbound programs for follow-up, renewals, reactivation, and receivables contact.",
    },
  },
  {
    slug: "call-center-outsourcing-philippines",
    name: "the Philippines",
    kind: "delivery",
    seoTitle: "Call Center Outsourcing in the Philippines | Offshore BPO",
    metaDescription:
      "Call center outsourcing in the Philippines: neutral-accent English agents, 24/7 coverage, deep BPO talent pool.",
    summary:
      "Offshore call center outsourcing in the Philippines for companies that need round-the-clock English-language coverage at scale.",
    intro:
      "The Philippines is the largest voice-BPO market in the world, and for round-the-clock English-language support at volume it remains the most practical option available.",
    body: {
      heading: "Scale and 24/7 coverage in English.",
      paragraphs: [
        "The depth of the talent pool is the real advantage. Because contact center work is an established career path rather than a stopgap job, you can hire experienced agents and team leads at volumes that are difficult to reach anywhere else. For programs that need fifty or two hundred seats, that depth is the difference between a launch that happens in weeks and one that happens in quarters.",
        "English proficiency is high and the accent is comparatively neutral for US and UK listeners, which is why Filipino delivery handles consumer-facing voice work that other offshore locations struggle with. Written English is strong too, which matters more than it used to as support volume shifts toward chat and email.",
        "The time difference is the trade-off, and it cuts both ways. Philippine delivery makes genuine 24/7 coverage straightforward, because overnight in the US is daytime there. It also means your account conversations need a deliberately scheduled overlap window rather than an assumption that someone will be available.",
      ],
    },
    highlights: [
      "Round-the-clock coverage including overnight US hours",
      "Large, experienced contact center talent pool",
      "Neutral-accent English for US and UK callers",
      "Strong written English for chat and email",
      "Scale for high-volume programs",
      "Lower delivery cost than nearshore or onshore",
    ],
    highlightDetails: {
      "Round-the-clock coverage including overnight US hours":
        "Overnight in the US is daytime in Manila, which makes genuine 24/7 answering straightforward rather than a night-shift premium.",
      "Large, experienced contact center talent pool":
        "Hire experienced agents and team leads at volumes that shorten launch timelines for large programs.",
      "Neutral-accent English for US and UK callers":
        "Voice coverage that consumer-facing brands can put in front of customers without accent becoming the subject of the call.",
      "Strong written English for chat and email":
        "Chat, email, and ticket handling to a standard that holds up as support volume shifts away from voice.",
      "Scale for high-volume programs":
        "Fifty to several hundred seats without exhausting the local labour market.",
      "Lower delivery cost than nearshore or onshore":
        "The lowest per-seat cost of the delivery locations here, in exchange for the time difference.",
    },
  },
  {
    slug: "call-center-outsourcing-colombia",
    name: "Colombia",
    kind: "delivery",
    seoTitle: "Call Center Outsourcing in Colombia | Nearshore BPO",
    metaDescription:
      "Call center outsourcing in Colombia: nearshore bilingual agents on US Eastern time, neutral Spanish for Latin American markets.",
    summary:
      "Nearshore call center outsourcing in Colombia, with US Eastern time overlap and neutral Spanish for Latin American customers.",
    intro:
      "Colombia has become the strongest nearshore alternative to Mexico, and for companies serving customers across Latin America it has one specific advantage: Colombian Spanish is widely considered the most neutral in the region.",
    body: {
      heading: "Neutral Spanish on US Eastern hours.",
      paragraphs: [
        "If you support customers in several Latin American countries, accent neutrality stops being a detail. Regional Spanish varies enough that a strongly accented agent can read as foreign to a large share of your callers. Colombian Spanish — Bogotá in particular — travels better across the region than most alternatives, which makes one team viable where you might otherwise need several.",
        "Bogotá sits on US Eastern time for most of the year, so overlap with US operations is close to complete. Escalations, coaching, and account reviews happen during the working day without either side taking an unsociable shift.",
        "The contact center sector there has grown quickly, which means both an expanding pool of trained agents and real competition for the best of them. Retention planning is worth building into a Colombian program from the start rather than treating it as a problem to solve later.",
      ],
    },
    highlights: [
      "US Eastern time overlap",
      "Neutral Spanish for Latin American markets",
      "Bilingual English and Spanish agents",
      "Growing, trained contact center workforce",
      "Inbound customer care and technical support",
      "Outbound sales and retention programs",
    ],
    highlightDetails: {
      "US Eastern time overlap":
        "Bogotá aligns with US Eastern hours for most of the year, giving near-complete overlap with US operations.",
      "Neutral Spanish for Latin American markets":
        "Accent that travels across the region, so one team can serve several Latin American markets credibly.",
      "Bilingual English and Spanish agents":
        "Coverage for both language groups on the same programme rather than two separate teams.",
      "Growing, trained contact center workforce":
        "An expanding pool of experienced agents, with retention planning built in from the start.",
      "Inbound customer care and technical support":
        "Phone, chat, and email coverage run against your documented workflows.",
      "Outbound sales and retention programs":
        "Outbound follow-up, renewals, and win-back campaigns against criteria you define.",
    },
  },
  {
    slug: "call-center-outsourcing-india",
    name: "India",
    kind: "delivery",
    seoTitle: "Call Center Outsourcing in India | Offshore BPO Services",
    metaDescription:
      "Call center outsourcing in India: technical support and back-office depth, 24/7 coverage, large English-speaking talent pool.",
    summary:
      "Offshore call center and back-office outsourcing in India, with particular depth in technical support and process work.",
    intro:
      "India's advantage has shifted. For straightforward consumer voice support other locations now compete strongly, but for technical support, back-office processing, and anything requiring analytical depth, the Indian talent pool remains hard to match.",
    body: {
      heading: "Depth in technical and process work.",
      paragraphs: [
        "The engineering and IT workforce is the reason. Technical support programs that need agents who can genuinely troubleshoot — rather than read a decision tree — are easier to staff in India than almost anywhere else, and at a cost that makes tiered support economically sensible.",
        "Back-office and process work is the second strength: data processing, finance and accounting support, claims handling, and document work all draw on an established professional services base rather than a purely contact-center one.",
        "For consumer voice programs, be deliberate. Accent and cultural distance can matter for some US and UK consumer brands, and where that is a real concern a hybrid model works better — technical and back-office work delivered from India, front-line consumer voice handled nearshore or onshore.",
      ],
    },
    highlights: [
      "Deep technical support capability",
      "Back-office and process outsourcing strength",
      "Round-the-clock coverage",
      "Large English-speaking talent pool",
      "Finance, accounting, and data processing support",
      "Cost-effective tiered support models",
    ],
    highlightDetails: {
      "Deep technical support capability":
        "Agents who can troubleshoot rather than read a decision tree, which makes genuine tier-two support affordable.",
      "Back-office and process outsourcing strength":
        "Data processing, claims handling, document work, and finance support drawn from an established professional services base.",
      "Round-the-clock coverage":
        "The time difference makes overnight coverage of US and European hours straightforward.",
      "Large English-speaking talent pool":
        "Scale for large programs across both voice and non-voice work.",
      "Finance, accounting, and data processing support":
        "Back-office functions handled alongside customer contact under one engagement.",
      "Cost-effective tiered support models":
        "Structure tier one, tier two, and back-office layers at a cost that makes the tiering worthwhile.",
    },
  },
  {
    slug: "nearshore-call-center",
    name: "Nearshore",
    kind: "delivery",
    seoTitle: "Nearshore Call Center Services | Nearshore Outsourcing",
    metaDescription:
      "Nearshore call center services in Latin America: same-day time zone overlap with US operations, bilingual Spanish and English agents.",
    summary:
      "Nearshore call center outsourcing across Latin America, chosen when time zone overlap matters more than the lowest possible seat cost.",
    intro:
      "Nearshore means delivery in a country close enough to share your business day. For US companies that is Latin America, and the reason to choose it over offshore is almost always the same: you want people available while your own team is working.",
    body: {
      heading: "When the working day matters more than the seat rate.",
      paragraphs: [
        "The case for nearshore is operational rather than financial. Offshore delivery costs less per seat. Nearshore costs less in everything that happens around the seat — escalations resolved the same afternoon instead of the next morning, supervisors reachable during your business hours, coaching that happens live rather than through a handover document, and account reviews that do not require someone to take a midnight call.",
        "Bilingual Spanish and English coverage comes with the territory, which matters increasingly for US consumer businesses. Cultural proximity does too: agents who follow US references, holidays, and consumer expectations need less scripting to sound natural.",
        "The honest trade-off is cost and scale. Nearshore sits above offshore on both per-seat price and the difficulty of hiring several hundred agents quickly. For programs where those constraints bind, a split model — nearshore for escalations and complex calls, offshore for overnight volume — usually beats choosing one.",
      ],
    },
    highlights: [
      "Same-day overlap with US business hours",
      "Bilingual Spanish and English coverage",
      "Live coaching and same-day escalation",
      "Cultural proximity to US customers",
      "Lower cost than onshore US delivery",
      "Works alongside offshore for overnight volume",
    ],
    highlightDetails: {
      "Same-day overlap with US business hours":
        "Supervisors and agents are at their desks while your team is, so nothing waits for an overnight handoff.",
      "Bilingual Spanish and English coverage":
        "Both language groups covered on one programme rather than two separate teams.",
      "Live coaching and same-day escalation":
        "Quality issues get addressed the same afternoon instead of through a handover document.",
      "Cultural proximity to US customers":
        "Shorter onboarding and fewer escalations caused by missed context or expectations.",
      "Lower cost than onshore US delivery":
        "Meaningfully below domestic staffing while keeping the working-day overlap.",
      "Works alongside offshore for overnight volume":
        "Split models put complex and escalated calls nearshore and overnight volume offshore.",
    },
  },
  {
    slug: "offshore-call-center",
    name: "Offshore",
    kind: "delivery",
    seoTitle: "Offshore Call Center Services | Offshore Outsourcing",
    metaDescription:
      "Offshore call center services: 24/7 coverage, the lowest per-seat delivery cost, large-scale hiring capacity, and strong technical and back-office capability.",
    summary:
      "Offshore call center outsourcing in Asia, chosen for round-the-clock coverage, scale, and the lowest per-seat delivery cost.",
    intro:
      "Offshore means delivery far enough away that the working day does not overlap — typically Asia for US and European buyers. That distance is the disadvantage and the entire point at the same time.",
    body: {
      heading: "Round-the-clock coverage at the lowest per-seat cost.",
      paragraphs: [
        "The time difference that complicates account management is exactly what makes 24/7 coverage practical. Overnight in New York is daytime in Manila, so a genuine round-the-clock desk can be staffed with people working ordinary hours rather than paying a night-shift premium to a domestic team.",
        "Scale is the second reason. Established offshore markets can hire fifty or several hundred agents in a timeframe that nearshore and onshore markets cannot match, which matters for large launches and for any program with sharp seasonal peaks.",
        "The cost per seat is the lowest of any option here. What it costs you instead is immediacy: escalations cross a time gap, coaching happens through handover, and account conversations need a deliberately scheduled overlap window. Programs that plan for those three things do well offshore. Programs that assume someone will just be available do not.",
      ],
    },
    highlights: [
      "Genuine 24/7 coverage without night-shift premiums",
      "Lowest per-seat delivery cost",
      "Large-scale and rapid hiring capacity",
      "Strong technical support and back-office depth",
      "Well-established BPO infrastructure",
      "Works alongside nearshore for daytime escalation",
    ],
    highlightDetails: {
      "Genuine 24/7 coverage without night-shift premiums":
        "Overnight hours in your market are ordinary working hours offshore, which is what makes round-the-clock affordable.",
      "Lowest per-seat delivery cost":
        "The most cost-efficient delivery option, in exchange for the loss of same-day overlap.",
      "Large-scale and rapid hiring capacity":
        "Staff large launches and seasonal peaks at volumes nearshore markets cannot match.",
      "Strong technical support and back-office depth":
        "Tiered technical support and process work alongside front-line customer contact.",
      "Well-established BPO infrastructure":
        "Mature markets with experienced management layers, not first-generation operations.",
      "Works alongside nearshore for daytime escalation":
        "Pair offshore overnight volume with nearshore coverage for complex and escalated calls.",
    },
  },

  /* ---------- Specialty: industry or service × place ----------
   * PHASE-4 NOTE. These exist only where the combined keyword has measured
   * search volume. The full industry × location matrix is 160 combinations;
   * the keyword data supports four. Building the other 156 would be thin
   * content. Re-check against a fresh export before adding more. */
  {
    slug: "healthcare-bpo-philippines",
    crossLinks: [
      { href: "/services/hipaa-medical-answering-service", label: "HIPAA medical answering service" },
      { href: "/industries/healthcare", label: "Healthcare outsourcing" },
      { href: "/blog/hipaa-compliance-outsourcing-patient-calls", label: "HIPAA vendor checklist" },
    ],
    name: "Healthcare BPO in the Philippines",
    kind: "specialty",
    seoTitle: "Healthcare BPO Philippines | Medical Billing Support",
    metaDescription:
      "Healthcare BPO in the Philippines: medical billing and coding, claims processing, patient scheduling, and 24/7 patient support.",
    summary:
      "Healthcare business process outsourcing delivered from the Philippines, covering medical billing, claims, coding, and patient communication.",
    intro:
      "Healthcare is the largest specialised segment of Philippine outsourcing, and the reason is the talent pool. The country trains far more nurses and allied health graduates than its own health system absorbs, and a significant number build careers in healthcare BPO instead.",
    body: {
      heading: "Clinical literacy at offshore scale.",
      paragraphs: [
        "The practical difference shows up in the work. Medical billing, coding, claims follow-up, and prior authorisation all require someone who understands clinical terminology rather than someone matching strings on a form. A workforce with genuine health training handles denial reasons, coding queries, and payer conversations at a level that general contact center staffing does not reach.",
        "Time zones make it work for US providers. Overnight in the United States is the Philippine working day, which means claims worked, eligibility checked, and billing queues cleared while your office is closed — and results waiting when it opens. For patient-facing lines it means genuine 24/7 answering without paying a domestic night-shift premium.",
        "HIPAA is the part to get right rather than assume. Offshore processing of protected health information is permitted, but it requires a signed business associate agreement, least-privilege access, explicit rules on what may be recorded, retained, or exported, and documented workforce training. Establish all of it before the first record is touched — this is a decision to make deliberately, not one to discover later.",
      ],
    },
    highlights: [
      "Medical billing and revenue cycle support",
      "Medical coding and claims follow-up",
      "Prior authorisation and eligibility verification",
      "Patient scheduling and reminder calls",
      "24/7 patient support on US hours",
      "Documented HIPAA safeguards and business associate agreement",
    ],
    highlightDetails: {
      "Medical billing and revenue cycle support":
        "Charge entry, payment posting, denial management, and accounts receivable follow-up worked overnight so queues are clear each morning.",
      "Medical coding and claims follow-up":
        "Coding support and payer follow-up handled by staff who understand clinical terminology rather than matching codes mechanically.",
      "Prior authorisation and eligibility verification":
        "Insurance verification and authorisation chasing completed before appointments rather than discovered at check-in.",
      "Patient scheduling and reminder calls":
        "Booking, confirmation, and reminder calls that reduce no-shows, written straight into your practice management system.",
      "24/7 patient support on US hours":
        "Genuine round-the-clock patient answering staffed by people working ordinary daytime hours.",
      "Documented HIPAA safeguards and business associate agreement":
        "Least-privilege access, explicit recording and retention rules, workforce training, and a signed BAA before any PHI is handled.",
    },
  },
  {
    slug: "telemarketing-philippines",
    crossLinks: [
      { href: "/services/inside-sales-outsourcing", label: "Inside sales outsourcing" },
      { href: "/services/lead-generation", label: "Lead generation" },
      { href: "/solutions/appointment-setting", label: "Appointment setting" },
    ],
    name: "Telemarketing in the Philippines",
    kind: "specialty",
    seoTitle: "Telemarketing Philippines | Outsourced Outbound Calling",
    metaDescription:
      "Outsource telemarketing to the Philippines: outbound calling at scale, neutral-accent English agents, lead qualification and appointment setting.",
    summary:
      "Outsourced telemarketing and outbound calling delivered from the Philippines, for programmes that need volume without sacrificing conversation quality.",
    intro:
      "Outbound calling is a volume business, and volume is what Philippine delivery does better than anywhere else at a comparable standard of spoken English. The question is never whether you can make enough calls — it is whether the conversations are good enough to be worth making.",
    body: {
      heading: "Outbound volume that still sounds like a conversation.",
      paragraphs: [
        "Accent is the reason telemarketing works from the Philippines and struggles from some other offshore markets. For US and UK listeners the accent is comparatively neutral, which matters more on outbound than inbound — an outbound call is already an interruption, and anything that adds friction in the first five seconds ends it.",
        "Scale is the second reason. Contact center work is an established career path, so you can staff a fifty-seat outbound programme with experienced callers rather than first-time hires, and replace attrition without the programme stalling.",
        "Compliance is where outbound programmes get expensive if handled loosely. For US calling, TCPA rules, national and internal do-not-call lists, calling-hour restrictions, and consent requirements are your legal obligation regardless of who dials. Those rules are built into scripts, dialer configuration, and list hygiene from the start — not bolted on after a complaint.",
      ],
    },
    highlights: [
      "Outbound calling at scale",
      "Neutral-accent English callers",
      "Lead qualification against your criteria",
      "Appointment setting and confirmation",
      "TCPA, DNC, and calling-hour compliance built in",
      "List hygiene and CRM logging",
    ],
    highlightDetails: {
      "Outbound calling at scale":
        "Staff large outbound programmes with experienced callers and absorb attrition without the campaign stalling.",
      "Neutral-accent English callers":
        "Accent that does not add friction in the first five seconds of an interruption call.",
      "Lead qualification against your criteria":
        "Screen for budget, authority, need, and timing using the questions you define, so passed leads are worth working.",
      "Appointment setting and confirmation":
        "Meetings booked into your team's calendars with confirmation and reminder steps to reduce no-shows.",
      "TCPA, DNC, and calling-hour compliance built in":
        "Consent rules, suppression lists, and time-zone calling windows configured into scripts and dialers from day one.",
      "List hygiene and CRM logging":
        "Suppression, deduplication, and consistent CRM logging so reporting reflects reality and bad records leave the list.",
    },
  },
  {
    slug: "it-support-outsourcing-usa",
    crossLinks: [
      { href: "/services/technical-support", label: "Technical support outsourcing" },
      { href: "/industries/technology", label: "Technology outsourcing" },
      { href: "/locations/call-center-outsourcing-usa", label: "US market coverage" },
    ],
    name: "US-Based IT Support Outsourcing",
    kind: "specialty",
    seoTitle: "IT Support Outsourcing USA | US-Based Help Desk Services",
    metaDescription:
      "US-based IT support outsourcing and help desk services: onshore tier-one and tier-two support, documented security controls.",
    summary:
      "Onshore IT support and service desk outsourcing for US companies that need domestic delivery for security, contractual, or customer-expectation reasons.",
    intro:
      "Some IT support has to stay onshore. Government contracts, defence-adjacent work, certain financial and healthcare systems, and enterprise customers with data residency clauses all place constraints that make offshore delivery either non-compliant or commercially unacceptable.",
    body: {
      heading: "Onshore delivery where the contract requires it.",
      paragraphs: [
        "Where those constraints do not apply, offshore IT support is usually the better economic answer, and we will say so. This page exists for the cases where they do — where a customer contract, a regulator, or a security review specifies US-based personnel and the decision has already been made for you.",
        "Onshore delivery also changes what tier-one can absorb. US-based agents with the same working day as your engineers can escalate live rather than through a handover document, which shortens resolution on the complex tickets and keeps your engineering team out of the queue.",
        "Access controls are the part to specify precisely: which systems, which permissions, how access is provisioned and revoked, how sessions are logged, and what happens on offboarding. Those get documented before launch rather than negotiated after an audit finding.",
      ],
    },
    highlights: [
      "US-based tier-one and tier-two support",
      "Coverage across all US time zones",
      "Live escalation to your engineers",
      "Documented access controls and provisioning",
      "Service desk and ticket management",
      "Onboarding and offboarding support",
    ],
    highlightDetails: {
      "US-based tier-one and tier-two support":
        "Domestic personnel where a customer contract, regulator, or security review requires it.",
      "Coverage across all US time zones":
        "Service desk hours spanning Eastern through Pacific, with defined out-of-hours escalation.",
      "Live escalation to your engineers":
        "Same working day means complex tickets escalate in conversation rather than through a handover document.",
      "Documented access controls and provisioning":
        "Which systems, which permissions, how access is granted, logged, and revoked — specified before launch.",
      "Service desk and ticket management":
        "Ticket triage, categorisation, SLA tracking, and reporting inside your existing service desk.",
      "Onboarding and offboarding support":
        "Account provisioning, hardware coordination, and access revocation handled as a documented checklist.",
    },
  },
  {
    slug: "bpo-companies-cebu",
    crossLinks: [
      { href: "/locations/call-center-outsourcing-philippines", label: "Philippines outsourcing" },
      { href: "/blog/top-call-center-companies-philippines", label: "Top 10 Philippine call centers" },
      { href: "/services/customer-support", label: "Customer support outsourcing" },
    ],
    name: "Cebu",
    kind: "delivery",
    seoTitle: "BPO Companies in Cebu | Cebu Call Center Outsourcing",
    metaDescription:
      "BPO and call center outsourcing in Cebu, the Philippines' second-largest outsourcing hub: experienced agents, lower attrition than Manila.",
    summary:
      "Call center and BPO delivery from Cebu, the Philippines' second outsourcing hub, chosen for retention and cost relative to Manila.",
    intro:
      "Cebu is the Philippines' second outsourcing centre after Metro Manila, and companies choose it over the capital for reasons that have little to do with headline rates.",
    body: {
      heading: "Why programmes move to Cebu rather than Manila.",
      paragraphs: [
        "Retention is the main one. Manila's outsourcing market is dense enough that experienced agents can change employer without changing commute, and attrition follows. Cebu's market is smaller and less churn-prone, which means the agent who learned your product in month two is more likely to still be on your queue in month twelve. For programmes where product knowledge compounds, that is worth more than a lower seat rate.",
        "Cost of living is lower than the capital, which flows through to delivery cost, and commutes are shorter — a genuine operational factor in a country where Manila traffic regularly affects shift reliability.",
        "The trade-off is scale. Cebu can staff substantial programmes but not at Manila's ceiling, so very large launches may still need the capital or a split across both. Business continuity planning also deserves attention: the region sits in a typhoon belt, and any serious programme should have a documented failover arrangement.",
      ],
    },
    highlights: [
      "Lower agent attrition than Metro Manila",
      "Experienced English-language contact center workforce",
      "Lower delivery cost than the capital",
      "24/7 coverage for US and UK hours",
      "Voice, chat, email, and back-office support",
      "Documented business continuity planning",
    ],
    highlightDetails: {
      "Lower agent attrition than Metro Manila":
        "A less churn-prone labour market, so the agent who learned your product stays on your queue.",
      "Experienced English-language contact center workforce":
        "An established BPO talent pool with experienced agents and team leads rather than first-time hires.",
      "Lower delivery cost than the capital":
        "Lower cost of living flows through to per-seat delivery cost.",
      "24/7 coverage for US and UK hours":
        "Round-the-clock answering staffed by people working ordinary daytime hours locally.",
      "Voice, chat, email, and back-office support":
        "Full channel coverage plus non-voice processing under one programme.",
      "Documented business continuity planning":
        "Failover arrangements documented up front, since the region sits in a typhoon belt.",
    },
  },
];

/** Every location offers these; used when a location defines no crossLinks. */
export const DEFAULT_LOCATION_LINKS = [
  { href: "/services/customer-support", label: "Customer support outsourcing" },
  { href: "/services/technical-support", label: "Technical support" },
  { href: "/services/lead-generation", label: "Lead generation" },
];

export const LOCATIONS: Location[] = [
  ...CORE_LOCATIONS,
  ...COUNTRY_LOCATIONS,
  ...STATE_LOCATIONS,
  ...METRO_LOCATIONS,
  ...CITY_LOCATIONS,
];

export function getLocation(slug: string) {
  return LOCATIONS.find((location) => location.slug === slug);
}

export const SPECIALTY_LOCATIONS = LOCATIONS.filter((l) => l.kind === "specialty");
export const DELIVERY_LOCATIONS = LOCATIONS.filter((l) => l.kind === "delivery");

/*
 * US states are markets, but listing them alongside countries and cities would
 * put roughly sixty undifferentiated links in one group on the hub — which
 * helps neither a reader scanning it nor a crawler trying to work out the
 * shape of the silo. They get their own group instead.
 */
const STATE_SLUGS = new Set(STATE_LOCATIONS.map((l) => l.slug));
export const US_STATE_LOCATIONS = STATE_LOCATIONS;

/*
 * The ten original US city pages predate the metro file, so the US metro group
 * is those plus everything in it. Listed explicitly rather than inferred,
 * because "is this slug a US city" is not something a name can be trusted for.
 */
const ORIGINAL_US_CITY_SLUGS = [
  "atlanta", "chicago", "dallas", "denver", "houston",
  "los-angeles", "miami", "new-york", "phoenix", "seattle",
].map((c) => `call-center-outsourcing-${c}`);

const US_METRO_SLUGS = new Set([
  ...ORIGINAL_US_CITY_SLUGS,
  ...METRO_LOCATIONS.map((l) => l.slug),
]);

export const US_METRO_LOCATIONS = LOCATIONS.filter((l) =>
  US_METRO_SLUGS.has(l.slug),
);

/** Countries, regions, and non-US cities — everything else sold into. */
export const MARKET_LOCATIONS = LOCATIONS.filter(
  (l) =>
    l.kind === "market" &&
    !STATE_SLUGS.has(l.slug) &&
    !US_METRO_SLUGS.has(l.slug),
);
