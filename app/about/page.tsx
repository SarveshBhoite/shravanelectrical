"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { StickyButtons } from "@/components/sticky-buttons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { companyInfo } from "@/lib/mock-data";
import {
  Target,
  Eye,
  Zap,
  Shield,
  Clock,
  CheckCircle,
  Calendar,
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import { DM_Serif_Display } from "next/font/google";

// Elegant, not-too-cursive serif for headings
const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
});

// Updated milestones aligned with 2009 establishment and growth
const milestones = [
  {
    year: "2009",
    event: "Established as Proprietary Firm",
    description:
      "Founded in Nanded; began delivering core electrical contracting services.",
  },
  {
    year: "2012",
    event: "Expansion into Wide Electrical Works",
    description:
      "Entered widespread electrical projects and scaled operational capacity.",
  },
  {
    year: "2015",
    event: "PWD Class ‘A’ Registration",
    description:
      "Achieved CLASS ‘A’ Electrical and Class IV Civil contractor status.",
  },
  {
    year: "2018",
    event: "State Utility & Transmission Registration",
    description:
      "Registered with M.S.E.D.C.L and M.S.E.T.C.L; broadened project profile.",
  },
  {
    year: "2021",
    event: "Turnkey Design & Build Capability",
    description:
      "Delivered pre-designed and design–build projects across sectors.",
  },
  {
    year: "2024",
    event: "Rs. 101.35 Cr Turnover (FY 2024–25)",
    description:
      "Milestone growth backed by quality, safety, and client trust.",
  },
];

// Core values (condensed copy to fit the cards)
const coreValues = [
  {
    id: 1,
    icon: <Shield className="h-12 w-12 text-primary mx-auto mb-4" />,
    title: "Infrastructure",
    short: "Well-furnished office & central stores.",
    details:
      "Well-equipped office and centralized stores enable fast site supply, efficient coordination, and consistent performance across projects.",
  },
  {
    id: 2,
    icon: <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />,
    title: "Customer Satisfaction",
    short: "Open & honest client relationships.",
    details:
      "Open, honest relationships with continuous feedback. We exceed requirements, deliver reliably, and build repeat business through trust.",
  },
  {
    id: 3,
    icon: <Clock className="h-12 w-12 text-primary mx-auto mb-4" />,
    title: "Quality Assurance",
    short: "Turnkey electrical projects.",
    details:
      "Experts in internal/external electrification. Continuous QMS improvement ensures right‑first‑time delivery and measurable quality.",
  },
  {
    id: 4,
    icon: <Zap className="h-12 w-12 text-primary mx-auto mb-4" />,
    title: "Health & Safety",
    short: "Safe & healthy environment.",
    details:
      "Zero‑harm culture with compliant systems, proactive training, and safe, risk‑controlled workplaces for all stakeholders.",
  },
];

// Directors replaced with your real names/qualifications
const directors = [
  {
    name: "Mr. Balaji G. Kanthewad",
    position: "Managing Director | Electrical Engineer",
    info:
      "Founder-director leading Shravan Electricals since 2009. With a Polytechnic background in Electrical Engineering, he drives turnkey electrification and contracting—focusing on quality, safety, and on-time delivery across diverse electrical projects.",
    image: "/director1.png?height=1000&width=1000",
    quote:
      "Our commitment is to deliver time-bound, cost-efficient, and safe electrical solutions.",
  },
  {
    name: "Mrs. Sharmila B. Kanthewad",
    position: "Director | BE (Computer Eng.)",
    info:
      "Oversees operations, digital processes, tendering, and compliance. With a BE in Computer Engineering, she champions process efficiency, transparent communication, and customer-centric service.",
    image: "/director2.png?height=1000&width=1000",
    quote:
      "Clear communication and accountability are at the core of every successful project.",
  },
  
];

