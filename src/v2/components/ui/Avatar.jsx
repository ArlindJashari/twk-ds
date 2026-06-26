import { cn } from '../../../lib/cn.js'
import { focusRing } from './primitives.js'

const sizes = {
  xs: 'size-5 text-[9px]',
  sm: 'size-6 text-[10px]',
  md: 'size-8 text-xs',
  lg: 'size-10 text-sm',
}

export default function Avatar({ initials, size = 'md', className }) {
  return (
    <span
      className={cn(
        'inline-grid shrink-0 place-items-center rounded-full bg-[hsl(var(--primary)/0.15)] font-medium text-[hsl(var(--primary))]',
        sizes[size],
        className,
      )}
      aria-hidden={!initials}
    >
      {initials}
    </span>
  )
}
