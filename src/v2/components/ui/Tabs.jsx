import { cn } from '../../../lib/cn.js'
import { focusRing, toolbar, toolbarBordered } from './primitives.js'

export function Tab({ active = false, muted = false, className, children, ...props }) {
  const Tag = props.href ? 'a' : 'button'
  return (
    <Tag
      type={Tag === 'button' ? 'button' : undefined}
      aria-current={active ? 'page' : undefined}
      className={cn(
        'inline-flex h-8 shrink-0 items-center justify-center rounded-[calc(var(--v2-radius)-2px)] px-3 text-sm font-medium transition-colors',
        focusRing,
        active
          ? 'bg-[hsl(var(--v2-background))] text-[hsl(var(--v2-foreground))] shadow-[var(--v2-shadow-sm)]'
          : muted
            ? 'text-[hsl(var(--v2-muted-foreground))] hover:bg-[hsl(var(--v2-accent))] hover:text-[hsl(var(--v2-accent-foreground))]'
            : 'text-[hsl(var(--v2-muted-foreground))] hover:bg-[hsl(var(--v2-accent))] hover:text-[hsl(var(--v2-accent-foreground))]',
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
