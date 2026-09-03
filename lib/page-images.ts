const unsplash = (id: string) => `/assets/img/unsplash/${id}.jpg`;

export type PageImage = {
  src: string;
  alt: string;
};

/*
 * Slug-keyed image lookups are the one place a new page can break the build:
 * add a service/industry/solution/location without an image entry and the
 * index pages crash prerendering on `.src` of undefined. Always look up
 * through pageImage() so a missing entry degrades to the shared fallback
 * instead of failing the build.
 */
const FALLBACK_IMAGE: PageImage = {
  src: "/assets/img/services-overview.jpg",
  alt: "Business Process Outsourcing support team reviewing client work",
};

export function pageImage(
  map: Record<string, PageImage>,
  key: string,
  fallbackAlt?: string,
): PageImage {
  return (
    map[key] ?? {
      src: FALLBACK_IMAGE.src,
      alt: fallbackAlt ?? FALLBACK_IMAGE.alt,
    }
  );
}

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
  "hipaa-medical-answering-service": {
    src: unsplash("photo-1519494026892-80bbd2d6fd0d"),
    alt: "Medical reception desk handling patient calls and appointments",
  },
  "inside-sales-outsourcing": {
    src: unsplash("photo-1552581234-26160f608093"),
    alt: "Inside sales representative on a call reviewing pipeline on screen",
  },
  "inbound-call-center-services": {
    src: unsplash("photo-1560264280-88b68371db39"),
    alt: "Inbound call center agent answering customer calls",
  },
  "outbound-call-center-services": {
    src: unsplash("photo-1552581234-26160f608093"),
    alt: "Outbound call center agent working a campaign",
  },
  "after-hours-answering-service": {
    src: unsplash("photo-1521737711867-e3b97375f902"),
    alt: "Agent providing after-hours call coverage",
  },
  "omnichannel-contact-center": {
    src: unsplash("photo-1553877522-43269d4ea984"),
    alt: "Agent handling multiple customer support channels",
  },
  "call-center-analytics": {
    src: unsplash("photo-1551288049-bebda4e38f71"),
    alt: "Analyst reviewing contact center performance data",
  },
  "speech-analytics": {
    src: unsplash("photo-1460925895917-afdab827c52f"),
    alt: "Speech analytics dashboard analysing call conversations",
  },
  "pci-compliant-call-center": {
    src: unsplash("photo-1563013544-824ae1b704d3"),
    alt: "Secure card payment handling in a contact center",
  },
  "back-office-outsourcing": {
    src: unsplash("photo-1554224155-6726b3ff858f"),
    alt: "Back office team processing documents and records",
  },
  "help-desk-outsourcing": {
    src: unsplash("photo-1516321497487-e288fb19713f"),
    alt: "IT help desk agent supporting a user",
  },
  "order-taking-services": {
    src: unsplash("photo-1556742049-0cfed4f6a45d"),
    alt: "Agent taking a customer order by phone",
  },
  "customer-acquisition-outsourcing": {
    src: unsplash("photo-1556761175-b413da4baf72"),
    alt: "Acquisition team following up on new enquiries",
  },
  "customer-experience-consulting": {
    src: unsplash("photo-1552664730-d307ca884978"),
    alt: "Team mapping a customer experience improvement plan",
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
  legal: {
    src: unsplash("photo-1589829545856-d10d557cf95f"),
    alt: "Law office desk with legal books for law firm client intake support",
  },
};

