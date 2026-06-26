import { cn } from '../../../lib/cn.js'
import Button from './Button.jsx'

const alertTones = {
  info: 'border-[hsl(var(--info)/0.4)] bg-[hsl(var(--info)/0.08)] text-[hsl(var(--info))]',
  success: 'border-[hsl(var(--success)/0.4)] bg-[hsl(var(--success)/0.08)] text-[hsl(var(--success))]',
  warning: 'border-[hsl(var(--warning)/0.4)] bg-[hsl(var(--warning)/0.08)] text-[hsl(var(--warning))]',
  danger: 'border-[hsl(var(--destructive)/0.4)] bg-[hsl(var(--destructive)/0.08)] text-[hsl(var(--destructive))]',
}

export function Alert({ variant = 'info', title, children, className }) {
  return (
    <div role="alert" className={cn('w-full rounded-[var(--radius)] border p-4', alertTones[variant], className)}>
      {title ? <p className="text-sm font-semibold">{title}</p> : null}
      {children ? <p className="mt-1 text-sm text-[hsl(var(--muted-foreground))]">{children}</p> : null}
    </div>
  )
}

export function Progress({ value = 0, className }) {
  return (
    <div role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100} className={cn('h-2 w-full overflow-hidden rounded-full bg-[hsl(var(--muted))]', className)}>
      <div className="h-full rounded-full bg-[hsl(var(--primary))] transition-[width]" style={{ width: `${value}%` }} />
    </div>
  )
}

export function Skeleton({ className }) {
  return <div className={cn('animate-pulse rounded-[calc(var(--radius)-2px)] bg-[hsl(var(--muted))]', className)} />
}

export function SkeletonGroup({ className }) {
  return (
    <div className={cn('w-full space-y-2', className)}>
      <div className="flex items-center gap-3">
        <Skeleton className="size-10 rounded-full" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-3 w-1/3" />
          <Skeleton className="h-3 w-2/3" />
        </div>
      </div>
      <Skeleton className="h-3 w-full" />
      <Skeleton className="h-3 w-5/6" />
    </div>
  )
}

export function EmptyState({ icon: Icon, title, description, actionLabel, onAction, className }) {
  return (
    <div className={cn('flex flex-col items-center justify-center rounded-[var(--radius)] border border-dashed border-[hsl(var(--border))] px-6 py-12 text-center', className)}>
      {Icon ? <Icon size={32} strokeWidth={1.5} className="mb-3 text-[hsl(var(--muted-foreground))]" /> : null}
      <h3 className="text-sm font-semibold text-[hsl(var(--foreground))]">{title}</h3>
      {description ? <p className="mt-1 max-w-sm text-sm text-[hsl(var(--muted-foreground))]">{description}</p> : null}
      {actionLabel ? <Button className="mt-4" size="sm" onClick={onAction}>{actionLabel}</Button> : null}
    </div>
  )
}

export function Separator({ orientation = 'horizontal', className }) {
  return (
    <div
      role="separator"
      aria-orientation={orientation}
      className={cn('bg-[hsl(var(--border))]', orientation === 'vertical' ? 'h-full w-px' : 'h-px w-full', className)}
    />
  )
}
