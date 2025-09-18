"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Calendar, MapPin, Play, Pause } from "lucide-react"
import { mockProjects } from "@/lib/mock-data"
import Image from "next/image"

export function ProjectsSection() {
  const [currentProject, setCurrentProject] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % mockProjects.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % mockProjects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + mockProjects.length) % mockProjects.length)
  }

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying)
  }

  const getVisibleProjects = () => {
    const projects = []
    for (let i = -1; i <= 1; i++) {
      const index = (currentProject + i + mockProjects.length) % mockProjects.length
      projects.push({ ...mockProjects[index], position: i })
    }
    return projects
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-blue-900">Major Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
            Showcasing our expertise through successful project implementations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Carousel */}
          <div className="relative">
            <div className="flex items-center justify-center h-96 relative overflow-hidden">
              {getVisibleProjects().map((project, index) => (
                <div
                  key={`${project.id}-${index}`}
                  className={`absolute transition-all duration-700 ease-in-out ${
                    project.position === 0
                      ? "z-20 scale-100 opacity-100"
                      : project.position === -1
                        ? "z-10 scale-75 opacity-60 -translate-x-32"
                        : "z-10 scale-75 opacity-60 translate-x-32"
                  }`}
                >
                  <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                    <Image
                      src={project.image || "/blog2.jpeg?height=400&width=400"}
                      alt={project.name}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevProject}
                className="rounded-full bg-white border-blue-200 hover:bg-blue-50 hover:border-blue-300"
              >
                <ChevronLeft className="h-4 w-4 text-blue-600" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                onClick={toggleAutoPlay}
                className="rounded-full bg-white border-blue-200 hover:bg-blue-50 hover:border-blue-300"
              >
                {isAutoPlaying ? (
                  <Pause className="h-4 w-4 text-blue-600" />
                ) : (
                  <Play className="h-4 w-4 text-blue-600" />
                )}
              </Button>

              <Button
                variant="outline"
                size="icon"
                onClick={nextProject}
                className="rounded-full bg-white border-blue-200 hover:bg-blue-50 hover:border-blue-300"
              >
                <ChevronRight className="h-4 w-4 text-blue-600" />
              </Button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-4">
              {mockProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentProject ? "bg-blue-600 scale-125" : "bg-blue-200 hover:bg-blue-300"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="animate-fade-in-up">
            <Card className="border-none shadow-xl bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="mb-4">
                  <span className="inline-block px-4 py-2 bg-yellow-100 text-blue-900 rounded-full text-sm font-semibold">
                    {mockProjects[currentProject].category}
                  </span>
                </div>

                <h3 className="text-3xl font-bold mb-4 text-blue-900 text-balance transition-all duration-500">
                  {mockProjects[currentProject].name}
                </h3>

                <p className="text-lg text-gray-700 mb-6 leading-relaxed text-pretty transition-all duration-500">
                  {mockProjects[currentProject].description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2 text-blue-600" />
                    <span>Completed: {mockProjects[currentProject].completedDate}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                    <span>{mockProjects[currentProject].location}</span>
                  </div>
                </div>

                <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white">
                  View Project Details
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
