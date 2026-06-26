import { cn } from '../../../lib/cn.js'
import { focusRing } from './primitives.js'

export function IconButton({ label, size = 'md', variant = 'ghost', className, children, ...props }) {
  const sizes = { sm: 'size-7', md: 'size-8', lg: 'size-9' }
  const variants = {
    ghost: 'text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--accent-foreground))]',
    outline: 'border border-[hsl(var(--border))] bg-[hsl(var(--background))] shadow-[var(--shadow-sm)] hover:bg-[hsl(var(--accent))]',
    filled: 'border border-[hsl(var(--border))] bg-[hsl(var(--card))] shadow-[var(--shadow-sm)] hover:bg-[hsl(var(--accent))]',
  }
  return (
    <button
      type="button"
      aria-label={label}
      className={cn(
        'inline-grid shrink-0 place-items-center rounded-[calc(var(--radius)-2px)] transition-colors',
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
