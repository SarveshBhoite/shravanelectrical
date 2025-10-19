"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Zap, Sun, Settings, Cable, Building, ArrowRight, Users } from "lucide-react"
import { mockServices } from "@/lib/mock-data"

const serviceIcons = [
  Zap, // Electrical Contracting
  Sun, // Solar Projects
  Settings, // Transformer Manufacturing
  Cable, // Cable Fabrication
  Building, // Infrastructure
]

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextService = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setActiveIndex((prev) => (prev + 1) % mockServices.length)
      setTimeout(() => setIsAnimating(false), 800)
    }
  }

  const prevService = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setActiveIndex((prev) => (prev - 1 + mockServices.length) % mockServices.length)
      setTimeout(() => setIsAnimating(false), 800)
    }
  }

  useEffect(() => {
    const interval = setInterval(nextService, 5000)
    return () => clearInterval(interval)
  }, [])

  const activeService = mockServices[activeIndex]
  const ActiveIcon = serviceIcons[activeIndex % serviceIcons.length] || Zap

  // Calculate visible dots for mobile view (3 dots)
  const getVisibleDots = () => {
    const totalServices = mockServices.length // 10
    const maxDots = 3
    let startIndex = Math.max(0, activeIndex - Math.floor(maxDots / 2))
    if (startIndex + maxDots > totalServices) {
      startIndex = totalServices - maxDots
    }
    return Array.from({ length: maxDots }, (_, i) => startIndex + i)
  }

  return (
    <section id="services" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-blue-50 to-white">
      {/* Subtle Light Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:50px_50px] opacity-30" />

      {/* Dynamic Background Images with Black-to-Grey Shadow */}
      {mockServices.map((service, index) => (
        <div
          key={service.id}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === activeIndex ? "opacity-100 scale-100" : "opacity-0 scale-110"
          }`}
        >
          <img
            src={service.image || "/blog2.jpeg?height=1080&width=1920&q=90"}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,1)_0%,rgba(128,128,128,0.3)_40%,transparent_60%)]" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-20 min-h-screen flex flex-col justify-center">
        <div className="max-w-3xl">
          <div
            className={`transition-all duration-800 ${
              isAnimating ? "opacity-0 translate-y-10" : "opacity-100 translate-y-0"
            }`}
          >
            <span className="inline-block px-4 py-2 bg-blue-600/10 border border-blue-600/20 rounded-full text-white text-sm font-semibold mb-6 animate-pulse-glow">
              {activeService.category || "Electrical Solutions"}
            </span>

            <h2
              className="text-3xl sm:text-4xl md:text-6xl font-['Poppins'] font-bold text-white mb-6 leading-tight break-words line-clamp-2"
              style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
            >
              {activeService.title}
            </h2>

            <p className="text-lg text-gray-200 mb-8 leading-relaxed" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}>
              {activeService.description}
            </p>

            <div className="flex flex-wrap gap-6 mb-12">
              <div className="flex items-center gap-3 text-gray-200" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}>
                <ActiveIcon className="w-5 h-5 text-blue-600" />
                <span>Category: {activeService.category || "Service"}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-200" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}>
                <Settings className="w-5 h-5 text-blue-600" />
                <span>Scope: {(activeService.features?.[0]) || "Comprehensive"}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-200" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}>
                <Users className="w-5 h-5 text-blue-600" />
                <span>Expertise: {activeService.features?.[1] || "Specialized Team"}</span>
              </div>
            </div>

            <Button
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 hover:scale-105 transition-all duration-300 shadow-md"
              style={{ textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}
            >
              <a href="/services" className="flex items-center">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Navigation */}
          <div className="absolute bottom-20 sm:bottom-16 left-0 right-0 flex justify-center items-center gap-2 mt-8 sm:mt-12 mx-auto w-fit px-4 sm:px-6">
            {/* Mobile Navigator (left, 3 dots, right) */}
            <div className="flex sm:hidden items-center gap-1">
              <button
                onClick={prevService}
                aria-label="Previous service"
                className="w-12 h-12 rounded-full bg-white/80 border border-blue-200/50 flex items-center justify-center text-blue-800 hover:bg-white/90 hover:border-blue-600 transition-all duration-300 hover:scale-105"
                disabled={isAnimating}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div className="flex gap-1">
                {getVisibleDots().map((index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (!isAnimating) {
                        setIsAnimating(true)
                        setActiveIndex(index)
                        setTimeout(() => setIsAnimating(false), 800)
                      }
                    }}
                    aria-label={`Go to service ${index + 1}`}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      index === activeIndex ? "w-6 bg-blue-600" : "w-4 bg-blue-200/50 hover:bg-blue-400/50"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextService}
                aria-label="Next service"
                className="w-12 h-12 rounded-full bg-white/80 border border-blue-200/50 flex items-center justify-center text-blue-800 hover:bg-white/90 hover:border-blue-600 transition-all duration-300 hover:scale-105"
                disabled={isAnimating}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Desktop Navigator (left, 10 dots, right) */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={prevService}
                aria-label="Previous service"
                className="w-14 h-14 rounded-full bg-white/80 border border-blue-200/50 flex items-center justify-center text-blue-800 hover:bg-white/90 hover:border-blue-600 transition-all duration-300 hover:scale-105"
                disabled={isAnimating}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div className="flex gap-2">
                {mockServices.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (!isAnimating) {
                        setIsAnimating(true)
                        setActiveIndex(index)
                        setTimeout(() => setIsAnimating(false), 800)
                      }
                    }}
                    aria-label={`Go to service ${index + 1}`}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      index === activeIndex ? "w-8 bg-blue-600" : "w-6 bg-blue-200/50 hover:bg-blue-400/50"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextService}
                aria-label="Next service"
                className="w-14 h-14 rounded-full bg-white/80 border border-blue-200/50 flex items-center justify-center text-blue-800 hover:bg-white/90 hover:border-blue-600 transition-all duration-300 hover:scale-105"
                disabled={isAnimating}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Service Counter */}
      <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 z-20">
        <div className="text-right bg-black/40 backdrop-blur-sm px-3 py-1 rounded-xl shadow-lg border border-gradient-to-r from-blue-600/50 to-cyan-600/50">
          <div className="text-5xl sm:text-6xl font-bold text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
            {String(activeIndex + 1).padStart(2, "0")}
          </div>
          <div className="text-lg sm:text-xl text-white/70 drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)]">
            / {String(mockServices.length).padStart(2, "0")}
          </div>
        </div>
      </div>

      {/* Font Import for Poppins and Custom Animation */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
        @keyframes pulse-glow {
          0% { box-shadow: 0 0 5px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 15px rgba(59, 130, 246, 0.5); }
          100% { box-shadow: 0 0 5px rgba(59, 130, 246, 0.3); }
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}