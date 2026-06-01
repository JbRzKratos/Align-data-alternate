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

/**
 * Reusable FAQ section using shadcn Accordion.
 * Replaces all <details>/<summary> FAQ implementations.
 * Fully keyboard navigable and accessible (ARIA compliant).
 */
export default function FAQSection({ faqs, className }: FAQSectionProps) {
  return (
    <Accordion
      type="single"
      collapsible
      className={cn("flex flex-col gap-2", className)}
    >
      {faqs.map((faq, index) => (
        <AccordionItem
          key={index}
          value={`faq-${index}`}
          className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-1 transition-colors hover:bg-slate-100/30"
        >
          <AccordionTrigger className="py-4 text-sm font-bold text-slate-800 hover:no-underline [&>svg]:text-brand-blue">
            {faq.q}
          </AccordionTrigger>
          <AccordionContent className="border-t border-slate-200 pt-3 pb-4 text-xs leading-relaxed text-slate-600">
            {faq.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
