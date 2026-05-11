import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { NAV_LINKS } from '@/lib/constants'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-navy-900 shadow-nav'
          : 'bg-white/80 backdrop-blur-sm border-b border-gray-100'
      )}
    >
      <nav className="section-inner" aria-label="Main navigation">
        <div className="flex items-center justify-between h-[68px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="ROMEIGH home">
            <Image
              src="/logo.jpg"
              alt="ROMEIGH Multi-Enterprises"
              width={120}
              height={48}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-8 list-none">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'text-sm font-medium tracking-wide transition-colors duration-150',
                    scrolled
                      ? 'text-white/70 hover:text-white'
                      : 'text-navy/70 hover:text-navy'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a href="/#contact" className="btn-primary text-sm">
              Request Audit
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className={cn(
              'md:hidden p-2 rounded focus-visible:ring-2 focus-visible:ring-sky-500',
              scrolled ? 'text-white' : 'text-navy'
            )}
            onClick={() => setMobileOpen(v => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <span className={cn('block w-6 h-0.5 mb-1.5 transition-transform', scrolled ? 'bg-white' : 'bg-navy')} />
            <span className={cn('block w-6 h-0.5 mb-1.5', scrolled ? 'bg-white' : 'bg-navy')} />
            <span className={cn('block w-6 h-0.5 transition-transform', scrolled ? 'bg-white' : 'bg-navy')} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-navy-900 border-t border-white/10"
          >
            <div className="section-inner py-4 flex flex-col gap-4">
              {NAV_LINKS.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-white/75 hover:text-white text-sm font-medium py-1"
                >
                  {link.label}
                </Link>
              ))}
              <a href="/#contact" className="btn-primary text-sm mt-2 text-center" onClick={() => setMobileOpen(false)}>
                Request Audit
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
