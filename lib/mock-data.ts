import { uptime } from "process"
import { ReactNode } from "react"

export interface Project {
  id: string
  name: string
  description: string
  image: string
  category: string
  completedDate: string
  location: string
}

export type Service = {
  id: string;
  title: string;
  description: string;
  image?: string;
  features?: string[];
  category?: string;
  slug?: string;
  overview?: string;
  highlights?: string[];
  scope?: string[];
  benefits?: string[];
  stats?: { label: string; value: string }[];
  projects?: {
    id: string;
    title: string;
    image?: string;
    status?: "Ongoing" | "Completed";
    year?: string;
    location?: string;
    capacity?: string;
    snippet?: string;
  }[];
  faqs?: { q: string; a: string }[];
  gallery?: string[];
};

export interface Staff {
  id: string
  name: string
  position: string
  image: string
  experience: string
}

export interface Stats {
  satisfaction: any
  uptime: any
  response: any
  experience: number
  projects: number
  engineers: number
  branches: number
}

// Mock Projects Data
export const mockProjects: Project[] = [
  {
    id: "1",
    name: "Solar Power Plant - 50MW",
    description:
      "Complete installation and commissioning of a 50MW solar power plant with advanced monitoring systems and grid integration.",
    image: "/solar.jpeg",
    category: "Solar Projects",
    completedDate: "2024",
    location: "Rajasthan, India",
  },
  {
    id: "2",
    name: "Industrial Electrical Infrastructure",
    description:
      "Complete electrical infrastructure setup for a manufacturing facility including power distribution, lighting, and automation systems.",
    image: "/electricalcontracting.png",
    category: "Electrical Contracting",
    completedDate: "2023",
    location: "Gujarat, India",
  },
  {
    id: "3",
    name: "Transformer Manufacturing Unit",
    description:
      "Established a state-of-the-art transformer manufacturing facility with capacity for 100+ units per month.",
    image: "/hero1.png",
    category: "Transformer Manufacturing",
    completedDate: "2023",
    location: "Maharashtra, India",
  },
  {
    id: "4",
    name: "Smart Grid Implementation",
    description:
      "Implementation of smart grid technology for efficient power distribution across urban areas with real-time monitoring.",
    image: "/hero2.png",
    category: "Infrastructure",
    completedDate: "2024",
    location: "Karnataka, India",
  },
  {
    id: "5",
    name: "Cable Manufacturing Plant",
    description: "Setup of automated cable and conductor manufacturing plant with quality control systems.",
    image: "/tower.png",
    category: "Cable Fabrication",
    completedDate: "2022",
    location: "Tamil Nadu, India",
  },
]

