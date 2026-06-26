import { cn } from '../../../lib/cn.js'
import { focusRing } from './primitives.js'
import Button from './Button.jsx'

export function StatCard({ label, value, hint, href, className }) {
  const Tag = href ? 'a' : 'div'
  return (
    <Tag
      href={href}
      className={cn(
        'flex flex-col rounded-[var(--radius)] border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-4 shadow-[var(--shadow-sm)]',
        href && ['transition-colors hover:bg-[hsl(var(--accent))]', focusRing],
        className,
      )}
    >
      <span className="text-xs font-medium uppercase tracking-wide text-[hsl(var(--muted-foreground))]">{label}</span>
      <span className="mt-1 text-2xl font-semibold tracking-tight text-[hsl(var(--foreground))] tabular-nums">{value}</span>
      {hint ? <span className="mt-1 text-xs text-[hsl(var(--muted-foreground))]">{hint}</span> : null}
    </Tag>
  )
}

const moduleTones = {
  usability: 'bg-[hsl(var(--success)/0.15)] text-[hsl(var(--success))]',
  stories: 'bg-[hsl(var(--warning)/0.15)] text-[hsl(var(--warning))]',
  directory: 'bg-[hsl(var(--info)/0.15)] text-[hsl(var(--info))]',
}

export function ModuleCard({ title, description, href, metrics, icon: Icon, tone = 'usability' }) {
  return (
    <a
      href={href}
      className={cn(
        'flex flex-col rounded-[var(--radius)] border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-4 shadow-[var(--shadow-sm)] transition-colors hover:bg-[hsl(var(--accent))]',
        focusRing,
      )}
    >
      <div className="flex items-start gap-3">
        {Icon ? (
          <span className={cn('grid size-8 shrink-0 place-items-center rounded-md', moduleTones[tone] ?? moduleTones.usability)}>
            <Icon size={14} strokeWidth={1.5} />
          </span>
        ) : null}
        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-semibold text-[hsl(var(--foreground))]">{title}</h3>
          <p className="mt-1 text-xs leading-relaxed text-[hsl(var(--muted-foreground))]">{description}</p>
        </div>
      </div>
      {metrics?.length ? (
        <dl className="mt-4 flex flex-wrap gap-x-4 gap-y-2 border-t border-[hsl(var(--border))] pt-4">
          {metrics.map((m) => (
            <div key={m.label} className="flex items-baseline gap-1.5">
              <dt className="text-xs text-[hsl(var(--muted-foreground))]">{m.label}</dt>
              <dd className="text-sm font-medium tabular-nums text-[hsl(var(--foreground))]">{m.value}</dd>
            </div>
          ))}
        </dl>
      ) : null}
    </a>
  )
}

export function ActivityItem({ text, time }) {
  return (
    <div className="flex h-9 items-center justify-between gap-3 rounded-md px-2 transition-colors hover:bg-[hsl(var(--accent))]">
      <span className="min-w-0 truncate text-sm text-[hsl(var(--foreground))]">{text}</span>
      <span className="shrink-0 text-xs tabular-nums text-[hsl(var(--muted-foreground))]">{time}</span>
    </div>
  )
}

export function ViewPage({
  variant = 'empty',
  toolbar,
  emptyTitle,
  emptyDescription,
  emptyActionLabel,
  onEmptyAction,
  children,
}) {
  if (variant === 'empty') {
    return (
      <div className="flex min-h-0 flex-1 flex-col">
        {toolbar}
        <div className="flex flex-1 flex-col items-center justify-center px-6 py-16 text-center">
          <h2 className="text-lg font-semibold text-[hsl(var(--foreground))]">{emptyTitle}</h2>
          <p className="mt-2 max-w-md text-sm text-[hsl(var(--muted-foreground))]">{emptyDescription}</p>
          {emptyActionLabel ? (
            <Button className="mt-6" onClick={onEmptyAction}>
              {emptyActionLabel}
            </Button>
          ) : null}
        </div>
      </div>
    )
  }
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      {toolbar}
      {children}
    </div>
  )
}

export function SelectionBar({ count, onClear }) {
  if (!count) return null
  return (
    <div className="absolute inset-x-4 bottom-4 z-20 flex h-10 items-center justify-between rounded-[var(--radius)] border border-[hsl(var(--border))] bg-[hsl(var(--popover))] px-4 shadow-[var(--shadow-sm)]">
      <span className="text-sm font-medium text-[hsl(var(--foreground))]">{count} selected</span>
      <Button variant="ghost" size="sm" onClick={onClear}>Clear</Button>
    </div>
  )
}
