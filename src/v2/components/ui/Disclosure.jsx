import { useState } from 'react'
import { cn } from '../../../lib/cn.js'
import { ChevronDown } from '../../../components/icons.jsx'

export function Accordion({ items = [] }) {
  const [open, setOpen] = useState(() => items.findIndex((i) => i.defaultOpen))
  return (
    <div className="w-full divide-y divide-[hsl(var(--border))] rounded-[var(--radius)] border border-[hsl(var(--border))]">
      {items.map((it, i) => {
        const isOpen = open === i
        return (
          <div key={it.title}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-2 px-4 py-3 text-start text-sm font-medium text-[hsl(var(--foreground))]"
            >
              {it.title}
              <ChevronDown size={14} strokeWidth={1.75} className={cn('shrink-0 text-[hsl(var(--muted-foreground))] transition-transform', isOpen && 'rotate-180')} />
            </button>
            {isOpen ? <div className="px-4 pb-3 text-sm text-[hsl(var(--muted-foreground))]">{it.content}</div> : null}
          </div>
        )
      })}
    </div>
  )
}

export function Collapsible({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="w-full">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex items-center gap-1.5 text-sm font-medium text-[hsl(var(--foreground))]"
      >
        <ChevronDown size={14} strokeWidth={1.75} className={cn('text-[hsl(var(--muted-foreground))] transition-transform', open && 'rotate-180')} />
        {title}
      </button>
      {open ? <div className="mt-2">{children}</div> : null}
    </div>
  )
}

export function AspectRatio({ ratio = 16 / 9, className, children }) {
  return (
    <div className={cn('relative w-full overflow-hidden rounded-[var(--radius)]', className)} style={{ aspectRatio: ratio }}>
      <div className="absolute inset-0">{children}</div>
    </div>
  )
}
