// ─── Site-wide shared types ─────────────────────────────────────────────────

export interface NavLink {
  label: string
  href: string
  external?: boolean
}

// ─── Service types ───────────────────────────────────────────────────────────

export type ServiceId = 'boilerguard' | 'bestkool' | 'water-filtration' | 'thermomix' | 'waste-management'

export interface Service {
  id: ServiceId
  title: string
  shortTitle: string
  description: string
  tags: string[]
  iconName: string
  logo?: string
  photo?: string
}

// ─── Lead funnel / form types ─────────────────────────────────────────────────

export type ServiceOption =
  | 'chemical-boiler'
  | 'chemical-cooling'
  | 'ro-di-filtration'
  | 'hazardous-waste'
  | 'used-oil'
  | 'compliance-audit'
  | 'other'

export type WasteVolume =
  | 'lt-200'
  | '200-1000'
  | '1000-5000'
  | '5000-20000'
  | 'gt-20000'
  | 'n-a'

export interface LeadFormValues {
  companyName: string
  jobTitle: string
  email: string
  phone: string
  service: ServiceOption | ''
  wasteVolume: WasteVolume | ''
  location: string
  message: string
  consent: boolean
}

export interface LeadFormResponse {
  success: boolean
  message: string
  referenceId?: string
}

// ─── Trust / accreditation types ─────────────────────────────────────────────

export interface TrustBadge {
  id: string
  abbr: string          // Short label shown in the icon box
  fullName: string      // Full name shown in the badge
  subLabel: string      // Sub-label shown below full name
  colorClass: string    // Tailwind color class for the icon box background
}

// ─── Stats ───────────────────────────────────────────────────────────────────

export interface HeroStat {
  value: string
  label: string
}

// ─── Why-us bullet ───────────────────────────────────────────────────────────

export interface WhyItem {
  number: string
  title: string
  body: string
}

// ─── Footer ──────────────────────────────────────────────────────────────────

export interface FooterColumn {
  heading: string
  links: { label: string; href: string }[]
}

// ─── AI Chatbot scaffold ──────────────────────────────────────────────────────

export interface ChatMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

export type ChatStatus = 'idle' | 'open' | 'minimized'
