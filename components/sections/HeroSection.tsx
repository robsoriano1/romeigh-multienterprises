import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { HERO_STATS } from '@/lib/constants'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: 'easeOut', delay },
})

function HexShape({ size = 200, className = '' }: { size?: number; className?: string }) {
  const s = size / 2
  const h = +(s * Math.sqrt(3)).toFixed(2)
  const pts = `${2*s},${h/2} ${1.5*s},${h} ${0.5*s},${h} 0,${h/2} ${0.5*s},0 ${1.5*s},0`
  return (
    <svg
      width={2 * s}
      height={h}
      viewBox={`0 0 ${2 * s} ${h}`}
      className={className}
      aria-hidden="true"
    >
      <polygon points={pts} fill="none" stroke="currentColor" strokeWidth="3" />
    </svg>
  )
}

const STAT_ICONS = [
  // Years Experience — clock
  <svg key="clock" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
  </svg>,
  // Accredited Treater — shield
  <svg key="shield" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>,
  // Industrial Clients — users
  <svg key="users" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>,
  // Emergency Response — phone
  <svg key="phone" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.18a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z"/>
  </svg>,
]

export function HeroSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false)

  useEffect(() => {
    if (!lightboxOpen) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setLightboxOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [lightboxOpen])

  return (
    <section
      className="relative bg-white overflow-hidden"
      style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #d1d5db 1px, transparent 0)', backgroundSize: '22px 22px' }}
      aria-labelledby="hero-headline"
    >
      {/* Texture softening overlay */}
      <div className="absolute inset-0 bg-white/75 pointer-events-none" aria-hidden="true" />

      {/* Hexagonal decorations — very subtle ghosting */}
      <div className="absolute left-0 top-0 h-full pointer-events-none text-sky-400 opacity-[0.15]" aria-hidden="true">
        <HexShape size={300} className="absolute -left-24 top-0" />
        <HexShape size={220} className="absolute -left-10 top-52" />
        <HexShape size={260} className="absolute -left-20 bottom-0" />
        <HexShape size={180} className="absolute left-20 top-16" />
      </div>
      <div className="absolute right-0 top-0 h-full pointer-events-none text-sky-400 opacity-[0.15]" aria-hidden="true">
        <HexShape size={260} className="absolute -right-24 top-4" />
        <HexShape size={200} className="absolute right-16 top-0" />
        <HexShape size={200} className="absolute -right-10 bottom-8" />
      </div>

      <div className="section-inner relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20 lg:py-28">

          {/* Left — copy, centered composition */}
          <div className="flex flex-col items-center text-center">

            {/* Eyebrow badge */}
            <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-sky-500" aria-hidden="true" />
              <span className="text-sky-600 text-[11px] font-bold tracking-[0.2em] uppercase">
                Est. 2003 · Philippines
              </span>
            </motion.div>

            {/* Logo — small, integrated between badge and headline */}
            <motion.div {...fadeUp(0.05)} className="mb-5">
              <Image
                src="/RomeighLogo.jpg"
                alt="ROMEIGH Multi-Enterprises"
                width={500}
                height={167}
                className="w-full max-w-[500px] h-auto object-contain"
              />
            </motion.div>

            {/* Headline — mixed weights, blue accent on Sustainable only */}
            <motion.h1
              {...fadeUp(0.1)}
              id="hero-headline"
              className="font-display leading-[1.08] text-[clamp(2.5rem,5vw,4rem)] mb-5"
            >
              <span className="font-light text-navy">Safe.</span><br />
              <span className="font-extrabold text-navy">Compliant.</span><br />
              <span className="font-extrabold text-sky-500">Sustainable.</span>
            </motion.h1>

            {/* Sub-headline — slightly larger */}
            <motion.p {...fadeUp(0.2)} className="text-gray-500 text-[18px] leading-[1.75] max-w-[480px] mb-8">
              Industrial-grade chemical water treatment and filtration systems
              for the Philippines&rsquo; most demanding facilities. Built for compliance.
              Engineered for continuity.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-4 justify-center">
              {/* Primary — gradient with hover glow */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded font-semibold text-sm text-white
                  bg-gradient-to-r from-sky-500 to-sky-600
                  shadow-md transition-all duration-200
                  hover:from-sky-400 hover:to-sky-500 hover:shadow-sky-400/50 hover:shadow-lg
                  focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
              >
                Get a Free Compliance Audit
              </a>
              {/* Ghost button */}
              <a
                href="#services"
                className="inline-flex items-center justify-center px-6 py-3 rounded font-semibold text-sm
                  border-2 border-sky-500 text-sky-600
                  hover:bg-sky-50 transition-colors duration-150
                  focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
              >
                View Services
              </a>
            </motion.div>
          </div>

          {/* Right — facility photo + glassmorphism stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.25 }}
          >
            {/* Facility photo */}
            <button
              onClick={() => setLightboxOpen(true)}
              className="group w-full rounded-xl overflow-hidden mb-4 relative h-56 shadow-lg block focus-visible:ring-2 focus-visible:ring-sky-500"
              aria-label="View facility photo full size"
            >
              <Image
                src="/FacilityPhoto.jpg"
                alt="ROMEIGH industrial facility"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                priority
              />
              <div className="absolute bottom-2 right-2 bg-black/50 text-white text-[11px] px-2 py-1 rounded flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/>
                </svg>
                Enlarge
              </div>
            </button>

            {/* Lightbox */}
            <AnimatePresence>
              {lightboxOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
                  onClick={() => setLightboxOpen(false)}
                >
                  <motion.div
                    initial={{ scale: 0.92, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.92, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="relative max-w-4xl w-full max-h-[90vh] rounded-xl overflow-hidden shadow-2xl"
                    onClick={e => e.stopPropagation()}
                  >
                    <Image
                      src="/FacilityPhoto.jpg"
                      alt="ROMEIGH industrial facility"
                      width={1200}
                      height={800}
                      className="w-full h-auto object-contain"
                    />
                    <button
                      onClick={() => setLightboxOpen(false)}
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors"
                      aria-label="Close"
                    >
                      ✕
                    </button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Stats grid — glassmorphism */}
            <div className="grid grid-cols-2 gap-3">
              {HERO_STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 + i * 0.07, duration: 0.4 }}
                  className="px-4 py-3.5 rounded-xl bg-white/55 backdrop-blur-md border border-gray-200/70 shadow-sm"
                >
                  <div className="text-sky-500 mb-2">
                    {STAT_ICONS[i]}
                  </div>
                  <div className="font-display font-extrabold text-navy text-3xl leading-none">
                    {stat.value}
                  </div>
                  <div className="text-gray-500 text-[12px] font-medium mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
