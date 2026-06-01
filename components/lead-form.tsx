"use client"

import React, { useState } from "react"
import { Sparkles, ArrowRight, CheckCircle2, AlertCircle, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface LeadFormProps {
  defaultSolution?: string
}

export default function LeadForm({ defaultSolution = "" }: LeadFormProps) {
  const [step, setStep] = useState(1)
  const [email, setEmail] = useState("")
  const [fullName, setFullName] = useState("")
  const [company, setCompany] = useState("")
  const [solution, setSolution] = useState(defaultSolution)
  const [phone, setPhone] = useState("")
  const [targetAudience, setTargetAudience] = useState("")
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")
  const [isSuccess, setIsSuccess] = useState(false)

  // Disallow common free email providers to prioritize premium B2B leads
  const isBusinessEmail = (emailVal: string) => {
    const freeDomains = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com", "aol.com", "icloud.com", "mail.com"]
    const domain = emailVal.split("@")[1]?.toLowerCase()
    if (!domain) return false
    return !freeDomains.includes(domain)
  }

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMsg("")

    if (step === 1) {
      if (!fullName.trim()) {
        setErrorMsg("Please enter your full name.")
        return
      }
      if (!email.trim() || !email.includes("@")) {
        setErrorMsg("Please enter a valid email address.")
        return
      }
      if (!isBusinessEmail(email)) {
        setErrorMsg("Please enter a valid corporate/work email address to request sample data.")
        return
      }
      setStep(2)
    } else if (step === 2) {
      if (!company.trim()) {
        setErrorMsg("Please enter your company name.")
        return
      }
      if (!solution) {
        setErrorMsg("Please select a data solution.")
        return
      }
      setStep(3)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMsg("")
    setIsSubmitting(true)

    // Simulate enterprise api ingestion & validation check
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
    }, 2000)
  }

  return (
    <div className="w-full relative">
      {/* Light border card glow */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-brand-blue/20 to-brand-green/20 blur-xl opacity-20 pointer-events-none" />
      
      <div className="relative glass-panel rounded-2xl p-6 md:p-8 shadow-2xl border-slate-200/80 overflow-hidden">
        {/* Background mesh grid */}
        <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />

        {isSuccess ? (
          <div className="flex flex-col items-center text-center py-10 animate-in fade-in zoom-in duration-300">
            <div className="h-16 w-16 rounded-full bg-brand-green/10 flex items-center justify-center border border-brand-green/20 mb-6 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
              <CheckCircle2 className="h-8 w-8 text-brand-green" />
            </div>
            <h3 className="font-heading font-extrabold text-2xl text-slate-900 tracking-tight">
              Sample Request Ingested
            </h3>
            <p className="text-slate-650 text-sm mt-3 max-w-sm leading-relaxed">
              Our data validation team is preparing your custom sample file. Expect an email at <strong className="text-slate-900">{email}</strong> within the next 2-4 hours.
            </p>
            <div className="mt-8 flex flex-col gap-2 w-full max-w-xs text-xs text-left bg-slate-50 rounded-lg p-4 border border-slate-200/60">
              <div className="flex justify-between"><span className="text-slate-450 font-medium">Contact:</span> <span className="text-slate-800 font-bold">{fullName}</span></div>
              <div className="flex justify-between"><span className="text-slate-450 font-medium">Organization:</span> <span className="text-slate-800 font-bold">{company}</span></div>
              <div className="flex justify-between"><span className="text-slate-450 font-medium">Selected Segment:</span> <span className="text-[#2563EB] font-bold">{solution}</span></div>
            </div>
          </div>
        ) : (
          <form onSubmit={step === 3 ? handleSubmit : handleNextStep} className="flex flex-col gap-5">
            {/* Step Indicators */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-2">
              <div className="flex items-center gap-1.5">
                <Sparkles className="h-4 w-4 text-[#2563EB]" />
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Request Sample Data
                </span>
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3].map((s) => (
                  <div
                    key={s}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-300",
                      s === step ? "w-6 bg-[#2563EB]" : "w-2 bg-slate-200"
                    )}
                  />
                ))}
              </div>
            </div>

            {/* Error Message */}
            {errorMsg && (
              <div className="flex items-center gap-2 p-3 rounded-lg bg-rose-50 border border-rose-100 text-rose-600 text-xs animate-shake">
                <AlertCircle className="h-4 w-4 flex-shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Step 1: Basic Information */}
            {step === 1 && (
              <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-right-3 duration-200">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="fullName" className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    placeholder="John Doe"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-white border border-slate-250 hover:border-slate-350 focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/50 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                    Work Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="john@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white border border-slate-250 hover:border-slate-350 focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/50 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-all"
                  />
                  <span className="text-[10px] text-slate-400 leading-normal">
                    Must be a corporate domain name. Free accounts (Gmail, Yahoo) are not accepted.
                  </span>
                </div>
              </div>
            )}

            {/* Step 2: Company & Choice */}
            {step === 2 && (
              <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-right-3 duration-200">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="company" className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                    Company Name
                  </label>
                  <input
                    id="company"
                    type="text"
                    required
                    placeholder="Acme Corp"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full bg-white border border-slate-250 hover:border-slate-350 focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/50 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="solution" className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                    Database Selection
                  </label>
                  <select
                    id="solution"
                    required
                    value={solution}
                    onChange={(e) => setSolution(e.target.value)}
                    className="w-full bg-white border border-slate-250 hover:border-slate-350 focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/50 rounded-lg px-4 py-3 text-sm text-slate-900 focus:outline-none transition-all"
                  >
                    <option value="" disabled className="text-slate-400">Select an option...</option>
                    <option value="Technology Users Database">Technology Users Database</option>
                    <option value="Healthcare Database">Healthcare Database</option>
                    <option value="Professional Email Lists">Professional Email Lists</option>
                    <option value="Industry Databases">Industry Databases</option>
                    <option value="Regional Databases">Regional Databases</option>
                    <option value="Data Appending">Data Appending Services</option>
                  </select>
                </div>
              </div>
            )}

            {/* Step 3: Audience & Target */}
            {step === 3 && (
              <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-right-3 duration-200">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                    Contact Phone Number (Optional)
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 019-2834"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white border border-slate-250 hover:border-slate-350 focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/50 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="audience" className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                    Target Criteria / Sample Detail
                  </label>
                  <textarea
                    id="audience"
                    rows={3}
                    placeholder="Describe your ideal buyer (e.g. CTOs at Software companies with 50-200 employees in Europe)"
                    value={targetAudience}
                    onChange={(e) => setTargetAudience(e.target.value)}
                    className="w-full bg-white border border-slate-250 hover:border-slate-350 focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/50 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-all resize-none"
                  />
                </div>
              </div>
            )}

            {/* Navigation buttons */}
            <div className="flex items-center gap-3 mt-4 pt-2 border-t border-slate-200/80">
              {step > 1 && (
                <Button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  variant="secondary"
                  className="flex-1"
                >
                  Back
                </Button>
              )}
              {step < 3 ? (
                <Button
                  type="submit"
                  variant="primary"
                  className="flex-1 ml-auto"
                >
                  Continue
                  <ArrowRight className="h-4 w-4" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variant="primary"
                  className="flex-1"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="h-4 w-4 animate-spin" />
                      Validating Target Criteria...
                    </>
                  ) : (
                    <>
                      Request Free Sample
                      <Sparkles className="h-4 w-4" />
                    </>
                  )}
                </Button>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
