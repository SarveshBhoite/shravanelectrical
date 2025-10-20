"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { StickyButtons } from "@/components/sticky-buttons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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

// ✅ Animation Variants (No Stagger Delay)
const fadeUpRight: Variants = {
  hidden: { opacity: 0, x: 50, y: 20 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const bounceInLeft: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 120, damping: 15 },
  },
};

const bounceInRight: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 120, damping: 15 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
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
    { step: "01", title: "Consultation", description: "Initial assessment and requirement analysis" },
    { step: "02", title: "Design", description: "Custom solution design and planning" },
    { step: "03", title: "Implementation", description: "Professional installation and setup" },
    { step: "04", title: "Support", description: "Ongoing maintenance and support" },
  ];

  const whyChooseUs = [
    { icon: Award, title: "15+ Years Experience", description: "Proven track record in electrical contracting" },
    { icon: Shield, title: "Safety Certified", description: "ISO certified with zero-accident record" },
    { icon: Users, title: "Expert Team", description: "Highly skilled and certified professionals" },
    { icon: Clock, title: "Timely Delivery", description: "On-time project completion guarantee" },
  ];

  const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

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
            <Badge variant="outline" className="mb-4 text-white border-white">Our Services</Badge>
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 text-balance ${dmSerif.className}`}>
              Comprehensive <span className="text-blue-400">Electrical Solutions</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 text-pretty">
              From residential installations to large-scale industrial projects,
              we deliver innovative electrical solutions tailored to your needs.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Get Free Quote</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 text-center">
          <h2 className={`text-3xl md:text-4xl font-extrabold tracking-tight mb-4 ${dmSerif.className}`}>
            <span className="bg-black bg-clip-text text-transparent">Our Service Categories</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            We offer a comprehensive range of electrical services across multiple domains
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {serviceCategories.map((category) => (
              <motion.div
                key={category.title}
                variants={fadeUpRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="relative group rounded-2xl overflow-hidden border border-border/60
                  bg-gradient-to-br from-primary/5 via-background to-accent/5 shadow-[0_8px_30px_rgba(0,0,0,.08)]
                  transition-all hover:-translate-y-1.5 hover:shadow-[0_14px_42px_rgba(0,0,0,.12)]"
              >
                <div className="relative z-10 p-6">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shadow-sm">
                      <category.icon className={`h-7 w-7 ${category.color}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                      <p className="text-sm text-foreground/70 mt-1">Tailored solutions crafted by certified experts</p>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {category.services.map((svc, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-2 rounded-full pl-2 pr-3 py-1 text-sm
                          bg-primary/5 text-foreground border border-primary/20 shadow-sm hover:bg-primary/15 transition-colors"
                      >
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>{svc}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${dmSerif.className}`}>Featured Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our most popular and specialized electrical services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service: any, index: number) => (
              <motion.div
                key={index}
                variants={fadeUpRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
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
                        <Badge className="bg-primary/90 text-primary-foreground">{service.category}</Badge>
                      )}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">{service.description}</p>
                    <Button asChild variant="ghost" className="p-0 h-auto font-medium group-hover:text-primary">
                      <Link href={`/services/${service.slug ?? slugify(service.title)}`}>
                        Learn More <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold mb-4 ${dmSerif.className}`}>Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get a free consultation and quote for your electrical project today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Get Free Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Link href="tel:+919923799555">
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <StickyButtons />
    </div>
  );
}
