import React from "react"
import Link from "next/link"
import Image from "next/image"
import Script from "next/script"
import type { Metadata } from "next"
import {
  Database,
  Shield,
  Cpu,
  Hammer,
  Wrench,
  Truck,
  CheckCircle,
  Check,
  Mail,
  Filter,
  UserCheck,
  LineChart,
  Award,
  Clock,
  Zap,
  Building2,
  Users,
  MapPin,
  Sparkles,
  ArrowRight,
  Factory,
  ChevronRight,
  Phone,
  Layers,
  Share2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Badge from "@/components/ui/badge"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import InteractiveGlobe from "@/components/interactive-globe"
import SectionHeader from "@/components/sections/SectionHeader"
import FAQSection from "@/components/sections/FAQSection"
import LeadForm from "@/components/lead-form"
import CTASection from "@/components/sections/CTASection"

export const metadata: Metadata = {
  title: "Manufacturing Industry Email List 2026 | Verified B2B Contacts",
  description:
    "Get direct access to 8M+ verified decision makers, C-level executives, plant managers, and procurement leaders across 150K+ manufacturing companies. 95% email accuracy guaranteed. GDPR & CCPA compliant.",
  keywords:
    "manufacturing email list, b2b manufacturing database, plant managers email list, automotive manufacturing contacts, aerospace and defense b2b leads, procurement directors email list, verified b2b emails 2026",
  alternates: {
    canonical: "https://www.aliigndata.com",
  },
  openGraph: {
    title: "Manufacturing Industry Email List 2026 | Verified B2B Contacts",
    description:
      "Reach C-level executives, plant managers, and procurement heads with our verified Manufacturing Email Database of 8M+ contacts. 95% accuracy guaranteed.",
    url: "https://www.aliigndata.com",
    images: [
      {
        url: "https://www.aliigndata.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aliign Data — Manufacturing Industry Email List 2026",
      },
    ],
  },
}

// Schema.org JSON-LD data for SEO & Generative Engine Optimization (GEO)
const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Aligndata",
  url: "https://www.aliigndata.com",
  logo: "https://www.aliigndata.com/logo.png",
  description:
    "Provider of highly verified B2B manufacturing industry email lists and revenue intelligence databases.",
  sameAs: [
    "https://www.linkedin.com/company/aliigndata",
  ],
}

const MANUFACTURING_FAQS = [
  {
    q: "What job titles are included in the manufacturing email list?",
    a: "Our database contains direct contact details for Plant Managers, Procurement Managers, Operations Directors, VP Manufacturing, Supply Chain Managers, Engineering Heads, and C-Level Executives.",
  },
  {
    q: "Is the data customizable?",
    a: "Yes. You can customize your list using over 50 filter criteria including industry sub-sector, company size, revenue, geographic location, job title, and specific production capabilities.",
  },
  {
    q: "How accurate is the data?",
    a: "We maintain a strict 95% accuracy guarantee. All email addresses and direct dials undergo double verification (machine validation + human dial tests) before delivery.",
  },
  {
    q: "Can I get a sample?",
    a: "Absolutely. We offer a free, custom-tailored sample based on your specific target market criteria. Request your sample via our quote form.",
  },
]

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: MANUFACTURING_FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
}

// Custom Manufacturing Copy constants
const INDUSTRIES_COVERED = [
  {
    name: "Heavy Manufacturing",
    count: "2.1M+ contacts",
    icon: <Hammer className="h-5 w-5 text-[#2563EB]" />,
    sectors: [
      "Automotive Manufacturing",
      "Aerospace & Defense",
      "Machinery & Equipment",
      "Metal Fabrication",
      "Chemical Manufacturing",
    ],
    bg: "bg-blue-50/50",
  },
  {
    name: "Consumer Goods & FMCG",
    count: "3.5M+ contacts",
    icon: <Truck className="h-5 w-5 text-[#10B981]" />,
    sectors: [
      "Food & Beverage Production",
      "Textiles & Apparel",
      "Household Appliances",
      "Furniture Manufacturing",
      "Electronics Assembly",
    ],
    bg: "bg-emerald-50/30",
  },
  {
    name: "High-Tech Manufacturing",
    count: "1.2M+ contacts",
    icon: <Cpu className="h-5 w-5 text-[#2563EB]" />,
    sectors: [
      "Semiconductor Manufacturing",
      "Medical Device Manufacturing",
      "Robotics & Automation",
      "3D Printing & Additive Manufacturing",
    ],
    bg: "bg-blue-50/50",
  },
  {
    name: "Industrial Services",
    count: "1.8M+ contacts",
    icon: <Wrench className="h-5 w-5 text-[#10B981]" />,
    sectors: [
      "Packaging & Labeling",
      "Plant Engineering & Maintenance",
      "Quality Control & Testing",
      "Industrial Design Services",
    ],
    bg: "bg-emerald-50/30",
  },
]

