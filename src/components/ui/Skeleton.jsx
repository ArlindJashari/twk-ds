import { cn } from '../../lib/cn.js'

const variants = {
  text: 'h-[12px] rounded-xs',
  circle: 'rounded-full',
  rect: 'rounded-lg',
}

export default function Skeleton({ variant = 'text', className, style }) {
  return (
    <div
      aria-hidden
      className={cn('skeleton-shimmer', variants[variant], className)}
      style={style}
    />
  )
}

export function SkeletonGroup({ className, children }) {
  return (
    <div className={cn('flex flex-col gap-8', className)} aria-busy="true">
      {children}
    </div>
  )
}
