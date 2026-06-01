import React from "react"
import Link from "next/link"
import { Shield } from "lucide-react"

export default function Logo() {
  return (
    <Link
      href="/"
      className="group flex items-center gap-2 rounded-md select-none focus-visible:outline-2 focus-visible:outline-brand-blue"
      aria-label="Aliign Data homepage"
    >
      <div className="flex items-center justify-center rounded-lg bg-blue-50 p-1 text-[#2563EB] transition-all group-hover:scale-105 group-hover:bg-blue-100">
        <Shield className="h-5 w-5 fill-blue-50/50 stroke-[2.5]" />
      </div>
      <span className="font-heading text-base font-extrabold tracking-tight text-[#0F172A] transition-colors group-hover:text-[#2563EB] md:text-lg">
        ALIGNDATA
      </span>
    </Link>
  )
}
