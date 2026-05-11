import type { NextPage } from 'next'
import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ChatbotFAB } from '@/components/layout/ChatbotFAB'

function HexShape({ size = 200, className = '' }: { size?: number; className?: string }) {
  const s = size / 2
  const h = +(s * Math.sqrt(3)).toFixed(2)
  const pts = `${2*s},${h/2} ${1.5*s},${h} ${0.5*s},${h} 0,${h/2} ${0.5*s},0 ${1.5*s},0`
  return (
    <svg width={2 * s} height={h} viewBox={`0 0 ${2 * s} ${h}`} className={className} aria-hidden="true">
      <polygon points={pts} fill="none" stroke="currentColor" strokeWidth="6" />
    </svg>
  )
}

// ─── Founder data — edit names, titles, and bios here ───────────────────────
const FOUNDERS = [
  {
    name: 'Founder Name',
    title: 'Co-Founder & Chief Executive Officer',
    bio: 'Add a short biography here. Describe their background, expertise, and role in founding ROMEIGH Multi-Enterprises. Mention years of experience, industry knowledge, and vision for the company.',
    photo: '/FounderPhoto1.jpg',
  },
  {
    name: 'Founder Name',
    title: 'Co-Founder & Chief Operations Officer',
    bio: 'Add a short biography here. Describe their background, expertise, and role in founding ROMEIGH Multi-Enterprises. Mention years of experience, industry knowledge, and vision for the company.',
    photo: '/FounderPhoto2.jpg',
  },
]

