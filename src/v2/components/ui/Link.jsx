import { cn } from '../../../lib/cn.js'
import { focusRing } from './primitives.js'

export function Link({ href, className, children, ...props }) {
  return (
    <a
      href={href}
      className={cn(
        'text-sm font-medium text-[hsl(var(--v2-primary))] underline-offset-4 hover:underline',
        focusRing,
        className,
      )}
      {...props}
    >
      {children}
    </a>
  )
}

export function Tag({ href, icon: Icon, children }) {
  return (
    <a
      href={href}
      className={cn(
        'inline-flex h-8 items-center gap-2 rounded-[calc(var(--v2-radius)-2px)] border border-[hsl(var(--v2-border))]',
        'bg-[hsl(var(--v2-background))] px-3 text-sm font-medium text-[hsl(var(--v2-foreground))]',
        'shadow-[var(--v2-shadow-sm)] transition-colors hover:bg-[hsl(var(--v2-accent))]',
        focusRing,
      )}
    >
      {Icon ? <Icon size={14} strokeWidth={1.5} className="text-[hsl(var(--v2-muted-foreground))]" /> : null}
      {children}
    </a>
  )
}
