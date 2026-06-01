"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import {
  ArrowRight,
  Database,
  Shield,
  Mail,
  Building,
  Globe,
  Sparkles,
  Menu,
  ChevronDown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
  SheetFooter,
  SheetDescription,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { VisuallyHidden } from "radix-ui"
import Logo from "@/components/ui/logo"
import { usePathname } from "next/navigation"
import {
  NAV_SOLUTIONS,
  NAV_INDUSTRIES,
  NAV_RESOURCES,
} from "@/content/navigation"

// Icon map for nav solution items
const ICON_MAP: Record<string, React.ReactNode> = {
  Database: <Database className="h-5 w-5" />,
  Shield: <Shield className="h-5 w-5" />,
  Mail: <Mail className="h-5 w-5" />,
  Building: <Building className="h-5 w-5" />,
  Sparkles: <Sparkles className="h-5 w-5" />,
  Globe: <Globe className="h-5 w-5" />,
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setDropdownOpen(false)
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <>
      {/* Floating Capsule Header */}
      <header
        role="banner"
        className="fixed top-4 right-0 left-0 z-50 px-4 transition-all duration-300 md:px-8"
      >
        <div
          className={cn(
            "relative mx-auto flex max-w-7xl items-center justify-between rounded-full border border-slate-200 bg-white/95 px-6 py-2 shadow-[0_8px_30px_rgb(0,0,0,0.06)] backdrop-blur-md transition-all duration-300",
            scrolled
              ? "border-slate-200/85 bg-white/98 py-2 shadow-[0_12px_40px_rgba(15,23,42,0.08)]"
              : "border-slate-200/70 bg-white/92 py-3"
          )}
        >
          {/* Left Section: Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Middle Section: Centered Desktop Navigation */}
          <nav
            className="mx-6 hidden flex-grow items-center justify-center gap-2 lg:flex xl:gap-4"
            aria-label="Primary navigation"
          >
            {/* Home Link */}
            <Link
              href="/"
              className="rounded-md px-3 py-2 text-sm font-semibold text-slate-600 transition-colors hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-brand-blue"
            >
              Home
            </Link>

            {/* About Link */}
            <Link
              href="/#about"
              className="rounded-md px-3 py-2 text-sm font-semibold text-slate-600 transition-colors hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-brand-blue"
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                className="flex cursor-pointer items-center gap-1 rounded-md border-none bg-transparent px-3 py-2 text-sm font-semibold text-slate-600 transition-colors hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-brand-blue"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
              >
                Services
                <ChevronDown
                  className={cn(
                    "h-3.5 w-3.5 text-slate-500 transition-transform duration-300",
                    dropdownOpen && "rotate-180"
                  )}
                />
              </button>

              {/* Dropdown Content */}
              {dropdownOpen && (
                <div className="absolute top-full left-1/2 z-50 -translate-x-1/2 pt-2">
                  <div
                    className="w-[580px] rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.12)]"
                    role="menu"
                  >
                    <div className="mb-4 border-b border-slate-100 pb-2">
                      <span className="text-xs font-bold tracking-wider text-[#2563EB] uppercase">
                        Our Data Solutions
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {NAV_SOLUTIONS.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="group/item flex items-start gap-3.5 rounded-xl p-3 transition-all hover:bg-slate-50/80"
                          role="menuitem"
                        >
                          <div className="flex-shrink-0 rounded-lg bg-blue-50 p-2 text-[#2563EB] transition-all group-hover/item:scale-105 group-hover/item:bg-blue-100">
                            {item.icon ? ICON_MAP[item.icon] : null}
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-slate-900 transition-colors group-hover/item:text-[#2563EB]">
                              {item.name}
                            </h4>
                            <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-slate-500">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Why Us Link */}
            <Link
              href="/#comparison"
              className="rounded-md px-3 py-2 text-sm font-semibold text-slate-600 transition-colors hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-brand-blue"
            >
              Why Us
            </Link>

            {/* Contact Link */}
            <Link
              href="/#contact"
              className="rounded-md px-3 py-2 text-sm font-semibold text-slate-600 transition-colors hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-brand-blue"
            >
              Contact
            </Link>
          </nav>

          {/* Right Section: Desktop CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Link href="/#contact">
                <Button
                  variant="primary"
                  size="sm"
                  className="h-9 rounded-lg border-none bg-[#2563EB] px-5 text-xs font-bold text-white shadow-sm transition-colors duration-200 hover:bg-[#1D4ED8]"
                >
                  Get Quote
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <button
                  className="cursor-pointer rounded-md p-1 text-slate-600 hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-brand-blue/50 lg:hidden"
                  aria-label="Open navigation menu"
                >
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-full sm:max-w-full h-[100dvh] overflow-y-auto bg-white p-0"
              >
                <SheetHeader className="border-b border-slate-100 px-6 pt-6 pb-4">
                  <Logo />
                  <VisuallyHidden.Root>
                    <SheetTitle>Navigation Menu</SheetTitle>
                    <SheetDescription>
                      Mobile navigation menu for Aliign Data.
                    </SheetDescription>
                  </VisuallyHidden.Root>
                </SheetHeader>

                <div className="flex flex-1 flex-col gap-6 px-6 py-6">
                  {/* Solutions */}
                  <div>
                    <h3 className="mb-3 text-xs font-semibold tracking-wider text-brand-blue uppercase">
                      Solutions
                    </h3>
                    <div className="flex flex-col gap-2">
                      {NAV_SOLUTIONS.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex items-center gap-3 rounded-lg px-2 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900"
                        >
                          <span className="rounded bg-brand-blue/10 p-1 text-brand-blue">
                            {item.icon ? ICON_MAP[item.icon] : null}
                          </span>
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Industries */}
                  <div>
                    <h3 className="mb-3 text-xs font-semibold tracking-wider text-brand-green uppercase">
                      Industries
                    </h3>
                    <div className="grid grid-cols-2 gap-1">
                      {NAV_INDUSTRIES.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="rounded-lg px-2 py-1.5 text-sm font-medium text-[#0F172A] transition-colors hover:bg-slate-50 hover:text-[#10B981]"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Resources & Links */}
                  <div>
                    <h3 className="mb-3 text-xs font-semibold tracking-wider text-slate-400 uppercase">
                      Company &amp; Resources
                    </h3>
                    <div className="grid grid-cols-2 gap-1">
                      {NAV_RESOURCES.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="rounded-lg px-2 py-1.5 text-sm font-medium text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-900"
                        >
                          {item.name}
                        </Link>
                      ))}
                      <Link
                        href="/#about"
                        className="col-span-2 rounded-lg px-2 py-1.5 text-sm font-medium text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-900"
                      >
                        About
                      </Link>
                      <Link
                        href="/#contact"
                        className="col-span-2 rounded-lg px-2 py-1.5 text-sm font-medium text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-900"
                      >
                        Contact
                      </Link>
                    </div>
                  </div>
                </div>

                <SheetFooter className="border-t border-slate-100 px-6 pt-4 pb-8">
                  <Link href="/#contact" className="w-full">
                    <Button variant="primary" size="lg" className="w-full">
                      Get Quote
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  )
}
