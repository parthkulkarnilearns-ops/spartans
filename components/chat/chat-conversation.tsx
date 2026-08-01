'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ArrowUp, Menu, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type Message = {
  id: number
  role: 'user' | 'aura'
  content: string
}

const initialMessages: Message[] = [
  {
    id: 1,
    role: 'aura',
    content:
      "Hi Jordan, it's good to see you. How are you feeling as you start today?",
  },
  {
    id: 2,
    role: 'user',
    content: "Honestly a bit scattered. I have a lot going on and don't know where to begin.",
  },
  {
    id: 3,
    role: 'aura',
    content:
      "That's completely understandable. Let's create a little order together. If you had to pick just one thing that would make today feel like a win, what would it be?",
  },
]

const suggestions = [
  'Help me plan my day',
  'I feel overwhelmed',
  'Reflect on this week',
  'Set a new goal',
]

const auraReplies = [
  "Thank you for sharing that. Let's take it one breath at a time — what feels most within your control right now?",
  "I hear you. That sounds like a lot to carry. Which part of it weighs on you the most?",
  "That's a meaningful step. What's one small action you could take toward it in the next hour?",
  "Let's slow down together. Name just one thing you're grateful for today, however small.",
]

export function ChatConversation() {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, isTyping])

  function send(text: string) {
    const trimmed = text.trim()
    if (!trimmed) return

    const userMessage: Message = { id: Date.now(), role: 'user', content: trimmed }
    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    window.setTimeout(() => {
      const reply = auraReplies[Math.floor(Math.random() * auraReplies.length)]
      setMessages((prev) => [...prev, { id: Date.now() + 1, role: 'aura', content: reply }])
      setIsTyping(false)
    }, 1100)
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.nativeEvent.isComposing || e.keyCode === 229) return
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send(input)
    }
  }

  return (
    <div className="flex min-w-0 flex-1 flex-col">
      {/* top bar */}
      <div className="flex h-16 items-center justify-between gap-3 border-b border-border px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
            <Menu className="size-5" />
          </Button>
          <div>
            <h1 className="text-sm font-semibold leading-tight">Finding focus this week</h1>
            <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <span className="size-1.5 rounded-full bg-accent" />
              Aura is here with you
            </p>
          </div>
        </div>
        <span className="hidden items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground sm:inline-flex">
          <Sparkles className="size-3.5 text-primary" />
          Mindful mode
        </span>
      </div>

      {/* messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-2xl space-y-6 px-4 py-8 sm:px-6">
          {messages.map((m) => (
            <MessageBubble key={m.id} message={m} />
          ))}
          {isTyping && (
            <div className="flex items-end gap-3">
              <AuraAvatar />
              <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm bg-secondary px-4 py-3">
                <Dot /> <Dot delay="150ms" /> <Dot delay="300ms" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* input */}
      <div className="border-t border-border bg-background/80 px-4 py-4 backdrop-blur sm:px-6">
        <div className="mx-auto max-w-2xl">
          {messages.length <= initialMessages.length && (
            <div className="mb-3 flex flex-wrap gap-2">
              {suggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                >
                  {s}
                </button>
              ))}
            </div>
          )}
          <div className="flex items-end gap-2 rounded-2xl border border-border bg-card/70 p-2 shadow-lg transition-colors focus-within:border-primary/50 focus-within:ring-2 focus-within:ring-primary/20">
            <textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              rows={1}
              placeholder="Share what's on your mind…"
              className="max-h-40 min-h-10 flex-1 resize-none bg-transparent px-3 py-2 text-sm leading-relaxed text-foreground outline-none placeholder:text-muted-foreground"
              aria-label="Message Aura"
            />
            <Button
              size="icon"
              className="size-10 shrink-0 rounded-xl"
              onClick={() => send(input)}
              disabled={!input.trim()}
              aria-label="Send message"
            >
              <ArrowUp className="size-5" />
            </Button>
          </div>
          <p className="mt-2 text-center text-xs text-muted-foreground">
            Aura offers reflective guidance, not medical or crisis support.
          </p>
        </div>
      </div>
    </div>
  )
}

function MessageBubble({ message }: { message: Message }) {
  const isUser = message.role === 'user'
  return (
    <div className={cn('flex items-end gap-3', isUser && 'flex-row-reverse')}>
      {isUser ? (
        <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent/20 text-xs font-medium text-accent">
          J
        </span>
      ) : (
        <AuraAvatar />
      )}
      <div
        className={cn(
          'max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed',
          isUser
            ? 'rounded-br-sm bg-primary/15 text-foreground ring-1 ring-primary/25'
            : 'rounded-bl-sm bg-secondary text-secondary-foreground',
        )}
      >
        {message.content}
      </div>
    </div>
  )
}

function AuraAvatar() {
  return (
    <Image
      src="/aura-orb.png"
      alt="Aura"
      width={32}
      height={32}
      className="size-8 shrink-0 rounded-full object-cover ring-1 ring-primary/30"
    />
  )
}

function Dot({ delay = '0ms' }: { delay?: string }) {
  return (
    <span
      className="size-1.5 animate-bounce rounded-full bg-muted-foreground"
      style={{ animationDelay: delay }}
    />
  )
}