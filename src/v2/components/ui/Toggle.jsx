import { cn } from '../../../lib/cn.js'
import { focusRing } from './primitives.js'

export function Toggle({ pressed, onClick, className, children }) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className={cn(
        'inline-flex h-8 items-center justify-center gap-2 rounded-[calc(var(--radius)-2px)] px-3 text-sm font-medium transition-colors',
        pressed
          ? 'bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))]'
          : 'text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--accent-foreground))]',
        focusRing,
        className,
      )}
    >
      {children}
    </button>
  )
}

export function ToggleGroup({ options = [], value, onChange, className }) {
  return (
    <div className={cn('inline-flex items-center gap-1 rounded-[var(--radius)] border border-[hsl(var(--border))] bg-[hsl(var(--secondary))] p-1', className)}>
      {options.map((o) => {
        const key = o.value ?? o
        const active = value === key
        return (
          <button
            key={key}
            type="button"
            aria-pressed={active}
            onClick={() => onChange?.(key)}
            className={cn(
              'inline-flex h-7 items-center gap-1.5 rounded-[calc(var(--radius)-4px)] px-2.5 text-sm font-medium transition-colors',
              active
                ? 'bg-[hsl(var(--background))] text-[hsl(var(--foreground))] shadow-[var(--shadow-sm)]'
                : 'text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]',
              focusRing,
            )}
          >
            {o.icon ? <o.icon size={14} strokeWidth={1.5} /> : null}
            {o.label ?? o}
          </button>
        )
      })}
    </div>
  )
}
