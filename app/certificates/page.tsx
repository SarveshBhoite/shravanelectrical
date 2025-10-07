"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { StickyButtons } from "@/components/sticky-buttons"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Award,
  CheckCircle,
  Calendar,
  Building,
  Users,
  X,
} from "lucide-react"
import Link from "next/link"

export default function CertificatesPage() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null)

  const certifications = [
    {
      title: "Solvency Certificate",
      subtitle: "Financial Soundness Verification",
      issuer: "Abhyudaya Co-operative Bank Ltd.",
      validUntil: "Not specified (Issued on 04.08.2022)",
      category: "Financial",
      description:
        "A solvency certificate certifying that Mr. Kanthewad Balaji Ganpat, Proprietor of M/s Shravan Electrical Contractor, is a respectable customer of the bank with a verified net worth of ₹1105.87 Lakhs. The certificate confirms his financial soundness up to ₹10 Crores, as per the Chartered Accountant’s report. It is issued for submission to M.S.E.D.C.L. for tender purposes without any bank guarantee or liability.",
      image: "/solvency_certificate.jpeg?height=300&width=400",
    },
    {
      title: "Net Worth Certificate",
      subtitle: "Financial Statement for Last 5 Years",
      issuer: "Abulkalam & Co., Chartered Accountants",
      validUntil: "Issued on 26.03.2024",
      category: "Financial",
      description:
        "This Net Worth Certificate certifies that M/s Shravan Electrical Contractor, Proprietor Mr. Balaji Ganpatrao Kanthewad, has maintained a verified net worth over the last five financial years. The certificate presents audited net worth values for each year from 2018–19 to 2022–23, based on income tax returns and balance sheets submitted to the Income Tax Authority, Nanded. The highest reported net worth is ₹1,318.83 Lakhs for FY 2022–23.",
      image: "/networth_certificate.jpeg?height=300&width=400",
    },
    {
      title: "Certificate of Incorporation",
      subtitle: "Company Registration under the Companies Act, 2013",
      issuer: "Ministry of Corporate Affairs, Government of India",
      validUntil: "Permanent (Issued on 06.11.2020)",
      category: "Legal",
      description:
        "This official Certificate of Incorporation verifies that SHRAVAN ELECTRICAL CONTRACTOR PRIVATE LIMITED was incorporated on November 6, 2020, under the Companies Act, 2013. The document includes the company’s CIN (U31900MH2020PTC349554), PAN (AABCC5347J), and TAN (NSKS2879A). It certifies the establishment of the company as a legal entity limited by shares, registered at the Central Registration Centre. The certificate is digitally signed by the Assistant Registrar of Companies.",
      image: "/certificate_of_incorporation.jpeg?height=300&width=400",
    },
    {
      title: "Contractor's Registration Certificate",
      subtitle: "Public Works Department, Government of Maharashtra",
      issuer: "Government of Maharashtra",
      validUntil: "2026-03-31",
      category: "Government",
      description:
        "Registration certificate for Shirvan Electrical Contractor (Proprietor: Balaji Ganpatrao PWd) as an electrical contractor, issued under Resolution No. CAT-03/2013, valid for three consecutive years from 27-03-2023 to 26-03-2026, with supervision by Mr. Prafap Dnyanoba Mhetre and Mr. Mohammad Toufiq Ahmed, and approved by the Executive Engineer, PWD (Electrical), Shirpur.",
      image: "/uploaded_image.jpg?height=300&width=400",
    },
    {
      title: "Udyam Registration Certificate",
      subtitle:
        "Ministry of Micro, Small and Medium Enterprises, Government of India",
      issuer: "Government of India",
      validUntil: "N/A",
      category: "Government",
      description:
        "Udyam Registration Certificate for Shirvan Electrical Contractor Private Limited, registered under UDYAM-MH-21-002514, classified as a Micro enterprise under the Services category, with a valid date of commencement of production from 04/10/2020, issued on 24/06/2020, with the official address in Nashik, Maharashtra.",
      image: "/uploaded_image2.jpg?height=300&width=400",
    },
    {
      title: "Certificate of Enrollment",
      subtitle:
        "Maharashtra State Tax on Professions, Trades, Callings and Employments Act, 1975",
      issuer: "Government of Maharashtra",
      validUntil: "N/A",
      category: "Government",
      description:
        "Certificate of Enrollment for Kumari Siddhi Balaji Kanthewad under the Maharashtra State Tax on Professions, Trades, Callings and Employments Act, 1975, with Enrollment Certificate Number 99474461512P, effective from 01-Apr-22, issued on 29-Nov-22, with the principal place of work/business at Shradha Niwas, Hanuman Gadh, Shivajinagar (Nanded), Nanded, Maharashtra, PIN 431602.",
      image: "/uploaded_image3.jpg?height=300&width=400",
    },
  ]

  const awards = [
    {
      title: "Best Electrical Contractor 2023",
      issuer: "Indian Electrical & Electronics Manufacturers Association",
      year: "2023",
      description:
        "Recognized for excellence in electrical contracting and innovative solutions",
    },
    {
      title: "Safety Excellence Award",
      issuer: "National Safety Council of India",
      year: "2022",
      description:
        "Zero accident record and outstanding safety practices in electrical works",
    },
    {
      title: "Green Energy Champion",
      issuer: "Renewable Energy Association of India",
      year: "2023",
      description:
        "Outstanding contribution to renewable energy adoption and sustainability",
    },
    {
      title: "Quality Excellence Award",
      issuer: "Confederation of Indian Industry",
      year: "2021",
      description:
        "Consistent quality delivery and customer satisfaction in electrical services",
    },
  ]

  const memberships = [
    {
      organization:
        "Indian Electrical & Electronics Manufacturers Association (IEEMA)",
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
    Environment:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    Safety: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    Government:
      "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    License:
      "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
    Solar:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    Financial:
      "bg-blue-200 text-blue-900 dark:bg-blue-800 dark:text-blue-200",
    Legal:
      "bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-gray-200",
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/background-certification.jpg"
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge
              variant="outline"
              className="mb-4 text-primary border-primary animate-fade-in-up"
            >
              Certifications & Awards
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance animate-slide-in-left">
              Certified
              <span className="text-primary"> Excellence</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty animate-fade-in-up delay-200">
              Our commitment to quality, safety, and environmental
              responsibility is validated through internationally recognized
              certifications and industry awards.
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-slide-in-right delay-300">
              <Button asChild size="lg" className="hover:scale-105 transition-transform">
                <Link href="/contact">Work With Certified Experts</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="hover:scale-105 transition-transform">
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
                <p className="text-muted-foreground">
                  Professional Memberships
                </p>
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
              Internationally recognized certifications that validate our
              commitment to quality, safety, and environmental responsibility
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border border-gray-200 rounded-lg shadow-md"
              >
                <div className="relative overflow-hidden rounded-t-lg cursor-pointer" onClick={() => setSelectedCert(cert.image)}>
                  <img
                    src={cert.image || "/blog2.jpeg"}
                    alt={cert.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <Badge
                      className={categoryColors[cert.category as keyof typeof categoryColors]}
                    >
                      {cert.category}
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-primary font-medium mb-3">{cert.subtitle}</p>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {cert.description}
                  </p>
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pop-Up Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative bg-white rounded-lg p-4 max-w-[90vw] max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 p-2 bg-gray-200 rounded-full hover:bg-gray-300"
              onClick={() => setSelectedCert(null)}
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
            <img
              src={selectedCert}
              alt="Certificate Preview"
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Awards */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Awards & Recognition</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Industry recognition for our outstanding performance and
              contribution to the electrical sector
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
              Active participation in leading industry associations and
              professional bodies
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
              <h2 className="text-3xl font-bold mb-6">
                Why Our Certifications Matter
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Quality Assurance</h4>
                    <p className="text-muted-foreground">
                      ISO certifications ensure consistent quality in every
                      project we undertake.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Safety Standards</h4>
                    <p className="text-muted-foreground">
                      Rigorous safety protocols protect our workers and your
                      property.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">
                      Environmental Responsibility
                    </h4>
                    <p className="text-muted-foreground">
                      Sustainable practices minimize environmental impact of our
                      operations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Legal Compliance</h4>
                    <p className="text-muted-foreground">
                      All necessary licenses and registrations for legitimate
                      business operations.
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
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm">Years Certified</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Work With Certified Professionals
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Choose certified excellence for your electrical projects. Our
            credentials speak for our commitment to quality.
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