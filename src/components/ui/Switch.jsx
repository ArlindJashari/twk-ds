import { forwardRef } from 'react'
import { cn } from '../../lib/cn.js'
import { focusRing } from './primitives.js'

const thumb =
  'pointer-events-none block size-[14px] translate-x-[2px] rounded-full bg-white shadow-stroke transition-transform'

const Switch = forwardRef(function Switch({ className, checked, onClick, ...props }, ref) {
  return (
    <button
      ref={ref}
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={onClick}
      className={cn(
        'relative inline-flex h-[18px] w-[30px] shrink-0 cursor-pointer items-center rounded-full border border-line-subtle bg-field transition-colors',
        focusRing,
        checked && 'border-accent bg-accent',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    >
      <span className={cn(thumb, checked && 'translate-x-[14px]')} aria-hidden />
    </button>
  )
})

export default Switch
