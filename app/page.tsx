import React from "react"
import Link from "next/link"
import Image from "next/image"
import Script from "next/script"
import type { Metadata } from "next"
import {
  Database,
  Shield,
  Cpu,
  Landmark,
  Hammer,
  GraduationCap,
  ShoppingBag,
  MapPin,
  Sparkles,
  ArrowRight,
  Lock,
  RefreshCw,
  Search,
  Users,
  Building2,
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
import UniverseMap from "@/components/universe-map"
import ComparisonTable from "@/components/comparison-table"
import InteractiveGlobe from "@/components/interactive-globe"
import SectionHeader from "@/components/sections/SectionHeader"
import FAQSection from "@/components/sections/FAQSection"
import CTASection from "@/components/sections/CTASection"
import SolutionCard from "@/components/cards/SolutionCard"
import IndustryCard from "@/components/cards/IndustryCard"
import TestimonialCard from "@/components/cards/TestimonialCard"

// Content imports — all data centralized in /content
import { HOMEPAGE_FAQS } from "@/content/faqs"
import { HERO_STATS } from "@/content/stats"
import { INDUSTRIES } from "@/content/industries"
import { TESTIMONIALS } from "@/content/testimonials"
import { COMPLIANCE_ITEMS } from "@/content/compliance"
import { ALL_SOLUTIONS } from "@/content/solutions"

// Lucide icon map for industry cards
const INDUSTRY_ICON_MAP: Record<string, React.ReactNode> = {
  Shield: <Shield className="h-5 w-5" />,
  Cpu: <Cpu className="h-5 w-5" />,
  Landmark: <Landmark className="h-5 w-5" />,
  Hammer: <Hammer className="h-5 w-5" />,
  GraduationCap: <GraduationCap className="h-5 w-5" />,
  ShoppingBag: <ShoppingBag className="h-5 w-5" />,
  Wrench: <Wrench className="h-5 w-5" />,
  Truck: <Truck className="h-5 w-5" />,
}

// Lucide icon map for solution cards
const SOLUTION_ICON_MAP: Record<string, React.ReactNode> = {
  "technology-users-database": <Cpu className="h-5 w-5" />,
  "healthcare-database": <Shield className="h-5 w-5" />,
  "professional-email-lists": <Database className="h-5 w-5" />,
  "industry-databases": <Building2 className="h-5 w-5" />,
  "data-appending": <Sparkles className="h-5 w-5" />,
  "regional-databases": <MapPin className="h-5 w-5" />,
}

export const metadata: Metadata = {
  title: "The Global Business Intelligence Network",
  description:
    "Turn business data into revenue intelligence. Access verified decision-makers, technology stacks, and healthcare professionals with 95% accuracy. GDPR & CCPA compliant.",
  keywords:
    "B2B Data Provider, Business Contact Database, Verified Email Lists, Technology Users Database, Healthcare Email Lists, Industry Database, Business Intelligence Data, Data Appending Services, Decision Maker Contacts, Global Business Database",
  alternates: {
    canonical: "https://www.aliigndata.com",
  },
  openGraph: {
    title: "Aliign Data | The Global Business Intelligence Network",
    description:
      "Turn business data into revenue intelligence. Access verified decision-makers, technology stacks, and healthcare professionals with 95% accuracy.",
    url: "https://www.aliigndata.com",
    images: [
      {
        url: "https://www.aliigndata.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aliign Data — The Global Business Intelligence Network",
      },
    ],
  },
}

// Schema.org JSON-LD data — statically generated (no inline functions in JSX)
const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Aliign Data",
  url: "https://www.aliigndata.com",
  logo: "https://www.aliigndata.com/logo.png",
  description:
    "The global business intelligence network providing verified B2B contact lists and data enrichment services.",
  sameAs: [
    "https://www.linkedin.com/company/aliigndata",
    "https://twitter.com/aliigndata",
  ],
}

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HOMEPAGE_FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
}

const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Aliign Data",
  url: "https://www.aliigndata.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.aliigndata.com/?s={search_term_string}",
    "query-input": "required name=search_term_string",
  },
}

