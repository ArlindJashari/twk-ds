import { cn } from '../../lib/cn.js'

const sizes = {
  sm: 'h-[4px]',
  md: 'h-[6px]',
}

export default function Progress({ value = 0, max = 100, size = 'md', className }) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100))
  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
      className={cn('w-full overflow-hidden rounded-full bg-well', sizes[size], className)}
    >
      <div
        className="h-full rounded-full bg-accent transition-[width] duration-300"
        style={{ width: `${pct}%` }}
      />
    </div>
  )
}
