import type {
  NavLink, Service, TrustBadge, HeroStat, WhyItem, FooterColumn
} from '@/types'

// ─── Navigation ──────────────────────────────────────────────────────────────

export const NAV_LINKS: NavLink[] = [
  { label: 'Services', href: '/#services' },
  { label: 'Gallery',  href: '/#gallery' },
  { label: 'About',    href: '/about' },
  { label: 'Contact',  href: '/#contact' },
]

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const HERO_STATS: HeroStat[] = [
  { value: '15+',  label: 'Years Experience' },
  { value: 'ITK',  label: 'Intertek Certified' },
  { value: '100+', label: 'Industrial Clients' },
  { value: '24/7', label: 'Emergency Response' },
]

// ─── Trust Bar ────────────────────────────────────────────────────────────────

export const TRUST_BADGES: TrustBadge[] = [
  {
    id: 'intertek',
    abbr: 'ITK\nNON',
    fullName: 'Intertek Non-Toxic',
    subLabel: 'Chemical Safety Certification',
    colorClass: 'bg-blue-50 text-blue-700',
  },
]

// ─── Services ─────────────────────────────────────────────────────────────────

export const SERVICES: Service[] = [
  {
    id: 'boilerguard',
    title: 'BOILERGUARD — Boiler Treatment',
    shortTitle: 'Boiler Water Treatment',
    description:
      'Precision-formulated boiler water treatment chemicals to prevent scale, corrosion, and oxygen attack in industrial boiler systems. BOILERGUARD is certified Non-Toxic by Intertek.',
    tags: ['Anti-scale', 'Anti-corrosion', 'Sludge Conditioner', 'Oxygen Scavenger', 'pH Controller', 'Intertek Non-Toxic'],
    iconName: 'droplet',
    logo: '/Boilerguard.jpg',
    photo: '/Gallery1.jpg',
  },
  {
    id: 'bestkool',
    title: 'BESTKOOL — Cooling Water Treatment',
    shortTitle: 'Cooling Water Treatment',
    description:
      'Specialized cooling water treatment programs using BESTKOOL chemicals to prevent scale, corrosion, and microbial fouling in cooling towers and heat exchangers.',
    tags: ['Anti-scale', 'Anti-corrosion', 'Microbiocide', 'Algaecide', 'Biodespersant'],
    iconName: 'filter',
    logo: '/BestKool.jpg',
    photo: '/Gallery4.jpg',
  },
  {
    id: 'water-filtration',
    title: 'Water Filtration Systems',
    shortTitle: 'RO / MMF / Ion Exchange',
    description:
      'Design, installation, and maintenance of industrial water filtration systems using Pentair Water and Purolite components. Delivers purified water for manufacturing and process use.',
    tags: ['RO System', 'Multi-Media Filter', 'Activated Carbon Filter', 'Ion Exchange Resin', 'Dionizer'],
    iconName: 'droplet',
    logo: '/Filtration.jpg',
    photo: '/Gallery8.jpg',
  },
  {
    id: 'thermomix',
    title: 'THERMOMIX by Thermax',
    shortTitle: 'Fuel & Fire Treatment',
    description:
      'Fireside treatment chemicals for coal-fired boilers and comprehensive fuel water management solutions. Reduces deposits, improves combustion efficiency, and extends boiler service life.',
    tags: ['Fireside Treatment', 'Thermosol Fuel Additives', 'Coal Boiler', 'Combustion Efficiency'],
    iconName: 'flame',
    logo: '/Thermomix.jpg',
    photo: '/Gallery11.jpg',
  },
  {
    id: 'waste-management',
    title: 'Hazardous Waste Management',
    shortTitle: 'Hazardous & Used Oil Waste',
    description:
      'Compliant collection, transport, treatment, and disposal of hazardous and used oil waste. Full regulatory documentation and manifest tracking for zero compliance risk.',
    tags: ['Hazardous Waste', 'Used Oil Collection', 'Manifest Tracking', 'Compliant Disposal'],
    iconName: 'shield',
    photo: '/Gallery14.jpg',
  },
]

// ─── Why Us (Funnel) ─────────────────────────────────────────────────────────

export const WHY_ITEMS: WhyItem[] = [
  {
    number: '01',
    title: 'No Obligation Assessment',
    body: 'A ROMEIGH technical specialist reviews your facility profile at no cost before any engagement.',
  },
  {
    number: '02',
    title: '24-Hour Response SLA',
    body: 'Industrial clients receive a qualified technical proposal within one business day.',
  },
  {
    number: '03',
    title: 'Full Regulatory Coverage',
    body: 'We handle waste manifests, documentation, and regulatory reporting. You stay compliant.',
  },
]

// ─── Footer ───────────────────────────────────────────────────────────────────

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    heading: 'Services',
    links: [
      { label: 'Chemical Treatment', href: '/services/chemical-treatment' },
      { label: 'Water Systems',      href: '/services/water-systems' },
      { label: 'Waste Management',   href: '/services/waste-management' },
      { label: 'Compliance Audits',  href: '/#contact' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About ROMEIGH',  href: '/about' },
      { label: 'Certifications', href: '/certifications' },
      { label: 'Case Studies',   href: '/case-studies' },
      { label: 'Careers',        href: '/careers' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy',        href: '/privacy-policy' },
      { label: 'Legal Disclaimer',      href: '/legal-disclaimer' },
      { label: 'Regulatory Compliance', href: '/regulatory-compliance' },
    ],
  },
]

export const CONTACT_INFO = {
  address: '7 Flame St., Wood Estate Village 2\nMolino 3, Bacoor City, Cavite',
  email: 'sales@romeigh.com',
  emailAlt: 'admin@romeigh.com',
  phone: '(046) 436-1389',
  mobile: '+63 919 856 2443 | +63 906 487 2507',
}

// ─── Lead Form Options ────────────────────────────────────────────────────────

export const SERVICE_OPTIONS = [
  { value: 'chemical-boiler',   label: 'BOILERGUARD — Boiler Water Treatment' },
  { value: 'chemical-cooling',  label: 'BESTKOOL — Cooling Water Treatment' },
  { value: 'ro-di-filtration',  label: 'Water Filtration System (RO / MMF / Ion Exchange)' },
  { value: 'hazardous-waste',   label: 'Hazardous Waste Management' },
  { value: 'used-oil',          label: 'Used Oil Collection & Disposal' },
  { value: 'compliance-audit',  label: 'THERMOMIX — Fuel & Fire Treatment' },
  { value: 'other',             label: 'Other / Not Sure' },
] as const

export const WASTE_VOLUME_OPTIONS = [
  { value: 'lt-200',     label: '< 200 liters / month' },
  { value: '200-1000',   label: '200 – 1,000 liters / month' },
  { value: '1000-5000',  label: '1,000 – 5,000 liters / month' },
  { value: '5000-20000', label: '5,000 – 20,000 liters / month' },
  { value: 'gt-20000',   label: '> 20,000 liters / month' },
  { value: 'n-a',        label: 'Not Applicable' },
] as const
