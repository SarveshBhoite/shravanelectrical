"use client"

import { useState } from "react"
import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowUp, Building, Shield } from "lucide-react"
import { mockServices } from "@/lib/mock-data"

const companyInfo = {
  name: "Shravan Electrical Contractor PVT LTD",
  description: "Leading electrical contractor delivering reliable and sustainable solutions since 2009",
  address: "Janki Nagar, Hanuman Gadh, Nanded, Maharashtra 431604",
  phone: "+918888888765",
  email: "info@shravanelectrical.com",
  telefax: "02462-220025",
  directors: [
    "Shri. Balaji G. Kanthewad",
    "Mrs. Sharmila B. Kanthewad",
  ],
  licenseNo: "23964",
  pwdClass: "Class A",
  providentFund: "NGAUR2232263000",
  esic: "25000142880000999",
  pan: "ABECS8374D",
  registrationCert: "27711810984P",
  gstin: "27ABECS8374D1Z3",
}

export function Footer() {
  const [email, setEmail] = useState("")

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Certificates", href: "/certificates" },
    { name: "Contact", href: "/contact" },
  ]

  const socialLinks = [
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "Instagram", href: "#", icon: Instagram },
  ]

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  const onSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    // TODO: wire to your newsletter API
    console.log("Subscribe:", email)
    setEmail("")
  }

  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-gradient-to-b from-gray-100 via-blue-50 to-white border-t border-border overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(6,182,212,0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* One-line layout on desktop: 4 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6 animate-fadeInUp">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                {companyInfo.name.split(" ")[0]}
              </h3>
              <p className="text-muted-foreground text-sm">Engineering Excellence Since 2009</p>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {companyInfo.description}
            </p>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Building className="w-5 h-5 text-primary" />
                <span>Directors: {companyInfo.directors.join(", ")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span>License No.: {companyInfo.licenseNo}</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span>PWD Class: {companyInfo.pwdClass}</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span>PAN: {companyInfo.pan}</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span>GSTIN: {companyInfo.gstin}</span>
              </div>
            </div>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary-foreground hover:bg-primary/20 hover:border-primary transition-all duration-300 hover:scale-110"
                    style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both` }}
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
            <h4 className="text-foreground font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
            <h4 className="text-foreground font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {mockServices.slice(0, 8).map((service) => (
                <li key={service.id}>
                  <Link
                    href="/services"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all duration-300" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="animate-fadeInUp" style={{ animationDelay: "0.3s" }}>
            <h4 className="text-foreground font-bold text-lg mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300 group">
                <MapPin className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm">{companyInfo.address}</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300 group">
                <Phone className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a href={`tel:${companyInfo.phone}`} className="text-sm">{companyInfo.phone}</a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300 group">
                <Phone className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm">Telefax: {companyInfo.telefax}</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300 group">
                <Mail className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a href={`mailto:${companyInfo.email}`} className="text-sm">{companyInfo.email}</a>
              </div>

              {/* Newsletter */}
              <form onSubmit={onSubscribe} className="flex items-center gap-3 pt-2">
                <label htmlFor="footer-email" className="sr-only">Email</label>
                <input
                  id="footer-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="px-4 py-2 bg-card border border-border rounded-lg text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors w-full"
                  required
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="px-4 py-2 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
                >
                  <Mail className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {year} {companyInfo.name}. All rights reserved. | Designed with excellence
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 left-8 w-12 h-12 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-full flex items-center justify-center shadow-lg shadow-primary/50 hover:scale-110 transition-all duration-300 z-50 animate-bounce"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>

      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp { animation: fadeInUp 0.8s ease-out both; }
      `}</style>
    </footer>
  )
}