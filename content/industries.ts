// Centralized industry data — used on homepage Industries section and UniverseMap
export interface IndustryItem {
  name: string
  icon: string // Lucide icon name, resolved at component level
  description: string
  contactCount: string
  variant: "blue" | "green"
}

export const INDUSTRIES: IndustryItem[] = [
  {
    name: "Healthcare",
    icon: "Shield",
    description:
      "NPI-verified hospital directors, nursing leads, and private practitioners.",
    contactCount: "12.1M+ CONTACTS",
    variant: "blue",
  },
  {
    name: "Technology",
    icon: "Cpu",
    description:
      "SaaS founders, IT operations executives, developers, and tech buyers.",
    contactCount: "18.4M+ CONTACTS",
    variant: "green",
  },
  {
    name: "Finance",
    icon: "Landmark",
    description:
      "CFOs, investment bankers, controllers, and regulatory risk leads.",
    contactCount: "8.7M+ CONTACTS",
    variant: "blue",
  },
  {
    name: "Manufacturing",
    icon: "Hammer",
    description:
      "Operations managers, supply procurement buyers, and plant directors.",
    contactCount: "9.2M+ CONTACTS",
    variant: "green",
  },
  {
    name: "Education",
    icon: "GraduationCap",
    description:
      "University deans, K-12 superintendents, and IT school procurement.",
    contactCount: "6.5M+ CONTACTS",
    variant: "blue",
  },
  {
    name: "Retail",
    icon: "ShoppingBag",
    description:
      "Merchandising leads, store operations heads, and corporate buyers.",
    contactCount: "7.9M+ CONTACTS",
    variant: "green",
  },
  {
    name: "Construction",
    icon: "Wrench",
    description:
      "Safety directors, project engineers, developers, and field estimators.",
    contactCount: "4.1M+ CONTACTS",
    variant: "blue",
  },
  {
    name: "Logistics",
    icon: "Truck",
    description:
      "Fleet managers, supply coordinators, and distribution hub directors.",
    contactCount: "5.3M+ CONTACTS",
    variant: "green",
  },
]
