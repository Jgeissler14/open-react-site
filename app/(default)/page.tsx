export const metadata = {
  title: 'CloudZap - DevOps for SMBs',
  description: 'On demand DevOps to scale your business',
}
import Script from 'next/script'
import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import Plans from '@/components/plans'
import Faq from '@/components/faq'
import Offer from '@/components/offer'

export default function Home() {
  return (
    <>
       <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-5QY6Q4E8WD"/>
    <Script
      id='google-analytics'
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXX', {
            page_path: window.location.pathname,
          });
        `,
        }}
    />
      <Hero />
      {/* <Newsletter /> */}
      <Zigzag />
      <Offer />
      <Features />
      {/* <Testimonials /> */}
      <Plans />
      <Faq />
    </>
  )
}
