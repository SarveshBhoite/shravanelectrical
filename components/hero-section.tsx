"use client"

import { useState, useEffect } from "react"
import { companyInfo } from "@/lib/mock-data"

export function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0)
  
  // Carousel images - replace with actual electrical-themed images
  const images = [
    { url: "/blog8.jpeg", alt: "Electrical Installation Project" },
    { url: "/blog2.jpeg", alt: "High-Tension Substation" },
    { url: "/blog3.jpeg", alt: "Professional Wiring Team" },
    { url: "/blog4.jpeg", alt: "Energy-Efficient Electrical Setup" }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 4000) // Auto-advance every 4 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Carousel Background - Clear images with subtle radial gradient */}
      <div className="absolute inset-0">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out transform ${
              idx === currentImage 
                ? "opacity-100 scale-105" 
                : "opacity-0 scale-100"
            } animate-fade-in-up`}
            style={{
              backgroundImage: `url('${img.url}?height=1080&width=1920&w=1&q=90')`,
              transform: `translateY(${idx === currentImage ? "-10px" : "0"})`, // Subtle parallax
            }}
          />
        ))}
      </div>

      {/* Subtle Radial Gradient Overlay - Spotlight effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.3)_0%,rgba(0,0,0,0.6)_80%)] z-0" />

      {/* Content - Centered, responsive, and animated */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-scale-in animate-delay-100">

        {/* Company Name - Reverted to original sizing and styling */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tight
          bg-gradient-to-r from-blue-400 via-yellow-100 to-white bg-clip-text text-transparent
          animate-gradient drop-shadow-2xl animate-delay-100"
        >
          {companyInfo.name}
        </h1>

        {/* Tagline - Adjusted for balance */}
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-yellow-100 
          animate-fade-in-up animate-delay-300 drop-shadow-md max-w-3xl mx-auto leading-relaxed">
          {companyInfo.tagline}
        </p>
      </div>

      {/* Scroll Indicator - Bottom-aligned, enhanced */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce animate-delay-700">
        <div className="w-6 h-10 border-2 border-yellow-300 rounded-full flex justify-center hover-glow transition-all duration-300">
          <div className="w-1 h-3 bg-gradient-to-b from-yellow-300 to-yellow-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Enhanced Floating Particles - Spark-like effects */}
      <div className="absolute top-16 left-12 w-4 h-4 bg-yellow-300 rounded-full animate-spark animate-delay-200 opacity-60"></div>
      <div className="absolute top-1/3 right-12 w-5 h-5 bg-blue-400 rounded-full animate-spark animate-delay-400 opacity-50"></div>
      <div className="absolute bottom-24 left-16 w-3 h-3 bg-secondary rounded-full animate-spark animate-delay-600 opacity-70"></div>
      <div className="absolute top-1/4 right-20 w-6 h-6 bg-yellow-100 rounded-full animate-spark animate-delay-800 opacity-40"></div>
    </section>
  )
}