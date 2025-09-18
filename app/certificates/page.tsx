import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { StickyButtons } from "@/components/sticky-buttons"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Award, CheckCircle, Download, Calendar, Building, Users, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function CertificatesPage() {
  const certifications = [
    {
      title: "ISO 9001:2015",
      subtitle: "Quality Management System",
      issuer: "Bureau Veritas",
      validUntil: "2025-12-31",
      category: "Quality",
      description:
        "International standard for quality management systems, ensuring consistent quality in our services and processes.",
      image: "/blog8.jpeg?height=300&width=400",
    },
    {
      title: "ISO 14001:2015",
      subtitle: "Environmental Management System",
      issuer: "TUV India",
      validUntil: "2025-08-15",
      category: "Environment",
      description: "Environmental management certification demonstrating our commitment to sustainable practices.",
      image: "/blog1.jpeg?height=300&width=400",
    },
    {
      title: "ISO 45001:2018",
      subtitle: "Occupational Health & Safety",
      issuer: "SGS India",
      validUntil: "2025-10-20",
      category: "Safety",
      description: "Occupational health and safety management system certification ensuring workplace safety.",
      image: "/blog4.jpeg?height=300&width=400",
    },
    {
      title: "CPWD Registration",
      subtitle: "Central Public Works Department",
      issuer: "Government of India",
      validUntil: "2026-03-31",
      category: "Government",
      description: "Registration with CPWD for undertaking government electrical works and projects.",
      image: "/blog3.jpeg?height=300&width=400",
    },
    {
      title: "Electrical Contractor License",
      subtitle: "Class A Electrical License",
      issuer: "Maharashtra State Electricity Board",
      validUntil: "2025-06-30",
      category: "License",
      description: "State electrical contractor license for high voltage and industrial electrical works.",
      image: "/blog2.jpeg?height=300&width=400",
    },
    {
      title: "Solar Installation Certification",
      subtitle: "Renewable Energy Certificate",
      issuer: "Ministry of New & Renewable Energy",
      validUntil: "2026-01-15",
      category: "Solar",
      description: "Certification for solar panel installation and renewable energy system implementation.",
      image: "/blog4.jpeg?height=300&width=400",
    },
  ]

  const awards = [
    {
      title: "Best Electrical Contractor 2023",
      issuer: "Indian Electrical & Electronics Manufacturers Association",
      year: "2023",
      description: "Recognized for excellence in electrical contracting and innovative solutions",
    },
    {
      title: "Safety Excellence Award",
      issuer: "National Safety Council of India",
      year: "2022",
      description: "Zero accident record and outstanding safety practices in electrical works",
    },
    {
      title: "Green Energy Champion",
      issuer: "Renewable Energy Association of India",
      year: "2023",
      description: "Outstanding contribution to renewable energy adoption and sustainability",
    },
    {
      title: "Quality Excellence Award",
      issuer: "Confederation of Indian Industry",
      year: "2021",
      description: "Consistent quality delivery and customer satisfaction in electrical services",
    },
  ]

  const memberships = [
    {
      organization: "Indian Electrical & Electronics Manufacturers Association (IEEMA)",
      type: "Corporate Member",
      since: "2005",
    },
    {
      organization: "Confederation of Indian Industry (CII)",
      type: "Member",
      since: "2008",
    },
    {
      organization: "Associated Chambers of Commerce of India (ASSOCHAM)",
      type: "Member",
      since: "2010",
    },
    {
      organization: "Solar Power Developers Association",
      type: "Active Member",
      since: "2012",
    },
  ]

  const categoryColors = {
    Quality: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    Environment: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    Safety: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    Government: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    License: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
    Solar: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4 text-primary border-primary">
              Certifications & Awards
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Certified
              <span className="text-primary"> Excellence</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Our commitment to quality, safety, and environmental responsibility is validated through internationally
              recognized certifications and industry awards.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/contact">Work With Certified Experts</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Stats */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">6+</div>
                <p className="text-muted-foreground">Active Certifications</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">4+</div>
                <p className="text-muted-foreground">Industry Awards</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Building className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">4+</div>
                <p className="text-muted-foreground">Professional Memberships</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <p className="text-muted-foreground">Compliance Record</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Certifications</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Internationally recognized certifications that validate our commitment to quality, safety, and
              environmental responsibility
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={cert.image || "/blog2.jpeg"}
                    alt={cert.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={categoryColors[cert.category as keyof typeof categoryColors]}>
                      {cert.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">{cert.title}</h3>
                  <p className="text-primary font-medium mb-3">{cert.subtitle}</p>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{cert.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Issued by:</span>
                      <span className="font-medium">{cert.issuer}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Valid until:</span>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span className="font-medium">{cert.validUntil}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Awards & Recognition</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Industry recognition for our outstanding performance and contribution to the electrical sector
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Award className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-bold text-lg">{award.title}</h3>
                        <Badge variant="outline">{award.year}</Badge>
                      </div>
                      <p className="text-primary font-medium mb-2">{award.issuer}</p>
                      <p className="text-muted-foreground">{award.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Memberships */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Professional Memberships</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Active participation in leading industry associations and professional bodies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {memberships.map((membership, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold mb-1">{membership.organization}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{membership.type}</span>
                        <span>•</span>
                        <span>Since {membership.since}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Certifications Matter */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Our Certifications Matter</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Quality Assurance</h4>
                    <p className="text-muted-foreground">
                      ISO certifications ensure consistent quality in every project we undertake.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Safety Standards</h4>
                    <p className="text-muted-foreground">
                      Rigorous safety protocols protect our workers and your property.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Environmental Responsibility</h4>
                    <p className="text-muted-foreground">
                      Sustainable practices minimize environmental impact of our operations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Legal Compliance</h4>
                    <p className="text-muted-foreground">
                      All necessary licenses and registrations for legitimate business operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/blog3.jpeg?height=400&width=500"
                alt="Quality certification process"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">25+</div>
                <div className="text-sm">Years Certified</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Work With Certified Professionals</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Choose certified excellence for your electrical projects. Our credentials speak for our commitment to
            quality.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Get Certified Service</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Link href="/projects">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <StickyButtons />
    </div>
  )
}
