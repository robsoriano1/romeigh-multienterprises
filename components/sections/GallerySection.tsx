import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

const slideVariants = {
  enter: (d: number) => ({ opacity: 0, x: d > 0 ? 40 : -40 }),
  center: { opacity: 1, x: 0 },
  exit:  (d: number) => ({ opacity: 0, x: d > 0 ? -40 : 40 }),
}

const IMAGES = Array.from({ length: 16 }, (_, i) => ({
  src: `/Gallery${i + 1}.jpg`,
  alt: `ROMEIGH facility — photo ${i + 1}`,
}))
const N = IMAGES.length

export function GallerySection() {
  const [start, setStart] = useState(0)
  const [dir, setDir] = useState(1)
  const [lightbox, setLightbox] = useState<number | null>(null)

  function goNext() {
    setDir(1)
    setStart(s => (s + 1) % N)
  }

  function goPrev() {
    setDir(-1)
    setStart(s => (s - 1 + N) % N)
  }

  function openLightbox(idx: number) {
    setLightbox(idx)
  }

  // Keyboard: Escape closes, arrows navigate lightbox
  useEffect(() => {
    if (lightbox === null) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null)
      if (e.key === 'ArrowRight') setLightbox(l => l === null ? null : (l + 1) % N)
      if (e.key === 'ArrowLeft')  setLightbox(l => l === null ? null : (l - 1 + N) % N)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightbox])

  // 3 visible images on desktop, 1 on mobile (controlled via CSS)
  const visible = Array.from({ length: 3 }, (_, i) => ({
    ...IMAGES[(start + i) % N],
    idx: (start + i) % N,
  }))

  return (
    <section id="gallery" className="bg-gray-50 py-20 border-t border-gray-100">
      <div className="max-w-site mx-auto px-6 lg:px-12">

        {/* Heading */}
        <div className="text-center mb-12">
          <span className="section-tag">Our Work</span>
          <h2 className="section-title text-[clamp(1.75rem,3vw,2.5rem)]">Photo Gallery</h2>
          <p className="text-gray-500 text-sm mt-3 max-w-lg mx-auto">
            A look inside our facilities, field operations, and treatment systems.
          </p>
        </div>

        {/* Carousel row */}
        <div className="flex items-center gap-3 md:gap-4">

          {/* Prev arrow */}
          <button
            onClick={goPrev}
            aria-label="Previous photos"
            className="flex-shrink-0 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-card flex items-center justify-center text-gray-500 hover:text-sky-500 hover:border-sky-400 transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Image strip */}
          <div className="flex-1 overflow-hidden rounded-xl">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={start}
                custom={dir}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4"
              >
                {visible.map(({ src, alt, idx }, slot) => (
                  <button
                    key={idx}
                    onClick={() => openLightbox(idx)}
                    aria-label={`Zoom photo ${idx + 1}`}
                    className={cn(
                      'group relative aspect-[4/3] rounded-xl overflow-hidden shadow-card hover:shadow-lift transition-shadow focus-visible:ring-2 focus-visible:ring-sky-500',
                      slot > 0 && 'hidden md:block'   // only 1 visible on mobile
                    )}
                  >
                    <Image
                      src={src}
                      alt={alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    {/* Zoom overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-200 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 rounded-full p-2.5">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                          <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35M11 8v6M8 11h6" />
                        </svg>
                      </div>
                    </div>
                  </button>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next arrow */}
          <button
            onClick={goNext}
            aria-label="Next photos"
            className="flex-shrink-0 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-card flex items-center justify-center text-gray-500 hover:text-sky-500 hover:border-sky-400 transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Counter */}
        <p className="text-center text-gray-400 text-xs mt-5 tracking-wide">
          {start + 1} – {Math.min(start + 3, N)} &nbsp;/&nbsp; {N} photos &nbsp;·&nbsp; click any photo to enlarge
        </p>

      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-4xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <Image
                src={IMAGES[lightbox].src}
                alt={IMAGES[lightbox].alt}
                width={1200}
                height={800}
                className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
              />

              {/* Close */}
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors"
                aria-label="Close"
              >
                ✕
              </button>

              {/* Lightbox prev */}
              <button
                onClick={() => setLightbox(l => l === null ? null : (l - 1 + N) % N)}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors"
                aria-label="Previous photo"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M15 18l-6-6 6-6"/></svg>
              </button>

              {/* Lightbox next */}
              <button
                onClick={() => setLightbox(l => l === null ? null : (l + 1) % N)}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors"
                aria-label="Next photo"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M9 18l6-6-6-6"/></svg>
              </button>

              {/* Counter */}
              <p className="text-center text-white/50 text-xs mt-3 tracking-wide">
                {lightbox + 1} / {N} &nbsp;·&nbsp; ← → to browse &nbsp;·&nbsp; Esc to close
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
