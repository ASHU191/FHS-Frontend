"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { X, Eye } from "lucide-react"

const solutions = [
  {
    title: "Residential Solutions",
    description: "Complete solar energy systems designed for homes, bringing clean energy to every household.",
    icon: "🏠",
    image: "/placeholder.svg?height=150&width=250",
    features: ["Grid-tied Inverters", "Energy Storage", "Smart Monitoring", "Easy Installation"],
    href: "/solutions/residential",
    details:
      "Our residential solutions are designed to maximize energy production and savings for homeowners. With seamless integration, remote monitoring capabilities, and industry-leading efficiency, our systems provide reliable power generation for years to come. Each system is customized to meet the specific needs of your home and energy consumption patterns.",
  },
  {
    title: "Commercial & Industrial",
    description: "Scalable solar solutions for businesses to reduce energy costs and carbon footprint.",
    icon: "🏭",
    image: "/placeholder.svg?height=150&width=250",
    features: ["High Power Systems", "Energy Management", "Cost Optimization", "Remote Monitoring"],
    href: "/solutions/commercial-industrial",
    details:
      "Our commercial and industrial solutions help businesses reduce operational costs while meeting sustainability goals. These systems are designed for maximum reliability and performance, with advanced monitoring and control features. Our team provides comprehensive support from system design through installation and maintenance.",
  },
  {
    title: "Energy Storage",
    description: "Advanced battery storage systems for energy independence and grid stability.",
    icon: "🔋",
    image: "/placeholder.svg?height=150&width=250",
    features: ["Battery Systems", "Hybrid Inverters", "Smart Control", "Long Lifespan"],
    href: "/solutions/energy-storage",
    details:
      "Our energy storage solutions provide power when you need it most. Whether for backup power during outages or maximizing self-consumption of solar energy, our battery systems offer industry-leading performance and reliability. With smart energy management features, you can optimize energy usage and reduce dependence on the grid.",
  },
  {
    title: "Utility Scale",
    description: "Large-scale solar power plants and grid-connected renewable energy systems.",
    icon: "⚡",
    image: "/placeholder.svg?height=150&width=250",
    features: ["Utility Inverters", "Grid Integration", "SCADA Systems", "Performance Monitoring"],
    href: "/solutions/utility-pv",
    details:
      "Our utility-scale solutions are designed for large power generation projects with maximum reliability and grid compliance. These systems include advanced grid support features, comprehensive monitoring capabilities, and are built to withstand harsh environmental conditions while delivering consistent performance year after year.",
  },
  {
    title: "BIPV Solutions",
    description: "Building-integrated photovoltaics that combine architecture with solar energy generation.",
    icon: "🏢",
    image: "/placeholder.svg?height=150&width=250",
    features: ["Integrated Design", "Aesthetic Appeal", "Dual Functionality", "Custom Solutions"],
    href: "/solutions/bipv",
    details:
      "Our building-integrated photovoltaic solutions seamlessly incorporate solar technology into building materials, combining functionality with aesthetic design. These systems transform building facades, windows, and roofs into power-generating assets while maintaining architectural integrity and visual appeal.",
  },
  {
    title: "Smart Home",
    description: "Intelligent home energy management systems for optimal energy usage and savings.",
    icon: "🏡",
    image: "/placeholder.svg?height=150&width=250",
    features: ["Smart Control", "Energy Optimization", "Mobile App", "Real-time Monitoring"],
    href: "/solutions/residential",
    details:
      "Our smart home solutions integrate renewable energy with intelligent home management systems. Control and monitor your energy production and consumption from anywhere using our intuitive mobile app. Optimize energy usage patterns, reduce waste, and maximize savings while enjoying the convenience of a connected home.",
  },
]

interface SolutionModalProps {
  solution: (typeof solutions)[0] | null
  isOpen: boolean
  onClose: () => void
}

function SolutionModal({ solution, isOpen, onClose }: SolutionModalProps) {
  if (!isOpen || !solution) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative p-4">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="flex items-center mb-3">
            <div className="w-8 h-8 bg-emerald-50 rounded-full flex items-center justify-center mr-3">
              <span className="text-lg">{solution.icon}</span>
            </div>
            <h2 className="text-lg font-bold">{solution.title}</h2>
          </div>

          <div className="mb-4">
            <Image
              src={solution.image || "/placeholder.svg"}
              alt={solution.title}
              width={500}
              height={200}
              className="w-full h-40 object-cover rounded-lg"
            />
          </div>

          <p className="text-gray-700 mb-4 text-sm">{solution.details}</p>

          <div className="mb-4">
            <h3 className="text-sm font-semibold mb-2">Key Features</h3>
            <ul className="grid grid-cols-1 gap-1">
              {solution.features.map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-2"></span>
                  <span className="text-xs">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <Link
            href={solution.href}
            className="inline-flex items-center bg-emerald-600 text-white px-4 py-2 rounded-full hover:bg-emerald-700 transition-colors text-sm"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function SolutionsSection() {
  const [selectedSolution, setSelectedSolution] = useState<(typeof solutions)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (solution: (typeof solutions)[0], e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setSelectedSolution(solution)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedSolution(null)
  }

  return (
    <>
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">SOLUTIONS</h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Comprehensive renewable energy solutions tailored for residential, commercial, and utility applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <Link
                key={index}
                href={solution.href}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative">
                  <Image
                    src={solution.image || "/placeholder.svg"}
                    alt={solution.title}
                    width={250}
                    height={150}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-lg">{solution.icon}</span>
                  </div>
                  <button
                    onClick={(e) => openModal(solution, e)}
                    className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-emerald-50 transition-colors"
                  >
                    <Eye className="h-4 w-4 text-emerald-600" />
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="text-base font-bold mb-2 group-hover:text-emerald-600 transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 mb-3 text-sm">{solution.description}</p>
                  <ul className="space-y-1 mb-4">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-xs">
                        <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/solutions"
              className="inline-flex items-center bg-emerald-600 text-white px-5 py-2 rounded-full hover:bg-emerald-700 transition-colors text-sm"
            >
              Explore All Solutions
            </Link>
          </div>
        </div>
      </section>

      <SolutionModal solution={selectedSolution} isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}
