import { cn } from '../../../lib/cn.js'
import Avatar from './Avatar.jsx'
import Badge from './Badge.jsx'
import { IconButton } from './IconButton.jsx'
import { PaperPlaneIcon, SparkleIcon } from '../../../components/icons.jsx'

function CopyIcon({ size = 14, strokeWidth = 1.5 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  )
}

export function ChatBubble({ role = 'assistant', children, time }) {
  const isUser = role === 'user'
  return (
    <div className={cn('flex items-start gap-3', isUser && 'flex-row-reverse')}>
      {isUser
        ? <Avatar size="sm" initials="AJ" />
        : <span className="grid size-6 shrink-0 place-items-center rounded-full bg-[hsl(var(--primary)/0.15)] text-[hsl(var(--primary))]"><SparkleIcon size={14} strokeWidth={1.5} /></span>}
      <div className={cn('max-w-[80%]', isUser && 'text-end')}>
        <div className={cn(
          'inline-block rounded-[var(--radius)] px-3 py-2 text-sm',
          isUser
            ? 'bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]'
            : 'bg-[hsl(var(--muted))] text-[hsl(var(--foreground))]',
        )}>
          {children}
        </div>
        {time ? <div className="mt-1 text-xs text-[hsl(var(--muted-foreground))]">{time}</div> : null}
      </div>
    </div>
  )
}

export function TypingIndicator() {
  return (
    <div className="inline-flex items-center gap-1 rounded-[var(--radius)] bg-[hsl(var(--muted))] px-3 py-2.5" aria-label="Assistant is typing">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="size-1.5 animate-bounce rounded-full bg-[hsl(var(--muted-foreground))]"
          style={{ animationDelay: `${i * 150}ms` }}
        />
      ))}
    </div>
  )
}

export function PromptBar({ value, onChange, onSubmit, placeholder = 'Ask Tawakkalna anything…' }) {
  return (
    <form
      onSubmit={(e) => { e.preventDefault(); onSubmit?.() }}
      className="flex items-center gap-2 rounded-[var(--radius)] border border-[hsl(var(--input))] bg-[hsl(var(--background))] p-2 shadow-[var(--shadow-sm)] focus-within:border-[hsl(var(--ring))] focus-within:ring-2 focus-within:ring-[hsl(var(--ring)/0.2)]"
    >
      <input
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        className="min-w-0 flex-1 bg-transparent px-2 text-sm text-[hsl(var(--foreground))] outline-none placeholder:text-[hsl(var(--muted-foreground))]"
      />
      <IconButton label="Send" variant="ghost" onClick={onSubmit} className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary)/0.9)] hover:text-[hsl(var(--primary-foreground))]">
        <PaperPlaneIcon size={14} strokeWidth={1.5} />
      </IconButton>
    </form>
  )
}

export function AiResponseCard({ model = 'Fable 5', children, onCopy }) {
  return (
    <div className="w-full rounded-[var(--radius)] border border-[hsl(var(--border))] bg-[hsl(var(--card))] shadow-[var(--shadow-sm)]">
      <div className="flex items-center gap-2 border-b border-[hsl(var(--border))] px-4 py-2.5">
        <Badge variant="success">AI</Badge>
        <span className="text-xs text-[hsl(var(--muted-foreground))]">{model}</span>
        <IconButton label="Copy response" size="sm" variant="ghost" onClick={onCopy} className="ms-auto">
          <CopyIcon size={14} strokeWidth={1.5} />
        </IconButton>
      </div>
      <div className="p-4 text-sm leading-relaxed text-[hsl(var(--foreground))]">{children}</div>
    </div>
  )
}

export function ModelSelector({ model = 'Fable 5', tokens = '14.0M', onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex h-9 items-center gap-2 rounded-[calc(var(--radius)-2px)] border border-[hsl(var(--input))] bg-[hsl(var(--background))] px-3 text-sm font-medium text-[hsl(var(--foreground))] shadow-[var(--shadow-sm)] transition-colors hover:bg-[hsl(var(--accent))] v2-focus-ring"
    >
      <SparkleIcon size={14} strokeWidth={1.5} className="text-[hsl(var(--primary))]" />
      {model}
      <Badge variant="muted">{tokens} ctx</Badge>
    </button>
  )
}
