import { cn } from '../../lib/cn.js'

const variants = {
  default: 'bg-well text-body',
  accent: 'bg-accent-soft text-accent-press',
  success: 'bg-success-soft text-[#2d8a5c]',
  warning: 'bg-warning-soft text-[#9a7b0a]',
  danger: 'bg-danger-soft text-danger',
  muted: 'bg-surface text-pill-muted shadow-panel',
  urgent: 'bg-[#fef3eb] text-priority-urgent',
  high: 'bg-warning-soft text-[#9a7b0a]',
  medium: 'bg-accent-soft text-priority-medium',
  low: 'bg-well text-priority-low',
  none: 'bg-well text-priority-none',
  todo: 'bg-well text-status-todo',
  progress: 'bg-warning-soft text-[#9a7b0a]',
  done: 'bg-success-soft text-[#2d8a5c]',
  cancelled: 'bg-well text-status-cancelled',
}

const sizes = {
  xs: 'h-[16px] px-5 text-[10px]',
  sm: 'h-[18px] px-6 text-[10px]',
  md: 'h-[20px] px-8 text-[11px]',
  lg: 'h-[22px] px-8 text-[12px]',
}

const base = 'inline-flex shrink-0 items-center rounded-full font-medium leading-none'

export default function Badge({ variant = 'default', size = 'md', dot = false, className, children }) {
  return (
    <span className={cn(base, variants[variant], sizes[size], dot && 'gap-4', className)}>
      {dot ? <span className="size-[6px] rounded-full bg-current opacity-80" aria-hidden /> : null}
      {children}
    </span>
  )
}
