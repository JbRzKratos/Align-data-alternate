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
      description:
        "How much of the database is contractually guaranteed to be active and valid.",
      aliignVal: "95% Contractual Guarantee (with replacement credits)",
      competitorVal: "65% - 75% average (decaying quickly, no guarantees)",
      aliignPass: true,
      competitorPass: false,
    },
    {
      feature: "Verification Model",
      description:
        "The methodology used to compile and validate contact records.",
      aliignVal:
        "Dual-Step Validation: Machine algorithms + manual human phone verification",
      competitorVal: "Pure automated web scraping & predictive guesswork",
      aliignPass: true,
      competitorPass: false,
    },
    {
      feature: "Data Refresh Frequency",
      description:
        "How often contact status, job titles, and emails are fully re-verified.",
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
      description:
        "Ability to take client lists and manually enrich missing fields.",
      aliignVal: "Included: Custom researchers fill missing gaps on demand",
      competitorVal: "Automated match only, leaves 40%+ fields empty",
      aliignPass: true,
      competitorPass: false,
    },
    {
      feature: "Direct CRM Integration",
      description: "Delivery channels for exporting intelligence records.",
      aliignVal:
        "Native HubSpot, Salesforce, Zoho integrations + instant clean CSVs",
      competitorVal: "Delayed downloads or requires expensive sync connectors",
      aliignPass: true,
      competitorPass: true,
    },
  ]

  return (
    <div className="relative w-full overflow-x-auto rounded-2xl border border-slate-200/60 bg-white shadow-sm">

      <table className="block w-full text-left md:table md:min-w-[800px] md:border-collapse">
        <thead className="hidden md:table-header-group">
          <tr className="border-b border-slate-200/60 bg-slate-50">
            <th className="w-1/3 p-5 text-xs font-bold tracking-widest text-slate-500 uppercase">
              Performance Indicators
            </th>
            <th className="relative w-1/3 p-5">
              <div className="pointer-events-none absolute -inset-y-1 right-0 left-0 border-x border-blue-100/50 bg-blue-50/50" />
              <div className="relative z-10 flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#10B981]" />
                <span className="font-heading text-base font-extrabold tracking-tight text-slate-900">
                  Aliign<span className="text-[#10B981]">Data</span>
                </span>
                <span className="ml-1 rounded border border-emerald-100/60 bg-emerald-50 px-1.5 py-0.5 text-[9px] font-bold tracking-wider text-emerald-700 uppercase">
                  RECOMMENDED
                </span>
              </div>
            </th>
            <th className="w-1/3 p-5 text-sm font-semibold text-slate-500">
              Traditional Data Vendors
            </th>
          </tr>
        </thead>
        <tbody className="block divide-y divide-slate-200/60 md:table-row-group">
          {data.map((row, index) => (
            <tr key={index} className="block p-5 transition-colors hover:bg-slate-50/40 md:table-row md:p-0">
              {/* Feature info */}
              <td className="mb-4 block md:mb-0 md:table-cell md:p-5">
                <h4 className="mb-0.5 text-sm font-bold text-slate-900">
                  {row.feature}
                </h4>
                <p className="text-xs leading-normal text-slate-500 md:max-w-sm">
                  {row.description}
                </p>
              </td>

              {/* Aliign Data value */}
              <td className="relative mb-3 block md:mb-0 md:table-cell md:p-5">
                {/* Visual accent backdrop to draw focus to the primary column */}
                <div className="pointer-events-none absolute -inset-y-2 right-0 left-0 hidden border-x border-blue-100/25 bg-blue-50/20 md:block" />

                <div className="mb-1 text-[10px] font-bold tracking-wider text-[#10B981] uppercase md:hidden">
                  AliignData
                </div>
                <div className="relative z-10 flex items-start gap-2.5">
                  <div className="mt-0.5 flex-shrink-0 rounded border border-emerald-100/80 bg-emerald-50 p-1 text-emerald-600 shadow-sm">
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm font-semibold leading-relaxed text-slate-800">
                    {row.aliignVal}
                  </span>
                </div>
              </td>

              {/* Competitors value */}
              <td className="block md:table-cell md:p-5">
                <div className="mb-1 text-[10px] font-bold tracking-wider text-slate-400 uppercase md:hidden">
                  Traditional Vendors
                </div>
                <div className="flex items-start gap-2.5">
                  {row.competitorPass ? (
                    <div className="mt-0.5 flex-shrink-0 rounded border border-slate-200 bg-slate-100 p-1 text-slate-500">
                      <Check className="h-3.5 w-3.5 stroke-[3]" />
                    </div>
                  ) : (
                    <div className="mt-0.5 flex-shrink-0 rounded border border-rose-100 bg-rose-50 p-1 text-rose-500">
                      <X className="h-3.5 w-3.5 stroke-[3]" />
                    </div>
                  )}
                  <span className="text-sm leading-relaxed text-slate-500">
                    {row.competitorVal}
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Bottom disclaimer banner */}
      <div className="flex items-center justify-between border-t border-slate-200 bg-slate-50 p-4 font-mono text-[11px] text-slate-500">
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
