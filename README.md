# ROMEIGH Multi-Enterprises — Digital Storefront

> B2B landing page and lead funnel for ROMEIGH Multi-Enterprises.  
> Industrial chemical water treatment & hazardous waste management — Philippines.

---

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build && npm start

# Type checking
npm run type-check
```

---

## Project Architecture

```
romeigh/
├── pages/
│   ├── _app.tsx              # App shell — global CSS, meta tags
│   ├── _document.tsx         # HTML doc — font preloads
│   ├── index.tsx             # Landing page entry point
│   └── api/
│       ├── leads.ts          # POST /api/leads — form submission
│       └── chat.ts           # POST /api/chat — AI advisor (Phase 2)
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx        # Sticky nav with mobile menu
│   │   ├── Footer.tsx        # Dark footer with columns
│   │   └── ChatbotFAB.tsx    # Floating AI assistant scaffold
│   ├── sections/
│   │   ├── HeroSection.tsx   # Hero headline + stats panel
│   │   ├── TrustBar.tsx      # DENR / Intertek / PCO badges
│   │   ├── ServicesSection.tsx  # 3-card services grid
│   │   └── LeadFunnel.tsx    # B2B triage form section
│   └── ui/
│       ├── ServiceCard.tsx   # Individual service card
│       └── LeadForm.tsx      # React Hook Form + Zod form
│
├── hooks/
│   ├── useLeadForm.ts        # Form state, validation, submission
│   └── useChatbot.ts         # Chatbot UI state + Phase 2 API hook
│
├── lib/
│   ├── constants.ts          # All site copy, nav links, service data
│   ├── validations.ts        # Zod schema for LeadForm
│   └── utils.ts              # cn() helper (clsx + tailwind-merge)
│
├── types/
│   └── index.ts              # TypeScript interfaces for all entities
│
├── styles/
│   └── globals.css           # Tailwind base + custom components/utilities
│
├── public/
│   ├── images/               # og-image.jpg, hero facility photo
│   └── icons/                # favicon, apple-touch-icon
│
├── tailwind.config.ts        # Custom corporate-industrial theme
├── tsconfig.json
├── next.config.js
└── package.json
```

---

## Design System

| Token         | Value                |
|---------------|----------------------|
| Primary Blue  | `#0D4FA0`            |
| Sky / CTA     | `#1A7FD4`            |
| Accent        | `#0EA5E9`            |
| Navy (dark)   | `#0A2744`            |
| Display Font  | Barlow Condensed 700/800 |
| Body Font     | Barlow 400/600/700   |
| Border Radius | 4px default, 8px cards |

---

## Phase Roadmap

### Phase 1 (Current) — Digital Storefront
- [x] Next.js scaffold with TypeScript + Tailwind
- [x] All landing page sections
- [x] B2B lead triage form (frontend validation)
- [x] AI chatbot UI scaffold
- [ ] Connect `/api/leads` to CRM (HubSpot / Zoho)
- [ ] Connect `/api/leads` to email notifications (Resend)
- [ ] Deploy to Vercel

### Phase 2 — AI Triage Integration
- [ ] RAG pipeline setup (LlamaIndex / LangChain)
- [ ] Knowledge base ingestion (DENR regs, product catalog, FAQs)
- [ ] Vector DB (Supabase pgvector or Pinecone)
- [ ] Connect `ChatbotFAB` → `/api/chat` → RAG
- [ ] Lead pre-qualification via AI chat

### Phase 3 — Client Portal
- [ ] Auth (NextAuth.js)
- [ ] Client dashboard (waste manifests, service history)
- [ ] DENR document vault
- [ ] Invoice / compliance report generation

---

## Environment Variables

```env
# .env.local

# Phase 1 — Email notifications
RESEND_API_KEY=

# Phase 1 — CRM integration
HUBSPOT_API_KEY=

# Phase 2 — AI / RAG
OPENAI_API_KEY=
SUPABASE_URL=
SUPABASE_ANON_KEY=

# Phase 3 — Auth
NEXTAUTH_SECRET=
NEXTAUTH_URL=http://localhost:3000
```

---

## DENR Compliance Note

This platform is designed to support ROMEIGH's DENR-EMB accredited operations.  
All data collected via the lead form is handled in compliance with the Philippine  
Data Privacy Act (Republic Act 10173).
