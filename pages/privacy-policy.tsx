import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ChatbotFAB } from '@/components/layout/ChatbotFAB'

const sections = [
  {
    title: '1. Information We Collect',
    body: 'When you submit a contact or inquiry form on this website, we collect personal information you provide — including your name, company name, email address, phone number, and details about your facility or service needs. We do not collect payment information through this website.',
  },
  {
    title: '2. How We Use Your Information',
    body: 'We use the information you provide solely to respond to your inquiries, prepare service proposals, and communicate with you regarding ROMEIGH\'s products and services. We do not use your information for unsolicited marketing or share it with third parties for their own marketing purposes.',
  },
  {
    title: '3. Data Sharing',
    body: 'We do not sell, rent, or trade your personal information to third parties. Information may be shared internally among ROMEIGH staff on a need-to-know basis to fulfill your request. We may share information if required by Philippine law or by order of a government authority.',
  },
  {
    title: '4. Data Retention',
    body: 'We retain your personal information for as long as necessary to fulfill the purpose for which it was collected, or as required by applicable law. Client records related to hazardous waste manifests and regulatory compliance are retained in accordance with DENR requirements.',
  },
  {
    title: '5. Cookies and Analytics',
    body: 'This website may use cookies or similar technologies to improve your browsing experience and to collect aggregate usage statistics. We do not use cookies to identify you personally. You may disable cookies in your browser settings without affecting your ability to use the site.',
  },
  {
    title: '6. Data Security',
    body: 'We take reasonable precautions to protect your personal information from unauthorized access or disclosure. However, no data transmission over the internet can be guaranteed to be completely secure.',
  },
  {
    title: '7. Your Rights',
    body: 'Under the Philippine Data Privacy Act of 2012 (RA 10173), you have the right to access, correct, and request deletion of your personal data held by ROMEIGH. To exercise these rights, please contact us at admin@romeigh.com.',
  },
  {
    title: '8. Changes to This Policy',
    body: 'We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. Continued use of the website after changes constitutes your acceptance of the updated policy.',
  },
  {
    title: '9. Contact',
    body: 'For privacy-related concerns, contact ROMEIGH Multi-Enterprises at admin@romeigh.com or call (046) 436-1389.',
  },
]

const PrivacyPolicy: NextPage = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy — ROMEIGH Multi-Enterprises</title>
        <meta name="description" content="Privacy Policy for ROMEIGH Multi-Enterprises website." />
      </Head>

      <Header />

      <main>
        <section className="bg-hero-gradient py-16">
          <div className="max-w-site mx-auto px-6 lg:px-12 text-center">
            <span className="inline-block text-sky-400 text-[11px] font-bold tracking-[0.2em] uppercase mb-4">Legal</span>
            <h1 className="font-display font-extrabold text-white text-[clamp(2rem,4vw,3rem)] leading-tight">
              Privacy Policy
            </h1>
            <p className="text-white/50 text-sm mt-4">Effective date: January 1, 2024</p>
          </div>
        </section>

        <section className="bg-white py-20 border-t border-gray-100">
          <div className="max-w-2xl mx-auto px-6">
            <p className="text-gray-500 text-[16px] leading-[1.8] mb-10">
              ROMEIGH Multi-Enterprises ("ROMEIGH", "we", "us") respects your privacy. This Privacy
              Policy describes how we collect, use, and protect personal information submitted through
              this website, in compliance with the Philippine Data Privacy Act of 2012 (RA 10173).
            </p>
            <div className="space-y-8">
              {sections.map(s => (
                <div key={s.title}>
                  <h2 className="font-display font-bold text-navy text-lg mb-2">{s.title}</h2>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 pt-8 border-t border-gray-100 text-center">
              <Link href="/" className="text-sky-600 hover:text-sky-700 text-sm font-medium transition-colors">
                ← Back to Homepage
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

export default PrivacyPolicy
