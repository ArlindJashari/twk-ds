import { useRef, useState } from 'react'
import { cn } from '../../../lib/cn.js'
import { useDismiss } from '../../../lib/hooks.js'

export function Popover({ trigger, children, align = 'start', className }) {
  const [open, setOpen] = useState(false)
  const ref = useDismiss(open, () => setOpen(false))
  return (
    <div ref={ref} className="relative inline-block">
      <span onClick={() => setOpen((v) => !v)}>{trigger}</span>
      {open ? (
        <div
          className={cn(
            'absolute z-40 mt-2 min-w-[220px] rounded-[var(--radius)] border border-[hsl(var(--border))] bg-[hsl(var(--popover))] p-3 text-[hsl(var(--popover-foreground))] shadow-[var(--shadow-md)]',
            align === 'end' ? 'end-0' : 'start-0',
            className,
          )}
        >
          {children}
        </div>
      ) : null}
    </div>
  )
}

export function Tooltip({ label, children }) {
  return (
    <span className="group relative inline-flex">
      {children}
      <span
        role="tooltip"
        className="pointer-events-none absolute -top-1 left-1/2 z-40 -translate-x-1/2 -translate-y-full whitespace-nowrap rounded-[calc(var(--radius)-2px)] bg-[hsl(var(--foreground))] px-2 py-1 text-xs font-medium text-[hsl(var(--background))] opacity-0 shadow-[var(--shadow-md)] transition-opacity group-hover:opacity-100"
      >
        {label}
      </span>
    </span>
  )
}

export function HoverCard({ trigger, children }) {
  return (
    <span className="group relative inline-flex">
      {trigger}
      <div className="invisible absolute top-full left-0 z-40 mt-2 w-64 rounded-[var(--radius)] border border-[hsl(var(--border))] bg-[hsl(var(--popover))] p-4 text-sm opacity-0 shadow-[var(--shadow-md)] transition-opacity group-hover:visible group-hover:opacity-100">
        {children}
      </div>
    </span>
  )
}
