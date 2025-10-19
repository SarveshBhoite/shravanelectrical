import { ReactNode } from "react";

export interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  completedDate: string;
  location: string;
  workOrderNo: string;
  yearOfExecution: string;
  valueInLakhs: number;
  status: "Completed" | "Work in Hand" | "In Process Tender";
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
  id: string;
  name: string;
  position: string;
  image: string;
  experience: string;
}

export interface Stats {
  satisfaction: any;
  uptime: any;
  response: any;
  experience: number;
  projects: number;
  engineers: number;
  branches: number;
}

export const mockProjects: Project[] = [
  {
    id: "1",
    name: "Infrastructure Development Plan II - Bhokar & Degloor",
    description:
      "This project, executed under Phase B of Infrastructure Development Plan II, transformed the electrical infrastructure across Bhokar, Degloor, and Nanded Circle. Our team constructed and commissioned 33/11 kV substations, installed high-tension (HT) and low-tension (LT) lines, and established advanced distribution systems. The initiative significantly enhanced power reliability and capacity, benefiting both urban and rural communities in Nanded Zone by ensuring stable electricity supply for residential, commercial, and agricultural needs. Rigorous testing and quality assurance measures ensured compliance with regulatory standards, making this a benchmark project for infrastructure upgrades in Maharashtra.",
    image: "/projects/project1.png", // Replaced with service image
    category: "Infrastructure",
    completedDate: "05.09.2016",
    location: "Nanded Zone, Maharashtra, India",
    workOrderNo: "CE(Infra)/Mumbai/Infra Part II/PhD-EE/IV/T-71/LOA/M-28029, S-28030, C-28031 Both dated: 06/09/2014",
    yearOfExecution: "2014-2016",
    valueInLakhs: 8756,
    status: "Completed",
  },
  {
    id: "2",
    name: "IPDS Part-II Electrification - Hingoli Circle",
    description:
      "Under the Integrated Power Development Scheme (IPDS) Part-II, this project focused on upgrading electrical infrastructure in Hingoli Circle. We augmented 22 kV and 11 kV lines, installed distribution transformer centers, and provided single-phase electricity connections to rural households. The inclusion of solar rooftop systems, boundary metering, and internal house wiring improved power access, reduced transmission losses, and promoted sustainable energy solutions. This initiative significantly enhanced the quality of life for rural communities by ensuring reliable electricity for daily needs and agricultural activities, aligning with national electrification goals.",
    image: "/projects/project2.png", // Replaced with service image
    category: "Electrification",
    completedDate: "05.07.2018",
    location: "Hingoli Circle, Nanded Zone, Maharashtra, India",
    workOrderNo: "CE/NDZ/TS/IP-218 Under Hingoli Circle, CE/NDZ/TS/112,113 Dt:06.01.2017",
    yearOfExecution: "2017-2018",
    valueInLakhs: 1794.15,
    status: "Completed",
  },
  {
    id: "3",
    name: "IPDS Part-II Electrification - Nanded Circle",
    description:
      "This IPDS Part-II initiative in Nanded Circle enhanced the region's electrical infrastructure by upgrading 22 kV and 11 kV lines and distribution transformer centers. We implemented single-phase connections, solar rooftop systems, and advanced metering infrastructure, ensuring reliable power supply and supporting sustainable energy goals. The project improved electricity access for local communities, reduced outages, and facilitated efficient energy management across urban and rural areas. Comprehensive planning and execution ensured minimal disruptions and long-term reliability for Nanded Circle's power grid.",
    image: "/nandeddivision/project1.jpeg", // Replaced with service image
    category: "Electrification",
    completedDate: "04.07.2018",
    location: "Nanded Circle, Nanded Zone, Maharashtra, India",
    workOrderNo: "CE/NDZ/TS/IP-216 Under Nanded Circle, CE/NDZ/TS/116,117 Dt:06.01.2017",
    yearOfExecution: "2017-2018",
    valueInLakhs: 4907.98,
    status: "Completed",
  },
  {
    id: "4",
    name: "IPDS Part-II Electrification - Parbhani Circle",
    description:
      "Implemented under the IPDS Part-II scheme, this project upgraded the electrical grid in Parbhani Circle by enhancing 22 kV and 11 kV lines and distribution transformer centers. We installed single-phase connections, solar rooftop systems, and boundary metering, improving electricity access and grid efficiency. This initiative supported both rural and urban areas in Nanded Zone, ensuring reliable power supply and promoting sustainable energy practices. The project included rigorous testing and stakeholder coordination to deliver a robust and future-ready electrical network.",
    image: "/projects/project4.png", // Replaced with service image
    category: "Electrification",
    completedDate: "03.07.2018",
    location: "Parbhani Circle, Nanded Zone, Maharashtra, India",
    workOrderNo: "CE/NDZ/TS/IP-217 Under Parbhani Circle, CE/NDZ/TS/114,115 Dt:06.01.2017",
    yearOfExecution: "2017-2018",
    valueInLakhs: 2567.6,
    status: "Completed",
  },
  {
    id: "5",
    name: "DDUGJY Part-II Electrification - Hingoli Circle",
    description:
      "Under the Deen Dayal Upadhyaya Gram Jyoti Yojana (DDUGJY) Part-II, this project electrified Below Poverty Line (BPL) households in Hingoli Circle. We augmented 22 kV and 11 kV lines, installed distribution transformer centers, and provided HT/LT metering and internal wiring. This initiative ensured affordable and reliable power access for underserved rural communities, significantly improving their access to electricity and supporting rural development. The project adhered to strict safety and quality standards, ensuring long-term sustainability and community empowerment.",
    image: "/projects/project5.png", // Replaced with service image
    category: "Electrification",
    completedDate: "05.07.2018",
    location: "Hingoli Circle, Nanded Zone, Maharashtra, India",
    workOrderNo: "CE/NDZ/TS/DD-117 Under Hingoli Circle, CE/NDZ/Part-II/104,105 Dt:06.01.2017",
    yearOfExecution: "2017-2018",
    valueInLakhs: 2750.93,
    status: "Completed",
  },
  {
    id: "6",
    name: "DDUGJY Part-II Electrification - Nanded Circle",
    description:
      "This DDUGJY Part-II project in Nanded Circle focused on electrifying BPL households by upgrading 22 kV and 11 kV lines and distribution transformer centers. We installed single-phase connections, HT/LT metering, and internal wiring, enhancing power reliability and access. The project supported rural electrification goals, reduced transmission losses, and improved the quality of life for rural communities in Nanded Zone. Our team coordinated with local authorities to ensure seamless implementation and compliance with scheme guidelines.",
    image: "/nandeddivision/project3.jpeg", // Replaced with service image
    category: "Electrification",
    completedDate: "05.07.2018",
    location: "Nanded Circle, Nanded Zone, Maharashtra, India",
    workOrderNo: "CE/NDZ/TS/DD-118 Under Nanded Circle, CE/NDZ/Part-II/106,107 Dt:06.01.2017",
    yearOfExecution: "2017-2018",
    valueInLakhs: 4663.08,
    status: "Completed",
  },
  {
    id: "7",
    name: "DDUGJY Part-II Electrification - Parbhani Circle",
    description:
      "Under DDUGJY Part-II, this project electrified BPL households in Parbhani Circle by upgrading 22 kV and 11 kV lines and distribution transformer centers. We provided single-phase connections, HT/LT metering, and internal wiring, promoting equitable power distribution. The initiative enhanced grid reliability and supported rural development by ensuring consistent electricity access for underserved communities. Detailed planning and stakeholder engagement ensured the project's success and alignment with national electrification objectives.",
    image: "/projects/project7.png", // Replaced with service image
    category: "Electrification",
    completedDate: "02.07.2018",
    location: "Parbhani Circle, Nanded Zone, Maharashtra, India",
    workOrderNo: "CE/NDZ/TS/DD-119 Under Parbhani Circle, CE/NDZ/Part-II/108,109 Dt:06.01.2017",
    yearOfExecution: "2017-2018",
    valueInLakhs: 1323.1,
    status: "Completed",
  },
  {
    id: "8",
    name: "DDUGJY Part-I Substation Upgrades - Parbhani Circle",
    description:
      "This DDUGJY Part-I project involved constructing new 33/11 kV and 22/11 kV substations and augmenting power transformers in Parbhani Circle. We installed associated HT lines, enhancing grid capacity and reliability. The project supported rural electrification goals in Nanded Zone by improving power infrastructure, reducing outages, and ensuring stable electricity supply for rural communities. Our team employed advanced engineering practices to deliver a robust and efficient power distribution network.",
    image: "/projects/project8.jpeg", // Replaced with service image
    category: "Substation",
    completedDate: "03.09.2020",
    location: "Parbhani Circle, Nanded Zone, Maharashtra, India",
    workOrderNo: "CE/NDZ/DDUGJY-Part-I/DD-12/2018-19/LOA/2005,2006 Dt.04.09.2019",
    yearOfExecution: "2019-2020",
    valueInLakhs: 273.4,
    status: "Completed",
  },
  {
    id: "9",
    name: "DDUGJY Part-I Substation Upgrades - Nanded Circle",
    description:
      "Under DDUGJY Part-I, we established new 33/11 kV and 22/11 kV substations and augmented power transformers in Nanded Circle. The project included the installation of 33 kV and 22 kV lines, significantly improving power infrastructure. This initiative supported rural electrification goals in Nanded Zone, ensuring reliable power supply and enhancing grid efficiency for both rural and urban areas. Comprehensive testing and quality assurance ensured the project's long-term reliability and performance.",
    image: "/nandeddivision/project4.jpeg", // Replaced with service image
    category: "Substation",
    completedDate: "15.12.2018",
    location: "Nanded Circle, Nanded Zone, Maharashtra, India",
    workOrderNo: "CE/NDZ/DDUGJY/PHASE A2/DD-33 R1/PART-1/14782, 14783, 14784 Dt.16.06.2017",
    yearOfExecution: "2017-2018",
    valueInLakhs: 3706.66,
    status: "Completed",
  },
  {
    id: "10",
    name: "HVDS Infrastructure - Nanded Circle",
    description:
      "This turnkey project under the High Voltage Distribution System (HVDS) involved constructing and commissioning 11 kV lines, distribution transformer centers, and three-phase metering in Nanded Circle. We supplied and installed AB switches and HT lines, significantly reducing transmission losses and enhancing power distribution efficiency. The project improved electricity reliability for rural areas, supporting agricultural and residential consumers, and adhered to strict safety and quality standards for sustainable operations.",
    image: "/nandeddivision/project1.jpeg", // Replaced with service image
    category: "HVDS",
    completedDate: "30.08.2021",
    location: "Nanded Circle, Nanded Zone, Maharashtra, India",
    workOrderNo: "CE/NDZ/E-TEN/AG-HVDS/T-03/2019-20/1951 Dt.16.09.2019",
    yearOfExecution: "2019-2021",
    valueInLakhs: 4607,
    status: "Completed",
  },
  {
    id: "11",
    name: "Transformer Repair - Bhokar Division",
    description:
      "This project focused on the repair and restoration of failed distribution transformers up to 200 kVA in Bhokar Division. Our team conducted diagnostics, repaired critical components, and performed rigorous testing to ensure rapid restoration of functionality. The initiative minimized downtime, maintained reliable power supply, and supported local communities in Nanded Zone by ensuring consistent electricity access. Advanced diagnostic tools and skilled technicians ensured high-quality repairs and extended transformer lifespan.",
    image: "/projects/project11.png", // Replaced with service image
    category: "Transformer Maintenance",
    completedDate: "31.03.2023",
    location: "Bhokar Division, Nanded Zone, Maharashtra, India",
    workOrderNo: "EE/BKR/TS/591 Dt.21.02.2024",
    yearOfExecution: "2020-2023",
    valueInLakhs: 291.32,
    status: "Completed",
  },
  {
    id: "12",
    name: "New HT Lines from EHV Substation - Nanded Circle",
    description:
      "This project involved constructing new 11 kV and 33 kV lines from a 132 kV Extra High Voltage (EHV) substation in Nanded Circle. The initiative enhanced the high-voltage transmission network, improving power reliability and capacity for industrial and residential consumers. Our team ensured precise installation, rigorous testing, and compliance with safety standards, contributing to a robust electrical infrastructure in Nanded Zone and supporting regional development.",
    image: "/projects/project12.png", // Replaced with service image
    category: "Infrastructure",
    completedDate: "31.03.2023",
    location: "Nanded Circle, Nanded Zone, Maharashtra, India",
    workOrderNo: "SE(Infra)/NDZ/Exp/235 Dt.15.12.2023",
    yearOfExecution: "2022-2023",
    valueInLakhs: 69.15,
    status: "Completed",
  },
  {
    id: "13",
    name: "HVDS Turnkey Substation Project - Nanded Circle",
    description:
      "This turnkey HVDS project involved constructing new 33/11 kV substations, augmenting power transformers, and installing HT lines and distribution transformer centers in Nanded Circle. The project enhanced grid efficiency, reduced transmission losses, and supported high-voltage distribution for rural electrification. Our comprehensive approach ensured reliable power supply for agricultural and residential consumers in Nanded Zone, with strict adherence to quality and safety protocols.",
    image: "/projects/project13.png", // Replaced with service image
    category: "HVDS",
    completedDate: "12.04.2023",
    location: "Nanded Circle, Nanded Zone, Maharashtra, India",
    workOrderNo: "SE(O&M)/NND/EXP.T-41-HVDS/1041 Dt.28.02.2025",
    yearOfExecution: "2021-2023",
    valueInLakhs: 1720.91,
    status: "Completed",
  },
  {
    id: "14",
    name: "AG-HVDS Electrification - Nanded Circle",
    description:
      "Under the AG-HVDS 500 Cr GoM Grant Scheme, this turnkey project installed plant and equipment for paid pending OPEN and OBC category connections in Nanded Circle. We constructed 11 kV lines, distribution transformer centers, and advanced metering systems, improving access to reliable power for agricultural users. The initiative enhanced grid efficiency, reduced losses, and supported rural electrification goals in Nanded Zone, with comprehensive stakeholder coordination and quality assurance.",
    image: "/projects/project14.png", // Replaced with service image
    category: "HVDS",
    completedDate: "31.03.2024",
    location: "Nanded Circle, Nanded Zone, Maharashtra, India",
    workOrderNo: "SE/NDC/TS/3079 Dt.17.06.2025",
    yearOfExecution: "2023-2024",
    valueInLakhs: 2467.81,
    status: "Completed",
  },
  {
    id: "15",
    name: "Solar Photovoltaic Power Stations - PM-KUSUM MSKVY 2.0",
    description:
      "As a Solar Power Developer under the PM-KUSUM MSKVY 2.0 Scheme, we are developing solar photovoltaic power generating stations with a total capacity of 23 MW (AC) across Maharashtra. The project involves site assessment, engineering, procurement, installation, and commissioning of solar plants, along with grid integration and performance monitoring. This initiative promotes renewable energy adoption, supports agricultural sustainability by powering irrigation systems, and reduces carbon emissions in rural areas. Our team employs advanced solar technologies and SCADA systems to ensure optimal performance and reliability.",
    image: "/projects/project15.png", // Replaced with service image
    category: "Solar",
    completedDate: "TBD",
    location: "Maharashtra, India",
    workOrderNo: "CE/RE/MSKVY 2.0/ROUND 26/LOA/15901 Dt:23.05.2025",
    yearOfExecution: "2025-Ongoing",
    valueInLakhs: 2300,
    status: "Work in Hand",
  },
  {
    id: "16",
    name: "Substation Maintenance - Nanded Division",
    description:
      "This ongoing project focuses on breakdown maintenance for substations in Nanded Division under O&M Nanded Circle. Our team is conducting diagnostics, repairs, and preventive maintenance for critical substation equipment, including transformers, switchgear, and control systems. The initiative ensures minimal downtime, enhances grid reliability, and maintains consistent power supply for urban and rural consumers in Nanded Zone. Advanced diagnostic tools and skilled technicians ensure high-quality maintenance and compliance with safety standards.",
    image: "/nandeddivision/project1.jpeg", // Replaced with service image
    category: "Substation Maintenance",
    completedDate: "TBD",
    location: "Nanded Division, Nanded Zone, Maharashtra, India",
    workOrderNo: "SE/NDC/1034111 Dt 26.05.2025",
    yearOfExecution: "2025-Ongoing",
    valueInLakhs: 415,
    status: "Work in Hand",
  },
  {
    id: "17",
    name: "DTC Maintenance - Nanded Urban Division",
    description:
      "This project involves breakdown maintenance of Distribution Transformer Centers (DTCs) in Nanded Urban Subdivision under O&M Nanded Division. Our team is performing diagnostics, repairs, and testing of transformers up to 200 kVA, ensuring rapid restoration of functionality. The initiative minimizes power disruptions and supports reliable electricity supply for urban consumers in Nanded Circle. We employ advanced testing methods and OEM-grade spares to extend transformer lifespan and ensure grid stability.",
    image: "/projects/project17.png", // Replaced with service image
    category: "Transformer Maintenance",
    completedDate: "TBD",
    location: "Nanded Urban Division, Nanded Zone, Maharashtra, India",
    workOrderNo: "EE/UD/98655 Dt 23.04.2025",
    yearOfExecution: "2025-Ongoing",
    valueInLakhs: 235,
    status: "Work in Hand",
  },
  {
    id: "18",
    name: "HT Line and Cable Maintenance - Nanded Urban Division",
    description:
      "This ongoing project focuses on the breakdown maintenance of high-tension (HT) overhead lines and underground cables in Nanded Urban Division. Our team is conducting inspections, repairs, and testing to ensure the integrity of the HT network. The initiative enhances power reliability, reduces outages, and supports the electrical infrastructure for urban consumers in Nanded Circle. We utilize advanced diagnostic tools and certified linemen to ensure safety and compliance with regulatory standards.",
    image: "/projects/project18.png", // Replaced with service image
    category: "Line Maintenance",
    completedDate: "TBD",
    location: "Nanded Urban Division, Nanded Zone, Maharashtra, India",
    workOrderNo: "EE/UD/95434 Dt 11.04.2025",
    yearOfExecution: "2025-Ongoing",
    valueInLakhs: 199,
    status: "Work in Hand",
  },
  {
    id: "19",
    name: "LT Line and Cable Maintenance - Nanded Urban Division",
    description:
      "This project involves breakdown maintenance of low-tension (LT) overhead lines, underground cables, and fuse calls in Nanded Urban Division. Our team is performing rapid repairs, testing, and preventive maintenance to ensure a stable LT network. The initiative minimizes disruptions and supports reliable power supply for residential and commercial consumers in Nanded Circle. We employ certified technicians and advanced testing equipment to ensure high-quality maintenance and adherence to safety protocols.",
    image: "/projects/project19.png", // Replaced with service image
    category: "Line Maintenance",
    completedDate: "TBD",
    location: "Nanded Urban Division, Nanded Zone, Maharashtra, India",
    workOrderNo: "EE/UD/98422 Dt 22.04.2025",
    yearOfExecution: "2025-Ongoing",
    valueInLakhs: 188,
    status: "Work in Hand",
  },
  {
    id: "20",
    name: "DTC Maintenance - Bhokar Rural Subdivision",
    description:
      "This ongoing project focuses on breakdown maintenance of Distribution Transformer Centers (DTCs) in Bhokar Rural Subdivision under O&M Bhokar Division. Our team is conducting diagnostics, repairs, and testing of transformers up to 200 kVA, ensuring rapid restoration of functionality. The initiative supports reliable power supply for rural communities, minimizing downtime and enhancing grid stability. Advanced diagnostic tools and OEM-grade spares ensure high-quality repairs and extended transformer lifespan.",
    image: "/projects/project20.png", // Replaced with service image
    category: "Transformer Maintenance",
    completedDate: "TBD",
    location: "Bhokar Division, Nanded Zone, Maharashtra, India",
    workOrderNo: "EE/BKR/98028 Dt 21.04.2025",
    yearOfExecution: "2025-Ongoing",
    valueInLakhs: 205,
    status: "Work in Hand",
  },
  {
    id: "21",
    name: "HT Line and Cable Maintenance - Bhokar Rural Subdivision",
    description:
      "This project involves breakdown maintenance of high-tension (HT) overhead lines and underground cables in Bhokar Rural Subdivision under O&M Bhokar Division. Our team is performing inspections, repairs, and testing to maintain the integrity of the HT network. The initiative enhances power reliability and supports rural electrification goals in Nanded Zone. We utilize certified linemen and advanced testing equipment to ensure safety and compliance with regulatory standards.",
    image: "/projects/project21.png", // Replaced with service image
    category: "Line Maintenance",
    completedDate: "TBD",
    location: "Bhokar Division, Nanded Zone, Maharashtra, India",
    workOrderNo: "EE/BKR/96777 Dt 17.04.2025",
    yearOfExecution: "2025-Ongoing",
    valueInLakhs: 231,
    status: "Work in Hand",
  },
  {
    id: "22",
    name: "LT Line and Cable Maintenance - Bhokar Rural Subdivision",
    description:
      "This ongoing project focuses on breakdown maintenance of low-tension (LT) overhead lines and underground cables in Bhokar Rural Subdivision under O&M Bhokar Division. Our team is conducting rapid repairs, testing, and preventive maintenance to ensure a stable LT network. The initiative minimizes disruptions and supports reliable power supply for rural consumers in Nanded Zone. Certified technicians and advanced equipment ensure high-quality maintenance and adherence to safety standards.",
    image: "/projects/project22.png", // Replaced with service image
    category: "Line Maintenance",
    completedDate: "TBD",
    location: "Bhokar Division, Nanded Zone, Maharashtra, India",
    workOrderNo: "EE/BKR/97712 Dt 21.04.2025",
    yearOfExecution: "2025-Ongoing",
    valueInLakhs: 222,
    status: "Work in Hand",
  },
  {
    id: "23",
    name: "DTC Maintenance - Degloor Division",
    description:
      "This project involves breakdown maintenance of Distribution Transformer Centers (DTCs) in Degloor Division under Nanded Circle. Our team is performing diagnostics, repairs, and testing of transformers up to 200 kVA, ensuring rapid restoration of functionality. The initiative supports reliable power supply for rural communities, minimizing downtime and enhancing grid stability in Nanded Zone. Advanced diagnostic tools and OEM-grade spares ensure high-quality repairs and extended transformer lifespan.",
    image: "/projects/project23.png", // Replaced with service image
    category: "Transformer Maintenance",
    completedDate: "TBD",
    location: "Degloor Division, Nanded Zone, Maharashtra, India",
    workOrderNo: "EE/DEG/95071 Dt 10.04.2025",
    yearOfExecution: "2025-Ongoing",
    valueInLakhs: 230,
    status: "Work in Hand",
  },
  {
    id: "24",
    name: "HT Line and Cable Maintenance - Degloor Division",
    description:
      "This ongoing project focuses on breakdown maintenance of high-tension (HT) overhead lines and underground cables in Degloor Division under Nanded Circle. Our team is conducting inspections, repairs, and testing to maintain the integrity of the HT network. The initiative enhances power reliability and supports rural electrification goals in Nanded Zone. We utilize certified linemen and advanced testing equipment to ensure safety and compliance with regulatory standards.",
    image: "/projects/project24.png", // Replaced with service image
    category: "Line Maintenance",
    completedDate: "TBD",
    location: "Degloor Division, Nanded Zone, Maharashtra, India",
    workOrderNo: "EE/DEG/94839 Dt 10.04.2025",
    yearOfExecution: "2025-Ongoing",
    valueInLakhs: 190,
    status: "Work in Hand",
  },
  {
    id: "25",
    name: "LT Line and Cable Maintenance - Degloor Division",
    description:
      "This project involves breakdown maintenance of low-tension (LT) overhead lines, underground cables, and fuse calls in Degloor Division under Nanded Circle. Our team is performing rapid repairs, testing, and preventive maintenance to ensure a stable LT network. The initiative minimizes disruptions and supports reliable power supply for rural consumers in Nanded Zone. Certified technicians and advanced equipment ensure high-quality maintenance and adherence to safety protocols.",
    image: "/projects/project25.png", // Replaced with service image
    category: "Line Maintenance",
    completedDate: "TBD",
    location: "Degloor Division, Nanded Zone, Maharashtra, India",
    workOrderNo: "SE/NDC/94891 Dt 09.04.2025",
    yearOfExecution: "2025-Ongoing",
    valueInLakhs: 296,
    status: "Work in Hand",
  },
  {
    id: "26",
    name: "Substation Maintenance - Hingoli Circle",
    description:
      "This ongoing project focuses on breakdown maintenance for substations in Hingoli Circle under Nanded Zone. Our team is conducting diagnostics, repairs, and preventive maintenance for critical substation equipment, including transformers, switchgear, and control systems. The initiative ensures minimal downtime, enhances grid reliability, and maintains consistent power supply for urban and rural consumers in Hingoli Circle. Advanced diagnostic tools and skilled technicians ensure high-quality maintenance and compliance with safety standards.",
    image: "/projects/project26.png", // Replaced with service image
    category: "Substation Maintenance",
    completedDate: "TBD",
    location: "Hingoli Circle, Nanded Zone, Maharashtra, India",
    workOrderNo: "SE/HNGC/93269 Dt 06.04.2025",
    yearOfExecution: "2025-Ongoing",
    valueInLakhs: 388,
    status: "Work in Hand",
  },
  {
    id: "27",
    name: "Power Transformer Maintenance - Nanded Zone",
    description:
      "This project involves the breakdown maintenance of failed 33/11 kV power transformers across Nanded Zone. Our team is performing diagnostics, repairs, and testing to restore transformer functionality, ensuring minimal downtime. The initiative supports reliable power supply for urban and rural consumers, enhancing grid stability and efficiency across the region. We employ advanced diagnostic tools and OEM-grade spares to ensure high-quality repairs and extended transformer lifespan.",
    image: "/projects/project27.png", // Replaced with service image
    category: "Transformer Maintenance",
    completedDate: "TBD",
    location: "Nanded Zone, Maharashtra, India",
    workOrderNo: "CE/NDZ/0917 Dt 25.04.2025",
    yearOfExecution: "2025-Ongoing",
    valueInLakhs: 296,
    status: "Work in Hand",
  },
  {
    id: "28",
    name: "Substation Maintenance - Parbhani Circle",
    description:
      "This ongoing project focuses on breakdown maintenance for substations in Parbhani Circle under Nanded Zone. Our team is conducting diagnostics, repairs, and preventive maintenance for critical substation equipment, including transformers, switchgear, and control systems. The initiative ensures minimal downtime, enhances grid reliability, and maintains consistent power supply for urban and rural consumers in Parbhani Circle. Advanced diagnostic tools and skilled technicians ensure high-quality maintenance and compliance with safety standards.",
    image: "/projects/project28.png", // Replaced with service image
    category: "Substation Maintenance",
    completedDate: "TBD",
    location: "Parbhani Circle, Nanded Zone, Maharashtra, India",
    workOrderNo: "SE/PBN/97471 Dt 21.04.2025",
    yearOfExecution: "2025-Ongoing",
    valueInLakhs: 268,
    status: "Work in Hand",
  },
  {
    id: "29",
    name: "RDSS Infrastructure Development - Nanded (Package 1)",
    description:
      "Under the Revamped Distribution Sector Scheme (RDSS), this ongoing project focuses on upgrading the electrical distribution infrastructure in Nanded. Our team is implementing advanced metering infrastructure, feeder segregation, and distribution network enhancements to reduce losses and improve reliability. The initiative supports smart grid development, ensures sustainable power supply for urban and rural consumers, and aligns with national goals for modernizing India's power sector. Comprehensive planning and stakeholder coordination ensure seamless execution and long-term impact.",
    image: "/projects/project29.png", // Replaced with service image
    category: "Infrastructure",
    completedDate: "TBD",
    location: "Nanded Zone, Maharashtra, India",
    workOrderNo: "GAIA/ED15/MESCL/RDSS/LOI/24-25/LOI/18/04.06.2023",
    yearOfExecution: "2023-Ongoing",
    valueInLakhs: 14454,
    status: "Work in Hand",
  },
  {
    id: "30",
    name: "Solar Transmission Line and Bay Extension - PM-KUSUM 2.0",
    description:
      "This ongoing project involves the construction of 11 kV transmission lines and bay extensions for solar projects under the PM-KUSUM 2.0 scheme in Nanded. Our team is handling site surveys, line erection, and grid integration to support renewable energy evacuation. The initiative promotes clean energy adoption, enhances grid connectivity, and supports agricultural sustainability by powering irrigation systems in Nanded Zone. Advanced engineering and SCADA integration ensure efficient and reliable power evacuation.",
    image: "/projects/project30.png", // Replaced with service image
    category: "Solar",
    completedDate: "TBD",
    location: "Nanded Zone, Maharashtra, India",
    workOrderNo: "CE/RE/1527/LOA/No.6939 Dt.01.07.2025",
    yearOfExecution: "2025-Ongoing",
    valueInLakhs: 726,
    status: "Work in Hand",
  },
  {
    id: "31",
    name: "RDSS Infrastructure Development - Nanded (Package 2)",
    description:
      "This project under the Revamped Distribution Sector Scheme (RDSS) focuses on further enhancing the electrical distribution infrastructure in Nanded. Our team is implementing advanced metering, feeder upgrades, and loss reduction measures to improve grid efficiency. The initiative supports smart grid development, ensures reliable power supply, and promotes sustainable energy solutions for urban and rural consumers in Nanded Zone. Comprehensive stakeholder coordination and quality assurance ensure the project's success and alignment with national objectives.",
    image: "/projects/project31.png", // Replaced with service image
    category: "Infrastructure",
    completedDate: "TBD",
    location: "Nanded Zone, Maharashtra, India",
    workOrderNo: "GAIA/ED15/MESCL/RDSS/LOI/24-25/LOI/14.07.25",
    yearOfExecution: "2025-Ongoing",
    valueInLakhs: 5204,
    status: "Work in Hand",
  },
  {
    id: "32",
    name: "Off-Grid Solar Pump Systems - PM KUSUM B",
    description:
      "This tender project under the PM KUSUM B / Magel Tyala Saur Krushi Pump Scheme involves the design, manufacture, supply, transport, installation, testing, and commissioning of off-grid DC solar photovoltaic water pumping systems (3HP, 5HP, and 7.5HP) at identified farmer sites across Maharashtra. The project includes a 5-year warranty and maintenance, promoting sustainable irrigation for farmers. Currently in the proposal submission stage, awaiting LOA issuance, this initiative will enhance agricultural productivity, reduce dependency on grid power, and support renewable energy adoption in rural areas.",
    image: "/projects/project32.png", // Replaced with service image
    category: "Solar",
    completedDate: "TBD",
    location: "Maharashtra, India",
    workOrderNo: "MSEDCL/SPD/MTSKPY/2025-26/T-01",
    yearOfExecution: "TBD",
    valueInLakhs: 242144,
    status: "In Process Tender",
  },
];

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
        capacity: "132 kV interface",
        snippet: "Plinths, roads, and drainage works.",
      },
    ],
    faqs: [
      { q: "Do you do design & build?", a: "Yes—coordination with structural consultants." },
      { q: "Do you work inside live substations?", a: "Yes—with strict PTW and safety control." },
    ],
    gallery: ["/hero1.png", "/blog4.jpeg", "/blog2.jpeg"],
  },
];

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
];

// Mock Stats Data
export const mockStats: Stats = {
  experience: 15,
  projects: 250,
  engineers: 50,
  branches: 3,
  satisfaction: 100,
  uptime: 98,
  response: 99,
};

// Mock Company Info
export const companyInfo = {
  name: "Shravan Electrical Contractor Pvt. Ltd.",
  tagline: "Powering Progress with Excellence",
  description:
    "Leading electrical contractor specializing in comprehensive electrical solutions, solar energy projects, and infrastructure development with over 15 years of industry expertise.",
  address: "123 Industrial Area, Phase-II, Gurgaon, Haryana 122015",
  phone: "+9199237 99555",
  email: "shravan.electrical2010@gmail.com",
  whatsapp: "+9199237 99555",
};

// Commented out database API functions - using mock data instead
/*
export async function getProjects() {
  return mockProjects;
}

export async function getServices() {
  return mockServices;
}

export async function getStaff() {
  return mockStaff;
}

export async function getStats() {
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
              : project.category === "Substation Maintenance"
                ? "Maintenance"
                : project.category === "Line Maintenance"
                  ? "Maintenance"
                  : "Commercial",
}));

export const services = mockServices;