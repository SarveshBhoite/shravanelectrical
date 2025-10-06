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

// Re-defining data structures for clarity and to match new content
const teamMembers = [
  {
    name: "Rajesh Shravan",
    position: "Founder & CEO",
    experience: "25+ Years",
    specialization: "Electrical Infrastructure",
    image: "/blog8.jpeg?height=300&width=300",
  },
  {
    name: "Priya Sharma",
    position: "Chief Technical Officer",
    experience: "18+ Years",
    specialization: "Solar & Renewable Energy",
    image: "/blog1.jpeg?height=300&width=300",
  },
  {
    name: "Amit Kumar",
    position: "Project Manager",
    experience: "15+ Years",
    specialization: "Infrastructure Projects",
    image: "/blog2.jpeg?height=300&width=300",
  },
  {
    name: "Sunita Patel",
    position: "Quality Assurance Head",
    experience: "12+ Years",
    specialization: "Safety & Compliance",
    image: "/blog2.jpeg?height=300&width=300",
  },
];

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

// Directors replaced with your real names/qualifications (50% image layout stays)
const directors = [
  {
    name: "Mr. Balaji G. Kanthewad",
    position: "Managing Director | Polytechnic (Electrical Eng.)",
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

const staff = [
  { name: "E. Nagarjuna Goud", qualification: "BE (Electrical)", designation: "Sr Project Manager" },
  { name: "Mrs. Kavita Matke", qualification: "M.Com (Business Management & Accounting)", designation: "Tendering & QS Head" },
  { name: "Prakash Reddy", qualification: "BE (Electrical)", designation: "Sr .Engineer" },
  { name: "Miss . Sony Suture", qualification: "BE (Computer)", designation: "Q.S Engineer" },
  { name: "Usman chaus", qualification: "BE (Electrical)", designation: "QC Engineer" },
  { name: "Shoeb Shah Khayumshah", qualification: "BE (Electrical)", designation: "Site Engineer" },
  { name: "Rajiv Pawer", qualification: "EX BSF , Dip Fire and safety management", designation: "Safety & Security Head" },
  { name: "Swapnil Dange", qualification: "Dip. Electrical", designation: "Site Engineer" },
  { name: "Kazi Azharuddin", qualification: "M.com, LLB , Dip. In DTL , &GST", designation: "Accounts Head" },
  { name: "Balaji Borgave", qualification: "BE (Electrical)", designation: "Site Engineer" },
  { name: "Lokhande Sanket", qualification: "ITI (Electrician)", designation: "Site Supervisor" },
  { name: "Shinde Dipak", qualification: "ITI (Electrician) & Wireman", designation: "Site Supervisor" },
  { name: "Manmath Handed", qualification: "Dep. Computer", designation: "Purchase" },
  { name: "Mahesh panchal", qualification: "B.Com", designation: "Purchase" },
];

// Explicitly define the Variants type for Framer Motion
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5, 
      ease: ["easeOut"] // Explicitly use an array for the easing function
    } 
  },
};

