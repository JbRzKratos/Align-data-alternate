import React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface SolutionCardProps {
  icon: React.ReactNode
  title: string
  description: string
  coverage: string
  href: string
  variant?: "blue" | "green"
  className?: string
}

/**
 * Reusable Solution card component — used on homepage solutions grid.
 * Enforces consistent icon, title, description, coverage, and CTA link layout.
 */
export default function SolutionCard({
  icon,
  title,
  description,
  coverage,
  href,
  variant = "blue",
  className,
}: SolutionCardProps) {
  const linkColor =
    variant === "green" ? "hover:text-[#10B981]" : "hover:text-[#2563EB]"

  return (
    <Card variant={variant} className={cn("group/card", className)}>
      <CardHeader>
        <div
          className={cn(
            "mb-3 flex h-10 w-10 items-center justify-center rounded-lg",
            variant === "green"
              ? "bg-emerald-50 text-[#10B981]"
              : "bg-blue-50 text-[#2563EB]"
          )}
        >
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="mt-2">
        <div className="font-mono text-[10px] tracking-wider text-slate-400 uppercase">
          {coverage}
        </div>
      </CardContent>
      <CardFooter>
        <Link
          href={href}
          className={cn(
            "group/link flex items-center gap-1 text-xs font-bold text-slate-800",
            linkColor
          )}
          aria-label={`Explore ${title} solution`}
        >
          Explore Solution
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5" />
        </Link>
      </CardFooter>
    </Card>
  )
}
