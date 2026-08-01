import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* glowing gradient header backdrop */}
      <div className="aura-glow pointer-events-none absolute inset-x-0 top-0 h-[520px]" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-16 sm:px-6 sm:pt-24">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <span className="size-1.5 rounded-full bg-accent" />
            Meet your calmer, wiser self
          </span>

          <h1 className="mt-6 text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Your personal <span className="text-gradient">AI life coach</span>, present whenever you need clarity
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Aura listens without judgment, helps you untangle your thoughts, and guides you toward
            goals that actually matter. Reflection, habits, and gentle accountability in one quiet space.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <Button
              size="lg"
              nativeButton={false}
              className="rounded-full"
              render={<Link href="/chat" />}
            >
              Start a conversation
              <ArrowRight className="size-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              className="rounded-full bg-transparent"
              render={<Link href="#features" />}
            >
              See how it works
            </Button>
          </div>

          <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <div className="flex" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-accent text-accent" />
              ))}
            </div>
            Loved by 12,000+ reflective minds
          </div>
        </div>

        <div className="relative mx-auto mt-14 max-w-4xl">
          <div className="absolute -inset-x-10 -top-10 -z-10 h-64 aura-glow blur-2xl" aria-hidden />
          <div className="overflow-hidden rounded-3xl border border-border bg-card/60 p-2 shadow-2xl backdrop-blur">
            <div className="flex flex-col items-center gap-6 rounded-2xl bg-background/60 px-6 py-10 sm:flex-row sm:px-10">
              <Image
                src="/aura-orb.png"
                alt="Aura's glowing presence orb"
                width={180}
                height={180}
                className="size-32 shrink-0 rounded-full object-cover sm:size-44"
                priority
              />
              <div className="space-y-4 text-left">
                <div className="max-w-sm rounded-2xl rounded-tl-sm bg-secondary px-4 py-3 text-sm leading-relaxed">
                  I&apos;ve been feeling stretched thin lately and can&apos;t focus on what matters.
                </div>
                <div className="max-w-md rounded-2xl rounded-tl-sm bg-primary/15 px-4 py-3 text-sm leading-relaxed text-foreground ring-1 ring-primary/25">
                  That&apos;s worth slowing down for. Let&apos;s name the three things pulling at your
                  attention right now — then we&apos;ll gently set two of them aside for today.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}