export default function Page() {
  return (
    <>
      {/* Schema Injection */}
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
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }}
      />

      <Navbar />

      <main
        id="main-content"
        className="min-h-screen overflow-hidden bg-white pt-20 text-[#0F172A]"
      >
        {/* ─── SECTION 1: HERO ────────────────────────────────────────────── */}
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
            {/* Left: Copy */}
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
                  THE GLOBAL BUSINESS INTELLIGENCE NETWORK
                </Badge>
              </div>
              <h1
                id="hero-heading"
                className="font-heading text-4xl leading-tight font-extrabold tracking-tight text-[#0F172A] md:text-5xl lg:text-6xl"
              >
                Find Companies{" "}
                <span className="text-[#2563EB]">
                  Ready To Buy
                </span>{" "}
                Before Competitors Do.
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
                Access verified decision-makers, technology users, healthcare
                professionals, and business contacts across 100+ countries with
                industry-leading accuracy.
              </p>

              <div className="mt-2 flex flex-col items-center gap-4 sm:flex-row">
                <Link href="#contact" className="w-full sm:w-auto">
                  <Button variant="primary" size="lg" className="w-full">
                    Get Sample Data
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </Link>
                <Link href="#solutions" className="w-full sm:w-auto">
                  <Button variant="secondary" size="lg" className="w-full">
                    Explore Solutions
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div
                className="mt-4 grid grid-cols-2 gap-6 border-t border-slate-200 pt-8 sm:grid-cols-4"
                aria-label="Key statistics"
              >
                {HERO_STATS.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-heading text-xl font-extrabold text-slate-900">
                      {stat.value}
                    </p>
                    <p className="mt-0.5 font-mono text-[11px] tracking-wider text-slate-500 uppercase">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Dashboard Mockup & Stats Row */}
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
                  75M+ NODES // 95% VERIFIED
                </div>
                <div className="relative h-full w-full overflow-hidden rounded-xl">
                  <Image
                    src="/hero_dashboard.png"
                    alt="Revenue Intelligence Dashboard Mockup"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Mockup Stats Row */}
              <div className="grid grid-cols-3 gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 text-center shadow-xs">
                <div>
                  <p className="font-heading text-lg font-extrabold text-[#2563EB] md:text-xl">210%</p>
                  <p className="text-[10px] font-medium tracking-wide text-slate-500 uppercase">Average Growth</p>
                </div>
                <div className="border-x border-slate-200">
                  <p className="font-heading text-lg font-extrabold text-slate-900 md:text-xl">75M+</p>
                  <p className="text-[10px] font-medium tracking-wide text-slate-500 uppercase">Verified Leads</p>
                </div>
                <div>
                  <p className="font-heading text-lg font-extrabold text-[#10B981] md:text-xl">95%</p>
                  <p className="text-[10px] font-medium tracking-wide text-slate-500 uppercase">Accuracy Rate</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SECTION 2: TRUST LOGOS ─────────────────────────────────────── */}
        <section
          className="border-y border-slate-200 bg-[#F8FAFC] py-12"
          aria-label="Trusted by global organizations"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <p className="mb-8 text-center text-xs font-bold tracking-widest text-slate-400 uppercase">
              Trusted by Revenue Operations at Global Leaders
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

        {/* ─── SECTION 3: OUTREACH PLATFORM FEATURES ──────────────────────── */}
        <section
          id="features"
          className="border-t border-slate-200/80 bg-white py-20 md:py-28"
          aria-labelledby="features-heading"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <SectionHeader
              badge="Platform Features"
              badgeVariant="blue"
              heading="Everything you need to scale your outreach"
              subheading="Access the most comprehensive B2B databases with tools built for modern marketers and sales teams."
              align="center"
              className="mx-auto mb-16 max-w-2xl"
            />
            <h2 id="features-heading" className="sr-only">
              Everything you need to scale your outreach
            </h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "75M+ Business Contacts",
                  description: "Connect with verified decision-makers across technology, finance, healthcare, and retail sectors.",
                  badge: "95% accuracy",
                  icon: <Users className="h-5 w-5 text-[#2563EB]" />,
                  variant: "blue",
                },
                {
                  title: "Email Appending",
                  description: "Enrich your outdated lists with verified direct dials, corporate email addresses, and corporate profiles.",
                  badge: "24hr turnaround",
                  icon: <Mail className="h-5 w-5 text-[#2563EB]" />,
                  variant: "blue",
                },
                {
                  title: "GDPR Compliant Data",
                  description: "Full compliance under legitimate interest models, safeguarding your email deliverability and legal security.",
                  badge: "100% compliant",
                  icon: <Shield className="h-5 w-5 text-[#2563EB]" />,
                  variant: "blue",
                },
                {
                  title: "Advanced Segmentation",
                  description: "Filter prospects based on company size, revenue, location, job hierarchy, and active tech stacks.",
                  badge: "70+ filters",
                  icon: <Filter className="h-5 w-5 text-[#2563EB]" />,
                  variant: "blue",
                },
                {
                  title: "Dedicated Account Team",
                  description: "Receive priority support and custom data compiling from research specialists whenever you need lists.",
                  badge: "24/7 available",
                  icon: <UserCheck className="h-5 w-5 text-[#2563EB]" />,
                  variant: "blue",
                },
                {
                  title: "Real-Time Data Updates",
                  description: "Never worry about domain decay. We refresh and phone-validate contact records every 30 days.",
                  badge: "30-day refresh",
                  icon: <LineChart className="h-5 w-5 text-[#2563EB]" />,
                  variant: "blue",
                },
              ].map((feat) => (
                <Card key={feat.title} variant="blue" className="group/feat flex flex-col justify-between hover:border-blue-300">
                  <CardHeader className="flex flex-col gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-brand-blue transition-colors group-hover/feat:bg-blue-100">
                      {feat.icon}
                    </div>
                    <div>
                      <CardTitle className="text-base font-bold text-slate-900 group-hover/feat:text-[#2563EB]">{feat.title}</CardTitle>
                      <CardDescription className="mt-2 text-xs leading-relaxed text-slate-500">{feat.description}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="mt-4 border-t border-slate-100 pt-3">
                    <Badge variant="blue" className="text-[10px] font-bold uppercase">{feat.badge}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECTION 4: KEY METRICS ROW ─────────────────────────────────── */}
        <section
          className="border-y border-slate-200/80 bg-slate-50/50 py-12"
          aria-label="Global stats scale"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4 md:divide-x md:divide-slate-200">
              {[
                { value: "75M+", label: "Verified Contacts" },
                { value: "95%", label: "Data Accuracy" },
                { value: "500+", label: "Enterprise Clients" },
                { value: "150+", label: "Countries Covered" },
              ].map((metric) => (
                <div key={metric.label} className="flex flex-col items-center justify-center">
                  <p className="font-heading text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
                    {metric.value}
                  </p>
                  <p className="mt-1.5 font-mono text-[10px] tracking-wider text-slate-400 uppercase">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECTION 5: 3-STEP PROCESS SECTION ──────────────────────────── */}
        <section
          id="process"
          className="relative bg-white py-20 md:py-28"
          aria-labelledby="process-heading"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <SectionHeader
              badge="Simple Process"
              badgeVariant="green"
              heading="From request to results in 48 hours"
              subheading="Our streamlined 3-step process ensures you get accurate, actionable data fast—without the complexity."
              align="center"
              className="mx-auto mb-20 max-w-2xl"
            />
            <h2 id="process-heading" className="sr-only">
              From request to results in 48 hours
            </h2>

            <div className="flex flex-col gap-24 md:gap-32">
              {/* Step 1 */}
              <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
                {/* Left: Image */}
                <div className="relative h-[250px] w-full overflow-hidden rounded-2xl border border-slate-200/60 bg-slate-50 p-2 shadow-xs md:h-[350px] lg:col-span-6">
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 rounded-full border border-slate-200/50 bg-white/90 px-3 py-1 font-mono text-[9px] text-[#2563EB] shadow-xs">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
                    TARGET DEFINITION
                  </div>
                  <div className="relative h-full w-full overflow-hidden rounded-xl">
                    <Image
                      src="/step1_needs.png"
                      alt="Step 1 — Tell us what you need"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
                {/* Right: Copy */}
                <div className="flex flex-col gap-6 text-left lg:col-span-6 lg:pl-6">
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 font-mono text-xs font-bold text-[#2563EB]">1</span>
                    <span className="font-mono text-[10px] font-bold tracking-widest text-[#2563EB] uppercase">STEP 01</span>
                  </div>
                  <h3 className="font-heading text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
                    Tell us what you need
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-500">
                    Share your target criteria — industry, job titles, company size, location, and any specific requirements. Our platform aligns leads directly with your criteria.
                  </p>
                  <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {[
                      "Industry & vertical targeting",
                      "Job title & seniority filters",
                      "Company size & revenue range",
                      "Geographic location",
                    ].map((bullet) => (
                      <li key={bullet} className="flex items-center gap-2 text-xs font-medium text-slate-600">
                        <CheckCircle className="h-4 w-4 text-[#2563EB]" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-2">
                    <a href="#contact">
                      <Button variant="primary" size="default">
                        Get Started Now
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
                {/* Left: Copy */}
                <div className="order-2 flex flex-col gap-6 text-left lg:order-1 lg:col-span-6 lg:pr-6">
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 font-mono text-xs font-bold text-[#10B981]">2</span>
                    <span className="font-mono text-[10px] font-bold tracking-widest text-[#10B981] uppercase">STEP 02</span>
                  </div>
                  <h3 className="font-heading text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
                    We verify every contact
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-500">
                    Our research team and algorithmic engine hand-verify each contact using multiple data sources, dial tests, and strict SMTP validation protocols.
                  </p>
                  <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {[
                      "Manual verification by experts",
                      "Cross-reference multiple sources",
                      "Email & phone validation",
                      "Duplicate removal & cleanup",
                    ].map((bullet) => (
                      <li key={bullet} className="flex items-center gap-2 text-xs font-medium text-slate-600">
                        <CheckCircle className="h-4 w-4 text-[#10B981]" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Right: Image */}
                <div className="order-1 relative h-[250px] w-full overflow-hidden rounded-2xl border border-slate-200/60 bg-slate-50 p-2 shadow-xs md:h-[350px] lg:order-2 lg:col-span-6">
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 rounded-full border border-slate-200/50 bg-white/90 px-3 py-1 font-mono text-[9px] text-[#10B981] shadow-xs">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
                    VERIFICATION PROCESS
                  </div>
                  <div className="relative h-full w-full overflow-hidden rounded-xl">
                    <Image
                      src="/step2_verification.png"
                      alt="Step 2 — We verify every contact"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
                {/* Left: Image */}
                <div className="relative h-[250px] w-full overflow-hidden rounded-2xl border border-slate-200/60 bg-slate-50 p-2 shadow-xs md:h-[350px] lg:col-span-6">
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 rounded-full border border-slate-200/50 bg-white/90 px-3 py-1 font-mono text-[9px] text-[#2563EB] shadow-xs">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
                    DATA FULFILLMENT
                  </div>
                  <div className="relative h-full w-full overflow-hidden rounded-xl">
                    <Image
                      src="/step3_delivery.png"
                      alt="Step 3 — Receive your data"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
                {/* Right: Copy */}
                <div className="flex flex-col gap-6 text-left lg:col-span-6 lg:pl-6">
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 font-mono text-xs font-bold text-[#2563EB]">3</span>
                    <span className="font-mono text-[10px] font-bold tracking-widest text-[#2563EB] uppercase">STEP 03</span>
                  </div>
                  <h3 className="font-heading text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
                    Receive your data
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-500">
                    Get your custom-built contact list delivered safely in your preferred format. Connect directly to export leads into your connected CRM workspace.
                  </p>
                  <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {[
                      "Multiple export formats",
                      "Direct CRM integration",
                      "Detailed contact profiles",
                      "Ready to use immediately",
                    ].map((bullet) => (
                      <li key={bullet} className="flex items-center gap-2 text-xs font-medium text-slate-600">
                        <CheckCircle className="h-4 w-4 text-[#2563EB]" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SECTION 6: WHY CHOOSE ALIGNDATA ────────────────────────────── */}
        <section
          id="why-choose"
          className="border-t border-slate-200/80 bg-slate-50/50 py-20 md:py-28"
          aria-labelledby="why-heading"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="flex flex-col justify-between gap-8 border-b border-slate-200 pb-12 lg:flex-row lg:items-end">
              <div className="max-w-2xl text-left">
                <div className="flex justify-start">
                  <Badge variant="blue" className="mb-4">Our Advantages</Badge>
                </div>
                <h2 id="why-heading" className="font-heading text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
                  Why Choose Aligndata
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  Real researchers verify every contact. Higher deliverability, better response rates, and measurable ROI.
                </p>
              </div>

              <div className="flex flex-wrap gap-6 md:gap-12">
                <div>
                  <p className="font-heading text-2xl font-extrabold text-[#2563EB] md:text-3xl">210%</p>
                  <p className="text-[9px] font-bold tracking-wider text-slate-400 uppercase">Avg ROI</p>
                </div>
                <div className="border-l border-slate-200 pl-6 md:pl-12">
                  <p className="font-heading text-2xl font-extrabold text-slate-900 md:text-3xl">98%</p>
                  <p className="text-[9px] font-bold tracking-wider text-slate-400 uppercase">Deliverability</p>
                </div>
                <div className="border-l border-slate-200 pl-6 md:pl-12">
                  <p className="font-heading text-2xl font-extrabold text-[#10B981] md:text-3xl">4.9/5</p>
                  <p className="text-[9px] font-bold tracking-wider text-slate-400 uppercase">Rating</p>
                </div>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Hand-Verified Accuracy",
                  description: "Unlike static lists, our active contact database is phone-vetted by real researchers, securing 95% validity.",
                  badge: "95% verified",
                  icon: <Award className="h-5 w-5 text-[#2563EB]" />,
                },
                {
                  title: "Always Fresh",
                  description: "We update, clean, and ping inboxes on a continuous cycle, running a full refresh every 30 days.",
                  badge: "30-day refresh",
                  icon: <RefreshCw className="h-5 w-5 text-[#2563EB]" />,
                },
                {
                  title: "Dedicated Support",
                  description: "Receive direct, customized compiler support and target ICP reviews from dedicated data specialists.",
                  badge: "24/7 available",
                  icon: <UserCheck className="h-5 w-5 text-[#2563EB]" />,
                },
                {
                  title: "48-Hour Delivery",
                  description: "No endless queues. Get your custom verified email lists compiled and pushed directly in less than 48 hours.",
                  badge: "24hr turnaround",
                  icon: <Clock className="h-5 w-5 text-[#2563EB]" />,
                },
                {
                  title: "GDPR Compliant",
                  description: "Rest easy knowing your prospecting practices align perfectly with international compliance laws (GDPR, CCPA).",
                  badge: "100% compliant",
                  icon: <Shield className="h-5 w-5 text-[#2563EB]" />,
                },
                {
                  title: "Free Monthly Updates",
                  description: "We automatically scan and push missing target contacts and job updates for the life of your campaign.",
                  badge: "Free updates",
                  icon: <Zap className="h-5 w-5 text-[#2563EB]" />,
                },
              ].map((item) => (
                <Card key={item.title} variant="default" className="group/why flex flex-col justify-between border-slate-200/60 p-6 hover:border-blue-300">
                  <CardHeader className="flex flex-col gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-[#2563EB] transition-colors group-hover/why:bg-blue-100">
                      {item.icon}
                    </div>
                    <div>
                      <CardTitle className="text-base font-bold text-slate-900 group-hover/why:text-[#2563EB]">{item.title}</CardTitle>
                      <CardDescription className="mt-2 text-xs leading-relaxed text-slate-500">{item.description}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="mt-4 border-t border-slate-100 pt-3">
                    <Badge variant="blue" className="text-[10px] font-bold uppercase">{item.badge}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECTION 4: INTERACTIVE DATA UNIVERSE ───────────────────────── */}
        <section
          className="relative border-t border-slate-200/80 bg-[#F8FAFC] py-20 md:py-28"
          aria-labelledby="universe-heading"
        >
          <div
            className="grid-bg pointer-events-none absolute inset-0 opacity-50"
            aria-hidden="true"
          />
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <SectionHeader
              badge="Database Breakdown"
              badgeVariant="green"
              heading="Explore the Data Universe"
              subheading="Filter and inspect our major industry verticals to view complete data fields, verified contacts, and segment reach."
              align="left"
              className="mb-12 max-w-2xl"
            />
            <h2 id="universe-heading" className="sr-only">
              Explore the Data Universe
            </h2>
            <UniverseMap />
          </div>
        </section>

        {/* ─── SECTION 5: SOLUTIONS ECOSYSTEM ─────────────────────────────── */}
        <section
          id="solutions"
          className="border-t border-slate-200/80 bg-white py-20 md:py-28"
          aria-labelledby="solutions-heading"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <SectionHeader
              badge="Custom Data Deliverables"
              badgeVariant="blue"
              heading="Tailored Intelligence for Every Outreach Channel"
              subheading="Choose the exact segment library to support your sales operations, marketing campaigns, and hiring directives."
              align="center"
              className="mx-auto mb-16 max-w-2xl"
            />
            <h2 id="solutions-heading" className="sr-only">
              Data Solutions
            </h2>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {ALL_SOLUTIONS.map((solution, i) => (
                <SolutionCard
                  key={solution.slug}
                  icon={
                    SOLUTION_ICON_MAP[solution.slug] ?? (
                      <Database className="h-5 w-5" />
                    )
                  }
                  title={solution.name}
                  description={(() => {
                    const descriptions: Record<string, string> = {
                      "technology-users-database":
                        "Locate accounts using AWS, Shopify, Salesforce, GCP, or other cloud software tools. Filter by technographic signatures.",
                      "healthcare-database":
                        "NPI-verified listings for clinical directors, head practitioners, surgeons, and administrators in top hospitals.",
                      "professional-email-lists":
                        "Corporate contact listings segmented by job title hierarchy (C-level, VP, Director) and decision authority.",
                      "industry-databases":
                        "Target database sections representing construction, finance, retail, and manufacturing sectors.",
                      "data-appending":
                        "Upload your outdated prospect databases. We enrich empty spaces, verify old emails, and supply direct phone lines.",
                      "regional-databases":
                        "Geo-targeted contacts across 100+ countries. Filter leads based on state, country, or continental operations.",
                    }
                    return descriptions[solution.slug] ?? solution.subtitle
                  })()}
                  coverage={solution.coverageStat}
                  href={`/solutions/${solution.slug}`}
                  variant={i % 2 === 0 ? "blue" : "green"}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECTION 6: INDUSTRIES SERVED ───────────────────────────────── */}
        <section
          id="industries"
          className="border-t border-slate-200 bg-slate-50 py-20 md:py-28"
          aria-labelledby="industries-heading"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <SectionHeader
              badge="Target Verticals"
              badgeVariant="green"
              heading="Deep Global Coverage Across Core Verticals"
              subheading="Connect with executives in niche business categories worldwide with high data verification confidence."
              align="center"
              className="mx-auto mb-16 max-w-2xl"
            />
            <h2 id="industries-heading" className="sr-only">
              Industries Served
            </h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {INDUSTRIES.map((industry) => (
                <IndustryCard
                  key={industry.name}
                  icon={
                    INDUSTRY_ICON_MAP[industry.icon] ?? (
                      <Shield className="h-5 w-5" />
                    )
                  }
                  name={industry.name}
                  description={industry.description}
                  contactCount={industry.contactCount}
                  variant={industry.variant}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECTION 7: COMPARISON TABLE ────────────────────────────────── */}
        <section
          id="comparison"
          className="border-t border-slate-200 bg-white py-20 md:py-28"
          aria-labelledby="comparison-heading"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <SectionHeader
              badge="Competitor Comparison"
              badgeVariant="blue"
              heading="Not Just a Database. An Intelligence Network."
              subheading="Why global revenue teams migrate from legacy platforms to Aliign Data."
              align="center"
              className="mx-auto mb-16 max-w-2xl"
            />
            <h2 id="comparison-heading" className="sr-only">
              Why Choose Aliign Data
            </h2>
            <ComparisonTable />
          </div>
        </section>

        {/* ─── SECTION 8: CUSTOMER RESULTS ────────────────────────────────── */}
        <section
          id="results"
          className="border-t border-slate-200 bg-[#F8FAFC] py-20 md:py-28"
          aria-labelledby="results-heading"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <SectionHeader
              badge="Impact Studies"
              badgeVariant="green"
              heading="Revenue Outcomes Powered by Precision Data"
              subheading="See how enterprise sales and marketing operations unlock real pipeline numbers."
              align="left"
              className="mb-16 max-w-2xl"
            />
            <h2 id="results-heading" className="sr-only">
              Customer Results
            </h2>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {TESTIMONIALS.map((t) => (
                <TestimonialCard key={t.authorCompany} {...t} />
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECTION 9: GLOBAL COVERAGE ─────────────────────────────────── */}
        <section
          className="border-t border-slate-200 bg-white py-20 md:py-28"
          aria-label="Global coverage map"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <InteractiveGlobe />
          </div>
        </section>

        {/* ─── SECTION 10: COMPLIANCE & SECURITY ──────────────────────────── */}
        <section
          id="compliance"
          className="relative border-t border-slate-200 bg-[#F8FAFC] py-20 md:py-28"
          aria-labelledby="compliance-heading"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <SectionHeader
              badge="Data Integrity"
              badgeVariant="blue"
              heading="Enterprise-Grade Privacy & Compliance Built-In"
              subheading="Reach prospects with confidence. Our databases align fully with international data governance regulations."
              align="center"
              className="mx-auto mb-16 max-w-2xl"
            />
            <h2 id="compliance-heading" className="sr-only">
              Compliance & Security
            </h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {COMPLIANCE_ITEMS.map((item) => (
                <Card key={item.title} variant={item.variant}>
                  <CardHeader>
                    <div
                      className={`mb-2 flex h-9 w-9 items-center justify-center rounded-lg ${
                        item.variant === "green"
                          ? "bg-brand-green/10 text-brand-green"
                          : "bg-brand-blue/10 text-brand-blue"
                      }`}
                    >
                      <Lock className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-sm">{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-2">
                    <div className="font-mono text-[10px] text-gray-500">
                      {item.region}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECTION 11: GET A CUSTOM QUOTE CALLOUT ────────────────────── */}
        <section
          className="border-t border-slate-200 bg-white py-20"
          aria-labelledby="quote-heading"
        >
          <div className="mx-auto max-w-5xl px-6 md:px-8">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-gradient-to-br from-slate-50/80 to-blue-50/40 p-8 text-center shadow-xs md:p-12">
              {/* Mesh blur */}
              <div className="pointer-events-none absolute -top-12 -left-12 h-36 w-36 rounded-full bg-blue-100/50 blur-[60px]" />
              <div className="pointer-events-none absolute -bottom-12 -right-12 h-36 w-36 rounded-full bg-emerald-100/30 blur-[60px]" />

              <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center gap-6">
                <h3 id="quote-heading" className="font-heading text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
                  Get a custom quote tailored to your needs
                </h3>
                <p className="text-sm leading-relaxed text-slate-500">
                  Connect with our team to discuss your data requirements. We'll provide a detailed quote and show you the exact data completeness and quality you can expect within 24–48 hours.
                </p>

                <div className="mt-2 flex flex-col items-center gap-4 sm:flex-row">
                  <a href="#contact">
                    <Button variant="primary" size="default">
                      Get Quote
                    </Button>
                  </a>
                  <a href="#contact">
                    <Button variant="secondary" size="default">
                      Talk to the Team
                    </Button>
                  </a>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4 border-t border-slate-200 pt-6 text-[10px] font-bold text-slate-600 sm:grid-cols-4">
                  {[
                    "95% accuracy guarantee",
                    "24–48h delivery",
                    "GDPR/CCPA/CASL compliant",
                    "Custom targeting options",
                  ].map((check) => (
                    <div key={check} className="flex items-center justify-center gap-1.5">
                      <Check className="h-3.5 w-3.5 text-[#10B981]" />
                      <span className="uppercase tracking-wider">{check}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SECTION 12: FAQ ─────────────────────────────────────────────── */}
        <section
          id="faq"
          className="border-t border-slate-200 bg-white py-20 md:py-28"
          aria-labelledby="faq-heading"
        >
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <SectionHeader
              badge="Clarifications"
              badgeVariant="blue"
              heading="Frequently Asked Questions"
              subheading="Everything you need to know about our B2B intelligence network, accuracy verification systems, and compliance frameworks."
              align="center"
              className="mb-16 max-w-3xl mx-auto"
            />
            <h2 id="faq-heading" className="sr-only">
              Frequently Asked Questions
            </h2>
            <FAQSection faqs={HOMEPAGE_FAQS} />
          </div>
        </section>

        {/* ─── SECTION 12: FINAL CTA ───────────────────────────────────────── */}
        <CTASection
          id="contact"
          layout="split"
          badge="Secure Your Target Accounts"
          badgeVariant="green"
          heading="Start Building Smarter Revenue Pipelines Today"
          description="Submit your custom ideal customer profile requirements. Our verification specialists will run validation algorithms and email you a free sample contact segment sheet within hours."
          bullets={[
            "Free, phone-verified custom sample lists (no subscription required)",
            "95% transactional email delivery SLA contract",
            "Compliant GDPR/CCPA consumer registry check",
          ]}
        />
      </main>

      <Footer />
    </>
  )
}
