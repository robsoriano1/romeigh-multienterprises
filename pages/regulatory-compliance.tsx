import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ChatbotFAB } from '@/components/layout/ChatbotFAB'

const laws = [
  {
    code: 'RA 9275',
    title: 'Philippine Clean Water Act',
    summary: 'Regulates the discharge of pollutants into Philippine water bodies. Requires industrial facilities to obtain a Discharge Permit from DENR-EMB and meet effluent standards under DAO 2021-08. Effluent must meet Class C water quality standards — BOD ≤ 50 mg/L, TSS ≤ 70 mg/L, pH 6.0–9.0.',
    denrRef: 'DAO 2021-08',
  },
  {
    code: 'RA 8749',
    title: 'Philippine Clean Air Act',
    summary: 'Regulates air emissions from stationary and mobile sources. Boiler and combustion facilities must obtain a Permit to Operate from DENR-EMB. Emission testing is required every two years. Facilities must employ a registered Pollution Control Officer (PCO).',
    denrRef: 'DAO 2000-81',
  },
]

const obligations = [
  {
    title: 'Discharge Permit',
    body: 'Industrial facilities discharging treated wastewater must obtain a Discharge Permit from DENR-EMB. ROMEIGH\'s water treatment programs help clients meet the effluent quality required to maintain their permit.',
  },
  {
    title: 'Effluent Quality Standards',
    body: 'Under DAO 2021-08, effluent must meet Class C water quality standards — BOD ≤ 50 mg/L, TSS ≤ 70 mg/L, pH 6.0–9.0. ROMEIGH\'s treatment chemical programs are formulated to support compliance.',
  },
  {
    title: 'Boiler Permit to Operate',
    body: 'Boiler and combustion facilities require a Permit to Operate from DENR-EMB under RA 8749. Properly treated boiler water reduces emissions and helps maintain permit compliance.',
  },
  {
    title: 'Pollution Control Officer (PCO)',
    body: 'Facilities with boilers or wastewater treatment plants must employ a DENR-EMB registered PCO. Contact ROMEIGH to discuss how our services support your PCO\'s compliance program.',
  },
  {
    title: 'Self-Monitoring Reports (SMR)',
    body: 'Industrial facilities with wastewater discharges must submit quarterly SMRs to DENR-EMB. Consistent water quality through ROMEIGH\'s programs makes SMR reporting straightforward.',
  },
  {
    title: 'Annual Compliance Report (ACR)',
    body: 'Annual Compliance Reports must be submitted to DENR-EMB by March 31 each year. ROMEIGH can assist with data and documentation related to water treatment compliance.',
  },
]

const RegulatoryCompliance: NextPage = () => {
  return (
    <>
      <Head>
        <title>Regulatory Compliance — ROMEIGH Multi-Enterprises</title>
        <meta
          name="description"
          content="Philippine environmental regulatory compliance guide — RA 6969, RA 9275, RA 8749, DENR requirements, and how ROMEIGH helps your facility stay compliant."
        />
      </Head>

      <Header />

      <main>
        {/* Hero */}
        <section className="bg-hero-gradient py-20">
          <div className="max-w-site mx-auto px-6 lg:px-12 text-center">
            <span className="inline-block text-sky-400 text-[11px] font-bold tracking-[0.2em] uppercase mb-4">
              Legal
            </span>
            <h1 className="font-display font-extrabold text-white text-[clamp(2rem,4vw,3rem)] leading-tight mb-6">
              Philippine Environmental<br />
              <span className="text-sky-400">Regulatory Compliance</span>
            </h1>
            <p className="text-white/60 text-[17px] leading-[1.8] max-w-2xl mx-auto">
              A guide to the key environmental laws Philippine industrial facilities must comply with —
              and how ROMEIGH helps you meet every requirement.
            </p>
          </div>
        </section>

        {/* Laws */}
        <section className="bg-white py-20 border-t border-gray-100">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <div className="text-center mb-12">
              <h2 className="font-display font-extrabold text-navy text-[clamp(1.75rem,3vw,2.5rem)]">
                Key Environmental Laws
              </h2>
              <p className="text-gray-500 mt-3 text-[16px] max-w-xl mx-auto">
                The following Republic Acts govern industrial environmental compliance in the Philippines.
              </p>
            </div>
            <div className="space-y-6 max-w-3xl mx-auto">
              {laws.map(l => (
                <div key={l.code} className="bg-white border border-gray-100 rounded-2xl shadow-card p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="shrink-0 inline-block bg-sky-500 text-white text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-lg">
                      {l.code}
                    </span>
                    <div>
                      <h3 className="font-display font-bold text-navy text-lg leading-tight">{l.title}</h3>
                      <p className="text-sky-600 text-xs font-medium mt-1">Implementing rules: {l.denrRef}</p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{l.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Obligations */}
        <section className="bg-gray-50 py-20 border-t border-gray-100">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <div className="text-center mb-12">
              <h2 className="font-display font-extrabold text-navy text-[clamp(1.75rem,3vw,2.5rem)]">
                Key Compliance Obligations
              </h2>
              <p className="text-gray-500 mt-3 text-[16px] max-w-xl mx-auto">
                What your facility is required to do — and how ROMEIGH helps you do it.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {obligations.map(o => (
                <div key={o.title} className="bg-white rounded-xl border border-gray-100 shadow-card p-6">
                  <h3 className="font-display font-bold text-navy text-base mb-2">{o.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{o.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Disclaimer note */}
        <section className="bg-white py-10 border-t border-gray-100">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <p className="text-gray-400 text-xs leading-relaxed">
              This page is for informational purposes only and does not constitute legal advice.
              Regulations may change. Always refer to current DENR-EMB guidelines and consult a
              qualified professional for your specific compliance situation.{' '}
              <Link href="/legal-disclaimer" className="text-sky-500 hover:text-sky-600 transition-colors">
                See our full legal disclaimer.
              </Link>
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy py-16">
          <div className="max-w-site mx-auto px-6 lg:px-12 text-center">
            <h2 className="font-display font-extrabold text-white text-[clamp(1.5rem,3vw,2.25rem)] mb-4">
              Not sure if your facility is compliant?
            </h2>
            <p className="text-white/60 text-[16px] mb-8 max-w-xl mx-auto">
              Request a free compliance gap analysis from a ROMEIGH specialist.
            </p>
            <Link href="/#contact" className="btn-primary">
              Request a Free Compliance Audit
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <ChatbotFAB />
    </>
  )
}

export default RegulatoryCompliance
