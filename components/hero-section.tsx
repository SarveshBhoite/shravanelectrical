"use client"

import { companyInfo } from "@/lib/mock-data"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with darker overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 30, 80, 0.85), rgba(25, 70, 150, 0.65)), url('/blog8.jpeg?height=1080&width=1920')`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Moving Gradient Title */}
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tight
          bg-gradient-to-r from-blue-400 via-yellow-100 to-white bg-clip-text text-transparent
          animate-gradient drop-shadow-md"
        >
          {companyInfo.name}
        </h1>

        {/* Calm Tagline */}
        <p className="text-xl md:text-3xl font-light text-yellow-200 animate-fade-in-up animate-delay-200 drop-shadow-sm">
          {companyInfo.tagline}
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-yellow-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-yellow-300 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
