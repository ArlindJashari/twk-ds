import { cn } from '../../lib/cn.js'
import { focusRing, pill, pillActive, pillMuted, pillSurface } from './primitives.js'

const variants = {
  default: cn(pillSurface, 'text-pill-muted shadow-panel hover:bg-hover hover:text-body'),
  active: pillActive,
  accent: 'bg-accent-soft text-accent-press',
  outline: 'border border-line-subtle bg-content text-body shadow-stroke-faint hover:bg-hover',
  muted: pillMuted,
}

export default function Tag({
  variant = 'default',
  className,
  href,
  icon: Icon,
  children,
  ...props
}) {
  const classes = cn(pill, focusRing, variants[variant], className)
  const content = (
    <>
      {Icon ? <Icon size={14} className="shrink-0" strokeWidth={1.5} /> : null}
      {children}
    </>
  )
  if (href) {
    return <a href={href} className={cn(classes, 'gap-[6px]')} {...props}>{content}</a>
  }
  return <span className={cn(classes, 'gap-[6px]')} {...props}>{content}</span>
}
