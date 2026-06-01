// Centralized footer link data — single source of truth for all footer columns
export interface FooterLinkItem {
  name: string
  href: string
}

export const FOOTER_SOLUTIONS: FooterLinkItem[] = [
  {
    name: "Technology Users Database",
    href: "/solutions/technology-users-database",
  },
  { name: "Healthcare Database", href: "/solutions/healthcare-database" },
  {
    name: "Professional Email Lists",
    href: "/solutions/professional-email-lists",
  },
  { name: "Industry Databases", href: "/solutions/industry-databases" },
  { name: "Data Appending Services", href: "/solutions/data-appending" },
  { name: "Regional Databases", href: "/solutions/regional-databases" },
]

export const FOOTER_INDUSTRIES: FooterLinkItem[] = [
  { name: "Healthcare & Biotech", href: "/#industries" },
  { name: "Technology & Software", href: "/#industries" },
  { name: "Banking & Finance", href: "/#industries" },
  { name: "Manufacturing & Industrial", href: "/#industries" },
  { name: "Education & Academy", href: "/#industries" },
  { name: "Retail & E-commerce", href: "/#industries" },
]

export const FOOTER_RESOURCES: FooterLinkItem[] = [
  { name: "Revenue Intelligence Blog", href: "/#resources" },
  { name: "Customer Case Studies", href: "/#results" },
  { name: "B2B Data Playbooks", href: "/#resources" },
  { name: "Frequently Asked Questions", href: "/#faq" },
]

export const FOOTER_COMPLIANCE: FooterLinkItem[] = [
  { name: "GDPR Alignment", href: "/#compliance" },
  { name: "CCPA Privacy Rights", href: "/#compliance" },
  { name: "CASL & Email Compliance", href: "/#compliance" },
  { name: "PIPEDA Safeguards", href: "/#compliance" },
  { name: "Privacy Policy", href: "/#compliance" },
  { name: "Terms of Service", href: "/#compliance" },
]
