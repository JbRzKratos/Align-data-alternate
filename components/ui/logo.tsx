import React from "react"
import Link from "next/link"

export default function Logo() {
  return (
    <Link
      href="/"
      className="font-mono font-bold text-sm md:text-base tracking-widest text-[#0F172A] hover:text-[#2563EB] transition-colors select-none"
    >
      ALIGNDATA/
    </Link>
  )
}
