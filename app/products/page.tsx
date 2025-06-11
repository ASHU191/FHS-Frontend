"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Filter, Eye, X } from "lucide-react"
import { useSearchParams } from "next/navigation"
import { featuredProducts } from "@/components/products-section"

const allProducts = [
  // Residential Inverters (5 products)
  {
    id: 1,
    category: "Residential Inverters",
    title: "GW3000-NS Residential Inverter",
    description: "High-efficiency single-phase inverter for home solar systems",
    image: "/placeholder.svg?height=200&width=250",
    features: ["97.6% Efficiency", "WiFi Monitoring", "10-Year Warranty"],
    price: "45999",
    originalPrice: "52999",
    availability: "IN STOCK",
    sku: "GW3000-NS",
    href: "/products/gw3000-ns",
  },
  {
    id: 2,
    category: "Residential Inverters",
    title: "GW5000-NS Residential Inverter",
    description: "5kW single-phase inverter with advanced monitoring",
    image: "/placeholder.svg?height=200&width=250",
    features: ["97.8% Efficiency", "Smart Monitoring", "10-Year Warranty"],
    price: "65999",
    originalPrice: "75999",
    availability: "IN STOCK",
    sku: "GW5000-NS",
    href: "/products/gw5000-ns",
  },
  {
    id: 3,
    category: "Residential Inverters",
    title: "GW6000-NS Residential Inverter",
    description: "6kW single-phase inverter with premium features",
    image: "/placeholder.svg?height=200&width=250",
    features: ["97.8% Efficiency", "Premium Monitoring", "10-Year Warranty"],
    price: "75999",
    originalPrice: "85999",
    availability: "IN STOCK",
    sku: "GW6000-NS",
    href: "/products/gw6000-ns",
  },
  {
    id: 4,
    category: "Residential Inverters",
    title: "GW8000-NS Residential Inverter",
    description: "8kW single-phase inverter for larger homes",
    image: "/placeholder.svg?height=200&width=250",
    features: ["98.0% Efficiency", "Advanced Monitoring", "10-Year Warranty"],
    price: "95999",
    originalPrice: "105999",
    availability: "IN STOCK",
    sku: "GW8000-NS",
    href: "/products/gw8000-ns",
  },
  {
    id: 5,
    category: "Residential Inverters",
    title: "GW10K-NS Residential Inverter",
    description: "10kW single-phase inverter for large homes",
    image: "/placeholder.svg?height=200&width=250",
    features: ["98.2% Efficiency", "Premium Monitoring", "10-Year Warranty"],
    price: "115999",
    originalPrice: "125999",
    availability: "IN STOCK",
    sku: "GW10K-NS",
    href: "/products/gw10k-ns",
  },
  // Commercial Inverters (5 products)
  {
    id: 6,
    category: "Commercial Inverters",
    title: "GW25K-MT Commercial Inverter",
    description: "25kW three-phase inverter for commercial installations",
    image: "/placeholder.svg?height=200&width=250",
    features: ["98.4% Efficiency", "Remote Monitoring", "5-Year Warranty"],
    price: "215999",
    originalPrice: "245999",
    availability: "IN STOCK",
    sku: "GW25K-MT",
    href: "/products/gw25k-mt",
  },
  {
    id: 7,
    category: "Commercial Inverters",
    title: "GW50K-MT Commercial Inverter",
    description: "50kW three-phase inverter for large commercial projects",
    image: "/placeholder.svg?height=200&width=250",
    features: ["98.5% Efficiency", "SCADA Compatible", "5-Year Warranty"],
    price: "385999",
    originalPrice: "425999",
    availability: "IN STOCK",
    sku: "GW50K-MT",
    href: "/products/gw50k-mt",
  },
  {
    id: 8,
    category: "Commercial Inverters",
    title: "GW75K-MT Commercial Inverter",
    description: "75kW three-phase inverter for industrial applications",
    image: "/placeholder.svg?height=200&width=250",
    features: ["98.6% Efficiency", "Industrial Grade", "5-Year Warranty"],
    price: "525999",
    originalPrice: "575999",
    availability: "IN STOCK",
    sku: "GW75K-MT",
    href: "/products/gw75k-mt",
  },
  {
    id: 9,
    category: "Commercial Inverters",
    title: "GW100K-MT Commercial Inverter",
    description: "100kW three-phase inverter for large scale projects",
    image: "/placeholder.svg?height=200&width=250",
    features: ["98.7% Efficiency", "Grid Compliance", "5-Year Warranty"],
    price: "685999",
    originalPrice: "725999",
    availability: "IN STOCK",
    sku: "GW100K-MT",
    href: "/products/gw100k-mt",
  },
  {
    id: 10,
    category: "Commercial Inverters",
    title: "GW125K-MT Commercial Inverter",
    description: "125kW three-phase inverter for mega projects",
    image: "/placeholder.svg?height=200&width=250",
    features: ["98.8% Efficiency", "Advanced SCADA", "5-Year Warranty"],
    price: "845999",
    originalPrice: "895999",
    availability: "IN STOCK",
    sku: "GW125K-MT",
    href: "/products/gw125k-mt",
  },
  // Energy Storage (5 products)
  {
    id: 11,
    category: "Energy Storage",
    title: "Lynx Home F Energy Storage",
    description: "5kWh lithium battery storage for homes",
    image: "/placeholder.svg?height=200&width=250",
    features: ["5kWh Capacity", "95% Efficiency", "15-Year Warranty"],
    price: "125999",
    originalPrice: "145999",
    availability: "IN STOCK",
    sku: "LYNX-HOME-F",
    href: "/products/lynx-home-f",
  },
  {
    id: 12,
    category: "Energy Storage",
    title: "Lynx Home U Energy Storage",
    description: "10kWh modular battery system for larger homes",
    image: "/placeholder.svg?height=200&width=250",
    features: ["10kWh Capacity", "Modular Design", "15-Year Warranty"],
    price: "225999",
    originalPrice: "255999",
    availability: "IN STOCK",
    sku: "LYNX-HOME-U",
    href: "/products/lynx-home-u",
  },
  {
    id: 13,
    category: "Energy Storage",
    title: "Lynx Home S Energy Storage",
    description: "15kWh high capacity battery system",
    image: "/placeholder.svg?height=200&width=250",
    features: ["15kWh Capacity", "Smart Management", "15-Year Warranty"],
    price: "315999",
    originalPrice: "355999",
    availability: "IN STOCK",
    sku: "LYNX-HOME-S",
    href: "/products/lynx-home-s",
  },
  {
    id: 14,
    category: "Energy Storage",
    title: "Lynx Commercial C1",
    description: "50kWh commercial battery storage system",
    image: "/placeholder.svg?height=200&width=250",
    features: ["50kWh Capacity", "Commercial Grade", "10-Year Warranty"],
    price: "895999",
    originalPrice: "985999",
    availability: "IN STOCK",
    sku: "LYNX-COMM-C1",
    href: "/products/lynx-commercial-c1",
  },
  {
    id: 15,
    category: "Energy Storage",
    title: "Lynx Commercial C2",
    description: "100kWh industrial battery storage system",
    image: "/placeholder.svg?height=200&width=250",
    features: ["100kWh Capacity", "Industrial Grade", "10-Year Warranty"],
    price: "1695999",
    originalPrice: "1885999",
    availability: "IN STOCK",
    sku: "LYNX-COMM-C2",
    href: "/products/lynx-commercial-c2",
  },
  // Utility Products (5 products)
  {
    id: 16,
    category: "Utility Products",
    title: "GW1000K-HV Utility Inverter",
    description: "1MW utility-scale inverter for solar farms",
    image: "/placeholder.svg?height=200&width=250",
    features: ["1MW Power", "99.0% Efficiency", "Grid Compliance"],
    price: "4500000",
    originalPrice: "5000000",
    availability: "IN STOCK",
    sku: "GW1000K-HV",
    href: "/products/gw1000k-hv",
  },
  {
    id: 17,
    category: "Utility Products",
    title: "GW1500K-HV Utility Inverter",
    description: "1.5MW utility-scale inverter for large solar farms",
    image: "/placeholder.svg?height=200&width=250",
    features: ["1.5MW Power", "99.1% Efficiency", "Advanced Grid Support"],
    price: "6500000",
    originalPrice: "7200000",
    availability: "IN STOCK",
    sku: "GW1500K-HV",
    href: "/products/gw1500k-hv",
  },
  {
    id: 18,
    category: "Utility Products",
    title: "GW2000K-HV Utility Inverter",
    description: "2MW utility-scale inverter for mega solar projects",
    image: "/placeholder.svg?height=200&width=250",
    features: ["2MW Power", "99.2% Efficiency", "Smart Grid Ready"],
    price: "8500000",
    originalPrice: "9200000",
    availability: "IN STOCK",
    sku: "GW2000K-HV",
    href: "/products/gw2000k-hv",
  },
  {
    id: 19,
    category: "Utility Products",
    title: "GW2500K-HV Utility Inverter",
    description: "2.5MW utility-scale inverter for utility projects",
    image: "/placeholder.svg?height=200&width=250",
    features: ["2.5MW Power", "99.3% Efficiency", "Utility Grade"],
    price: "10500000",
    originalPrice: "11500000",
    availability: "IN STOCK",
    sku: "GW2500K-HV",
    href: "/products/gw2500k-hv",
  },
  {
    id: 20,
    category: "Utility Products",
    title: "GW3000K-HV Utility Inverter",
    description: "3MW utility-scale inverter for large utility installations",
    image: "/placeholder.svg?height=200&width=250",
    features: ["3MW Power", "99.4% Efficiency", "Premium Grid Support"],
    price: "12500000",
    originalPrice: "13500000",
    availability: "IN STOCK",
    sku: "GW3000K-HV",
    href: "/products/gw3000k-hv",
  },
  // Batteries (5 products)
  {
    id: 21,
    category: "Batteries",
    title: "FHS-Zoom Lithium Battery 5.12kWh",
    description: "High-performance lithium battery module",
    image: "/placeholder.svg?height=200&width=250",
    features: ["5.12kWh Capacity", "LiFePO4 Technology", "10-Year Warranty"],
    price: "85999",
    originalPrice: "95999",
    availability: "IN STOCK",
    sku: "FHS-BATTERY-5.12",
    href: "/products/battery-5.12",
  },
  {
    id: 22,
    category: "Batteries",
    title: "FHS-Zoom Lithium Battery 10.24kWh",
    description: "High-capacity lithium battery for extended backup",
    image: "/placeholder.svg?height=200&width=250",
    features: ["10.24kWh Capacity", "LiFePO4 Technology", "10-Year Warranty"],
    price: "165999",
    originalPrice: "185999",
    availability: "IN STOCK",
    sku: "FHS-BATTERY-10.24",
    href: "/products/battery-10.24",
  },
  {
    id: 23,
    category: "Batteries",
    title: "FHS-Zoom Lithium Battery 15.36kWh",
    description: "Premium lithium battery for maximum storage",
    image: "/placeholder.svg?height=200&width=250",
    features: ["15.36kWh Capacity", "LiFePO4 Technology", "12-Year Warranty"],
    price: "245999",
    originalPrice: "275999",
    availability: "IN STOCK",
    sku: "FHS-BATTERY-15.36",
    href: "/products/battery-15.36",
  },
  {
    id: 24,
    category: "Batteries",
    title: "FHS-Zoom Commercial Battery 50kWh",
    description: "Commercial grade lithium battery system",
    image: "/placeholder.svg?height=200&width=250",
    features: ["50kWh Capacity", "Commercial Grade", "8-Year Warranty"],
    price: "785999",
    originalPrice: "875999",
    availability: "IN STOCK",
    sku: "FHS-BATTERY-50",
    href: "/products/battery-50",
  },
  {
    id: 25,
    category: "Batteries",
    title: "FHS-Zoom Industrial Battery 100kWh",
    description: "Industrial grade lithium battery for large applications",
    image: "/placeholder.svg?height=200&width=250",
    features: ["100kWh Capacity", "Industrial Grade", "8-Year Warranty"],
    price: "1485999",
    originalPrice: "1675999",
    availability: "IN STOCK",
    sku: "FHS-BATTERY-100",
    href: "/products/battery-100",
  },
  // Solar Panels (5 products)
  {
    id: 26,
    category: "Solar Panels",
    title: "FHS-Zoom 540W Solar Panel",
    description: "High-efficiency monocrystalline solar panel",
    image: "/placeholder.svg?height=200&width=250",
    features: ["540W Power", "21.5% Efficiency", "25-Year Warranty"],
    price: "18999",
    originalPrice: "22999",
    availability: "IN STOCK",
    sku: "FHS-PANEL-540",
    href: "/products/solar-panel-540",
  },
  {
    id: 27,
    category: "Solar Panels",
    title: "FHS-Zoom 450W Solar Panel",
    description: "Reliable polycrystalline solar panel for residential use",
    image: "/placeholder.svg?height=200&width=250",
    features: ["450W Power", "19.8% Efficiency", "25-Year Warranty"],
    price: "15999",
    originalPrice: "18999",
    availability: "IN STOCK",
    sku: "FHS-PANEL-450",
    href: "/products/solar-panel-450",
  },
  {
    id: 28,
    category: "Solar Panels",
    title: "FHS-Zoom 600W Solar Panel",
    description: "Premium monocrystalline solar panel for maximum output",
    image: "/placeholder.svg?height=200&width=250",
    features: ["600W Power", "22.1% Efficiency", "25-Year Warranty"],
    price: "21999",
    originalPrice: "25999",
    availability: "IN STOCK",
    sku: "FHS-PANEL-600",
    href: "/products/solar-panel-600",
  },
  {
    id: 29,
    category: "Solar Panels",
    title: "FHS-Zoom 380W Solar Panel",
    description: "Cost-effective solar panel for budget installations",
    image: "/placeholder.svg?height=200&width=250",
    features: ["380W Power", "18.5% Efficiency", "20-Year Warranty"],
    price: "12999",
    originalPrice: "15999",
    availability: "IN STOCK",
    sku: "FHS-PANEL-380",
    href: "/products/solar-panel-380",
  },
  {
    id: 30,
    category: "Solar Panels",
    title: "FHS-Zoom 320W Solar Panel",
    description: "Entry-level solar panel for small installations",
    image: "/placeholder.svg?height=200&width=250",
    features: ["320W Power", "17.2% Efficiency", "20-Year Warranty"],
    price: "10999",
    originalPrice: "13999",
    availability: "IN STOCK",
    sku: "FHS-PANEL-320",
    href: "/products/solar-panel-320",
  },
  // Monitoring Systems (5 products)
  {
    id: 31,
    category: "Monitoring Systems",
    title: "FHS-Zoom Smart Monitor Pro",
    description: "Advanced monitoring system for solar installations",
    image: "/placeholder.svg?height=200&width=250",
    features: ["Real-time Monitoring", "Mobile App", "Cloud Analytics"],
    price: "12999",
    originalPrice: "15999",
    availability: "IN STOCK",
    sku: "FHS-MONITOR-PRO",
    href: "/products/smart-monitor-pro",
  },
  {
    id: 32,
    category: "Monitoring Systems",
    title: "FHS-Zoom Basic Monitor",
    description: "Essential monitoring system for home solar systems",
    image: "/placeholder.svg?height=200&width=250",
    features: ["Basic Monitoring", "WiFi Connectivity", "Mobile App"],
    price: "7999",
    originalPrice: "9999",
    availability: "IN STOCK",
    sku: "FHS-MONITOR-BASIC",
    href: "/products/basic-monitor",
  },
  {
    id: 33,
    category: "Monitoring Systems",
    title: "FHS-Zoom Commercial Monitor",
    description: "Professional monitoring system for commercial installations",
    image: "/placeholder.svg?height=200&width=250",
    features: ["Commercial Grade", "SCADA Integration", "Advanced Analytics"],
    price: "25999",
    originalPrice: "29999",
    availability: "IN STOCK",
    sku: "FHS-MONITOR-COMM",
    href: "/products/commercial-monitor",
  },
  {
    id: 34,
    category: "Monitoring Systems",
    title: "FHS-Zoom Utility Monitor",
    description: "Enterprise monitoring system for utility-scale projects",
    image: "/placeholder.svg?height=200&width=250",
    features: ["Utility Grade", "Grid Integration", "Enterprise Analytics"],
    price: "45999",
    originalPrice: "52999",
    availability: "IN STOCK",
    sku: "FHS-MONITOR-UTILITY",
    href: "/products/utility-monitor",
  },
  {
    id: 35,
    category: "Monitoring Systems",
    title: "FHS-Zoom Weather Station",
    description: "Comprehensive weather monitoring for solar farms",
    image: "/placeholder.svg?height=200&width=250",
    features: ["Weather Monitoring", "Irradiance Sensor", "Data Logging"],
    price: "35999",
    originalPrice: "42999",
    availability: "IN STOCK",
    sku: "FHS-WEATHER-STATION",
    href: "/products/weather-station",
  },
  // Accessories (5 products)
  {
    id: 36,
    category: "Accessories",
    title: "FHS-Zoom DC Combiner Box",
    description: "Essential DC combiner box for solar installations",
    image: "/placeholder.svg?height=200&width=250",
    features: ["IP65 Protection", "16 Input Strings", "Surge Protection"],
    price: "8999",
    originalPrice: "10999",
    availability: "IN STOCK",
    sku: "FHS-COMBINER-16",
    href: "/products/dc-combiner-box",
  },
  {
    id: 37,
    category: "Accessories",
    title: "FHS-Zoom AC Distribution Box",
    description: "AC distribution box for solar system protection",
    image: "/placeholder.svg?height=200&width=250",
    features: ["AC Protection", "MCB Included", "Weather Resistant"],
    price: "6999",
    originalPrice: "8999",
    availability: "IN STOCK",
    sku: "FHS-AC-DIST",
    href: "/products/ac-distribution-box",
  },
  {
    id: 38,
    category: "Accessories",
    title: "FHS-Zoom Mounting Structure",
    description: "Galvanized mounting structure for rooftop installations",
    image: "/placeholder.svg?height=200&width=250",
    features: ["Galvanized Steel", "25-Year Warranty", "Easy Installation"],
    price: "4999",
    originalPrice: "6999",
    availability: "IN STOCK",
    sku: "FHS-MOUNT-ROOF",
    href: "/products/mounting-structure",
  },
  {
    id: 39,
    category: "Accessories",
    title: "FHS-Zoom DC Cable Kit",
    description: "High-quality DC cables for solar installations",
    image: "/placeholder.svg?height=200&width=250",
    features: ["UV Resistant", "TUV Certified", "25-Year Life"],
    price: "2999",
    originalPrice: "3999",
    availability: "IN STOCK",
    sku: "FHS-DC-CABLE",
    href: "/products/dc-cable-kit",
  },
  {
    id: 40,
    category: "Accessories",
    title: "FHS-Zoom Earthing Kit",
    description: "Complete earthing kit for solar system safety",
    image: "/placeholder.svg?height=200&width=250",
    features: ["Complete Kit", "Copper Earthing", "Safety Compliant"],
    price: "1999",
    originalPrice: "2999",
    availability: "IN STOCK",
    sku: "FHS-EARTH-KIT",
    href: "/products/earthing-kit",
  },
]

