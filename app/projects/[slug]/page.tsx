import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { StickyButtons } from "@/components/sticky-buttons";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/mock-data";
import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, ArrowLeft, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";

// Slug helper (matches how we'll link from the list page)
const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

// Optional: generate static params for faster builds (remove if using dynamic)
export function generateStaticParams() {
  return projects.map((p) => ({ slug: slugify(p.name) }));
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const project = projects.find((p) => slugify(p.name) === slug);

  if (!project) return notFound();

  // Prepare “more projects” suggestions (exclude current)
  const moreProjects = projects
    .filter((p) => slugify(p.name) !== slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero (50vh image) */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        <Image
          src={project.image || "/blog5.jpeg?height=600&width=1200"}
          alt={project.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      </section>

      {/* Project Info */}
      <section className="py-12 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
              <ArrowLeft className="h-4 w-4" />
              Back to all projects
            </Link>
          </div>

          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              {project.name}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Completed: {project.completionDate}</span>
              </div>
              {project.location ? (
                <div className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{project.location}</span>
                </div>
              ) : null}
              {project.category ? (
                <Badge variant="outline" className="ml-auto">{project.category}</Badge>
              ) : null}
            </div>

            <p className="text-lg text-foreground/90 leading-relaxed">
              {project.description}
            </p>

            <div className="mt-8 flex gap-3">
              <Button asChild>
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link href="/projects">Explore Other Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* More Projects */}
      <section className="py-14">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">More Projects</h2>
              <p className="text-muted-foreground">You might also be interested in these.</p>
            </div>
            <Button asChild variant="ghost" className="hidden md:inline-flex">
              <Link href="/projects" className="gap-2">
                View All <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {moreProjects.map((p) => (
              <Link key={p.name} href={`/projects/${slugify(p.name)}`} className="group">
                <div className="relative h-48 rounded-xl overflow-hidden border bg-gradient-to-br from-primary/10 via-background to-accent/10">
                  <Image
                    src={p.image || "/blog5.jpeg?height=400&width=600"}
                    alt={p.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="mt-3">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-semibold group-hover:text-primary transition-colors">{p.name}</h3>
                    <Badge variant="outline">{p.category}</Badge>
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {p.completionDate} • {p.location}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <StickyButtons />
    </div>
  );
}