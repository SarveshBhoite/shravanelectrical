"use client"

import type React from "react"
import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { StickyButtons } from "@/components/sticky-buttons"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, CheckCircle } from "lucide-react"
import Link from "next/link"

const companyInfo = {
  phone: "+918888888765",
  email: "info@shravanelectrical.com",
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
    projectType: "",
    budget: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
        projectType: "",
        budget: "",
      })
    }, 3000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our experts",
      value: companyInfo.phone,
      action: `tel:${companyInfo.phone}`,
      available: "Mon-Sat, 9 AM - 6 PM",
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us your project details",
      value: companyInfo.email,
      action: `mailto:${companyInfo.email}`,
      available: "24/7 Response",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      description: "Quick chat for urgent queries",
      value: "+919923799555",
      action: "https://wa.me/919923799555",
      available: "Mon-Sat, 9 AM - 9 PM",
    },
  ]

  const offices = [
    {
      title: "Head Office",
      address: "Janki Nagar, Hanuman Gadh, Nanded, Maharashtra 431604",
      phone: "+918888888765",
      email: "nanded@shravanelectrical.com",
      hours: "Mon-Sat: 9:00 AM - 6:00 PM",
      telefax: "02462-220025",
    },
    {
      title: "Pune Branch",
      address: "Shikrapur, c/o Om Sai Enterprises, near old Bridge, Tq. Shirur, Dist. Pune, Maharashtra",
      phone: "+919923799555",
      email: "pune@shravanelectrical.com",
      hours: "Mon-Sat: 9:00 AM - 6:00 PM",
    },
    {
      title: "Mumbai Branch",
      address: "Pratiksha Nagar, Sayan Koliwad Building No. L11 B, Plot No. 103, Mumbai, Maharashtra",
      phone: "+919923799555",
      email: "mumbai@shravanelectrical.com",
      hours: "Mon-Sat: 9:00 AM - 6:00 PM",
    },
  ]

  const faqs = [
    {
      question: "What types of electrical projects do you handle?",
      answer:
        "We handle residential, commercial, and industrial electrical projects including installations, maintenance, solar systems, and infrastructure development.",
    },
    {
      question: "Do you provide free estimates?",
      answer:
        "Yes, we provide free estimates for all projects. Our team will assess your requirements and provide a detailed quote within 24-48 hours.",
    },
    {
      question: "What is your typical project timeline?",
      answer:
        "Project timelines vary based on scope and complexity. Small residential projects may take 1-3 days, while large industrial projects can take several weeks to months.",
    },
    {
      question: "Do you offer emergency electrical services?",
      answer:
        "Yes, we provide 24/7 emergency electrical services for critical issues. Contact our emergency hotline for immediate assistance.",
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
              Get In Touch
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Let's Power Your
              <span className="text-primary"> Next Project</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Ready to start your electrical project? Contact our expert team for a free consultation and personalized
              solution tailored to your needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="#contact-form">Get Free Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={`tel:${companyInfo.phone}`}>Call Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Multiple Ways to Reach Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the most convenient way to get in touch with our team
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <method.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">{method.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{method.description}</p>
                  <p className="font-medium text-primary mb-2">{method.value}</p>
                  <p className="text-xs text-muted-foreground mb-4">{method.available}</p>
                  <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                    <Link href={method.action}>Contact</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </div>

            <Card className="shadow-lg">
              <CardContent className="p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Message Sent Successfully!</h3>
                    <p className="text-muted-foreground">
                      Thank you for contacting us. We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Full Name *</label>
                        <Input
                          required
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email Address *</label>
                        <Input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Phone Number *</label>
                        <Input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Company/Organization</label>
                        <Input
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                          placeholder="Enter company name (optional)"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Service Required *</label>
                        <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="electrical-installation">Electrical Installation</SelectItem>
                            <SelectItem value="solar-systems">Solar Systems</SelectItem>
                            <SelectItem value="industrial-automation">Industrial Automation</SelectItem>
                            <SelectItem value="maintenance">Maintenance & Repair</SelectItem>
                            <SelectItem value="consultation">Consultation</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Project Type</label>
                        <Select
                          value={formData.projectType}
                          onValueChange={(value) => handleInputChange("projectType", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="residential">Residential</SelectItem>
                            <SelectItem value="commercial">Commercial</SelectItem>
                            <SelectItem value="industrial">Industrial</SelectItem>
                            <SelectItem value="infrastructure">Infrastructure</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Project Budget (Optional)</label>
                      <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-1l">Under ₹1 Lakh</SelectItem>
                          <SelectItem value="1l-5l">₹1 - 5 Lakhs</SelectItem>
                          <SelectItem value="5l-10l">₹5 - 10 Lakhs</SelectItem>
                          <SelectItem value="10l-25l">₹10 - 25 Lakhs</SelectItem>
                          <SelectItem value="25l-50l">₹25 - 50 Lakhs</SelectItem>
                          <SelectItem value="above-50l">Above ₹50 Lakhs</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Project Details *</label>
                      <Textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Please describe your project requirements, timeline, and any specific needs..."
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>Sending Message...</>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Office Locations</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Visit us at any of our offices across India for in-person consultations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    {office.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">{office.address}</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary" />
                      <Link href={`tel:${office.phone}`} className="text-primary hover:underline">
                        {office.phone}
                      </Link>
                    </div>
                    {office.telefax && (
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-primary" />
                        <span className="text-sm text-muted-foreground">Telefax: {office.telefax}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-primary" />
                      <Link href={`mailto:${office.email}`} className="text-primary hover:underline">
                        {office.email}
                      </Link>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">{office.hours}</span>
                    </div>
                  </div>
                  <Button asChild variant="outline" size="sm" className="w-full mt-4 bg-transparent">
                    <Link href={`https://maps.google.com/?q=${encodeURIComponent(office.address)}`} target="_blank">
                      Get Directions
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-red-50 dark:bg-red-950/20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <Badge variant="destructive" className="mb-4">
              Emergency Services
            </Badge>
            <h2 className="text-3xl font-bold mb-4">24/7 Emergency Support</h2>
            <p className="text-muted-foreground mb-8">
              Electrical emergencies can't wait. Our emergency response team is available 24/7 for critical electrical
              issues and power outages.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="destructive">
                <Link href="tel:+919876543210" className="text-white">
                  <Phone className="h-4 w-4 mr-2 text-white" />
                  Emergency Hotline
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="https://wa.me/919876543210?text=Emergency%20electrical%20service%20needed">
                  Emergency WhatsApp
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <StickyButtons />
    </div>
  )
}