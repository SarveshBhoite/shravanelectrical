"use client"

import { useEffect, useState, useRef } from "react"

// -------------------- Client Lists --------------------
const clients = [
  { name: "Meil", logo: "/meil.jpg" },
  { name: "MAhavitaran", logo: "/mahavitaran.jpg" },
  { name: "Polycab", logo: "/meil.jpg" },
  { name: "Larsen & Toubro", logo: "/gaja.jpg" },
  { name: "NTPC", logo: "/ntpc-logo.jpg" },
  { name: "Indian Railways", logo: "/meil.jpg" },
  { name: "BHEL", logo: "/msrdc.jpg" },
  { name: "ONGC", logo: "/ncc.jpg" },
]

const sisterClients = [
  { name: "Bhakti Power Infra Pvt. Ltd.", logo: "/bhakti.jpg" },
  { name: "Guru Gas Industries", logo: "/guru-gas.jpg" },
  { name: "M/s. Siddhi Balaji Kanthewad Civil Contractor", logo: "/balaji.jpg" },
  { name: "Shravan Petroleum Wakad", logo: "/shravan.jpg" },
]

// -------------------- Hook for Intersection Observer --------------------
function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true)
        observer.unobserve(entry.target)
      }
    }, options)

    const currentRef = ref.current
    if (currentRef) observer.observe(currentRef)

    return () => {
      if (currentRef) observer.unobserve(currentRef)
    }
  }, [options])

  return [ref, isInView] as const
}

// -------------------- Counter Component --------------------
interface CounterProps {
  end: number
  duration?: number
  isInView: boolean
  suffix?: string
  className?: string
}

function Counter({ end, duration = 2000, isInView, suffix = "", className }: CounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) animationFrame = requestAnimationFrame(animate)
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, isInView])

  return <span className={className}>{count}{suffix}</span>
}

// -------------------- Clients Slider Component --------------------
export function ClientsSlider() {
  const [sectionRef, isInView] = useInView({ threshold: 0.1 })
  const doubledClients = [...clients, ...clients]
  const doubledSisterClients = [...sisterClients, ...sisterClients]

  return (
    <section
      id="clients"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Clients Section */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Clients
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Trusted by industry leaders across India
          </p>
        </div>

        {/* Main Clients Slider */}
        <div className="relative mb-24">
          <div className="overflow-hidden">
            <div
              className="flex gap-12 animate-scroll"
              style={{ width: `${doubledClients.length * 250}px` }}
            >
              {doubledClients.map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex-shrink-0 w-[200px] h-[120px] bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 flex items-center justify-center p-6 hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300 hover:scale-110 group"
                >
                  <img
                    src={client.logo || "/placeholder.svg"}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent pointer-events-none" />
        </div>

        {/* Sister Clients Section */}
       {/* Sister Clients Section */}
<div
  className={`text-center mb-12 transition-all duration-1000 ${
    isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
  }`}
>
  <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
    Sister{" "}
    <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
      Concerns
    </span>
  </h3>
  <p className="text-lg text-gray-400 max-w-xl mx-auto mb-12">
    Our extended family of successful collaborations
  </p>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
    {sisterClients.map((client, index) => (
      <div
        key={client.name}
        className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-pink-400/50"
      >
        <img
          src={client.logo || "/placeholder.svg"}
          alt={client.name}
          className="w-32 h-32 object-contain mb-4 filter grayscale hover:grayscale-0 transition-all duration-300"
        />
        <span className="text-white text-center font-medium">{client.name}</span>
      </div>
    ))}
  </div>
</div>




        {/* Stats Section */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 transition-all duration-1000 delay-300 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {[
            { value: 50, suffix: "+", label: "Major Clients" },
            { value: 98, suffix: "%", label: "Satisfaction Rate" },
            { value: 250, suffix: "+", label: "Projects Delivered" },
            { value: 15, suffix: "+", label: "Districts Covered" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl border border-blue-400/20 hover:border-blue-400/50 transition-all duration-300"
              style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                <Counter end={stat.value} suffix={stat.suffix} isInView={isInView} />
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-slow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll-slow {
          animation: scroll-slow 45s linear infinite;
        }
        .animate-scroll:hover,
        .animate-scroll-slow:hover {
          animation-play-state: paused;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}