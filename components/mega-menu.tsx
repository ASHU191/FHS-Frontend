"use client"

import type React from "react"

import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronLeft, ChevronRight, Users, Globe, Award, TrendingUp, Zap, Shield } from "lucide-react"

interface MegaMenuProps {
  activeMenu: string
  onMouseEnter: () => void
  onMouseLeave: () => void
  parentRef: React.RefObject<HTMLDivElement>
}

const solutionsData = [
  {
    title: "Residential Solutions",
    description: "Bringing solar energy into every home",
    icon: "🏠",
    href: "/solutions/residential",
  },
  {
    title: "Energy Storage Solutions",
    description: "Power whenever you need",
    icon: "🔋",
    href: "/solutions/energy-storage",
  },
  {
    title: "Commercial and Industrial Solutions",
    description: "Boost your power & profit",
    icon: "🏭",
    href: "/solutions/commercial-industrial",
  },
  {
    title: "Utility PV Solutions",
    description: "Reshaping Smart Energy",
    icon: "⚡",
    href: "/solutions/utility-pv",
  },
  {
    title: "BIPV Solution",
    description: "Solarise Every Building",
    icon: "🏢",
    href: "/solutions/bipv",
  },
]

const productCategories = [
  {
    name: "Residential Inverters",
    href: "/products?category=residential-inverters",
    icon: "🏠",
    products: [
      {
        name: "GW3000-NS",
        image: "/placeholder.svg?height=80&width=80",
        href: "/products/gw3000-ns",
        price: "45,999",
      },
      {
        name: "GW5000-NS",
        image: "/placeholder.svg?height=80&width=80",
        href: "/products/gw5000-ns",
        price: "65,999",
      },
      {
        name: "GW6000-NS",
        image: "/placeholder.svg?height=80&width=80",
        href: "/products/gw6000-ns",
        price: "75,999",
      },
      {
        name: "GW8000-NS",
        image: "/placeholder.svg?height=80&width=80",
        href: "/products/gw8000-ns",
        price: "95,999",
      },
      {
        name: "GW10K-NS",
        image: "/placeholder.svg?height=80&width=80",
        href: "/products/gw10k-ns",
        price: "1,15,999",
      },
      {
        name: "GW12K-NS",
        image: "/placeholder.svg?height=80&width=80",
        href: "/products/gw12k-ns",
        price: "1,35,999",
      },
    ],
  },
  {
    name: "Commercial Inverters",
    href: "/products?category=commercial-inverters",
    icon: "🏭",
    products: [
      {
        name: "GW25K-MT",
        image: "/placeholder.svg?height=80&width=80",
        href: "/products/gw25k-mt",
        price: "2,15,999",
      },
      {
        name: "GW50K-MT",
        image: "/placeholder.svg?height=80&width=80",
        href: "/products/gw50k-mt",
        price: "3,85,999",
      },
      {
        name: "GW80K-MT",
        image: "/placeholder.svg?height=80&width=80",
        href: "/products/gw80k-mt",
        price: "5,85,999",
      },
      {
        name: "GW100K-MT",
        image: "/placeholder.svg?height=80&width=80",
        href: "/products/gw100k-mt",
        price: "7,25,999",
      },
      {
        name: "GW125K-MT",
        image: "/placeholder.svg?height=80&width=80",
        href: "/products/gw125k-mt",
        price: "8,95,999",
      },
      {
        name: "GW150K-MT",
        image: "/placeholder.svg?height=80&width=80",
        href: "/products/gw150k-mt",
        price: "10,25,999",
      },
    ],
  },
  {
    name: "Energy Storage",
    href: "/products?category=energy-storage",
    icon: "🔋",
    products: [
      {
        name: "Lynx Home F",
        image: "/placeholder.svg?height=80&width=80",
        href: "/products/lynx-home-f",
        price: "1,25,999",
      },
      {
        name: "Lynx Home U",
        image: "/placeholder.svg?height=80&width=80",
        href: "/products/lynx-home-u",
        price: "2,25,999",
      },
      {
        name: "Lynx Home C",
        image: "/placeholder.svg?height=80&width=80",
        href: "/products/lynx-home-c",
        price: "3,15,999",
      },
      {
        name: "Lynx Commercial",
        image: "/placeholder.svg?height=80&width=80",
        href: "/products/lynx-commercial",
        price: "8,95,999",
      },
      {
        name: "Lynx Industrial",
        image: "/placeholder.svg?height=80&width=80",
        href: "/products/lynx-industrial",
        price: "15,95,999",
      },
      {
        name: "Lynx Mega",
        image: "/placeholder.svg?height=80&width=80",
        href: "/products/lynx-mega",
        price: "25,95,999",
      },
    ],
  },
  {
    name: "Utility Products",
    href: "/products?category=utility-products",
    icon: "⚡",
    products: [
      {
        name: "GW1000K-HV",
        image: "/placeholder.svg?height=80&width=80",
        href: "/products/gw1000k-hv",
        price: "45,00,000",
      },
      {
        name: "GW2500K-HV",
        image: "/placeholder.svg?height=80&width=80",
        href: "/products/gw2500k-hv",
        price: "95,00,000",
      },
      {
        name: "GW3000K-HV",
        image: "/placeholder.svg?height=80&width=80",
        href: "/products/gw3000k-hv",
        price: "1,25,00,000",
      },
    ],
  },
  {
    name: "Batteries",
    href: "/products?category=batteries",
    icon: "🔋",
    products: [
      {
        name: "Battery 5.12kWh",
        image: "/placeholder.svg?height=80&width=80",
        href: "/products/battery-5.12",
        price: "85,999",
      },
      {
        name: "Battery 10.24kWh",
        image: "/placeholder.svg?height=80&width=80",
        href: "/products/battery-10.24",
        price: "1,65,999",
      },
      {
        name: "Battery 15.36kWh",
        image: "/placeholder.svg?height=80&width=80",
        href: "/products/battery-15.36",
        price: "2,45,999",
      },
    ],
  },
  {
    name: "Solar Panels",
    href: "/products?category=solar-panels",
    icon: "☀️",
    products: [
      {
        name: "Mono 400W",
        image: "/placeholder.svg?height=80&width=80",
        href: "/products/mono-400w",
        price: "12,999",
      },
      {
        name: "Mono 450W",
        image: "/placeholder.svg?height=80&width=80",
        href: "/products/mono-450w",
        price: "14,999",
      },
      {
        name: "Mono 500W",
        image: "/placeholder.svg?height=80&width=80",
        href: "/products/mono-500w",
        price: "16,999",
      },
    ],
  },
  {
    name: "Monitoring Systems",
    href: "/products?category=monitoring",
    icon: "📊",
    products: [
      {
        name: "Smart Monitor Pro",
        image: "/placeholder.svg?height=80&width=80",
        href: "/products/monitor-pro",
        price: "25,999",
      },
      {
        name: "Smart Monitor Basic",
        image: "/placeholder.svg?height=80&width=80",
        href: "/products/monitor-basic",
        price: "15,999",
      },
      {
        name: "Smart Monitor Advanced",
        image: "/placeholder.svg?height=80&width=80",
        href: "/products/monitor-advanced",
        price: "35,999",
      },
    ],
  },
  {
    name: "Accessories",
    href: "/products?category=accessories",
    icon: "🔧",
    products: [
      {
        name: "DC Combiner Box",
        image: "/placeholder.svg?height=80&width=80",
        href: "/products/dc-combiner",
        price: "8,999",
      },
      {
        name: "AC Disconnect",
        image: "/placeholder.svg?height=80&width=80",
        href: "/products/ac-disconnect",
        price: "5,999",
      },
      {
        name: "Surge Protector",
        image: "/placeholder.svg?height=80&width=80",
        href: "/products/surge-protector",
        price: "3,999",
      },
    ],
  },
  {
    name: "Smart Devices",
    href: "/products?category=smart-devices",
    icon: "📱",
    products: [
      {
        name: "Smart Switch",
        image: "/placeholder.svg?height=80&width=80",
        href: "/products/smart-switch",
        price: "4,999",
      },
      {
        name: "Smart Meter",
        image: "/placeholder.svg?height=80&width=80",
        href: "/products/smart-meter",
        price: "12,999",
      },
      {
        name: "Smart Gateway",
        image: "/placeholder.svg?height=80&width=80",
        href: "/products/smart-gateway",
        price: "18,999",
      },
    ],
  },
  {
    name: "Installation Tools",
    href: "/products?category=installation-tools",
    icon: "🛠️",
    products: [
      {
        name: "Mounting Rails",
        image: "/placeholder.svg?height=80&width=80",
        href: "/products/mounting-rails",
        price: "2,999",
      },
      {
        name: "Clamps Set",
        image: "/placeholder.svg?height=80&width=80",
        href: "/products/clamps-set",
        price: "1,999",
      },
      {
        name: "Grounding Kit",
        image: "/placeholder.svg?height=80&width=80",
        href: "/products/grounding-kit",
        price: "3,999",
      },
    ],
  },
]

