"use client"

import React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

interface FAQItem {
  q: string
  a: string
}

interface FAQSectionProps {
  faqs: FAQItem[]
  className?: string
}

export default function FAQSection({ faqs, className }: FAQSectionProps) {
  const mid = Math.ceil(faqs.length / 2)
  const leftFaqs = faqs.slice(0, mid)
  const rightFaqs = faqs.slice(mid)

  const renderFaqItem = (faq: FAQItem, index: number, total: number) => (
    <AccordionItem
      key={faq.q}
      value={faq.q}
      className={cn(
        "bg-transparent px-4 md:rounded-2xl md:border md:border-slate-200/80 md:bg-white md:px-6 md:py-1 md:shadow-[0_4px_20px_rgb(0,0,0,0.03)] md:transition-all md:hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)]",
        index === total - 1 ? "border-b-0 md:border" : "border-b border-slate-200/60 md:border"
      )}
    >
      <AccordionTrigger className="py-4 text-left text-[13px] font-bold leading-snug text-slate-800 hover:no-underline hover:text-brand-blue md:py-5 md:text-sm [&>svg]:text-brand-blue">
        {faq.q}
      </AccordionTrigger>
      <AccordionContent className="border-t border-slate-100 pt-3 pb-5 text-xs leading-relaxed text-slate-500 md:text-sm md:leading-relaxed">
        {faq.a}
      </AccordionContent>
    </AccordionItem>
  )

  return (
    <div className={cn("w-full", className)}>
      {/* Mobile View: Single Compact Card container */}
      <div className="md:hidden overflow-hidden rounded-3xl border border-slate-200/80 bg-white/70 backdrop-blur-md shadow-xl shadow-slate-200/40">
        <Accordion type="single" collapsible className="flex flex-col">
          {faqs.map((faq, index) => renderFaqItem(faq, index, faqs.length))}
        </Accordion>
      </div>

      {/* Desktop View: 2-Column Grid */}
      <div className="hidden md:grid md:grid-cols-2 md:items-start md:gap-6 lg:gap-8">
        <Accordion type="single" collapsible className="flex flex-col gap-4">
          {leftFaqs.map((faq, index) => renderFaqItem(faq, index, leftFaqs.length))}
        </Accordion>
        <Accordion type="single" collapsible className="flex flex-col gap-4">
          {rightFaqs.map((faq, index) => renderFaqItem(faq, index, rightFaqs.length))}
        </Accordion>
      </div>
    </div>
  )
}
