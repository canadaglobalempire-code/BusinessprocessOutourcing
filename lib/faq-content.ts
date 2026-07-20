import type { FaqItem } from "@/components/faq";
import type { Solution } from "./solutions";
import type { Service } from "./services";
import type { Industry } from "./industries";

function joinList(items: string[]): string {
  if (items.length <= 1) return items[0] ?? "";
  if (items.length === 2) return items.join(" and ");
  return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;
}

/* Auto-generated per detail page from existing data fields, so every
   solution/service/industry page gets unique, direct-answer FAQ content
   (for AEO) instead of duplicate boilerplate text. */
export function solutionFaq(solution: Solution): FaqItem[] {
  const lower = solution.title.toLowerCase();
  return [
    {
      q: `What does ${lower} outsourcing include?`,
      a: `${solution.title} outsourcing covers ${joinList(solution.services)}. ${solution.summary}`,
    },
    {
      q: `Who is ${lower} outsourcing best suited for?`,
      a: `Companies that need reliable ${lower} without hiring, training, and managing an in-house team — especially once volume grows faster than internal capacity.`,
    },
    {
      q: `How quickly can ${lower} support start?`,
      a: "After a short call to confirm scope, tools, and coverage hours, we match agents and typically launch within one to two weeks.",
    },
    {
      q: `Can ${lower} be combined with other outsourcing solutions?`,
      a: "Yes. This solution can run on its own or alongside other outsourced coverage under one managed team, so you are not coordinating multiple vendors.",
    },
  ];
}

export function serviceFaq(service: Service): FaqItem[] {
  const lower = service.name.toLowerCase();
  const taskNames = service.tasks.slice(0, 4).map((t) => t.title);
  return [
    {
      q: `What is included in outsourced ${lower}?`,
      a: `Outsourced ${lower} covers ${joinList(taskNames)}, delivered by trained BPO agents working from documented processes.`,
    },
    {
      q: `Who is outsourced ${lower} best suited for?`,
      a: `${joinList(service.bestSuited)} are the most common fit for this service.`,
    },
    {
      q: `How is quality managed for ${lower}?`,
      a: "Every engagement runs on documented workflows, defined task ownership, quality reviews, and regular reporting so standards stay consistent as volume changes.",
    },
    {
      q: `Can outsourced ${lower} scale with my business?`,
      a: "Yes. Hours, headcount, and scope can expand or contract as your needs change, without a new hiring cycle.",
    },
  ];
}

export function industryFaq(industry: Industry): FaqItem[] {
  const lower = industry.name.toLowerCase();
  const needs = industry.services.slice(0, 4);
  return [
    {
      q: `What ${lower} support can be outsourced?`,
      a: `${joinList(needs)} are commonly outsourced by ${lower} teams working with us.`,
    },
    {
      q: `Why do ${lower} companies outsource this work?`,
      a: industry.seoIntro ?? industry.summary,
    },
    {
      q: `Can outsourced ${lower} support handle regulated or high-pressure environments?`,
      a: "Yes. We recognize industry-sensitive needs such as compliance, data handling, and urgent response, and build workflows and escalation rules around them.",
    },
    {
      q: `How quickly can ${lower} support launch?`,
      a: "Most engagements begin within one to two weeks of confirming scope, tools, coverage hours, and escalation rules.",
    },
  ];
}

export const HOME_FAQ: FaqItem[] = [
  {
    q: "What tasks can I outsource?",
    a: "Admin, customer support, data entry, bookkeeping support, marketing assistance, research, e-commerce operations, and other back-office tasks.",
  },
  {
    q: "How quickly can I get started?",
    a: "After discovery, we define the role, workflow, and start matching. Timelines depend on skill and coverage requirements.",
  },
  {
    q: "Will I have a dedicated team member?",
    a: "Yes. You can choose a dedicated professional or managed team with clear ownership and accountability.",
  },
  {
    q: "How do you ensure quality?",
    a: "Documented workflows, quality reviews, performance standards, and regular check-ins keep work consistent.",
  },
  {
    q: "Can I scale support as I grow?",
    a: "Yes. Increase hours, add capabilities, or bring in more team members as your needs evolve.",
  },
  {
    q: "Is my business information secure?",
    a: "We use controlled access, confidentiality practices, and role-based workflows tailored to your requirements.",
  },
];

export const ABOUT_FAQ: FaqItem[] = [
  {
    q: "How long has Business Process Outsourcing been operating?",
    a: "Since 2000, under the motto “Only the Best for the Best,” building an economical, stress-free outsourcing option for companies needing dependable support.",
  },
  {
    q: "What makes Business Process Outsourcing different from other BPO companies?",
    a: "We are operated by experienced professionals who understand the contact center industry and focus on building a trusted, long-term partnership rather than a one-off vendor relationship.",
  },
  {
    q: "What industries does Business Process Outsourcing serve?",
    a: "Healthcare, telecommunications and wireless services, computer hardware, gaming, entertainment, travel, financial services, retail, e-commerce, sports, and more.",
  },
  {
    q: "Does Business Process Outsourcing offer budget-, time-, and industry-sensitive support?",
    a: "Yes. We recognize industry-sensitive needs in healthcare, government, finance, utilities, emergency response, and other regulated or high-pressure environments, and build engagements around your budget and timeline.",
  },
];

