// Centralized testimonials / case study data
export interface TestimonialItem {
  badge: string
  badgeVariant: "blue" | "green"
  metric: string
  metricColor: string
  quote: string
  description: string
  authorInitials: string
  authorTitle: string
  authorCompany: string
  variant: "blue" | "green"
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    badge: "SOFTWARE & SAAS CASE STUDY",
    badgeVariant: "blue",
    metric: "+42%",
    metricColor: "#2563EB",
    quote:
      "\u201cAliign Data completely revamped our outbound operations. Email bounce rates dropped to under 3% in our first campaign.\u201d",
    description:
      "By target-filtering companies using AWS and Salesforce Commerce, the sales team boosted response rates by 42% and secured 14 new enterprise client demos in month one.",
    authorInitials: "TC",
    authorTitle: "VP of Sales & Marketing",
    authorCompany: "Global Cloud Tech Firm",
    variant: "blue",
  },
  {
    badge: "HEALTHCARE & MEDICAL DEVICES",
    badgeVariant: "green",
    metric: "$4.1M",
    metricColor: "#10B981",
    quote:
      "\u201cReaching actual hospital administrators was impossible before. The direct office email list saved our sales representatives months of guess work.\u201d",
    description:
      "Leveraging NPI-verified clinical director files, the medical logistics brand generated over $4.1M in fresh contract pipeline within 90 days.",
    authorInitials: "HM",
    authorTitle: "Chief Marketing Officer",
    authorCompany: "BioTech Logistics Corp",
    variant: "green",
  },
]
