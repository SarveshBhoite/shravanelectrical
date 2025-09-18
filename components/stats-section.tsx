"use client"

import { useEffect, useState } from "react"
import { mockStats } from "@/lib/mock-data"
import { Award, TrendingUp, Users, MapPin } from "lucide-react"

interface CounterProps {
  end: number
  duration?: number
  suffix?: string
}

function Counter({ end, duration = 2000, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return (
    <span className="text-4xl md:text-5xl font-bold text-white">
      {count}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  const stats = [
    {
      value: mockStats.experience,
      suffix: "+",
      label: "Years Experience",
      description: "Delivering excellence in electrical solutions",
      icon: Award,
      color: "from-blue-500 to-blue-600",
    },
    {
      value: mockStats.projects,
      suffix: "+",
      label: "Projects Completed",
      description: "Successfully executed across various sectors",
      icon: TrendingUp,
      color: "from-yellow-500 to-yellow-600",
    },
    {
      value: mockStats.engineers,
      suffix: "+",
      label: "Expert Engineers",
      description: "Certified professionals at your service",
      icon: Users,
      color: "from-blue-600 to-blue-700",
    },
    {
      value: mockStats.branches,
      suffix: "",
      label: "Service Branches",
      description: "Strategic locations for better reach",
      icon: MapPin,
      color: "from-yellow-600 to-yellow-700",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-700 via-white to-blue-700 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-black-100">Our Achievements</h2>
          <p className="text-xl text-blue-600 max-w-2xl mx-auto text-pretty">
            Numbers that speak for our commitment to excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div
                key={index}
                className={`text-center p-8 rounded-2xl bg-gradient-to-br ${stat.color} shadow-2xl hover-lift animate-scale-in relative overflow-hidden`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute inset-0 bg-white/10 rounded-2xl animate-pulse-glow"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>

                  <Counter end={stat.value} suffix={stat.suffix} />
                  <h3 className="text-xl font-semibold mt-4 mb-2 text-white">{stat.label}</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">{stat.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
