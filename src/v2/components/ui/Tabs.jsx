import { cn } from '../../../lib/cn.js'
import { focusRing, toolbar, toolbarBordered } from './primitives.js'

export function Tab({ active = false, muted = false, className, children, ...props }) {
  const Tag = props.href ? 'a' : 'button'
  return (
    <Tag
      type={Tag === 'button' ? 'button' : undefined}
      aria-current={active ? 'page' : undefined}
      className={cn(
        'inline-flex h-8 shrink-0 items-center justify-center rounded-[calc(var(--radius)-2px)] px-3 text-sm font-medium transition-colors',
        focusRing,
        active
          ? 'bg-[hsl(var(--background))] text-[hsl(var(--foreground))] shadow-[var(--shadow-sm)]'
          : muted
            ? 'text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--accent-foreground))]'
            : 'text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--accent-foreground))]',
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}

export function Toolbar({ left, right, bordered = true, className }) {
  return (
    <div className={cn(toolbar, bordered && toolbarBordered, className)}>
      <div className="flex min-w-0 items-center gap-2">{left}</div>
      <div className="flex shrink-0 items-center gap-2">{right}</div>
    </div>
  )
}
