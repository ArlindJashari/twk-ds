import { cn } from '../../lib/cn.js'
import {
  focusRing, pill, pillActive, pillInactive, pillMuted, pillSurface, toolbar, toolbarBordered,
} from './primitives.js'

export function Tab({ active = false, muted = false, surface = false, className, children, ...props }) {
  const Tag = props.href ? 'a' : 'button'
  const tone = active ? pillActive : muted ? pillMuted : surface ? pillSurface : pillInactive
  return (
    <Tag
      type={Tag === 'button' ? 'button' : undefined}
      aria-current={active ? 'page' : undefined}
      className={cn(pill, focusRing, tone, className)}
      {...props}
    >
      {children}
    </Tag>
  )
}

export function TabList({ className, children }) {
  return (
    <div className={cn('flex min-w-0 items-center gap-6', className)} role="tablist">
      {children}
    </div>
  )
}

export function TabPanel({ className, children, ...props }) {
  return (
    <div className={cn('pt-16', className)} role="tabpanel" {...props}>
      {children}
    </div>
  )
}

export function Toolbar({ left, right, bordered = true, className }) {
  return (
    <div className={cn(toolbar, bordered && toolbarBordered, className)}>
      <div className="flex min-w-0 items-center gap-6">{left}</div>
      <div className="flex shrink-0 items-center gap-6">{right}</div>
    </div>
  )
}
