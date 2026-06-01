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
        "inline-flex items-center gap-1.5 h-7 px-3.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider border select-none transition-all duration-300 hover:scale-[1.02]",
        variant === "blue" && [
          "bg-blue-50 border-blue-100 text-blue-600",
          "hover:bg-blue-100/50 hover:border-blue-200 hover:shadow-[0_4px_12px_rgba(37,99,235,0.05)]"
        ],
        variant === "green" && [
          "bg-emerald-50 border-emerald-100 text-emerald-600",
          "hover:bg-emerald-100/50 hover:border-emerald-200 hover:shadow-[0_4px_12px_rgba(16,185,129,0.05)]"
        ],
        variant === "gray" && [
          "bg-slate-100 border-slate-200 text-slate-600",
          "hover:bg-slate-200/60 hover:border-slate-300 hover:shadow-[0_4px_12px_rgba(15,23,42,0.03)]"
        ],
        className
      )}
      {...props}
    >
      {icon && (
        <span className="flex-shrink-0 flex items-center justify-center [&_svg]:size-3.5">
          {icon}
        </span>
      )}
      <span>{children}</span>
    </div>
  )
}