const categories = [
  "All",
  "Residential Inverters",
  "Commercial Inverters",
  "Energy Storage",
  "Utility Products",
  "Batteries",
  "Solar Panels",
  "Monitoring Systems",
  "Accessories",
]

const categoryMapping: { [key: string]: string } = {
  "residential-inverters": "Residential Inverters",
  "commercial-inverters": "Commercial Inverters",
  "energy-storage": "Energy Storage",
  "utility-products": "Utility Products",
  batteries: "Batteries",
  "solar-panels": "Solar Panels",
  monitoring: "Monitoring Systems",
  accessories: "Accessories",
}

interface ProductModalProps {
  product: (typeof allProducts)[0] | null
  isOpen: boolean
  onClose: () => void
}

function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  if (!isOpen || !product) return null

  const fullProduct = featuredProducts.find((p) => p.sku === product.sku) || product

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Top Banner */}
          <div className="bg-primary-500 text-white py-2 px-6 flex justify-between items-center text-sm">
            <span>• 10 YEARS OFFICIAL WARRANTY</span>
            <span>• FREE SHIPPING</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
            {/* Left Side - Product Images */}
            <div>
              <div className="relative mb-4">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  width={400}
                  height={400}
                  className="w-full h-80 object-cover rounded-lg"
                />
                <div className="absolute top-3 left-3 bg-secondary-500 text-white px-2 py-1 rounded text-sm font-semibold">
                  -15%
                </div>
              </div>

              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((index) => (
                  <div key={index} className="border rounded-lg overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={`${product.title} ${index}`}
                      width={80}
                      height={80}
                      className="w-full h-16 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Product Details */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-neutral-800">{product.title}</h2>

              {/* Warranty & Shipping Info */}
              <div className="mb-4">
                <div className="text-primary-600 font-semibold mb-1 text-sm">• 10 YEARS OFFICIAL WARRANTY</div>
                <div className="text-primary-600 font-semibold text-sm">• FREE SHIPPING</div>
              </div>

              {/* Features List */}
              <div className="mb-6">
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Availability & SKU */}
              <div className="mb-6 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">AVAILABILITY:</span>
                  <span className="text-primary-600 font-semibold text-sm">{product.availability}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">SKU:</span>
                  <span className="text-sm font-medium">{product.sku}</span>
                </div>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-center space-x-3">
                  <span className="text-gray-400 line-through text-lg">{product.originalPrice}</span>
                  <span className="text-3xl font-bold text-primary-600">{product.price}</span>
                </div>
                <p className="text-accent-600 font-semibold text-sm mt-1">Only 13 left in stock - order soon.</p>
              </div>

              {/* View Full Details Button */}
              <Link
                href={product.href}
                onClick={onClose}
                className="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 px-6 rounded-lg transition-colors font-semibold text-center block"
              >
                View Full Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedProduct, setSelectedProduct] = useState<(typeof allProducts)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const searchParams = useSearchParams()

  useEffect(() => {
    const categoryParam = searchParams.get("category")
    if (categoryParam && categoryMapping[categoryParam]) {
      setSelectedCategory(categoryMapping[categoryParam])
    }
  }, [searchParams])

  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
    const matchesSearch =
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value)
  }

  const openModal = (product: (typeof allProducts)[0], e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
  }

  return (
    <>
      <div className="pt-14">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">Our Products</h1>
            <p className="text-base max-w-2xl mx-auto">
              High-quality solar inverters and energy storage solutions designed for reliability and efficiency
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-6 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="w-full md:w-80">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 text-gray-600" />
                <select
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm min-w-[200px]"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results Info */}
            <div className="mt-4 text-center text-gray-600 text-sm">
              {selectedCategory === "All"
                ? `Showing all ${filteredProducts.length} products`
                : `Showing ${filteredProducts.length} products in "${selectedCategory}"`}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <Link
                  key={product.id}
                  href={product.href}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      width={250}
                      height={200}
                      className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2 bg-secondary-500 text-white px-2 py-1 rounded text-xs font-semibold">
                      -15%
                    </div>
                    <div className="absolute top-2 right-2 bg-primary-600 text-white px-2 py-1 rounded text-xs">
                      {product.category}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-base font-bold mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 mb-3 text-sm line-clamp-2">{product.description}</p>
                    <ul className="space-y-1 mb-4">
                      {product.features.slice(0, 2).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-xs">
                          <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <span className="text-gray-400 line-through text-sm">{product.originalPrice}</span>
                        <span className="text-base font-bold text-primary-600 ml-2">{product.price}</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={(e) => openModal(product, e)}
                        className="flex-1 bg-primary-500 hover:bg-primary-600 text-white px-3 py-1.5 rounded-full transition-colors text-xs flex items-center justify-center"
                      >
                        <Eye className="h-3 w-3 mr-1" />
                        Quick View
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSelectedCategory("All")
                    setSearchTerm("")
                  }}
                  className="mt-4 bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition-colors"
                >
                  Show All Products
                </button>
              </div>
            )}
          </div>
        </section>
      </div>

      <ProductModal product={selectedProduct} isOpen={isModalOpen} onClose={closeModal} />

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  )
}
