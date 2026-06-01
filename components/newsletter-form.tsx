"use client"

import React from "react"
import { Send } from "lucide-react"

export default function NewsletterForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate submission / track sign-up
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex items-center"
      aria-label="Newsletter subscription form"
    >
      <label htmlFor="footer-email" className="sr-only">
        Enter work email address
      </label>
      <input
        id="footer-email"
        type="email"
        placeholder="Enter work email"
        required
        className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 pr-10 text-xs text-slate-800 placeholder-slate-400 transition-all focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/50 focus:outline-none"
      />
      <button
        type="submit"
        className="absolute right-1 cursor-pointer p-1.5 text-slate-400 transition-colors hover:text-brand-blue"
        aria-label="Subscribe to newsletter"
      >
        <Send className="h-3.5 w-3.5" aria-hidden="true" />
      </button>
    </form>
  )
}
