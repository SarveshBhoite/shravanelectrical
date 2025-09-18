"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Sun, Settings, Cable, Building } from "lucide-react"
import { mockServices } from "@/lib/mock-data"
import Image from "next/image"

const serviceIcons = [
  Zap, // Electrical Contracting
  Sun, // Solar Projects
  Settings, // Transformer Manufacturing
  Cable, // Cable Fabrication
  Building, // Infrastructure
]

export function ServicesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-yellow-50 relative overflow-hidden">
      {/* Background animations */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-float"></div>
      <div
        className="absolute bottom-20 right-10 w-24 h-24 bg-yellow-200 rounded-full opacity-20 animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-blue-900">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
            Comprehensive electrical solutions tailored to meet your specific needs
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-20">
          {mockServices.map((service, index) => {
            const IconComponent = serviceIcons[index] || Zap
            return (
              <div
                key={service.id}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image Section */}
                <div
                  className={`w-full lg:w-1/2 ${
                    index % 2 === 0 ? "animate-slide-in-left" : "animate-slide-in-right"
                  }`}
                >
                  <div className="relative w-full h-64 lg:h-80 rounded-2xl overflow-hidden shadow-2xl hover-lift group">
                    <Image
                      src={service.image || "/blog2.jpeg"}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                    <div className="absolute top-6 right-6 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                </div>

                {/* Info Section */}
                <div
                  className={`w-full lg:w-1/2 ${
                    index % 2 === 0 ? "animate-slide-in-right" : "animate-slide-in-left"
                  }`}
                >
                  <Card className="border-none shadow-2xl bg-white/80 backdrop-blur-sm hover-lift">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                          <IconComponent className="h-6 w-6 text-blue-600" />
                        </div>
                        <h3 className="text-3xl font-bold text-blue-900">{service.title}</h3>
                      </div>

                      <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      <ul className="space-y-3 mb-8">
                        {service.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center animate-fade-in-up"
                            style={{ animationDelay: `${featureIndex * 0.1}s` }}
                          >
                            <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 animate-pulse"></div>
                            <span className="text-gray-700 font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Button className="group bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 hover-glow">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
