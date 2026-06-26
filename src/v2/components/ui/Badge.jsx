import { cn } from '../../../lib/cn.js'

const variants = {
  default: 'border-transparent bg-[hsl(var(--v2-primary))] text-[hsl(var(--v2-primary-foreground))]',
  secondary: 'border-transparent bg-[hsl(var(--v2-secondary))] text-[hsl(var(--v2-secondary-foreground))]',
  destructive: 'border-transparent bg-[hsl(var(--v2-destructive))] text-[hsl(var(--v2-destructive-foreground))]',
  outline: 'border-[hsl(var(--v2-border))] text-[hsl(var(--v2-foreground))]',
  success: 'border-transparent bg-[hsl(var(--v2-success)/0.15)] text-[hsl(var(--v2-success))]',
  warning: 'border-transparent bg-[hsl(var(--v2-warning)/0.15)] text-[hsl(var(--v2-warning))]',
  muted: 'border-transparent bg-[hsl(var(--v2-muted))] text-[hsl(var(--v2-muted-foreground))]',
  todo: 'border-transparent bg-[hsl(var(--v2-muted))] text-[hsl(var(--v2-muted-foreground))]',
  progress: 'border-transparent bg-[hsl(var(--v2-warning)/0.15)] text-[hsl(var(--v2-warning))]',
  done: 'border-transparent bg-[hsl(var(--v2-success)/0.15)] text-[hsl(var(--v2-success))]',
}

const base = 'inline-flex shrink-0 items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold leading-none'

export default function Badge({ variant = 'default', dot = false, className, children }) {
  return (
    <span className={cn(base, variants[variant] ?? variants.muted, dot && 'gap-1.5', className)}>
      {dot ? <span className="size-1.5 rounded-full bg-current opacity-80" aria-hidden /> : null}
      {children}
    </span>
  )
}
