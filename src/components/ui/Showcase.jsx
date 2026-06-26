import { cn } from '../../lib/cn.js'

export function ColorSwatch({ name, className }) {
  return (
    <div className="flex flex-col gap-6">
      <div className={cn('h-[48px] w-full rounded-lg border border-line-subtle shadow-stroke-faint', className)} />
      <span className="text-[11px] text-faint">{name}</span>
    </div>
  )
}

export function TokenGrid({ children, cols = 4 }) {
  const colClass = {
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-2 sm:grid-cols-4',
    6: 'grid-cols-3 sm:grid-cols-6',
  }
  return (
    <div className={cn('grid gap-12', colClass[cols] ?? colClass[4])}>
      {children}
    </div>
  )
}

export function ShowcaseSection({ id, title, description, children }) {
  return (
    <section id={id} className="scroll-mt-24 border-b border-line-subtle pb-32 last:border-b-0">
      <div className="mb-16">
        <h2 className="text-[15px] font-ui text-ink">{title}</h2>
        {description ? (
          <p className="mt-4 text-[13px] text-sub">{description}</p>
        ) : null}
      </div>
      {children}
    </section>
  )
}

export function ShowcaseRow({ label, children, className }) {
  return (
    <div className={cn('mb-16 last:mb-0', className)}>
      {label ? (
        <p className="mb-8 text-[11px] font-medium uppercase tracking-wide text-faint">{label}</p>
      ) : null}
      <div className="flex flex-wrap items-center gap-8">{children}</div>
    </div>
  )
}

export function ShowcaseStack({ label, children, className }) {
  return (
    <div className={cn('mb-16 last:mb-0', className)}>
      {label ? (
        <p className="mb-8 text-[11px] font-medium uppercase tracking-wide text-faint">{label}</p>
      ) : null}
      <div className="flex flex-col gap-8">{children}</div>
    </div>
  )
}