const RECORD_FIELDS = [
  {
    field: "Verified Business Email Address",
    desc: "100% SMTP verified corporate emails with active inbox validation.",
    icon: <Mail className="h-4 w-4 text-[#2563EB]" />,
  },
  {
    field: "Full Name & Accurate Job Title",
    desc: "Vetted seniority classification matching official organizational charts.",
    icon: <UserCheck className="h-4 w-4 text-[#2563EB]" />,
  },
  {
    field: "Company Name & Industry Classification",
    desc: "Standard SIC and NAICS code categorization for clean database sorting.",
    icon: <Building2 className="h-4 w-4 text-[#2563EB]" />,
  },
  {
    field: "Direct Phone Number",
    desc: "Direct desk lines and corporate mobile extensions (where available).",
    icon: <Phone className="h-4 w-4 text-[#2563EB]" />,
  },
  {
    field: "Company Location Details",
    desc: "Complete business addresses covering City, State, Country, and ZIP codes.",
    icon: <MapPin className="h-4 w-4 text-[#2563EB]" />,
  },
  {
    field: "Company Size & Revenue Range",
    desc: "Employee bandwidth and annual corporate revenue ranges for target scaling.",
    icon: <LineChart className="h-4 w-4 text-[#2563EB]" />,
  },
  {
    field: "Production Capabilities & Facility Type",
    desc: "Insightful markers on facility setups, floor sizing, and equipment output.",
    icon: <Layers className="h-4 w-4 text-[#2563EB]" />,
  },
  {
    field: "LinkedIn Profile URL (Optional)",
    desc: "Direct social profiles to facilitate multi-channel touchpoints and warming.",
    icon: <Share2 className="h-4 w-4 text-[#2563EB]" />,
  },
]

const COMPARISON_ROWS = [
  {
    feature: "Data Accuracy",
    advantage: "95% verified + quarterly refresh",
    competitor: "65% - 75% average (rapid domain decay)",
  },
  {
    feature: "Compliance",
    advantage: "100% GDPR & CCPA Compliant",
    competitor: "Unvetted lists with heavy legal liabilities",
  },
  {
    feature: "Customization",
    advantage: "Filter by 50+ criteria",
    competitor: "Pre-packaged lists with static exports only",
  },
  {
    feature: "Delivery Time",
    advantage: "24–48 hours",
    competitor: "5 to 7 business days or slow automated extraction",
  },
  {
    feature: "Sample Available",
    advantage: "Yes – Free custom sample on request",
    competitor: "Paid samples only or generic dummy files",
  },
  {
    feature: "Support",
    advantage: "Dedicated account manager",
    competitor: "Automated ticketing portals and support queues",
  },
]

const KEY_BENEFITS = [
  {
    title: "Reduce Bounce Rates Dramatically",
    desc: "Our double-verified data lowers marketing bounce rates under 5%, keeping your sender domain reputational score clean.",
  },
  {
    title: "Reach Actual Decision-Makers",
    desc: "Bypass standard gatekeepers and cold switchboards to pitch C-suite, operations, and procurement heads directly.",
  },
  {
    title: "Shorten Sales Cycles",
    desc: "Engage prospects who have direct purchasing authority and active project requirements in their factories.",
  },
  {
    title: "Scale Outreach Confidently",
    desc: "Inject verified, clean data regularly into your outbound engines to fuel robust, long-term pipelines.",
  },
  {
    title: "Stay Fully Compliant",
    desc: "Maintain strict compliance standards. All contact profiles are fully aligned with international data laws.",
  },
]

