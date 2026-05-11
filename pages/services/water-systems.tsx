import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ChatbotFAB } from '@/components/layout/ChatbotFAB'

const features = [
  {
    title: 'Reverse Osmosis (RO) Systems',
    body: 'High-rejection RO membranes remove dissolved salts, heavy metals, and organics. Sized for light industrial to large-scale process water requirements.',
    icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z',
  },
  {
    title: 'Multi-Media Filtration (MMF)',
    body: 'Layered sand, anthracite, and gravel media removes suspended solids and turbidity as a pre-treatment stage before RO or ion exchange.',
    icon: 'M3 4h18v2H3V4zm2 4h14v2H5V8zm4 4h6v2H9v-2z',
  },
  {
    title: 'Activated Carbon Filtration',
    body: 'Removes chlorine, chloramines, and organic compounds that damage downstream membranes and affect process water quality.',
    icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
  },
  {
    title: 'Ion Exchange Resin',
    body: 'Cation and anion resin beds for demineralized water production. Purolite resins used for pharmaceutical, electronics, and boiler make-up water.',
    icon: 'M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18',
  },
  {
    title: 'Deionizer (DI) Systems',
    body: 'Mixed-bed deionizers for ultra-pure water applications. Produces resistivity levels suitable for laboratory, semiconductor, and precision manufacturing use.',
    icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
  },
  {
    title: 'System Commissioning & Optimization',
    body: 'ROMEIGH engineers commission new systems, optimize recovery rates, and train your operators — with ongoing service and membrane cleaning support.',
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
  },
]

const WaterSystems: NextPage = () => {
  return (
    <>
      <Head>
        <title>Water Filtration Systems — ROMEIGH Multi-Enterprises</title>
        <meta
          name="description"
          content="Industrial water filtration systems by ROMEIGH — RO, multi-media filtration, activated carbon, ion exchange, and deionizer systems using Pentair and Purolite components."
        />
      </Head>

      <Header />

      <main>
        {/* Hero */}
        <section className="bg-hero-gradient py-20">
          <div className="max-w-site mx-auto px-6 lg:px-12 text-center">
            <span className="inline-block text-sky-400 text-[11px] font-bold tracking-[0.2em] uppercase mb-4">
              Services — Water Systems
            </span>
            <h1 className="font-display font-extrabold text-white text-[clamp(2rem,4vw,3rem)] leading-tight mb-6">
              Industrial Water<br />
              <span className="text-sky-400">Filtration Systems</span>
            </h1>
            <p className="text-white/60 text-[17px] leading-[1.8] max-w-2xl mx-auto mb-8">
              Design, supply, installation, and maintenance of RO, multi-media, activated
              carbon, ion exchange, and deionizer systems — built on Pentair Water and
              Purolite components.
            </p>
            <Link href="/#contact" className="btn-primary">
              Request a System Consultation
            </Link>
          </div>
        </section>

        {/* Photo + intro */}
        <section className="bg-white py-20 border-t border-gray-100">
          <div className="max-w-site mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-5 inline-block bg-white rounded-xl border border-gray-100 shadow-card px-4 py-3">
                <Image src="/Filtration.jpg" alt="Water Filtration" width={180} height={60} className="h-12 w-auto object-contain" />
              </div>
              <h2 className="font-display font-extrabold text-navy text-[clamp(1.5rem,3vw,2.25rem)] mb-4">
                Pure Water for Every Industrial Process
              </h2>
              <p className="text-gray-500 text-[16px] leading-[1.8] mb-4">
                Industrial processes demand consistent water quality. Scale-forming minerals, suspended solids,
                and organic contaminants degrade equipment, shorten membrane life, and compromise product
                quality. ROMEIGH designs multi-stage filtration trains that deliver the exact water quality
                your process requires.
              </p>
              <p className="text-gray-500 text-[16px] leading-[1.8]">
                We source components from Pentair Water and Purolite — globally recognized manufacturers —
                and back every installation with ongoing technical support and scheduled maintenance.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lift aspect-[4/3]">
              <Image src="/Gallery8.jpg" alt="Water filtration system" fill className="object-cover" />
            </div>
          </div>
        </section>

        {/* Features grid */}
        <section className="bg-gray-50 py-20 border-t border-gray-100">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <div className="text-center mb-12">
              <h2 className="font-display font-extrabold text-navy text-[clamp(1.75rem,3vw,2.5rem)]">
                System Components & Capabilities
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map(f => (
                <div key={f.title} className="bg-white rounded-xl p-6 border border-gray-100 shadow-card">
                  <div className="w-10 h-10 rounded-lg bg-sky-500 flex items-center justify-center mb-4">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.75" aria-hidden="true">
                      <path d={f.icon} />
                    </svg>
                  </div>
                  <h3 className="font-display font-bold text-navy text-lg mb-2">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy py-16">
          <div className="max-w-site mx-auto px-6 lg:px-12 text-center">
            <h2 className="font-display font-extrabold text-white text-[clamp(1.5rem,3vw,2.25rem)] mb-4">
              Let us design your water treatment train.
            </h2>
            <p className="text-white/60 text-[16px] mb-8 max-w-xl mx-auto">
              Tell us your flow rate, water source, and process requirements — we'll size and quote a complete system.
            </p>
            <Link href="/#contact" className="btn-primary">
              Request a System Consultation
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <ChatbotFAB />
    </>
  )
}

export default WaterSystems
