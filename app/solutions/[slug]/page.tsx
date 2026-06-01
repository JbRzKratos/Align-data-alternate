import React from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  CheckCircle,
  Database,
  ArrowRight,
  Sparkles,
  Filter,
  Users,
  Terminal,
  ChevronRight
} from "lucide-react"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import LeadForm from "@/components/lead-form"
import Badge from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

// Pre-render solutions paths statically at build time for optimal load speed and SEO
export async function generateStaticParams() {
  return [
    { slug: "technology-users-database" },
    { slug: "healthcare-database" },
    { slug: "professional-email-lists" },
    { slug: "industry-databases" },
    { slug: "regional-databases" },
    { slug: "data-appending" },
  ]
}

// Metadata generation for dynamic SEO tags
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const data = solutionData[slug as keyof typeof solutionData]
  if (!data) return {}

  const pageTitle = `${data.name} | Aliign Data Intelligence`
  const pageDesc = `${data.subtitle} Access verified contact details, direct dials, and market segment data with 95% accuracy SLA.`

  return {
    title: pageTitle,
    description: pageDesc,
    keywords: `${data.name}, B2B Database, Verified Contacts, Business Intelligence, ${data.keyword}`,
    openGraph: {
      title: pageTitle,
      description: pageDesc,
      url: `https://www.aliigndata.com/solutions/${data.slug}`,
      siteName: "Aliign Data",
      images: [
        {
          url: "https://www.aliigndata.com/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `${data.name} - Aliign Data`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDesc,
      images: ["https://www.aliigndata.com/twitter-image.jpg"],
      creator: "@aliigndata",
    },
  }
}

interface SolutionContent {
  name: string
  slug: string
  keyword: string
  subtitle: string
  h1: string
  stats: string[]
  overview: string
  benefits: { title: string; desc: string }[]
  whoUses: string[]
  fields: { name: string; desc: string }[]
  industries: { name: string; count: string }[]
  useCases: { title: string; desc: string }[]
  filters: string[]
  caseStudy: { quote: string; metrics: string; author: string; company: string }
  faqs: { q: string; a: string }[]
}

const solutionData: Record<string, SolutionContent> = {
  "technology-users-database": {
    name: "Technology Users Database",
    slug: "technology-users-database",
    keyword: "Technographic Data Provider",
    subtitle: "Identify and connect with companies using specific software and infrastructure stacks.",
    h1: "Technology Users & Technographic Database",
    stats: ["18.4M+ Contacts", "420K+ Accounts", "95% Direct Accuracy", "30-Day Refresh"],
    overview: "Our technographic intelligence database maps active enterprise software footprints, cloud frameworks, developer tools, and security subscriptions. Stop guessing tech stacks and start matching accounts based on what they run.",
    benefits: [
      { title: "Precise Technographics", desc: "Filter by active installations of AWS, Salesforce, SAP, React, HubSpot, and 5,000+ other technologies." },
      { title: "C-Suite Contact Paths", desc: "Gain direct email and phone routes to CTOs, VPs of Infrastructure, and IT Managers." },
      { title: "Signal Alerting", desc: "Know when target accounts add or drop specific software subscriptions in their operations." }
    ],
    whoUses: ["Enterprise Sales Teams", "Product Marketers", "SaaS Growth Managers", "Technical Recruiters"],
    fields: [
      { name: "Active Stack Profile", desc: "List of identified technologies currently in use." },
      { name: "IT Budget Segment", desc: "Estimated annual spend on technology infrastructure." },
      { name: "Engineering Headcount", desc: "Size of development and IT support operations." }
    ],
    industries: [
      { name: "SaaS & Cloud Software", count: "8.2M Leads" },
      { name: "FinTech & Payments", count: "3.4M Leads" },
      { name: "E-commerce Brands", count: "4.1M Leads" },
      { name: "Cybersecurity Services", count: "2.7M Leads" }
    ],
    useCases: [
      { title: "Competitive Takeouts", desc: "Target competitors' customers with high-value migration campaigns." },
      { title: "Integration Marketing", desc: "Promote add-ons and plugins directly to users of core software hosts." },
      { title: "Targeted ABM", desc: "Create dedicated marketing plays personalized to their technical stack." }
    ],
    filters: ["Technology Installed", "IT Budget Size", "Engineering Team Headcount", "State/City Location", "Title Seniority"],
    caseStudy: {
      quote: "Aliign Data helped us isolate Shopify Plus users in Europe. Inbound demo requests from our campaign jumped by 42%.",
      metrics: "14 Demos in 30 Days",
      author: "VP of Enterprise Growth",
      company: "Cloud Integrations Inc."
    },
    faqs: [
      { q: "How do you trace technology installations?", a: "We monitor public web source tags, active job descriptions, server pings, and digital signatures to create a complete profile of a brand's technical footprint." },
      { q: "How fresh is the technology usage data?", a: "We run validation sweeps every 30 days, refreshing records to account for software migrations, platform changes, and employee turnover." }
    ]
  },
  "healthcare-database": {
    name: "Healthcare Database",
    slug: "healthcare-database",
    keyword: "Medical Contacts Database",
    subtitle: "NPI-verified contacts for doctors, hospital directors, and practitioners.",
    h1: "Healthcare & Medical Professionals Database",
    stats: ["12.1M+ Records", "180K+ Clinics/Hospitals", "96% Verification Rate", "30-Day Audit Cycle"],
    overview: "Direct, compliant contact channels for licensed doctors, surgeons, clinic administrators, and health executives. Our records are mapped using National Provider Identifier (NPI) credentials.",
    benefits: [
      { title: "NPI Validation", desc: "Every physician profile is matched against active state medical licenses and national databases." },
      { title: "Direct Hospital Routes", desc: "Bypass standard clinic desks with direct emails to department heads and procurement leads." },
      { title: "HIPAA Compliant Data", desc: "All details are compiled inside strict compliance frameworks and public health filings." }
    ],
    whoUses: ["Medical Device Sales", "Pharma Representatives", "Healthcare Recruiters", "Surgical Suppliers"],
    fields: [
      { name: "NPI Registry Number", desc: "Validated National Provider Identifier for licensing checks." },
      { name: "Hospital Affiliation", desc: "Primary medical centers where the practitioner operates." },
      { name: "Medical Specialty", desc: "Specific field of practice (e.g., Cardiology, Oncology)." }
    ],
    industries: [
      { name: "Public & Private Hospitals", count: "4.8M Leads" },
      { name: "Outpatient Clinics", count: "3.2M Leads" },
      { name: "Dental Clinics", count: "1.9M Leads" },
      { name: "Long-term Care Sites", count: "2.2M Leads" }
    ],
    useCases: [
      { title: "Device Procurement", desc: "Present surgical and operational tools directly to clinic purchasing agents." },
      { title: "Clinical Trial Hiring", desc: "Reach specialist physicians to coordinate pharmaceutical research studies." },
      { title: "Executive Placement", desc: "Locate medical directors and hospital chiefs for specialized healthcare positions." }
    ],
    filters: ["NPI Status", "Clinical Specialty", "Affiliated Hospital Network", "Location State", "Bed Count Capacity"],
    caseStudy: {
      quote: "Bypassing hospital front desks saved our sales representatives months of outreach. We booked meetings with 8 new cardiology heads.",
      metrics: "$4.1M Contract Pipeline",
      author: "Director of Medical Sales",
      company: "CardioLogix Solutions"
    },
    faqs: [
      { q: "Is this database compliant with healthcare standards?", a: "Yes. All contact profiles represent business communication coordinates and are sourced from public provider registries, professional filings, and license boards." },
      { q: "Can we filter by NPI taxonomy code?", a: "Yes. You can isolate practitioners down to their exact taxonomy code, clinical sub-specialty, and state credential registry status." }
    ]
  },
  "professional-email-lists": {
    name: "Professional Email Lists",
    slug: "professional-email-lists",
    keyword: "Corporate Email Directory",
    subtitle: "Premium, verified corporate email segments structured by job title and department.",
    h1: "Professional Business Email Lists",
    stats: ["22M+ Active Profiles", "100+ Job Verticals", "95% Inbox Deliverability", "30-Day SMTP Cleansing"],
    overview: "Gain direct email connections to executive buyers, managers, and directors. Every email address passes through server pings and domain validations before delivery to eliminate bounces.",
    benefits: [
      { title: "95% Deliverability SLA", desc: "If more than 5% of our emails bounce, we credit your account with twice the replacement contacts." },
      { title: "No Scraped Web-Trash", desc: "We utilize active double-opt-in B2B networks and manual verification to validate names." },
      { title: "Role-Based Targeting", desc: "Segment by executive hierarchy level from C-suite directors down to regional leads." }
    ],
    whoUses: ["Outbound Sales Representatives", "Demand Generation Teams", "Event Coordinators", "Agency Partners"],
    fields: [
      { name: "Direct Business Email", desc: "Corporate-domain inbox validated via SMTP handshake." },
      { name: "Job Title & Level", desc: "Standardized organizational seniority and department tags." },
      { name: "LinkedIn URL link", desc: "Direct profile reference to verify executive employment." }
    ],
    industries: [
      { name: "Enterprise Business Services", count: "6.8M Leads" },
      { name: "Finance & Accounting", count: "4.5M Leads" },
      { name: "Marketing & Creative", count: "5.2M Leads" },
      { name: "HR & Recruitment", count: "5.5M Leads" }
    ],
    useCases: [
      { title: "Cold Outbound Campaigns", desc: "Feed your CRM clean, verified lists to run cold email sales campaigns." },
      { title: "Webinar Recruitment", desc: "Drive event registration by inviting highly relevant niche industry decision makers." },
      { title: "Custom Lookalike Segments", desc: "Export contact coordinates to feed advertising networks for matched targeting." }
    ],
    filters: ["Job Title", "Department", "Company Seniority", "Geography Zip", "Corporate Domain Status"],
    caseStudy: {
      quote: "Bounces dropped from 18% with our old vendor to under 2.5% with Aliign Data. Our sales team spent less time cleaning lists.",
      metrics: "98% Email Delivery Rate",
      author: "Head of Marketing",
      company: "SaaS Analytics Corp"
    },
    faqs: [
      { q: "Do you supply personal email addresses (Gmail, Yahoo)?", a: "No. We exclusively compile corporate B2B business emails (e.g. name@company.com) to support professional commercial outreach regulations." },
      { q: "How do you verify email statuses?", a: "We run active SMTP handshakes, test domain record existence (MX, SPF), and monitor incoming bounce signals in our network." }
    ]
  },
  "industry-databases": {
    name: "Industry Databases",
    slug: "industry-databases",
    keyword: "B2B Industry Lists",
    subtitle: "Complete B2B records covering manufacturing, finance, retail, and construction.",
    h1: "Comprehensive B2B Industry Databases",
    stats: ["35M+ Records", "12 Major Sectors", "95% Verification SLA", "30-Day Cycle Update"],
    overview: "Segmented, high-quality company profiles and contact details spanning primary global business trade divisions, manufacturing, logistics, and retail groups.",
    benefits: [
      { title: "Vertical Segmentation", desc: "Isolate organizations down to specific SIC, NAICS, and custom trade taxonomy codes." },
      { title: "Firmographic Metrics", desc: "Get company size, annual revenue range, growth rate, and corporate hierarchy." },
      { title: "Multinational Coverage", desc: "Target businesses located across North America, Europe, Asia Pacific, and LATAM." }
    ],
    whoUses: ["B2B Sales Executives", "Market Researchers", "Investment Bankers", "Logistics Brands"],
    fields: [
      { name: "NAICS / SIC Code", desc: "Standard industry classification tags for firmographic sorting." },
      { name: "Annual Sales Revenue", desc: "Estimated corporate revenues to match ideal budget sizes." },
      { name: "Corporate Hierarchy", desc: "Identify HQ locations versus regional offices." }
    ],
    industries: [
      { name: "Manufacturing & Industrial", count: "9.2M Leads" },
      { name: "Banking & Finance", count: "8.7M Leads" },
      { name: "Retail & E-commerce", count: "7.9M Leads" },
      { name: "Construction & Engineering", count: "4.1M Leads" }
    ],
    useCases: [
      { title: "Territory Assignment", desc: "Assign sales territories to reps based on local company densities." },
      { title: "Commercial Solicitation", desc: "Deliver specialized logistics or service proposals to company operators." },
      { title: "Competitor Market Research", desc: "Audit the size and growth trajectories of specific market spaces." }
    ],
    filters: ["SIC/NAICS Code", "Revenue Range", "Company Headcount", "HQ State", "Growth Trajectory"],
    caseStudy: {
      quote: "We mapped and targeted regional manufacturing plant directors in the Midwest, securing 6 new supplier relationships.",
      metrics: "16% Response Improvement",
      author: "Supply Chain Manager",
      company: "Integra Logistics"
    },
    faqs: [
      { q: "Can I filter by specific NAICS codes?", a: "Yes. Our database supports filtering by 2-digit, 4-digit, and 6-digit NAICS codes, as well as classic 4-digit SIC codes." },
      { q: "Do you include corporate hierarchy trees?", a: "Yes. You can isolate parent organizations and view associated child companies, branches, or distribution outlets." }
    ]
  },
  "regional-databases": {
    name: "Regional Databases",
    slug: "regional-databases",
    keyword: "Global B2B Contacts",
    subtitle: "Global geographic contact segments spanning North America, Europe, and APAC.",
    h1: "Global Regional B2B Databases",
    stats: ["75M+ Contacts", "100+ Countries", "95% Accuracy Guarantee", "30-Day Check Cycle"],
    overview: "Search for prospects across global business hubs. Filter by state, country, or continental operations while remaining aligned with regional privacy standards like GDPR, CASL, and PIPEDA.",
    benefits: [
      { title: "Privacy Compliance", desc: "Our database elements dynamically adjust filters to align with local privacy regulations." },
      { title: "Native Verification", desc: "Global lists are processed by native language validation researchers." },
      { title: "Geographic Sorting", desc: "Filter by continent, nation, state/province, city, and zip code grids." }
    ],
    whoUses: ["Global Sales Leaders", "Exporters & Distributors", "International recruiters", "Enterprise Marketers"],
    fields: [
      { name: "Full Mailing Address", desc: "Validated corporate headquarters street coordinates." },
      { name: "Country Code Segment", desc: "Geographic categorization for international sorting." },
      { name: "Local Standard Timezone", desc: "Timezone information to coordinate contact calls." }
    ],
    industries: [
      { name: "North American Market", count: "32M Leads" },
      { name: "European Union (EU)", count: "19M Leads" },
      { name: "Asia-Pacific Region", count: "14M Leads" },
      { name: "Middle East & Africa", count: "10M Leads" }
    ],
    useCases: [
      { title: "Global Expansion", desc: "Identify target accounts when expanding services into new countries." },
      { title: "Regional Events", desc: "Acquire lists of local decision-makers to invite to local trade panels." },
      { title: "Localised Campaigns", desc: "Write marketing emails customized to local issues, terms, and time zones." }
    ],
    filters: ["Country Location", "State/Province", "Zip/Postal Code", "Timezone Offset", "Company Scale"],
    caseStudy: {
      quote: "Targeting tech firms in Singapore and Sydney helped us launch our APAC office with active lead lists from day one.",
      metrics: "$1.8M APAC Pipeline",
      author: "Head of International Growth",
      company: "Devflow Security"
    },
    faqs: [
      { q: "How do you handle GDPR compliance for European Union contacts?", a: "All EU contacts represent corporate profiles. Opt-out options are provided with every file, in accordance with Article 6 (Legitimate Interest) parameters." },
      { q: "Can we extract timezone details?", a: "Yes. Timezone details are mapped to all exported contact profiles to coordinate call times." }
    ]
  },
  "data-appending": {
    name: "Data Appending Services",
    slug: "data-appending",
    keyword: "B2B Data Enrichment",
    subtitle: "Clean, match, and enrich your existing contact files with 95% accuracy.",
    h1: "B2B Data Appending & Enrichment Services",
    stats: ["95% Enrich Accuracy", "Fast 24hr Turnaround", "SMTP Verification Checks", "Manual Verification Match"],
    overview: "Upload your stale, incomplete lead lists. Our intelligence engine matching systems automatically fill missing fields, clean invalid emails, and append direct phone routes.",
    benefits: [
      { title: "Eradicate Decay", desc: "Up to 30% of sales contacts go stale annually. We clean old profiles and update job titles." },
      { title: "Fill Missing Gaps", desc: "Turn simple email lists into rich profiles with direct lines, revenue, and tech stack details." },
      { title: "Fast Match Speeds", desc: "Our automated systems process and return enriched database sheets in under 24 hours." }
    ],
    whoUses: ["CRM Administrators", "Marketing Ops Leads", "Sales Ops Directors", "Database Managers"],
    fields: [
      { name: "Appended Direct Dials", desc: "Verified telephone lines matching the contact name." },
      { name: "Cleaned Email Flags", desc: "Tagging showing whether existing addresses are still active." },
      { name: "Current Job Title", desc: "Updates to verify if the contact has been promoted or relocated." }
    ],
    industries: [
      { name: "Salesforce CRM syncs", count: "10K+ Appends" },
      { name: "HubSpot CRM cleanings", count: "14K+ Appends" },
      { name: "Custom CSV Enrichments", count: "25K+ Appends" },
      { name: "Cold List Appends", count: "8K+ Appends" }
    ],
    useCases: [
      { title: "Outbound Refresh", desc: "Update your target CRM segments before launching outbound campaigns." },
      { title: "Lead Form Enrichment", desc: "Reduce website form friction by asking only for emails and appending the rest." },
      { title: "Account Based Targeting", desc: "Gather missing executive contacts at key accounts to support marketing plays." }
    ],
    filters: ["Custom Match Key", "Enrichment Type", "CRM Sync Option", "Required Field Appends", "Bounce Check Status"],
    caseStudy: {
      quote: "We ran our legacy list of 15,000 leads through Aliign Data. They found direct dials for 65% of names and removed 2,400 dead emails.",
      metrics: "95% Validated Matches",
      author: "Director of Marketing Ops",
      company: "Logix Software Group"
    },
    faqs: [
      { q: "What is your pricing model for appending services?", a: "We charge on a pay-per-match credit system. You only pay for records successfully enriched with new, verified information." },
      { q: "Can you append direct phone numbers?", a: "Yes. We focus on direct office lines and verified direct-dials, testing connectivity beforehand." }
    ]
  }
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const data = solutionData[slug as keyof typeof solutionData]

  if (!data) {
    notFound()
  }

  // Related Solutions auto recommendation
  const relatedSolutions = Object.values(solutionData)
    .filter((sol) => sol.slug !== slug)
    .slice(0, 3)

  // Dynamically built schemas for dynamic SEO
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": data.name,
    "description": data.subtitle,
    "provider": {
      "@type": "Organization",
      "name": "Aliign Data",
      "url": "https://www.aliigndata.com"
    },
    "areaServed": "Global",
    "serviceType": "B2B Data Intelligence"
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.aliigndata.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Solutions",
        "item": `https://www.aliigndata.com/solutions`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": data.name,
        "item": `https://www.aliigndata.com/solutions/${data.slug}`
      }
    ]
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faqs.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a,
      },
    })),
  }

  return (
    <>
      {/* Dynamic SEO Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />

      <main className="min-h-screen bg-white text-[#0F172A] pt-24 pb-20">
        
        {/* SECTION 1: HERO */}
        <section className="relative py-20 md:py-28 border-b border-slate-200/80 overflow-hidden bg-white">
          <div className="absolute inset-0 grid-bg opacity-45 pointer-events-none" />
          <div className="absolute top-1/4 left-1/4 h-[350px] w-[350px] rounded-full bg-blue-100/30 blur-[130px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 h-[300px] w-[300px] rounded-full bg-emerald-100/20 blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Side: Title & Key Stats */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-left">
              <div className="flex justify-start items-center gap-2 text-brand-blue text-xs font-mono">
                <Database className="h-4 w-4" />
                <span>SOLUTIONS</span>
                <ChevronRight className="h-3 w-3 text-slate-400" />
                <span className="text-slate-500 font-bold">{data.name}</span>
              </div>
              
              <h1 className="font-heading font-extrabold text-4xl md:text-5xl tracking-tight leading-tight text-slate-900">
                {data.h1}
              </h1>
              
              <p className="text-slate-650 text-base md:text-lg leading-relaxed max-w-xl">
                {data.subtitle}
              </p>

              {/* Stat Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-slate-200 mt-2">
                {data.stats.map((stat, i) => (
                  <div key={i}>
                    <h3 className="text-lg font-heading font-extrabold text-slate-900">{stat.split(" ")[0]}</h3>
                    <p className="text-[10px] text-slate-500 font-mono mt-0.5 uppercase tracking-wider">
                      {stat.split(" ").slice(1).join(" ")}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: Lead Form Card */}
            <div className="lg:col-span-5">
              <LeadForm defaultSolution={data.name} />
            </div>

          </div>
        </section>

        {/* SECTION 2: OVERVIEW */}
        <section className="py-20 border-b border-slate-200/80 bg-[#F8FAFC] relative">
          <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5 flex flex-col justify-start">
                <div className="flex justify-start mb-1">
                  <Badge variant="green">Solution Brief</Badge>
                </div>
                <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-slate-900 tracking-tight mt-2 leading-tight">
                  Unlocking High-Intent Data Segments
                </h2>
                <p className="text-slate-650 text-sm mt-4 leading-relaxed">
                  {data.overview}
                </p>
              </div>

              <div className="lg:col-span-7 flex flex-col gap-6">
                {data.benefits.map((benefit, i) => (
                  <Card key={i} variant="blue" className="group/card">
                    <CardHeader className="flex flex-row items-start gap-4 pb-5 md:pb-6">
                      <div className="p-2 rounded bg-brand-blue/10 text-brand-blue h-9 w-9 flex items-center justify-center flex-shrink-0 group-hover/card:scale-105 transition-transform">
                        <Sparkles className="h-4.5 w-4.5" />
                      </div>
                      <div className="flex-grow">
                        <CardTitle className="text-sm font-bold text-slate-900">{benefit.title}</CardTitle>
                        <CardDescription className="text-xs text-slate-600 mt-1 leading-normal">
                          {benefit.desc}
                        </CardDescription>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: WHO USES THIS DATA */}
        <section className="py-20 border-b border-slate-200/80 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 flex flex-col gap-3">
              <div className="flex justify-center mb-1">
                <Badge variant="green">Target Audience</Badge>
              </div>
              <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-slate-900 tracking-tight">
                Who Powers Campaigns With This Data?
              </h2>
              <p className="text-slate-650 text-sm leading-relaxed">
                Teams utilizing our verified intelligence to accelerate conversion rates.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {data.whoUses.map((user, i) => (
                <Card key={i} variant="green" className="text-center flex flex-col items-center">
                  <CardHeader className="flex flex-col items-center pb-5 md:pb-6">
                    <div className="p-2.5 rounded-lg bg-slate-100/80 text-brand-green mb-2 group-hover/card:scale-105 transition-transform">
                      <Users className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-sm font-bold text-slate-900">{user}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: AVAILABLE DATA FIELDS */}
        <section className="py-20 border-b border-slate-200/80 bg-[#F8FAFC] relative">
          <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 flex flex-col gap-4">
                <div className="flex justify-start mb-1">
                  <Badge variant="blue">Record Anatomy</Badge>
                </div>
                <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-slate-900 tracking-tight leading-tight">
                  Granular Field Intelligence In Every File
                </h2>
                <p className="text-slate-650 text-sm leading-relaxed">
                  Every contact sheet is packed with standardized firmographic and technographic columns to simplify custom CRM mappings.
                </p>

                <div className="flex flex-wrap gap-2 mt-2">
                  {["Email", "Direct Phone", "Job Title", "Employees", "Industry", "HQ City", "Revenue Range"].map((field) => (
                    <Badge key={field} variant="gray">
                      {field}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
                {data.fields.map((field, i) => (
                  <Card key={i} variant="green">
                    <CardHeader className="pb-5 md:pb-6">
                      <div className="h-8 w-8 rounded-lg bg-brand-green/10 text-brand-green flex items-center justify-center mb-1 group-hover/card:scale-105 transition-transform">
                        <Terminal className="h-4.5 w-4.5" />
                      </div>
                      <CardTitle className="text-sm text-slate-900">{field.name}</CardTitle>
                      <CardDescription className="text-[11px] text-slate-600 mt-1 leading-normal">
                        {field.desc}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: DATA VERIFICATION TIMELINE */}
        <section className="py-20 border-b border-slate-200/80 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3">
              <div className="flex justify-center mb-1">
                <Badge variant="green">Our Methodology</Badge>
              </div>
              <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-slate-900 tracking-tight leading-tight">
                The 5-Stage Verification Engine
              </h2>
              <p className="text-slate-650 text-sm leading-relaxed">
                How we isolate decayed information and guarantee 95% deliverability rates.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
              {/* Process line (desktop) */}
              <div className="hidden md:block absolute top-[52px] left-[50px] right-[50px] h-0.5 bg-gradient-to-r from-brand-blue to-brand-green opacity-20 pointer-events-none" />

              {/* Step 1 */}
              <Card variant="blue" className="text-center relative z-10 flex flex-col items-center">
                <CardHeader className="flex flex-col items-center pb-2">
                  <div className="h-12 w-12 rounded-full bg-slate-50 border border-slate-200/80 text-brand-blue flex items-center justify-center font-bold text-sm mb-2 shadow-sm group-hover/card:scale-105 group-hover/card:border-brand-blue/30 transition-transform">
                    01
                  </div>
                  <CardTitle className="text-sm font-bold text-slate-900">Collection</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-slate-550 text-[11px] leading-relaxed">
                  Systematic crawling of public record sets.
                </CardContent>
              </Card>

              {/* Step 2 */}
              <Card variant="green" className="text-center relative z-10 flex flex-col items-center">
                <CardHeader className="flex flex-col items-center pb-2">
                  <div className="h-12 w-12 rounded-full bg-slate-50 border border-slate-200/80 text-brand-green flex items-center justify-center font-bold text-sm mb-2 shadow-sm group-hover/card:scale-105 group-hover/card:border-brand-green/30 transition-transform">
                    02
                  </div>
                  <CardTitle className="text-sm font-bold text-slate-900">Validation</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-slate-550 text-[11px] leading-relaxed">
                  SMTP handshake testing and server-level pinging.
                </CardContent>
              </Card>

              {/* Step 3 */}
              <Card variant="blue" className="text-center relative z-10 flex flex-col items-center">
                <CardHeader className="flex flex-col items-center pb-2">
                  <div className="h-12 w-12 rounded-full bg-slate-50 border border-slate-200/80 text-brand-blue flex items-center justify-center font-bold text-sm mb-2 shadow-sm group-hover/card:scale-105 group-hover/card:border-brand-blue/30 transition-transform">
                    03
                  </div>
                  <CardTitle className="text-sm font-bold text-slate-900">Enrichment</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-slate-550 text-[11px] leading-relaxed">
                  Mapping technographics and missing phone dials.
                </CardContent>
              </Card>

              {/* Step 4 */}
              <Card variant="green" className="text-center relative z-10 flex flex-col items-center">
                <CardHeader className="flex flex-col items-center pb-2">
                  <div className="h-12 w-12 rounded-full bg-slate-50 border border-slate-200/80 text-brand-green flex items-center justify-center font-bold text-sm mb-2 shadow-sm group-hover/card:scale-105 group-hover/card:border-brand-green/30 transition-transform">
                    04
                  </div>
                  <CardTitle className="text-sm font-bold text-slate-900">Verification</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-slate-550 text-[11px] leading-relaxed">
                  Manual validation phone calls by research staff.
                </CardContent>
              </Card>

              {/* Step 5 */}
              <Card variant="blue" className="text-center relative z-10 flex flex-col items-center">
                <CardHeader className="flex flex-col items-center pb-2">
                  <div className="h-12 w-12 rounded-full bg-slate-50 border border-slate-200/80 text-brand-blue flex items-center justify-center font-bold text-sm mb-2 shadow-sm group-hover/card:scale-105 group-hover/card:border-brand-blue/30 transition-transform">
                    05
                  </div>
                  <CardTitle className="text-sm font-bold text-slate-900">Refresh</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-slate-550 text-[11px] leading-relaxed">
                  Full database scrubbing on 30-day schedules.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* SECTION 6: INDUSTRY COVERAGE */}
        <section className="py-20 border-b border-slate-200/80 bg-[#F8FAFC] relative">
          <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
            <div className="max-w-2xl mb-12 flex flex-col gap-3">
              <div className="flex justify-start">
                <Badge variant="blue">Database Verticals</Badge>
              </div>
              <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-slate-900 tracking-tight mt-1">
                Data Volume Across Sub-Sectors
              </h2>
              <p className="text-slate-650 text-sm mt-3">
                See record volumes in major target business categories.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.industries.map((ind, i) => (
                <Card key={i} variant="blue" className="group/card flex flex-row justify-between items-center">
                  <CardHeader className="flex-grow pb-5 md:pb-6">
                    <CardTitle className="text-sm font-bold text-slate-900 group-hover/card:text-[#2563EB] transition-colors">{ind.name}</CardTitle>
                    <CardDescription className="text-xs text-[#2563EB] mt-1 block font-mono font-bold">{ind.count}</CardDescription>
                  </CardHeader>
                  <div className="pr-5 md:pr-6 flex-shrink-0">
                    <ChevronRight className="h-4 w-4 text-slate-400 group-hover/card:text-[#2563EB] group-hover/card:translate-x-0.5 transition-all" />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 7: USE CASES */}
        <section className="py-20 border-b border-slate-200/80 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3">
              <div className="flex justify-center mb-1">
                <Badge variant="green">Playbooks</Badge>
              </div>
              <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-slate-900 tracking-tight">
                Unlock High-Impact Playbooks
              </h2>
              <p className="text-slate-650 text-sm leading-relaxed">
                Actionable marketing methods to feed your custom data files into.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {data.useCases.map((use, i) => (
                <Card key={i} variant="green" className="group/card flex flex-col justify-between">
                  <CardHeader>
                    <div className="p-2.5 rounded bg-brand-green/10 text-brand-green h-9 w-9 flex items-center justify-center group-hover/card:scale-105 transition-transform mb-2">
                      <CheckCircle className="h-4.5 w-4.5" />
                    </div>
                    <CardTitle className="text-sm font-bold text-slate-900">{use.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {use.desc}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 8: FILTERING OPTIONS */}
        <section className="py-20 border-b border-slate-200/80 bg-[#F8FAFC] relative">
          <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 flex flex-col gap-4">
                <div className="flex justify-start">
                  <Badge variant="blue">Custom Segmenting</Badge>
                </div>
                <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-slate-900 tracking-tight leading-tight">
                  Build Your List With Advanced Filters
                </h2>
                <p className="text-slate-650 text-sm leading-relaxed">
                  Isolate prospects by combined filters to generate highly targeted segments for outbound representatives.
                </p>
              </div>

              <div className="lg:col-span-7 flex flex-wrap gap-3">
                {data.filters.map((filter, i) => (
                  <Badge key={i} variant="gray" icon={<Filter className="h-3.5 w-3.5 text-brand-blue" />}>
                    {filter}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 10: CASE STUDY */}
        <section className="py-20 border-b border-slate-200/80 bg-white">
          <div className="max-w-5xl mx-auto px-6 md:px-8">
            <Card variant="green" hoverable={false} className="p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center relative overflow-hidden bg-white border border-slate-200 shadow-sm">
              <div className="absolute top-0 right-0 h-40 w-40 bg-brand-green/5 rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex-1">
                <div className="flex justify-start mb-4">
                  <Badge variant="green">Client Results</Badge>
                </div>
                <h3 className="font-heading font-extrabold text-xl md:text-2xl text-slate-900 leading-snug mb-4">
                  &ldquo;{data.caseStudy.quote}&rdquo;
                </h3>
                <div className="text-xs text-slate-600">
                  <span className="font-bold text-slate-900">{data.caseStudy.author}</span>, {data.caseStudy.company}
                </div>
              </div>

              <div className="text-center md:border-l md:border-slate-200 md:pl-12 flex flex-col gap-2 flex-shrink-0 w-full md:w-auto">
                <span className="text-4xl font-heading font-extrabold text-[#10B981]">
                  {data.caseStudy.metrics.split(" ")[0]}
                </span>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider font-mono">
                  {data.caseStudy.metrics.split(" ").slice(1).join(" ")}
                </span>
              </div>
            </Card>
          </div>
        </section>

        {/* SECTION 9: RELATED SOLUTIONS */}
        <section className="py-20 border-b border-slate-200/80 bg-[#F8FAFC] relative">
          <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
            <div className="max-w-2xl mb-12 flex flex-col gap-3">
              <div className="flex justify-start">
                <Badge variant="blue">Recommendations</Badge>
              </div>
              <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-slate-900 tracking-tight">
                Recommended Solutions
              </h2>
              <p className="text-slate-650 text-sm leading-relaxed">
                Other data assets to enrich your revenue intelligence stack.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedSolutions.map((sol) => (
                <Card key={sol.slug} variant="blue" className="group/card flex flex-col justify-between bg-white border border-slate-200/60 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-base font-bold text-slate-900 group-hover/card:text-[#2563EB] transition-colors">
                      {sol.name}
                    </CardTitle>
                    <CardDescription className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {sol.subtitle}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="pt-2">
                    <Link href={`/solutions/${sol.slug}`} className="text-xs font-bold text-[#2563EB] hover:underline flex items-center gap-1 group/link">
                      Learn More
                      <ArrowRight className="h-3.5 w-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 11: FAQ */}
        <section className="py-20 border-b border-slate-200/80 bg-white">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="text-center mb-16 flex flex-col gap-3">
              <div className="flex justify-center mb-1">
                <Badge variant="blue">Clarifications</Badge>
              </div>
              <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-slate-900 tracking-tight mt-1">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="flex flex-col gap-4">
              {data.faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group rounded-xl border border-slate-200/80 bg-slate-50 hover:bg-slate-100/40 hover:border-slate-300 transition-all p-5 cursor-pointer"
                >
                  <summary className="flex items-center justify-between text-sm font-bold text-slate-900 list-none">
                    <span>{faq.q}</span>
                    <span className="transition-transform duration-250 group-open:rotate-180 text-brand-blue">
                      &darr;
                    </span>
                  </summary>
                  <p className="text-xs text-slate-600 leading-relaxed mt-3 pt-3 border-t border-slate-200">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 12: LEAD GENERATION FORM */}
        <section className="py-20 md:py-28 relative bg-[#F8FAFC]">
          <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-blue-100/30 blur-[100px] pointer-events-none" />
          
          <div className="max-w-3xl mx-auto px-6 md:px-8 relative z-10 text-center flex flex-col gap-6 items-center">
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-slate-900 tracking-tight leading-tight max-w-xl">
              Get Your Custom {data.name} Sample File
            </h2>
            <p className="text-slate-650 text-sm leading-relaxed max-w-md mb-4">
              Specify your target filters and coordinates. Our specialists will manually extract, SMTP-verify, and deliver a free CSV sample within hours.
            </p>

            <div className="w-full text-left">
              <LeadForm defaultSolution={data.name} />
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
