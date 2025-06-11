"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, Globe, ChevronDown, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import MegaMenu from "./mega-menu"

const navItems = [
  {
    title: "Home",
    href: "/",
    hasMegaMenu: false,
  },
  {
    title: "About FHS Zoom",
    href: "/about",
    hasMegaMenu: true,
  },
  {
    title: "Solutions",
    href: "/solutions",
    hasMegaMenu: true,
  },
  {
    title: "Products",
    href: "/products",
    hasMegaMenu: true,
  },
]

export default function Navbar() {
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleMouseEnter = (title: string, hasMegaMenu: boolean) => {
    if (window.innerWidth >= 1024 && hasMegaMenu) {
      setActiveMegaMenu(title)
    }
  }

  const handleMouseLeave = () => {
    setActiveMegaMenu(null)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className="relative" ref={navRef}>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "bg-white shadow-md" : "bg-white/90 backdrop-blur-sm",
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/placeholder.svg?height=32&width=100"
                alt="FHS Zoom Logo"
                width={100}
                height={32}
                className="h-7 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => (
                <div
                  key={item.title}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.title, item.hasMegaMenu)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "text-neutral-800 hover:text-primary-600 py-5 transition-colors font-medium text-sm",
                      activeMegaMenu === item.title && "text-primary-600",
                    )}
                  >
                    {item.title}
                  </Link>
                </div>
              ))}
            </nav>

            {/* Right side items */}
            <div className="flex items-center space-x-2">
              <button className="text-neutral-700 hover:text-primary-600 p-2">
                <Search className="h-4 w-4" />
              </button>
              <div className="hidden sm:flex items-center cursor-pointer">
                <Globe className="h-4 w-4 text-neutral-700" />
                <ChevronDown className="h-3 w-3 text-neutral-700 ml-1" />
              </div>
              <Link
                href="/contact"
                className="hidden md:flex items-center bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-full transition-colors text-sm"
              >
                <span className="mr-1">📞</span>
                <span>Contact</span>
              </Link>

              {/* Mobile menu button */}
              <button onClick={toggleMobileMenu} className="lg:hidden p-2 text-neutral-700 hover:text-primary-600">
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden border-t bg-white">
              <nav className="py-3 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="block px-4 py-2 text-neutral-800 hover:text-primary-600 hover:bg-neutral-50 transition-colors text-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="block mx-4 mt-3 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-full transition-colors text-center text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Desktop Mega Menu */}
      {activeMegaMenu && window.innerWidth >= 1024 && (
        <MegaMenu
          activeMenu={activeMegaMenu}
          onMouseEnter={() => setActiveMegaMenu(activeMegaMenu)}
          onMouseLeave={handleMouseLeave}
          parentRef={navRef}
        />
      )}
    </div>
  )
}
