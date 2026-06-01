import React from "react"
import Logo from "@/components/ui/logo"
import Badge from "@/components/ui/badge"
import LeadForm from "@/components/lead-form"
import { CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface CTASectionProps {
  id?: string
  layout?: "split" | "centered"
  badge: string
  badgeVariant?: "blue" | "green" | "gray"
  heading: string
  description: string
  bullets?: string[]
  defaultSolution?: string
  className?: string
}

/**
 * Reusable CTA section with built-in LeadForm.
 * Supports "split" (two-column) layout for homepage and "centered" (one-column) layout for solution pages.
 */
export default function CTASection({
  id = "contact",
  layout = "split",
  badge,
  badgeVariant = "green",
  heading,
  description,
  bullets,
  defaultSolution,
  className,
}: CTASectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden border-t border-slate-200 bg-[#F8FAFC] py-20 md:py-28",
        className
      )}
      aria-labelledby={`${id}-heading`}
    >
      {/* Decorative gradient radial bg */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/20 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-100/10 blur-[100px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
        {layout === "split" ? (
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Left: Messaging */}
            <div className="flex flex-col gap-6 text-left lg:col-span-6">
              <div className="flex items-center justify-start gap-3">
                <Logo />
                <span className="text-slate-300" aria-hidden="true">
                  |
                </span>
                <Badge variant={badgeVariant}>{badge}</Badge>
              </div>
              <h2
                id={`${id}-heading`}
                className="font-heading text-3xl leading-tight font-extrabold tracking-tight text-slate-900 md:text-5xl"
              >
                {heading}
              </h2>
              <p className="max-w-lg text-sm leading-relaxed text-slate-600">
                {description}
              </p>

              {bullets && bullets.length > 0 && (
                <ul
                  className="mt-2 flex flex-col gap-3.5"
                  aria-label="Benefits checklist"
                >
                  {bullets.map((point, index) => (
                    <li key={index} className="flex items-start gap-2.5">
                      <CheckCircle
                        className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#10B981]"
                        aria-hidden="true"
                      />
                      <span className="text-xs text-slate-600">{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-6">
              <LeadForm defaultSolution={defaultSolution} />
            </div>
          </div>
        ) : (
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
            <div className="mb-1 flex justify-center">
              <Badge variant={badgeVariant}>{badge}</Badge>
            </div>
            <h2
              id={`${id}-heading`}
              className="max-w-xl font-heading text-3xl leading-tight font-extrabold tracking-tight text-slate-900 md:text-4xl"
            >
              {heading}
            </h2>
            <p className="mb-4 max-w-md text-sm leading-relaxed text-slate-600">
              {description}
            </p>

            <div className="w-full text-left">
              <LeadForm defaultSolution={defaultSolution} />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