// Staff data
const staff = [
  // --- Existing Staff ---
  { name: "Mrs. Kavita Matke", qualification: "M.Com (Business Management & Accounting)", designation: "Tendering & QS Head" },
  { name: "Prakash Reddy", qualification: "BE (Electrical)", designation: "Sr .Engineer" },
  { name: "Miss. Sony Suture", qualification: "BE (Computer)", designation: "Q.S Engineer" },
  { name: "Usman Chaus", qualification: "BE (Electrical)", designation: "QC Engineer" },
  { name: "Swapnil Dange", qualification: "Diploma Electrical", designation: "Site Engineer" },
  { name: "Balaji Borgave", qualification: "BE (Electrical)", designation: "Site Engineer" },
  { name: "Manmath Handed", qualification: "Diploma Computer", designation: "Purchase" },
  { name: "Mahesh Panchal", qualification: "B.Com", designation: "Purchase" },
  // --- Newly Extracted Staff from Image ---
  { name: "Madhav M. Hatkar", qualification: "BSL, LLB", designation: "Legal Advisor" },
  { name: "Anil A. Joshi", qualification: "Chartered Accountant", designation: "Chartered Accountant" },
  { name: "E Nagarjuna Gaud", qualification: "B.E Electrical", designation: "General Manager" },
  { name: "Kavita Navnath Bhujbal", qualification: "B.E Electrical", designation: "DGM Project" },
  { name: "Surya Prakash Readdy", qualification: "B.E Electrical", designation: "DGM Solar" },
  { name: "Mahesh S. Thadwe", qualification: "Diploma in Civil Engineering", designation: "DGM Civil Construction" },
  { name: "Deepak C. Shinde", qualification: "Electrical Engineer", designation: "DGM Electrical" },
  { name: "Akash Jaiswal", qualification: "B.Tech", designation: "Procurement Executive" },
  { name: "Rajiv S. Pawar", qualification: "Diploma Fire & Safety", designation: "Safety Manager" },
  { name: "Pawan Pawade", qualification: "Diploma in Computer", designation: "Quality Head" },
  { name: "Kazi Azharuddin Kazi R.", qualification: "DTL LLB", designation: "CFO & Finance Manager" },
  { name: "Laxman H. Pandalwad", qualification: "ITI Electrical", designation: "Material Planner" },
  { name: "Sanket Lokhande", qualification: "—", designation: "Production Manager" },
  { name: "Hanmant M. Kachkalwar", qualification: "ITI Electrical", designation: "Assistant of Store Manager" },
  { name: "Shoib Shah", qualification: "B.E Electrical", designation: "Billing and Invoicing" },
  { name: "Sumedh R. Gaddahane", qualification: "B.Tech", designation: "Project Administrator" },
];



// Animation variants
const bounceInLeft: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 15,
      duration: 0.6,
    },
  },
};

const bounceInRight: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 15,
      duration: 0.6,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: ["easeOut"],
    },
  },
};

