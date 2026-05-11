import { TRUST_BADGES } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function TrustBar() {
  return (
    <div
      className="bg-gray-50 border-t-[3px] border-sky-500 border-b border-gray-200"
      role="complementary"
      aria-label="Accreditations and certifications"
    >
      <div className="section-inner py-5">
        <div className="flex flex-wrap items-center justify-center gap-4">

          {/* Label */}
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-gray-400 whitespace-nowrap">
            Certified &amp; Accredited By
          </span>

          {/* Divider */}
          <div className="hidden sm:block w-px h-10 bg-gray-200" aria-hidden="true" />

          {/* Badges */}
          {TRUST_BADGES.map(badge => (
            <div key={badge.id} className="trust-badge">
              {/* Icon box — replace with actual logo <Image> in production */}
              <div
                className={cn(
                  'w-10 h-10 rounded flex items-center justify-center text-center leading-tight font-display font-extrabold text-[10px]',
                  badge.colorClass
                )}
                aria-hidden="true"
              >
                {badge.abbr}
              </div>
              <div>
                <strong className="block text-[13px] font-bold text-gray-800 leading-tight">
                  {badge.fullName}
                </strong>
                <span className="text-[11px] text-gray-400 tracking-wide">
                  {badge.subLabel}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
