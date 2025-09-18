"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Award, Users, Zap } from "lucide-react"
import { companyInfo } from "@/lib/mock-data"

export function CompanyIntro() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 leading-tight">
                  Powering Progress with
                  <span className="text-yellow-500"> Excellence</span>
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">{companyInfo.description}</p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  With decades of experience in electrical contracting, solar installations, and infrastructure
                  development, we deliver innovative solutions that power communities and businesses across the region.
                </p>
              </div>

              {/* Key Features */}
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="text-center p-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-blue-900 mb-2">Certified Excellence</h3>
                  <p className="text-sm text-gray-600">ISO certified with industry-leading standards</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h3 className="font-semibold text-blue-900 mb-2">Expert Team</h3>
                  <p className="text-sm text-gray-600">Skilled professionals with proven expertise</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-blue-900 mb-2">Innovation</h3>
                  <p className="text-sm text-gray-600">Cutting-edge technology and solutions</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Get Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/blog1.jpeg?height=600&width=600"
                  alt="Shravan Electrical team at work"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-yellow-400 rounded-xl shadow-lg p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-900">25+</div>
                  <div className="text-sm text-blue-900">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
