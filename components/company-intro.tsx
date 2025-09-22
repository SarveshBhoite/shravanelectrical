"use client"; // MUST be the very first line

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Award, Users, Zap, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function CompanyIntro() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const coreServices = [
    {
      id: 1,
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "Infrastructure",
      short: "Well-furnished office & central stores boosting performance.",
      details:
        "Situated in a well-furnished office catering to all needs of office management, along with the central stores supplying to all the sites, add to the overall performance.",
      bg: "bg-blue-100",
    },
    {
      id: 2,
      icon: <Users className="h-8 w-8 text-yellow-600" />,
      title: "Customer Satisfaction",
      short: "Customer-focused, open & honest relationships.",
      details:
        "Constantly working to improve our quality service in order to maintain high standards. We value customer feedback, aim for repeat business, and operate with transparency.",
      bg: "bg-yellow-100",
    },
    {
      id: 3,
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: "Quality Assurance",
      short: "Turnkey projects with continual quality improvements.",
      details:
        "Specialized in internal & external electrification projects. Ensuring effective operations with a robust Quality Management System, focusing on efficiency and client needs.",
      bg: "bg-blue-100",
    },
    {
      id: 4,
      icon: <ShieldCheck className="h-8 w-8 text-green-600" />,
      title: "Health & Safety",
      short: "Safe & healthy work environment for all.",
      details:
        "We comply with health & safety acts by maintaining safe environments, preventing accidents, training staff, and ensuring welfare for employees and partners.",
      bg: "bg-green-100",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 leading-tight">
                  Powering Progress with <span className="text-yellow-500">Excellence</span>
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  SHRAVAN Electrical Contractor in Vazirabad Nanded, a leading provider of comprehensive contracting and building services, specializes in delivering high-quality solutions that cater to Government Licensed Electrical Contractors projects. The company's experienced professionals are dedicated to ensuring that every project, regardless of size, is executed with precision and excellence.
                </p>
              </div>

              {/* Core Services Cards */}
              <div className="grid sm:grid-cols-2 gap-6">
                {coreServices.map((service) => (
                  <div
                    key={service.id}
                    onMouseEnter={() => setActiveId(service.id)}
                    onMouseLeave={() => setActiveId(null)}
                    className="cursor-pointer p-6 text-center border border-gray-200 rounded-xl shadow-md hover:shadow-lg bg-white transition-all"
                  >
                    <div className={`w-16 h-16 ${service.bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      {service.icon}
                    </div>
                    <h3 className="font-semibold text-blue-900 mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-600">{service.short}</p>

                    {/* Animated Details */}
                    <AnimatePresence>
                      {activeId === service.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4 }}
                          className="mt-3 text-gray-700 text-sm leading-relaxed"
                        >
                          {service.details}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Get Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img src="/blog1.jpeg" alt="Shravan Electrical team at work" className="w-full h-full object-cover" />
              </div>

              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 border border-gray-100 text-center">
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-yellow-400 rounded-xl shadow-lg p-6 text-center">
                <div className="text-3xl font-bold text-blue-900">25+</div>
                <div className="text-sm text-blue-900">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
