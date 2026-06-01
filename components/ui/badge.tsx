import React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  icon?: React.ReactNode
  variant?: "blue" | "green" | "gray"
}

export default function Badge({
  children,
  icon,
  variant = "blue",
  className,
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex h-7 items-center gap-1.5 rounded-full border px-3.5 text-[10px] font-bold tracking-wider uppercase transition-all duration-300 select-none hover:scale-[1.02] md:text-xs",
        variant === "blue" && [
          "border-blue-100 bg-blue-50 text-blue-600",
          "hover:border-blue-200 hover:bg-blue-100/50 hover:shadow-[0_4px_12px_rgba(37,99,235,0.05)]",
        ],
        variant === "green" && [
          "border-emerald-100 bg-emerald-50 text-emerald-600",
          "hover:border-emerald-200 hover:bg-emerald-100/50 hover:shadow-[0_4px_12px_rgba(16,185,129,0.05)]",
        ],
        variant === "gray" && [
          "border-slate-200 bg-slate-100 text-slate-600",
          "hover:border-slate-300 hover:bg-slate-200/60 hover:shadow-[0_4px_12px_rgba(15,23,42,0.03)]",
        ],
        className
      )}
      {...props}
    >
      {icon && (
        <span className="flex flex-shrink-0 items-center justify-center [&_svg]:size-3.5">
          {icon}
        </span>
      )}
      <span>{children}</span>
    </div>
  )
}
