// Centralized FAQ data — used on homepage and solution detail pages
export interface FAQItem {
  q: string
  a: string
}

export const HOMEPAGE_FAQS: FAQItem[] = [
  {
    q: "What makes Aliign Data different from other B2B database providers?",
    a: "Unlike scrapers that dump recycled web-data, Aliign Data runs a dual-step validation model. We combine advanced machine learning scraping with manual, phone-verified verification by human researchers to guarantee 95% active record accuracy.",
  },
  {
    q: "How does Aliign Data guarantee 95% contact accuracy?",
    a: "Every single email domain, phone line, and company profile passes through our SMTP checker, server-level pings, and direct dial test rings. If any record falls below our threshold, it is automatically removed and replaced before delivery.",
  },
  {
    q: "What is the database refresh cycle?",
    a: "We refresh and validate our entire core data inventory every 30 days. This cycle ensures you do not waste outreach credits on invalid inboxes, decayed domains, or relocated decision-makers.",
  },
  {
    q: "Is your data GDPR, CCPA, CASL, and PIPEDA compliant?",
    a: "Yes. All business contact profiles in the Aliign Data network are sourced from legitimate public filings, corporate websites, and double-opt-in B2B networks. We operate fully within GDPR (Art. 6 legitimate interest), CCPA, CASL, and PIPEDA frameworks.",
  },
  {
    q: "How does the Technology Users Database work?",
    a: "We map technographic signals from code-level tags, software integrations, job posts, and server signatures. This allows you to search for companies actively using specific solutions like Salesforce, AWS, React, SAP, or ZoomInfo.",
  },
  {
    q: "Can I filter contacts by specific technology stacks?",
    a: "Yes. Our filtering interface supports complex boolean operations (e.g., companies using HubSpot AND AWS but NOT Shopify) combined with standard parameters like headcount, geography, and revenue.",
  },
  {
    q: "What details are included in the Healthcare Database?",
    a: "Our healthcare intelligence contains NPI records, state license numbers, clinical specialties, hospital affiliations, direct office emails, clinic lines, and procurement decision-makers across primary and secondary clinics.",
  },
  {
    q: "How does the Data Appending Service work?",
    a: "Simply upload your stale, incomplete lead list. Our engine matches your records against our global index, enriches missing fields (direct dials, job titles, technologies, revenue), and re-verifies them before delivery.",
  },
  {
    q: "Can I integrate Aliign Data directly with my CRM?",
    a: "Yes. We offer native API endpoints and sync integrations for HubSpot, Salesforce, Zoho, and Microsoft Dynamics, enabling you to enrich accounts directly within your working pipeline.",
  },
  {
    q: "What fields are included in each contact record?",
    a: "Standard records include First/Last Name, Verified Corporate Email, Direct Dial, Company Name, Industry, Revenue, Employee Count, Technology Stack, LinkedIn Profile URL, and HQ Location.",
  },
  {
    q: "Do you support international B2B targeting?",
    a: "Yes. Our data network spans over 100 countries across North America, Europe, Asia-Pacific, Latin America, the Middle East, and Africa, with dedicated native researchers validating regional lists.",
  },
  {
    q: "What formats are the data delivered in?",
    a: "Data can be exported directly into structured, cleaned CSV and XLSX formats, or pushed as mapped contacts into your connected CRM platform.",
  },
  {
    q: "How long does it take to deliver a custom contact list?",
    a: "Standard list requests are delivered within 24 to 48 hours. If manual phone validation is required for highly niche markets, the timeline may extend to 72 hours, which we notify you of beforehand.",
  },
  {
    q: "Do you offer custom research for niche markets?",
    a: "Yes. If your ideal customer profile (ICP) is highly specific and not covered in standard databases, our custom research team will manually compile, dial-test, and verify a list according to your exact requirements.",
  },
  {
    q: "What is your refund or credit policy for invalid data?",
    a: "We offer a 100% bounce-back guarantee. If you encounter a bounce rate higher than 5% on our delivered emails, we will credit your account with 2x replacement records for every invalid contact identified.",
  },
]
