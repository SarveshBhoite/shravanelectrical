"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { StickyButtons } from "@/components/sticky-buttons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/mock-data";
import {
  Filter,
  MapPin,
  Calendar,
  Users,
  Zap,
  Building,
  Factory,
  Search,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { DM_Serif_Display } from "next/font/google";

// Elegant serif for headings
const dmSerif = DM_Serif_Display({ subsets: ["latin"], weight: "400" });

// Helper to build URL-friendly slugs from project names
const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    "All",
    "Infrastructure",
    "Commercial",
    "Maintenance",
    "Substation",
    "HVDS",
    "Substation Maintenance",
    "Line Maintenance",
    "Solar",
  ];

  const statuses = ["All", "Completed", "Work in Hand", "In Process Tender"];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    const matchesStatus = selectedStatus === "All" || project.status === selectedStatus;
    const matchesSearch =
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesStatus && matchesSearch;
  });

  const projectStats = [
    { icon: Building, label: "Total Projects", value: "250" },
    { icon: Users, label: "Clients Served", value: "5+" },
    { icon: Zap, label: "MW Supported", value: "123+" },
    { icon: Factory, label: "Regions Covered", value: "Nanded Zone" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section with Video */}
      <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="/video2.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center p-4 z-10 text-white">
          <div className="max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4 text-white border-white">
              Our Portfolio
            </Badge>
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 text-balance ${dmSerif.className}`}>
              Powering Progress
              <span className="text-blue-400"> in Nanded Zone</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 text-pretty">
              Explore our extensive portfolio of 32 electrical projects, including completed, ongoing, and tender-stage initiatives, delivering reliable and sustainable power infrastructure across Nanded, Hingoli, and Parbhani Circles.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button asChild variant="secondary" size="lg" className="border-white bg-white text-black hover:bg-white hover:text-black">
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectStats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${dmSerif.className}`}>
              Our Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse through our comprehensive portfolio of electrical infrastructure projects, including completed, ongoing, and tender-stage initiatives
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mb-8">
            <div className="relative w-full sm:w-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full sm:w-64 pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="transition-all duration-200"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  {category}
                </Button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {statuses.map((status) => (
                <Button
                  key={status}
                  variant={selectedStatus === status ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedStatus(status)}
                  className="transition-all duration-200"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  {status}
                </Button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => {
              const href = `/projects/${slugify(project.name)}`;
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <Link href={href} aria-label={`View details about ${project.name}`}>
                    <div className="relative overflow-hidden rounded-t-lg">
                      <div className="relative w-full aspect-[16/9] overflow-hidden rounded-t-lg">
  <img
    src={project.image || "/project-default.jpg?height=200&width=400"}
    alt={project.name}
    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
  />
</div>

                      <div className="absolute top-4 left-4 flex gap-2">
                        <Badge className="bg-primary/90 text-primary-foreground">{project.category}</Badge>
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
                  </Link>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{project.location}</span>
                    </div>
                    <h3 className={`font-bold text-lg mb-2 group-hover:text-primary transition-colors ${dmSerif.className}`}>
                      <Link href={href}>{project.name}</Link>
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          {project.completedDate === "TBD" ? "Ongoing/TBD" : project.completedDate}
                        </span>
                      </div>
                      <Button asChild variant="ghost" size="sm" className="text-primary hover:text-primary">
                        <Link href={href}>View Details</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No projects found matching your criteria.</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedCategory("All");
                  setSelectedStatus("All");
                  setSearchTerm("");
                }}
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Project Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${dmSerif.className}`}>
              Our Project Approach
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every project follows our proven methodology to ensure quality and timely delivery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Planning", description: "Detailed project analysis and planning", step: "01" },
              { title: "Design", description: "Custom electrical system design", step: "02" },
              { title: "Execution", description: "Professional installation and testing", step: "03" },
              { title: "Handover", description: "Final inspection and documentation", step: "04" },
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto">
                    {phase.step}
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-8"></div>
                  )}
                </div>
                <h3 className={`font-bold text-lg mb-2 ${dmSerif.className}`}>{phase.title}</h3>
                <p className="text-muted-foreground">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className={`text-3xl font-bold mb-4 ${dmSerif.className}`}>
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss your electrical project requirements and create another success story together
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
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <StickyButtons />
    </div>
  );
}
