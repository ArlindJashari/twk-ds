import { cn } from '../../../lib/cn.js'
import { focusRing } from './primitives.js'

export function Link({ href, className, children, ...props }) {
  return (
    <a
      href={href}
      className={cn(
        'text-sm font-medium text-[hsl(var(--primary))] underline-offset-4 hover:underline',
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
        'inline-flex h-8 items-center gap-2 rounded-[calc(var(--radius)-2px)] border border-[hsl(var(--border))]',
        'bg-[hsl(var(--background))] px-3 text-sm font-medium text-[hsl(var(--foreground))]',
        'shadow-[var(--shadow-sm)] transition-colors hover:bg-[hsl(var(--accent))]',
        focusRing,
      )}
    >
      {Icon ? <Icon size={14} strokeWidth={1.5} className="text-[hsl(var(--muted-foreground))]" /> : null}
      {children}
    </a>
  )
}
