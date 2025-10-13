"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { StickyButtons } from "@/components/sticky-buttons";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { services } from "@/lib/mock-data";
import {
  CheckCircle2,
  Shield,
  Wrench,
  ArrowRight,
  HelpCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { DM_Serif_Display } from "next/font/google";

// Elegant serif for headings
const dmSerif = DM_Serif_Display({ subsets: ["latin"], weight: "400" });

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

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

const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const service: any = services.find((s: any) => (s.slug ?? slugify(s.title)) === slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="container mx-auto px-4 py-24 text-center"
        >
          <motion.h1
            variants={fadeUp}
            className={`text-3xl md:text-4xl font-bold mb-2 ${dmSerif.className}`}
          >
            Service Not Found
          </motion.h1>
          <motion.p variants={fadeUp} className="text-muted-foreground mb-6">
            The service you’re looking for does not exist.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Button asChild>
              <Link href="/services">Back to Services</Link>
            </Button>
          </motion.div>
        </motion.div>
        <Footer />
      </div>
    );
  }

  const projects = service.projects ?? [];
  const highlights = service.highlights ?? [];
  const scope = service.scope ?? service.features ?? [];
  const benefits = service.benefits ?? [];
  const stats = service.stats ?? [];
  const faqs = service.faqs ?? [];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="text-sm text-muted-foreground mb-4"
          >
            <Link href="/services" className="hover:text-primary">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{service.title}</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }}>
              <motion.h1
                variants={fadeUp}
                className={`text-4xl md:text-6xl font-bold tracking-tight mb-4 ${dmSerif.className}`}
              >
                {service.title}
              </motion.h1>
              {service.category && (
                <motion.div variants={fadeUp} className="mb-4">
                  <Badge variant="outline" className="border-primary text-primary">{service.category}</Badge>
                </motion.div>
              )}
              <motion.p variants={fadeUp} className="text-lg md:text-xl text-muted-foreground">
                {service.overview ?? service.description}
              </motion.p>
              {!!highlights.length && (
                <motion.div variants={stagger} className="mt-6 flex flex-wrap gap-3">
                  {highlights.map((h: string, i: number) => (
                    <motion.span
                      key={i}
                      variants={fadeUp}
                      className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm bg-primary/10 text-foreground"
                    >
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      {h}
                    </motion.span>
                  ))}
                </motion.div>
              )}
              <motion.div variants={stagger} className="mt-8 flex gap-3">
                <motion.div variants={fadeUp}>
                  <Button asChild>
                    <Link href="/contact">Start Your Project</Link>
                  </Button>
                </motion.div>
                <motion.div variants={fadeUp}>
                  <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Link href="/projects">View All Projects</Link>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={bounceInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="relative h-[320px] md:h-[380px] rounded-2xl overflow-hidden"
            >
              <Image
                src={service.image || "/blog4.jpeg?height=600&width=900"}
                alt={service.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/10 via-transparent to-primary/10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      {!!service.features?.length && (
        <section className="py-14">
          <div className="container mx-auto px-4">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className={`text-3xl md:text-4xl font-bold mb-6 ${dmSerif.className}`}
            >
              Key Features
            </motion.h2>
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {service.features.map((line: string, i: number) => (
                <motion.div
                  variants={fadeUp}
                  key={i}
                  className="p-5 rounded-xl border bg-gradient-to-br from-primary/10 via-background to-accent/10"
                >
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-primary mt-0.5" />
                    <p className="text-foreground">{line}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Service Scope */}
      {!!scope.length && (
        <section className="py-14 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4">
            <motion.h2
              variants={bounceInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className={`text-3xl md:text-4xl font-bold mb-6 ${dmSerif.className}`}
            >
              What We Deliver
            </motion.h2>
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {scope.map((line: string, i: number) => (
                <motion.div
                  variants={bounceInLeft}
                  key={i}
                  className="p-5 rounded-xl border bg-gradient-to-br from-primary/10 via-background to-accent/10"
                >
                  <div className="flex items-start gap-3">
                    <Wrench className="h-5 w-5 text-primary mt-0.5" />
                    <p className="text-foreground">{line}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Projects Related to This Service */}
      {!!projects.length && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex items-end justify-between mb-8 gap-4"
            >
              <motion.div variants={bounceInRight}>
                <h2 className={`text-3xl md:text-4xl font-bold ${dmSerif.className}`}>Projects in {service.title}</h2>
                <p className="text-muted-foreground">Selected works that showcase our capability and rigor.</p>
              </motion.div>
              <motion.div variants={bounceInRight}>
                <Button asChild variant="ghost" className="hidden md:inline-flex">
                  <Link href="/projects" className="gap-2">
                    Explore More <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {projects.map((p: any) => (
                <motion.div
                  variants={bounceInRight}
                  key={p.id}
                  className="group relative rounded-2xl overflow-hidden border bg-gradient-to-br from-primary/10 via-background to-accent/10"
                >
                  <div className="relative h-48">
                    <Image
                      src={p.image || "/blog2.jpeg?height=400&width=600"}
                      alt={p.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-lg">{p.title}</h3>
                      {p.status && (
                        <Badge className={p.status === "Ongoing" ? "bg-yellow-500/90" : "bg-emerald-600/90"}>
                          {p.status}
                        </Badge>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                      {p.year && <span>Year: {p.year}</span>}
                      {p.location && <span>• {p.location}</span>}
                      {p.capacity && <span>• {p.capacity}</span>}
                    </div>
                    {p.snippet && <p className="text-sm text-muted-foreground mt-3">{p.snippet}</p>}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Benefits / Stats Band */}
      {(!!benefits.length || !!stats.length) && (
        <section className="py-14 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8">
              {!!benefits.length && (
                <motion.div
                  variants={stagger}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <motion.h3
                    variants={fadeUp}
                    className={`text-2xl font-bold mb-4 ${dmSerif.className}`}
                  >
                    Why This Service
                  </motion.h3>
                  <motion.ul variants={stagger} className="space-y-3">
                    {benefits.map((b: string, i: number) => (
                      <motion.li key={i} variants={fadeUp} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                        <span>{b}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              )}
              {!!stats.length && (
                <motion.div
                  variants={stagger}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="grid grid-cols-2 gap-6"
                >
                  {stats.map((s: any, i: number) => (
                    <motion.div
                      variants={bounceInRight}
                      key={i}
                      className="p-6 rounded-xl border text-center bg-gradient-to-br from-primary/10 via-background to-accent/10"
                    >
                      <div className="text-3xl font-extrabold">{s.value}</div>
                      <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      {!!faqs.length && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className={`text-3xl md:text-4xl font-bold mb-6 ${dmSerif.className}`}
            >
              FAQs
            </motion.h2>
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-4"
            >
              {faqs.map((f: any, i: number) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="rounded-xl border p-5 bg-gradient-to-br from-primary/10 via-background to-accent/10"
                >
                  <div className="flex items-start gap-3">
                    <HelpCircle className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <div className="font-semibold">{f.q}</div>
                      <div className="text-muted-foreground mt-1">{f.a}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h3
              variants={fadeUp}
              className={`text-3xl md:text-4xl font-bold mb-4 ${dmSerif.className}`}
            >
              Let’s discuss your {service.title} needs
            </motion.h3>
            <motion.p
              variants={fadeUp}
              className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6"
            >
              We’ll share a tailored approach, realistic timelines, and a clear plan to get your project energized.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Button asChild size="lg">
                <Link href="/contact">Talk to an Expert</Link>
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
