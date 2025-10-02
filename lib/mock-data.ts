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
    image: "/blog4.jpeg",
    category: "Solar Projects",
    completedDate: "2024",
    location: "Rajasthan, India",
  },
  {
    id: "2",
    name: "Industrial Electrical Infrastructure",
    description:
      "Complete electrical infrastructure setup for a manufacturing facility including power distribution, lighting, and automation systems.",
    image: "/blog3.jpeg",
    category: "Electrical Contracting",
    completedDate: "2023",
    location: "Gujarat, India",
  },
  {
    id: "3",
    name: "Transformer Manufacturing Unit",
    description:
      "Established a state-of-the-art transformer manufacturing facility with capacity for 100+ units per month.",
    image: "/blog2.jpeg",
    category: "Transformer Manufacturing",
    completedDate: "2023",
    location: "Maharashtra, India",
  },
  {
    id: "4",
    name: "Smart Grid Implementation",
    description:
      "Implementation of smart grid technology for efficient power distribution across urban areas with real-time monitoring.",
    image: "/blog1.jpeg",
    category: "Infrastructure",
    completedDate: "2024",
    location: "Karnataka, India",
  },
  {
    id: "5",
    name: "Cable Manufacturing Plant",
    description: "Setup of automated cable and conductor manufacturing plant with quality control systems.",
    image: "/blog8.jpeg",
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
    description: "Complete electrical solutions for residential, commercial, and industrial projects with certified professionals and quality assurance.",
    image: "/blog4.jpeg",
    features: [
      "Power Distribution Systems",
      "Lighting Solutions",
      "Electrical Panel Installation",
      "Wiring & Cabling",
      "Maintenance & Repair",
    ],
    category: undefined
  },
  {
    id: "2",
    title: "Solar Projects",
    description: "End-to-end solar energy solutions from design to installation and maintenance for sustainable power generation.",
    image: "/blog3.jpeg",
    features: [
      "Solar Panel Installation",
      "Grid-Tie Systems",
      "Off-Grid Solutions",
      "Solar Water Heating",
      "Maintenance Services",
    ],
    category: undefined
  },
  {
    id: "3",
    title: "Transformer Manufacturing & Repair",
    description: "Custom transformer manufacturing and comprehensive repair services for all types of electrical transformers.",
    image: "/blog2.jpeg",
    features: [
      "Custom Transformer Design",
      "Manufacturing & Testing",
      "Repair & Refurbishment",
      "Oil Analysis",
      "Preventive Maintenance",
    ],
    category: undefined
  },
  {
    id: "4",
    title: "Cable/Conductor/Box Fabrication",
    description: "High-quality cable, conductor, and electrical box fabrication with modern machinery and quality control.",
    image: "/blog1.jpeg",
    features: [
      "Cable Manufacturing",
      "Conductor Production",
      "Junction Box Fabrication",
      "Custom Solutions",
      "Quality Testing",
    ],
    category: undefined
  },
  {
    id: "5",
    title: "Infrastructure Turnkey Projects",
    description: "Complete infrastructure solutions from planning to execution for large-scale electrical and power projects.",
    image: "/blog8.jpeg",
    features: [
      "Project Planning & Design",
      "Procurement & Installation",
      "Testing & Commissioning",
      "Project Management",
      "After-Sales Support",
    ],
    category: undefined
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
