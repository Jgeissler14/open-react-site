export const metadata = {
  title: 'Geissler Solutions - DevOps as a Subscription',
  description: 'AWS infrastructure subscriptions to scale your business',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import Plans from '@/components/plans'


export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      {/* <Testimonials /> */}
      <Plans />
      {/* <Newsletter /> */}
    </>
  )
}
