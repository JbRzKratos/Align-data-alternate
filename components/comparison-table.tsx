import React from "react"
import { Check, X, Shield, Sparkles } from "lucide-react"

interface ComparisonRow {
  feature: string
  description: string
  aliignVal: string
  competitorVal: string
  aliignPass: boolean
  competitorPass: boolean
}

export default function ComparisonTable() {
  const data: ComparisonRow[] = [
    {
      feature: "Guaranteed Accuracy",
      description: "How much of the database is contractually guaranteed to be active and valid.",
      aliignVal: "95% Contractual Guarantee (with replacement credits)",
      competitorVal: "65% - 75% average (decaying quickly, no guarantees)",
      aliignPass: true,
      competitorPass: false,
    },
    {
      feature: "Verification Model",
      description: "The methodology used to compile and validate contact records.",
      aliignVal: "Dual-Step Validation: Machine algorithms + manual human phone verification",
      competitorVal: "Pure automated web scraping & predictive guesswork",
      aliignPass: true,
      competitorPass: false,
    },
    {
      feature: "Data Refresh Frequency",
      description: "How often contact status, job titles, and emails are fully re-verified.",
      aliignVal: "Rigorous 30-day cycle for every active profile",
      competitorVal: "90 - 180 days (average annual data decay exceeds 30%)",
      aliignPass: true,
      competitorPass: false,
    },
    {
      feature: "Global Regulatory Compliance",
      description: "Compliance alignment with worldwide data protection laws.",
      aliignVal: "Fully GDPR, CCPA, CASL, and PIPEDA compliant from day one",
      competitorVal: "Standard opt-out lists, frequent GDPR complaints & fines",
      aliignPass: true,
      competitorPass: false,
    },
    {
      feature: "Custom Data Appending",
      description: "Ability to take client lists and manually enrich missing fields.",
      aliignVal: "Included: Custom researchers fill missing gaps on demand",
      competitorVal: "Automated match only, leaves 40%+ fields empty",
      aliignPass: true,
      competitorPass: false,
    },
    {
      feature: "Direct CRM Integration",
      description: "Delivery channels for exporting intelligence records.",
      aliignVal: "Native HubSpot, Salesforce, Zoho integrations + instant clean CSVs",
      competitorVal: "Delayed downloads or requires expensive sync connectors",
      aliignPass: true,
      competitorPass: true,
    },
  ]

  return (
    <div className="w-full overflow-x-auto rounded-2xl border border-slate-200/60 bg-white shadow-sm relative">
      {/* Decorative side accent blur */}
      <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-[#2563EB] to-[#10B981]" />
      
      <table className="w-full min-w-[800px] border-collapse text-left">
        <thead>
          <tr className="border-b border-slate-200/60 bg-slate-50">
            <th className="p-5 text-xs font-bold text-slate-500 uppercase tracking-widest w-1/3">
              Performance Indicators
            </th>
            <th className="p-5 relative w-1/3">
              <div className="absolute -inset-y-1 left-0 right-0 bg-blue-50/50 border-x border-blue-100/50 pointer-events-none" />
              <div className="flex items-center gap-1.5 z-10 relative">
                <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
                <span className="font-heading font-extrabold text-base text-slate-900 tracking-tight">
                  Aliign<span className="text-[#10B981]">Data</span>
                </span>
                <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-100/60 px-1.5 py-0.5 rounded ml-1 tracking-wider uppercase">
                  RECOMMENDED
                </span>
              </div>
            </th>
            <th className="p-5 text-sm font-semibold text-slate-500 w-1/3">
              Traditional Data Vendors
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200/60">
          {data.map((row, index) => (
            <tr key={index} className="hover:bg-slate-50/40 transition-colors">
              {/* Feature info */}
              <td className="p-5">
                <h4 className="text-sm font-bold text-slate-900 mb-0.5">{row.feature}</h4>
                <p className="text-xs text-slate-500 leading-normal max-w-sm">{row.description}</p>
              </td>

              {/* Aliign Data value */}
              <td className="p-5 relative">
                {/* Visual accent backdrop to draw focus to the primary column */}
                <div className="absolute -inset-y-2 left-0 right-0 bg-blue-50/20 border-x border-blue-100/25 pointer-events-none" />
                
                <div className="flex items-start gap-2.5 z-10 relative">
                  <div className="p-1 rounded bg-emerald-50 text-emerald-600 border border-emerald-100/80 flex-shrink-0 mt-0.5 shadow-sm">
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm font-semibold text-slate-800 leading-relaxed">
                    {row.aliignVal}
                  </span>
                </div>
              </td>

              {/* Competitors value */}
              <td className="p-5">
                <div className="flex items-start gap-2.5">
                  {row.competitorPass ? (
                    <div className="p-1 rounded bg-slate-100 text-slate-500 border border-slate-200 flex-shrink-0 mt-0.5">
                      <Check className="h-3.5 w-3.5 stroke-[3]" />
                    </div>
                  ) : (
                    <div className="p-1 rounded bg-rose-50 text-rose-500 border border-rose-100 flex-shrink-0 mt-0.5">
                      <X className="h-3.5 w-3.5 stroke-[3]" />
                    </div>
                  )}
                  <span className="text-sm text-slate-500 leading-relaxed">
                    {row.competitorVal}
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {/* Bottom disclaimer banner */}
      <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-[11px] text-slate-500 font-mono">
        <div className="flex items-center gap-1.5">
          <Shield className="h-3.5 w-3.5 text-[#2563EB]" />
          CONTRACTUALLY BACKED ACCURACY & SLA CREDITS
        </div>
        <div className="flex items-center gap-1">
          <Sparkles className="h-3.5 w-3.5 text-[#10B981]" />
          DUAL-STAGE ENRICHMENT
        </div>
      </div>
    </div>
  )
}
