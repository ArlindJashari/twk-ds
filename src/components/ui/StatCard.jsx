import { cn } from '../../lib/cn.js'
import { focusRing } from './primitives.js'

function resolveTrend(hint, trend) {
  if (trend) return trend
  if (typeof hint === 'string' && hint.startsWith('▲')) return 'up'
  if (typeof hint === 'string' && hint.startsWith('▼')) return 'down'
  if (typeof hint === 'string' && (hint.startsWith('→') || hint.startsWith('•'))) return 'neutral'
  return null
}

const trendHintClass = {
  up: 'text-success',
  down: 'text-danger',
  neutral: 'text-warning',
}

export function StatCard({ label, value, hint, trend, href, className }) {
  const Tag = href ? 'a' : 'div'
  const trendKey = resolveTrend(hint, trend)
  return (
    <Tag
      href={href}
      className={cn(
        'flex flex-col rounded-lg border border-line-subtle bg-content p-16 shadow-stroke-faint',
        href && [focusRing, 'transition-colors hover:bg-hover'],
        className,
      )}
    >
      <span className="text-[11px] font-medium uppercase tracking-wide text-faint">{label}</span>
      <span className="mt-6 text-[24px] font-semibold tracking-[-0.02em] text-ink tabular-nums">{value}</span>
      {hint ? (
        <span className={cn('mt-4 text-[12px] font-medium tabular-nums', trendKey ? trendHintClass[trendKey] : 'text-sub')}>
          {hint}
        </span>
      ) : null}
    </Tag>
  )
}

const moduleTones = {
  usability: 'bg-module-usability-soft text-module-usability',
  stories: 'bg-module-stories-soft text-module-stories',
  directory: 'bg-module-directory-soft text-module-directory',
}

export function ModuleCard({ title, description, href, metrics, icon: Icon, tone = 'usability' }) {
  return (
    <a
      href={href}
      className={cn(
        'flex flex-col rounded-lg border border-line-subtle bg-content p-16 shadow-stroke-faint transition-colors hover:bg-hover',
        focusRing,
      )}
    >
      <div className="flex items-start gap-10">
        {Icon ? (
          <span className={cn('grid size-[28px] shrink-0 place-items-center rounded-lg', moduleTones[tone] ?? moduleTones.usability)}>
            <Icon size={14} strokeWidth={1.5} />
          </span>
        ) : null}
        <div className="min-w-0 flex-1">
          <h3 className="text-[13px] font-ui text-ink">{title}</h3>
          <p className="mt-4 text-[12px] leading-[1.4] text-sub">{description}</p>
        </div>
      </div>
      {metrics?.length ? (
        <dl className="mt-14 flex flex-wrap gap-x-16 gap-y-8 border-t border-line-subtle pt-14">
          {metrics.map((m) => (
            <div key={m.label} className="flex items-baseline gap-6">
              <dt className="text-[11px] text-faint">{m.label}</dt>
              <dd className="text-[13px] font-medium tabular-nums text-body">{m.value}</dd>
            </div>
          ))}
        </dl>
      ) : null}
    </a>
  )
}

export function ActivityItem({ text, time }) {
  return (
    <div className="flex h-[36px] items-center justify-between gap-12 rounded-lg px-8 transition-colors hover:bg-hover">
      <span className="min-w-0 truncate text-[13px] text-body">{text}</span>
      <span className="shrink-0 text-[12px] tabular-nums text-faint">{time}</span>
    </div>
  )
}
