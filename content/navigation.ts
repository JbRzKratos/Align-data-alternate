// Centralized navigation data — used by Navbar and Footer
// Keep this file as the single source of truth for all navigation links

export interface NavItem {
  name: string
  href: string
  description?: string
  icon?: string // Lucide icon name, resolved at component level
}

export const NAV_SOLUTIONS: NavItem[] = [
  {
    name: "Technology Users Database",
    href: "/solutions/technology-users-database",
    description: "Target companies using specific hardware or software stacks.",
    icon: "Database",
  },
  {
    name: "Healthcare Database",
    href: "/solutions/healthcare-database",
    description:
      "Access verified doctors, hospital administrators, and practitioners.",
    icon: "Shield",
  },
  {
    name: "Professional Email Lists",
    href: "/solutions/professional-email-lists",
    description:
      "Premium corporate contacts segmentable by title and seniority.",
    icon: "Mail",
  },
  {
    name: "Industry Databases",
    href: "/solutions/industry-databases",
    description:
      "Deep coverage across specific trade, commerce, and manufacturing fields.",
    icon: "Building",
  },
  {
    name: "Data Appending",
    href: "/solutions/data-appending",
    description:
      "Clean, match, and enrich your existing contacts with 95% accuracy.",
    icon: "Sparkles",
  },
  {
    name: "Regional Databases",
    href: "/solutions/regional-databases",
    description: "Global geographic data segments across 100+ countries.",
    icon: "Globe",
  },
]

export const NAV_INDUSTRIES: NavItem[] = [
  { name: "Healthcare", href: "/#industries" },
  { name: "Technology", href: "/#industries" },
  { name: "Finance", href: "/#industries" },
  { name: "Manufacturing", href: "/#industries" },
  { name: "Education", href: "/#industries" },
  { name: "Retail", href: "/#industries" },
  { name: "Construction", href: "/#industries" },
  { name: "Logistics", href: "/#industries" },
]

export const NAV_RESOURCES: NavItem[] = [
  { name: "Blog", href: "/#resources" },
  { name: "Case Studies", href: "/#results" },
  { name: "Guides", href: "/#resources" },
  { name: "FAQ", href: "/#faq" },
]

export const NAV_PRIMARY: NavItem[] = [
  { name: "About", href: "/#about" },
  { name: "Contact", href: "/#contact" },
]
