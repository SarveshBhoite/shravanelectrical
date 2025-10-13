import { notFound } from "next/navigation";
import { projects } from "@/lib/mock-data";
import ProjectDetailClient from "./ProjectDetailClient";

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

  return <ProjectDetailClient project={project} moreProjects={moreProjects} />;
}