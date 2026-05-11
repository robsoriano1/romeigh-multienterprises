import Image from 'next/image'
import type { Service } from '@/types'

const ICON_MAP: Record<string, JSX.Element> = {
  droplet: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1A7FD4" strokeWidth="1.75" aria-hidden="true">
      <path d="M7 16.5c0 2.485 2.239 4.5 5 4.5s5-2.015 5-4.5c0-3.5-5-9-5-9S7 13 7 16.5z" />
    </svg>
  ),
  filter: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1A7550" strokeWidth="1.75" aria-hidden="true">
      <path d="M22 3H2l8 9.46V19l4 2V12.46L22 3z" />
    </svg>
  ),
  shield: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0A3161" strokeWidth="1.75" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  flame: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#c2410c" strokeWidth="1.75" aria-hidden="true">
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
    </svg>
  ),
}

const ICON_BG: Record<string, string> = {
  droplet: 'bg-blue-50',
  filter:  'bg-emerald-50',
  shield:  'bg-navy-50',
  flame:   'bg-orange-50',
}

interface Props {
  service: Service
}

export function ServiceCard({ service }: Props) {
  return (
    <article className="group relative bg-white border border-gray-200 rounded-xl overflow-hidden h-full flex flex-col transition-all duration-250 hover:shadow-lift hover:-translate-y-0.5">
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] z-10 bg-sky-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" aria-hidden="true" />

      {/* Gallery photo */}
      {service.photo && (
        <div className="relative w-full aspect-[16/9] overflow-hidden flex-shrink-0">
          <Image
            src={service.photo}
            alt={`${service.shortTitle} — facility photo`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          {/* Subtle gradient scrim at bottom so logo reads cleanly */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent" aria-hidden="true" />
          {/* Logo pinned to bottom-left of photo */}
          {service.logo && (
            <div className="absolute bottom-3 left-3 bg-white rounded-lg px-3 py-1.5 shadow-md">
              <Image
                src={service.logo}
                alt={service.shortTitle}
                width={160}
                height={56}
                className="h-11 w-auto max-w-[150px] object-contain"
              />
            </div>
          )}
        </div>
      )}

      {/* Card body */}
      <div className="p-6 flex flex-col flex-1">
        {/* Icon fallback (only shown when no photo) */}
        {!service.photo && (
          service.logo ? (
            <div className="h-14 mb-5 flex items-center">
              <Image
                src={service.logo}
                alt={service.shortTitle}
                width={160}
                height={56}
                className="h-full w-auto max-w-[160px] object-contain"
              />
            </div>
          ) : (
            <div className={`w-[52px] h-[52px] rounded-lg flex items-center justify-center mb-5 ${ICON_BG[service.iconName] ?? 'bg-gray-50'}`}>
              {ICON_MAP[service.iconName]}
            </div>
          )
        )}

        <h3 className="font-display font-bold text-navy text-[1.15rem] mb-2 tracking-[0.2px]">
          {service.title}
        </h3>

        <p className="text-sm text-gray-500 leading-[1.65] mb-5 flex-1">
          {service.description}
        </p>

        <div className="flex flex-wrap gap-1.5" role="list" aria-label="Service capabilities">
          {service.tags.map(tag => (
            <span key={tag} className="tag-pill" role="listitem">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
