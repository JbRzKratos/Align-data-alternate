"use client"

import React, { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X, ArrowRight, Shield, Database, Sparkles, Building, Globe, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Logo from "@/components/ui/logo"

interface RouteItem {
  name: string
  href: string
  description?: string
  icon?: React.ReactNode
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const solutions: RouteItem[] = [
    {
      name: "Technology Users Database",
      href: "/solutions/technology-users-database",
      description: "Target companies using specific hardware or software stacks.",
      icon: <Database className="h-5 w-5 text-brand-blue" />,
    },
    {
      name: "Healthcare Database",
      href: "/solutions/healthcare-database",
      description: "Access verified doctors, hospital administrators, and practitioners.",
      icon: <Shield className="h-5 w-5 text-brand-blue" />,
    },
    {
      name: "Professional Email Lists",
      href: "/solutions/professional-email-lists",
      description: "Premium corporate contacts segmentable by title and seniority.",
      icon: <Mail className="h-5 w-5 text-brand-blue" />,
    },
    {
      name: "Industry Databases",
      href: "/solutions/industry-databases",
      description: "Deep coverage across specific trade, commerce, and manufacturing fields.",
      icon: <Building className="h-5 w-5 text-brand-blue" />,
    },
    {
      name: "Data Appending",
      href: "/solutions/data-appending",
      description: "Clean, match, and enrich your existing contacts with 95% accuracy.",
      icon: <Sparkles className="h-5 w-5 text-brand-blue" />,
    },
    {
      name: "Regional Databases",
      href: "/solutions/regional-databases",
      description: "Global geographic data segments across 100+ countries.",
      icon: <Globe className="h-5 w-5 text-brand-blue" />,
    },
  ]

  const industries = [
    { name: "Healthcare", href: "/#industries" },
    { name: "Technology", href: "/#industries" },
    { name: "Finance", href: "/#industries" },
    { name: "Manufacturing", href: "/#industries" },
    { name: "Education", href: "/#industries" },
    { name: "Retail", href: "/#industries" },
    { name: "Construction", href: "/#industries" },
    { name: "Logistics", href: "/#industries" },
  ]

  const resources = [
    { name: "Blog", href: "/#resources" },
    { name: "Case Studies", href: "/#results" },
    { name: "Guides", href: "/#resources" },
    { name: "FAQ", href: "/#faq" },
  ]

  const handleDropdownHover = (menu: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setActiveDropdown(menu)
  }

  const handleDropdownLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
  }

  // Clear timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-white/90 backdrop-blur-md border-slate-200/65 py-3 shadow-sm"
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          {/* Solutions Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleDropdownHover("solutions")}
            onMouseLeave={handleDropdownLeave}
          >
            <button className="flex items-center gap-1 text-sm font-semibold text-slate-600 hover:text-slate-900 py-2 transition-colors cursor-pointer">
              Solutions
              <ChevronDown
                className={cn(
                  "h-4 w-4 text-slate-500 transition-transform duration-200",
                  activeDropdown === "solutions" && "rotate-180 text-brand-blue"
                )}
              />
            </button>
            {activeDropdown === "solutions" && (
              <div 
                className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[580px] z-50 animate-in fade-in slide-in-from-top-3 duration-250"
                onMouseEnter={() => handleDropdownHover("solutions")}
                onMouseLeave={handleDropdownLeave}
              >
                <div className="rounded-xl bg-white border border-slate-200/80 p-6 shadow-2xl grid grid-cols-2 gap-4">
                  <div className="col-span-2 pb-2 border-b border-slate-100 mb-1">
                    <span className="text-xs font-semibold text-[#2563EB] tracking-wider uppercase">
                      Our Data Solutions
                    </span>
                  </div>
                  {solutions.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group/item"
                    >
                      <div className="p-2 rounded bg-blue-50 text-[#2563EB] group-hover/item:bg-blue-100 transition-colors">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900 group-hover/item:text-[#2563EB] transition-colors">
                          {item.name}
                        </h4>
                        <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Industries Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleDropdownHover("industries")}
            onMouseLeave={handleDropdownLeave}
          >
            <button className="flex items-center gap-1 text-sm font-semibold text-slate-600 hover:text-slate-900 py-2 transition-colors cursor-pointer">
              Industries
              <ChevronDown
                className={cn(
                  "h-4 w-4 text-slate-500 transition-transform duration-200",
                  activeDropdown === "industries" && "rotate-180 text-brand-blue"
                )}
              />
            </button>
            {activeDropdown === "industries" && (
              <div 
                className="absolute top-full left-0 pt-2 w-[240px] z-50 animate-in fade-in slide-in-from-top-3 duration-250"
                onMouseEnter={() => handleDropdownHover("industries")}
                onMouseLeave={handleDropdownLeave}
              >
                <div className="rounded-xl bg-white border border-slate-200/80 p-4 shadow-2xl grid grid-cols-1 gap-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 pb-2 border-b border-slate-100 mb-1">
                    Target Industries
                  </span>
                  {industries.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-sm text-slate-600 hover:text-[#10B981] px-3 py-2 rounded-lg hover:bg-slate-50 transition-all font-medium"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Resources Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleDropdownHover("resources")}
            onMouseLeave={handleDropdownLeave}
          >
            <button className="flex items-center gap-1 text-sm font-semibold text-slate-600 hover:text-slate-900 py-2 transition-colors cursor-pointer">
              Resources
              <ChevronDown
                className={cn(
                  "h-4 w-4 text-slate-500 transition-transform duration-200",
                  activeDropdown === "resources" && "rotate-180 text-brand-blue"
                )}
              />
            </button>
            {activeDropdown === "resources" && (
              <div 
                className="absolute top-full left-0 pt-2 w-[200px] z-50 animate-in fade-in slide-in-from-top-3 duration-250"
                onMouseEnter={() => handleDropdownHover("resources")}
                onMouseLeave={handleDropdownLeave}
              >
                <div className="rounded-xl bg-white border border-slate-200/80 p-4 shadow-2xl grid grid-cols-1 gap-1">
                  {resources.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-sm text-slate-600 hover:text-[#2563EB] px-3 py-2 rounded-lg hover:bg-slate-50 transition-all font-medium"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/#faq" className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">
            About
          </Link>
          <Link href="/#contact" className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">
            Contact
          </Link>
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Link href="/#contact">
            <Button variant="secondary" className="px-5">
              Request Sample Data
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-slate-600 hover:text-slate-900 cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] bg-white border-t border-slate-200 z-45 p-6 flex flex-col overflow-y-auto">
          {/* Solutions Section */}
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-brand-blue tracking-wider uppercase mb-3">
              Solutions
            </h3>
            <div className="grid grid-cols-1 gap-2 pl-2">
              {solutions.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 py-2 text-sm text-slate-600 hover:text-slate-900 transition-colors font-medium"
                >
                  <span className="p-1 rounded bg-brand-blue/10">{item.icon}</span>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Industries Section */}
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-brand-green tracking-wider uppercase mb-3">
              Industries
            </h3>
            <div className="grid grid-cols-2 gap-2 pl-2">
              {industries.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="py-1 text-sm text-slate-500 hover:text-slate-900 transition-colors font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Resources & Links Section */}
          <div className="mb-8">
            <h3 className="text-xs font-semibold text-slate-400 tracking-wider uppercase mb-3">
              Company & Resources
            </h3>
            <div className="grid grid-cols-2 gap-2 pl-2">
              {resources.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="py-1 text-sm text-slate-500 hover:text-slate-900 transition-colors font-medium"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/#faq"
                onClick={() => setIsOpen(false)}
                className="py-1 text-sm text-slate-500 hover:text-slate-900 transition-colors col-span-2 font-medium"
              >
                About
              </Link>
              <Link
                href="/#contact"
                onClick={() => setIsOpen(false)}
                className="py-1 text-sm text-slate-500 hover:text-slate-900 transition-colors col-span-2 font-medium"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* CTA Mobile */}
          <div className="mt-auto">
            <Link href="/#contact" onClick={() => setIsOpen(false)} className="w-full">
              <Button variant="primary" size="lg" className="w-full">
                Request Sample Data
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
