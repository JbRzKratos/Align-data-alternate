import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center font-heading whitespace-nowrap transition-all duration-300 select-none outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/50 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-[#2563EB] to-[#0EA5E9] text-white font-extrabold border border-transparent shadow-md shadow-blue-500/15 hover:shadow-blue-500/25 hover:from-[#1D4ED8] hover:to-[#0284C7] transition-all",
        secondary:
          "border border-slate-200 bg-white text-slate-800 font-bold hover:bg-slate-50 hover:border-slate-300 hover:shadow-sm",
        ghost:
          "text-slate-600 font-bold hover:text-slate-900 hover:bg-slate-100/70",
      },
      size: {
        default: "h-11 px-6 text-sm gap-2 rounded-lg [&_svg]:size-4",
        sm: "h-9 px-4 text-xs gap-1.5 rounded-lg [&_svg]:size-3.5",
        lg: "h-13 px-8 text-base gap-2.5 rounded-lg [&_svg]:size-5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
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
