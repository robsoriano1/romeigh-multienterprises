import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ChatbotFAB } from '@/components/layout/ChatbotFAB'

const products = [
  {
    id: 'boilerguard',
    logo: '/Boilerguard.jpg',
    name: 'BOILERGUARD',
    subtitle: 'Boiler Water Treatment',
    photo: '/Gallery1.jpg',
    tags: ['Anti-scale', 'Anti-corrosion', 'Sludge Conditioner', 'Oxygen Scavenger', 'pH Controller', 'Intertek Non-Toxic'],
    description:
      'Precision-formulated boiler water treatment chemicals that prevent scale buildup, corrosion, and oxygen attack in fire-tube and water-tube boiler systems. BOILERGUARD is certified Non-Toxic by Intertek, making it safe for steam used in food-adjacent processes.',
    bullets: [
      'Oxygen scavengers (sodium sulfite, hydrazine-free alternatives)',
      'Scale inhibitors and dispersants for hard water conditions',
      'pH regulators and alkalinity builders',
      'Corrosion inhibitors for boiler internals and condensate lines',
      'Compatible with fire-tube and water-tube boilers of all capacities',
    ],
  },
  {
    id: 'bestkool',
    logo: '/BestKool.jpg',
    name: 'BESTKOOL',
    subtitle: 'Cooling Water Treatment',
    photo: '/Gallery4.jpg',
    tags: ['Anti-scale', 'Anti-corrosion', 'Microbiocide', 'Algaecide', 'Biodispersant'],
    description:
      'Specialized cooling water treatment using BESTKOOL chemicals to prevent scale, corrosion, and microbial fouling in cooling towers, condensers, and heat exchangers. Keeps systems running at peak thermal efficiency.',
    bullets: [
      'Corrosion and scale inhibitors for mixed-metallurgy systems',
      'Biocides for Legionella control and microbial management',
      'Dispersants for suspended solids and silt',
      'Biodispersants for biofilm removal and prevention',
      'Compatible with open recirculating and closed-loop systems',
    ],
  },
  {
    id: 'thermomix',
    logo: '/Thermomix.jpg',
    name: 'THERMOMIX by Thermax',
    subtitle: 'Fuel & Fireside Treatment',
    photo: '/Gallery11.jpg',
    tags: ['Fireside Treatment', 'Thermosol Fuel Additives', 'Coal Boiler', 'Combustion Efficiency'],
    description:
      'Fireside and fuel treatment chemicals for coal-fired and oil-fired boilers. Reduces deposits on heat transfer surfaces, improves combustion efficiency, and extends boiler service life between cleanings.',
    bullets: [
      'Fireside deposit modifiers for coal and heavy fuel oil boilers',
      'Thermosol fuel additives to improve combustion and reduce soot',
      'High-temperature corrosion inhibitors for flue gas paths',
      'Reduces unplanned shutdowns caused by fireside fouling',
      'Extends boiler service intervals and reduces fuel consumption',
    ],
  },
]

const ChemicalTreatment: NextPage = () => {
  return (
    <>
      <Head>
        <title>Chemical Water Treatment — ROMEIGH Multi-Enterprises</title>
        <meta
          name="description"
          content="Industrial chemical water treatment programs by ROMEIGH — BOILERGUARD boiler treatment, BESTKOOL cooling water treatment, and THERMOMIX fuel treatment."
        />
      </Head>

      <Header />

      <main>
        {/* Hero */}
        <section className="bg-hero-gradient py-20">
          <div className="max-w-site mx-auto px-6 lg:px-12 text-center">
            <span className="inline-block text-sky-400 text-[11px] font-bold tracking-[0.2em] uppercase mb-4">
              Services — Chemical Treatment
            </span>
            <h1 className="font-display font-extrabold text-white text-[clamp(2rem,4vw,3rem)] leading-tight mb-6">
              Industrial Chemical<br />
              <span className="text-sky-400">Water Treatment</span>
            </h1>
            <p className="text-white/60 text-[17px] leading-[1.8] max-w-2xl mx-auto mb-8">
              ROMEIGH supplies and manages complete chemical treatment programs for boilers,
              cooling towers, and fired systems — keeping your equipment protected, efficient,
              and compliant.
            </p>
            <Link href="/#contact" className="btn-primary">
              Request a Free Assessment
            </Link>
          </div>
        </section>

        {/* Products */}
        {products.map((p, i) => (
          <section
            key={p.id}
            className={`py-20 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-t border-gray-100`}
          >
            <div className="max-w-site mx-auto px-6 lg:px-12">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? 'lg:[direction:rtl]' : ''}`}>
                <div className={i % 2 !== 0 ? 'lg:[direction:ltr]' : ''}>
                  {p.logo && (
                    <div className="mb-5 inline-block bg-white rounded-xl border border-gray-100 shadow-card px-4 py-3">
                      <Image src={p.logo} alt={p.name} width={180} height={60} className="h-12 w-auto object-contain" />
                    </div>
                  )}
                  <h2 className="font-display font-extrabold text-navy text-[clamp(1.5rem,3vw,2.25rem)] mb-2">
                    {p.name}
                  </h2>
                  <p className="text-sky-600 font-medium text-sm mb-4">{p.subtitle}</p>
                  <p className="text-gray-500 text-[16px] leading-[1.8] mb-6">{p.description}</p>
                  <ul className="space-y-2 mb-6">
                    {p.bullets.map(b => (
                      <li key={b} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map(t => (
                      <span key={t} className="text-[11px] font-semibold tracking-wide uppercase bg-sky-50 text-sky-700 border border-sky-100 rounded px-2.5 py-1">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className={i % 2 !== 0 ? 'lg:[direction:ltr]' : ''}>
                  <div className="relative rounded-2xl overflow-hidden shadow-lift aspect-[4/3]">
                    <Image src={p.photo} alt={p.name} fill className="object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="bg-navy py-16">
          <div className="max-w-site mx-auto px-6 lg:px-12 text-center">
            <h2 className="font-display font-extrabold text-white text-[clamp(1.5rem,3vw,2.25rem)] mb-4">
              Ready to protect your equipment?
            </h2>
            <p className="text-white/60 text-[16px] mb-8 max-w-xl mx-auto">
              Get a free water analysis and chemical treatment recommendation from a ROMEIGH specialist.
            </p>
            <Link href="/#contact" className="btn-primary">
              Request a Free Assessment
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <ChatbotFAB />
    </>
  )
}

export default ChemicalTreatment
