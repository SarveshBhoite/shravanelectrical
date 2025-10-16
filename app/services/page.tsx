"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { StickyButtons } from "@/components/sticky-buttons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { services } from "@/lib/mock-data";
import {
  Zap,
  Sun,
  Factory,
  Building,
  Shield,
  CheckCircle,
  ArrowRight,
  Phone,
  Clock,
  Users,
  Award,
} from "lucide-react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { DM_Serif_Display } from "next/font/google";

const dmSerif = DM_Serif_Display({ subsets: ["latin"], weight: "400" });

// Animation variants
const bounceInLeft: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 120, damping: 15, duration: 0.6 },
  },
};

const bounceInRight: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 120, damping: 15, duration: 0.6 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: ["easeOut"] },
  },
};

const staggerParent: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function ServicesPage() {
  const serviceCategories = [
    {
      title: "Electrical Infrastructure",
      icon: Zap,
      color: "text-blue-600",
      services: [
        "High Voltage Substation Installation",
        "Power Distribution Systems",
        "Electrical Panel Manufacturing",
        "Cable Laying & Termination",
        "Transformer Installation & Maintenance",
      ],
    },
    {
      title: "Solar & Renewable Energy",
      icon: Sun,
      color: "text-yellow-600",
      services: [
        "Solar Panel Installation",
        "Grid-Tied Solar Systems",
        "Off-Grid Solar Solutions",
        "Solar Water Heating Systems",
        "Energy Storage Solutions",
      ],
    },
    {
      title: "Industrial Solutions",
      icon: Factory,
      color: "text-green-600",
      services: [
        "Industrial Automation",
        "Motor Control Centers",
        "Power Factor Correction",
        "Energy Audit & Optimization",
        "Preventive Maintenance",
      ],
    },
    {
      title: "Infrastructure Projects",
      icon: Building,
      color: "text-purple-600",
      services: [
        "Turnkey EPC Projects",
        "Smart Grid Implementation",
        "Street Lighting Solutions",
        "Building Electrical Systems",
        "Emergency Power Systems",
      ],
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      description: "Initial assessment and requirement analysis",
    },
    {
      step: "02",
      title: "Design",
      description: "Custom solution design and planning",
    },
    {
      step: "03",
      title: "Implementation",
      description: "Professional installation and setup",
    },
    {
      step: "04",
      title: "Support",
      description: "Ongoing maintenance and support",
    },
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "15+ Years Experience",
      description: "Proven track record in electrical contracting",
    },
    {
      icon: Shield,
      title: "Safety Certified",
      description: "ISO certified with zero-accident record",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Highly skilled and certified professionals",
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "On-time project completion guarantee",
    },
  ];

  const slugify = (s: string) =>
    s
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section with Video */}
      <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="/video4.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center p-4 z-10 text-white">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeUp}>
              <Badge variant="outline" className="mb-4 text-white border-white">
                Our Services
              </Badge>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className={`text-4xl md:text-6xl font-bold mb-6 text-balance ${dmSerif.className}`}
            >
              Comprehensive
              <span className="text-blue-400"> Electrical Solutions</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-xl text-white/80 mb-8 text-pretty"
            >
              From residential installations to large-scale industrial projects,
              we deliver innovative electrical solutions tailored to your
              specific needs.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Get Free Quote</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Service Categories (enhanced visibility + lift) */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="text-center mb-12"
          >
            <motion.h2
              variants={fadeUp}
              className={`text-3xl md:text-4xl font-extrabold tracking-tight ${dmSerif.className}`}
            >
              <span className="bg-black bg-clip-text text-transparent">
                Our Service Categories
              </span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              We offer a comprehensive range of electrical services across
              multiple domains
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {serviceCategories.map((category) => (
              <motion.div
                key={category.title}
                variants={fadeUp}
                className="relative group rounded-2xl overflow-hidden border border-border/60
                     bg-gradient-to-br from-primary/5 via-background to-accent/5
                     shadow-[0_8px_30px_rgba(0,0,0,.08)] transition-all
                     hover:-translate-y-1.5 hover:shadow-[0_14px_42px_rgba(0,0,0,.12)]"
              >
                {/* Rotating conic aura */}
                <div
                  className="pointer-events-none absolute -inset-[1px] rounded-2xl opacity-60 animate-spin-slower"
                  style={{
                    background:
                      "conic-gradient(from 0deg, rgba(59,130,246,0.18), transparent 35%, transparent 70%, rgba(59,130,246,0.18))",
                  }}
                />
                {/* Hover tint to fight the white look */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                          bg-gradient-to-tr from-primary/10 via-transparent to-accent/10"
                />

                {/* Card content */}
                <div className="relative z-10 p-6">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 ring-1 ring-primary/15 flex items-center justify-center shadow-sm">
                      <category.icon className={`h-7 w-7 ${category.color}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {category.title}
                      </h3>
                      <p className="text-sm text-foreground/70 mt-1">
                        Tailored solutions crafted by certified experts
                      </p>
                    </div>
                  </div>

                  {/* Animated chips for services */}
                  <motion.div
                    variants={staggerParent}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="mt-5 flex flex-wrap gap-2"
                  >
                    {category.services.map((svc, i) => (
                      <motion.span
                        key={i}
                        variants={fadeUp}
                        className="inline-flex items-center gap-2 rounded-full pl-2 pr-3 py-1 text-sm
                             bg-primary/5 text-foreground border border-primary/20
                             shadow-sm hover:bg-primary/15 transition-colors"
                      >
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>{svc}</span>
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Bottom accent bar */}
                  <div className="mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-primary via-accent to-primary/70 group-hover:w-28 transition-all" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Tiny CSS keyframe for the slow conic aura */}
        <style jsx>{`
          @keyframes spin-slower {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          .animate-spin-slower {
            animation: spin-slower 30s linear infinite;
          }
        `}</style>
      </section>

      {/* Featured Services */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-12"
          >
            <motion.h2
              variants={bounceInRight}
              className={`text-3xl font-bold mb-4 ${dmSerif.className}`}
            >
              Featured Services
            </motion.h2>
            <motion.p
              variants={bounceInRight}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Our most popular and specialized electrical services
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service: any, index: number) => (
              <motion.div
                key={index}
                variants={bounceInRight}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <Card>
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={service.image || "/blog4.jpeg?height=200&width=400"}
                      alt={service.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      {service.category && (
                        <Badge className="bg-primary/90 text-primary-foreground">
                          {service.category}
                        </Badge>
                      )}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {service.description}
                    </p>
                    <Button
                      asChild
                      variant="ghost"
                      className="p-0 h-auto font-medium group-hover:text-primary"
                    >
                      <Link
                        href={`/services/${
                          service.slug ?? slugify(service.title)
                        }`}
                      >
                        Learn More <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-12"
          >
            <motion.h2
              variants={fadeUp}
              className={`text-3xl font-bold mb-4 ${dmSerif.className}`}
            >
              Our Process
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              A systematic approach to ensure project success from start to
              finish
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {processSteps.map((step, index) => (
              <motion.div key={index} variants={fadeUp} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-8"></div>
                  )}
                </div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Credentials Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-12"
          >
            <motion.h2
              variants={bounceInLeft}
              className={`text-4xl font-extrabold mb-6 tracking-tight ${dmSerif.className}`}
            >
              Our Credentials
            </motion.h2>
            <motion.p
              variants={bounceInLeft}
              className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Precisely covering electrical fields as a trusted partner to major
              industries and public projects across India—planning and
              delivering turnkey solutions end-to-end.
            </motion.p>
          </motion.div>

          <motion.div
            variants={bounceInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-5xl mx-auto rounded-2xl p-10 border bg-gradient-to-br from-primary/10 via-background to-accent/10"
          >
            <motion.div
              variants={staggerParent}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-6 text-foreground/90 text-lg leading-relaxed"
            >
              {[
                "This enables our customers to turn over a concept to us and walk away from the project with the confidence that it will be completed in a time and cost-efficient manner.",
                "We are proficient in the execution of either pre-designed or design & build projects. Our field experience covers all types of electrical installation/security services in projects.",
                "This can only be achieved with good communication and understanding, and the correct use of contract management tools: reporting, progress evaluation, and a flexible approach to solving problems.",
                "We provide a one-step solution to turnkey electrical projects, including interior setups, safety systems, and energy optimization.",
                "We also deal in Advanced Lightning Arrestors, Building Intelligence Systems, and Specialized Earthing Solutions—backed by a proven track record and experienced leadership.",
              ].map((paragraph, index) => (
                <motion.p key={index} variants={fadeUp}>
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-12"
          >
            <motion.h2
              variants={bounceInRight}
              className={`text-3xl font-bold mb-4 ${dmSerif.className}`}
            >
              Why Choose Us
            </motion.h2>
            <motion.p
              variants={bounceInRight}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              What sets us apart in the electrical contracting industry
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {whyChooseUs.map((item, index) => (
              <motion.div key={index} variants={bounceInRight}>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={bounceInLeft}>
              <h2 className={`text-3xl font-bold mb-6 ${dmSerif.className}`}>
                Service Areas
              </h2>
              <p className="text-muted-foreground mb-6">
                We proudly serve clients across multiple states and regions,
                bringing our expertise to projects of all sizes and
                complexities.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="space-y-2">
                  <h4 className="font-semibold">Primary Regions:</h4>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Maharashtra</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Project Types:</h4>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Residential</li>
                    <li>• Commercial</li>
                    <li>• Industrial</li>
                    <li>• Infrastructure</li>
                  </ul>
                </div>
              </div>
              <Button asChild>
                <Link href="/contact">Check Service Availability</Link>
              </Button>
            </motion.div>
            <motion.div variants={bounceInRight} className="relative">
              <img
                src="/hero2.png?height=400&width=500"
                alt="Service areas map"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2
              variants={fadeUp}
              className={`text-3xl font-bold mb-4 ${dmSerif.className}`}
            >
              Ready to Start Your Project?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-xl mb-8 opacity-90 max-w-2xl mx-auto"
            >
              Get a free consultation and quote for your electrical project
              today
            </motion.p>
            <motion.div
              variants={staggerParent}
              className="flex flex-wrap justify-center gap-4"
            >
              <motion.div variants={fadeUp}>
                <Button asChild size="lg" variant="secondary">
                  <Link href="/contact">Get Free Quote</Link>
                </Button>
              </motion.div>
              <motion.div variants={fadeUp}>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                >
                  <Link href="tel:+919876543210">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <StickyButtons />
    </div>
  );
}
