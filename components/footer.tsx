import React from "react"
import Link from "next/link"
import { Database, ShieldCheck } from "lucide-react"
import Badge from "@/components/ui/badge"
import Logo from "@/components/ui/logo"
import NewsletterForm from "@/components/newsletter-form"
import {
  FOOTER_SOLUTIONS,
  FOOTER_INDUSTRIES,
  FOOTER_RESOURCES,
  FOOTER_COMPLIANCE,
} from "@/content/footer"

// Static year constant — avoids "use client" and hydration mismatch
const CURRENT_YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer
      className="relative z-10 overflow-hidden border-t border-slate-200 bg-slate-50 pt-20 pb-10"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Decorative gradient radial bg */}
      <div
        className="pointer-events-none absolute right-1/4 bottom-0 h-[300px] w-[300px] rounded-full bg-brand-blue/5 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/3 left-1/4 h-[250px] w-[250px] rounded-full bg-brand-green/5 blur-[100px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid grid-cols-1 gap-12 border-b border-slate-200 pb-16 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          {/* Logo and Brand Column */}
          <div className="flex flex-col gap-6">
            <div className="flex justify-start">
              <Logo />
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-slate-500">
              The global business intelligence network powering sales,
              marketing, and revenue operations with verified intelligence and
              compliant lead pipelines.
            </p>

            {/* Social Icons */}
            <div
              className="flex items-center gap-4 text-slate-400"
              aria-label="Social media links"
            >
              <a
                href="https://linkedin.com"
                rel="noopener noreferrer"
                target="_blank"
                className="transition-colors hover:text-slate-900"
                aria-label="Aliign Data on LinkedIn"
              >
                <svg
                  className="h-5 w-5 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://x.com"
                rel="noopener noreferrer"
                target="_blank"
                className="transition-colors hover:text-slate-900"
                aria-label="Aliign Data on X (Twitter)"
              >
                <svg
                  className="h-4 w-4 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>

            {/* Newsletter Subscription */}
            <div className="mt-4 max-w-sm">
              <h4 className="mb-2 text-xs font-bold tracking-wider text-slate-900 uppercase">
                Subscribe to Revenue Intelligence
              </h4>
              <NewsletterForm />
            </div>
          </div>

          {/* Solutions Column */}
          <div className="flex flex-col gap-4">
            <h3 className="flex items-center gap-1.5 text-xs font-bold tracking-wider text-slate-900 uppercase">
              <Database
                className="h-3.5 w-3.5 text-brand-blue"
                aria-hidden="true"
              />
              Data Products
            </h3>
            <ul className="flex flex-col gap-2.5" role="list">
              {FOOTER_SOLUTIONS.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-xs font-medium text-slate-500 transition-all hover:text-slate-900 hover:underline"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold tracking-wider text-slate-900 uppercase">
              Target Verticals
            </h3>
            <ul className="flex flex-col gap-2.5" role="list">
              {FOOTER_INDUSTRIES.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-xs font-medium text-slate-500 transition-all hover:text-slate-900 hover:underline"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold tracking-wider text-slate-900 uppercase">
              Resources
            </h3>
            <ul className="flex flex-col gap-2.5" role="list">
              {FOOTER_RESOURCES.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-xs font-medium text-slate-500 transition-all hover:text-slate-900 hover:underline"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Compliance Column */}
          <div className="flex flex-col gap-4">
            <h3 className="flex items-center gap-1.5 text-xs font-bold tracking-wider text-slate-900 uppercase">
              <ShieldCheck
                className="h-3.5 w-3.5 text-brand-green"
                aria-hidden="true"
              />
              Trust &amp; Compliance
            </h3>
            <ul className="flex flex-col gap-2.5" role="list">
              {FOOTER_COMPLIANCE.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-xs font-medium text-slate-500 transition-all hover:text-slate-900 hover:underline"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Panel */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs text-slate-500 md:flex-row">
          <address className="not-italic">
            &copy; {CURRENT_YEAR} Aliign Data Inc. All rights reserved. Made in
            alignment with privacy frameworks.
          </address>
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="gray">SOC 2 Type II</Badge>
            <Badge variant="blue">95% Accuracy SLA</Badge>
          </div>
        </div>
      </div>
    </footer>
  )
}
