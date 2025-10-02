"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Award, Users, Zap, ArrowRight, Phone } from "lucide-react"

export function CompanyIntro() {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState({
    projects: 0,
    years: 0,
    clients: 0,
  })

  useEffect(() => {
    setIsVisible(true)

    // Animate counters
    const targets = { projects: 500, years: 25, clients: 100 }
    const duration = 2000
    const steps = 60
    const interval = duration / steps

    let step = 0
    const timer = setInterval(() => {
      step++
      const progress = step / steps
      setCounts({
        projects: Math.floor(targets.projects * progress),
        years: Math.floor(targets.years * progress),
        clients: Math.floor(targets.clients * progress),
      })
      if (step >= steps) clearInterval(timer)
    }, interval)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-10 relative overflow-hidden bg-gradient-to-br from-primary/20 via-background to-accent/20">
      {/* Subtle Light Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:50px_50px] opacity-30" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Company Summary */}
          <div
            className={`space-y-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
            }`}
          >
            <div className="inline-block">
              <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-semibold animate-pulse-glow">
                Leading Electrical Contractor in Nanded
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Powering <span className="bg-gradient-to-r from-primary via-secondary to-yellow-500 bg-clip-text text-transparent animate-gradient">Excellence</span> in Electrical Solutions
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Since 2009, Shravan Electrical Contractor has delivered high-quality H.T. and L.T. electrical works, sheet metal fabrication, and consultancy services in Nanded. With a turnover of ₹25-100 Cr, we serve MSEDCL, PWD, and private clients with precision and reliability.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover-lift hover-glow transition-all duration-300 shadow-md"
              >
                Get Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-4 text-primary border-primary rounded-lg font-semibold hover:bg-primary hover:text-primary hover-lift transition-all duration-300"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </div>

            {/* Animated Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              {[
                { label: "Projects", value: `${counts.projects}+`, icon: Zap },
                { label: "Years", value: `${counts.years}+`, icon: Award },
                { label: "Clients", value: `${counts.clients}+`, icon: Users },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center p-4 bg-card rounded-lg border border-border hover:border-primary/50 hover-lift transition-all duration-300 animate-fade-in-up shadow-sm"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" aria-hidden="true" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Maharashtra Image without Div Box */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            } animate-scale-in`}
            style={{ perspective: '1000px' }}
          >
            <img
              src="/maharahtrawithflow-Photoroom.png?height=650&width=850&q=90"
              alt="Maharashtra map highlighting Shravan Electricals' project locations in Nanded and surrounding areas"
              className="object-contain transition-transform duration-500"
              
            />
          </div>
        </div>
      </div>

      
    </section>
  )
}