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
import { motion, AnimatePresence } from "framer-motion";

export default function AboutPage() {
  const [activeValueId, setActiveValueId] = useState<number | null>(null);

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

  const milestones = [
    {
      year: "1999",
      event: "Company Founded",
      description: "Started as a small electrical contracting business",
    },
    {
      year: "2005",
      event: "First Major Project",
      description: "Completed 500KV substation installation",
    },
    {
      year: "2010",
      event: "Solar Division Launch",
      description: "Expanded into renewable energy solutions",
    },
    {
      year: "2015",
      event: "Manufacturing Unit",
      description: "Established transformer manufacturing facility",
    },
    {
      year: "2020",
      event: "Digital Transformation",
      description: "Implemented IoT and smart grid solutions",
    },
    {
      year: "2024",
      event: "Sustainability Leader",
      description: "Achieved carbon-neutral operations",
    },
  ];

  const coreValues = [
    {
      id: 1,
      icon: <Shield className="h-12 w-12 text-primary mx-auto mb-4" />,
      title: "Infrastructure",
      short: "Well-furnished office & central stores.",
      details: `Situated in a well-furnished office catering to all needs of office management, along with the central stores supplying to all the sites, add to the overall performance.
We sincerely hope that you will find our services useful and we shall be happy to associate ourselves in your projects.`,
    },
    {
      id: 2,
      icon: <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />,
      title: "Customer Satisfaction",
      short: "Open & honest client relationships.",
      details: `At ‘’Shravan Electrical Contractor’’ constantly working to improve our quality service to our customers to maintain and achieve high standard of work.
We operate open & honest relationships with all our clients, aiming for repeat business by fulfilling customer requirements.`,
    },
    {
      id: 3,
      icon: <Clock className="h-12 w-12 text-primary mx-auto mb-4" />,
      title: "Quality Assurance",
      short: "Turnkey electrical projects.",
      details: `SHRAVAN specializes in internal & external electrification projects.
We ensure continual improvement of a Quality Management System to meet client needs effectively and efficiently.`,
    },
    {
      id: 4,
      icon: <Zap className="h-12 w-12 text-primary mx-auto mb-4" />,
      title: "Health & Safety",
      short: "Safe & healthy environment.",
      details: `SHRAVAN provides a safe and healthy environment according to the Health and Safety Work Act.
We make arrangements to protect employee health and welfare, prevent accidents, and train all employees on safety responsibilities.`,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge
              variant="outline"
              className="mb-4 text-primary border-primary"
            >
              About {companyInfo.name}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Powering India's{" "}
              <span className="text-primary">Electrical Future</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              For over two decades, we've been at the forefront of electrical
              infrastructure development, delivering innovative solutions that
              power communities and industries across the nation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/contact">Get In Touch</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/projects">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  In the year 2009, we were established as a proprietary firm
                  and successfully elevated since then. We have undergone
                  significant growth in electrical works and increased our Turn
                  Over up to Rs. 101.35 crore in FY 2024-25. We are PWD
                  registered CLASS ‘A’ electrical and Class IV Civil contractor.
                  Registered with M.S.E.D.C.L, M.S.E.T.C.L, PWD. Senior
                  management team has ~15 years experience across development,
                  engineering, construction, finance, operations, asset
                  management, and energy trading.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/blog4.jpeg?height=500&width=600"
                alt="Company facilities"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">25+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-2xl font-bold">OBJECTIVES</h3>
                </div>
                <p className="text-muted-foreground">
                  Our objective is to achieve customer satisfaction and
                  continual improvement of customer services. Establishing long
                  term mutually rewarding relationship and Provide excellent
                  quality services to meets the requirement four customers.{" "}
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Eye className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-2xl font-bold">AIM</h3>
                </div>
                <p className="text-muted-foreground">
                  Our aim is to provide high quality of Services to all our
                  clients and make continual improvement to our services and
                  people. Maintain customer satisfaction is prime factor in our
                  Success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values with Hover Animation */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Fundamental principles that guide every decision and project
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value) => (
              <motion.div
                key={value.id}
                className="cursor-pointer overflow-hidden rounded-lg border bg-white"
                onMouseEnter={() => setActiveValueId(value.id)}
                onMouseLeave={() => setActiveValueId(null)}
                initial={{
                  height: 180,
                  scale: 1,
                  boxShadow: "0px 0px 0px rgba(0,0,0,0)",
                }}
                animate={{
                  height: activeValueId === value.id ? 400 : 180,
                  scale: activeValueId === value.id ? 1.05 : 1,
                  boxShadow:
                    activeValueId === value.id
                      ? "0px 15px 30px rgba(0,0,0,0.15)"
                      : "0px 0px 0px rgba(0,0,0,0)",
                }}
                transition={{ duration: 0.4 }}
              >
                <CardContent className="p-6 text-center">
                  {value.icon}
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <AnimatePresence>
                    {activeValueId === value.id ? (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-sm text-muted-foreground whitespace-pre-line"
                      >
                        {value.details}
                      </motion.p>
                    ) : (
                      <p className="text-sm text-muted-foreground">
                        {value.short}
                      </p>
                    )}
                  </AnimatePresence>
                </CardContent>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline / Milestones */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Key milestones that have shaped our growth and success over the
              years
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                    {milestone.year.slice(-2)}
                  </div>
                </div>
                <Card className="flex-1">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="font-semibold text-primary">
                        {milestone.year}
                      </span>
                    </div>
                    <h3 className="font-bold mb-2">{milestone.event}</h3>
                    <p className="text-muted-foreground">
                      {milestone.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Leadership Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet the experienced professionals who drive our vision and ensure
              project excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <img
                    src={member.image || "/blog4.jpeg"}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">
                    {member.position}
                  </p>
                  <Badge variant="outline" className="mb-2">
                    {member.experience}
                  </Badge>
                  <p className="text-sm text-muted-foreground">
                    {member.specialization}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Power Your Next Project?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss how our expertise can bring your electrical
            infrastructure vision to life
          </p>
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
