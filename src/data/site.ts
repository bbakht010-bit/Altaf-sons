export const site = {
  name: "Altaf & Sons",
  tagline: "Reliable Procurement & Timely Delivery for Humanitarian Aid & General Supplies",
  logoSrc: "/altaf-and-sons-logo-clean.png",
  shortDescription:
    "A Jhang Saddar-based general order supplier and humanitarian aid procurement company serving NGOs, international firms, government departments, and institutional project teams.",
  url: "https://altaf-and-sons.pages.dev",
  email: "altafsons97@gmail.com",
  businessPhone: "+92 333 6734597",
  whatsappLabel: "WhatsApp",
  whatsappHref:
    "https://wa.me/923336734597?text=Hello%20Altaf%20%26%20Sons%2C%20I%20would%20like%20to%20request%20a%20quote.",
  location: "Jhang Saddar, Punjab, Pakistan",
  address: "Jhang Saddar, Punjab, Pakistan",
  analyticsId: "",
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about/" },
    { label: "Services", href: "/services/" },
    { label: "Partners", href: "/partners/" },
    { label: "Projects", href: "/projects/" },
    { label: "Gallery", href: "/gallery/" },
    { label: "Contact", href: "/contact/" },
  ],
};

export const hero = {
  eyebrow: "General order supplier and humanitarian aid procurement company",
  title: "Reliable Partner in Humanitarian Aid & General Order Supplies",
  body:
    "Procurement, sourcing, and timely delivery for UN agencies, NDMA, Pakistan Army, humanitarian organizations, government departments, and institutional clients.",
  primaryCta: { label: "Request a Quote", href: "/contact/" },
  secondaryCta: { label: "Explore Our Supplies", href: "/services/" },
};

export const stats = [
  { value: "Jhang Saddar", label: "based procurement team" },
  { value: "Nationwide", label: "sourcing and delivery support" },
  { value: "Aid ready", label: "relief and general supply focus" },
];

export const partners = [
  {
    name: "UNICEF",
    shortName: "UNICEF",
    type: "Children, relief, development",
    logoSrc: "/partners/unicef.png",
    group: "un",
    keywords: ["UN", "Relief", "Children"],
  },
  {
    name: "UNHCR",
    shortName: "UNHCR",
    type: "Refugee response and protection",
    logoSrc: "/partners/unhcr.svg",
    group: "un",
    keywords: ["UN", "Refugees", "Aid"],
  },
  {
    name: "UNDP",
    shortName: "UNDP",
    type: "Development programs",
    logoSrc: "/partners/undp.svg",
    group: "un",
    keywords: ["UN", "Development", "Projects"],
  },
  {
    name: "HANDS",
    shortName: "HANDS",
    type: "Humanitarian and development support",
    logoSrc: "/partners/hands.svg",
    group: "other",
    keywords: ["NGO", "Relief", "Community"],
  },
  {
    name: "ACTED",
    shortName: "ACTED",
    type: "Humanitarian and development programs",
    logoSrc: "/partners/acted.svg",
    group: "other",
    keywords: ["INGO", "Relief", "Development"],
  },
  {
    name: "Muslim Aid",
    shortName: "Muslim Aid",
    type: "Humanitarian aid and relief",
    logoSrc: "/partners/muslim-aid.svg",
    group: "other",
    keywords: ["Relief", "Humanity", "Aid"],
  },
  {
    name: "CARE",
    shortName: "CARE",
    type: "Humanitarian response and development",
    logoSrc: "/partners/care.svg",
    group: "other",
    keywords: ["Relief", "Development", "Support"],
  },
  {
    name: "Islamic Relief",
    shortName: "Islamic Relief",
    type: "Relief and humanitarian programs",
    logoSrc: "/partners/islamic-relief.svg",
    group: "other",
    keywords: ["Relief", "Aid", "Programs"],
  },
  {
    name: "ICRC",
    shortName: "ICRC",
    type: "Humanitarian response",
    logoSrc: "/partners/icrc.svg",
    group: "other",
    keywords: ["Humanitarian", "Response", "Aid"],
  },
  {
    name: "National Disaster Management Authority",
    shortName: "NDMA",
    type: "Disaster management and relief",
    logoSrc: "/partners/ndma.png",
    group: "other",
    keywords: ["Disaster", "Relief", "Govt"],
  },
  {
    name: "DGP Army / Pakistan Army",
    shortName: "Army",
    type: "Institutional procurement",
    group: "other",
    keywords: ["Institutional", "Supply", "Delivery"],
  },
  {
    name: "Government Departments",
    shortName: "Govt",
    type: "General order supply",
    group: "other",
    keywords: ["Govt", "Procurement", "Supply"],
  },
];

export const unPartners = partners.filter((partner) => partner.group === "un");
export const otherPartners = partners.filter((partner) => partner.group === "other");

