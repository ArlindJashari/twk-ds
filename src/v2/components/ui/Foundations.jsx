import { cn } from '../../../lib/cn.js'

export function Text({ variant = 'body', as, className, children, ...props }) {
  const styles = {
    page: 'text-sm font-medium text-[hsl(var(--foreground))]',
    title: 'text-2xl font-semibold tracking-tight text-[hsl(var(--foreground))]',
    section: 'text-sm font-semibold text-[hsl(var(--foreground))]',
    body: 'text-sm text-[hsl(var(--foreground))]',
    sub: 'text-sm text-[hsl(var(--muted-foreground))]',
    caption: 'text-xs text-[hsl(var(--muted-foreground))]',
    label: 'text-xs font-medium uppercase tracking-wide text-[hsl(var(--muted-foreground))]',
    mono: 'font-mono text-xs text-[hsl(var(--muted-foreground))]',
  }
  const Tag = as ?? (variant === 'title' ? 'h1' : variant === 'section' ? 'h2' : 'p')
  return <Tag className={cn(styles[variant], className)} {...props}>{children}</Tag>
}

// swatch: pass a raw css color (var or hsl(var(...))) so brand ramp + semantic both work
export function ColorSwatch({ color, name, value }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="h-14 w-full rounded-[calc(var(--radius)-2px)] border border-[hsl(var(--border))]" style={{ background: color }} />
      <div className="text-xs font-medium text-[hsl(var(--foreground))]">{name}</div>
      {value ? <div className="font-mono text-[10px] text-[hsl(var(--muted-foreground))]">{value}</div> : null}
    </div>
  )
}

export function TokenGrid({ className, children }) {
  return <div className={cn('grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6', className)}>{children}</div>
}
