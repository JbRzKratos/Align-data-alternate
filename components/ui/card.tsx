import React from "react"
import { cn } from "@/lib/utils"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "blue" | "green" | "default"
  hoverable?: boolean
}

export function Card({
  className,
  variant = "default",
  hoverable = true,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-slate-200/60 bg-white shadow-sm transition-all duration-300 relative flex flex-col justify-between overflow-hidden",
        hoverable && [
          "hover:scale-[1.015] hover:shadow-md",
          variant === "blue" && "hover:border-blue-300 hover:shadow-[0_8px_30px_rgb(37,99,235,0.06)]",
          variant === "green" && "hover:border-emerald-300 hover:shadow-[0_8px_30px_rgb(16,185,129,0.06)]",
          variant === "default" && "hover:border-slate-300"
        ],
        className
      )}
      {...props}
    />
  )
}

export function CardHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex flex-col gap-2 p-5 md:p-6 pb-2", className)}
      {...props}
    />
  )
}

export function CardTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("font-heading font-bold text-lg text-slate-900 tracking-tight", className)}
      {...props}
    />
  )
}

export function CardDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-xs text-slate-500 leading-relaxed", className)}
      {...props}
    />
  )
}

export function CardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("p-5 md:p-6 pt-0 flex-grow text-xs text-slate-600 leading-relaxed", className)}
      {...props}
    />
  )
}

export function CardFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex items-center p-5 md:p-6 pt-0", className)}
      {...props}
    />
  )
}

