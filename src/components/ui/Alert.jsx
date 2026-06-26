import { cn } from '../../lib/cn.js'

const variants = {
  info: 'border-info/20 bg-info-soft text-accent-press',
  success: 'border-success/20 bg-success-soft text-success-text',
  warning: 'border-warning/30 bg-warning-soft text-warning-text',
  danger: 'border-danger/20 bg-danger-soft text-danger',
}

export default function Alert({ variant = 'info', title, className, children }) {
  return (
    <div
      role="alert"
      className={cn(
        'rounded-lg border px-12 py-10 text-[13px] leading-[1.45]',
        variants[variant],
        className,
      )}
    >
      {title ? <p className="mb-4 font-medium">{title}</p> : null}
      {children}
    </div>
  )
}
