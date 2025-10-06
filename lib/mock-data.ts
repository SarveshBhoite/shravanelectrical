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

export interface Service {
  category: ReactNode
  id: string
  title: string
  description: string
  image: string
  features: string[]
}

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
    "id": "1",
    "title": "Electrical Contracting",
    "description": "Comprehensive electrical solutions for government, industrial, and rural/urban projects, ensuring safety and regulatory compliance.",
    "image": "/electricalcontracting.png",
    "features": [
      "HT/LT Power Distribution Systems",
      "Substation Installation (33/11 kV, 22/11 kV)",
      "Wiring for Rural/Urban Networks",
      "Metering & Service Connections",
      "Breakdown Maintenance & Repairs"
    ],
    "category": "Electrical Infrastructure"
  },
  {
    "id": "2",
    "title": "Solar Projects",
    "description": "End-to-end solar energy solutions, including photovoltaic plants and agricultural pump systems, supporting sustainable power initiatives.",
    "image": "/hero3.png",
    "features": [
      "Solar PV Plant Installation (23 MW)",
      "Off-Grid Solar Pumps (3-7.5 HP)",
      "11 kV Transmission Line & Bay Extension",
      "System Maintenance (5-Year Warranty)",
      "Grid Integration for Solar Projects"
    ],
    "category": "Renewable Energy"
  },
  {
    "id": "3",
    "title": "Transformer Installation & Maintenance",
    "description": "Supply, installation, and repair of transformers for reliable power distribution in government and public projects.",
    "image": "/repair.png",
    "features": [
      "Transformer Installation (up to 200 kVA)",
      "Repair of Failed Transformers",
      "Testing & Commissioning",
      "Substation Augmentation",
      "Preventive Maintenance"
    ],
    "category": "Power Equipment"
  },
  {
    "id": "4",
    "title": "Cable & Line Erection",
    "description": "Installation and jointing of HT/LT overhead lines and underground cables for robust power distribution networks.",
    "image": "/cableconductor.png",
    "features": [
      "HT/LT Overhead Line Erection (11/33 kV)",
      "Underground Cable Installation & Jointing",
      "Fuse Call Maintenance",
      "Network Modernization",
      "Line Testing & Commissioning"
    ],
    "category": "Power Distribution"
  },
  {
    "id": "5",
    "title": "Infrastructure Turnkey Projects",
    "description": "Complete turnkey solutions for large-scale electrical infrastructure, including substations, distribution networks, and civil works.",
    "image": "/tower.png",
    "features": [
      "Substation Design & Construction (33/11 kV)",
      "HT/LT Network Development",
      "Civil & Allied Infrastructure Works",
      "Project Management & Execution",
      "Loss Reduction & Efficiency Measures"
    ],
    "category": "Infrastructure Development"
  },
  {
    "id": "6",
    "title": "EV Charging Infrastructure",
    "description": "High-tension power supply setups for electric vehicle charging stations, supporting clean mobility initiatives.",
    "image": "/evcharging.png",
    "features": [
      "HT Equipment & Cabling Installation",
      "Power Supply Integration with MSEDCL Grid",
      "Testing & Safety Compliance",
      "Infrastructure for EV Bus Charging",
      "Network Connectivity Solutions"
    ],
    "category": "Clean Energy"
  },
  {
    "id": "7",
    "title": "Electrical Audits & Consulting",
    "description": "Energy audits, safety assessments, and regulatory liaisoning to optimize and ensure compliant electrical systems.",
    "image": "/audits.png",
    "features": [
      "Energy Efficiency Audits",
      "Electrical Safety Compliance Checks",
      "Regulatory Approvals & Liaisoning",
      "Metering System Solutions",
      "System Performance Optimization"
    ],
    "category": "Consulting Services"
  },
  {
    "id": "8",
    "title": "High Voltage Distribution System (HVDS)",
    "description": "Dedicated high-voltage systems for agricultural consumers to reduce losses and improve voltage regulation.",
    "image": "/hvds.png",
    "features": [
      "11/33 kV Dedicated Line Installation",
      "Three-Phase Metering for Agriculture",
      "System Modernization & Loss Reduction",
      "Transformer Setup for HVDS",
      "Rural Network Upgradation"
    ],
    "category": "Agricultural Power"
  },
  {
    "id": "9",
    "title": "Rural & Urban Electrification",
    "description": "Strengthening power infrastructure for rural and urban areas under government schemes for reliable electricity access.",
    "image": "/electrification.png",
    "features": [
      "New/Augmented 11/22 kV & LT Lines",
      "Single-Phase Connections for BPL Households",
      "Internal House Wiring & Metering",
      "Solar Rooftop & Boundary Metering",
      "Urban Feeder Upgradation"
    ],
    "category": "Infrastructure Development"
  },
  {
    "id": "10",
    "title": "Civil & Allied Works",
    "description": "Construction and civil engineering support for electrical infrastructure projects, including substations and lines.",
    "image": "/civilworks.png",
    "features": [
      "Substation Foundations & Enclosures",
      "Civil Works for Line Erection",
      "Structural Support for Transformers",
      "Infrastructure for Railway/Water Projects",
      "Allied Construction Services"
    ],
    "category": "Civil Engineering"
  }
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
