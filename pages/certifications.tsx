import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ChatbotFAB } from '@/components/layout/ChatbotFAB'

const certs = [
  {
    issuer: 'Intertek',
    badge: 'ITK NON-TOXIC',
    name: 'Non-Toxic Chemical Safety Certification',
    scope: 'BOILERGUARD chemical product line',
    description:
      'ROMEIGH\'s BOILERGUARD boiler water treatment chemicals have been independently tested and certified Non-Toxic by Intertek, a globally accredited third-party testing body. This certification confirms that the chemical formulations meet safety standards for non-toxicity, making them suitable for facilities with steam used in food-adjacent and sensitive industrial processes.',
    color: 'bg-blue-50 text-blue-700 border-blue-100',
  },
]

const compliance = [
  {
    label: 'DENR-Accredited Hazardous Waste Transporter',
    description: 'ROMEIGH operates as a DENR-accredited hazardous waste transporter and service provider under DAO 2013-22, authorized to collect, transport, and facilitate disposal of regulated industrial wastes.',
  },
  {
    label: 'Compliance with RA 6969',
    description: 'All hazardous waste services are conducted in full compliance with the Toxic Substances and Hazardous and Nuclear Wastes Control Act (RA 6969) and its implementing rules.',
  },
  {
    label: 'Compliance with RA 9275',
    description: 'Wastewater treatment support services align with the Philippine Clean Water Act (RA 9275) and DENR DAO 2021-08 effluent standards.',
  },
  {
    label: 'Compliance with RA 8749',
    description: 'Used oil collection and disposal services comply with the Philippine Clean Air Act (RA 8749) and related regulations governing the handling of used lubricating oils.',
  },
]

const Certifications: NextPage = () => {
  return (
    <>
      <Head>
        <title>Certifications — ROMEIGH Multi-Enterprises</title>
        <meta
          name="description"
          content="ROMEIGH Multi-Enterprises certifications and regulatory compliance — Intertek Non-Toxic certification and DENR accreditation."
        />
      </Head>

      <Header />

      <main>
        {/* Hero */}
        <section className="bg-hero-gradient py-20">
          <div className="max-w-site mx-auto px-6 lg:px-12 text-center">
            <span className="inline-block text-sky-400 text-[11px] font-bold tracking-[0.2em] uppercase mb-4">
              Company
            </span>
            <h1 className="font-display font-extrabold text-white text-[clamp(2rem,4vw,3rem)] leading-tight mb-6">
              Certifications &<br />
              <span className="text-sky-400">Regulatory Compliance</span>
            </h1>
            <p className="text-white/60 text-[17px] leading-[1.8] max-w-2xl mx-auto">
              ROMEIGH's services and products are backed by third-party certifications and full
              compliance with Philippine environmental regulations.
            </p>
          </div>
        </section>

        {/* Product certifications */}
        <section className="bg-white py-20 border-t border-gray-100">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <div className="text-center mb-12">
              <h2 className="font-display font-extrabold text-navy text-[clamp(1.75rem,3vw,2.5rem)]">
                Product Certifications
              </h2>
            </div>
            <div className="max-w-2xl mx-auto space-y-6">
              {certs.map(c => (
                <div key={c.name} className="bg-white border border-gray-100 rounded-2xl shadow-card p-8">
                  <div className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2 mb-6 ${c.color}`}>
                    <span className="font-display font-extrabold text-sm tracking-widest whitespace-pre-line text-center leading-tight">
                      {c.badge}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-navy text-xl mb-1">{c.name}</h3>
                  <p className="text-sky-600 text-sm font-medium mb-4">Issued by {c.issuer} · Scope: {c.scope}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{c.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Regulatory compliance */}
        <section className="bg-gray-50 py-20 border-t border-gray-100">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <div className="text-center mb-12">
              <h2 className="font-display font-extrabold text-navy text-[clamp(1.75rem,3vw,2.5rem)]">
                Regulatory Compliance
              </h2>
              <p className="text-gray-500 mt-3 text-[16px] max-w-xl mx-auto">
                ROMEIGH operates under the following Philippine environmental laws and regulations.
              </p>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {compliance.map(c => (
                <div key={c.label} className="bg-white rounded-xl border border-gray-100 shadow-card p-6">
                  <h3 className="font-display font-bold text-navy text-base mb-2">{c.label}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{c.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy py-16">
          <div className="max-w-site mx-auto px-6 lg:px-12 text-center">
            <h2 className="font-display font-extrabold text-white text-[clamp(1.5rem,3vw,2.25rem)] mb-4">
              Need documentation for your audit?
            </h2>
            <p className="text-white/60 text-[16px] mb-8 max-w-xl mx-auto">
              Contact us to request copies of certifications or compliance documentation for your records.
            </p>
            <Link href="/#contact" className="btn-primary">
              Contact Us
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <ChatbotFAB />
    </>
  )
}

export default Certifications
