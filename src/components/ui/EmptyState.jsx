import { cn } from '../../lib/cn.js'
import Button from './Button.jsx'

export default function EmptyState({
  illustration: Illustration,
  title,
  description,
  actionLabel,
  onAction,
  actionHref,
  className,
}) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center px-24 py-48 text-center',
        className,
      )}
    >
      {Illustration ? (
        <div className="mb-16 text-faint">
          <Illustration />
        </div>
      ) : null}
      <h3 className="text-[15px] font-ui text-ink">{title}</h3>
      {description ? (
        <p className="mt-6 max-w-[360px] text-[13px] leading-[1.45] text-sub">
          {description}
        </p>
      ) : null}
      {actionLabel ? (
        <div className="mt-16">
          {actionHref ? (
            <a
              href={actionHref}
              className="inline-flex h-[28px] items-center rounded-full bg-accent px-10 text-[12px] font-medium text-onaccent outline-none transition-colors hover:bg-accent-hover focus-visible:ring-2 focus-visible:ring-accent"
            >
              {actionLabel}
            </a>
          ) : (
            <Button onClick={onAction}>{actionLabel}</Button>
          )}
        </div>
      ) : null}
    </div>
  )
}
