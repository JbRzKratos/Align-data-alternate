import React from "react"
import Link from "next/link"
import Script from "next/script"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import {
  CheckCircle,
  Database,
  ArrowRight,
  Sparkles,
  Filter,
  Users,
  Terminal,
  ChevronRight,
} from "lucide-react"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import LeadForm from "@/components/lead-form"
import Badge from "@/components/ui/badge"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import FAQSection from "@/components/sections/FAQSection"
import CTASection from "@/components/sections/CTASection"
import {
  SOLUTIONS,
  ALL_SOLUTIONS,
  getRelatedSolutions,
} from "@/content/solutions"

// Pre-render solutions paths statically at build time — driven by content/solutions.ts
export async function generateStaticParams() {
  return ALL_SOLUTIONS.map((s) => ({ slug: s.slug }))
}

// Metadata generation for dynamic SEO tags — data from content/solutions.ts
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const data = SOLUTIONS[slug]
  if (!data) return {}

  const pageTitle = `${data.name} | Aliign Data Intelligence`
  const pageDesc = `${data.subtitle} Access verified contact details, direct dials, and market segment data with 95% accuracy SLA.`

  return {
    title: pageTitle,
    description: pageDesc,
    keywords: `${data.name}, B2B Database, Verified Contacts, Business Intelligence, ${data.keyword}`,
    alternates: {
      canonical: `https://www.aliigndata.com/solutions/${data.slug}`,
    },
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

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const data = SOLUTIONS[slug]

  if (!data) {
    notFound()
  }

  // Related Solutions — from centralized content helper
  const relatedSolutions = getRelatedSolutions(slug)

  // Dynamically built schemas for dynamic SEO
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.name,
    description: data.subtitle,
    provider: {
      "@type": "Organization",
      name: "Aliign Data",
      url: "https://www.aliigndata.com",
    },
    areaServed: "Global",
    serviceType: "B2B Data Intelligence",
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.aliigndata.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Solutions",
        item: `https://www.aliigndata.com/solutions`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: data.name,
        item: `https://www.aliigndata.com/solutions/${data.slug}`,
      },
    ],
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  }

  return (
    <>
      {/* Dynamic SEO Schemas */}
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="solution-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />

      <main className="min-h-screen bg-white pt-24 pb-20 text-[#0F172A]">
        {/* SECTION 1: HERO */}
        <section className="relative overflow-hidden border-b border-slate-200/80 bg-white py-20 md:py-28">
          <div className="grid-bg pointer-events-none absolute inset-0 opacity-45" />
          <div className="pointer-events-none absolute top-1/4 left-1/4 h-[350px] w-[350px] rounded-full bg-blue-100/30 blur-[130px]" />
          <div className="pointer-events-none absolute right-1/4 bottom-1/4 h-[300px] w-[300px] rounded-full bg-emerald-100/20 blur-[120px]" />

          <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:px-8 lg:grid-cols-12">
            {/* Left Side: Title & Key Stats */}
            <div className="flex flex-col gap-6 text-left lg:col-span-7">
              <div className="flex items-center justify-start gap-2 font-mono text-xs text-brand-blue">
                <Database className="h-4 w-4" />
                <span>SOLUTIONS</span>
                <ChevronRight className="h-3 w-3 text-slate-400" />
                <span className="font-bold text-slate-500">{data.name}</span>
              </div>

              <h1 className="font-heading text-4xl leading-tight font-extrabold tracking-tight text-slate-900 md:text-5xl">
                {data.h1}
              </h1>

              <p className="max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
                {data.subtitle}
              </p>

              {/* Stat Grid */}
              <div className="mt-2 grid grid-cols-2 gap-6 border-t border-slate-200 pt-6 md:grid-cols-4">
                {data.stats.map((stat, i) => (
                  <div key={i}>
                    <h3 className="font-heading text-lg font-extrabold text-slate-900">
                      {stat.split(" ")[0]}
                    </h3>
                    <p className="mt-0.5 font-mono text-[10px] tracking-wider text-slate-500 uppercase">
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
        <section className="relative border-b border-slate-200/80 bg-[#F8FAFC] py-20">
          <div className="grid-bg pointer-events-none absolute inset-0 opacity-20" />
          <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              <div className="flex flex-col justify-start lg:col-span-5">
                <div className="mb-1 flex justify-start">
                  <Badge variant="green">Solution Brief</Badge>
                </div>
                <h2 className="mt-2 font-heading text-2xl leading-tight font-extrabold tracking-tight text-slate-900 md:text-3xl">
                  Unlocking High-Intent Data Segments
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  {data.overview}
                </p>
              </div>

              <div className="flex flex-col gap-6 lg:col-span-7">
                {data.benefits.map((benefit, i) => (
                  <Card key={i} variant="blue" className="group/card">
                    <CardHeader className="flex flex-row items-start gap-4 pb-5 md:pb-6">
                      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded bg-brand-blue/10 p-2 text-brand-blue transition-transform group-hover/card:scale-105">
                        <Sparkles className="h-4.5 w-4.5" />
                      </div>
                      <div className="flex-grow">
                        <CardTitle className="text-sm font-bold text-slate-900">
                          {benefit.title}
                        </CardTitle>
                        <CardDescription className="mt-1 text-xs leading-normal text-slate-600">
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
        <section className="border-b border-slate-200/80 bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="mx-auto mb-12 flex max-w-2xl flex-col gap-3 text-center">
              <div className="mb-1 flex justify-center">
                <Badge variant="green">Target Audience</Badge>
              </div>
              <h2 className="font-heading text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
                Who Powers Campaigns With This Data?
              </h2>
              <p className="text-sm leading-relaxed text-slate-600">
                Teams utilizing our verified intelligence to accelerate
                conversion rates.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {data.whoUses.map((user, i) => (
                <Card
                  key={i}
                  variant="green"
                  className="flex flex-col items-center text-center"
                >
                  <CardHeader className="flex flex-col items-center pb-5 md:pb-6">
                    <div className="mb-2 rounded-lg bg-slate-100/80 p-2.5 text-brand-green transition-transform group-hover/card:scale-105">
                      <Users className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-sm font-bold text-slate-900">
                      {user}
                    </CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: AVAILABLE DATA FIELDS */}
        <section className="relative border-b border-slate-200/80 bg-[#F8FAFC] py-20">
          <div className="grid-bg pointer-events-none absolute inset-0 opacity-20" />
          <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
              <div className="flex flex-col gap-4 lg:col-span-5">
                <div className="mb-1 flex justify-start">
                  <Badge variant="blue">Record Anatomy</Badge>
                </div>
                <h2 className="font-heading text-2xl leading-tight font-extrabold tracking-tight text-slate-900 md:text-3xl">
                  Granular Field Intelligence In Every File
                </h2>
                <p className="text-sm leading-relaxed text-slate-600">
                  Every contact sheet is packed with standardized firmographic
                  and technographic columns to simplify custom CRM mappings.
                </p>

                <div className="mt-2 flex flex-wrap gap-2">
                  {[
                    "Email",
                    "Direct Phone",
                    "Job Title",
                    "Employees",
                    "Industry",
                    "HQ City",
                    "Revenue Range",
                  ].map((field) => (
                    <Badge key={field} variant="gray">
                      {field}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:col-span-7">
                {data.fields.map((field, i) => (
                  <Card key={i} variant="green">
                    <CardHeader className="pb-5 md:pb-6">
                      <div className="mb-1 flex h-8 w-8 items-center justify-center rounded-lg bg-brand-green/10 text-brand-green transition-transform group-hover/card:scale-105">
                        <Terminal className="h-4.5 w-4.5" />
                      </div>
                      <CardTitle className="text-sm text-slate-900">
                        {field.name}
                      </CardTitle>
                      <CardDescription className="mt-1 text-[11px] leading-normal text-slate-600">
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
        <section className="border-b border-slate-200/80 bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="mx-auto mb-16 flex max-w-2xl flex-col gap-3 text-center">
              <div className="mb-1 flex justify-center">
                <Badge variant="green">Our Methodology</Badge>
              </div>
              <h2 className="font-heading text-2xl leading-tight font-extrabold tracking-tight text-slate-900 md:text-3xl">
                The 5-Stage Verification Engine
              </h2>
              <p className="text-sm leading-relaxed text-slate-600">
                How we isolate decayed information and guarantee 95%
                deliverability rates.
              </p>
            </div>

            <div className="relative grid grid-cols-1 gap-6 md:grid-cols-5">
              {/* Process line (desktop) */}
              <div className="pointer-events-none absolute top-[52px] right-[50px] left-[50px] hidden h-0.5 bg-gradient-to-r from-brand-blue to-brand-green opacity-20 md:block" />

              {/* Step 1 */}
              <Card
                variant="blue"
                className="relative z-10 flex flex-col items-center text-center"
              >
                <CardHeader className="flex flex-col items-center pb-2">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full border border-slate-200/80 bg-slate-50 text-sm font-bold text-brand-blue shadow-sm transition-transform group-hover/card:scale-105 group-hover/card:border-brand-blue/30">
                    01
                  </div>
                  <CardTitle className="text-sm font-bold text-slate-900">
                    Collection
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center text-[11px] leading-relaxed text-slate-500">
                  Systematic crawling of public record sets.
                </CardContent>
              </Card>

              {/* Step 2 */}
              <Card
                variant="green"
                className="relative z-10 flex flex-col items-center text-center"
              >
                <CardHeader className="flex flex-col items-center pb-2">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full border border-slate-200/80 bg-slate-50 text-sm font-bold text-brand-green shadow-sm transition-transform group-hover/card:scale-105 group-hover/card:border-brand-green/30">
                    02
                  </div>
                  <CardTitle className="text-sm font-bold text-slate-900">
                    Validation
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center text-[11px] leading-relaxed text-slate-500">
                  SMTP handshake testing and server-level pinging.
                </CardContent>
              </Card>

              {/* Step 3 */}
              <Card
                variant="blue"
                className="relative z-10 flex flex-col items-center text-center"
              >
                <CardHeader className="flex flex-col items-center pb-2">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full border border-slate-200/80 bg-slate-50 text-sm font-bold text-brand-blue shadow-sm transition-transform group-hover/card:scale-105 group-hover/card:border-brand-blue/30">
                    03
                  </div>
                  <CardTitle className="text-sm font-bold text-slate-900">
                    Enrichment
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center text-[11px] leading-relaxed text-slate-500">
                  Mapping technographics and missing phone dials.
                </CardContent>
              </Card>

              {/* Step 4 */}
              <Card
                variant="green"
                className="relative z-10 flex flex-col items-center text-center"
              >
                <CardHeader className="flex flex-col items-center pb-2">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full border border-slate-200/80 bg-slate-50 text-sm font-bold text-brand-green shadow-sm transition-transform group-hover/card:scale-105 group-hover/card:border-brand-green/30">
                    04
                  </div>
                  <CardTitle className="text-sm font-bold text-slate-900">
                    Verification
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center text-[11px] leading-relaxed text-slate-500">
                  Manual validation phone calls by research staff.
                </CardContent>
              </Card>

              {/* Step 5 */}
              <Card
                variant="blue"
                className="relative z-10 flex flex-col items-center text-center"
              >
                <CardHeader className="flex flex-col items-center pb-2">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full border border-slate-200/80 bg-slate-50 text-sm font-bold text-brand-blue shadow-sm transition-transform group-hover/card:scale-105 group-hover/card:border-brand-blue/30">
                    05
                  </div>
                  <CardTitle className="text-sm font-bold text-slate-900">
                    Refresh
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center text-[11px] leading-relaxed text-slate-500">
                  Full database scrubbing on 30-day schedules.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* SECTION 6: INDUSTRY COVERAGE */}
        <section className="relative border-b border-slate-200/80 bg-[#F8FAFC] py-20">
          <div className="grid-bg pointer-events-none absolute inset-0 opacity-20" />
          <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
            <div className="mb-12 flex max-w-2xl flex-col gap-3">
              <div className="flex justify-start">
                <Badge variant="blue">Database Verticals</Badge>
              </div>
              <h2 className="mt-1 font-heading text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
                Data Volume Across Sub-Sectors
              </h2>
              <p className="mt-3 text-sm text-slate-600">
                See record volumes in major target business categories.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {data.industries.map((ind, i) => (
                <Card
                  key={i}
                  variant="blue"
                  className="group/card flex flex-row items-center justify-between"
                >
                  <CardHeader className="flex-grow pb-5 md:pb-6">
                    <CardTitle className="text-sm font-bold text-slate-900 transition-colors group-hover/card:text-[#2563EB]">
                      {ind.name}
                    </CardTitle>
                    <CardDescription className="mt-1 block font-mono text-xs font-bold text-[#2563EB]">
                      {ind.count}
                    </CardDescription>
                  </CardHeader>
                  <div className="flex-shrink-0 pr-5 md:pr-6">
                    <ChevronRight className="h-4 w-4 text-slate-400 transition-all group-hover/card:translate-x-0.5 group-hover/card:text-[#2563EB]" />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 7: USE CASES */}
        <section className="border-b border-slate-200/80 bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="mx-auto mb-16 flex max-w-2xl flex-col gap-3 text-center">
              <div className="mb-1 flex justify-center">
                <Badge variant="green">Playbooks</Badge>
              </div>
              <h2 className="font-heading text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
                Unlock High-Impact Playbooks
              </h2>
              <p className="text-sm leading-relaxed text-slate-600">
                Actionable marketing methods to feed your custom data files
                into.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {data.useCases.map((use, i) => (
                <Card
                  key={i}
                  variant="green"
                  className="group/card flex flex-col justify-between"
                >
                  <CardHeader>
                    <div className="mb-2 flex h-9 w-9 items-center justify-center rounded bg-brand-green/10 p-2.5 text-brand-green transition-transform group-hover/card:scale-105">
                      <CheckCircle className="h-4.5 w-4.5" />
                    </div>
                    <CardTitle className="text-sm font-bold text-slate-900">
                      {use.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="mt-2 text-xs leading-relaxed text-slate-600">
                    {use.desc}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 8: FILTERING OPTIONS */}
        <section className="relative border-b border-slate-200/80 bg-[#F8FAFC] py-20">
          <div className="grid-bg pointer-events-none absolute inset-0 opacity-20" />
          <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
              <div className="flex flex-col gap-4 lg:col-span-5">
                <div className="flex justify-start">
                  <Badge variant="blue">Custom Segmenting</Badge>
                </div>
                <h2 className="font-heading text-2xl leading-tight font-extrabold tracking-tight text-slate-900 md:text-3xl">
                  Build Your List With Advanced Filters
                </h2>
                <p className="text-sm leading-relaxed text-slate-600">
                  Isolate prospects by combined filters to generate highly
                  targeted segments for outbound representatives.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 lg:col-span-7">
                {data.filters.map((filter, i) => (
                  <Badge
                    key={i}
                    variant="gray"
                    icon={<Filter className="h-3.5 w-3.5 text-brand-blue" />}
                  >
                    {filter}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 10: CASE STUDY */}
        <section className="border-b border-slate-200/80 bg-white py-20">
          <div className="mx-auto max-w-5xl px-6 md:px-8">
            <Card
              variant="green"
              hoverable={false}
              className="relative flex flex-col items-center gap-8 overflow-hidden border border-slate-200 bg-white p-8 shadow-sm md:flex-row md:p-12"
            >
              <div className="pointer-events-none absolute top-0 right-0 h-40 w-40 rounded-full bg-brand-green/5 blur-3xl" />

              <div className="flex-1">
                <div className="mb-4 flex justify-start">
                  <Badge variant="green">Client Results</Badge>
                </div>
                <h3 className="mb-4 font-heading text-xl leading-snug font-extrabold text-slate-900 md:text-2xl">
                  &ldquo;{data.caseStudy.quote}&rdquo;
                </h3>
                <div className="text-xs text-slate-600">
                  <span className="font-bold text-slate-900">
                    {data.caseStudy.author}
                  </span>
                  , {data.caseStudy.company}
                </div>
              </div>

              <div className="flex w-full flex-shrink-0 flex-col gap-2 text-center md:w-auto md:border-l md:border-slate-200 md:pl-12">
                <span className="font-heading text-4xl font-extrabold text-[#10B981]">
                  {data.caseStudy.metrics.split(" ")[0]}
                </span>
                <span className="font-mono text-[10px] tracking-wider text-slate-500 uppercase">
                  {data.caseStudy.metrics.split(" ").slice(1).join(" ")}
                </span>
              </div>
            </Card>
          </div>
        </section>

        {/* SECTION 9: RELATED SOLUTIONS */}
        <section className="relative border-b border-slate-200/80 bg-[#F8FAFC] py-20">
          <div className="grid-bg pointer-events-none absolute inset-0 opacity-20" />
          <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
            <div className="mb-12 flex max-w-2xl flex-col gap-3">
              <div className="flex justify-start">
                <Badge variant="blue">Recommendations</Badge>
              </div>
              <h2 className="font-heading text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
                Recommended Solutions
              </h2>
              <p className="text-sm leading-relaxed text-slate-600">
                Other data assets to enrich your revenue intelligence stack.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {relatedSolutions.map((sol) => (
                <Card
                  key={sol.slug}
                  variant="blue"
                  className="group/card flex flex-col justify-between border border-slate-200/60 bg-white shadow-sm"
                >
                  <CardHeader>
                    <CardTitle className="text-base font-bold text-slate-900 transition-colors group-hover/card:text-[#2563EB]">
                      {sol.name}
                    </CardTitle>
                    <CardDescription className="mt-2 text-xs leading-relaxed text-slate-600">
                      {sol.subtitle}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="pt-2">
                    <Link
                      href={`/solutions/${sol.slug}`}
                      className="group/link flex items-center gap-1 text-xs font-bold text-[#2563EB] hover:underline"
                    >
                      Learn More
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5" />
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 11: FAQ — uses shadcn Accordion */}
        <section
          className="border-b border-slate-200/80 bg-white py-20"
          aria-labelledby={`faq-${slug}`}
        >
          <div className="mx-auto max-w-4xl px-6 md:px-8">
            <div className="mb-16 flex flex-col gap-3 text-center">
              <div className="mb-1 flex justify-center">
                <Badge variant="blue">Clarifications</Badge>
              </div>
              <h2
                id={`faq-${slug}`}
                className="mt-1 font-heading text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl"
              >
                Frequently Asked Questions
              </h2>
            </div>
            <FAQSection faqs={data.faqs} />
          </div>
        </section>

        {/* SECTION 12: LEAD GENERATION FORM */}
        <CTASection
          id="contact-form"
          layout="centered"
          badge="Sample File Request"
          badgeVariant="blue"
          heading={`Get Your Custom ${data.name} Sample File`}
          description="Specify your target filters and coordinates. Our specialists will manually extract, SMTP-verify, and deliver a free CSV sample within hours."
          defaultSolution={data.name}
        />
      </main>

      <Footer />
    </>
  )
}
