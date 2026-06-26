import { useRef, useState } from 'react'
import { cn } from '../../../lib/cn.js'
import { focusRing } from './primitives.js'
import { useDismiss } from '../../../lib/hooks.js'
import { Kbd } from './Navigation.jsx'

export function MenuItem({ children, keys, onClick, destructive }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'flex w-full items-center gap-2 rounded-[calc(var(--radius)-4px)] px-2 py-1.5 text-start text-sm transition-colors',
        destructive
          ? 'text-[hsl(var(--destructive))] hover:bg-[hsl(var(--destructive)/0.1)]'
          : 'text-[hsl(var(--popover-foreground))] hover:bg-[hsl(var(--accent))]',
        focusRing,
      )}
    >
      <span className="flex-1">{children}</span>
      {keys ? <span className="flex gap-1">{keys.map((k, i) => <Kbd key={i}>{k}</Kbd>)}</span> : null}
    </button>
  )
}

export function MenuSeparator() {
  return <div className="my-1 h-px bg-[hsl(var(--border))]" role="separator" />
}

export function MenuLabel({ children }) {
  return <div className="px-2 py-1 text-xs font-medium text-[hsl(var(--muted-foreground))]">{children}</div>
}

function Panel({ children, className }) {
  return (
    <div className={cn('z-40 min-w-[200px] rounded-[var(--radius)] border border-[hsl(var(--border))] bg-[hsl(var(--popover))] p-1 shadow-[var(--shadow-md)]', className)}>
      {children}
    </div>
  )
}

export function DropdownMenu({ trigger, children, align = 'start' }) {
  const [open, setOpen] = useState(false)
  const ref = useDismiss(open, () => setOpen(false))
  return (
    <div ref={ref} className="relative inline-block">
      <span onClick={() => setOpen((v) => !v)}>{trigger}</span>
      {open ? <Panel className={cn('absolute mt-2', align === 'end' ? 'end-0' : 'start-0')}>{children}</Panel> : null}
    </div>
  )
}

export function ContextMenu({ trigger, children }) {
  const [pos, setPos] = useState(null)
  const ref = useDismiss(!!pos, () => setPos(null))
  return (
    <div ref={ref} className="relative inline-block">
      <span onContextMenu={(e) => { e.preventDefault(); setPos({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY }) }}>{trigger}</span>
      {pos ? <Panel className="absolute" >{children}</Panel> : null}
    </div>
  )
}

export function CommandPalette({ open, onClose, items = [] }) {
  const [q, setQ] = useState('')
  if (!open) return null
  const filtered = items.filter((i) => i.label.toLowerCase().includes(q.toLowerCase()))
  return (
    <div className="fixed inset-0 z-50 grid place-items-start justify-center p-4 pt-[12vh]" role="dialog" aria-modal="true" aria-label="Command palette">
      <div className="absolute inset-0 bg-[hsl(var(--foreground)/0.4)] backdrop-blur-[1px]" onClick={onClose} aria-hidden />
      <div className="relative z-10 w-full max-w-lg overflow-hidden rounded-[var(--radius)] border border-[hsl(var(--border))] bg-[hsl(var(--popover))] shadow-[var(--shadow-lg)]">
        <input
          autoFocus
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Type a command or search…"
          className="w-full border-b border-[hsl(var(--border))] bg-transparent px-4 py-3 text-sm text-[hsl(var(--foreground))] outline-none placeholder:text-[hsl(var(--muted-foreground))]"
        />
        <div className="max-h-[300px] overflow-y-auto p-1">
          {filtered.length ? filtered.map((it) => (
            <button key={it.label} type="button" onClick={() => { it.onSelect?.(); onClose?.() }} className="flex w-full items-center gap-2 rounded-[calc(var(--radius)-4px)] px-3 py-2 text-start text-sm text-[hsl(var(--popover-foreground))] hover:bg-[hsl(var(--accent))]">
              {it.icon ? <it.icon size={14} strokeWidth={1.5} className="text-[hsl(var(--muted-foreground))]" /> : null}
              {it.label}
            </button>
          )) : <p className="px-3 py-6 text-center text-sm text-[hsl(var(--muted-foreground))]">No results</p>}
        </div>
      </div>
    </div>
  )
}
