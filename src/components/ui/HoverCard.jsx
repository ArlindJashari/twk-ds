import { cn } from '../../lib/cn.js'

export default function HoverCard({ trigger, children, className }) {
  return (
    <span className={cn('group/hovercard relative inline-flex', className)}>
      <span className="cursor-default text-[13px] text-accent underline decoration-accent/30 underline-offset-2">
        {trigger}
      </span>
      <span
        role="tooltip"
        className="pointer-events-none absolute top-[calc(100%+8px)] start-0 z-50 w-[220px] rounded-lg border border-line-subtle bg-content p-12 text-start text-[12px] leading-[1.45] text-sub opacity-0 shadow-pop transition-opacity group-hover/hovercard:opacity-100 group-focus-within/hovercard:opacity-100"
      >
        {children}
      </span>
    </span>
  )
}
