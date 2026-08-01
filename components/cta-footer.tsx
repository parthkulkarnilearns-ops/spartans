import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CtaFooter() {
  return (
    <>
      <section id="pricing" className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card/60 px-6 py-16 text-center sm:px-12">
          <div className="aura-glow pointer-events-none absolute inset-0" aria-hidden />
          <div className="relative mx-auto max-w-xl">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Give your mind a calmer place to think
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Start free today. No pressure, no noise — just thoughtful guidance whenever you need it.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                size="lg"
                nativeButton={false}
                className="rounded-full"
                render={<Link href="/chat" />}
              >
                Open Aura
                <ArrowRight className="size-4" />
              </Button>
              <span className="text-sm text-muted-foreground">Free forever plan available</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex size-7 items-center justify-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/30">
              <Sparkles className="size-4" />
            </span>
            <span className="font-semibold tracking-tight">Aura</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Aura Labs. Be kind to your mind.
          </p>
        </div>
      </footer>
    </>
  )
}