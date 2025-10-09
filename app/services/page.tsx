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
import { motion } from "framer-motion";

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
    s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section with Video */}
      <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
        {/* Background video element */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="/video4.mp4" // Assuming your video file is named video4.mp4 and is in the public folder
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center p-4 z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Badge variant="outline" className="mb-4 text-white border-white">
              Our Services
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Comprehensive
              <span className="text-blue-400"> Electrical Solutions</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 text-pretty">
              From residential installations to large-scale industrial projects, we deliver innovative electrical
              solutions tailored to your specific needs.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Get Free Quote</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Service Categories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer a comprehensive range of electrical services across multiple domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <category.icon className={`h-8 w-8 ${category.color}`} />
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{service}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our most popular and specialized electrical services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service: any, index: number) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
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
                  <Button asChild variant="ghost" className="p-0 h-auto font-medium group-hover:text-primary">
                    <Link href={`/services/${service.slug ?? slugify(service.title)}`}>
                      Learn More <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A systematic approach to ensure project success from start to finish
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Credentials Section (gradient, no white) */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold mb-6 tracking-tight">
              Our Credentials
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Precisely covering electrical fields as a trusted partner to major industries and public projects across India—planning and delivering turnkey solutions end-to-end.
            </p>
          </div>

          <div className="max-w-5xl mx-auto rounded-2xl p-10 border bg-gradient-to-br from-primary/10 via-background to-accent/10">
            <div className="space-y-6 text-foreground/90 text-lg leading-relaxed">
              <p>
                This enables our customers to turn over a concept to us and walk away from the project with the confidence that it will be completed in a time and cost-efficient manner.
              </p>
              <p>
                We are proficient in the execution of either pre-designed or design &amp; build projects. Our field experience covers all types of electrical installation/security services in projects.
              </p>
              <p>
                This can only be achieved with good communication and understanding, and the correct use of contract management tools: reporting, progress evaluation, and a flexible approach to solving problems.
              </p>
              <p>
                We provide a one-step solution to turnkey electrical projects, including interior setups, safety systems, and energy optimization.
              </p>
              <p>
                We also deal in Advanced Lightning Arrestors, Building Intelligence Systems, and Specialized Earthing Solutions—backed by a proven track record and experienced leadership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              What sets us apart in the electrical contracting industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Service Areas</h2>
              <p className="text-muted-foreground mb-6">
                We proudly serve clients across multiple states and regions, bringing our expertise to projects of all sizes and complexities.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="space-y-2">
                  <h4 className="font-semibold">Primary Regions:</h4>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Maharashtra</li>
                    <li>• Gujarat</li>
                    <li>• Karnataka</li>
                    <li>• Rajasthan</li>
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
            </div>
            <div className="relative">
              <img
                src="/blog3.jpeg?height=400&width=500"
                alt="Service areas map"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get a free consultation and quote for your electrical project today
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
              <Link href="tel:+919876543210">
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