const WHO_SHOULD_USE = [
  {
    name: "B2B SaaS & Software Companies",
    desc: "Target manufacturers with software integrations, ERP tools, supply chain management, and IoT tracking solutions.",
    icon: <Cpu className="h-5 w-5 text-[#2563EB]" />,
  },
  {
    name: "Industrial Equipment Suppliers",
    desc: "Pitch raw machines, high-precision tools, tooling lines, safety accessories, and heavy industrial hardware directly.",
    icon: <Factory className="h-5 w-5 text-[#2563EB]" />,
  },
  {
    name: "Raw Material & Component Providers",
    desc: "Connect directly with purchasing directors in need of metals, chemicals, resins, fabrics, or electronics components.",
    icon: <Layers className="h-5 w-5 text-[#2563EB]" />,
  },
  {
    name: "Consulting & Service Firms",
    desc: "Reach decision-makers in need of plant modernization, operations auditing, safety training, or ISO certifications.",
    icon: <UserCheck className="h-5 w-5 text-[#2563EB]" />,
  },
  {
    name: "Marketing Agencies Serving Manufacturers",
    desc: "Empower your industrial client accounts with highly segmented, accurate email datasets to maximize campaign ROI.",
    icon: <Sparkles className="h-5 w-5 text-[#2563EB]" />,
  },
]

const RELATED_LISTS = [
  {
    title: "Construction Industry Email List",
    desc: "Direct access to general contractors, project engineers, and construction directors.",
    contacts: "5.4M+ Contacts",
  },
  {
    title: "Oil & Gas Industry Email List",
    desc: "Verified contacts across drilling, extraction, refining, and operations sectors.",
    contacts: "3.2M+ Contacts",
  },
  {
    title: "Technology Decision Makers List",
    desc: "Reach CTOs, IT directors, and system administrators looking to purchase B2B tools.",
    contacts: "12M+ Contacts",
  },
  {
    title: "Healthcare Industry Email List",
    desc: "NPI-verified records covering clinical administrators, doctors, and procurement teams.",
    contacts: "9.6M+ Contacts",
  },
]

