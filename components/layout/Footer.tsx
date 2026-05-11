import Image from 'next/image'
import { FOOTER_COLUMNS, CONTACT_INFO } from '@/lib/constants'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#06192E] border-t border-white/5">
      <div className="section-inner pt-12 pb-8">

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-10">

          {/* Brand column */}
          <div>
            <div className="mb-4">
              <div className="inline-block bg-white rounded-lg px-3 py-2">
                <Image
                  src="/RomeighLogo.jpg"
                  alt="ROMEIGH Multi-Enterprises"
                  width={280}
                  height={93}
                  className="w-full max-w-[200px] h-auto object-contain"
                />
              </div>
            </div>
            <p className="text-sm text-white/40 leading-relaxed max-w-[260px]">
              Specialized industrial chemical water treatment and hazardous waste
              management. Serving Cavite, Metro Manila, and all major Philippine
              industrial zones.
            </p>
            <div className="mt-4 text-xs text-white/30 leading-relaxed whitespace-pre-line">
              {CONTACT_INFO.address}
            </div>
            <a
              href={`tel:${CONTACT_INFO.phone.replace(/[^+\d]/g, '')}`}
              className="mt-3 block text-xs text-white/40 hover:text-white/70 transition-colors"
            >
              📞 {CONTACT_INFO.phone}
            </a>
            <p className="mt-0.5 text-xs text-white/30">
              💬 {CONTACT_INFO.mobile}
            </p>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="mt-2 block text-xs text-sky-400/60 hover:text-sky-400 transition-colors"
            >
              {CONTACT_INFO.email}
            </a>
          </div>

          {/* Link columns */}
          {FOOTER_COLUMNS.map(col => (
            <div key={col.heading}>
              <h3 className="font-display font-bold text-[11px] tracking-[0.18em] uppercase text-white/40 mb-4">
                {col.heading}
              </h3>
              <ul className="space-y-2.5 list-none">
                {col.links.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/40 hover:text-white/80 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="text-[11px] text-white/25 tracking-wide">
            © {year} ROMEIGH Multi-Enterprises. All Rights Reserved.
          </p>
          <p className="text-[11px] text-white/20">
            Built for Philippine industrial compliance.
          </p>
        </div>
      </div>
    </footer>
  )
}