const aboutData = [
  {
    title: "Company Profile",
    description: "Learn about our mission and vision",
    href: "/about/company",
    icon: <Users className="h-5 w-5" />,
  },
  {
    title: "Milestones",
    description: "Our journey and achievements",
    href: "/about/milestones",
    icon: <Award className="h-5 w-5" />,
  },
  {
    title: "Global Presence",
    description: "Worldwide operations and offices",
    href: "/about/global",
    icon: <Globe className="h-5 w-5" />,
  },
  {
    title: "Quality & Certificates",
    description: "Our commitment to quality",
    href: "/about/quality",
    icon: <Shield className="h-5 w-5" />,
  },
  {
    title: "CSR",
    description: "Corporate social responsibility",
    href: "/about/csr",
    icon: <TrendingUp className="h-5 w-5" />,
  },
]

export default function MegaMenu({ activeMenu, onMouseEnter, onMouseLeave, parentRef }: MegaMenuProps) {
  const [selectedCategory, setSelectedCategory] = useState(0)
  const categoryContainerRef = useRef<HTMLDivElement>(null)
  const productContainerRef = useRef<HTMLDivElement>(null)

  const scrollCategories = (direction: "up" | "down") => {
    if (!categoryContainerRef.current) return

    const container = categoryContainerRef.current
    const scrollAmount = 100

    if (direction === "up") {
      container.scrollTop -= scrollAmount
    } else {
      container.scrollTop += scrollAmount
    }
  }

  const scrollProducts = (direction: "left" | "right") => {
    if (!productContainerRef.current) return

    const container = productContainerRef.current
    const scrollAmount = 200

    if (direction === "left") {
      container.scrollLeft -= scrollAmount
    } else {
      container.scrollLeft += scrollAmount
    }
  }

  const renderSolutions = () => (
    <div className="grid grid-cols-12 gap-6">
      {/* Solutions List */}
      <div className="col-span-5">
        <div className="flex items-center mb-4">
          <Link href="/solutions" className="flex items-center hover:text-primary-600 transition-colors">
            <h3 className="text-lg font-semibold text-neutral-900">Solutions</h3>
            <ArrowRight className="h-4 w-4 ml-2 text-neutral-600" />
          </Link>
        </div>
        <div className="space-y-3">
          {solutionsData.map((solution) => (
            <Link
              key={solution.title}
              href={solution.href}
              className="flex items-start group block p-3 rounded-lg hover:bg-primary-50 transition-colors"
            >
              <div className="w-8 h-8 mr-3 flex-shrink-0 flex items-center justify-center bg-primary-100 rounded-lg">
                <span className="text-lg">{solution.icon}</span>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors mb-1 text-sm">
                  {solution.title}
                </h4>
                <p className="text-xs text-neutral-500 leading-relaxed">{solution.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Content */}
      <div className="col-span-7">
        <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-6 h-full">
          <div className="flex items-center mb-4">
            <Zap className="h-6 w-6 text-primary-600 mr-2" />
            <h3 className="text-lg font-semibold text-neutral-900">Why Choose FHS Zoom?</h3>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold text-primary-600 mb-1">2M+</div>
              <div className="text-sm text-neutral-600">Systems Installed</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold text-secondary-600 mb-1">100+</div>
              <div className="text-sm text-neutral-600">Countries Served</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold text-accent-600 mb-1">98.5%</div>
              <div className="text-sm text-neutral-600">Efficiency Rate</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold text-primary-600 mb-1">15+</div>
              <div className="text-sm text-neutral-600">Years Experience</div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center text-sm">
              <Shield className="h-4 w-4 text-primary-600 mr-2" />
              <span>Industry-leading warranty coverage</span>
            </div>
            <div className="flex items-center text-sm">
              <Globe className="h-4 w-4 text-primary-600 mr-2" />
              <span>Global support network</span>
            </div>
            <div className="flex items-center text-sm">
              <Award className="h-4 w-4 text-primary-600 mr-2" />
              <span>Award-winning technology</span>
            </div>
          </div>

          <Link
            href="/about"
            className="inline-flex items-center mt-4 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors text-sm"
          >
            Learn More About Us
            <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  )

  const renderProducts = () => (
    <div className="grid grid-cols-12 gap-4">
      {/* Product Categories Column */}
      <div className="col-span-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-semibold text-neutral-900">Categories</h3>
          <div className="flex space-x-1">
            <button onClick={() => scrollCategories("up")} className="p-1 hover:bg-gray-100 rounded">
              <ChevronLeft className="h-3 w-3 rotate-90" />
            </button>
            <button onClick={() => scrollCategories("down")} className="p-1 hover:bg-gray-100 rounded">
              <ChevronRight className="h-3 w-3 rotate-90" />
            </button>
          </div>
        </div>
        <div className="h-64 overflow-y-auto pr-2 scrollbar-thin" ref={categoryContainerRef}>
          <div className="space-y-1">
            {productCategories.map((category, index) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(index)}
                className={`w-full flex items-center p-2 rounded-md transition-colors text-left text-xs ${
                  selectedCategory === index
                    ? "bg-primary-50 text-primary-600 border border-primary-200"
                    : "hover:bg-gray-50 hover:text-primary-600"
                }`}
              >
                <span className="text-sm mr-2">{category.icon}</span>
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <Link
            href="/products"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold text-xs"
          >
            View All Products
            <ArrowRight className="h-3 w-3 ml-1" />
          </Link>
        </div>
      </div>

      {/* Products Column */}
      <div className="col-span-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-semibold text-neutral-900">
            {productCategories[selectedCategory]?.name || "Products"}
          </h3>
          <div className="flex items-center space-x-2">
            <Link
              href={productCategories[selectedCategory]?.href || "/products"}
              className="text-xs text-primary-600 hover:text-primary-700 font-medium"
            >
              View All →
            </Link>
            <div className="flex space-x-1">
              <button onClick={() => scrollProducts("left")} className="p-1 hover:bg-gray-100 rounded">
                <ChevronLeft className="h-3 w-3" />
              </button>
              <button onClick={() => scrollProducts("right")} className="p-1 hover:bg-gray-100 rounded">
                <ChevronRight className="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto max-h-64" ref={productContainerRef}>
          <div className="grid grid-cols-3 gap-2 min-w-[600px]">
            {productCategories[selectedCategory]?.products.map((product, index) => (
              <Link key={index} href={product.href} className="group">
                <div className="bg-white rounded-md border hover:border-primary-200 transition-colors p-2">
                  <div className="aspect-square bg-gray-50 rounded-md mb-2 overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="text-xs font-medium text-neutral-900 group-hover:text-primary-600 transition-colors leading-tight mb-1">
                    {product.name}
                  </h4>
                  <p className="text-xs font-semibold text-primary-600">{product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  const renderAbout = () => (
    <div className="grid grid-cols-12 gap-6">
      {/* About Links */}
      <div className="col-span-5">
        <div className="flex items-center mb-4">
          <Link href="/about" className="flex items-center hover:text-primary-600 transition-colors">
            <h3 className="text-lg font-semibold text-neutral-900">About FHS Zoom</h3>
            <ArrowRight className="h-4 w-4 ml-2 text-neutral-600" />
          </Link>
        </div>
        <div className="space-y-2">
          {aboutData.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="flex items-start group p-3 rounded-lg hover:bg-primary-50 transition-colors"
            >
              <div className="w-8 h-8 mr-3 flex-shrink-0 flex items-center justify-center bg-primary-100 rounded-lg text-primary-600">
                {item.icon}
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors mb-1 text-sm">
                  {item.title}
                </h4>
                <p className="text-xs text-neutral-500 leading-relaxed">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Company Highlights */}
      <div className="col-span-7">
        <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-6 h-full">
          <div className="flex items-center mb-4">
            <Users className="h-6 w-6 text-primary-600 mr-2" />
            <h3 className="text-lg font-semibold text-neutral-900">Leading Solar Innovation</h3>
          </div>

          <div className="mb-6">
            <Image
              src="/placeholder.svg?height=120&width=300"
              alt="FHS Zoom Innovation"
              width={300}
              height={120}
              className="w-full h-24 object-cover rounded-lg mb-4"
            />
            <p className="text-sm text-neutral-600 leading-relaxed">
              For over a decade, FHS Zoom has been at the forefront of solar energy innovation, providing reliable and
              efficient solutions that power homes and businesses worldwide.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="text-center bg-white rounded-lg p-3 shadow-sm">
              <div className="text-xl font-bold text-primary-600 mb-1">2M+</div>
              <div className="text-xs text-neutral-600">Inverters Installed</div>
            </div>
            <div className="text-center bg-white rounded-lg p-3 shadow-sm">
              <div className="text-xl font-bold text-secondary-600 mb-1">100+</div>
              <div className="text-xs text-neutral-600">Countries</div>
            </div>
            <div className="text-center bg-white rounded-lg p-3 shadow-sm">
              <div className="text-xl font-bold text-accent-600 mb-1">15</div>
              <div className="text-xs text-neutral-600">Years Experience</div>
            </div>
          </div>

          <Link
            href="/about"
            className="inline-flex items-center bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors text-sm"
          >
            Learn More About Us
            <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  )

  const getMenuContent = () => {
    switch (activeMenu) {
      case "Solutions":
        return renderSolutions()
      case "Products":
        return renderProducts()
      case "About FHS Zoom":
        return renderAbout()
      default:
        return null
    }
  }

  return (
    <div
      className="fixed top-14 left-0 right-0 bg-white shadow-xl border-t z-40"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="container mx-auto px-4 py-6">{getMenuContent()}</div>

      <style jsx>{`
        .scrollbar-thin::-webkit-scrollbar {
          width: 4px;
        }
        
        .scrollbar-thin::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 10px;
        }
        
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>
    </div>
  )
}