export const services = [
  {
    title: "Humanitarian Aid & Relief Items",
    summary: "Relief items, emergency response, and field supply.",
    details: ["Tents and shelter items", "Blankets and bedding", "Food packs", "Medical kits", "Hygiene kits"],
  },
  {
    title: "Textiles & Uniforms",
    summary: "Uniforms, bedding, protective clothing, and custom textile orders.",
    details: ["Uniforms", "Protective clothing", "Bedding textiles", "Fabric-based relief items", "Custom bulk orders"],
  },
  {
    title: "Stationery & Office Supplies",
    summary: "Office, school, training, and project stationery supplies.",
    details: ["Office stationery", "School and training materials", "Printing support", "Files and record supplies", "Bulk office packs"],
  },
  {
    title: "General Order Supplies",
    summary: "Furniture, hardware, cleaning materials, and project-specific sourcing.",
    details: ["Furniture", "Hardware", "Cleaning materials", "Operational supplies", "Project-specific sourcing"],
  },
];

export const values = [
  {
    title: "Quality",
    body: "Products and suppliers are handled with attention to specifications, practical usage, and client expectations.",
  },
  {
    title: "Reliability",
    body: "The company focuses on dependable sourcing, clear communication, and consistent follow-through.",
  },
  {
    title: "Timeliness",
    body: "Delivery planning is treated as a core part of procurement, especially for urgent aid and project needs.",
  },
  {
    title: "Transparency",
    body: "Pricing, availability, and procurement status are communicated clearly for professional decision-making.",
  },
];

export const whyChoose = [
  "UN and NGO experience",
  "Reliable sourcing",
  "Pakistan-wide delivery",
  "Quality checks",
  "Transparent pricing",
];

export const sectors = [
  "Humanitarian relief programs",
  "Disaster response operations",
  "Government procurement teams",
  "United Nations agency projects",
  "Pakistan Army institutional needs",
  "NGO and development-sector operations",
];

export const process = [
  {
    step: "01",
    title: "Requirement review",
    body: "The team reviews product lists, quantities, specifications, delivery location, and timeline.",
  },
  {
    step: "02",
    title: "Sourcing and quotation",
    body: "Suppliers, pricing, availability, quality needs, and delivery options are coordinated for approval.",
  },
  {
    step: "03",
    title: "Delivery and handover",
    body: "Approved supplies are prepared, dispatched, documented, and handed over according to the project scope.",
  },
];

export const leadership = [
  {
    name: "Imran Ahmed",
    role: "Chief Executive Officer",
    phone: "+92 333 6734597",
    phoneHref: "tel:+923336734597",
    body: "Leads company direction, client confidence, and long-term procurement relationships.",
  },
  {
    name: "Farhan Ahmed",
    role: "Managing Director",
    phone: "+92 308 7808807",
    phoneHref: "tel:+923087808807",
    body: "Oversees business development, client coordination, and project delivery standards.",
  },
  {
    name: "Hussain Sheikh",
    role: "Managing Director and Operations",
    phone: "",
    phoneHref: "",
    body: "Supports sourcing, supplier coordination, logistics follow-up, and field execution.",
  },
];

export const projects = [
  {
    title: "Relief Goods Procurement",
    client: "Humanitarian aid program",
    summary:
      "Procurement support for tents, blankets, food packs, hygiene kits, and other relief requirements.",
  },
  {
    title: "Institutional General Order Supply",
    client: "Government or public-sector department",
    summary:
      "Representative profile for furniture, hardware, cleaning materials, stationery, and office supplies.",
  },
  {
    title: "Textile and Uniform Supply",
    client: "Program or institutional client",
    summary:
      "Supply support for uniforms, bedding textiles, and custom bulk textile procurement.",
  },
  {
    title: "Field Delivery Coordination",
    client: "NGO or development organization",
    summary:
      "Delivery-focused project profile for dispatch planning, documentation, and handover support.",
  },
];

export const galleryItems = [
  { title: "Warehouse and Stock Preparation", category: "Supply Chain" },
  { title: "Relief Item Packing", category: "Humanitarian Aid" },
  { title: "Stationery and Office Supply Dispatch", category: "General Supplies" },
  { title: "Textile and Uniform Orders", category: "Textiles" },
  { title: "Field Delivery Handover", category: "Logistics" },
  { title: "Project Procurement Documentation", category: "Procurement" },
];

export const contact = {
  intro:
    "Share your product list, quantities, delivery city, and deadline. Altaf & Sons will respond through official company channels.",
  methods: [
    { label: "Official Email", value: site.email, href: `mailto:${site.email}` },
    { label: "WhatsApp / CEO", value: "+92 333 6734597", href: site.whatsappHref },
    { label: "Managing Director", value: "+92 308 7808807", href: "tel:+923087808807" },
    { label: "Office Location", value: site.address, href: "/contact/" },
  ],
};