const staggerParent: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
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

      {/* Hero Section with Background Video */}
      <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="/hero-poster.jpg"
        >
          <source src="/video1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50 flex items-end md:items-center pb-16 md:pb-0">
          <div className="container mx-auto px-4 text-white">
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              className={`text-4xl md:text-7xl font-bold mb-4 tracking-tight ${dmSerif.className}`}
            >
              Shravan Electricals
            </motion.h1>
            <motion.p
              variants={fadeUp}
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
      <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4 space-y-24">
          {/* First block: Image on Left */}
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <motion.div
              className="lg:col-span-3 h-[500px] perspective-1000"
              onMouseEnter={() => handleFlip("image1")}
              onMouseLeave={() => handleFlip("image1")}
              variants={fadeUp}
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
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className={`text-3xl md:text-4xl font-bold mb-6 tracking-tight ${dmSerif.className}`}
              >
                Our Story & Growth
              </motion.h2>
              <div className="space-y-4 text-muted-foreground">
                <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                  Established in 2009 as a proprietary firm and successfully elevated since then. We have undergone significant expansion and entered the widespread works of the electrical field, increasing our turnover to Rs. 101.35 crore in the FY 2024–25.
                </motion.p>
                <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                  We are PWD registered as CLASS ‘A’ Electrical and Class IV Civil contractors. We are also registered with M.S.E.D.C.L and M.S.E.T.C.L. The members of the company’s senior management team have an average experience of approximately 15 years across development, engineering, construction, finance, operations, asset management, energy trading and contracting.
                </motion.p>
              </div>
            </div>
          </div>

          {/* Second block: Image on Right */}
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2 order-2 lg:order-1">
              <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className={`text-3xl md:text-4xl font-bold mb-6 tracking-tight ${dmSerif.className}`}
              >
                Our Infrastructure & Excellence
              </motion.h2>
              <div className="space-y-4 text-muted-foreground">
                <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                  Our foundation is built on a solid infrastructure, including a fully-furnished corporate office that caters to all management needs. Our central stores efficiently supply all project sites, contributing to seamless operations and high performance.
                </motion.p>
                <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                  We consistently deliver innovative solutions that power communities and industries across the nation—rooted in quality, safety, communication, and on-time execution.
                </motion.p>
              </div>
            </div>
            <motion.div
              className="lg:col-span-3 order-1 lg:order-2 h-[500px] perspective-1000"
              onMouseEnter={() => handleFlip("image2")}
              onMouseLeave={() => handleFlip("image2")}
              variants={fadeUp}
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
          
          {/* Vision band with hover effect */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative overflow-hidden rounded-2xl border bg-background p-8 md:p-10 shadow-sm mb-10 transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg hover:border-primary/30"
          >
            <div className="absolute inset-y-0 left-0 w-2 bg-primary rounded-r" />
            {/* shine sweep */}
            <span className="pointer-events-none absolute top-0 left-[-40%] h-full w-[40%] bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 group-hover:translate-x-[250%] transition-all duration-700" />
            <div className="flex flex-col md:flex-row items-start gap-6 relative z-10">
              <div className="p-3 rounded-full bg-primary/10 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:rotate-3">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className={`text-2xl font-bold mb-2 ${dmSerif.className}`}>VISION</h3>
                <p className="text-muted-foreground">
                  To be India’s most trusted, innovative electrical infrastructure partner—pioneering sustainable, technology-forward solutions.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Aim + Objectives blocks with hover effects */}
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="relative overflow-hidden rounded-xl border bg-background p-8 shadow-sm transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg hover:border-primary/30"
            >
              <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-primary/5" />
              {/* shine */}
              <span className="pointer-events-none absolute top-0 left-[-40%] h-full w-[40%] bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 group-hover:translate-x-[250%] transition-all duration-700" />
              <div className="flex items-start gap-4 relative z-10">
                <div className="p-3 rounded-full bg-primary/10 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:rotate-3">
                  <Eye className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className={`text-xl font-bold mb-2 ${dmSerif.className}`}>AIM</h3>
                  <p className="text-muted-foreground">
                    Our aim is to provide high quality of Services to all our clients and make continual improvement to our services and people. Maintaining customer satisfaction is the prime factor in our Success.
                  </p>
                </div>
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
              {/* shine */}
              <span className="pointer-events-none absolute top-0 left-[-40%] h-full w-[40%] bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 group-hover:translate-x-[250%] transition-all duration-700" />
              <div className="flex items-start gap-4 relative z-10">
                <div className="p-3 rounded-full bg-primary/10 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:rotate-3">
                  <Target className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className={`text-xl font-bold mb-2 ${dmSerif.className}`}>OBJECTIVES</h3>
                  <p className="text-muted-foreground">
                    Our objective is to achieve customer satisfaction and continual improvement of customer services. Establish long-term, mutually rewarding relationships and provide excellent quality services to meet the requirements of our customers.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Credentials (your long-form text broken into readable bullets/paras) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-12 rounded-2xl border bg-background p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/30"
          >
            <div className="flex items-start gap-4">
              <Shield className="h-8 w-8 text-primary mt-1" />
              <div>
                <h3 className={`text-2xl font-bold mb-2 ${dmSerif.className}`}>Our Credentials</h3>
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
                  <ul className="list-disc list-inside space-y-1">
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
                  </ul>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Core Values: hover-reveal + subtle motion */}
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value) => (
              <motion.div
                key={value.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
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
          </div>
        </div>
      </section>

      {/* Meet Our Directors - big square images 50% width, alternating layout, colored bar + rotating ring */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className={`text-4xl md:text-5xl font-bold mb-4 ${dmSerif.className}`}
            >
              Meet Our Directors
            </motion.h2>
            <motion.p
              variants={fadeUp}
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
              const imageFirst = index % 2 === 1; // alternate layout
              return (
                <div key={index} className="grid lg:grid-cols-2 gap-10 items-center">
                  {/* Info */}
                  <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className={`${imageFirst ? "lg:order-2" : ""}`}
                  >
                    <h3 className={`text-4xl md:text-5xl font-bold ${dmSerif.className}`}>{director.name}</h3>
                    <p className="text-primary font-semibold mt-2 mb-5 text-2xl">{director.position}</p>
                    <p className="text-muted-foreground mb-5 text-lg md:text-xl leading-relaxed">{director.info}</p>
                    <blockquote className="border-l-4 border-primary pl-4 italic text-xl text-foreground/90">
                      “{director.quote}”
                    </blockquote>
                  </motion.div>

                  {/* Image half - big square with bar + rotating ring */}
                  <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className={`relative ${imageFirst ? "lg:order-1" : ""} w-full`}
                  >
                    {/* Colored bar behind */}
                    <div className="absolute inset-x-[-5%] top-1/2 -translate-y-1/2 h-24 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 rounded-full" />
                    <div className="relative h-[520px] rounded-2xl">
                      {/* Rotating conic ring */}
                      <motion.div
                        className="absolute -inset-3 rounded-2xl"
                        style={{
                          background:
                            "conic-gradient(from 0deg, hsl(var(--primary)), transparent 35%, transparent 70%, hsl(var(--primary)))",
                        }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 18, ease: "linear", repeat: Infinity }}
                      />
                      {/* Image */}
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
      
      {/* Horizontal Timeline - central line with centered dots/labels (no cards) */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className={`text-3xl md:text-4xl font-bold mb-4 ${dmSerif.className}`}
            >
              Our Journey Through Time
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Key milestones that have shaped our growth and success over the years
            </motion.p>
          </div>

          {/* Hidden scrollbar via inline CSS (styled-jsx) */}
          <div className="relative overflow-x-auto timeline-scroll">
            <div className="relative w-max px-10 py-10">
              {/* Central line */}
              <div className="pointer-events-none absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-primary/20" />
              
              <div className="flex gap-24">
                {milestones.map((m, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="relative h-56 w-64 flex-shrink-0"
                  >
                    {/* Dot centered on the line */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary shadow ring-4 ring-background" />
                    
                    {/* Top label (even) or Bottom label (odd) */}
                    {i % 2 === 0 ? (
                      <div className="absolute left-1/2 -translate-x-1/2 bottom-[calc(50%+22px)] w-64 text-center">
                        <div className="text-sm font-semibold text-primary">{m.year}</div>
                        <div className={`text-foreground font-semibold ${dmSerif.className}`}>{m.event}</div>
                        <div className="text-xs text-muted-foreground mt-1">{m.description}</div>
                      </div>
                    ) : (
                      <div className="absolute left-1/2 -translate-x-1/2 top-[calc(50%+22px)] w-64 text-center">
                        <div className="text-sm font-semibold text-primary">{m.year}</div>
                        <div className={`text-foreground font-semibold ${dmSerif.className}`}>{m.event}</div>
                        <div className="text-xs text-muted-foreground mt-1">{m.description}</div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Inline CSS (styled-jsx) for hiding scrollbar */}
          <style jsx>{`
            .timeline-scroll {
              -ms-overflow-style: none; /* IE and Edge */
              scrollbar-width: none; /* Firefox */
            }
            .timeline-scroll::-webkit-scrollbar {
              display: none; /* Chrome, Safari, Opera */
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
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className={`text-3xl md:text-4xl font-bold mb-4 ${dmSerif.className}`}
            >
              Our Dedicated Staff
            </motion.h2>
            <motion.p
              variants={fadeUp}
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
              <tbody>
                {staff.map((member, index) => (
                  <motion.tr
                    key={index}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    className="border-b transition-colors hover:bg-muted/50"
                  >
                    <td className="p-4 font-medium">{member.name}</td>
                    <td className="p-4 text-muted-foreground hidden md:table-cell">{member.qualification}</td>
                    <td className="p-4 text-sm font-medium">{member.designation}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className={`text-3xl font-bold mb-4 ${dmSerif.className}`}
          >
            Ready to Power Your Next Project?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-xl mb-8 opacity-90 max-w-2xl mx-auto"
          >
            Let's discuss how our expertise can bring your electrical
            infrastructure vision to life
          </motion.p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <StickyButtons />
    </div>
  );
}