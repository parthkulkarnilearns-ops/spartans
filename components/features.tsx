import { Compass, HeartHandshake, Moon, Target, TrendingUp, Sparkles } from 'lucide-react'

const features = [
  {
    icon: Compass,
    title: 'Clarity on demand',
    description:
      'Talk through anything on your mind. Aura reflects your thoughts back with structure so the path forward feels obvious.',
  },
  {
    icon: Target,
    title: 'Goals that stick',
    description:
      'Break big ambitions into small, achievable steps and get gentle nudges to keep the momentum going.',
  },
  {
    icon: TrendingUp,
    title: 'Habit building',
    description:
      'Design routines around your energy, track streaks, and celebrate the tiny wins that compound over time.',
  },
  {
    icon: HeartHandshake,
    title: 'Judgment-free space',
    description:
      'A private, always-available companion that meets you with warmth wherever you are in your day.',
  },
  {
    icon: Moon,
    title: 'Evening reflections',
    description:
      'Wind down with guided prompts that help you process the day and rest with a quieter mind.',
  },
  {
    icon: Sparkles,
    title: 'Personalized guidance',
    description:
      'Aura remembers your context and adapts its coaching style to what actually helps you move.',
  },
]

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium text-primary">Why Aura</p>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Coaching that adapts to your life, not the other way around
        </h2>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          Every conversation builds on the last, so Aura becomes more helpful the more you share.
        </p>
      </div>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="group rounded-2xl border border-border bg-card/50 p-6 transition-colors hover:border-primary/40 hover:bg-card"
          >
            <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20 transition-colors group-hover:bg-primary/15">
              <feature.icon className="size-5" />
            </span>
            <h3 className="mt-5 text-lg font-medium">{feature.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}