// Mock Services Data
export const mockServices: Service[] = [
  {
    id: "1",
    title: "Electrical Contracting",
    slug: "electrical-contracting",
    description:
      "Comprehensive electrical solutions for government, industrial, and rural/urban projects, ensuring safety and regulatory compliance.",
    overview:
      "We execute end-to-end electrical contracting for substations, HT/LT networks, industrial plants, and public infrastructure. Our experienced teams manage engineering, procurement, installation, testing, and commissioning with safety-first delivery.",
    image: "/electricalcontracting.png",
    category: "Electrical Infrastructure",
    features: [
      "HT/LT Power Distribution Systems",
      "Substation Installation (33/11 kV, 22/11 kV)",
      "Wiring for Rural/Urban Networks",
      "Metering & Service Connections",
      "Breakdown Maintenance & Repairs",
    ],
    highlights: [
      "Turnkey EPC capability",
      "Zero-harm safety culture",
      "Contract and regulatory compliance",
    ],
    scope: [
      "Site survey, drawings, and load assessment",
      "Material supply, erection, and cable works",
      "Testing & commissioning with documentation",
      "Handover, training & AMC support",
    ],
    benefits: [
      "Single point accountability",
      "Optimized timelines and budgets",
      "Compliant, future-ready systems",
    ],
    stats: [
      { label: "Substations Delivered", value: "120+" },
      { label: "Cities/Towns Served", value: "85+" },
    ],
    projects: [
      {
        id: "ec-p1",
        title: "33/11 kV Substation Augmentation",
        image: "/hero1.png",
        status: "Completed",
        year: "2023",
        location: "Maharashtra",
        capacity: "33/11 kV",
        snippet: "Upgraded feeders and installed new HT panels with SCADA integration.",
      },
      {
        id: "ec-p2",
        title: "HT/LT Network Modernization",
        image: "/hero2.png",
        status: "Ongoing",
        year: "2024",
        location: "Karnataka",
        capacity: "Multiple 11 kV feeders",
        snippet: "Loss reduction and reliability improvement across 11 feeders.",
      },
      {
        id: "ec-p3",
        title: "Industrial Plant Electrification",
        image: "/hero3.png",
        status: "Completed",
        year: "2022",
        location: "Gujarat",
        capacity: "4000 A",
        snippet: "Complete plant power distribution with MCC & PCC panels.",
      },
    ],
    faqs: [
      { q: "Do you handle regulatory approvals?", a: "Yes, including liaisoning and all statutory clearances." },
      { q: "Can you work in live substations?", a: "Yes, with isolation plans, permits, and qualified supervisors." },
      { q: "Do you offer AMC?", a: "We provide tailored Annual Maintenance Contracts post handover." },
    ],
    gallery: ["/hero1.png", "/hero2.png", "/hero3.png"],
  },
  {
    id: "2",
    title: "Solar Projects",
    slug: "solar-projects",
    description:
      "End-to-end solar energy solutions, including photovoltaic plants and agricultural pump systems, supporting sustainable power initiatives.",
    overview:
      "From MW-scale PV plants to off-grid pumps, we deliver site assessment, engineering, supply, installation, and grid integration with performance monitoring.",
    image: "/hero3.png",
    category: "Renewable Energy",
    features: [
      "Solar PV Plant Installation (23 MW)",
      "Off-Grid Solar Pumps (3-7.5 HP)",
      "11 kV Transmission Line & Bay Extension",
      "System Maintenance (5-Year Warranty)",
      "Grid Integration for Solar Projects",
    ],
    highlights: [
      "Bankable engineering & BOM",
      "SCADA-enabled monitoring",
      "Performance ratio guarantee",
    ],
    scope: [
      "Shadow analysis, layout & soil testing",
      "Module mounting, stringing & inverter rooms",
      "Evacuation bay and transmission link",
      "SAT, PR validation & handover",
    ],
    benefits: ["Lower LCOE", "Clean energy credits", "Rapid ROI on CAPEX"],
    stats: [
      { label: "PV Capacity Delivered", value: "23+ MWp" },
      { label: "Solar Pumps Deployed", value: "1,500+" },
    ],
    projects: [
      {
        id: "sp-p1",
        title: "10 MW Solar PV Plant",
        image: "/hero3.png",
        status: "Completed",
        year: "2023",
        location: "Rajasthan",
        capacity: "10 MWp",
        snippet: "EPC with bay extension and remote monitoring.",
      },
      {
        id: "sp-p2",
        title: "Off-Grid Solar Pumps",
        image: "/solar.jpeg",
        status: "Ongoing",
        year: "2024",
        location: "Maharashtra",
        capacity: "3–7.5 HP",
        snippet: "Deploying pumps for irrigation clusters.",
      },
      {
        id: "sp-p3",
        title: "Rooftop Solar Portfolio",
        image: "/hero2.png",
        status: "Completed",
        year: "2022",
        location: "Gujarat",
        capacity: "1.2 MWp",
        snippet: "Industrial rooftops with net metering.",
      },
    ],
    faqs: [
      { q: "Do you provide O&M?", a: "Yes, including cleaning, IV curve testing, and PR audits." },
      { q: "Do you help with DISCOM approvals?", a: "We cover complete net-metering approvals and grid permissions." },
      { q: "Is remote monitoring included?", a: "Yes, via SCADA/IoT dashboards as per scope." },
    ],
    gallery: ["/hero4.png", "/solar.jpeg", "/hero2.png"],
  },
  {
    id: "3",
    title: "Transformer Installation & Maintenance",
    slug: "transformer-installation-maintenance",
    description:
      "Supply, installation, and repair of transformers for reliable power distribution in government and public projects.",
    overview:
      "Specialists in transformer erection, augmentation, diagnostics, and preventive maintenance to maximize uptime and asset life.",
    image: "/repair.png",
    category: "Power Equipment",
    features: [
      "Transformer Installation (up to 200 kVA)",
      "Repair of Failed Transformers",
      "Testing & Commissioning",
      "Substation Augmentation",
      "Preventive Maintenance",
    ],
    highlights: [
      "Oil testing & diagnostics",
      "Rapid failure rectification",
      "Spare management",
    ],
    scope: [
      "Foundation, plinth & earthing",
      "LV/HV terminations and bus work",
      "Oil filtration & IR testing",
      "Load trials & handover",
    ],
    benefits: ["Higher reliability", "Extended asset life", "Lower OPEX"],
    stats: [
      { label: "Transformers Commissioned", value: "800+" },
      { label: "Average Repair TAT", value: "72 hrs" },
    ],
    projects: [
      {
        id: "tr-p1",
        title: "200 kVA DT Replacement",
        image: "/blog1.jpeg",
        status: "Completed",
        year: "2023",
        location: "Maharashtra",
        capacity: "200 kVA",
        snippet: "Emergency replacement and commissioning.",
      },
      {
        id: "tr-p2",
        title: "Substation Augmentation",
        image: "/blog2.jpeg",
        status: "Completed",
        year: "2022",
        location: "Karnataka",
        capacity: "33/11 kV",
        snippet: "Additional transformer bay with protection.",
      },
      {
        id: "tr-p3",
        title: "Preventive Maintenance Drive",
        image: "/blog3.jpeg",
        status: "Ongoing",
        year: "2024",
        location: "Gujarat",
        capacity: "Multiple DTs",
        snippet: "Filtration, tightening, IR & continuity checks.",
      },
    ],
    faqs: [
      { q: "Do you handle on-load tap changers?", a: "Yes, inspection and calibration are part of scope." },
      { q: "Do you provide spares?", a: "We arrange OEM-grade consumables and spares." },
      { q: "Can you audit earthing?", a: "Yes, with full test records and recommendations." },
    ],
    gallery: ["/repair.png", "/blog1.jpeg", "/blog2.jpeg"],
  },
  {
    id: "4",
    title: "Cable & Line Erection",
    slug: "cable-and-line-erection",
    description:
      "Installation and jointing of HT/LT overhead lines and underground cables for robust power distribution networks.",
    overview:
      "End-to-end erection of overhead lines and UG cabling with joints/terminations, route surveys, and safety supervision.",
    image: "/cableconductor.png",
    category: "Power Distribution",
    features: [
      "HT/LT Overhead Line Erection (11/33 kV)",
      "Underground Cable Installation & Jointing",
      "Fuse Call Maintenance",
      "Network Modernization",
      "Line Testing & Commissioning",
    ],
    highlights: [
      "Trenchless & HDD capabilities",
      "Certified jointers/linemen",
      "Live line safety protocols",
    ],
    scope: [
      "Route survey & ROW coordination",
      "Stringing, sag & tension checks",
      "UG cable laying & jointing",
      "Megger, HI-POT & continuity tests",
    ],
    benefits: ["Reduced outages", "Future-ready networks", "Safety-first works"],
    stats: [
      { label: "UG Cable Laid", value: "350+ km" },
      { label: "Overhead Spans", value: "1,800+" },
    ],
    projects: [
      {
        id: "cl-p1",
        title: "33 kV UG Cable Corridor",
        image: "/blog4.jpeg",
        status: "Completed",
        year: "2023",
        location: "Rajasthan",
        capacity: "33 kV",
        snippet: "City corridor with HDD under crossings.",
      },
      {
        id: "cl-p2",
        title: "11 kV Overhead Line Upgrade",
        image: "/blog2.jpeg",
        status: "Completed",
        year: "2022",
        location: "Maharashtra",
        capacity: "11 kV",
        snippet: "Conductor replacement and pole re-spacing.",
      },
      {
        id: "cl-p3",
        title: "LT AB Cable Conversion",
        image: "/blog3.jpeg",
        status: "Ongoing",
        year: "2024",
        location: "Gujarat",
        capacity: "LT",
        snippet: "Loss reduction and safety improvements.",
      },
    ],
    faqs: [
      { q: "Do you manage road permissions?", a: "Yes, including reinstatement and safety signage." },
      { q: "What tests do you perform?", a: "IR, HI-POT, continuity, and load tests as applicable." },
      { q: "Do you restore after trenching?", a: "Yes, with proper compaction and surface finish." },
    ],
    gallery: ["/cableconductor.png", "/blog4.jpeg", "/blog3.jpeg"],
  },
  {
    id: "5",
    title: "Infrastructure Turnkey Projects",
    slug: "infrastructure-turnkey-projects",
    description:
      "Complete turnkey solutions for large-scale electrical infrastructure, including substations, distribution networks, and civil works.",
    overview:
      "Design-build-execute for substations, feeders, and civil auxiliaries. We manage drawings, procurement, execution, and compliance end-to-end.",
    image: "/tower.png",
    category: "Infrastructure Development",
    features: [
      "Substation Design & Construction (33/11 kV)",
      "HT/LT Network Development",
      "Civil & Allied Infrastructure Works",
      "Project Management & Execution",
      "Loss Reduction & Efficiency Measures",
    ],
    highlights: [
      "Integrated EPC teams",
      "Earned value tracking",
      "Proven delivery frameworks",
    ],
    scope: [
      "Pre-bid engineering & BOM",
      "Bar charts & resource planning",
      "Site management & safety plans",
      "HOTO, as-builts & training",
    ],
    benefits: ["Single-window delivery", "Predictable schedules", "Regulatory-ready"],
    stats: [
      { label: "Turnkey Projects", value: "60+" },
      { label: "Avg. Schedule Adherence", value: "95%" },
    ],
    projects: [
      {
        id: "itp-p1",
        title: "33/11 kV GIS Substation",
        image: "/blog1.jpeg",
        status: "Completed",
        year: "2022",
        location: "Gujarat",
        capacity: "33/11 kV",
        snippet: "Compact GIS with bay extension and SCADA.",
      },
      {
        id: "itp-p2",
        title: "Urban Feeder Revamp",
        image: "/blog2.jpeg",
        status: "Completed",
        year: "2023",
        location: "Maharashtra",
        capacity: "Multiple 11 kV",
        snippet: "Loss reduction, reliability & metering upgrades.",
      },
      {
        id: "itp-p3",
        title: "Industrial Power Backbone",
        image: "/blog3.jpeg",
        status: "Ongoing",
        year: "2024",
        location: "Karnataka",
        capacity: "132 kV interface",
        snippet: "Feeder augmentation and substation civil works.",
      },
    ],
    faqs: [
      { q: "Do you take design approvals?", a: "Yes, along with shop drawings and method statements." },
      { q: "How do you manage risk?", a: "With QHSE plans, audits, and mitigation tracking." },
      { q: "Do you supply manuals?", a: "All O&M documentation and as-built drawings are provided." },
    ],
    gallery: ["/tower.png", "/blog1.jpeg", "/blog2.jpeg"],
  },
  {
    id: "6",
    title: "EV Charging Infrastructure",
    slug: "ev-charging-infrastructure",
    description:
      "High-tension power supply setups for electric vehicle charging stations, supporting clean mobility initiatives.",
    overview:
      "We design and deliver HT connections, transformers, switchgear, and cabling for fast-charging hubs and depot charging.",
    image: "/hero3.png",
    category: "Clean Energy",
    features: [
      "HT Equipment & Cabling Installation",
      "Power Supply Integration with MSEDCL Grid",
      "Testing & Safety Compliance",
      "Infrastructure for EV Bus Charging",
      "Network Connectivity Solutions",
    ],
    highlights: [
      "Fast-charger ready",
      "24/7 depot readiness",
      "Safety interlocks & earthing",
    ],
    scope: [
      "Load study & demand estimation",
      "HT works & transformer sizing",
      "LV distribution & metering",
      "SAT & handover",
    ],
    benefits: ["Rapid deployment", "Grid-compliant", "Safe operations"],
    stats: [
      { label: "Charging Bays Enabled", value: "300+" },
      { label: "Avg. Uptime", value: "99.5%" },
    ],
    projects: [
      {
        id: "ev-p1",
        title: "Bus Depot Charging Infra",
        image: "/blog4.jpeg",
        status: "Completed",
        year: "2023",
        location: "Rajasthan",
        capacity: "HT supply",
        snippet: "HT yard, transformer & cabling for depot fleet.",
      },
      {
        id: "ev-p2",
        title: "City EV Hubs",
        image: "/blog2.jpeg",
        status: "Ongoing",
        year: "2024",
        location: "Maharashtra",
        capacity: "Various",
        snippet: "Multi-charger sites with monitoring.",
      },
      {
        id: "ev-p3",
        title: "Retail Charging Corridors",
        image: "/blog3.jpeg",
        status: "Completed",
        year: "2022",
        location: "Gujarat",
        capacity: "LV/HT",
        snippet: "Corridor sites with safety interlocks.",
      },
    ],
    faqs: [
      { q: "Do you supply chargers?", a: "We integrate OEM chargers as per client specs." },
      { q: "Can you do smart billing?", a: "Yes, with metering and software integration." },
      { q: "Do you manage permissions?", a: "Yes, including utility coordination." },
    ],
    gallery: ["/hero3.png", "/blog2.jpeg", "/blog4.jpeg"],
  },
  {
    id: "7",
    title: "Electrical Audits & Consulting",
    slug: "electrical-audits-consulting",
    description:
      "Energy audits, safety assessments, and regulatory liaisoning to optimize and ensure compliant electrical systems.",
    overview:
      "Diagnostic assessments to reduce energy costs, improve safety, and align with regulations—backed by actionable reports.",
    image: "/repair.png",
    category: "Consulting Services",
    features: [
      "Energy Efficiency Audits",
      "Electrical Safety Compliance Checks",
      "Regulatory Approvals & Liaisoning",
      "Metering System Solutions",
      "System Performance Optimization",
    ],
    highlights: [
      "Actionable recommendations",
      "Compliance mapping",
      "ROI-based measures",
    ],
    scope: [
      "Data collection & measurements",
      "Load profiling & harmonics",
      "Findings, risks & CAPEX mapping",
      "Implementation roadmap",
    ],
    benefits: ["Lower energy bills", "Safer plants", "Compliance confidence"],
    stats: [
      { label: "Audits Delivered", value: "250+" },
      { label: "Avg. Savings Potential", value: "8–15%" },
    ],
    projects: [
      {
        id: "ac-p1",
        title: "Safety Compliance Audit",
        image: "/blog1.jpeg",
        status: "Completed",
        year: "2023",
        location: "Maharashtra",
        capacity: "",
        snippet: "Arc flash assessment & PPE recommendations.",
      },
      {
        id: "ac-p2",
        title: "Energy Audit – Factory Cluster",
        image: "/blog2.jpeg",
        status: "Completed",
        year: "2022",
        location: "Gujarat",
        capacity: "",
        snippet: "Harmonics study and PF improvement.",
      },
      {
        id: "ac-p3",
        title: "Liaisoning & Approvals",
        image: "/blog3.jpeg",
        status: "Ongoing",
        year: "2024",
        location: "Karnataka",
        capacity: "",
        snippet: "End-to-end regulatory coordination.",
      },
    ],
    faqs: [
      { q: "Can you implement findings?", a: "Yes, either directly or with partner OEMs." },
      { q: "Do you provide training?", a: "Toolbox talks and safety trainings are included." },
      { q: "Can audits be phased?", a: "Yes, we create a phased roadmap to suit budgets." },
    ],
    gallery: ["/repair.png", "/blog1.jpeg", "/blog2.jpeg"],
  },
  {
    id: "8",
    title: "High Voltage Distribution System (HVDS)",
    slug: "high-voltage-distribution-system-hvds",
    description:
      "Dedicated high-voltage systems for agricultural consumers to reduce losses and improve voltage regulation.",
    overview:
      "Deploy HVDS with dedicated transformers for agricultural feeders to minimize technical losses and enhance reliability.",
    image: "/solar.jpeg",
    category: "Agricultural Power",
    features: [
      "11/33 kV Dedicated Line Installation",
      "Three-Phase Metering for Agriculture",
      "System Modernization & Loss Reduction",
      "Transformer Setup for HVDS",
      "Rural Network Upgradation",
    ],
    highlights: [
      "Reduced theft and losses",
      "Improved voltage profile",
      "Targeted farm reliability",
    ],
    scope: [
      "Feeder study & DPRs",
      "Transformer siting & earthing",
      "Metering & service connections",
      "Monitoring & maintenance",
    ],
    benefits: ["Better reliability", "Lower losses", "Improved customer satisfaction"],
    stats: [
      { label: "Feeder Conversions", value: "70+" },
      { label: "Avg. Loss Reduction", value: "12–18%" },
    ],
    projects: [
      {
        id: "hvds-p1",
        title: "HVDS Feeder Conversion",
        image: "/blog4.jpeg",
        status: "Completed",
        year: "2023",
        location: "Maharashtra",
        capacity: "11 kV",
        snippet: "Dedicated DTs and loss reduction program.",
      },
      {
        id: "hvds-p2",
        title: "Farm Reliability Upgrade",
        image: "/blog2.jpeg",
        status: "Ongoing",
        year: "2024",
        location: "Rajasthan",
        capacity: "33 kV",
        snippet: "Improved voltage regulation and metering.",
      },
      {
        id: "hvds-p3",
        title: "Rural Upgradation Drive",
        image: "/blog3.jpeg",
        status: "Completed",
        year: "2022",
        location: "Gujarat",
        capacity: "LT/11 kV",
        snippet: "Targeted upgrades for agricultural clusters.",
      },
    ],
    faqs: [
      { q: "Do you take scheme-based projects?", a: "Yes, including DPR and utility coordination." },
      { q: "Can you include automation?", a: "Yes, remote metering and monitoring can be added." },
      { q: "Do you support O&M?", a: "We provide post-commissioning support as required." },
    ],
    gallery: ["/solar.jpeg", "/blog3.jpeg", "/blog4.jpeg"],
  },
  {
    id: "9",
    title: "Rural & Urban Electrification",
    slug: "rural-urban-electrification",
    description:
      "Strengthening power infrastructure for rural and urban areas under government schemes for reliable electricity access.",
    overview:
      "We execute scheme-based electrification—new lines, metering, and household connections—improving access and reliability. Our teams coordinate with DISCOMs for planning, execution, and smooth closure.",
    image: "/hero2.png",
    category: "Infrastructure Development",
    features: [
      "New/Augmented 11/22 kV & LT Lines",
      "Single-Phase Connections for BPL Households",
      "Internal House Wiring & Metering",
      "Solar Rooftop & Boundary Metering",
      "Urban Feeder Upgradation",
    ],
    highlights: ["Faster beneficiary onboarding", "Safety-first house wiring", "GIS/beneficiary records"],
    scope: [
      "Survey, beneficiary mapping, and planning",
      "Line erection, DTs, and metering",
      "Internal wiring with safety checks",
      "Testing, documentation, and handover",
    ],
    benefits: ["Reliable access", "Accurate metering", "Reduced losses and outages"],
    stats: [
      { label: "Connections Enabled", value: "50k+" },
      { label: "Poles/Spans Erected", value: "1,000+" },
    ],
    projects: [
      {
        id: "re-p1",
        title: "Urban Feeder Strengthening",
        image: "/blog1.jpeg",
        status: "Completed",
        year: "2023",
        location: "Maharashtra",
        capacity: "11 kV",
        snippet: "Feeder upgrades and smart metering.",
      },
      {
        id: "re-p2",
        title: "Rural Electrification Scheme",
        image: "/blog2.jpeg",
        status: "Completed",
        year: "2022",
        location: "Gujarat",
        capacity: "LT/11 kV",
        snippet: "Household connections and internal wiring.",
      },
      {
        id: "re-p3",
        title: "Boundary Metering & Rooftop",
        image: "/blog3.jpeg",
        status: "Ongoing",
        year: "2024",
        location: "Rajasthan",
        capacity: "Rooftop + Metering",
        snippet: "Boundary metering and rooftop integration.",
      },
    ],
    faqs: [
      { q: "Do you work under govt. schemes?", a: "Yes—state and central initiatives with full documentation." },
      { q: "Do you provide house wiring?", a: "Yes—per inspectorate safety norms." },
    ],
    gallery: ["/hero2.png", "/blog3.jpeg", "/blog1.jpeg"],
  },

  {
    id: "10",
    title: "Civil & Allied Works",
    slug: "civil-allied-works",
    description:
      "Construction and civil engineering support for electrical infrastructure projects, including substations and lines.",
    overview:
      "We execute substation foundations, cable trenches, equipment plinths, boundary walls, and enclosures, coordinated with electrical packages to ensure continuous workfronts and quality finishes.",
    image: "/hero1.png",
    category: "Civil Engineering",
    features: [
      "Substation Foundations & Enclosures",
      "Civil Works for Line Erection",
      "Structural Support for Transformers",
      "Infrastructure for Railway/Water Projects",
      "Allied Construction Services",
    ],
    highlights: ["Integrated civil–electrical coordination", "Quality concreting and finishes", "Tolerances and QA"],
    scope: [
      "Soil testing and design coordination",
      "Foundations, plinths, and cable trenches",
      "Boundary walls and access roads",
      "Drainage and water-proofing",
    ],
    benefits: ["Fewer interfaces", "Predictable delivery", "Quality documentation"],
    stats: [
      { label: "Civil Packages Delivered", value: "120+" },
      { label: "Workfront Readiness", value: "1.5x Faster" },
    ],
    projects: [
      {
        id: "cw-p1",
        title: "Substation Civil Package",
        image: "/blog1.jpeg",
        status: "Completed",
        year: "2022",
        location: "Gujarat",
        capacity: "33/11 kV",
        snippet: "Foundations, trenches, and enclosures.",
      },
      {
        id: "cw-p2",
        title: "Cable Corridor Civil Works",
        image: "/blog2.jpeg",
        status: "Completed",
        year: "2023",
        location: "Maharashtra",
        capacity: "Multiple spans",
        snippet: "Ducting, chambers, and reinstatement.",
      },
      {
        id: "cw-p3",
        title: "Industrial Infrastructure Support",
        image: "/blog3.jpeg",
        status: "Ongoing",
        year: "2024",
        location: "Karnataka",
        capacity: "Plant backbone",
        snippet: "Plinths, roads, and drainage works.",
      },
    ],
    faqs: [
      { q: "Do you do design & build?", a: "Yes—coordination with structural consultants." },
      { q: "Do you work inside live substations?", a: "Yes—with strict PTW and safety control." },
    ],
    gallery: ["/hero1.png", "/blog4.jpeg", "/blog2.jpeg"],
  },
]


