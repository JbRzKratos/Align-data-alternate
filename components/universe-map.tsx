"use client"

import React, { useState } from "react"
import { Shield, Cpu, Landmark, Hammer, GraduationCap, ShoppingBag, CheckCircle, MapPin, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"
import Badge from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

interface IndustryData {
  id: string
  name: string
  icon: React.ReactNode
  totalContacts: string
  totalCompanies: string
  decisionMakers: string[]
  regions: string
  availability: { label: string; pct: number }[]
  accentColor: string
  bgColor: string
  summary: string
}

export default function UniverseMap() {
  const industries: IndustryData[] = [
    {
      id: "technology",
      name: "Technology",
      icon: <Cpu className="h-5 w-5" />,
      totalContacts: "18.4M+ Contacts",
      totalCompanies: "420K+ Companies",
      decisionMakers: ["CTOs", "VP of Engineering", "IT Directors", "CISOs", "Product Managers"],
      regions: "North America, Europe, Asia Pacific, LATAM",
      availability: [
        { label: "Verified Emails", pct: 98 },
        { label: "Direct Dials", pct: 86 },
        { label: "Technographics", pct: 95 },
        { label: "Social Handles", pct: 92 },
      ],
      accentColor: "#00A8FF",
      bgColor: "rgba(0, 168, 255, 0.1)",
      summary: "In-depth technographic mapping of companies based on installed cloud software, dev stacks, hardware footprint, and cybersecurity frameworks.",
    },
    {
      id: "healthcare",
      name: "Healthcare",
      icon: <Shield className="h-5 w-5" />,
      totalContacts: "12.1M+ Contacts",
      totalCompanies: "180K+ Companies",
      decisionMakers: ["Hospital Directors", "Chief Medical Officers", "Physicians", "Purchasing Agents", "Registered Nurses"],
      regions: "United States, Canada, Europe",
      availability: [
        { label: "Verified Emails", pct: 96 },
        { label: "NPI Numbers", pct: 99 },
        { label: "Hospital Affiliation", pct: 94 },
        { label: "Direct Dials", pct: 82 },
      ],
      accentColor: "#00D084",
      bgColor: "rgba(0, 208, 132, 0.1)",
      summary: "Direct NPI-verified databases covering licensed physicians, surgeons, administrators, and device procurement buyers, refreshed every 30 days.",
    },
    {
      id: "finance",
      name: "Finance",
      icon: <Landmark className="h-5 w-5" />,
      totalContacts: "8.7M+ Contacts",
      totalCompanies: "115K+ Companies",
      decisionMakers: ["Chief Financial Officers", "Investment Partners", "Risk Managers", "Treasury Directors", "Compliance Officers"],
      regions: "Global (EMEA, North America, APAC)",
      availability: [
        { label: "Verified Emails", pct: 97 },
        { label: "AUM Range", pct: 91 },
        { label: "Regulatory Licensing", pct: 93 },
        { label: "Direct Dials", pct: 88 },
      ],
      accentColor: "#6366F1",
      bgColor: "rgba(99, 102, 241, 0.1)",
      summary: "Target institutional capital allocators, portfolio managers, wealth managers, and executive-level finance leads segmented by asset class and AUM.",
    },
    {
      id: "manufacturing",
      name: "Manufacturing",
      icon: <Hammer className="h-5 w-5" />,
      totalContacts: "9.2M+ Contacts",
      totalCompanies: "210K+ Companies",
      decisionMakers: ["VP of Operations", "Supply Chain Managers", "Plant Managers", "Procurement Officers", "EHS Directors"],
      regions: "North America, Central Europe, East Asia",
      availability: [
        { label: "Verified Emails", pct: 95 },
        { label: "Equipment Installed", pct: 89 },
        { label: "Plant Footprint", pct: 92 },
        { label: "Direct Dials", pct: 85 },
      ],
      accentColor: "#F59E0B",
      bgColor: "rgba(245, 158, 11, 0.1)",
      summary: "Reach operational and facility leaders running industrial sites, automotive hubs, logistics docks, and complex parts manufacturing lines.",
    },
    {
      id: "education",
      name: "Education",
      icon: <GraduationCap className="h-5 w-5" />,
      totalContacts: "6.5M+ Contacts",
      totalCompanies: "85K+ Institutions",
      decisionMakers: ["Superintendents", "University Deans", "IT Procurement", "Provosts", "K-12 Principals"],
      regions: "United States, Canada, United Kingdom",
      availability: [
        { label: "Verified Emails", pct: 94 },
        { label: "Student Enrollment", pct: 97 },
        { label: "EdTech Stack", pct: 90 },
        { label: "Direct Dials", pct: 80 },
      ],
      accentColor: "#EC4899",
      bgColor: "rgba(236, 72, 153, 0.1)",
      summary: "Direct contacts within primary, secondary, and higher-education structures, mapped by institutional size, funding sources, and student capacity.",
    },
    {
      id: "retail",
      name: "Retail & E-commerce",
      icon: <ShoppingBag className="h-5 w-5" />,
      totalContacts: "7.9M+ Contacts",
      totalCompanies: "130K+ Companies",
      decisionMakers: ["Heads of Merchandising", "E-commerce Managers", "CMOs", "Logistics Leads", "Category Buyers"],
      regions: "Global Reach",
      availability: [
        { label: "Verified Emails", pct: 98 },
        { label: "E-comm Tech stack", pct: 96 },
        { label: "Store Locations count", pct: 88 },
        { label: "Direct Dials", pct: 84 },
      ],
      accentColor: "#14B8A6",
      bgColor: "rgba(20, 184, 166, 0.1)",
      summary: "Tap into brands using advanced e-commerce platforms (Shopify Plus, Magento, Salesforce Commerce) and their marketing and supply chain executives.",
    },
  ]

  const [selectedInd, setSelectedInd] = useState<IndustryData>(industries[0])

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      {/* Industry Sidebar Selectors */}
      <div className="lg:col-span-4 flex flex-col gap-3">
        {industries.map((ind) => {
          const isSelected = selectedInd.id === ind.id
          return (
            <button
              key={ind.id}
              onClick={() => setSelectedInd(ind)}
              className={cn(
                "w-full text-left p-4 rounded-xl transition-all duration-350 flex items-center justify-between border cursor-pointer group",
                isSelected
                  ? "bg-white border-slate-200 shadow-sm"
                  : "bg-transparent border-transparent hover:bg-slate-100/50"
              )}
            >
              <div className="flex items-center gap-3">
                <div
                  className="p-2.5 rounded-lg transition-colors"
                  style={{
                    backgroundColor: isSelected ? ind.bgColor : "rgba(15, 23, 42, 0.03)",
                    color: isSelected ? ind.accentColor : "#64748B",
                  }}
                >
                  {ind.icon}
                </div>
                <div>
                  <h4
                    className={cn(
                      "text-sm font-semibold transition-colors",
                      isSelected ? "text-slate-900" : "text-slate-500 group-hover:text-slate-900"
                    )}
                  >
                    {ind.name}
                  </h4>
                  <span className="text-[11px] text-slate-400">{ind.totalContacts}</span>
                </div>
              </div>
              <div
                className={cn(
                  "h-1.5 w-1.5 rounded-full transition-all duration-300",
                  isSelected ? "scale-100 opacity-100" : "scale-50 opacity-0"
                )}
                style={{ backgroundColor: ind.accentColor }}
              />
            </button>
          )
        })}
      </div>

      {/* Universe Visualization and Details */}
      <Card hoverable={false} className="lg:col-span-8 relative flex flex-col justify-between p-6 md:p-8 overflow-hidden">
        {/* Animated background accent */}
        <div
          className="absolute -top-24 -right-24 h-48 w-48 rounded-full blur-[80px] opacity-25 pointer-events-none transition-all duration-500"
          style={{ backgroundColor: selectedInd.accentColor }}
        />

        <div className="relative z-10 flex flex-col gap-6">
          {/* Top Panel: Title and Summary */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Badge variant="blue">
                {selectedInd.name} Universe
              </Badge>
              <span className="text-[10px] text-slate-400 font-mono">
                95% ACCURACY GUARANTEED
              </span>
            </div>
            <h3 className="font-heading font-extrabold text-2xl md:text-3xl text-slate-900 tracking-tight mt-1">
              {selectedInd.totalContacts} Across {selectedInd.totalCompanies}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed max-w-2xl mt-1">
              {selectedInd.summary}
            </p>
          </div>

          {/* Grid Panel: Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
            {/* Left side: Decision Makers & Regions */}
            <div className="flex flex-col gap-5">
              <div>
                <h5 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-3">
                  Verified Decision Makers
                </h5>
                <div className="flex flex-wrap gap-2">
                  {selectedInd.decisionMakers.map((title) => (
                    <Badge
                      key={title}
                      variant="gray"
                      icon={<CheckCircle className="h-3 w-3 text-emerald-600" />}
                      className="normal-case text-xs font-semibold"
                    >
                      {title}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h5 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-2">
                  Regional Focus
                </h5>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <MapPin className="h-4 w-4 text-[#2563EB]" />
                  {selectedInd.regions}
                </div>
              </div>
            </div>

            {/* Right side: Field Accuracy Gauges */}
            <div className="flex flex-col gap-4 bg-slate-50 border border-slate-200/60 rounded-xl p-4">
              <h5 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-[#2563EB]" />
                Data Completeness Rate
              </h5>
              <div className="flex flex-col gap-3">
                {selectedInd.availability.map((field) => (
                  <div key={field.label} className="flex flex-col gap-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-500">{field.label}</span>
                      <span className="font-bold text-slate-900">{field.pct}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-200/60 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-700 ease-out"
                        style={{
                          width: `${field.pct}%`,
                          backgroundColor: selectedInd.accentColor,
                          boxShadow: `0 0 10px ${selectedInd.accentColor}40`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Action / Learn More */}
        <div className="mt-8 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[11px] text-slate-400 font-mono">
            UPDATED: 30-DAY CYCLES // SOC-2 SECURED
          </div>
          <a
            href="#contact"
            className="text-xs font-semibold text-slate-800 hover:text-[#2563EB] flex items-center gap-1 group transition-colors"
          >
            Request sample data for {selectedInd.name}
            <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </a>
        </div>
      </Card>
    </div>
  )
}
