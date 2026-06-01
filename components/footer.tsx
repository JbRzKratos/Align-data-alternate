"use client"

import React from "react"
import Link from "next/link"
import { Send, Database, ShieldCheck } from "lucide-react"
import Badge from "@/components/ui/badge"
import Logo from "@/components/ui/logo"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const solutions = [
    { name: "Technology Users Database", href: "/solutions/technology-users-database" },
    { name: "Healthcare Database", href: "/solutions/healthcare-database" },
    { name: "Professional Email Lists", href: "/solutions/professional-email-lists" },
    { name: "Industry Databases", href: "/solutions/industry-databases" },
    { name: "Data Appending Services", href: "/solutions/data-appending" },
    { name: "Regional Databases", href: "/solutions/regional-databases" },
  ]

  const industries = [
    { name: "Healthcare & Biotech", href: "/#industries" },
    { name: "Technology & Software", href: "/#industries" },
    { name: "Banking & Finance", href: "/#industries" },
    { name: "Manufacturing & Industrial", href: "/#industries" },
    { name: "Education & Academy", href: "/#industries" },
    { name: "Retail & E-commerce", href: "/#industries" },
  ]

  const resources = [
    { name: "Revenue Intelligence Blog", href: "/#resources" },
    { name: "Customer Case Studies", href: "/#results" },
    { name: "B2B Data Playbooks", href: "/#resources" },
    { name: "Frequently Asked Questions", href: "/#faq" },
  ]

  const compliance = [
    { name: "GDPR Alignment", href: "/#compliance" },
    { name: "CCPA Privacy Rights", href: "/#compliance" },
    { name: "CASL & Email Compliance", href: "/#compliance" },
    { name: "PIPEDA Safeguards", href: "/#compliance" },
    { name: "Privacy Policy", href: "/#compliance" },
    { name: "Terms of Service", href: "/#compliance" },
  ]

  return (
    <footer className="bg-slate-50 border-t border-slate-200 relative z-10 pt-20 pb-10 overflow-hidden">
      {/* Decorative gradient radial bg */}
      <div className="absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 h-[250px] w-[250px] rounded-full bg-brand-green/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-16 border-b border-slate-200">
          
          {/* Logo and Brand Column */}
          <div className="flex flex-col gap-6">
            <div className="flex justify-start">
              <Logo />
            </div>
            <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
              The global business intelligence network powering sales, marketing, and revenue operations with verified intelligence and compliant lead pipelines.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4 text-slate-400">
              <a href="#" className="hover:text-slate-900 transition-colors" aria-label="LinkedIn">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-slate-900 transition-colors" aria-label="Twitter">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-slate-900 transition-colors" aria-label="GitHub">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>

            {/* Newsletter Subscription */}
            <div className="mt-4 max-w-sm">
              <h4 className="text-xs font-bold text-slate-900 tracking-wider uppercase mb-2">
                Subscribe to Revenue Intelligence
              </h4>
              <form onSubmit={(e) => e.preventDefault()} className="relative flex items-center">
                <input
                  type="email"
                  placeholder="Enter work email"
                  required
                  className="w-full bg-white border border-slate-200 rounded-lg py-2 px-3 pr-10 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/50 transition-all"
                />
                <button
                  type="submit"
                  className="absolute right-1 p-1.5 text-slate-400 hover:text-brand-blue transition-colors cursor-pointer"
                  aria-label="Send subscribe request"
                >
                  <Send className="h-3.5 w-3.5" />
                </button>
              </form>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold text-slate-900 tracking-wider uppercase flex items-center gap-1.5">
              <Database className="h-3.5 w-3.5 text-brand-blue" />
              Data Products
            </h3>
            <ul className="flex flex-col gap-2.5">
              {solutions.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-xs text-slate-500 hover:text-slate-900 hover:underline transition-all font-medium"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold text-slate-900 tracking-wider uppercase">
              Target Verticals
            </h3>
            <ul className="flex flex-col gap-2.5">
              {industries.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-xs text-slate-500 hover:text-slate-900 hover:underline transition-all font-medium"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold text-slate-900 tracking-wider uppercase">
              Resources
            </h3>
            <ul className="flex flex-col gap-2.5">
              {resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-xs text-slate-500 hover:text-slate-900 hover:underline transition-all font-medium"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Compliance Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold text-slate-900 tracking-wider uppercase flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-brand-green" />
              Trust & Compliance
            </h3>
            <ul className="flex flex-col gap-2.5">
              {compliance.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-xs text-slate-500 hover:text-slate-900 hover:underline transition-all font-medium"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Panel */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {currentYear} Aliign Data Inc. All rights reserved. Made in alignment with privacy frameworks.
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="gray">SOC 2 Type II</Badge>
            <Badge variant="blue">95% Accuracy SLA</Badge>
          </div>
        </div>
      </div>
    </footer>
  )
}