function AdBanner() {
  const [open, setOpen] = useState(false)

  return (
    <section className="bg-white py-10">
      <div className="max-w-site mx-auto px-6 lg:px-12 flex justify-center">
        <button
          onClick={() => setOpen(true)}
          className="group relative rounded-xl overflow-hidden shadow-lift focus-visible:ring-2 focus-visible:ring-sky-500 max-w-3xl w-full"
          aria-label="View ad full size"
        >
          <Image
            src="/RomeighAd1.jpg"
            alt="ROMEIGH Multi-Enterprises — Products and Services"
            width={1200}
            height={400}
            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
            priority
          />
          <div className="absolute bottom-2 right-2 bg-black/50 text-white text-[11px] px-2 py-1 rounded flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/>
            </svg>
            Enlarge
          </div>
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
              onClick={() => setOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative max-w-5xl w-full rounded-xl overflow-hidden shadow-2xl"
                onClick={e => e.stopPropagation()}
              >
                <Image
                  src="/RomeighAd1.jpg"
                  alt="ROMEIGH Multi-Enterprises — Products and Services"
                  width={1920}
                  height={640}
                  className="w-full h-auto object-contain"
                />
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors"
                  aria-label="Close"
                >
                  ✕
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

function FounderCard({ founder, index }: { founder: typeof FOUNDERS[0]; index: number }) {
  return (
    <div className="bg-white rounded-2xl shadow-lift overflow-hidden border border-gray-100 flex flex-col">
      {/* Photo — cropped to face + upper body */}
      <div className="relative w-full h-96 bg-gray-100">
        <Image
          src={founder.photo}
          alt={`Photo of ${founder.name}`}
          fill
          className="object-cover object-[center_15%]"
          onError={() => {/* shows placeholder below if file missing */}}
        />
        {/* Placeholder shown behind image if file missing */}
        <div className="absolute inset-0 -z-10 flex flex-col items-center justify-center gap-3 bg-sky-50">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#93c5fd" strokeWidth="1.25" aria-hidden="true">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
          </svg>
          <p className="text-sky-300 text-xs tracking-widest uppercase">
            Add FounderPhoto{index + 1}.jpg to public/
          </p>
        </div>
      </div>

      {/* Text */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display font-bold text-navy text-xl mb-0.5">{founder.name}</h3>
        <p className="text-sky-600 text-sm font-medium mb-4">{founder.title}</p>
        <p className="text-gray-500 text-sm leading-relaxed flex-1">{founder.bio}</p>
      </div>
    </div>
  )
}

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About Us — ROMEIGH Multi-Enterprises</title>
        <meta
          name="description"
          content="Learn about ROMEIGH Multi-Enterprises — an industrial water treatment and hazardous waste management company established in 2003."
        />
      </Head>

      <Header />

      <main>

        {/* ── Ad Banner ─────────────────────────────────────────────────────── */}
        <AdBanner />

        {/* ── Company Story ─────────────────────────────────────────────────── */}
        <section className="relative bg-white py-20 overflow-hidden">
          {/* Hex decorations */}
          <div className="absolute inset-0 pointer-events-none text-sky-200" aria-hidden="true">
            <HexShape size={260} className="absolute -left-20 top-0" />
            <HexShape size={180} className="absolute left-16 top-40" />
            <HexShape size={220} className="absolute -left-10 bottom-0" />
            <HexShape size={240} className="absolute -right-16 top-8" />
            <HexShape size={180} className="absolute right-20 top-48" />
            <HexShape size={200} className="absolute -right-8 bottom-4" />
          </div>
          <div className="max-w-site mx-auto px-6 lg:px-12 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block text-sky-600 text-[11px] font-bold tracking-[0.2em] uppercase mb-4">
                Est. 2003 · Bacoor City, Cavite
              </span>
              <h1 className="font-display font-extrabold text-navy text-[clamp(2rem,4vw,3rem)] leading-tight mb-6">
                Built on Trust,<br />
                <span className="text-sky-500">Driven by Compliance.</span>
              </h1>
              <p className="text-gray-500 text-[17px] leading-[1.8]">
                ROMEIGH Multi-Enterprises has been a trusted partner for Philippine industry since 2003.
                As a chemical water treatment specialist and hazardous waste management provider,
                we help facilities across Cavite, Metro Manila, and CALABARZON stay safe, compliant,
                and operationally sound — without the guesswork.
              </p>
            </div>

            {/* Mission / Vision / Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  label: 'Our Mission',
                  icon: (
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  ),
                  text: 'To provide industrial clients with safe, cost-effective, and fully compliant environmental services — protecting their operations and the communities around them.',
                },
                {
                  label: 'Our Vision',
                  icon: (
                    <>
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 8v4l3 3" />
                    </>
                  ),
                  text: 'To be the leading environmental services company in the Philippines, setting the benchmark for responsible industrial waste and water management.',
                },
                {
                  label: 'Our Values',
                  icon: (
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  ),
                  text: 'Integrity in every client engagement. Accountability in regulatory compliance. Excellence in technical service delivery. Safety as a non-negotiable standard.',
                },
              ].map(item => (
                <div key={item.label} className="bg-sky-50 rounded-xl p-6 border border-sky-100">
                  <div className="w-10 h-10 rounded-lg bg-sky-500 flex items-center justify-center mb-4">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.75" aria-hidden="true">
                      {item.icon}
                    </svg>
                  </div>
                  <h2 className="font-display font-bold text-navy text-lg mb-2">{item.label}</h2>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Founders ──────────────────────────────────────────────────────── */}
        <section className="relative bg-gray-50 py-20 border-t border-gray-100 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none text-sky-200" aria-hidden="true">
            <HexShape size={220} className="absolute -left-14 top-6" />
            <HexShape size={160} className="absolute left-10 bottom-8" />
            <HexShape size={200} className="absolute -right-12 top-4" />
            <HexShape size={160} className="absolute right-16 bottom-10" />
          </div>
          <div className="max-w-site mx-auto px-6 lg:px-12 relative z-10">
            <div className="text-center mb-12">
              <span className="inline-block text-sky-600 text-[11px] font-bold tracking-[0.2em] uppercase mb-3">
                Leadership
              </span>
              <h2 className="font-display font-extrabold text-navy text-[clamp(1.75rem,3vw,2.5rem)]">
                Meet the Founders
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {FOUNDERS.map((founder, i) => (
                <FounderCard key={i} founder={founder} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────────── */}
        <section className="bg-navy py-16">
          <div className="max-w-site mx-auto px-6 lg:px-12 text-center">
            <h2 className="font-display font-extrabold text-white text-[clamp(1.5rem,3vw,2.25rem)] mb-4">
              Ready to work with us?
            </h2>
            <p className="text-white/60 text-[16px] mb-8 max-w-xl mx-auto">
              Get a free compliance audit from a ROMEIGH specialist. No obligation, no pressure.
            </p>
            <Link href="/#contact" className="btn-primary">
              Request a Free Compliance Audit
            </Link>
          </div>
        </section>

      </main>

      <Footer />
      <ChatbotFAB />
    </>
  )
}

export default About
