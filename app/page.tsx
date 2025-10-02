import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { CompanyIntro} from "@/components/company-intro"
import { ServicesSection } from "@/components/services-section"
import { StatsSection } from "@/components/stats-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { StickyButtons } from "@/components/sticky-buttons"
import { ClientsSlider } from "@/components/clients-slider"


export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <CompanyIntro />
      <ServicesSection />
      <StatsSection />
      <ProjectsSection />
      <ClientsSlider />
      <ContactSection />
      <Footer />
      <StickyButtons />
    </main>
  )
}
