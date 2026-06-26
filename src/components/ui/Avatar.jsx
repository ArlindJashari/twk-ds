import { cn } from '../../lib/cn.js'

const sizes = {
  xs: 'size-[18px] text-[9px]',
  sm: 'size-[24px] text-[10px]',
  md: 'size-[28px] text-[11px]',
  lg: 'size-[32px] text-[12px]',
}

const base =
  'inline-grid shrink-0 place-items-center rounded-full bg-user-avatar font-medium text-white'

export default function Avatar({ size = 'md', initials, src, alt, className }) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt ?? initials ?? ''}
        className={cn(base, sizes[size], 'object-cover', className)}
      />
    )
  }
  return (
    <span className={cn(base, sizes[size], className)} aria-hidden={!initials}>
      {initials}
    </span>
  )
}
