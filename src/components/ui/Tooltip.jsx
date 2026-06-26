import { cn } from '../../lib/cn.js'

export default function Tooltip({ label, children, className }) {
  return (
    <span className={cn('group/tooltip relative inline-flex', className)}>
      {children}
      <span
        role="tooltip"
        className="pointer-events-none absolute bottom-[calc(100%+6px)] start-1/2 z-50 -translate-x-1/2 whitespace-nowrap rounded-md border border-line-subtle bg-ink px-8 py-4 text-[11px] font-medium text-white opacity-0 shadow-pop transition-opacity group-hover/tooltip:opacity-100 group-focus-within/tooltip:opacity-100"
      >
        {label}
      </span>
    </span>
  )
}
