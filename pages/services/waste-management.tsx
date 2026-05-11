import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ChatbotFAB } from '@/components/layout/ChatbotFAB'

const services = [
  {
    title: 'Hazardous Waste Collection & Transport',
    body: 'Proper packaging, labeling, manifesting, and transport of regulated hazardous wastes using DENR-accredited vehicles and trained personnel. Full documentation provided per DAO 2013-22.',
    tags: ['DAO 2013-22', 'DENR-Accredited', 'Manifest Tracking'],
  },
  {
    title: 'Used Oil Collection & Disposal',
    body: 'Compliant collection and disposal of used lubricating oils under RA 8749. Co-processing and re-refining options available. Full manifest and certificate of disposal provided.',
    tags: ['RA 8749', 'Used Oil (M503)', 'Certificate of Disposal'],
  },
  {
    title: 'Industrial Wastewater Treatment Support',
    body: 'On-site support for effluent treatment plant (ETP) operations — neutralization, coagulation, flocculation, and compliance with DENR effluent standards under DAO 2021-08.',
    tags: ['DAO 2021-08', 'ETP Operations', 'Effluent Compliance'],
  },
  {
    title: 'Compliance Support Services',
    body: 'Regulatory gap analysis, hazardous waste inventory setup, Self-Monitoring Report (SMR) preparation, and Annual Compliance Report support for DENR-EMB submissions.',
    tags: ['SMR Preparation', 'Annual Compliance Report', 'Gap Analysis'],
  },
]

const wasteTypes = [
  { code: 'M503', label: 'Used Lubricating Oils' },
  { code: 'M001–M007', label: 'Spent Solvents' },
  { code: 'M201–M204', label: 'Electroplating Wastes' },
  { code: 'H-coded', label: 'Hospital / Pharma Wastes' },
  { code: 'Heavy Metals', label: 'Heavy Metal-Containing Wastes' },
  { code: 'Others', label: 'Other DENR-Listed Hazardous Wastes' },
]

const WasteManagement: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hazardous Waste Management — ROMEIGH Multi-Enterprises</title>
        <meta
          name="description"
          content="DENR-compliant hazardous waste collection, transport, and disposal services by ROMEIGH — used oil, industrial wastewater, and full regulatory documentation."
        />
      </Head>

      <Header />

      <main>
        {/* Hero */}
        <section className="bg-hero-gradient py-20">
          <div className="max-w-site mx-auto px-6 lg:px-12 text-center">
            <span className="inline-block text-sky-400 text-[11px] font-bold tracking-[0.2em] uppercase mb-4">
              Services — Waste Management
            </span>
            <h1 className="font-display font-extrabold text-white text-[clamp(2rem,4vw,3rem)] leading-tight mb-6">
              Hazardous Waste<br />
              <span className="text-sky-400">Management & Disposal</span>
            </h1>
            <p className="text-white/60 text-[17px] leading-[1.8] max-w-2xl mx-auto mb-8">
              Fully compliant collection, transport, treatment, and disposal of industrial hazardous
              and used oil waste — with complete DENR documentation and zero compliance risk for your facility.
            </p>
            <Link href="/#contact" className="btn-primary">
              Schedule a Collection
            </Link>
          </div>
        </section>

        {/* Photo + intro */}
        <section className="bg-white py-20 border-t border-gray-100">
          <div className="max-w-site mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display font-extrabold text-navy text-[clamp(1.5rem,3vw,2.25rem)] mb-4">
                Stay Compliant. Avoid Penalties.
              </h2>
              <p className="text-gray-500 text-[16px] leading-[1.8] mb-4">
                Under RA 6969 and DAO 2013-22, improper disposal of hazardous waste carries penalties
                of PHP 10,000–50,000 per day of violation — plus potential criminal liability for
                company officers. ROMEIGH removes that risk entirely.
              </p>
              <p className="text-gray-500 text-[16px] leading-[1.8] mb-6">
                We handle every step: packaging, labeling, manifesting, transport, treatment, and
                disposal — all through DENR-accredited channels. You receive a complete paper trail
                for every shipment.
              </p>
              <div className="bg-sky-50 border border-sky-100 rounded-xl p-5">
                <p className="text-sky-700 text-sm font-semibold mb-1">Maximum on-site storage: 90 days</p>
                <p className="text-sky-600 text-sm">
                  DENR requires hazardous wastes to be removed within 90 days. ROMEIGH keeps your
                  facility on schedule with regular collection runs.
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lift aspect-[4/3]">
              <Image src="/Gallery14.jpg" alt="Hazardous waste management" fill className="object-cover" />
            </div>
          </div>
        </section>

        {/* Services grid */}
        <section className="bg-gray-50 py-20 border-t border-gray-100">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <div className="text-center mb-12">
              <h2 className="font-display font-extrabold text-navy text-[clamp(1.75rem,3vw,2.5rem)]">
                What We Handle
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map(s => (
                <div key={s.title} className="bg-white rounded-xl p-6 border border-gray-100 shadow-card">
                  <h3 className="font-display font-bold text-navy text-lg mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.body}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map(t => (
                      <span key={t} className="text-[11px] font-semibold tracking-wide uppercase bg-sky-50 text-sky-700 border border-sky-100 rounded px-2.5 py-1">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Waste types */}
        <section className="bg-white py-20 border-t border-gray-100">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <div className="text-center mb-12">
              <h2 className="font-display font-extrabold text-navy text-[clamp(1.75rem,3vw,2.5rem)]">
                Common Waste Types We Accept
              </h2>
              <p className="text-gray-500 mt-3 text-[16px]">Classified per DENR DAO 2013-22 waste codes</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {wasteTypes.map(w => (
                <div key={w.code} className="bg-sky-50 border border-sky-100 rounded-xl p-5 text-center">
                  <p className="font-display font-bold text-sky-700 text-sm mb-1">{w.code}</p>
                  <p className="text-navy text-sm font-medium">{w.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy py-16">
          <div className="max-w-site mx-auto px-6 lg:px-12 text-center">
            <h2 className="font-display font-extrabold text-white text-[clamp(1.5rem,3vw,2.25rem)] mb-4">
              Need a waste collection scheduled?
            </h2>
            <p className="text-white/60 text-[16px] mb-8 max-w-xl mx-auto">
              Contact ROMEIGH for a free compliance review and to schedule your next hazardous waste collection.
            </p>
            <Link href="/#contact" className="btn-primary">
              Schedule a Collection
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <ChatbotFAB />
    </>
  )
}

export default WasteManagement