export default function Page() {
  return (
    <>
      {/* Schema Injection for SEO & GEO */}
      <Script
        id="org-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <Navbar />

      <main
        id="main-content"
        className="min-h-screen overflow-hidden bg-white pt-20 text-[#0F172A]"
      >
        {/* ─── SECTION 1: HERO & DATABASE HIGHLIGHTS ─────────────────────── */}
        <section
          className="relative flex min-h-[calc(100vh-80px)] items-center justify-center bg-white py-12 md:py-20"
          aria-labelledby="hero-heading"
        >
          <div
            className="grid-bg pointer-events-none absolute inset-0 opacity-100"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute top-1/4 left-1/4 h-[350px] w-[350px] rounded-full bg-blue-100/30 blur-[130px]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute right-1/4 bottom-1/4 h-[300px] w-[300px] rounded-full bg-emerald-100/20 blur-[120px]"
            aria-hidden="true"
          />

          <div className="z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 md:px-8 lg:grid-cols-12">
            {/* Left Column: Core Copy */}
            <div className="flex flex-col gap-6 text-left lg:col-span-6">
              <div className="flex justify-start">
                <Badge
                  variant="blue"
                  icon={
                    <Sparkles
                      className="text-emerald-600"
                      aria-hidden="true"
                    />
                  }
                >
                  VERIFIED B2B MANUFACTURING DATABASE
                </Badge>
              </div>
              <h1
                id="hero-heading"
                className="font-heading text-4xl leading-tight font-extrabold tracking-tight text-[#0F172A] md:text-5xl lg:text-6xl"
              >
                Manufacturing Industry{" "}
                <span className="text-[#2563EB]">
                  Email List 2026
                </span>
              </h1>
              <p className="font-heading text-lg font-bold text-slate-800 md:text-xl">
                Verified B2B Manufacturing Contacts – 8M+ Decision Makers
              </p>
              <p className="max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
                Reach the right people in manufacturing — faster and with higher accuracy.
                In an industry driven by precision, your outreach shouldn’t rely on guesswork. Our verified Manufacturing Industry Email List gives you direct access to plant managers, procurement directors, operations leaders, and C-level executives who make real purchasing decisions.
              </p>

              <div className="mt-2 flex flex-col items-center gap-4 sm:flex-row">
                <Link href="#contact" className="w-full sm:w-auto">
                  <Button variant="primary" size="lg" className="w-full">
                    Get Custom Quote
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </Link>
                <Link href="#contact" className="w-full sm:w-auto">
                  <Button variant="secondary" size="lg" className="w-full">
                    Request Free Sample
                  </Button>
                </Link>
              </div>

              {/* Database Highlights Row */}
              <div
                className="mt-4 grid grid-cols-2 gap-6 border-t border-slate-200 pt-8 sm:grid-cols-4"
                aria-label="Database Highlights"
              >
                {[
                  { value: "8M+", label: "Verified Contacts" },
                  { value: "150K+", label: "Companies" },
                  { value: "95%", label: "Accuracy Rate" },
                  { value: "May 2026", label: "Last Updated" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-heading text-xl font-extrabold text-slate-900">
                      {stat.value}
                    </p>
                    <p className="mt-0.5 font-mono text-[10px] tracking-wider text-slate-500 uppercase">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Dashboard Mockup & Core Stat Board */}
            <div className="flex flex-col gap-6 lg:col-span-6">
              <div
                className="relative h-[300px] w-full overflow-hidden rounded-2xl border border-slate-200/60 bg-gradient-to-b from-[#F8FAFC] to-[#F1F5F9] p-2 shadow-sm md:h-[400px]"
                aria-hidden="true"
              >
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2 rounded-full border border-slate-200/65 bg-white/85 px-3 py-1 font-mono text-[10px] text-[#2563EB] shadow-sm backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
                  REVENUE INTELLIGENCE STREAMING
                </div>
                <div className="absolute right-4 bottom-4 z-10 font-mono text-[10px] text-slate-400">
                  8M+ MFG NODES // 95% GUARANTEE
                </div>
                <div className="relative h-full w-full overflow-hidden rounded-xl">
                  <Image
                    src="/hero_dashboard.png"
                    alt="Manufacturing Revenue Intelligence Dashboard"
                    fill
                    priority
                    unoptimized
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Core Advantage Stats Block */}
              <div className="grid grid-cols-3 gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 text-center shadow-xs">
                <div>
                  <p className="font-heading text-lg font-extrabold text-[#2563EB] md:text-xl">95%</p>
                  <p className="text-[10px] font-medium tracking-wide text-slate-500 uppercase">Deliverability SLA</p>
                </div>
                <div className="border-x border-slate-200">
                  <p className="font-heading text-lg font-extrabold text-slate-900 md:text-xl">8M+</p>
                  <p className="text-[10px] font-medium tracking-wide text-slate-500 uppercase">Decision Makers</p>
                </div>
                <div>
                  <p className="font-heading text-lg font-extrabold text-[#10B981] md:text-xl">100%</p>
                  <p className="text-[10px] font-medium tracking-wide text-slate-500 uppercase">GDPR Compliant</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section
          className="border-y border-slate-200 bg-[#F8FAFC] py-12"
          aria-label="Trusted by global operations teams"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <p className="mb-8 text-center text-xs font-bold tracking-widest text-slate-400 uppercase">
              Trusted by B2B Sales & Revenue Operations Globally
            </p>
            <div className="flex flex-wrap items-center justify-center gap-12 opacity-60 transition-opacity duration-300 hover:opacity-90 md:gap-20">
              <span className="font-heading text-lg font-extrabold tracking-widest text-slate-800 uppercase">
                ORACLE
              </span>
              <span className="font-sans text-xl font-extrabold tracking-tight text-slate-800">
                stripe
              </span>
              <span className="font-heading text-lg font-bold tracking-wider text-slate-800 uppercase">
                adobe
              </span>
              <span className="font-sans text-lg font-extrabold text-slate-800">
                HubSpot
              </span>
              <span className="font-heading text-xl font-black tracking-tighter text-slate-800">
                snowflake
              </span>
            </div>
          </div>
        </section>

        {/* ─── SECTION 2: INDUSTRIES WE COVER ────────────────────────────── */}
        <section
          id="sectors"
          className="border-b border-slate-100 bg-white py-20 md:py-28"
          aria-labelledby="sectors-heading"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <SectionHeader
              badge="Database Segments"
              badgeVariant="blue"
              heading="Industries We Cover"
              subheading="Select your target sub-sectors across four primary manufacturing domains to build customized, high-intent campaign pools."
              align="center"
              className="mx-auto mb-16 max-w-2xl"
            />
            <h2 id="sectors-heading" className="sr-only">
              Industries We Cover
            </h2>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {INDUSTRIES_COVERED.map((domain) => (
                <Card
                  key={domain.name}
                  className="flex flex-col border border-slate-200/70 p-6 hover:shadow-md"
                >
                  <CardHeader className="p-0 pb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-[#2563EB]">
                        {domain.icon}
                      </div>
                      <span className="rounded-full bg-slate-100 px-3 py-1 font-mono text-xs font-bold text-slate-600">
                        {domain.count}
                      </span>
                    </div>
                    <CardTitle className="mt-4 text-lg font-extrabold text-slate-900">
                      {domain.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 pt-4 border-t border-slate-100">
                    <ul className="flex flex-col gap-2.5">
                      {domain.sectors.map((sector) => (
                        <li key={sector} className="flex items-center gap-2.5 text-slate-700">
                          <Check className="h-4 w-4 flex-shrink-0 text-[#10B981]" />
                          <span className="text-sm font-medium">{sector}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECTION 3: WHAT'S INCLUDED IN EVERY RECORD ─────────────────── */}
        <section
          id="records"
          className="border-b border-slate-100 bg-[#F8FAFC] py-20 md:py-28"
          aria-labelledby="records-heading"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <SectionHeader
              badge="Lead Schema"
              badgeVariant="green"
              heading="What’s Included in Every Contact Record"
              subheading="Every download is fully enriched with multi-channel criteria to deliver high-quality target accounts for sales development."
              align="center"
              className="mx-auto mb-16 max-w-2xl"
            />
            <h2 id="records-heading" className="sr-only">
              Data Fields Included in Every Contact Record
            </h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {RECORD_FIELDS.map((item) => (
                <div
                  key={item.field}
                  className="rounded-xl border border-slate-200/50 bg-white p-5 shadow-xs transition-shadow duration-300 hover:shadow-sm"
                >
                  <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-[#2563EB]">
                    {item.icon}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 leading-tight">
                    {item.field}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-500">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECTION 4: WHY CHOOSE ALIGNDATA (COMPARISON) ────────────────── */}
        <section
          id="comparison"
          className="border-b border-slate-100 bg-white py-20 md:py-28"
          aria-labelledby="comparison-heading"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <SectionHeader
              badge="Vendor Comparison"
              badgeVariant="blue"
              heading="Why Choose Aligndata’s Manufacturing Database?"
              subheading="See how Aligndata's verified decision maker lists outperform generic, scraped email databases."
              align="center"
              className="mx-auto mb-16 max-w-2xl"
            />
            <h2 id="comparison-heading" className="sr-only">
              Aligndata Manufacturing Email Database Advantage
            </h2>

            <div className="relative w-full overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="block w-full text-left md:table md:min-w-[800px] md:border-collapse">
                <thead className="hidden md:table-header-group">
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="w-1/3 p-5 text-xs font-bold tracking-widest text-slate-500 uppercase">
                      Evaluation Feature
                    </th>
                    <th className="relative w-1/3 p-5">
                      <div className="pointer-events-none absolute -inset-y-1 right-0 left-0 border-x border-blue-100/50 bg-blue-50/50" />
                      <div className="relative z-10 flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-[#10B981]" />
                        <span className="font-heading text-base font-extrabold tracking-tight text-slate-900">
                          Aligndata Advantage
                        </span>
                        <span className="ml-1 rounded border border-emerald-100 bg-emerald-50 px-1.5 py-0.5 text-[9px] font-bold tracking-wider text-emerald-700 uppercase">
                          Elite SLA
                        </span>
                      </div>
                    </th>
                    <th className="w-1/3 p-5 text-sm font-semibold text-slate-500">
                      Traditional Data Vendors
                    </th>
                  </tr>
                </thead>
                <tbody className="block divide-y divide-slate-100 md:table-row-group">
                  {COMPARISON_ROWS.map((row, index) => (
                    <tr
                      key={index}
                      className="block p-5 transition-colors hover:bg-slate-50/30 md:table-row md:p-0"
                    >
                      {/* Feature name */}
                      <td className="mb-2 block md:mb-0 md:table-cell md:p-5">
                        <h4 className="text-sm font-bold text-slate-900">
                          {row.feature}
                        </h4>
                      </td>

                      {/* Aligndata Advantage */}
                      <td className="relative mb-3 block md:mb-0 md:table-cell md:p-5">
                        <div className="pointer-events-none absolute -inset-y-2 right-0 left-0 hidden border-x border-blue-100/25 bg-blue-50/20 md:block" />
                        <div className="mb-1 text-[9px] font-bold tracking-wider text-[#10B981] uppercase md:hidden">
                          Aligndata Advantage
                        </div>
                        <div className="relative z-10 flex items-start gap-2.5">
                          <div className="mt-0.5 flex-shrink-0 rounded border border-emerald-100 bg-emerald-50 p-0.5 text-emerald-600">
                            <Check className="h-3.5 w-3.5 stroke-[3]" />
                          </div>
                          <span className="text-sm font-semibold text-slate-800">
                            {row.advantage}
                          </span>
                        </div>
                      </td>

                      {/* Competitor Value */}
                      <td className="block md:table-cell md:p-5">
                        <div className="mb-1 text-[9px] font-bold tracking-wider text-slate-400 uppercase md:hidden">
                          Traditional Vendors
                        </div>
                        <div className="flex items-start gap-2.5">
                          <span className="text-sm text-slate-500">
                            {row.competitor}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Bottom SLA disclaimer banner */}
              <div className="flex flex-col gap-2 border-t border-slate-200 bg-slate-50 p-4 font-mono text-[10px] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-1.5">
                  <Shield className="h-3.5 w-3.5 text-[#2563EB]" />
                  95% GUARANTEED REACH ACCURACY & FREE REPLACEMENT SLA
                </div>
                <div className="flex items-center gap-1">
                  <Sparkles className="h-3.5 w-3.5 text-[#10B981]" />
                  GDPR & CCPA COMPLIANCE ASSURED
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SECTION 5: DATA SOURCES & KEY BENEFITS ────────────────────── */}
        <section
          id="benefits"
          className="border-b border-slate-100 bg-[#F8FAFC] py-20 md:py-28"
          aria-labelledby="benefits-heading"
        >
          <div className="z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-6 md:px-8 lg:grid-cols-12">
            {/* Left: Sources */}
            <div className="flex flex-col gap-6 text-left lg:col-span-5">
              <Badge variant="blue" className="w-fit">Verified Data Integrity</Badge>
              <h2 className="font-heading text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
                Data Sources
              </h2>
              <p className="text-base leading-relaxed text-slate-600">
                We combine multiple trusted sources to build an accurate manufacturing network: manufacturing associations, trade shows (IMTS, Hannover Messe), public regulatory filings, industrial directories, and our proprietary direct research with real-time SMTP validation.
              </p>
              <div className="relative mt-2 h-[200px] w-full overflow-hidden rounded-2xl border border-slate-200/60 bg-white p-1 shadow-xs">
                <Image
                  src="/step2_verification.png"
                  alt="Multi-stage validation process mockup"
                  fill
                  unoptimized
                  className="object-cover rounded-xl"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
            </div>

            {/* Right: Key Benefits */}
            <div className="flex flex-col gap-6 text-left lg:col-span-7 lg:pl-8">
              <Badge variant="green" className="w-fit">Campaign Performance</Badge>
              <h2 id="benefits-heading" className="font-heading text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
                Key Benefits of Using Our Manufacturing List
              </h2>
              <div className="flex flex-col gap-5 mt-4">
                {KEY_BENEFITS.map((benefit, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                      <Check className="h-4 w-4 stroke-[3]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-950">
                        {benefit.title}
                      </h4>
                      <p className="mt-1 text-xs leading-relaxed text-slate-500">
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── SECTION 6: WHO SHOULD USE THIS MANUFACTURING EMAIL LIST ──────── */}
        <section
          id="audience"
          className="border-b border-slate-100 bg-white py-20 md:py-28"
          aria-labelledby="audience-heading"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <SectionHeader
              badge="ICP Alignment"
              badgeVariant="blue"
              heading="Who Should Use This Manufacturing Email List?"
              subheading="Unlock immediate pipeline values across these critical sectors by targeting pre-qualified purchasing authorities."
              align="center"
              className="mx-auto mb-16 max-w-2xl"
            />
            <h2 id="audience-heading" className="sr-only">
              Target Audience for Manufacturing Email List
            </h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {WHO_SHOULD_USE.map((item) => (
                <Card
                  key={item.name}
                  className="flex flex-col justify-between border border-slate-200/60 p-6 hover:shadow-md"
                >
                  <CardHeader className="p-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-[#2563EB]">
                      {item.icon}
                    </div>
                    <CardTitle className="mt-4 text-base font-bold text-slate-900 leading-tight">
                      {item.name}
                    </CardTitle>
                    <CardDescription className="mt-2 text-xs leading-relaxed text-slate-500">
                      {item.desc}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="mt-6 p-0 border-t border-slate-100 pt-3">
                    <Link href="#contact" className="inline-flex items-center gap-1 text-xs font-bold text-[#2563EB] hover:text-blue-700">
                      Target this Segment
                      <ChevronRight className="h-3 w-3" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECTION 7: INTERACTIVE GLOBE ───────────────────────────────── */}
        <section
          className="border-b border-slate-100 bg-[#F8FAFC] py-20 md:py-28"
          aria-label="Global data coverage network"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <InteractiveGlobe />
          </div>
        </section>

        {/* ─── SECTION 8: FREQUENTLY ASKED QUESTIONS ──────────────────────── */}
        <section
          id="faq"
          className="border-b border-slate-100 bg-white py-20 md:py-28"
          aria-labelledby="faq-heading"
        >
          <div className="mx-auto max-w-4xl px-6 md:px-8">
            <SectionHeader
              badge="FAQ"
              badgeVariant="blue"
              heading="Frequently Asked Questions"
              subheading="Everything you need to know about our verified B2B manufacturing database and compliance policies."
              align="center"
              className="mx-auto mb-16 max-w-2xl"
            />
            <h2 id="faq-heading" className="sr-only">
              Frequently Asked Questions About Manufacturing Email List
            </h2>
            <FAQSection faqs={MANUFACTURING_FAQS} />
          </div>
        </section>

        {/* ─── SECTION 9: GET CUSTOM QUOTE FORM ───────────────────────────── */}
        <CTASection
          id="contact"
          layout="split"
          badge="Custom Data Quote"
          badgeVariant="green"
          heading="Ready to Get Your Custom Manufacturing List?"
          description="Fill out the form and receive a tailored quote within 24 hours. Specify your ideal manufacturing sub-sectors and job titles below."
          bullets={[
            "Free custom sample sheet delivered within 24 hours",
            "95% verified email deliverability contract SLA",
            "Compliant GDPR & CCPA contact list compilation",
          ]}
          defaultSolution="Industry databases"
        />

        {/* ─── SECTION 10: RELATED EMAIL LISTS ────────────────────────────── */}
        <section
          id="related-lists"
          className="border-t border-slate-200 bg-white py-20 md:py-28"
          aria-labelledby="related-heading"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <SectionHeader
              badge="Extended Databases"
              badgeVariant="blue"
              heading="Related Email Lists"
              subheading="Expand your multi-channel marketing campaigns into adjacent high-intent industrial sectors."
              align="center"
              className="mx-auto mb-16 max-w-2xl"
            />
            <h2 id="related-heading" className="sr-only">
              Explore Related Industrial B2B Email Lists
            </h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {RELATED_LISTS.map((list) => (
                <div
                  key={list.title}
                  className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/70 bg-white p-6 transition-all duration-300 hover:shadow-md"
                >
                  <div>
                    <span className="inline-block rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold text-slate-500 uppercase tracking-wide">
                      {list.contacts}
                    </span>
                    <h3 className="mt-4 text-base font-bold text-slate-900 leading-tight">
                      {list.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-500">
                      {list.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <Link
                      href="#contact"
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#2563EB] group-hover:text-blue-700"
                    >
                      Request Quote
                      <ChevronRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
