import { cn } from '../../../lib/cn.js'

const variants = {
  default: 'border-transparent bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]',
  secondary: 'border-transparent bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))]',
  destructive: 'border-transparent bg-[hsl(var(--destructive))] text-[hsl(var(--destructive-foreground))]',
  outline: 'border-[hsl(var(--border))] text-[hsl(var(--foreground))]',
  success: 'border-transparent bg-[hsl(var(--success)/0.15)] text-[hsl(var(--success))]',
  warning: 'border-transparent bg-[hsl(var(--warning)/0.15)] text-[hsl(var(--warning))]',
  muted: 'border-transparent bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))]',
  todo: 'border-transparent bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))]',
  progress: 'border-transparent bg-[hsl(var(--warning)/0.15)] text-[hsl(var(--warning))]',
  done: 'border-transparent bg-[hsl(var(--success)/0.15)] text-[hsl(var(--success))]',
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
