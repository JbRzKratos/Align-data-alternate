// Centralized compliance / privacy data
export interface ComplianceItem {
  title: string
  description: string
  region: string
  variant: "blue" | "green"
}

export const COMPLIANCE_ITEMS: ComplianceItem[] = [
  {
    title: "GDPR Aligned",
    description:
      "Legitimate Interest assessment (Article 6) fully detailed. Opt-out links are appended in our database registry exports.",
    region: "EUROPEAN UNION compliant",
    variant: "green",
  },
  {
    title: "CCPA Compliant",
    description:
      "California Consumer Privacy Act requirements met. Instant user verification registries mapped with strict record matching.",
    region: "CALIFORNIA STATE compliant",
    variant: "blue",
  },
  {
    title: "CASL Protected",
    description:
      "Canadian Anti-Spam Legislation compliance maps direct corporate consent and commercial solicitation filters.",
    region: "CANADA CAN-SPAM compliant",
    variant: "green",
  },
  {
    title: "PIPEDA Safe",
    description:
      "Data storage and transit comply with Canadian personal information security acts, supporting strict bank-level safeguards.",
    region: "CANADIAN PRIVACY compliant",
    variant: "blue",
  },
]
