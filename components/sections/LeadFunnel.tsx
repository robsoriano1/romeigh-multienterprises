import { motion } from 'framer-motion'
import { WHY_ITEMS } from '@/lib/constants'
import { LeadForm } from '@/components/ui/LeadForm'

export function LeadFunnel() {
  return (
    <section
      id="contact"
      className="bg-navy py-20 lg:py-28"
      aria-labelledby="funnel-title"
    >
      <div className="section-inner">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 items-start">

          {/* Left — why us */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <span className="section-tag text-sky-300">B2B Compliance Triage</span>
            <h2
              id="funnel-title"
              className="section-title text-white text-[clamp(1.8rem,3.5vw,2.8rem)] mb-4"
            >
              Start Your Compliance Audit
            </h2>
            <p className="text-white/60 text-[17px] leading-[1.7] mb-10">
              Tell us about your facility and we&rsquo;ll assign the right specialist
              within 24 hours.
            </p>

            {/* Why items */}
            <div className="flex flex-col gap-6">
              {WHY_ITEMS.map((item, i) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="flex gap-4 items-start"
                >
                  <div
                    className="w-7 h-7 rounded-full bg-sky-400/15 border border-sky-400/30 flex items-center justify-center font-display font-extrabold text-[13px] text-sky-300 flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  >
                    {item.number}
                  </div>
                  <div>
                    <h3 className="text-[14px] font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-[13px] text-white/50 leading-[1.55]">{item.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — form card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            <LeadForm />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