export const LOCATION_IMAGES: Record<string, PageImage> = {
  "call-center-outsourcing-usa": {
    src: unsplash("photo-1485738422979-f5c462d49f74"),
    alt: "United States city skyline representing US market call center coverage",
  },
  "call-center-outsourcing-uk": {
    src: unsplash("photo-1513635269975-59663e0ac1ad"),
    alt: "London skyline representing UK call centre outsourcing coverage",
  },
  "call-center-outsourcing-dubai": {
    src: unsplash("photo-1512453979798-5ea266f8880c"),
    alt: "Dubai skyline representing UAE call center outsourcing coverage",
  },
  "call-center-outsourcing-europe": {
    src: unsplash("photo-1467269204594-9661b134dd2b"),
    alt: "European city view representing multilingual European support coverage",
  },
  "call-center-outsourcing-mexico": {
    src: unsplash("photo-1518105779142-d975f22f1b0a"),
    alt: "Mexico City view representing nearshore call center delivery",
  },
  "call-center-outsourcing-philippines": {
    src: unsplash("photo-1573790387438-4da905039392"),
    alt: "Manila cityscape representing Philippine offshore BPO delivery",
  },
  "call-center-outsourcing-colombia": {
    src: unsplash("photo-1568632234157-ce7aecd03d0d"),
    alt: "Bogota city view representing Colombian nearshore contact center delivery",
  },
  "call-center-outsourcing-india": {
    src: unsplash("photo-1587474260584-136574528ed5"),
    alt: "India city view representing offshore technical support and back-office delivery",
  },
  "nearshore-call-center": {
    src: unsplash("photo-1521737604893-d14cc237f11d"),
    alt: "Support team collaborating during shared business hours",
  },
  "healthcare-bpo-philippines": {
    src: unsplash("photo-1516549655169-df83a0774514"),
    alt: "Healthcare administration team processing medical billing and claims",
  },
  "telemarketing-philippines": {
    src: unsplash("photo-1560264280-88b68371db39"),
    alt: "Outbound calling team working a telemarketing campaign",
  },
  "it-support-outsourcing-usa": {
    src: unsplash("photo-1551434678-e076c223a692"),
    alt: "IT service desk team supporting users from a US operations floor",
  },
  "call-center-outsourcing-poland": {
    src: unsplash("photo-1519197924294-4ba991a11128"),
    alt: "Warsaw skyline representing Polish nearshore delivery",
  },
  "call-center-outsourcing-romania": {
    src: unsplash("photo-1584646098378-0874589d76b1"),
    alt: "Bucharest city view representing Romanian nearshore delivery",
  },
  "call-center-outsourcing-bulgaria": {
    src: unsplash("photo-1601581875309-fafbf2d3ed3a"),
    alt: "Sofia city view representing Bulgarian nearshore delivery",
  },
  "call-center-outsourcing-portugal": {
    src: unsplash("photo-1585208798174-6cedd86e019a"),
    alt: "Lisbon view representing Portuguese nearshore delivery",
  },
  "call-center-outsourcing-spain": {
    src: unsplash("photo-1539037116277-4db20889f2d4"),
    alt: "Spanish city view representing European Spanish delivery",
  },
  "call-center-outsourcing-ireland": {
    src: unsplash("photo-1549918864-48ac978761a4"),
    alt: "Dublin view representing Irish EU English-language delivery",
  },
  "call-center-outsourcing-south-africa": {
    src: unsplash("photo-1580060839134-75a5edca2e99"),
    alt: "Cape Town view representing South African delivery",
  },
  "call-center-outsourcing-egypt": {
    src: unsplash("photo-1572252009286-268acec5ca0a"),
    alt: "Cairo view representing Egyptian Arabic-language delivery",
  },
  "call-center-outsourcing-morocco": {
    src: unsplash("photo-1539020140153-e479b8c22e70"),
    alt: "Casablanca view representing Moroccan French-language delivery",
  },
  "call-center-outsourcing-kenya": {
    src: unsplash("photo-1611348586804-61bf6c080437"),
    alt: "Nairobi view representing Kenyan East African delivery",
  },
  "call-center-outsourcing-vietnam": {
    src: unsplash("photo-1583417319070-4a69db38a482"),
    alt: "Vietnam city view representing Asian technical delivery",
  },
  "call-center-outsourcing-malaysia": {
    src: unsplash("photo-1596422846543-75c6fc197f07"),
    alt: "Kuala Lumpur view representing Malaysian multilingual delivery",
  },
  "call-center-outsourcing-costa-rica": {
    src: unsplash("photo-1518259102261-b40117eabbc9"),
    alt: "Costa Rica view representing Central American nearshore delivery",
  },
  "call-center-outsourcing-guatemala": {
    src: unsplash("photo-1568632234157-ce7aecd03d0d"),
    alt: "Guatemala view representing Central American nearshore delivery",
  },
  "call-center-outsourcing-dominican-republic": {
    src: unsplash("photo-1580541631950-7282082b53ce"),
    alt: "Dominican Republic view representing Caribbean nearshore delivery",
  },
  "call-center-outsourcing-panama": {
    src: unsplash("photo-1558642084-fd07fae5282e"),
    alt: "Panama City view representing regional hub delivery",
  },
  "call-center-outsourcing-argentina": {
    src: unsplash("photo-1589909202802-8f4aadce1849"),
    alt: "Buenos Aires view representing Argentine delivery",
  },
  "call-center-outsourcing-brazil": {
    src: unsplash("photo-1483729558449-99ef09a8c325"),
    alt: "Brazil city view representing Brazilian Portuguese delivery",
  },
  "call-center-outsourcing-new-york": {
    src: unsplash("photo-1496442226666-8d4d0e62e6e9"),
    alt: "New York skyline representing US East Coast market coverage",
  },
  "call-center-outsourcing-chicago": {
    src: unsplash("photo-1494522855154-9297ac14b55f"),
    alt: "Chicago skyline representing Midwest market coverage",
  },
  "call-center-outsourcing-los-angeles": {
    src: unsplash("photo-1515896769750-31548aa180ed"),
    alt: "Los Angeles view representing West Coast market coverage",
  },
  "call-center-outsourcing-houston": {
    src: unsplash("photo-1530089711124-9ca31fb9e863"),
    alt: "Houston skyline representing Gulf Coast market coverage",
  },
  "call-center-outsourcing-dallas": {
    src: unsplash("photo-1545194445-dddb8f4487c6"),
    alt: "Dallas skyline representing Texas market coverage",
  },
  "call-center-outsourcing-miami": {
    src: unsplash("photo-1506966953602-c20cc11f75e3"),
    alt: "Miami skyline representing bilingual market coverage",
  },
  "call-center-outsourcing-atlanta": {
    src: unsplash("photo-1575917649705-5b59aaa12e6b"),
    alt: "Atlanta skyline representing Southeast market coverage",
  },
  "call-center-outsourcing-phoenix": {
    src: unsplash("photo-1558645836-e44122a743ee"),
    alt: "Phoenix view representing Southwest market coverage",
  },
  "call-center-outsourcing-denver": {
    src: unsplash("photo-1546156929-a4c0ac411f47"),
    alt: "Denver skyline representing Mountain region market coverage",
  },
  "call-center-outsourcing-seattle": {
    src: unsplash("photo-1502175353174-a7a70e73b362"),
    alt: "Seattle skyline representing Pacific Northwest market coverage",
  },
  "call-centre-outsourcing-london": {
    src: unsplash("photo-1513635269975-59663e0ac1ad"),
    alt: "London skyline representing UK market coverage",
  },
  "call-centre-outsourcing-manchester": {
    src: unsplash("photo-1588668214407-6ea9a6d8c272"),
    alt: "Manchester view representing northern UK market coverage",
  },
  "call-centre-outsourcing-birmingham": {
    src: unsplash("photo-1589578527966-fdac0f44566c"),
    alt: "Birmingham view representing Midlands market coverage",
  },
  "call-centre-outsourcing-glasgow": {
    src: unsplash("photo-1595867818082-083862f3d630"),
    alt: "Glasgow view representing Scottish market coverage",
  },
  "call-centre-outsourcing-berlin": {
    src: unsplash("photo-1560969184-10fe8719e047"),
    alt: "Berlin view representing German market coverage",
  },
  "call-centre-outsourcing-paris": {
    src: unsplash("photo-1502602898657-3e91760cbb34"),
    alt: "Paris view representing French market coverage",
  },
  "call-centre-outsourcing-amsterdam": {
    src: unsplash("photo-1534351590666-13e3e96b5017"),
    alt: "Amsterdam view representing Dutch market coverage",
  },
  "call-centre-outsourcing-madrid": {
    src: unsplash("photo-1539037116277-4db20889f2d4"),
    alt: "Madrid view representing Spanish market coverage",
  },
  "call-center-outsourcing-abu-dhabi": {
    src: unsplash("photo-1512632578888-169bbbc64f33"),
    alt: "Abu Dhabi skyline representing UAE capital market coverage",
  },
  "call-center-outsourcing-sharjah": {
    src: unsplash("photo-1518684079-3c830dcef090"),
    alt: "Sharjah view representing UAE industrial market coverage",
  },
  "bpo-companies-cebu": {
    src: unsplash("photo-1542931287-023b922fa89b"),
    alt: "Cebu city view representing Philippine BPO delivery outside Manila",
  },
  "offshore-call-center": {
    src: unsplash("photo-1497215728101-856f4ea42174"),
    alt: "Contact center floor representing round-the-clock offshore delivery",
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
