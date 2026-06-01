import React from "react"
import Badge from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  badge?: string
  badgeVariant?: "blue" | "green" | "gray"
  badgeIcon?: React.ReactNode
  heading: string
  subheading?: string
  align?: "left" | "center"
  className?: string
  headingClassName?: string
}

/**
 * Reusable SectionHeader — used across all page sections.
 * Enforces consistent badge + h2 + paragraph spacing and typography.
 */
export default function SectionHeader({
  badge,
  badgeVariant = "blue",
  badgeIcon,
  heading,
  subheading,
  align = "center",
  className,
  headingClassName,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center"
          ? "items-center text-center"
          : "items-start text-left",
        className
      )}
    >
      {badge && (
        <div
          className={cn(
            "mb-1 flex",
            align === "center" ? "justify-center" : "justify-start"
          )}
        >
          <Badge variant={badgeVariant} icon={badgeIcon}>
            {badge}
          </Badge>
        </div>
      )}
      <h2
        className={cn(
          "font-heading text-3xl leading-tight font-extrabold tracking-tight text-slate-900 md:text-4xl",
          headingClassName
        )}
      >
        {heading}
      </h2>
      {subheading && (
        <p className="max-w-2xl text-sm leading-relaxed text-slate-500">
          {subheading}
        </p>
      )}
    </div>
  )
}
