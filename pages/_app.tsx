import type { AppProps } from 'next/app'
import Head from 'next/head'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Primary Meta */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0A2744" />

        {/* SEO */}
        <meta
          name="description"
          content="ROMEIGH Multi-Enterprises — industrial chemical water treatment and hazardous waste management in the Philippines."
        />
        <meta name="keywords" content="chemical water treatment, hazardous waste management, Philippines, RO filtration, boiler treatment, cooling tower treatment" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:type"        content="website" />
        <meta property="og:site_name"   content="ROMEIGH Multi-Enterprises" />
        <meta property="og:title"       content="ROMEIGH — Safe. Compliant. Sustainable." />
        <meta property="og:description" content="Industrial water treatment and hazardous waste management. Serving Cavite and Metro Manila." />
        <meta property="og:image"       content="/images/og-image.jpg" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
