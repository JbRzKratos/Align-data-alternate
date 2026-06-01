import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface IndustryCardProps {
  icon: React.ReactNode
  name: string
  description: string
  contactCount: string
  variant?: "blue" | "green"
  className?: string
}

/**
 * Reusable IndustryCard — used on homepage industries grid.
 * Enforces consistent icon, title, description, and count layout.
 */
export default function IndustryCard({
  icon,
  name,
  description,
  contactCount,
  variant = "blue",
  className,
}: IndustryCardProps) {
  const iconColor = variant === "green" ? "text-brand-green" : "text-brand-blue"
  const titleHover =
    variant === "green"
      ? "group-hover/card:text-brand-green"
      : "group-hover/card:text-brand-blue"

  return (
    <Card variant={variant} className={cn("group/card", className)}>
      <CardHeader>
        <div
          className={cn(
            "mb-4 h-5 w-5 transition-transform group-hover/card:scale-105",
            iconColor
          )}
        >
          {icon}
        </div>
        <CardTitle className={cn("transition-colors", titleHover)}>
          {name}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="mt-2">
        <div className="font-mono text-[10px] text-gray-500">
          {contactCount}
        </div>
      </CardContent>
    </Card>
  )
}
