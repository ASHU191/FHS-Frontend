"use client"
import { useState } from "react"
import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { X, Eye } from "lucide-react"

export const featuredProducts = [
  // Residential Inverters (5 products)
  {
    id: 1,
    title: "GW3000-NS Residential Inverter",
    description: "High-efficiency single-phase inverter for home solar systems",
    image: "/placeholder.svg?height=200&width=250",
    gallery: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
    ],
    features: ["97.6% Efficiency", "WiFi Monitoring", "10-Year Warranty"],
    specifications: {
      power: "3kW",
      efficiency: "97.6%",
      warranty: "10 Years",
      monitoring: "WiFi Built-in",
      protection: "IP65",
    },
    price: "45,999",
    originalPrice: "52,999",
    availability: "IN STOCK",
    sku: "GW3000-NS",
    href: "/products/gw3000-ns",
  },
  {
    id: 2,
    title: "GW5000-NS Residential Inverter",
    description: "5kW single-phase inverter with advanced monitoring",
    image: "/placeholder.svg?height=200&width=250",
    gallery: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
    ],
    features: ["97.8% Efficiency", "Smart Monitoring", "10-Year Warranty"],
    specifications: {
      power: "5kW",
      efficiency: "97.8%",
      warranty: "10 Years",
      monitoring: "WiFi Built-in",
      protection: "IP65",
    },
    price: "65,999",
    originalPrice: "75,999",
    availability: "IN STOCK",
    sku: "GW5000-NS",
    href: "/products/gw5000-ns",
  },
  {
    id: 3,
    title: "GW6000-NS Residential Inverter",
    description: "6kW single-phase inverter with premium features",
    image: "/placeholder.svg?height=200&width=250",
    gallery: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
    ],
    features: ["97.8% Efficiency", "Premium Monitoring", "10-Year Warranty"],
    specifications: {
      power: "6kW",
      efficiency: "97.8%",
      warranty: "10 Years",
      monitoring: "WiFi Built-in",
      protection: "IP65",
    },
    price: "75,999",
    originalPrice: "85,999",
    availability: "IN STOCK",
    sku: "GW6000-NS",
    href: "/products/gw6000-ns",
  },
  {
    id: 4,
    title: "GW8000-NS Residential Inverter",
    description: "8kW single-phase inverter for larger homes",
    image: "/placeholder.svg?height=200&width=250",
    gallery: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
    ],
    features: ["98.0% Efficiency", "Advanced Monitoring", "10-Year Warranty"],
    specifications: {
      power: "8kW",
      efficiency: "98.0%",
      warranty: "10 Years",
      monitoring: "WiFi Built-in",
      protection: "IP65",
    },
    price: "95,999",
    originalPrice: "1,05,999",
    availability: "IN STOCK",
    sku: "GW8000-NS",
    href: "/products/gw8000-ns",
  },
  {
    id: 5,
    title: "GW10K-NS Residential Inverter",
    description: "10kW single-phase inverter for large homes",
    image: "/placeholder.svg?height=200&width=250",
    gallery: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
    ],
    features: ["98.2% Efficiency", "Premium Monitoring", "10-Year Warranty"],
    specifications: {
      power: "10kW",
      efficiency: "98.2%",
      warranty: "10 Years",
      monitoring: "WiFi Built-in",
      protection: "IP65",
    },
    price: "1,15,999",
    originalPrice: "1,25,999",
    availability: "IN STOCK",
    sku: "GW10K-NS",
    href: "/products/gw10k-ns",
  },
  // Commercial Inverters (5 products)
  {
    id: 6,
    title: "GW25K-MT Commercial Inverter",
    description: "25kW three-phase inverter for commercial installations",
    image: "/placeholder.svg?height=200&width=250",
    gallery: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
    ],
    features: ["98.4% Efficiency", "Remote Monitoring", "5-Year Warranty"],
    specifications: {
      power: "25kW",
      efficiency: "98.4%",
      warranty: "5 Years",
      monitoring: "4G/WiFi/Ethernet",
      protection: "IP65",
    },
    price: "2,15,999",
    originalPrice: "2,45,999",
    availability: "IN STOCK",
    sku: "GW25K-MT",
    href: "/products/gw25k-mt",
  },
  {
    id: 7,
    title: "GW50K-MT Commercial Inverter",
    description: "50kW three-phase inverter for large commercial projects",
    image: "/placeholder.svg?height=200&width=250",
    gallery: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
    ],
    features: ["98.5% Efficiency", "SCADA Compatible", "5-Year Warranty"],
    specifications: {
      power: "50kW",
      efficiency: "98.5%",
      warranty: "5 Years",
      monitoring: "SCADA/4G/WiFi",
      protection: "IP65",
    },
    price: "3,85,999",
    originalPrice: "4,25,999",
    availability: "IN STOCK",
    sku: "GW50K-MT",
    href: "/products/gw50k-mt",
  },
  {
    id: 8,
    title: "GW75K-MT Commercial Inverter",
    description: "75kW three-phase inverter for industrial applications",
    image: "/placeholder.svg?height=200&width=250",
    gallery: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
    ],
    features: ["98.6% Efficiency", "Industrial Grade", "5-Year Warranty"],
    specifications: {
      power: "75kW",
      efficiency: "98.6%",
      warranty: "5 Years",
      monitoring: "SCADA/4G/WiFi",
      protection: "IP65",
    },
    price: "5,25,999",
    originalPrice: "5,75,999",
    availability: "IN STOCK",
    sku: "GW75K-MT",
    href: "/products/gw75k-mt",
  },
  {
    id: 9,
    title: "GW100K-MT Commercial Inverter",
    description: "100kW three-phase inverter for large scale projects",
    image: "/placeholder.svg?height=200&width=250",
    gallery: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
    ],
    features: ["98.7% Efficiency", "Grid Compliance", "5-Year Warranty"],
    specifications: {
      power: "100kW",
      efficiency: "98.7%",
      warranty: "5 Years",
      monitoring: "SCADA/4G/WiFi",
      protection: "IP65",
    },
    price: "6,85,999",
    originalPrice: "7,25,999",
    availability: "IN STOCK",
    sku: "GW100K-MT",
    href: "/products/gw100k-mt",
  },
  {
    id: 10,
    title: "GW125K-MT Commercial Inverter",
    description: "125kW three-phase inverter for mega projects",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300", "/placeholder.svg?height=300&width=300"],
    features: ["98.8% Efficiency", "Advanced SCADA", "5-Year Warranty"],
    specifications: {
      power: "125kW",
      efficiency: "98.8%",
      warranty: "5 Years",
      monitoring: "SCADA/4G/WiFi",
      protection: "IP65",
    },
    price: "8,45,999",
    originalPrice: "8,95,999",
    availability: "IN STOCK",
    sku: "GW125K-MT",
    href: "/products/gw125k-mt",
  },
  // Energy Storage (5 products)
  {
    id: 11,
    title: "Lynx Home F Energy Storage",
    description: "5kWh lithium battery storage for homes",
    image: "/placeholder.svg?height=200&width=250",
    gallery: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
    ],
    features: ["5kWh Capacity", "95% Round-trip Efficiency", "15-Year Warranty"],
    specifications: {
      capacity: "5kWh",
      efficiency: "95%",
      warranty: "15 Years",
      cycles: "6000+ Cycles",
      protection: "IP54",
    },
    price: "1,25,999",
    originalPrice: "1,45,999",
    availability: "IN STOCK",
    sku: "LYNX-HOME-F",
    href: "/products/lynx-home-f",
  },
  {
    id: 12,
    title: "Lynx Home U Energy Storage",
    description: "10kWh modular battery system for larger homes",
    image: "/placeholder.svg?height=200&width=250",
    gallery: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
    ],
    features: ["10kWh Capacity", "Modular Design", "15-Year Warranty"],
    specifications: {
      capacity: "10kWh",
      efficiency: "95%",
      warranty: "15 Years",
      cycles: "6000+ Cycles",
      protection: "IP54",
    },
    price: "2,25,999",
    originalPrice: "2,55,999",
    availability: "IN STOCK",
    sku: "LYNX-HOME-U",
    href: "/products/lynx-home-u",
  },
  {
    id: 13,
    title: "Lynx Home S Energy Storage",
    description: "15kWh high capacity battery system",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300", "/placeholder.svg?height=300&width=300"],
    features: ["15kWh Capacity", "Smart Management", "15-Year Warranty"],
    specifications: {
      capacity: "15kWh",
      efficiency: "95%",
      warranty: "15 Years",
      cycles: "6000+ Cycles",
      protection: "IP54",
    },
    price: "3,15,999",
    originalPrice: "3,55,999",
    availability: "IN STOCK",
    sku: "LYNX-HOME-S",
    href: "/products/lynx-home-s",
  },
  {
    id: 14,
    title: "Lynx Commercial C1",
    description: "50kWh commercial battery storage system",
    image: "/placeholder.svg?height=200&width=250",
    gallery: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
    ],
    features: ["50kWh Capacity", "Commercial Grade", "10-Year Warranty"],
    specifications: {
      capacity: "50kWh",
      efficiency: "95%",
      warranty: "10 Years",
      cycles: "6000+ Cycles",
      protection: "IP54",
    },
    price: "8,95,999",
    originalPrice: "9,85,999",
    availability: "IN STOCK",
    sku: "LYNX-COMM-C1",
    href: "/products/lynx-commercial-c1",
  },
  {
    id: 15,
    title: "Lynx Commercial C2",
    description: "100kWh industrial battery storage system",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300", "/placeholder.svg?height=300&width=300"],
    features: ["100kWh Capacity", "Industrial Grade", "10-Year Warranty"],
    specifications: {
      capacity: "100kWh",
      efficiency: "95%",
      warranty: "10 Years",
      cycles: "6000+ Cycles",
      protection: "IP54",
    },
    price: "16,95,999",
    originalPrice: "18,85,999",
    availability: "IN STOCK",
    sku: "LYNX-COMM-C2",
    href: "/products/lynx-commercial-c2",
  },
  // Utility Products (5 products)
  {
    id: 16,
    title: "GW1000K-HV Utility Inverter",
    description: "1MW utility-scale inverter for solar farms",
    image: "/placeholder.svg?height=200&width=250",
    gallery: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
    ],
    features: ["1MW Power", "99.0% Efficiency", "Grid Compliance"],
    specifications: {
      power: "1MW",
      efficiency: "99.0%",
      warranty: "5 Years",
      monitoring: "SCADA/4G/WiFi",
      protection: "IP65",
    },
    price: "45,00,000",
    originalPrice: "50,00,000",
    availability: "IN STOCK",
    sku: "GW1000K-HV",
    href: "/products/gw1000k-hv",
  },
  {
    id: 17,
    title: "GW1500K-HV Utility Inverter",
    description: "1.5MW utility-scale inverter for large solar farms",
    image: "/placeholder.svg?height=200&width=250",
    gallery: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
    ],
    features: ["1.5MW Power", "99.1% Efficiency", "Advanced Grid Support"],
    specifications: {
      power: "1.5MW",
      efficiency: "99.1%",
      warranty: "5 Years",
      monitoring: "SCADA/4G/WiFi",
      protection: "IP65",
    },
    price: "65,00,000",
    originalPrice: "72,00,000",
    availability: "IN STOCK",
    sku: "GW1500K-HV",
    href: "/products/gw1500k-hv",
  },
  {
    id: 18,
    title: "GW2000K-HV Utility Inverter",
    description: "2MW utility-scale inverter for mega solar projects",
    image: "/placeholder.svg?height=200&width=250",
    gallery: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
    ],
    features: ["2MW Power", "99.2% Efficiency", "Smart Grid Ready"],
    specifications: {
      power: "2MW",
      efficiency: "99.2%",
      warranty: "5 Years",
      monitoring: "SCADA/4G/WiFi",
      protection: "IP65",
    },
    price: "85,00,000",
    originalPrice: "92,00,000",
    availability: "IN STOCK",
    sku: "GW2000K-HV",
    href: "/products/gw2000k-hv",
  },
  {
    id: 19,
    title: "GW2500K-HV Utility Inverter",
    description: "2.5MW utility-scale inverter for utility projects",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300", "/placeholder.svg?height=300&width=300"],
    features: ["2.5MW Power", "99.3% Efficiency", "Utility Grade"],
    specifications: {
      power: "2.5MW",
      efficiency: "99.3%",
      warranty: "5 Years",
      monitoring: "SCADA/4G/WiFi",
      protection: "IP65",
    },
    price: "1,05,00,000",
    originalPrice: "1,15,00,000",
    availability: "IN STOCK",
    sku: "GW2500K-HV",
    href: "/products/gw2500k-hv",
  },
  {
    id: 20,
    title: "GW3000K-HV Utility Inverter",
    description: "3MW utility-scale inverter for large utility installations",
    image: "/placeholder.svg?height=200&width=250",
    gallery: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
    ],
    features: ["3MW Power", "99.4% Efficiency", "Premium Grid Support"],
    specifications: {
      power: "3MW",
      efficiency: "99.4%",
      warranty: "5 Years",
      monitoring: "SCADA/4G/WiFi",
      protection: "IP65",
    },
    price: "1,25,00,000",
    originalPrice: "1,35,00,000",
    availability: "IN STOCK",
    sku: "GW3000K-HV",
    href: "/products/gw3000k-hv",
  },
  // Batteries (5 products)
  {
    id: 21,
    title: "FHS-Zoom Lithium Battery 5.12kWh",
    description: "High-performance lithium battery module",
    image: "/placeholder.svg?height=200&width=250",
    gallery: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
    ],
    features: ["5.12kWh Capacity", "LiFePO4 Technology", "10-Year Warranty"],
    specifications: {
      capacity: "5.12kWh",
      efficiency: "95%",
      warranty: "10 Years",
      cycles: "6000+ Cycles",
      protection: "IP54",
    },
    price: "85,999",
    originalPrice: "95,999",
    availability: "IN STOCK",
    sku: "FHS-BATTERY-5.12",
    href: "/products/battery-5.12",
  },
  {
    id: 22,
    title: "FHS-Zoom Lithium Battery 10.24kWh",
    description: "High-capacity lithium battery for extended backup",
    image: "/placeholder.svg?height=200&width=250",
    gallery: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
    ],
    features: ["10.24kWh Capacity", "LiFePO4 Technology", "10-Year Warranty"],
    specifications: {
      capacity: "10.24kWh",
      efficiency: "95%",
      warranty: "10 Years",
      cycles: "6000+ Cycles",
      protection: "IP54",
    },
    price: "1,65,999",
    originalPrice: "1,85,999",
    availability: "IN STOCK",
    sku: "FHS-BATTERY-10.24",
    href: "/products/battery-10.24",
  },
  {
    id: 23,
    title: "FHS-Zoom Lithium Battery 15.36kWh",
    description: "Premium lithium battery for maximum storage",
    image: "/placeholder.svg?height=200&width=250",
    gallery: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
    ],
    features: ["15.36kWh Capacity", "LiFePO4 Technology", "12-Year Warranty"],
    specifications: {
      capacity: "15.36kWh",
      efficiency: "95%",
      warranty: "12 Years",
      cycles: "6000+ Cycles",
      protection: "IP54",
    },
    price: "2,45,999",
    originalPrice: "2,75,999",
    availability: "IN STOCK",
    sku: "FHS-BATTERY-15.36",
    href: "/products/battery-15.36",
  },
  {
    id: 24,
    title: "FHS-Zoom Commercial Battery 50kWh",
    description: "Commercial grade lithium battery system",
    image: "/placeholder.svg?height=200&width=250",
    gallery: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
    ],
    features: ["50kWh Capacity", "Commercial Grade", "8-Year Warranty"],
    specifications: {
      capacity: "50kWh",
      efficiency: "95%",
      warranty: "8 Years",
      cycles: "6000+ Cycles",
      protection: "IP54",
    },
    price: "7,85,999",
    originalPrice: "8,75,999",
    availability: "IN STOCK",
    sku: "FHS-BATTERY-50",
    href: "/products/battery-50",
  },
  {
    id: 25,
    title: "FHS-Zoom Industrial Battery 100kWh",
    description: "Industrial grade lithium battery for large applications",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300", "/placeholder.svg?height=300&width=300"],
    features: ["100kWh Capacity", "Industrial Grade", "8-Year Warranty"],
    specifications: {
      capacity: "100kWh",
      efficiency: "95%",
      warranty: "8 Years",
      cycles: "6000+ Cycles",
      protection: "IP54",
    },
    price: "14,85,999",
    originalPrice: "16,75,999",
    availability: "IN STOCK",
    sku: "FHS-BATTERY-100",
    href: "/products/battery-100",
  },
  // Solar Panels (5 products)
  {
    id: 26,
    title: "FHS-Zoom 540W Solar Panel",
    description: "High-efficiency monocrystalline solar panel",
    image: "/placeholder.svg?height=200&width=250",
    gallery: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
    ],
    features: ["540W Power", "21.5% Efficiency", "25-Year Warranty"],
    specifications: {
      power: "540W",
      efficiency: "21.5%",
      warranty: "25 Years",
      technology: "Monocrystalline",
      protection: "IP67",
    },
    price: "18,999",
    originalPrice: "22,999",
    availability: "IN STOCK",
    sku: "FHS-PANEL-540",
    href: "/products/solar-panel-540",
  },
  {
    id: 27,
    title: "FHS-Zoom 450W Solar Panel",
    description: "Reliable polycrystalline solar panel for residential use",
    image: "/placeholder.svg?height=200&width=250",
    gallery: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
    ],
    features: ["450W Power", "19.8% Efficiency", "25-Year Warranty"],
    specifications: {
      power: "450W",
      efficiency: "19.8%",
      warranty: "25 Years",
      technology: "Polycrystalline",
      protection: "IP67",
    },
    price: "15,999",
    originalPrice: "18,999",
    availability: "IN STOCK",
    sku: "FHS-PANEL-450",
    href: "/products/solar-panel-450",
  },
  {
    id: 28,
    title: "FHS-Zoom 600W Solar Panel",
    description: "Premium monocrystalline solar panel for maximum output",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300", "/placeholder.svg?height=300&width=300"],
    features: ["600W Power", "22.1% Efficiency", "25-Year Warranty"],
    specifications: {
      power: "600W",
      efficiency: "22.1%",
      warranty: "25 Years",
      technology: "Monocrystalline",
      protection: "IP67",
    },
    price: "21,999",
    originalPrice: "25,999",
    availability: "IN STOCK",
    sku: "FHS-PANEL-600",
    href: "/products/solar-panel-600",
  },
  {
    id: 29,
    title: "FHS-Zoom 380W Solar Panel",
    description: "Cost-effective solar panel for budget installations",
    image: "/placeholder.svg?height=200&width=250",
    gallery: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
    ],
    features: ["380W Power", "18.5% Efficiency", "20-Year Warranty"],
    specifications: {
      power: "380W",
      efficiency: "18.5%",
      warranty: "20 Years",
      technology: "Polycrystalline",
      protection: "IP67",
    },
    price: "12,999",
    originalPrice: "15,999",
    availability: "IN STOCK",
    sku: "FHS-PANEL-380",
    href: "/products/solar-panel-380",
  },
  {
    id: 30,
    title: "FHS-Zoom 320W Solar Panel",
    description: "Entry-level solar panel for small installations",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300", "/placeholder.svg?height=300&width=300"],
    features: ["320W Power", "17.2% Efficiency", "20-Year Warranty"],
    specifications: {
      power: "320W",
      efficiency: "17.2%",
      warranty: "20 Years",
      technology: "Polycrystalline",
      protection: "IP67",
    },
    price: "10,999",
    originalPrice: "13,999",
    availability: "IN STOCK",
    sku: "FHS-PANEL-320",
    href: "/products/solar-panel-320",
  },
  // Monitoring Systems (5 products)
  {
    id: 31,
    title: "FHS-Zoom Smart Monitor Pro",
    description: "Advanced monitoring system for solar installations",
    image: "/placeholder.svg?height=200&width=250",
    gallery: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
    ],
    features: ["Real-time Monitoring", "Mobile App", "Cloud Analytics"],
    specifications: {
      connectivity: "WiFi/4G",
      monitoring: "Real-time",
      warranty: "5 Years",
      compatibility: "Universal",
      protection: "IP65",
    },
    price: "12,999",
    originalPrice: "15,999",
    availability: "IN STOCK",
    sku: "FHS-MONITOR-PRO",
    href: "/products/smart-monitor-pro",
  },
  {
    id: 32,
    title: "FHS-Zoom Basic Monitor",
    description: "Essential monitoring system for home solar systems",
    image: "/placeholder.svg?height=200&width=250",
    gallery: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
    ],
    features: ["Basic Monitoring", "WiFi Connectivity", "Mobile App"],
    specifications: {
      connectivity: "WiFi",
      monitoring: "Basic",
      warranty: "3 Years",
      compatibility: "Universal",
      protection: "IP54",
    },
    price: "7,999",
    originalPrice: "9,999",
    availability: "IN STOCK",
    sku: "FHS-MONITOR-BASIC",
    href: "/products/basic-monitor",
  },
  {
    id: 33,
    title: "FHS-Zoom Commercial Monitor",
    description: "Professional monitoring system for commercial installations",
    image: "/placeholder.svg?height=200&width=250",
    gallery: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
    ],
    features: ["Commercial Grade", "SCADA Integration", "Advanced Analytics"],
    specifications: {
      connectivity: "Ethernet/4G",
      monitoring: "Professional",
      warranty: "5 Years",
      compatibility: "Commercial",
      protection: "IP65",
    },
    price: "25,999",
    originalPrice: "29,999",
    availability: "IN STOCK",
    sku: "FHS-MONITOR-COMM",
    href: "/products/commercial-monitor",
  },
  {
    id: 34,
    title: "FHS-Zoom Utility Monitor",
    description: "Enterprise monitoring system for utility-scale projects",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300", "/placeholder.svg?height=300&width=300"],
    features: ["Utility Grade", "Grid Integration", "Enterprise Analytics"],
    specifications: {
      connectivity: "Fiber/Ethernet",
      monitoring: "Enterprise",
      warranty: "7 Years",
      compatibility: "Utility",
      protection: "IP65",
    },
    price: "45,999",
    originalPrice: "52,999",
    availability: "IN STOCK",
    sku: "FHS-MONITOR-UTILITY",
    href: "/products/utility-monitor",
  },
  {
    id: 35,
    title: "FHS-Zoom Weather Station",
    description: "Comprehensive weather monitoring for solar farms",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300", "/placeholder.svg?height=300&width=300"],
    features: ["Weather Monitoring", "Irradiance Sensor", "Data Logging"],
    specifications: {
      sensors: "Multi-sensor",
      monitoring: "Weather",
      warranty: "5 Years",
      compatibility: "Universal",
      protection: "IP67",
    },
    price: "35,999",
    originalPrice: "42,999",
    availability: "IN STOCK",
    sku: "FHS-WEATHER-STATION",
    href: "/products/weather-station",
  },
  // Accessories (5 products)
  {
    id: 36,
    title: "FHS-Zoom DC Combiner Box",
    description: "Essential DC combiner box for solar installations",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300", "/placeholder.svg?height=300&width=300"],
    features: ["IP65 Protection", "16 Input Strings", "Surge Protection"],
    specifications: {
      inputs: "16 Strings",
      protection: "IP65",
      warranty: "5 Years",
      rating: "1000V DC",
      certification: "IEC Certified",
    },
    price: "8,999",
    originalPrice: "10,999",
    availability: "IN STOCK",
    sku: "FHS-COMBINER-16",
    href: "/products/dc-combiner-box",
  },
  {
    id: 37,
    title: "FHS-Zoom AC Distribution Box",
    description: "AC distribution box for solar system protection",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300", "/placeholder.svg?height=300&width=300"],
    features: ["AC Protection", "MCB Included", "Weather Resistant"],
    specifications: {
      protection: "AC Distribution",
      rating: "415V AC",
      warranty: "3 Years",
      mcb: "Included",
      certification: "IS Certified",
    },
    price: "6,999",
    originalPrice: "8,999",
    availability: "IN STOCK",
    sku: "FHS-AC-DIST",
    href: "/products/ac-distribution-box",
  },
  {
    id: 38,
    title: "FHS-Zoom Mounting Structure",
    description: "Galvanized mounting structure for rooftop installations",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300", "/placeholder.svg?height=300&width=300"],
    features: ["Galvanized Steel", "25-Year Warranty", "Easy Installation"],
    specifications: {
      material: "Galvanized Steel",
      coating: "Hot Dip Galvanized",
      warranty: "25 Years",
      windload: "180 kmph",
      certification: "IS Certified",
    },
    price: "4,999",
    originalPrice: "6,999",
    availability: "IN STOCK",
    sku: "FHS-MOUNT-ROOF",
    href: "/products/mounting-structure",
  },
  {
    id: 39,
    title: "FHS-Zoom DC Cable Kit",
    description: "High-quality DC cables for solar installations",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300", "/placeholder.svg?height=300&width=300"],
    features: ["UV Resistant", "TUV Certified", "25-Year Life"],
    specifications: {
      rating: "1500V DC",
      insulation: "XLPE",
      warranty: "25 Years",
      temperature: "-40°C to +90°C",
      certification: "TUV Certified",
    },
    price: "2,999",
    originalPrice: "3,999",
    availability: "IN STOCK",
    sku: "FHS-DC-CABLE",
    href: "/products/dc-cable-kit",
  },
  {
    id: 40,
    title: "FHS-Zoom Earthing Kit",
    description: "Complete earthing kit for solar system safety",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300", "/placeholder.svg?height=300&width=300"],
    features: ["Complete Kit", "Copper Earthing", "Safety Compliant"],
    specifications: {
      material: "Copper",
      resistance: "<1 Ohm",
      warranty: "10 Years",
      components: "Complete Kit",
      certification: "IS Certified",
    },
    price: "1,999",
    originalPrice: "2,999",
    availability: "IN STOCK",
    sku: "FHS-EARTH-KIT",
    href: "/products/earthing-kit",
  },
]

