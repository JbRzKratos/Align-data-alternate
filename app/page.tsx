import React from "react"
import Link from "next/link"
import {
  Database,
  Shield,
  Cpu,
  Landmark,
  Hammer,
  GraduationCap,
  ShoppingBag,
  CheckCircle,
  MapPin,
  Sparkles,
  ArrowRight,
  Lock,
  RefreshCw,
  Search,
  Users,
  Building2,
  Wrench,
  Truck
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Badge from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import NetworkVisual from "@/components/network-visual"
import UniverseMap from "@/components/universe-map"
import ComparisonTable from "@/components/comparison-table"
import InteractiveGlobe from "@/components/interactive-globe"
import LeadForm from "@/components/lead-form"
import Logo from "@/components/ui/logo"

export const metadata = {
  title: "Aliign Data | The Global Business Intelligence Network",
  description:
    "Turn business data into revenue intelligence. Access verified decision-makers, technology stacks, and healthcare professionals with 95% accuracy. GDPR & CCPA compliant.",
  keywords:
    "B2B Data Provider, Business Contact Database, Verified Email Lists, Technology Users Database, Healthcare Email Lists, Industry Database, Business Intelligence Data, Data Appending Services, Decision Maker Contacts, Global Business Database",
  openGraph: {
    title: "Aliign Data | The Global Business Intelligence Network",
    description: "Turn business data into revenue intelligence. Access verified decision-makers, technology stacks, and healthcare professionals with 95% accuracy.",
    url: "https://www.aliigndata.com",
    siteName: "Aliign Data",
    images: [
      {
        url: "https://www.aliigndata.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aliign Data - The Global Business Intelligence Network",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aliign Data | The Global Business Intelligence Network",
    description: "Turn business data into revenue intelligence. Access verified decision-makers, technology stacks, and healthcare professionals with 95% accuracy.",
    images: ["https://www.aliigndata.com/twitter-image.jpg"],
    creator: "@aliigndata",
  },
}

export default function Page() {
  // 15 Schema FAQ questions
  const faqs = [
    {
      q: "What makes Aliign Data different from other B2B database providers?",
      a: "Unlike scrapers that dump recycled web-data, Aliign Data runs a dual-step validation model. We combine advanced machine learning scraping with manual, phone-verified verification by human researchers to guarantee 95% active record accuracy.",
    },
    {
      q: "How does Aliign Data guarantee 95% contact accuracy?",
      a: "Every single email domain, phone line, and company profile passes through our SMTP checker, server-level pings, and direct dial test rings. If any record falls below our threshold, it is automatically removed and replaced before delivery.",
    },
    {
      q: "What is the database refresh cycle?",
      a: "We refresh and validate our entire core data inventory every 30 days. This cycle ensures you do not waste outreach credits on invalid inboxes, decayed domains, or relocated decision-makers.",
    },
    {
      q: "Is your data GDPR, CCPA, CASL, and PIPEDA compliant?",
      a: "Yes. All business contact profiles in the Aliign Data network are sourced from legitimate public filings, corporate websites, and double-opt-in B2B networks. We operate fully within GDPR (Art. 6 legitimate interest), CCPA, CASL, and PIPEDA frameworks.",
    },
    {
      q: "How does the Technology Users Database work?",
      a: "We map technographic signals from code-level tags, software integrations, job posts, and server signatures. This allows you to search for companies actively using specific solutions like Salesforce, AWS, React, SAP, or ZoomInfo.",
    },
    {
      q: "Can I filter contacts by specific technology stacks?",
      a: "Yes. Our filtering interface supports complex boolean operations (e.g., companies using HubSpot AND AWS but NOT Shopify) combined with standard parameters like headcount, geography, and revenue.",
    },
    {
      q: "What details are included in the Healthcare Database?",
      a: "Our healthcare intelligence contains NPI records, state license numbers, clinical specialties, hospital affiliations, direct office emails, clinic lines, and procurement decision-makers across primary and secondary clinics.",
    },
    {
      q: "How does the Data Appending Service work?",
      a: "Simply upload your stale, incomplete lead list. Our engine matches your records against our global index, enriches missing fields (direct dials, job titles, technologies, revenue), and re-verifies them before delivery.",
    },
    {
      q: "Can I integrate Aliign Data directly with my CRM?",
      a: "Yes. We offer native API endpoints and sync integrations for HubSpot, Salesforce, Zoho, and Microsoft Dynamics, enabling you to enrich accounts directly within your working pipeline.",
    },
    {
      q: "What fields are included in each contact record?",
      a: "Standard records include First/Last Name, Verified Corporate Email, Direct Dial, Company Name, Industry, Revenue, Employee Count, Technology Stack, LinkedIn Profile URL, and HQ Location.",
    },
    {
      q: "Do you support international B2B targeting?",
      a: "Yes. Our data network spans over 100 countries across North America, Europe, Asia-Pacific, Latin America, the Middle East, and Africa, with dedicated native researchers validating regional lists.",
    },
    {
      q: "What formats are the data delivered in?",
      a: "Data can be exported directly into structured, cleaned CSV and XLSX formats, or pushed as mapped contacts into your connected CRM platform.",
    },
    {
      q: "How long does it take to deliver a custom contact list?",
      a: "Standard list requests are delivered within 24 to 48 hours. If manual phone validation is required for highly niche markets, the timeline may extend to 72 hours, which we notify you of beforehand.",
    },
    {
      q: "Do you offer custom research for niche markets?",
      a: "Yes. If your ideal customer profile (ICP) is highly specific and not covered in standard databases, our custom research team will manually compile, dial-test, and verify a list according to your exact requirements.",
    },
    {
      q: "What is your refund or credit policy for invalid data?",
      a: "We offer a 100% bounce-back guarantee. If you encounter a bounce rate higher than 5% on our delivered emails, we will credit your account with 2x replacement records for every invalid contact identified.",
    },
  ]

  // Dynamic schemas for SEO
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Aliign Data",
    "url": "https://www.aliigndata.com",
    "logo": "https://www.aliigndata.com/logo.png",
    "description": "The global business intelligence network providing verified B2B contact lists and data enrichment services.",
    "sameAs": [
      "https://www.linkedin.com/company/aliigndata",
      "https://twitter.com/aliigndata"
    ]
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a,
      },
    })),
  }

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Aliign Data",
    "url": "https://www.aliigndata.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.aliigndata.com/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <>
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />

      <Navbar />

      <main className="min-h-screen bg-white text-[#0F172A] overflow-hidden pt-20">
        
        {/* SECTION 1: HERO */}
        <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center py-12 md:py-20 bg-white">
          <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
          {/* Subtle colorful background radial mesh */}
          <div className="absolute top-1/4 left-1/4 h-[350px] w-[350px] rounded-full bg-blue-100/30 blur-[130px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 h-[300px] w-[300px] rounded-full bg-emerald-100/20 blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 md:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
            {/* Left Side Info */}
            <div className="lg:col-span-6 flex flex-col gap-6 text-left">
              <div className="flex justify-start">
                <Badge variant="blue" icon={<Sparkles className="text-emerald-600 animate-pulse" />}>
                  THE GLOBAL BUSINESS INTELLIGENCE NETWORK
                </Badge>
              </div>
              <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#0F172A] leading-tight">
                Find Companies <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#10B981]">Ready To Buy</span> Before Competitors Do.
              </h1>
              <p className="text-slate-650 text-base md:text-lg leading-relaxed max-w-xl">
                Access verified decision-makers, technology users, healthcare professionals, and business contacts across 100+ countries with industry-leading accuracy.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
                <Link href="#contact" className="w-full sm:w-auto">
                  <Button variant="primary" size="lg" className="w-full">
                    Get Sample Data
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#solutions" className="w-full sm:w-auto">
                  <Button variant="secondary" size="lg" className="w-full">
                    Explore Solutions
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-slate-200 mt-4">
                <div>
                  <h3 className="text-xl font-heading font-extrabold text-slate-900">75M+</h3>
                  <p className="text-[11px] text-slate-500 font-mono mt-0.5 uppercase tracking-wider">Contacts</p>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-extrabold text-slate-900">100+</h3>
                  <p className="text-[11px] text-slate-500 font-mono mt-0.5 uppercase tracking-wider">Countries</p>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-extrabold text-slate-900">95%</h3>
                  <p className="text-[11px] text-slate-500 font-mono mt-0.5 uppercase tracking-wider">Accuracy SLA</p>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-extrabold text-slate-900">30-Day</h3>
                  <p className="text-[11px] text-slate-500 font-mono mt-0.5 uppercase tracking-wider">Refresh Cycle</p>
                </div>
              </div>
            </div>

            {/* Right Side Visualizer */}
            <div className="lg:col-span-6 h-[400px] md:h-[500px] w-full">
              <NetworkVisual />
            </div>
          </div>
        </section>

        {/* SECTION 2: TRUST & SOCIAL PROOF */}
        <section className="py-12 border-y border-slate-200 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">
              Trusted by Revenue Operations at Global Leaders
            </p>
            <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 opacity-60 hover:opacity-90 transition-opacity duration-300">
              {/* Custom typographic logo walls mimicking premium brands */}
              <span className="font-heading font-extrabold text-lg text-slate-800 tracking-widest uppercase">ORACLE</span>
              <span className="font-sans font-extrabold text-xl text-slate-800 tracking-tight">stripe</span>
              <span className="font-heading font-bold text-lg text-slate-800 tracking-wider uppercase">adobe</span>
              <span className="font-sans font-extrabold text-lg text-slate-800">HubSpot</span>
              <span className="font-heading font-black text-xl text-slate-800 tracking-tighter">snowflake</span>
            </div>
          </div>
        </section>

        {/* SECTION 3: THE DATA INTELLIGENCE ENGINE */}
        <section className="py-20 md:py-28 relative bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3">
              <div className="flex justify-center mb-1">
                <Badge variant="blue">Our Verification Pipeline</Badge>
              </div>
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-slate-900 tracking-tight leading-tight">
                How Aliign Data Powers Revenue Growth
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                Discover active pipeline channels through our triple-vetted intelligence gathering process.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {/* Step 1 */}
              <Card variant="blue" className="group/card">
                <CardHeader className="relative">
                  <div className="absolute top-4 right-4 text-xs font-mono text-gray-600 group-hover/card:text-brand-blue font-bold">
                    STEP 01
                  </div>
                  <div className="h-10 w-10 rounded-lg bg-brand-blue/15 text-brand-blue flex items-center justify-center">
                    <Search className="h-5 w-5" />
                  </div>
                  <CardTitle className="mt-2">Discover</CardTitle>
                </CardHeader>
                <CardContent>
                  Our crawler models map organizational technographics, buying signals, and corporate layouts to locate decision makers matching your ICP.
                </CardContent>
              </Card>

              {/* Step 2 */}
              <Card variant="green" className="group/card">
                <CardHeader className="relative">
                  <div className="absolute top-4 right-4 text-xs font-mono text-gray-600 group-hover/card:text-brand-green font-bold">
                    STEP 02
                  </div>
                  <div className="h-10 w-10 rounded-lg bg-brand-green/15 text-brand-green flex items-center justify-center">
                    <RefreshCw className="h-5 w-5" />
                  </div>
                  <CardTitle className="mt-2">Verify</CardTitle>
                </CardHeader>
                <CardContent>
                  Records go through SMTP server verification and direct phone testing. Human researchers scrub bad inboxes every 30 days.
                </CardContent>
              </Card>

              {/* Step 3 */}
              <Card variant="blue" className="group/card">
                <CardHeader className="relative">
                  <div className="absolute top-4 right-4 text-xs font-mono text-gray-600 group-hover/card:text-brand-blue font-bold">
                    STEP 03
                  </div>
                  <div className="h-10 w-10 rounded-lg bg-brand-blue/15 text-brand-blue flex items-center justify-center">
                    <Users className="h-5 w-5" />
                  </div>
                  <CardTitle className="mt-2">Activate</CardTitle>
                </CardHeader>
                <CardContent>
                  Clean contact databases push straight to Salesforce, HubSpot, or custom CSV folders. Launch target campaigns without bouncing.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* SECTION 4: INTERACTIVE DATA UNIVERSE */}
        <section className="py-20 md:py-28 border-t border-slate-200/80 bg-[#F8FAFC] relative">
          <div className="absolute inset-0 bg-grid-bg opacity-15 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="max-w-2xl mb-12 flex flex-col gap-2">
              <div className="flex justify-start mb-1">
                <Badge variant="green">Database Breakdown</Badge>
              </div>
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-slate-900 tracking-tight leading-tight">
                Explore the Data Universe
              </h2>
              <p className="text-slate-650 text-sm leading-relaxed">
                Filter and inspect our major industry verticals to view complete data fields, verified contacts, and segment reach.
              </p>
            </div>
            
            <UniverseMap />
          </div>
        </section>

        {/* SECTION 5: SOLUTIONS ECOSYSTEM */}
        <section id="solutions" className="py-20 md:py-28 border-t border-slate-200/80 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3">
              <div className="flex justify-center mb-1">
                <Badge variant="blue">Custom Data Deliverables</Badge>
              </div>
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-slate-900 tracking-tight leading-tight">
                Tailored Intelligence for Every Outreach Channel
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                Choose the exact segment library to support your sales operations, marketing campaigns, and hiring directives.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <Card variant="blue" className="group/card">
                <CardHeader>
                  <div className="h-10 w-10 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center mb-3">
                    <Cpu className="h-5 w-5" />
                  </div>
                  <CardTitle>Technology Users Database</CardTitle>
                  <CardDescription>
                    Locate accounts using AWS, Shopify, Salesforce, GCP, or other cloud software tools. Filter by technographic signatures.
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-2">
                  <div className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">
                    COVERAGE: 18.4M+ CONTACTS // 95% SLA
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/solutions/technology-users-database" className="text-xs font-bold text-slate-800 hover:text-[#2563EB] flex items-center gap-1 group/link">
                    Explore Solution
                    <ArrowRight className="h-3.5 w-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </Link>
                </CardFooter>
              </Card>

              {/* Card 2 */}
              <Card variant="green" className="group/card">
                <CardHeader>
                  <div className="h-10 w-10 rounded-lg bg-emerald-50 text-[#10B981] flex items-center justify-center mb-3">
                    <Shield className="h-5 w-5" />
                  </div>
                  <CardTitle>Healthcare Database</CardTitle>
                  <CardDescription>
                    NPI-verified listings for clinical directors, head practitioners, surgeons, and administrators in top hospitals.
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-2">
                  <div className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">
                    COVERAGE: 12.1M+ CONTACTS // 95% SLA
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/solutions/healthcare-database" className="text-xs font-bold text-slate-800 hover:text-[#10B981] flex items-center gap-1 group/link">
                    Explore Solution
                    <ArrowRight className="h-3.5 w-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </Link>
                </CardFooter>
              </Card>

              {/* Card 3 */}
              <Card variant="blue" className="group/card">
                <CardHeader>
                  <div className="h-10 w-10 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center mb-3">
                    <Database className="h-5 w-5" />
                  </div>
                  <CardTitle>Professional Email Lists</CardTitle>
                  <CardDescription>
                    Corporate contact listings segmented by job title hierarchy (C-level, VP, Director) and decision authority.
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-2">
                  <div className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">
                    COVERAGE: 22M+ ACTIVE EMAILS // 95% SLA
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/solutions/professional-email-lists" className="text-xs font-bold text-slate-800 hover:text-[#2563EB] flex items-center gap-1 group/link">
                    Explore Solution
                    <ArrowRight className="h-3.5 w-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </Link>
                </CardFooter>
              </Card>

              {/* Card 4 */}
              <Card variant="green" className="group/card">
                <CardHeader>
                  <div className="h-10 w-10 rounded-lg bg-emerald-50 text-[#10B981] flex items-center justify-center mb-3">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <CardTitle>Industry Databases</CardTitle>
                  <CardDescription>
                    Target database sections representing construction, finance, retail, and manufacturing sectors.
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-2">
                  <div className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">
                    COVERAGE: 35M+ ENTITIES // 95% SLA
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/solutions/industry-databases" className="text-xs font-bold text-slate-800 hover:text-[#10B981] flex items-center gap-1 group/link">
                    Explore Solution
                    <ArrowRight className="h-3.5 w-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </Link>
                </CardFooter>
              </Card>

              {/* Card 5 */}
              <Card variant="blue" className="group/card">
                <CardHeader>
                  <div className="h-10 w-10 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center mb-3">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <CardTitle>Data Appending Services</CardTitle>
                  <CardDescription>
                    Upload your outdated prospect databases. We enrich empty spaces, verify old emails, and supply direct phone lines.
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-2">
                  <div className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">
                    ACCURACY: 95% HUMAN VERIFIED
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/solutions/data-appending" className="text-xs font-bold text-slate-800 hover:text-[#2563EB] flex items-center gap-1 group/link">
                    Explore Solution
                    <ArrowRight className="h-3.5 w-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </Link>
                </CardFooter>
              </Card>

              {/* Card 6 */}
              <Card variant="green" className="group/card">
                <CardHeader>
                  <div className="h-10 w-10 rounded-lg bg-emerald-50 text-[#10B981] flex items-center justify-center mb-3">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <CardTitle>Regional Databases</CardTitle>
                  <CardDescription>
                    Geo-targeted contacts across 100+ countries. Filter leads based on state, country, or continental operations.
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-2">
                  <div className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">
                    REGIONS: NA, EMEA, APAC, LATAM
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/solutions/regional-databases" className="text-xs font-bold text-slate-800 hover:text-[#10B981] flex items-center gap-1 group/link">
                    Explore Solution
                    <ArrowRight className="h-3.5 w-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* SECTION 6: INDUSTRIES SERVED */}
        <section id="industries" className="py-20 md:py-28 border-t border-slate-200 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3">
              <div className="flex justify-center mb-1">
                <Badge variant="green">Target Verticals</Badge>
              </div>
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-slate-900 tracking-tight leading-tight">
                Deep Global Coverage Across Core Verticals
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                Connect with executives in niche business categories worldwide with high data verification confidence.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Healthcare */}
              <Card variant="blue" className="group/card">
                <CardHeader>
                  <Shield className="h-5 w-5 text-brand-blue mb-4 group-hover/card:scale-105 transition-transform" />
                  <CardTitle className="group-hover/card:text-brand-blue transition-colors">Healthcare</CardTitle>
                  <CardDescription>
                    NPI-verified hospital directors, nursing leads, and private practitioners.
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-2">
                  <div className="text-[10px] text-gray-500 font-mono">12.1M+ CONTACTS</div>
                </CardContent>
              </Card>

              {/* Technology */}
              <Card variant="green" className="group/card">
                <CardHeader>
                  <Cpu className="h-5 w-5 text-brand-green mb-4 group-hover/card:scale-105 transition-transform" />
                  <CardTitle className="group-hover/card:text-brand-green transition-colors">Technology</CardTitle>
                  <CardDescription>
                    SaaS founders, IT operations executives, developers, and tech buyers.
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-2">
                  <div className="text-[10px] text-gray-500 font-mono">18.4M+ CONTACTS</div>
                </CardContent>
              </Card>

              {/* Finance */}
              <Card variant="blue" className="group/card">
                <CardHeader>
                  <Landmark className="h-5 w-5 text-brand-blue mb-4 group-hover/card:scale-105 transition-transform" />
                  <CardTitle className="group-hover/card:text-brand-blue transition-colors">Finance</CardTitle>
                  <CardDescription>
                    CFOs, investment bankers, controllers, and regulatory risk leads.
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-2">
                  <div className="text-[10px] text-gray-500 font-mono">8.7M+ CONTACTS</div>
                </CardContent>
              </Card>

              {/* Manufacturing */}
              <Card variant="green" className="group/card">
                <CardHeader>
                  <Hammer className="h-5 w-5 text-brand-green mb-4 group-hover/card:scale-105 transition-transform" />
                  <CardTitle className="group-hover/card:text-brand-green transition-colors">Manufacturing</CardTitle>
                  <CardDescription>
                    Operations managers, supply procurement buyers, and plant directors.
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-2">
                  <div className="text-[10px] text-gray-500 font-mono">9.2M+ CONTACTS</div>
                </CardContent>
              </Card>

              {/* Education */}
              <Card variant="blue" className="group/card">
                <CardHeader>
                  <GraduationCap className="h-5 w-5 text-brand-blue mb-4 group-hover/card:scale-105 transition-transform" />
                  <CardTitle className="group-hover/card:text-brand-blue transition-colors">Education</CardTitle>
                  <CardDescription>
                    University deans, K-12 superintendents, and IT school procurement.
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-2">
                  <div className="text-[10px] text-gray-500 font-mono">6.5M+ CONTACTS</div>
                </CardContent>
              </Card>

              {/* Retail */}
              <Card variant="green" className="group/card">
                <CardHeader>
                  <ShoppingBag className="h-5 w-5 text-brand-green mb-4 group-hover/card:scale-105 transition-transform" />
                  <CardTitle className="group-hover/card:text-brand-green transition-colors">Retail</CardTitle>
                  <CardDescription>
                    Merchandising leads, store operations heads, and corporate buyers.
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-2">
                  <div className="text-[10px] text-gray-500 font-mono">7.9M+ CONTACTS</div>
                </CardContent>
              </Card>

              {/* Construction */}
              <Card variant="blue" className="group/card">
                <CardHeader>
                  <Wrench className="h-5 w-5 text-brand-blue mb-4 group-hover/card:scale-105 transition-transform" />
                  <CardTitle className="group-hover/card:text-brand-blue transition-colors">Construction</CardTitle>
                  <CardDescription>
                    Safety directors, project engineers, developers, and field estimators.
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-2">
                  <div className="text-[10px] text-gray-500 font-mono">4.1M+ CONTACTS</div>
                </CardContent>
              </Card>

              {/* Logistics */}
              <Card variant="green" className="group/card">
                <CardHeader>
                  <Truck className="h-5 w-5 text-brand-green mb-4 group-hover/card:scale-105 transition-transform" />
                  <CardTitle className="group-hover/card:text-brand-green transition-colors">Logistics</CardTitle>
                  <CardDescription>
                    Fleet managers, supply coordinators, and distribution hub directors.
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-2">
                  <div className="text-[10px] text-gray-500 font-mono">5.3M+ CONTACTS</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* SECTION 7: WHY ALIIGN DATA */}
        <section className="py-20 md:py-28 border-t border-slate-200 bg-white relative">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3">
              <div className="flex justify-center mb-1">
                <Badge variant="blue">Competitor Comparison</Badge>
              </div>
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-slate-900 tracking-tight leading-tight">
                Not Just a Database. An Intelligence Network.
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                Why global revenue teams migrate from legacy platforms to Aliign Data.
              </p>
            </div>
            
            <ComparisonTable />
          </div>
        </section>

        {/* SECTION 8: CUSTOMER RESULTS */}
        <section id="results" className="py-20 md:py-28 border-t border-slate-200 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="max-w-2xl mb-16 flex flex-col gap-2">
              <div className="flex justify-start mb-1">
                <Badge variant="green">Impact Studies</Badge>
              </div>
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-slate-900 tracking-tight leading-tight">
                Revenue Outcomes Powered by Precision Data
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                See how enterprise sales and marketing operations unlock real pipeline numbers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Study 1 */}
              <Card variant="blue" className="group/card">
                <CardHeader>
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <Badge variant="blue">SOFTWARE & SAAS CASE STUDY</Badge>
                    <span className="text-2xl font-bold text-[#2563EB] font-heading">+42%</span>
                  </div>
                  <CardTitle className="text-lg md:text-xl font-heading font-extrabold leading-snug">
                    &ldquo;Aliign Data completely revamped our outbound operations. Email bounce rates dropped to under 3% in our first campaign.&rdquo;
                  </CardTitle>
                  <CardDescription className="mt-2">
                    By target-filtering companies using AWS and Salesforce Commerce, the sales team boosted response rates by 42% and secured 14 new enterprise client demos in month one.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex items-center gap-3 border-t border-slate-100 pt-4 mt-2">
                  <div className="h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center font-bold text-[#2563EB] text-xs flex-shrink-0">
                    TC
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-800">VP of Sales & Marketing</h5>
                    <p className="text-[10px] text-slate-400 font-mono">Global Cloud Tech Firm</p>
                  </div>
                </CardContent>
              </Card>

              {/* Study 2 */}
              <Card variant="green" className="group/card">
                <CardHeader>
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <Badge variant="green">HEALTHCARE & MEDICAL DEVICES</Badge>
                    <span className="text-2xl font-bold text-[#10B981] font-heading">$4.1M</span>
                  </div>
                  <CardTitle className="text-lg md:text-xl font-heading font-extrabold leading-snug">
                    &ldquo;Reaching actual hospital administrators was impossible before. The direct office email list saved our sales representatives months of guess work.&rdquo;
                  </CardTitle>
                  <CardDescription className="mt-2">
                    Leveraging NPI-verified clinical director files, the medical logistics brand generated over $4.1M in fresh contract pipeline within 90 days.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex items-center gap-3 border-t border-slate-100 pt-4 mt-2">
                  <div className="h-8 w-8 rounded-full bg-emerald-50 flex items-center justify-center font-bold text-[#10B981] text-xs flex-shrink-0">
                    HM
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-800">Chief Marketing Officer</h5>
                    <p className="text-[10px] text-slate-400 font-mono">BioTech Logistics Corp</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* SECTION 9: GLOBAL COVERAGE */}
        <section className="py-20 md:py-28 border-t border-slate-200 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <InteractiveGlobe />
          </div>
        </section>

        {/* SECTION 10: COMPLIANCE & SECURITY */}
        <section id="compliance" className="py-20 md:py-28 border-t border-slate-200 bg-[#F8FAFC] relative">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3">
              <div className="flex justify-center mb-1">
                <Badge variant="blue">Data Integrity</Badge>
              </div>
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-slate-900 tracking-tight leading-tight">
                Enterprise-Grade Privacy & Compliance Built-In
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                Reach prospects with confidence. Our databases align fully with international data governance regulations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* GDPR */}
              <Card variant="green">
                <CardHeader>
                  <div className="h-9 w-9 rounded-lg bg-brand-green/10 text-brand-green flex items-center justify-center mb-2">
                    <Lock className="h-4 w-4" />
                  </div>
                  <CardTitle className="text-sm">GDPR Aligned</CardTitle>
                  <CardDescription>
                    Legitimate Interest assessment (Article 6) fully detailed. Opt-out links are appended in our database registry exports.
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-2">
                  <div className="text-[10px] text-gray-500 font-mono">EUROPEAN UNION compliant</div>
                </CardContent>
              </Card>

              {/* CCPA */}
              <Card variant="blue">
                <CardHeader>
                  <div className="h-9 w-9 rounded-lg bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-2">
                    <Lock className="h-4 w-4" />
                  </div>
                  <CardTitle className="text-sm">CCPA Compliant</CardTitle>
                  <CardDescription>
                    California Consumer Privacy Act requirements met. Instant user verification registries mapped with strict record matching.
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-2">
                  <div className="text-[10px] text-gray-500 font-mono">CALIFORNIA STATE compliant</div>
                </CardContent>
              </Card>

              {/* CASL */}
              <Card variant="green">
                <CardHeader>
                  <div className="h-9 w-9 rounded-lg bg-brand-green/10 text-brand-green flex items-center justify-center mb-2">
                    <Lock className="h-4 w-4" />
                  </div>
                  <CardTitle className="text-sm">CASL Protected</CardTitle>
                  <CardDescription>
                    Canadian Anti-Spam Legislation compliance maps direct corporate consent and commercial solicitation filters.
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-2">
                  <div className="text-[10px] text-gray-500 font-mono">CANADA CAN-SPAM compliant</div>
                </CardContent>
              </Card>

              {/* PIPEDA */}
              <Card variant="blue">
                <CardHeader>
                  <div className="h-9 w-9 rounded-lg bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-2">
                    <Lock className="h-4 w-4" />
                  </div>
                  <CardTitle className="text-sm">PIPEDA Safe</CardTitle>
                  <CardDescription>
                    Data storage and transit comply with Canadian personal information security acts, supporting strict bank-level safeguards.
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-2">
                  <div className="text-[10px] text-gray-500 font-mono">CANADIAN PRIVACY compliant</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* SECTION 11: FAQ */}
        <section id="faq" className="py-20 md:py-28 border-t border-slate-200 bg-white">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="text-center mb-16 flex flex-col gap-3">
              <div className="flex justify-center mb-1">
                <Badge variant="blue">Clarifications</Badge>
              </div>
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-slate-900 tracking-tight leading-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                Everything you need to know about our B2B B2B intelligence network, accuracy verification systems, and compliance frameworks.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100/30 transition-all p-5 cursor-pointer"
                >
                  <summary className="flex items-center justify-between text-sm font-bold text-slate-800 list-none">
                    <span>{faq.q}</span>
                    <span className="transition-transform duration-250 group-open:rotate-180 text-[#2563EB]">
                      &darr;
                    </span>
                  </summary>
                  <p className="text-xs text-slate-650 leading-relaxed mt-3 pt-3 border-t border-slate-200">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 12: FINAL CTA */}
        <section id="contact" className="py-20 md:py-28 border-t border-slate-200 bg-[#F8FAFC] relative">
          {/* Neon blur shapes */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[350px] w-[350px] rounded-full bg-blue-100/20 blur-[120px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[250px] w-[250px] rounded-full bg-emerald-100/10 blur-[100px] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Side Message */}
              <div className="lg:col-span-6 flex flex-col gap-6 text-left">
                <div className="flex justify-start items-center gap-3">
                  <Logo />
                  <span className="text-slate-300">|</span>
                  <Badge variant="green">Secure Your Target Accounts</Badge>
                </div>
                <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-slate-900 tracking-tight leading-tight">
                  Start Building Smarter Revenue Pipelines Today
                </h2>
                <p className="text-slate-650 text-sm leading-relaxed max-w-lg">
                  Submit your custom ideal customer profile requirements. Our verification specialists will run validation algorithms and email you a free sample contact segment sheet within hours.
                </p>

                <div className="flex flex-col gap-3.5 mt-2">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="h-4 w-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-650">Free, phone-verified custom sample lists (no subscription required)</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="h-4 w-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-650">95% transactional email delivery SLA contract</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="h-4 w-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-650">Compliant GDPR/CCPA consumer registry check</span>
                  </div>
                </div>
              </div>

              {/* Right Side Form */}
              <div className="lg:col-span-6">
                <LeadForm />
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
