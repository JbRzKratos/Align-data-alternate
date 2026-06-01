import React from "react"
import Link from "next/link"
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
import NetworkVisual from "@/components/network-visual"
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <script
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
            className="grid-bg pointer-events-none absolute inset-0 opacity-40"
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
                      className="animate-pulse text-emerald-600"
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
                <span className="bg-gradient-to-r from-[#2563EB] to-[#10B981] bg-clip-text text-transparent">
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

            {/* Right: Network Visualizer */}
            <div
              className="h-[400px] w-full md:h-[500px] lg:col-span-6"
              aria-hidden="true"
            >
              <NetworkVisual />
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

        {/* ─── SECTION 3: DATA INTELLIGENCE ENGINE ────────────────────────── */}
        <section
          id="about"
          className="relative bg-white py-20 md:py-28"
          aria-labelledby="engine-heading"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <SectionHeader
              badge="Our Verification Pipeline"
              badgeVariant="blue"
              heading="How Aliign Data Powers Revenue Growth"
              subheading="Discover active pipeline channels through our triple-vetted intelligence gathering process."
              align="center"
              className="mx-auto mb-16 max-w-2xl"
            />
            <h2 id="engine-heading" className="sr-only">
              How Aliign Data Powers Revenue Growth
            </h2>

            <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Step 1 */}
              <Card variant="blue" className="group/card">
                <CardHeader className="relative">
                  <div
                    className="absolute top-4 right-4 font-mono text-xs font-bold text-gray-600 group-hover/card:text-brand-blue"
                    aria-hidden="true"
                  >
                    STEP 01
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-blue/15 text-brand-blue">
                    <Search className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <CardTitle className="mt-2">Discover</CardTitle>
                </CardHeader>
                <CardContent>
                  Our crawler models map organizational technographics, buying
                  signals, and corporate layouts to locate decision makers
                  matching your ICP.
                </CardContent>
              </Card>

              {/* Step 2 */}
              <Card variant="green" className="group/card">
                <CardHeader className="relative">
                  <div
                    className="absolute top-4 right-4 font-mono text-xs font-bold text-gray-600 group-hover/card:text-brand-green"
                    aria-hidden="true"
                  >
                    STEP 02
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-green/15 text-brand-green">
                    <RefreshCw className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <CardTitle className="mt-2">Verify</CardTitle>
                </CardHeader>
                <CardContent>
                  Records go through SMTP server verification and direct phone
                  testing. Human researchers scrub bad inboxes every 30 days.
                </CardContent>
              </Card>

              {/* Step 3 */}
              <Card variant="blue" className="group/card">
                <CardHeader className="relative">
                  <div
                    className="absolute top-4 right-4 font-mono text-xs font-bold text-gray-600 group-hover/card:text-brand-blue"
                    aria-hidden="true"
                  >
                    STEP 03
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-blue/15 text-brand-blue">
                    <Users className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <CardTitle className="mt-2">Activate</CardTitle>
                </CardHeader>
                <CardContent>
                  Clean contact databases push straight to Salesforce, HubSpot,
                  or custom CSV folders. Launch target campaigns without
                  bouncing.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* ─── SECTION 4: INTERACTIVE DATA UNIVERSE ───────────────────────── */}
        <section
          className="relative border-t border-slate-200/80 bg-[#F8FAFC] py-20 md:py-28"
          aria-labelledby="universe-heading"
        >
          <div
            className="bg-grid-bg pointer-events-none absolute inset-0 opacity-15"
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

        {/* ─── SECTION 11: FAQ ─────────────────────────────────────────────── */}
        <section
          id="faq"
          className="border-t border-slate-200 bg-white py-20 md:py-28"
          aria-labelledby="faq-heading"
        >
          <div className="mx-auto max-w-4xl px-6 md:px-8">
            <SectionHeader
              badge="Clarifications"
              badgeVariant="blue"
              heading="Frequently Asked Questions"
              subheading="Everything you need to know about our B2B intelligence network, accuracy verification systems, and compliance frameworks."
              align="center"
              className="mb-16"
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
