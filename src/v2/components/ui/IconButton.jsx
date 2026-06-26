import { cn } from '../../../lib/cn.js'
import { focusRing } from './primitives.js'

export function IconButton({ label, size = 'md', variant = 'ghost', className, children, ...props }) {
  const sizes = { sm: 'size-7', md: 'size-8', lg: 'size-9' }
  const variants = {
    ghost: 'text-[hsl(var(--v2-muted-foreground))] hover:bg-[hsl(var(--v2-accent))] hover:text-[hsl(var(--v2-accent-foreground))]',
    outline: 'border border-[hsl(var(--v2-border))] bg-[hsl(var(--v2-background))] shadow-[var(--v2-shadow-sm)] hover:bg-[hsl(var(--v2-accent))]',
    filled: 'border border-[hsl(var(--v2-border))] bg-[hsl(var(--v2-card))] shadow-[var(--v2-shadow-sm)] hover:bg-[hsl(var(--v2-accent))]',
  }
  return (
    <button
      type="button"
      aria-label={label}
      className={cn(
        'inline-grid shrink-0 place-items-center rounded-[calc(var(--v2-radius)-2px)] transition-colors',
        sizes[size],
        variants[variant],
        focusRing,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
