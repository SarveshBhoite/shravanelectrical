// app/services/[slug]/page.tsx (MANDATORY SERVER COMPONENT)

import { notFound } from "next/navigation";
import { services, slugify, Service } from "@/lib/mock-data"; // Ensure this path is correct
import ServiceContent from "./ServiceContent"; // Import the client component UI

// --- 1. generateStaticParams (CRITICAL for output: "export") ---
// This function tells Next.js which pages to pre-render as static HTML files.
export async function generateStaticParams() {
  return services.map((service) => ({
    // The key MUST match the folder name: [slug]
    slug: service.slug ?? slugify(service.title),
  }));
}

// --- 2. Main Page Component (Runs at build time) ---
export default function ServicePage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // Fetch the data from the static mockData for the current slug
  const serviceData: Service | undefined = services.find(
    (s) => (s.slug ?? slugify(s.title)) === slug
  );

  if (!serviceData) {
    // Return the built-in Next.js 404 page if not found
    notFound(); 
  }

  // Pass the data to the Client Component for rendering
  // The client component is defined in ServiceContent.tsx
  return <ServiceContent service={serviceData} />;
}