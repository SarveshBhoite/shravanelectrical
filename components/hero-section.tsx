"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { companyInfo } from "@/lib/mock-data"

export function HeroSection() {
  const [currentImage, setCurrentImage] = useState(-1) // -1 means show video first
  const videoRef = useRef<HTMLVideoElement | null>(null)

  // Carousel images
  const images = [
    { url: "/gate.png", alt: "Electrical Installation Project" },
    { url: "/hero1.png", alt: "High-Tension Substation" },
    { url: "/hero2.png", alt: "Professional Wiring Team" },
    { url: "/hero3.png", alt: "Energy-Efficient Electrical Setup" }
  ]

  useEffect(() => {
    if (currentImage >= 0) {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length)
      }, 4000) // Auto-advance every 4 seconds
      return () => clearInterval(interval)
    }
  }, [currentImage])

  const handleVideoEnd = () => {
    setCurrentImage(0) // Start carousel when video finishes
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video with scale-out */}
      <AnimatePresence>
        {currentImage === -1 && (
          <motion.video
            key="hero-video"
            ref={videoRef}
            src="/video2.mp4"
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>

      {/* Carousel Background after video */}
      {currentImage >= 0 && (
        <div className="absolute inset-0">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('${img.url}?height=1080&width=1920&w=1&q=90')`,
              }}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={
                idx === currentImage
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 1 }
              }
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          ))}
        </div>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.3)_0%,rgba(0,0,0,0.6)_80%)] z-0" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-scale-in animate-delay-100">
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tight
          bg-gradient-to-r from-blue-400 via-yellow-100 to-white bg-clip-text text-transparent
          animate-gradient drop-shadow-2xl animate-delay-100"
        >
          {companyInfo.name}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-yellow-100 
          animate-fade-in-up animate-delay-300 drop-shadow-md max-w-3xl mx-auto leading-relaxed">
          {companyInfo.tagline}
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce animate-delay-700">
        <div className="w-6 h-10 border-2 border-yellow-300 rounded-full flex justify-center hover-glow transition-all duration-300">
          <div className="w-1 h-3 bg-gradient-to-b from-yellow-300 to-yellow-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
