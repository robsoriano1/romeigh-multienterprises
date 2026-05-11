import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ChatbotFAB } from '@/components/layout/ChatbotFAB'

const values = [
  { title: 'Technical Excellence', body: "We invest in our team's knowledge of industrial chemistry, environmental regulations, and systems engineering." },
  { title: 'Client-First Mindset', body: "Every role at ROMEIGH ultimately serves our clients' compliance and operational success." },
  { title: 'Integrity', body: 'We operate with full transparency in our documentation, pricing, and regulatory guidance.' },
]

const Careers: NextPage = () => {
  return (
    <>
      <Head>
        <title>Careers — ROMEIGH Multi-Enterprises</title>
        <meta
          name="description"
          content="Join ROMEIGH Multi-Enterprises — careers in industrial chemical water treatment, hazardous waste management, and environmental compliance in the Philippines."
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
              Careers at<br />
              <span className="text-sky-400">ROMEIGH</span>
            </h1>
            <p className="text-white/60 text-[17px] leading-[1.8] max-w-2xl mx-auto">
              Join a team dedicated to keeping Philippine industry safe, compliant, and operationally sound.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="bg-white py-20 border-t border-gray-100">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <div className="text-center mb-12">
              <h2 className="font-display font-extrabold text-navy text-[clamp(1.75rem,3vw,2.5rem)]">
                Why Work with Us
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map(v => (
                <div key={v.title} className="bg-sky-50 border border-sky-100 rounded-xl p-6">
                  <h3 className="font-display font-bold text-navy text-lg mb-2">{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open roles */}
        <section className="bg-gray-50 py-20 border-t border-gray-100">
          <div className="max-w-site mx-auto px-6 lg:px-12">
            <div className="text-center mb-12">
              <h2 className="font-display font-extrabold text-navy text-[clamp(1.75rem,3vw,2.5rem)]">
                Open Positions
              </h2>
            </div>
            <div className="max-w-2xl mx-auto bg-white border border-gray-100 rounded-2xl shadow-card p-10 text-center">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#93c5fd" strokeWidth="1.25" className="mx-auto mb-4" aria-hidden="true">
                <rect x="2" y="7" width="20" height="14" rx="2" />
                <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
              </svg>
              <h3 className="font-display font-bold text-navy text-xl mb-3">No open positions at this time</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                We are not actively hiring right now, but we welcome inquiries from qualified
                chemical engineers, environmental specialists, and sales professionals.
              </p>
              <Link
                href={`mailto:admin@romeigh.com?subject=Career Inquiry`}
                className="btn-primary"
              >
                Send a Career Inquiry
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ChatbotFAB />
    </>
  )
}

export default Careers
