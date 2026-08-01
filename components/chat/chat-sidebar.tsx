'use client'

import Link from 'next/link'
import { Plus, MessageCircle, Sparkles, Settings, Target } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const conversations = [
  { id: 1, title: 'Finding focus this week', active: true },
  { id: 2, title: 'Morning routine ideas' },
  { id: 3, title: 'Handling a tough conversation' },
  { id: 4, title: 'Career reflection' },
  { id: 5, title: 'Evening wind-down' },
]

export function ChatSidebar() {
  return (
    <aside className="hidden w-72 shrink-0 flex-col border-r border-sidebar-border bg-sidebar md:flex">
      <div className="flex h-16 items-center gap-2 border-b border-sidebar-border px-5">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex size-8 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30">
            <Sparkles className="size-4" />
          </span>
          <span className="text-lg font-semibold tracking-tight">Aura</span>
        </Link>
      </div>

      <div className="p-3">
        <Button className="w-full justify-start gap-2 rounded-xl">
          <Plus className="size-4" />
          New conversation
        </Button>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto px-3 pb-3" aria-label="Conversations">
        <p className="px-2 pb-2 pt-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Recent
        </p>
        {conversations.map((c) => (
          <button
            key={c.id}
            className={cn(
              'flex w-full items-center gap-2 rounded-lg px-2 py-2 text-left text-sm transition-colors',
              c.active
                ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                : 'text-muted-foreground hover:bg-sidebar-accent/60 hover:text-foreground',
            )}
          >
            <MessageCircle className="size-4 shrink-0" />
            <span className="truncate">{c.title}</span>
          </button>
        ))}
      </nav>

      <div className="border-t border-sidebar-border p-3">
        <button className="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-left text-sm text-muted-foreground transition-colors hover:bg-sidebar-accent/60 hover:text-foreground">
          <Target className="size-4" />
          My goals
        </button>
        <button className="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-left text-sm text-muted-foreground transition-colors hover:bg-sidebar-accent/60 hover:text-foreground">
          <Settings className="size-4" />
          Settings
        </button>
        <div className="mt-2 flex items-center gap-3 rounded-xl bg-sidebar-accent/50 px-3 py-2">
          <span className="flex size-8 items-center justify-center rounded-full bg-accent/20 text-sm font-medium text-accent">
            J
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium">Jordan Ellis</p>
            <p className="truncate text-xs text-muted-foreground">Free plan</p>
          </div>
        </div>
      </div>
    </aside>
  )
}