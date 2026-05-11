import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ChatbotFAB } from '@/components/layout/ChatbotFAB'

const placeholders = [
  {
    industry: 'Food Manufacturing',
    title: 'Boiler Scale Reduction at a Cavite Food Plant',
    summary: 'A food manufacturing facility was experiencing frequent boiler shutdowns due to heavy scale buildup. ROMEIGH introduced the BOILERGUARD program and reduced scale-related downtime by over 80% within three months.',
    tags: ['Boiler Treatment', 'BOILERGUARD', 'Scale Control'],
  },
  {
    industry: 'Electronics Manufacturing',
    title: 'RO System Installation for a PCB Manufacturer',
    summary: 'A printed circuit board manufacturer required ultra-pure process water. ROMEIGH designed and installed a multi-stage RO + DI system using Pentair components, achieving the required resistivity levels within spec.',
    tags: ['Water Filtration', 'RO System', 'DI Water'],
  },
]

const CaseStudies: NextPage = () => {
  return (
    <>
      <Head>
        <title>Case Studies — ROMEIGH Multi-Enterprises</title>
        <meta
          name="description"
          content="Real-world results from ROMEIGH Multi-Enterprises — boiler treatment, water filtration, and hazardous waste compliance case studies."
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
              Client Results &<br />
              <span className="text-sky-400">Case Studies</span>
            </h1>
            <p className="text-white/60 text-[17px] leading-[1.8] max-w-2xl mx-auto">
              Real outcomes from ROMEIGH's work with industrial clients across Cavite,
              Metro Manila, and CALABARZON.
            </p>
          </div>
        </section>

        {/* Case study cards */}
        <section className="bg-white py-20 border-t border-gray-100">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {placeholders.map(c => (
                <div key={c.title} className="bg-white border border-gray-100 rounded-2xl shadow-card p-8 flex flex-col">
                  <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-sky-600 mb-3">
                    {c.industry}
                  </span>
                  <h2 className="font-display font-bold text-navy text-xl mb-4 flex-1">{c.title}</h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{c.summary}</p>
                  <div className="flex flex-wrap gap-2">
                    {c.tags.map(t => (
                      <span key={t} className="text-[11px] font-semibold tracking-wide uppercase bg-sky-50 text-sky-700 border border-sky-100 rounded px-2.5 py-1">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center bg-sky-50 border border-sky-100 rounded-2xl p-10">
              <h2 className="font-display font-bold text-navy text-2xl mb-3">More case studies coming soon</h2>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xl mx-auto">
                We are compiling detailed client results and full case studies. In the meantime,
                contact us to speak directly with a ROMEIGH specialist about your specific situation.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy py-16">
          <div className="max-w-site mx-auto px-6 lg:px-12 text-center">
            <h2 className="font-display font-extrabold text-white text-[clamp(1.5rem,3vw,2.25rem)] mb-4">
              Want results like these?
            </h2>
            <p className="text-white/60 text-[16px] mb-8 max-w-xl mx-auto">
              Talk to a ROMEIGH specialist about your facility's needs.
            </p>
            <Link href="/#contact" className="btn-primary">
              Get a Free Assessment
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <ChatbotFAB />
    </>
  )
}

export default CaseStudies
