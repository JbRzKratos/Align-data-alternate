"use client"

import React, { useState } from "react"
import Image from "next/image"
import { Globe, MapPin, CheckCircle, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import Badge from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

interface Hub {
  name: string
  lat: number // Latitude in radians
  lng: number // Longitude in radians
  region: string
  records: string
  accuracy: string
}

const regions = [
  {
    name: "North America",
    coverage: "32M+ Contacts",
    cities: "New York, San Francisco, Toronto",
  },
  {
    name: "Europe",
    coverage: "19M+ Contacts",
    cities: "London, Frankfurt, Paris",
  },
  {
    name: "Asia Pacific",
    coverage: "14M+ Contacts",
    cities: "Tokyo, Singapore, Sydney",
  },
  {
    name: "Middle East",
    coverage: "6M+ Contacts",
    cities: "Dubai, Riyadh, Abu Dhabi",
  },
  {
    name: "LATAM & Africa",
    coverage: "4M+ Contacts",
    cities: "São Paulo, Johannesburg",
  },
]

// Global Hub Coordinates
const hubs: Hub[] = [
  // North America
  {
    name: "New York",
    lat: 0.71,
    lng: -1.29,
    region: "North America",
    records: "12M+",
    accuracy: "96.4%",
  },
  {
    name: "San Francisco",
    lat: 0.66,
    lng: -2.13,
    region: "North America",
    records: "9.5M+",
    accuracy: "95.8%",
  },
  {
    name: "Toronto",
    lat: 0.76,
    lng: -1.38,
    region: "North America",
    records: "4.8M+",
    accuracy: "95.2%",
  },

  // Europe
  {
    name: "London",
    lat: 0.9,
    lng: -0.002,
    region: "Europe",
    records: "8.2M+",
    accuracy: "96.1%",
  },
  {
    name: "Frankfurt",
    lat: 0.87,
    lng: 0.15,
    region: "Europe",
    records: "5.4M+",
    accuracy: "94.8%",
  },
  {
    name: "Paris",
    lat: 0.85,
    lng: 0.04,
    region: "Europe",
    records: "4.1M+",
    accuracy: "95.0%",
  },

  // Asia Pacific
  {
    name: "Tokyo",
    lat: 0.62,
    lng: 2.44,
    region: "Asia Pacific",
    records: "4.9M+",
    accuracy: "94.5%",
  },
  {
    name: "Singapore",
    lat: 0.02,
    lng: 1.81,
    region: "Asia Pacific",
    records: "3.8M+",
    accuracy: "95.6%",
  },
  {
    name: "Sydney",
    lat: -0.59,
    lng: 2.64,
    region: "Asia Pacific",
    records: "3.2M+",
    accuracy: "95.1%",
  },

  // Middle East
  {
    name: "Dubai",
    lat: 0.44,
    lng: 0.96,
    region: "Middle East",
    records: "4.2M+",
    accuracy: "94.9%",
  },
  {
    name: "Riyadh",
    lat: 0.43,
    lng: 0.81,
    region: "Middle East",
    records: "2.1M+",
    accuracy: "94.1%",
  },

  // LATAM & Africa
  {
    name: "São Paulo",
    lat: -0.41,
    lng: -0.81,
    region: "LATAM & Africa",
    records: "3.5M+",
    accuracy: "93.8%",
  },
  {
    name: "Johannesburg",
    lat: -0.45,
    lng: 0.49,
    region: "LATAM & Africa",
    records: "1.2M+",
    accuracy: "93.5%",
  },
]

export default function InteractiveGlobe() {
  const [selectedRegion, setSelectedRegion] = useState("North America")

  return (
    <Card
      hoverable={false}
      className="relative grid w-full grid-cols-1 items-center gap-8 overflow-hidden p-6 md:p-8 lg:grid-cols-12"
    >
      {/* Background glowing rings */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200/40" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200/20" />

      {/* Left Column: Region Selectors */}
      <div className="relative z-10 flex flex-col gap-4 lg:col-span-5">
        <div className="flex justify-start">
          <Badge
            variant="green"
            icon={<Globe className="h-4 w-4" />}
          >
            MULTINATIONAL B2B INTELLIGENCE
          </Badge>
        </div>
        <h3 className="font-heading text-2xl leading-tight font-extrabold tracking-tight text-slate-900 md:text-3xl">
          Global Coverage. Local Verification.
        </h3>
        <p className="mb-2 text-sm leading-relaxed text-slate-500">
          Verify leads across 100+ countries. Choose a region to inspect
          database scale, precision ratings, and primary hub locations.
        </p>

        <div className="flex snap-x snap-mandatory flex-row gap-3 overflow-x-auto pb-4 md:flex-col md:gap-2.5 md:overflow-visible md:pb-0">
          {regions.map((reg) => {
            const isSelected = reg.name === selectedRegion
            return (
              <button
                key={reg.name}
                onClick={() => setSelectedRegion(reg.name)}
                className={cn(
                  "flex w-[240px] shrink-0 snap-start cursor-pointer items-center justify-between rounded-xl border p-3.5 text-left transition-all duration-350 md:w-full",
                  isSelected
                    ? "border-blue-200 bg-white shadow-[0_4px_20px_rgba(37,99,235,0.05)]"
                    : "hover:border-slate-355 border-slate-200/60 bg-slate-50 hover:bg-slate-100/70"
                )}
              >
                <div>
                  <h4
                    className={cn(
                      "text-xs font-bold tracking-wider uppercase",
                      isSelected ? "text-[#2563EB]" : "text-slate-500"
                    )}
                  >
                    {reg.name}
                  </h4>
                  <p className="mt-0.5 text-sm font-semibold text-slate-800">
                    {reg.coverage}
                  </p>
                  <p className="mt-0.5 text-[10px] text-slate-400">
                    {reg.cities}
                  </p>
                </div>
                <div
                  className={cn(
                    "rounded-full p-1.5 transition-all duration-300",
                    isSelected
                      ? "bg-blue-50 text-[#2563EB]"
                      : "border border-slate-200/60 bg-white text-slate-400"
                  )}
                >
                  <MapPin className="h-4 w-4" />
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Right Column: Premium World Map Illustration */}
      <div className="relative flex h-[320px] w-full items-center justify-center overflow-hidden rounded-2xl bg-slate-50 md:h-[450px] lg:col-span-7">
        {/* Detail Float Box */}
        <Card
          hoverable={false}
          className="absolute right-0 top-0 z-10 flex max-w-[220px] flex-col gap-1.5 border border-slate-200/80 bg-white/95 p-3 text-[10px] shadow-md backdrop-blur-sm md:right-4 md:top-4 md:max-w-xs md:gap-2 md:p-4 md:text-xs"
        >
          <div className="flex justify-start">
            <Badge
              variant="green"
              icon={<CheckCircle className="h-3.5 w-3.5" />}
            >
              SOC 2 Secure Hubs
            </Badge>
          </div>
          <div className="font-semibold text-slate-900">
            {selectedRegion} Coverage metrics
          </div>
          <div className="my-1 h-px bg-slate-200/60" />
          <div className="flex justify-between gap-6">
            <span className="text-slate-400">Manual Verification:</span>
            <span className="font-medium text-slate-800">95.4% avg</span>
          </div>
          <div className="flex justify-between gap-6">
            <span className="text-slate-400">Contact Delivery:</span>
            <span className="font-medium text-slate-800">CSV / CRM Direct</span>
          </div>
          <a
            href="#contact"
            className="group mt-2 flex items-center gap-1 text-[11px] font-bold text-[#2563EB]"
          >
            Download Region Sample
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </Card>

        <div className="relative h-full w-full overflow-hidden p-2">
          <Image
            src="/global_coverage_map.png"
            alt="Global Coverage Map"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </Card>
  )
}
