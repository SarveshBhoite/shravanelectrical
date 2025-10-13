"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { StickyButtons } from "@/components/sticky-buttons";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/mock-data";
import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, ArrowLeft, ArrowRight, FileText, Clock, IndianRupee, Tag } from "lucide-react";
import { notFound } from "next/navigation";
import { motion, Variants } from "framer-motion";
import { DM_Serif_Display } from "next/font/google";

const dmSerif = DM_Serif_Display({ subsets: ["latin"], weight: "400" });

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export function generateStaticParams() {
  return projects.map((p) => ({ slug: slugify(p.name) }));
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const project = projects.find((p) => slugify(p.name) === slug);

  if (!project) return notFound();

  const moreProjects = projects
    .filter((p) => slugify(p.name) !== slug)
    .sort((a, b) => (a.category === project.category ? -1 : b.category === project.category ? 1 : 0))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="relative h-[50vh] w-full overflow-hidden">
        <Image
          src={project.image || "/project-default.jpg?height=600&width=1200"}
          alt={project.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      </section>
      <section className="py-12 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
              <ArrowLeft className="h-4 w-4" />
              Back to all projects
            </Link>
          </div>
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="inline-flex items-center gap-2 animate-fade-in-up">
                <Calendar className="h-4 w-4" />
                <span>Status: {project.status} {project.completedDate !== "TBD" ? `(${project.completedDate})` : ""}</span>
              </div>
              <div className="inline-flex items-center gap-2 animate-fade-in-up">
                <MapPin className="h-4 w-4" />
                <span>{project.location}</span>
              </div>
              <div className="flex gap-2 ml-auto animate-fade-in-up">
                <Badge variant="outline">{project.category}</Badge>
                <Badge
                  className={
                    project.status === "Completed"
                      ? "bg-green-600/90 text-white"
                      : project.status === "Work in Hand"
                      ? "bg-blue-600/90 text-white"
                      : "bg-orange-600/90 text-white"
                  }
                >
                  {project.status}
                </Badge>
              </div>
            </div>
            <h1 className={`text-3xl md:text-5xl font-bold tracking-tight mb-4 animate-slide-in-left ${dmSerif.className}`}>
              {project.name}
            </h1>
            <p className="text-lg text-foreground/90 leading-relaxed mb-6 animate-fade-in-up delay-200">
              {project.description}
            </p>
            <div className="border-t border-border pt-6">
              <h2 className={`text-2xl font-bold mb-4 ${dmSerif.className}`}>Project Details</h2>
              <div className="grid gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  <span><strong>Work Order No:</strong> {project.workOrderNo}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span><strong>Year of Execution:</strong> {project.yearOfExecution}</span>
                </div>
                <div className="flex items-center gap-2">
                  <IndianRupee className="h-4 w-4" />
                  <span><strong>Value (Rs. Lakhs):</strong> {project.valueInLakhs.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Tag className="h-4 w-4" />
                  <span><strong>Category:</strong> {project.category}</span>
                </div>
              </div>
            </div>
            <div className="mt-8 flex gap-3 animate-slide-in-right delay-300">
              <Button asChild className="hover:scale-105 transition-transform">
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-transform">
                <Link href="/projects">Explore Other Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-14">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className={`text-2xl md:text-3xl font-bold ${dmSerif.className}`}>More Projects</h2>
              <p className="text-muted-foreground">Explore other projects in our portfolio.</p>
            </div>
            <Button asChild variant="ghost" className="hidden md:inline-flex">
              <Link href="/projects" className="gap-2">
                View All <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {moreProjects.map((p) => (
              <motion.div key={p.name} variants={fadeUp}>
                <Link href={`/projects/${slugify(p.name)}`} className="group">
                  <div className="relative h-48 rounded-xl overflow-hidden border bg-gradient-to-br from-primary/10 via-background to-accent/10">
                    <Image
                      src={p.image || "/project-default.jpg?height=400&width=600"}
                      alt={p.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2">
                      <Badge
                        className={
                          p.status === "Completed"
                            ? "bg-green-600/90 text-white"
                            : p.status === "Work in Hand"
                            ? "bg-blue-600/90 text-white"
                            : "bg-orange-600/90 text-white"
                        }
                      >
                        {p.status}
                      </Badge>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className={`font-semibold group-hover:text-primary transition-colors ${dmSerif.className}`}>
                        {p.name}
                      </h3>
                      <Badge variant="outline">{p.category}</Badge>
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      {p.completedDate === "TBD" ? "Ongoing/TBD" : p.completedDate} • {p.location}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <Footer />
      <StickyButtons />
    </div>
  );
}