interface ProductModalProps {
  product: (typeof featuredProducts)[0] | null
  isOpen: boolean
  onClose: () => void
}

function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  if (!isOpen || !product) return null

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
            <span>• {product.specifications.warranty || "10 YEARS"} OFFICIAL WARRANTY</span>
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
                {product.gallery.map((img, index) => (
                  <div key={index} className="border rounded-lg overflow-hidden">
                    <Image
                      src={img || "/placeholder.svg"}
                      alt={`${product.title} ${index + 1}`}
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
                <div className="text-primary-600 font-semibold mb-1 text-sm">
                  • {product.specifications.warranty || "10 YEARS"} OFFICIAL WARRANTY
                </div>
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

export default function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState<(typeof featuredProducts)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (product: (typeof featuredProducts)[0], e: React.MouseEvent) => {
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
      <section className="py-10 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3 text-neutral-800">Featured Products</h2>
            <p className="text-base text-neutral-600 max-w-2xl mx-auto">
              Discover our range of high-quality solar inverters and energy storage solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.slice(0, 6).map((product, index) => (
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
                </div>
                <div className="p-4">
                  <h3 className="text-base font-bold mb-2 group-hover:text-primary-600 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-neutral-600 mb-3 text-sm">{product.description}</p>
                  <ul className="space-y-1 mb-4">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></span>
                        <span className="text-xs">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <span className="text-gray-400 line-through text-xs">{product.originalPrice}</span>
                      <span className="text-base font-bold text-primary-600 ml-2">{product.price}</span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={(e) => openModal(product, e)}
                      className="flex-1 bg-primary-500 hover:bg-primary-600 text-white px-3 py-1.5 rounded-full transition-colors text-xs text-center cursor-pointer flex items-center justify-center"
                    >
                      <Eye className="h-3 w-3 mr-1" />
                      Quick View
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/products"
              className="inline-flex items-center bg-neutral-800 hover:bg-neutral-900 text-white px-5 py-2 rounded-full transition-colors text-sm"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

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
      `}</style>
    </>
  )
}
