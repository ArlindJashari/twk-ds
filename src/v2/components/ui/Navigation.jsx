import { cn } from '../../../lib/cn.js'
import { focusRing } from './primitives.js'

export function Breadcrumb({ items = [] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center gap-1.5 text-sm">
        {items.map((it, i) => {
          const last = i === items.length - 1
          return (
            <li key={it.label} className="flex items-center gap-1.5">
              {last
                ? <span aria-current="page" className="font-medium text-[hsl(var(--foreground))]">{it.label}</span>
                : <a href={it.href} className={cn('text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]', focusRing)}>{it.label}</a>}
              {!last ? <span className="text-[hsl(var(--muted-foreground))]" aria-hidden>/</span> : null}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export function Pagination({ page = 1, total = 1, onPrev, onNext }) {
  const btn = 'inline-flex h-8 items-center rounded-[calc(var(--radius)-2px)] border border-[hsl(var(--border))] bg-[hsl(var(--background))] px-3 text-sm font-medium text-[hsl(var(--foreground))] shadow-[var(--shadow-sm)] transition-colors hover:bg-[hsl(var(--accent))] disabled:opacity-50 disabled:pointer-events-none'
  return (
    <nav className="flex items-center gap-2" aria-label="Pagination">
      <button type="button" className={cn(btn, focusRing)} onClick={onPrev} disabled={page <= 1}>Previous</button>
      <span className="px-2 text-sm text-[hsl(var(--muted-foreground))]">Page {page} of {total}</span>
      <button type="button" className={cn(btn, focusRing)} onClick={onNext} disabled={page >= total}>Next</button>
    </nav>
  )
}

export function NavItem({ icon: Icon, label, active, href = '#', onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      aria-current={active ? 'page' : undefined}
      className={cn(
        'flex h-8 items-center gap-2 rounded-[calc(var(--radius)-2px)] px-2.5 text-sm font-medium transition-colors',
        active
          ? 'bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))]'
          : 'text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--accent-foreground))]',
        focusRing,
      )}
    >
      {Icon ? <Icon size={14} strokeWidth={1.5} className={active ? 'text-[hsl(var(--primary))]' : ''} /> : null}
      {label}
    </a>
  )
}

export function Kbd({ children, className }) {
  return (
    <kbd className={cn('inline-grid h-5 min-w-5 place-items-center rounded-[4px] border border-[hsl(var(--border))] bg-[hsl(var(--muted))] px-1 font-mono text-[10px] font-medium text-[hsl(var(--muted-foreground))]', className)}>
      {children}
    </kbd>
  )
}

export function KbdCombo({ keys = [] }) {
  return (
    <span className="inline-flex items-center gap-1">
      {keys.map((k, i) => <Kbd key={i}>{k}</Kbd>)}
    </span>
  )
}
