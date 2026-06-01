import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import Badge from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface TestimonialCardProps {
  badge: string
  badgeVariant: "blue" | "green"
  metric: string
  metricColor: string
  quote: string
  description: string
  authorInitials: string
  authorTitle: string
  authorCompany: string
  variant?: "blue" | "green"
  className?: string
}

/**
 * Reusable TestimonialCard — used on homepage results section.
 */
export default function TestimonialCard({
  badge,
  badgeVariant,
  metric,
  metricColor,
  quote,
  description,
  authorInitials,
  authorTitle,
  authorCompany,
  variant = "blue",
  className,
}: TestimonialCardProps) {
  const initialsColors =
    variant === "green"
      ? "bg-emerald-50 text-[#10B981]"
      : "bg-blue-50 text-[#2563EB]"

  return (
    <Card variant={variant} className={cn("group/card", className)}>
      <CardHeader>
        <div className="mb-4 flex items-start justify-between gap-4">
          <Badge variant={badgeVariant}>{badge}</Badge>
          <span
            className="font-heading text-2xl font-bold"
            style={{ color: metricColor }}
          >
            {metric}
          </span>
        </div>
        <CardTitle className="font-heading text-lg leading-snug font-extrabold md:text-xl">
          {quote}
        </CardTitle>
        <CardDescription className="mt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="mt-2 flex items-center gap-3 border-t border-slate-100 pt-4">
        <div
          className={cn(
            "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold",
            initialsColors
          )}
        >
          {authorInitials}
        </div>
        <div>
          <h5 className="text-xs font-bold text-slate-800">{authorTitle}</h5>
          <p className="font-mono text-[10px] text-slate-400">
            {authorCompany}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
