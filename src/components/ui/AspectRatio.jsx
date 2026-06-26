import { cn } from '../../lib/cn.js'

export default function AspectRatio({ ratio = 16 / 9, className, children }) {
  return (
    <div
      className={cn('relative w-full max-w-[320px] overflow-hidden rounded-lg bg-well', className)}
      style={{ aspectRatio: ratio }}
    >
      {children}
    </div>
  )
}