export const HOW_IT_WORKS_FAQ: FaqItem[] = [
  {
    q: "What are the steps to start outsourcing with Business Process Outsourcing?",
    a: "It starts with a call to discuss your needs, then we build a strategy that maps your process and trains agents, launch your plan with quality control and reporting, and run ongoing checks and balances.",
  },
  {
    q: "How long does onboarding take before support launches?",
    a: "Timelines vary by scope, but most engagements move from discovery call to launch within a few weeks once systems are prepared and agents are trained on your brand standards.",
  },
  {
    q: "What do I need to provide before support launches?",
    a: "Clear scope and coverage needs, access to the tools your team uses, and your brand and process standards so agents can be trained accurately before day one.",
  },
  {
    q: "How is performance tracked after launch?",
    a: "Regular reporting shows performance, customer activity, and the impact of the work on your bottom line, agreed upfront during the strategy phase.",
  },
];

export const CONTACT_FAQ: FaqItem[] = [
  {
    q: "What happens after I submit the contact form?",
    a: "One of our representatives follows up to answer your questions and map the right support plan based on what you need outsourced.",
  },
  {
    q: "What information should I include when I reach out?",
    a: "Your customer support and back-office needs, the service coverage and team size you expect, and any timing constraints help us respond with a relevant plan.",
  },
  {
    q: "Can I request a specific service when contacting Business Process Outsourcing?",
    a: "Yes. The contact form lets you select the type of call centre service and solution you are looking for so your enquiry reaches the right team.",
  },
  {
    q: "Is there a cost to get a support plan proposal?",
    a: "No. Reaching out and discussing your needs is free — pricing is only shared once we understand the scope of work you want outsourced.",
  },
];

export const PRICING_FAQ: FaqItem[] = [
  {
    q: "What outsourcing pricing models are available?",
    a: "Three models: task-based project support for defined workloads, monthly dedicated support with a part-time or full-time professional, and a custom managed team combining multiple roles and skills.",
  },
  {
    q: "What does BPO pricing depend on?",
    a: "Final pricing depends on role complexity, hours, coverage, tools, and management requirements.",
  },
  {
    q: "Is there a fixed price list for outsourcing services?",
    a: "No. Project support and managed team pricing are custom-quoted, while dedicated support is billed monthly based on part-time or full-time hours.",
  },
  {
    q: "Can I change my pricing plan as my needs change?",
    a: "Yes. You can move between project-based, dedicated, and managed-team engagement models as workload, ownership, and coverage needs change.",
  },
];

export const WHY_CHOOSE_US_FAQ: FaqItem[] = [
  {
    q: "Why should I trust Business Process Outsourcing with my customers?",
    a: "We operate under strict ethical guidelines, treat clients as respected partners, and hold ourselves to high standards of transparency and accountability in every engagement.",
  },
  {
    q: "What values guide how Business Process Outsourcing works with clients?",
    a: "Holding ourselves to the highest expectations, understanding client challenges, staying positive, embracing each other, striving for greatness, and acting with integrity.",
  },
  {
    q: "How does Business Process Outsourcing reduce the stress of finding a BPO partner?",
    a: "By giving clients clear advice, honest expertise, and a partnership built on open communication instead of a purely transactional vendor relationship.",
  },
  {
    q: "Does Business Process Outsourcing stay current with industry best practices?",
    a: "Yes. We work to stay ahead on technology and best practices so our teams remain relevant and effective as your needs evolve.",
  },
];

export const SOLUTIONS_INDEX_FAQ: FaqItem[] = [
  {
    q: "What outsourcing solutions does Business Process Outsourcing offer?",
    a: "Phone support, email support, live chat and social media, multilingual support, click-to-call, appointment setting, event RSVP and reservation taking, employee hotlines, consumer hotlines, customer service, order processing, and financial and accounting services.",
  },
  {
    q: "Can I combine multiple outsourcing solutions into one team?",
    a: "Yes. We can start with one support channel or combine several solutions into a single managed customer care and operations team.",
  },
  {
    q: "Do I need to choose one solution or can I start small?",
    a: "You can start with a single solution and expand coverage, channels, or scope later as demand changes.",
  },
  {
    q: "How do I know which outsourcing solution fits my business?",
    a: "Browse the solutions that match your daily workflow — phone, chat, email, back-office, or hotline coverage — and reach out to discuss the best fit for your volume and hours.",
  },
];

export const SERVICES_INDEX_FAQ: FaqItem[] = [
  {
    q: "What outsourced services does Business Process Outsourcing provide?",
    a: "Customer support, virtual assistance, accounting support, digital marketing, e-commerce support, content creation, IT and technical support, data entry and research, and lead generation.",
  },
  {
    q: "Can I outsource more than one service at once?",
    a: "Yes. Services are commonly combined — for example customer support with virtual assistance, or e-commerce support with digital marketing — under one coordinated team.",
  },
  {
    q: "Are these services suited to small businesses as well as larger companies?",
    a: "Yes. Engagements scale from a single part-time professional for a small business up to a managed multi-role team for larger operations.",
  },
  {
    q: "How do I decide which service to outsource first?",
    a: "Start with whichever task is creating the most pressure on your team right now — most clients begin with customer support, virtual assistance, or accounting support.",
  },
];

export const INDUSTRIES_INDEX_FAQ: FaqItem[] = [
  {
    q: "Which industries does Business Process Outsourcing support?",
    a: "We support automotive, healthcare, retail, e-commerce, travel and hospitality, airlines, insurance, technology, government services, cable and media, energy and utilities, and other regulated or high-volume industries.",
  },
  {
    q: "Do you build industry-specific workflows, or is support generic?",
    a: "Support is built around each industry's demand patterns, compliance needs, and common customer questions rather than a one-size-fits-all script.",
  },
  {
    q: "Can outsourced support handle regulated industries like healthcare or finance?",
    a: "Yes. We recognize industry-sensitive needs in healthcare, government, finance, utilities, and emergency response, and build workflows around those requirements.",
  },
  {
    q: "What if my industry isn't listed?",
    a: "Reach out and describe your business — our workflows adapt to most customer support, call center, and back-office needs even outside the industries listed here.",
  },
];
