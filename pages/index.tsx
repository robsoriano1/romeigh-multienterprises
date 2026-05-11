import type { NextPage } from 'next'
import Head from 'next/head'
import { Header }          from '@/components/layout/Header'
import { Footer }          from '@/components/layout/Footer'
import { ChatbotFAB }      from '@/components/layout/ChatbotFAB'
import { HeroSection }     from '@/components/sections/HeroSection'
import { TrustBar }        from '@/components/sections/TrustBar'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { GallerySection }  from '@/components/sections/GallerySection'
import { LeadFunnel }      from '@/components/sections/LeadFunnel'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ROMEIGH Multi-Enterprises — Safe. Compliant. Sustainable.</title>
      </Head>

      {/* Sticky navigation */}
      <Header />

      <main id="main-content">
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Trust / Accreditation Bar */}
        <TrustBar />

        {/* 3. Services Grid */}
        <ServicesSection />

        {/* 4. Gallery */}
        <GallerySection />

        {/* 5. Lead Funnel / Triage Form */}
        <LeadFunnel />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating AI chatbot scaffold */}
      <ChatbotFAB />
    </>
  )
}

export default Home
