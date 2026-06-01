import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex shrink-0 cursor-pointer items-center justify-center font-heading whitespace-nowrap transition-all duration-300 outline-none select-none focus-visible:ring-2 focus-visible:ring-brand-blue/50 active:translate-y-px disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "border border-transparent bg-gradient-to-r from-[#2563EB] to-[#0EA5E9] font-extrabold text-white shadow-md shadow-blue-500/15 transition-all hover:from-[#1D4ED8] hover:to-[#0284C7] hover:shadow-blue-500/25",
        secondary:
          "border border-slate-200 bg-white font-bold text-slate-800 hover:border-slate-300 hover:bg-slate-50 hover:shadow-sm",
        ghost:
          "font-bold text-slate-600 hover:bg-slate-100/70 hover:text-slate-900",
      },
      size: {
        default: "h-11 gap-2 rounded-lg px-6 text-sm [&_svg]:size-4",
        sm: "h-9 gap-1.5 rounded-lg px-4 text-xs [&_svg]:size-3.5",
        lg: "h-13 gap-2.5 rounded-lg px-8 text-base [&_svg]:size-5",
        icon: "h-10 w-10 rounded-lg [&_svg]:size-4",
        "icon-sm": "h-7 w-7 rounded-md [&_svg]:size-3.5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot.Root : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
