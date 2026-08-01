import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { CtaFooter } from '@/components/cta-footer'

export default function HomePage() {
  return (
    <main className="min-h-dvh">
      <SiteHeader />
      <Hero />
      <Features />
      <CtaFooter />
    </main>
  )
}