const staggerParent: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function AboutPage() {
  const [activeValueId, setActiveValueId] = useState<number | null>(null);

  // State for image flip animation
  const [isFlipped, setIsFlipped] = useState({
    image1: false,
    image2: false,
  });

  const handleFlip = (imageKey: "image1" | "image2") => {
    setIsFlipped((prevState) => ({
      ...prevState,
      [imageKey]: !prevState[imageKey],
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="/hero1.png"
        >
          <source src="/video1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50 flex items-end md:items-center pb-16 md:pb-0">
          <div className="container mx-auto px-4 text-white">
            <motion.h1
              variants={bounceInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              className={`text-4xl md:text-7xl font-bold mb-4 tracking-tight ${dmSerif.className}`}
            >
              Shravan Electricals
            </motion.h1>
            <motion.p
              variants={bounceInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              className="text-xl md:text-3xl font-medium/relaxed text-balance max-w-2xl italic"
            >
              Powering India&apos;s{" "}
              <span className="text-primary not-italic font-semibold">Electrical Future</span>
            </motion.p>
          </div>
        </div>
      </section>

      {/* About Section - Detailed Story with Flip Animation */}
      <section className="py-16 bg-gradient-to-br from-primary/50 via-background to-accent/50">
        <div className="container mx-auto px-4 space-y-24">
          {/* First block: Image on Left */}
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <motion.div
              className="lg:col-span-3 h-[500px] perspective-1000"
              onMouseEnter={() => handleFlip("image1")}
              onMouseLeave={() => handleFlip("image1")}
              variants={bounceInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div
                className="relative h-full w-full rounded-lg shadow-2xl"
                initial={false}
                animate={{ rotateY: isFlipped.image1 ? 180 : 0 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front Side */}
                <Image
                  src="/hero2.png?height=500&width=800"
                  alt="Company facilities"
                  fill
                  style={{ objectFit: "cover", backfaceVisibility: "hidden" }}
                  className="absolute inset-0 rounded-lg"
                />
                {/* Back Side */}
                <Image
                  src="/solar.jpeg?height=500&width=800"
                  alt="Solar Power Plant"
                  fill
                  style={{
                    objectFit: "cover",
                    transform: "rotateY(180deg)",
                    backfaceVisibility: "hidden",
                  }}
                  className="absolute inset-0 rounded-lg"
                />
              </motion.div>
            </motion.div>
            <div className="lg:col-span-2">
              <motion.h2
                variants={bounceInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className={`text-3xl md:text-4xl font-bold mb-6 tracking-tight ${dmSerif.className}`}
              >
                Our Story & Growth
              </motion.h2>
              <motion.div
                variants={staggerParent}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="space-y-4 text-muted-foreground"
              >
                <motion.p variants={bounceInRight}>
                  Established in 2009 as a proprietary firm and successfully elevated since then. We have undergone significant expansion and entered the widespread works of the electrical field, increasing our turnover to Rs. 101.35 crore in the FY 2024–25.
                </motion.p>
                <motion.p variants={bounceInRight}>
                  We are PWD registered as CLASS ‘A’ Electrical and Class IV Civil contractors. We are also registered with M.S.E.D.C.L and M.S.E.T.C.L. The members of the company’s senior management team have an average experience of approximately 15 years across development, engineering, construction, finance, operations, asset management, energy trading and contracting.
                </motion.p>
              </motion.div>
            </div>
          </div>

          {/* Second block: Image on Right */}
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2 order-2 lg:order-1">
              <motion.h2
                variants={bounceInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className={`text-3xl md:text-4xl font-bold mb-6 tracking-tight ${dmSerif.className}`}
              >
                Our Infrastructure & Excellence
              </motion.h2>
              <motion.div
                variants={staggerParent}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="space-y-4 text-muted-foreground"
              >
                <motion.p variants={bounceInLeft}>
                  Our foundation is built on a solid infrastructure, including a fully-furnished corporate office that caters to all management needs. Our central stores efficiently supply all project sites, contributing to seamless operations and high performance.
                </motion.p>
                <motion.p variants={bounceInLeft}>
                  We consistently deliver innovative solutions that power communities and industries across the nation—rooted in quality, safety, communication, and on-time execution.
                </motion.p>
              </motion.div>
            </div>
            <motion.div
              className="lg:col-span-3 order-1 lg:order-2 h-[500px] perspective-1000"
              onMouseEnter={() => handleFlip("image2")}
              onMouseLeave={() => handleFlip("image2")}
              variants={bounceInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div
                className="relative h-full w-full rounded-lg shadow-2xl"
                initial={false}
                animate={{ rotateY: isFlipped.image2 ? 180 : 0 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front Side */}
                <Image
                  src="/hero1.png?height=500&width=800"
                  alt="Company team"
                  fill
                  style={{ objectFit: "cover", backfaceVisibility: "hidden" }}
                  className="absolute inset-0 rounded-lg"
                />
                {/* Back Side */}
                <Image
                  src="/repair.png?height=500&width=800"
                  alt="Office interior"
                  fill
                  style={{
                    objectFit: "cover",
                    transform: "rotateY(180deg)",
                    backfaceVisibility: "hidden",
                  }}
                  className="absolute inset-0 rounded-lg"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Guiding Principles: Vision, Aim, Objectives + Credentials */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className={`text-4xl font-bold mb-4 tracking-tight ${dmSerif.className}`}
            >
              Our Guiding Principles
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Our Vision, Objectives, and Core Values are the foundation of our success.
            </motion.p>
          </div>

          {/* Vision band */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative overflow-hidden rounded-2xl border bg-background p-8 md:p-10 shadow-sm mb-10 transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg hover:border-primary/30"
          >
            <div className="absolute inset-y-0 left-0 w-2 bg-primary rounded-r" />
            <span className="pointer-events-none absolute top-0 left-[-40%] h-full w-[40%] bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 group-hover:translate-x-[250%] transition-all duration-700" />
            <div className="flex flex-col md:flex-row items-start gap-6 relative z-10">
              <div className="p-3 rounded-full bg-primary/10 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:rotate-3">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <motion.div variants={fadeUp}>
                <h3 className={`text-2xl font-bold mb-2 ${dmSerif.className}`}>VISION</h3>
                <p className="text-muted-foreground">
                  To be India’s most trusted, innovative electrical infrastructure partner—pioneering sustainable, technology-forward solutions.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Aim + Objectives blocks */}
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="relative overflow-hidden rounded-xl border bg-background p-8 shadow-sm transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg hover:border-primary/30"
            >
              <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-primary/5" />
              <span className="pointer-events-none absolute top-0 left-[-40%] h-full w-[40%] bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 group-hover:translate-x-[250%] transition-all duration-700" />
              <div className="flex items-start gap-4 relative z-10">
                <div className="p-3 rounded-full bg-primary/10 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:rotate-3">
                  <Eye className="h-7 w-7 text-primary" />
                </div>
                <motion.div variants={fadeUp}>
                  <h3 className={`text-xl font-bold mb-2 ${dmSerif.className}`}>AIM</h3>
                  <p className="text-muted-foreground">
                    Our aim is to provide high quality of Services to all our clients and make continual improvement to our services and people. Maintaining customer satisfaction is the prime factor in our Success.
                  </p>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="relative overflow-hidden rounded-xl border bg-background p-8 shadow-sm transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg hover:border-primary/30"
            >
              <div className="absolute -left-8 -bottom-8 w-32 h-32 rounded-full bg-primary/5" />
              <span className="pointer-events-none absolute top-0 left-[-40%] h-full w-[40%] bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 group-hover:translate-x-[250%] transition-all duration-700" />
              <div className="flex items-start gap-4 relative z-10">
                <div className="p-3 rounded-full bg-primary/10 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:rotate-3">
                  <Target className="h-7 w-7 text-primary" />
                </div>
                <motion.div variants={fadeUp}>
                  <h3 className={`text-xl font-bold mb-2 ${dmSerif.className}`}>OBJECTIVES</h3>
                  <p className="text-muted-foreground">
                    Our objective is to achieve customer satisfaction and continual improvement of customer services. Establish long-term, mutually rewarding relationships and provide excellent quality services to meet the requirements of our customers.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Credentials */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-12 rounded-2xl border bg-background p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/30"
          >
            <div className="flex items-start gap-4">
              <Shield className="h-8 w-8 text-primary mt-1" />
              <motion.div
                variants={staggerParent}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <motion.h3
                  variants={fadeUp}
                  className={`text-2xl font-bold mb-2 ${dmSerif.className}`}
                >
                  Our Credentials
                </motion.h3>
                <motion.div
                  variants={staggerParent}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="text-muted-foreground space-y-3"
                >
                  <motion.p variants={fadeUp}>
                    Precisely covering electrical fields—as an act of local success by providing to most major industries, firms, and projects across the country—we have been involved over the years in project planning and turnkey electrical installations.
                  </motion.p>
                  <motion.p variants={fadeUp}>
                    This enables our customers to turn over a concept to us and walk away from the project with the confidence that it will be completed in a time- and cost-efficient manner.
                  </motion.p>
                  <motion.ul
                    variants={staggerParent}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="list-disc list-inside space-y-1"
                  >
                    {[
                      "Proficient in the execution of both pre-designed and design–build projects.",
                      "Field experience covers all types of electrical installation and security services in projects.",
                      "Achieved through good communication, understanding, and the correct use of contract management tools: reporting, progress evaluation, and a flexible problem-solving approach.",
                      "Providing a one-step solution to all turnkey projects covering the electrical field—including designing and setting up of interiors.",
                      "We also deal in Advance Lightning Arrestors, Building Intelligence Systems, and Specialized Earthing Solutions.",
                      "Superior track record of successful projects in the energy industry with a highly experienced management team.",
                    ].map((item, idx) => (
                      <motion.li variants={fadeUp} key={idx}>
                        {item}
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Core Values */}
          <div className="text-center mt-16 mb-8">
            <motion.h3
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className={`text-3xl font-bold ${dmSerif.className}`}
            >
              Our Core Values
            </motion.h3>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Fundamental principles that guide every decision and project
            </motion.p>
          </div>

          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {coreValues.map((value) => (
              <motion.div
                key={value.id}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-xl border bg-white h-48 p-6 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-1 hover:ring-primary/50"
              >
                {/* Front */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center transition-opacity duration-300 group-hover:opacity-0">
                  {value.icon}
                  <h4 className={`font-semibold mb-2 ${dmSerif.className}`}>{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.short}</p>
                </div>
                {/* Back */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary text-primary-foreground flex items-center justify-center p-5">
                  <p className="text-[13px] sm:text-sm leading-snug">{value.details}</p>
                </div>
                {/* Shine */}
                <span className="pointer-events-none absolute -inset-1 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Meet Our Directors */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              variants={bounceInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className={`text-4xl md:text-5xl font-bold mb-4 ${dmSerif.className}`}
            >
              Meet Our Directors
            </motion.h2>
            <motion.p
              variants={bounceInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              The visionaries leading us towards a brighter future.
            </motion.p>
          </div>

          <div className="space-y-24">
            {directors.map((director, index) => {
              const imageFirst = index % 2 === 1;
              return (
                <div key={index} className="grid lg:grid-cols-2 gap-10 items-center">
                  {/* Info */}
                  <motion.div
                    variants={imageFirst ? bounceInLeft : bounceInRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className={`${imageFirst ? "lg:order-2" : ""}`}
                  >
                    <motion.h3
                      variants={imageFirst ? bounceInLeft : bounceInRight}
                      className={`text-4xl md:text-5xl font-bold ${dmSerif.className}`}
                    >
                      {director.name}
                    </motion.h3>
                    <motion.p
                      variants={imageFirst ? bounceInLeft : bounceInRight}
                      className="text-primary font-semibold mt-2 mb-5 text-2xl"
                    >
                      {director.position}
                    </motion.p>
                    <motion.p
                      variants={imageFirst ? bounceInLeft : bounceInRight}
                      className="text-muted-foreground mb-5 text-lg md:text-xl leading-relaxed"
                    >
                      {director.info}
                    </motion.p>
                    <motion.blockquote
                      variants={imageFirst ? bounceInLeft : bounceInRight}
                      className="border-l-4 border-primary pl-4 italic text-xl text-foreground/90"
                    >
                      “{director.quote}”
                    </motion.blockquote>
                  </motion.div>

                  {/* Image half */}
                  <motion.div
                    variants={imageFirst ? bounceInRight : bounceInLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className={`relative ${imageFirst ? "lg:order-1" : ""} w-full`}
                  >
                    <div className="absolute inset-x-[-5%] top-1/2 -translate-y-1/2 h-24 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 rounded-full" />
                    <div className="relative h-[520px] rounded-2xl">
                      <motion.div
                        className="absolute -inset-3 rounded-2xl"
                        style={{
                          background:
                            "conic-gradient(from 0deg, hsl(var(--primary)), transparent 35%, transparent 70%, hsl(var(--primary)))",
                        }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 18, ease: "linear", repeat: Infinity }}
                      />
                      <div className="relative z-10 h-full w-full overflow-hidden rounded-2xl border-4 border-background shadow-2xl">
                        <Image
                          src={director.image}
                          alt={director.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Extended Leadership Team (Spotlight layout) */}
<section className="py-20 bg-gradient-to-tr from-background via-primary/5 to-accent/10 relative overflow-hidden">
  <div className="container mx-auto px-4 relative z-10">
    <div className="text-center mb-14">
      <motion.h2
        variants={bounceInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className={`text-4xl md:text-5xl font-extrabold mb-4 tracking-tight ${dmSerif.className}`}
      >
        <span className="bg-black bg-clip-text text-transparent">
          Leadership Team
        </span>
      </motion.h2>
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="text-muted-foreground max-w-2xl mx-auto"
      >
        The driving force behind Shravan Electricals’ innovation, growth, and operational excellence.
      </motion.p>
    </div>

    <motion.div
      variants={staggerParent}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="space-y-16"
    >
      {[
        {
          name: "Dr. Riddhi B. Kanthewad",
          position: "Managing Director (Operation)",
          info: "Leads strategic operations, ensuring innovation and organizational excellence across the company.",
          quote: "Leadership with vision creates progress that lasts.",
          image: "/director3.png",
        },
        {
          name: "Siddhi B. Kanthewad",
          position: "Managing Director – Civil Engg. & HR",
          info: "Heads HR and civil divisions with people-centric leadership and a focus on operational synergy.",
          quote: "Empowering people and processes to deliver excellence.",
          image: "/director4.png",
        },
        {
          name: "Shravan Balaji Kanthewad",
          position: "Executive Director – IT & Technical",
          info: "Oversees IT and technical operations with emphasis on automation and modern infrastructure.",
          quote: "Technology and precision are the foundation of our future.",
          image: "/director5.png",
        },
      ].map((leader, index) => {
        const reverse = index % 2 === 1; // alternate layout
        return (
          <motion.div
            key={leader.name}
            variants={fadeUp}
            className="grid lg:grid-cols-12 gap-8 items-center"
          >
            {/* Visual */}
            <div className={`relative flex justify-center ${reverse ? "lg:order-2 lg:col-span-5" : "lg:col-span-5"}`}>
              {/* Gradient bar behind the portrait */}
              <div className="absolute -inset-x-24 top-1/2 -translate-y-1/2 h-24 rounded-full bg-gradient-to-r from-primary/15 via-accent/15 to-primary/10 blur-2xl opacity-70 pointer-events-none" />
              {/* Rotating conic ring */}
              <div className="relative w-44 h-44 md:w-56 md:h-56">
                <div
                  className="absolute -inset-3 rounded-full animate-spin-slow opacity-80"
                  style={{
                    background:
                      "conic-gradient(from 0deg, rgba(99,102,241,0.35), transparent 40%, transparent 70%, rgba(20,184,166,0.35))",
                    filter: "drop-shadow(0 0 18px rgba(99,102,241,0.25))",
                  }}
                />
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background shadow-2xl bg-background/40 backdrop-blur">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Text */}
            <div className={`${reverse ? "lg:order-1 lg:col-span-7" : "lg:col-span-7"}`}>
              <div className="relative rounded-2xl p-6 md:p-7 border bg-background/70 backdrop-blur-sm shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_52px_rgba(0,0,0,0.12)] transition-shadow">
                {/* Decorative corner glows */}
                <span className="pointer-events-none absolute -top-2 -left-2 w-10 h-10 rounded-full bg-primary/15 blur-xl" />
                <span className="pointer-events-none absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-accent/15 blur-xl" />

                <h3 className={`text-2xl md:text-3xl font-bold tracking-tight ${dmSerif.className}`}>
                  {leader.name}
                </h3>
                <p className="text-primary font-semibold mt-1">{leader.position}</p>
                <p className="text-muted-foreground mt-3">{leader.info}</p>

                {/* Quote */}
                <div className="mt-4 pl-4 border-l-4 border-primary/30">
                  <p className="italic text-sm text-foreground/80">“{leader.quote}”</p>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  </div>

  {/* soft background shapes */}
  <div className="pointer-events-none absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-primary/10 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-24 -right-24 w-[420px] h-[420px] rounded-full bg-accent/10 blur-3xl" />

  <style jsx>{`
    @keyframes spin-slow {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    .animate-spin-slow { animation: spin-slow 24s linear infinite; }
  `}</style>
</section>

      {/* Horizontal Timeline */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              variants={bounceInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className={`text-3xl md:text-4xl font-bold mb-4 ${dmSerif.className}`}
            >
              Our Journey Through Time
            </motion.h2>
            <motion.p
              variants={bounceInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Key milestones that have shaped our growth and success over the years
            </motion.p>
          </div>

          <div className="relative overflow-x-auto timeline-scroll">
            <div className="relative w-max px-10 py-10">
              <div className="pointer-events-none absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-primary/20" />
              <motion.div
                variants={staggerParent}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="flex gap-24"
              >
                {milestones.map((m, i) => (
                  <motion.div
                    key={i}
                    variants={bounceInLeft}
                    className="relative h-56 w-64 flex-shrink-0"
                  >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary shadow ring-4 ring-background" />
                    {i % 2 === 0 ? (
                      <motion.div
                        variants={bounceInLeft}
                        className="absolute left-1/2 -translate-x-1/2 bottom-[calc(50%+22px)] w-64 text-center"
                      >
                        <motion.div variants={bounceInLeft} className="text-sm font-semibold text-primary">
                          {m.year}
                        </motion.div>
                        <motion.div
                          variants={bounceInLeft}
                          className={`text-foreground font-semibold ${dmSerif.className}`}
                        >
                          {m.event}
                        </motion.div>
                        <motion.div variants={bounceInLeft} className="text-xs text-muted-foreground mt-1">
                          {m.description}
                        </motion.div>
                      </motion.div>
                    ) : (
                      <motion.div
                        variants={bounceInLeft}
                        className="absolute left-1/2 -translate-x-1/2 top-[calc(50%+22px)] w-64 text-center"
                      >
                        <motion.div variants={bounceInLeft} className="text-sm font-semibold text-primary">
                          {m.year}
                        </motion.div>
                        <motion.div
                          variants={bounceInLeft}
                          className={`text-foreground font-semibold ${dmSerif.className}`}
                        >
                          {m.event}
                        </motion.div>
                        <motion.div variants={bounceInLeft} className="text-xs text-muted-foreground mt-1">
                          {m.description}
                        </motion.div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          <style jsx>{`
            .timeline-scroll {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
            .timeline-scroll::-webkit-scrollbar {
              display: none;
              width: 0;
              height: 0;
            }
          `}</style>
        </div>
      </section>

      {/* Staff Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              variants={bounceInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className={`text-3xl md:text-4xl font-bold mb-4 ${dmSerif.className}`}
            >
              Our Dedicated Staff
            </motion.h2>
            <motion.p
              variants={bounceInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Meet the talented professionals who are the backbone of our operations.
            </motion.p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse table-auto">
              <thead className="text-sm font-semibold text-foreground/80 bg-muted/50">
                <tr>
                  <th className="p-4 border-b">Name of Person</th>
                  <th className="p-4 border-b hidden md:table-cell">Qualification</th>
                  <th className="p-4 border-b">Designation</th>
                </tr>
              </thead>
              <motion.tbody
                variants={staggerParent}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
              >
                {staff.map((member, index) => (
                  <motion.tr
                    key={index}
                    variants={bounceInRight}
                    className="border-b transition-colors hover:bg-muted/50"
                  >
                    <td className="p-4 font-medium">{member.name}</td>
                    <td className="p-4 text-muted-foreground hidden md:table-cell">{member.qualification}</td>
                    <td className="p-4 text-sm font-medium">{member.designation}</td>
                  </motion.tr>
                ))}
              </motion.tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            variants={bounceInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className={`text-3xl font-bold mb-4 ${dmSerif.className}`}
          >
            Ready to Power Your Next Project?
          </motion.h2>
          <motion.p
            variants={bounceInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-xl mb-8 opacity-90 max-w-2xl mx-auto"
          >
            Let's discuss how our expertise can bring your electrical
            infrastructure vision to life
          </motion.p>
          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.div variants={bounceInLeft}>
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Start Your Project</Link>
              </Button>
            </motion.div>
            <motion.div variants={bounceInLeft}>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <Link href="/services">Explore Services</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <StickyButtons />
    </div>
  );
}