// Mock Staff Data
export const mockStaff: Staff[] = [
  {
    id: "1",
    name: "Rajesh Kumar",
    position: "Chief Electrical Engineer",
    image: "/blog4.jpeg",
    experience: "15+ years",
  },
  {
    id: "2",
    name: "Priya Sharma",
    position: "Solar Project Manager",
    image: "/blog4.jpeg",
    experience: "12+ years",
  },
  {
    id: "3",
    name: "Amit Patel",
    position: "Transformer Specialist",
    image: "/blog4.jpeg",
    experience: "18+ years",
  },
]

// Mock Stats Data
export const mockStats: Stats = {
  experience: 15,
  projects: 200,
  engineers: 50,
  branches: 3,
  satisfaction: 100,
  uptime: 98,
  response: 99,
}

// Mock Company Info
export const companyInfo = {
  name: "Shravan Electrical Contractor Pvt. Ltd.",
  tagline: "Powering Progress with Excellence",
  description:
    "Leading electrical contractor specializing in comprehensive electrical solutions, solar energy projects, and infrastructure development with over 15 years of industry expertise.",
  address: "123 Industrial Area, Phase-II, Gurgaon, Haryana 122015",
  phone: "+91-124-4567890",
  email: "info@shravanelectrical.com",
  whatsapp: "+91-9876543210",
}

// Commented out database API functions - using mock data instead
/*
// These would be the actual API functions when database is connected:

export async function getProjects() {
  // const response = await fetch('/api/projects');
  // return response.json();
  return mockProjects;
}

export async function getServices() {
  // const response = await fetch('/api/services');
  // return response.json();
  return mockServices;
}

export async function getStaff() {
  // const response = await fetch('/api/staff');
  // return response.json();
  return mockStaff;
}

export async function getStats() {
  // const response = await fetch('/api/stats');
  // return response.json();
  return mockStats;
}
*/

export const projects = mockProjects.map((project) => ({
  ...project,
  title: project.name,
  completionDate: project.completedDate,
  category:
    project.category === "Solar Projects"
      ? "Solar"
      : project.category === "Electrical Contracting"
        ? "Industrial"
        : project.category === "Transformer Manufacturing"
          ? "Industrial"
          : project.category === "Infrastructure"
            ? "Infrastructure"
            : project.category === "Cable Fabrication"
              ? "Industrial"
              : "Commercial",
}))

export const services = mockServices
