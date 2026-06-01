// Centralized solutions data — single source of truth for all 6 solution detail pages
// Used by: app/solutions/[slug]/page.tsx, navbar, footer, homepage solutions section

export interface SolutionBenefit {
  title: string
  desc: string
}

export interface SolutionField {
  name: string
  desc: string
}

export interface SolutionIndustry {
  name: string
  count: string
}

export interface SolutionUseCase {
  title: string
  desc: string
}

export interface SolutionCaseStudy {
  quote: string
  metrics: string
  author: string
  company: string
}

export interface SolutionFAQ {
  q: string
  a: string
}

export interface Solution {
  name: string
  slug: string
  keyword: string
  subtitle: string
  h1: string
  coverageStat: string
  stats: string[]
  overview: string
  benefits: SolutionBenefit[]
  whoUses: string[]
  fields: SolutionField[]
  industries: SolutionIndustry[]
  useCases: SolutionUseCase[]
  filters: string[]
  caseStudy: SolutionCaseStudy
  faqs: SolutionFAQ[]
}

export const SOLUTIONS: Record<string, Solution> = {
  "technology-users-database": {
    name: "Technology Users Database",
    slug: "technology-users-database",
    keyword: "Technographic Data Provider",
    subtitle:
      "Identify and connect with companies using specific software and infrastructure stacks.",
    h1: "Technology Users & Technographic Database",
    coverageStat: "COVERAGE: 18.4M+ CONTACTS // 95% SLA",
    stats: [
      "18.4M+ Contacts",
      "420K+ Accounts",
      "95% Direct Accuracy",
      "30-Day Refresh",
    ],
    overview:
      "Our technographic intelligence database maps active enterprise software footprints, cloud frameworks, developer tools, and security subscriptions. Stop guessing tech stacks and start matching accounts based on what they run.",
    benefits: [
      {
        title: "Precise Technographics",
        desc: "Filter by active installations of AWS, Salesforce, SAP, React, HubSpot, and 5,000+ other technologies.",
      },
      {
        title: "C-Suite Contact Paths",
        desc: "Gain direct email and phone routes to CTOs, VPs of Infrastructure, and IT Managers.",
      },
      {
        title: "Signal Alerting",
        desc: "Know when target accounts add or drop specific software subscriptions in their operations.",
      },
    ],
    whoUses: [
      "Enterprise Sales Teams",
      "Product Marketers",
      "SaaS Growth Managers",
      "Technical Recruiters",
    ],
    fields: [
      {
        name: "Active Stack Profile",
        desc: "List of identified technologies currently in use.",
      },
      {
        name: "IT Budget Segment",
        desc: "Estimated annual spend on technology infrastructure.",
      },
      {
        name: "Engineering Headcount",
        desc: "Size of development and IT support operations.",
      },
    ],
    industries: [
      { name: "SaaS & Cloud Software", count: "8.2M Leads" },
      { name: "FinTech & Payments", count: "3.4M Leads" },
      { name: "E-commerce Brands", count: "4.1M Leads" },
      { name: "Cybersecurity Services", count: "2.7M Leads" },
    ],
    useCases: [
      {
        title: "Competitive Takeouts",
        desc: "Target competitors' customers with high-value migration campaigns.",
      },
      {
        title: "Integration Marketing",
        desc: "Promote add-ons and plugins directly to users of core software hosts.",
      },
      {
        title: "Targeted ABM",
        desc: "Create dedicated marketing plays personalized to their technical stack.",
      },
    ],
    filters: [
      "Technology Installed",
      "IT Budget Size",
      "Engineering Team Headcount",
      "State/City Location",
      "Title Seniority",
    ],
    caseStudy: {
      quote:
        "Aliign Data helped us isolate Shopify Plus users in Europe. Inbound demo requests from our campaign jumped by 42%.",
      metrics: "14 Demos in 30 Days",
      author: "VP of Enterprise Growth",
      company: "Cloud Integrations Inc.",
    },
    faqs: [
      {
        q: "How do you trace technology installations?",
        a: "We monitor public web source tags, active job descriptions, server pings, and digital signatures to create a complete profile of a brand's technical footprint.",
      },
      {
        q: "How fresh is the technology usage data?",
        a: "We run validation sweeps every 30 days, refreshing records to account for software migrations, platform changes, and employee turnover.",
      },
    ],
  },

  "healthcare-database": {
    name: "Healthcare Database",
    slug: "healthcare-database",
    keyword: "Medical Contacts Database",
    subtitle:
      "NPI-verified contacts for doctors, hospital directors, and practitioners.",
    h1: "Healthcare & Medical Professionals Database",
    coverageStat: "COVERAGE: 12.1M+ CONTACTS // 95% SLA",
    stats: [
      "12.1M+ Records",
      "180K+ Clinics/Hospitals",
      "96% Verification Rate",
      "30-Day Audit Cycle",
    ],
    overview:
      "Direct, compliant contact channels for licensed doctors, surgeons, clinic administrators, and health executives. Our records are mapped using National Provider Identifier (NPI) credentials.",
    benefits: [
      {
        title: "NPI Validation",
        desc: "Every physician profile is matched against active state medical licenses and national databases.",
      },
      {
        title: "Direct Hospital Routes",
        desc: "Bypass standard clinic desks with direct emails to department heads and procurement leads.",
      },
      {
        title: "HIPAA Compliant Data",
        desc: "All details are compiled inside strict compliance frameworks and public health filings.",
      },
    ],
    whoUses: [
      "Medical Device Sales",
      "Pharma Representatives",
      "Healthcare Recruiters",
      "Surgical Suppliers",
    ],
    fields: [
      {
        name: "NPI Registry Number",
        desc: "Validated National Provider Identifier for licensing checks.",
      },
      {
        name: "Hospital Affiliation",
        desc: "Primary medical centers where the practitioner operates.",
      },
      {
        name: "Medical Specialty",
        desc: "Specific field of practice (e.g., Cardiology, Oncology).",
      },
    ],
    industries: [
      { name: "Public & Private Hospitals", count: "4.8M Leads" },
      { name: "Outpatient Clinics", count: "3.2M Leads" },
      { name: "Dental Clinics", count: "1.9M Leads" },
      { name: "Long-term Care Sites", count: "2.2M Leads" },
    ],
    useCases: [
      {
        title: "Device Procurement",
        desc: "Present surgical and operational tools directly to clinic purchasing agents.",
      },
      {
        title: "Clinical Trial Hiring",
        desc: "Reach specialist physicians to coordinate pharmaceutical research studies.",
      },
      {
        title: "Executive Placement",
        desc: "Locate medical directors and hospital chiefs for specialized healthcare positions.",
      },
    ],
    filters: [
      "NPI Status",
      "Clinical Specialty",
      "Affiliated Hospital Network",
      "Location State",
      "Bed Count Capacity",
    ],
    caseStudy: {
      quote:
        "Bypassing hospital front desks saved our sales representatives months of outreach. We booked meetings with 8 new cardiology heads.",
      metrics: "$4.1M Contract Pipeline",
      author: "Director of Medical Sales",
      company: "CardioLogix Solutions",
    },
    faqs: [
      {
        q: "Is this database compliant with healthcare standards?",
        a: "Yes. All contact profiles represent business communication coordinates and are sourced from public provider registries, professional filings, and license boards.",
      },
      {
        q: "Can we filter by NPI taxonomy code?",
        a: "Yes. You can isolate practitioners down to their exact taxonomy code, clinical sub-specialty, and state credential registry status.",
      },
    ],
  },

  "professional-email-lists": {
    name: "Professional Email Lists",
    slug: "professional-email-lists",
    keyword: "Corporate Email Directory",
    subtitle:
      "Premium, verified corporate email segments structured by job title and department.",
    h1: "Professional Business Email Lists",
    coverageStat: "COVERAGE: 22M+ ACTIVE EMAILS // 95% SLA",
    stats: [
      "22M+ Active Profiles",
      "100+ Job Verticals",
      "95% Inbox Deliverability",
      "30-Day SMTP Cleansing",
    ],
    overview:
      "Gain direct email connections to executive buyers, managers, and directors. Every email address passes through server pings and domain validations before delivery to eliminate bounces.",
    benefits: [
      {
        title: "95% Deliverability SLA",
        desc: "If more than 5% of our emails bounce, we credit your account with twice the replacement contacts.",
      },
      {
        title: "No Scraped Web-Trash",
        desc: "We utilize active double-opt-in B2B networks and manual verification to validate names.",
      },
      {
        title: "Role-Based Targeting",
        desc: "Segment by executive hierarchy level from C-suite directors down to regional leads.",
      },
    ],
    whoUses: [
      "Outbound Sales Representatives",
      "Demand Generation Teams",
      "Event Coordinators",
      "Agency Partners",
    ],
    fields: [
      {
        name: "Direct Business Email",
        desc: "Corporate-domain inbox validated via SMTP handshake.",
      },
      {
        name: "Job Title & Level",
        desc: "Standardized organizational seniority and department tags.",
      },
      {
        name: "LinkedIn URL link",
        desc: "Direct profile reference to verify executive employment.",
      },
    ],
    industries: [
      { name: "Enterprise Business Services", count: "6.8M Leads" },
      { name: "Finance & Accounting", count: "4.5M Leads" },
      { name: "Marketing & Creative", count: "5.2M Leads" },
      { name: "HR & Recruitment", count: "5.5M Leads" },
    ],
    useCases: [
      {
        title: "Cold Outbound Campaigns",
        desc: "Feed your CRM clean, verified lists to run cold email sales campaigns.",
      },
      {
        title: "Webinar Recruitment",
        desc: "Drive event registration by inviting highly relevant niche industry decision makers.",
      },
      {
        title: "Custom Lookalike Segments",
        desc: "Export contact coordinates to feed advertising networks for matched targeting.",
      },
    ],
    filters: [
      "Job Title",
      "Department",
      "Company Seniority",
      "Geography Zip",
      "Corporate Domain Status",
    ],
    caseStudy: {
      quote:
        "Bounces dropped from 18% with our old vendor to under 2.5% with Aliign Data. Our sales team spent less time cleaning lists.",
      metrics: "98% Email Delivery Rate",
      author: "Head of Marketing",
      company: "SaaS Analytics Corp",
    },
    faqs: [
      {
        q: "Do you supply personal email addresses (Gmail, Yahoo)?",
        a: "No. We exclusively compile corporate B2B business emails (e.g. name@company.com) to support professional commercial outreach regulations.",
      },
      {
        q: "How do you verify email statuses?",
        a: "We run active SMTP handshakes, test domain record existence (MX, SPF), and monitor incoming bounce signals in our network.",
      },
    ],
  },

  "industry-databases": {
    name: "Industry Databases",
    slug: "industry-databases",
    keyword: "B2B Industry Lists",
    subtitle:
      "Complete B2B records covering manufacturing, finance, retail, and construction.",
    h1: "Comprehensive B2B Industry Databases",
    coverageStat: "COVERAGE: 35M+ ENTITIES // 95% SLA",
    stats: [
      "35M+ Records",
      "12 Major Sectors",
      "95% Verification SLA",
      "30-Day Cycle Update",
    ],
    overview:
      "Segmented, high-quality company profiles and contact details spanning primary global business trade divisions, manufacturing, logistics, and retail groups.",
    benefits: [
      {
        title: "Vertical Segmentation",
        desc: "Isolate organizations down to specific SIC, NAICS, and custom trade taxonomy codes.",
      },
      {
        title: "Firmographic Metrics",
        desc: "Get company size, annual revenue range, growth rate, and corporate hierarchy.",
      },
      {
        title: "Multinational Coverage",
        desc: "Target businesses located across North America, Europe, Asia Pacific, and LATAM.",
      },
    ],
    whoUses: [
      "B2B Sales Executives",
      "Market Researchers",
      "Investment Bankers",
      "Logistics Brands",
    ],
    fields: [
      {
        name: "NAICS / SIC Code",
        desc: "Standard industry classification tags for firmographic sorting.",
      },
      {
        name: "Annual Sales Revenue",
        desc: "Estimated corporate revenues to match ideal budget sizes.",
      },
      {
        name: "Corporate Hierarchy",
        desc: "Identify HQ locations versus regional offices.",
      },
    ],
    industries: [
      { name: "Manufacturing & Industrial", count: "9.2M Leads" },
      { name: "Banking & Finance", count: "8.7M Leads" },
      { name: "Retail & E-commerce", count: "7.9M Leads" },
      { name: "Construction & Engineering", count: "4.1M Leads" },
    ],
    useCases: [
      {
        title: "Territory Assignment",
        desc: "Assign sales territories to reps based on local company densities.",
      },
      {
        title: "Commercial Solicitation",
        desc: "Deliver specialized logistics or service proposals to company operators.",
      },
      {
        title: "Competitor Market Research",
        desc: "Audit the size and growth trajectories of specific market spaces.",
      },
    ],
    filters: [
      "SIC/NAICS Code",
      "Revenue Range",
      "Company Headcount",
      "HQ State",
      "Growth Trajectory",
    ],
    caseStudy: {
      quote:
        "We mapped and targeted regional manufacturing plant directors in the Midwest, securing 6 new supplier relationships.",
      metrics: "16% Response Improvement",
      author: "Supply Chain Manager",
      company: "Integra Logistics",
    },
    faqs: [
      {
        q: "Can I filter by specific NAICS codes?",
        a: "Yes. Our database supports filtering by 2-digit, 4-digit, and 6-digit NAICS codes, as well as classic 4-digit SIC codes.",
      },
      {
        q: "Do you include corporate hierarchy trees?",
        a: "Yes. You can isolate parent organizations and view associated child companies, branches, or distribution outlets.",
      },
    ],
  },

  "regional-databases": {
    name: "Regional Databases",
    slug: "regional-databases",
    keyword: "Global B2B Contacts",
    subtitle:
      "Global geographic contact segments spanning North America, Europe, and APAC.",
    h1: "Global Regional B2B Databases",
    coverageStat: "REGIONS: NA, EMEA, APAC, LATAM",
    stats: [
      "75M+ Contacts",
      "100+ Countries",
      "95% Accuracy Guarantee",
      "30-Day Check Cycle",
    ],
    overview:
      "Search for prospects across global business hubs. Filter by state, country, or continental operations while remaining aligned with regional privacy standards like GDPR, CASL, and PIPEDA.",
    benefits: [
      {
        title: "Privacy Compliance",
        desc: "Our database elements dynamically adjust filters to align with local privacy regulations.",
      },
      {
        title: "Native Verification",
        desc: "Global lists are processed by native language validation researchers.",
      },
      {
        title: "Geographic Sorting",
        desc: "Filter by continent, nation, state/province, city, and zip code grids.",
      },
    ],
    whoUses: [
      "Global Sales Leaders",
      "Exporters & Distributors",
      "International recruiters",
      "Enterprise Marketers",
    ],
    fields: [
      {
        name: "Full Mailing Address",
        desc: "Validated corporate headquarters street coordinates.",
      },
      {
        name: "Country Code Segment",
        desc: "Geographic categorization for international sorting.",
      },
      {
        name: "Local Standard Timezone",
        desc: "Timezone information to coordinate contact calls.",
      },
    ],
    industries: [
      { name: "North American Market", count: "32M Leads" },
      { name: "European Union (EU)", count: "19M Leads" },
      { name: "Asia-Pacific Region", count: "14M Leads" },
      { name: "Middle East & Africa", count: "10M Leads" },
    ],
    useCases: [
      {
        title: "Global Expansion",
        desc: "Identify target accounts when expanding services into new countries.",
      },
      {
        title: "Regional Events",
        desc: "Acquire lists of local decision-makers to invite to local trade panels.",
      },
      {
        title: "Localised Campaigns",
        desc: "Write marketing emails customized to local issues, terms, and time zones.",
      },
    ],
    filters: [
      "Country Location",
      "State/Province",
      "Zip/Postal Code",
      "Timezone Offset",
      "Company Scale",
    ],
    caseStudy: {
      quote:
        "Targeting tech firms in Singapore and Sydney helped us launch our APAC office with active lead lists from day one.",
      metrics: "$1.8M APAC Pipeline",
      author: "Head of International Growth",
      company: "Devflow Security",
    },
    faqs: [
      {
        q: "How do you handle GDPR compliance for European Union contacts?",
        a: "All EU contacts represent corporate profiles. Opt-out options are provided with every file, in accordance with Article 6 (Legitimate Interest) parameters.",
      },
      {
        q: "Can we extract timezone details?",
        a: "Yes. Timezone details are mapped to all exported contact profiles to coordinate call times.",
      },
    ],
  },

  "data-appending": {
    name: "Data Appending Services",
    slug: "data-appending",
    keyword: "B2B Data Enrichment",
    subtitle:
      "Clean, match, and enrich your existing contact files with 95% accuracy.",
    h1: "B2B Data Appending & Enrichment Services",
    coverageStat: "ACCURACY: 95% HUMAN VERIFIED",
    stats: [
      "95% Enrich Accuracy",
      "Fast 24hr Turnaround",
      "SMTP Verification Checks",
      "Manual Verification Match",
    ],
    overview:
      "Upload your stale, incomplete lead lists. Our intelligence engine matching systems automatically fill missing fields, clean invalid emails, and append direct phone routes.",
    benefits: [
      {
        title: "Eradicate Decay",
        desc: "Up to 30% of sales contacts go stale annually. We clean old profiles and update job titles.",
      },
      {
        title: "Fill Missing Gaps",
        desc: "Turn simple email lists into rich profiles with direct lines, revenue, and tech stack details.",
      },
      {
        title: "Fast Match Speeds",
        desc: "Our automated systems process and return enriched database sheets in under 24 hours.",
      },
    ],
    whoUses: [
      "CRM Administrators",
      "Marketing Ops Leads",
      "Sales Ops Directors",
      "Database Managers",
    ],
    fields: [
      {
        name: "Appended Direct Dials",
        desc: "Verified telephone lines matching the contact name.",
      },
      {
        name: "Cleaned Email Flags",
        desc: "Tagging showing whether existing addresses are still active.",
      },
      {
        name: "Current Job Title",
        desc: "Updates to verify if the contact has been promoted or relocated.",
      },
    ],
    industries: [
      { name: "Salesforce CRM syncs", count: "10K+ Appends" },
      { name: "HubSpot CRM cleanings", count: "14K+ Appends" },
      { name: "Custom CSV Enrichments", count: "25K+ Appends" },
      { name: "Cold List Appends", count: "8K+ Appends" },
    ],
    useCases: [
      {
        title: "Outbound Refresh",
        desc: "Update your target CRM segments before launching outbound campaigns.",
      },
      {
        title: "Lead Form Enrichment",
        desc: "Reduce website form friction by asking only for emails and appending the rest.",
      },
      {
        title: "Account Based Targeting",
        desc: "Gather missing executive contacts at key accounts to support marketing plays.",
      },
    ],
    filters: [
      "Custom Match Key",
      "Enrichment Type",
      "CRM Sync Option",
      "Required Field Appends",
      "Bounce Check Status",
    ],
    caseStudy: {
      quote:
        "We ran our legacy list of 15,000 leads through Aliign Data. They found direct dials for 65% of names and removed 2,400 dead emails.",
      metrics: "95% Validated Matches",
      author: "Director of Marketing Ops",
      company: "Logix Software Group",
    },
    faqs: [
      {
        q: "What is your pricing model for appending services?",
        a: "We charge on a pay-per-match credit system. You only pay for records successfully enriched with new, verified information.",
      },
      {
        q: "Can you append direct phone numbers?",
        a: "Yes. We focus on direct office lines and verified direct-dials, testing connectivity beforehand.",
      },
    ],
  },
}

// Helper: get all solutions as an ordered array
export const ALL_SOLUTIONS: Solution[] = Object.values(SOLUTIONS)

// Helper: get related solutions (exclude current slug, take first 3)
export function getRelatedSolutions(currentSlug: string): Solution[] {
  return ALL_SOLUTIONS.filter((s) => s.slug !== currentSlug).slice(0, 3)
}
