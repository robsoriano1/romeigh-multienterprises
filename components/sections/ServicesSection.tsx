import { motion } from 'framer-motion'
import { SERVICES } from '@/lib/constants'
import { ServiceCard } from '@/components/ui/ServiceCard'

export function ServicesSection() {
  return (
    <section id="services" className="bg-white py-20 lg:py-28" aria-labelledby="services-title">
      <div className="section-inner">

        {/* Header */}
        <div className="max-w-xl mb-12">
          <span className="section-tag">Our Core Services</span>
          <h2 id="services-title" className="section-title text-[clamp(1.8rem,3.5vw,2.8rem)] mb-4">
            Industrial Solutions,<br />Precisely Delivered
          </h2>
          <p className="text-gray-500 text-[17px] leading-[1.7]">
            Comprehensive water treatment and waste management services engineered
            for the Philippine industrial sector.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm mb-4">
            Need a customized solution? All services can be bundled into a single managed compliance contract.
          </p>
          <a href="#contact" className="btn-primary-dark">
            Discuss Your Requirements
          </a>
        </div>
      </div>
    </section>
  )
}
