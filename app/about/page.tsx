import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { StickyButtons } from "@/components/sticky-buttons"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { companyInfo } from "@/lib/mock-data"
import { Target, Eye, Zap, Shield, Clock, CheckCircle, Calendar } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
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
  ]

  const milestones = [
    { year: "1999", event: "Company Founded", description: "Started as a small electrical contracting business" },
    { year: "2005", event: "First Major Project", description: "Completed 500KV substation installation" },
    { year: "2010", event: "Solar Division Launch", description: "Expanded into renewable energy solutions" },
    { year: "2015", event: "Manufacturing Unit", description: "Established transformer manufacturing facility" },
    { year: "2020", event: "Digital Transformation", description: "Implemented IoT and smart grid solutions" },
    { year: "2024", event: "Sustainability Leader", description: "Achieved carbon-neutral operations" },
  ]

  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Uncompromising commitment to workplace and operational safety standards",
    },
    {
      icon: CheckCircle,
      title: "Quality Excellence",
      description: "Delivering superior quality in every project with rigorous testing protocols",
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Meeting project deadlines with efficient planning and execution",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Embracing cutting-edge technology and sustainable energy solutions",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4 text-primary border-primary">
              About {companyInfo.name}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Powering India's
              <span className="text-primary"> Electrical Future</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              For over two decades, we've been at the forefront of electrical infrastructure development, delivering
              innovative solutions that power communities and industries across the nation.
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
                  Founded in 1999 by visionary engineer Rajesh Shravan, {companyInfo.name} began as a small electrical
                  contracting business with a big dream - to transform India's electrical infrastructure landscape.
                </p>
                <p>
                  What started in a modest workshop has grown into one of India's most trusted names in electrical
                  contracting, solar energy solutions, and power infrastructure development. Our journey has been marked
                  by continuous innovation, unwavering quality, and a commitment to sustainable energy solutions.
                </p>
                <p>
                  Today, we proudly serve clients across multiple sectors, from residential complexes to large-scale
                  industrial installations, always maintaining our core values of safety, quality, and customer
                  satisfaction.
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
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                </div>
                <p className="text-muted-foreground">
                  To provide innovative, reliable, and sustainable electrical solutions that power progress while
                  maintaining the highest standards of safety and environmental responsibility. We strive to be the
                  preferred partner for all electrical infrastructure needs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Eye className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-2xl font-bold">Our Vision</h3>
                </div>
                <p className="text-muted-foreground">
                  To be India's leading electrical contracting company, recognized for excellence in renewable energy
                  solutions, innovative technology adoption, and contribution to a sustainable energy future for
                  generations to come.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These fundamental principles guide every decision we make and every project we undertake
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Key milestones that have shaped our growth and success over the years
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
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
                        <span className="font-semibold text-primary">{milestone.year}</span>
                      </div>
                      <h3 className="font-bold mb-2">{milestone.event}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Leadership Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet the experienced professionals who drive our vision and ensure project excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <img
                    src={member.image || "/blog4.jpeg"}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.position}</p>
                  <Badge variant="outline" className="mb-2">
                    {member.experience}
                  </Badge>
                  <p className="text-sm text-muted-foreground">{member.specialization}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Power Your Next Project?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss how our expertise can bring your electrical infrastructure vision to life
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
  )
}
