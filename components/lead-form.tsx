"use client"

import React, { useState, useId } from "react"
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { ALL_SOLUTIONS } from "@/content/solutions"

interface LeadFormProps {
  defaultSolution?: string
}

export default function LeadForm({ defaultSolution = "" }: LeadFormProps) {
  const formId = useId()
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
    const freeDomains = [
      "gmail.com",
      "yahoo.com",
      "outlook.com",
      "hotmail.com",
      "aol.com",
      "icloud.com",
      "mail.com",
    ]
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
        setErrorMsg(
          "Please enter a valid corporate/work email address to request sample data."
        )
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

    // Simulate enterprise API ingestion & validation check
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
    }, 2000)
  }

  return (
    <div className="relative w-full">
      {/* Card glow */}
      <div
        className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-r from-brand-blue/20 to-brand-green/20 opacity-20 blur-xl"
        aria-hidden="true"
      />

      <div
        className="glass-panel relative overflow-hidden rounded-2xl border-slate-200/80 p-6 shadow-2xl md:p-8"
        role="region"
        aria-label="Sample data request form"
      >
        {/* Background mesh grid */}
        <div
          className="grid-bg pointer-events-none absolute inset-0 opacity-10"
          aria-hidden="true"
        />

        {isSuccess ? (
          <div className="flex animate-in flex-col items-center py-10 text-center duration-300 fade-in zoom-in">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-brand-green/20 bg-brand-green/10 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
              <CheckCircle2
                className="h-8 w-8 text-brand-green"
                aria-hidden="true"
              />
            </div>
            <h3 className="font-heading text-2xl font-extrabold tracking-tight text-slate-900">
              Sample Request Ingested
            </h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-600">
              Our data validation team is preparing your custom sample file.
              Expect an email at{" "}
              <strong className="text-slate-900">{email}</strong> within the
              next 2–4 hours.
            </p>
            <div className="mt-8 flex w-full max-w-xs flex-col gap-2 rounded-lg border border-slate-200/60 bg-slate-50 p-4 text-left text-xs">
              <div className="flex justify-between">
                <span className="font-medium text-slate-500">Contact:</span>
                <span className="font-bold text-slate-800">{fullName}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-slate-500">
                  Organization:
                </span>
                <span className="font-bold text-slate-800">{company}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-slate-500">
                  Selected Segment:
                </span>
                <span className="font-bold text-[#2563EB]">{solution}</span>
              </div>
            </div>
          </div>
        ) : (
          <form
            onSubmit={step === 3 ? handleSubmit : handleNextStep}
            className="flex flex-col gap-5"
            noValidate
            aria-label={`Sample data request — step ${step} of 3`}
          >
            {/* Step Indicators */}
            <div className="mb-2 flex items-center justify-between border-b border-slate-200 pb-4">
              <div className="flex items-center gap-1.5">
                <Sparkles
                  className="h-4 w-4 text-[#2563EB]"
                  aria-hidden="true"
                />
                <span className="text-xs font-bold tracking-wider text-slate-900 uppercase">
                  Request Sample Data
                </span>
              </div>
              <div
                className="flex items-center gap-1"
                aria-label={`Step ${step} of 3`}
                role="progressbar"
                aria-valuenow={step}
                aria-valuemin={1}
                aria-valuemax={3}
              >
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
              <div
                className="flex items-center gap-2 rounded-lg border border-rose-100 bg-rose-50 p-3 text-xs text-rose-600"
                role="alert"
                aria-live="assertive"
                id={`${formId}-error`}
              >
                <AlertCircle
                  className="h-4 w-4 flex-shrink-0"
                  aria-hidden="true"
                />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Step 1: Basic Information */}
            {step === 1 && (
              <div className="flex animate-in flex-col gap-4 duration-200 fade-in slide-in-from-right-3">
                <div className="flex flex-col gap-1.5">
                  <Label
                    htmlFor={`${formId}-fullName`}
                    className="text-xs font-bold tracking-wider text-slate-600 uppercase"
                  >
                    Full Name
                  </Label>
                  <Input
                    id={`${formId}-fullName`}
                    type="text"
                    required
                    placeholder="John Doe"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    aria-describedby={errorMsg ? `${formId}-error` : undefined}
                    className="h-auto rounded-lg border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 hover:border-slate-300 focus-visible:border-brand-blue/50 focus-visible:ring-brand-blue/50"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label
                    htmlFor={`${formId}-email`}
                    className="text-xs font-bold tracking-wider text-slate-600 uppercase"
                  >
                    Work Email Address
                  </Label>
                  <Input
                    id={`${formId}-email`}
                    type="email"
                    required
                    placeholder="john@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-describedby={`${formId}-email-hint${errorMsg ? ` ${formId}-error` : ""}`}
                    className="h-auto rounded-lg border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 hover:border-slate-300 focus-visible:border-brand-blue/50 focus-visible:ring-brand-blue/50"
                  />
                  <span
                    id={`${formId}-email-hint`}
                    className="text-[10px] leading-normal text-slate-400"
                  >
                    Must be a corporate domain name. Free accounts (Gmail,
                    Yahoo) are not accepted.
                  </span>
                </div>
              </div>
            )}

            {/* Step 2: Company & Choice */}
            {step === 2 && (
              <div className="flex animate-in flex-col gap-4 duration-200 fade-in slide-in-from-right-3">
                <div className="flex flex-col gap-1.5">
                  <Label
                    htmlFor={`${formId}-company`}
                    className="text-xs font-bold tracking-wider text-slate-600 uppercase"
                  >
                    Company Name
                  </Label>
                  <Input
                    id={`${formId}-company`}
                    type="text"
                    required
                    placeholder="Acme Corp"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    aria-describedby={errorMsg ? `${formId}-error` : undefined}
                    className="h-auto rounded-lg border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 hover:border-slate-300 focus-visible:border-brand-blue/50 focus-visible:ring-brand-blue/50"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label
                    htmlFor={`${formId}-solution`}
                    className="text-xs font-bold tracking-wider text-slate-600 uppercase"
                  >
                    Database Selection
                  </Label>
                  <Select value={solution} onValueChange={setSolution} required>
                    <SelectTrigger
                      id={`${formId}-solution`}
                      aria-describedby={
                        errorMsg ? `${formId}-error` : undefined
                      }
                      className="h-auto w-full rounded-lg border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 hover:border-slate-300 focus:border-brand-blue/50 focus:ring-brand-blue/50 data-placeholder:text-slate-400"
                    >
                      <SelectValue placeholder="Select an option..." />
                    </SelectTrigger>
                    <SelectContent position="popper" className="z-[200]">
                      {ALL_SOLUTIONS.map((s) => (
                        <SelectItem key={s.slug} value={s.name}>
                          {s.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {/* Step 3: Audience & Target */}
            {step === 3 && (
              <div className="flex animate-in flex-col gap-4 duration-200 fade-in slide-in-from-right-3">
                <div className="flex flex-col gap-1.5">
                  <Label
                    htmlFor={`${formId}-phone`}
                    className="text-xs font-bold tracking-wider text-slate-600 uppercase"
                  >
                    Contact Phone Number (Optional)
                  </Label>
                  <Input
                    id={`${formId}-phone`}
                    type="tel"
                    placeholder="+1 (555) 019-2834"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="h-auto rounded-lg border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 hover:border-slate-300 focus-visible:border-brand-blue/50 focus-visible:ring-brand-blue/50"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label
                    htmlFor={`${formId}-audience`}
                    className="text-xs font-bold tracking-wider text-slate-600 uppercase"
                  >
                    Target Criteria / Sample Detail
                  </Label>
                  <Textarea
                    id={`${formId}-audience`}
                    rows={3}
                    placeholder="Describe your ideal buyer (e.g. CTOs at Software companies with 50-200 employees in Europe)"
                    value={targetAudience}
                    onChange={(e) => setTargetAudience(e.target.value)}
                    className="h-auto resize-none rounded-lg border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 hover:border-slate-300 focus-visible:border-brand-blue/50 focus-visible:ring-brand-blue/50"
                  />
                </div>
              </div>
            )}

            {/* Navigation buttons */}
            <div className="mt-4 flex items-center gap-3 border-t border-slate-200/80 pt-2">
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
                  className="ml-auto flex-1"
                >
                  Continue
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
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
                      <RefreshCw
                        className="h-4 w-4 animate-spin"
                        aria-hidden="true"
                      />
                      Validating Target Criteria...
                    </>
                  ) : (
                    <>
                      Request Free Sample
                      <Sparkles className="h-4 w-4" aria-hidden="true" />
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
