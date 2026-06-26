import { forwardRef } from 'react'
import { cn } from '../../lib/cn.js'
import { focusRing } from './primitives.js'

const Radio = forwardRef(function Radio({ className, disabled, ...props }, ref) {
  return (
    <label
      className={cn(
        'grid size-[16px] shrink-0 cursor-pointer place-items-center rounded-full border border-checkbox-border bg-transparent transition-colors',
        'has-[:checked]:border-accent has-[:checked]:bg-accent',
        disabled && 'cursor-not-allowed opacity-50',
        focusRing,
        className,
      )}
    >
      <input
        ref={ref}
        type="radio"
        disabled={disabled}
        className="peer sr-only"
        {...props}
      />
      <span
        className="size-[6px] rounded-full bg-onaccent opacity-0 transition-opacity peer-checked:opacity-100"
        aria-hidden
      />
    </label>
  )
})

export default Radio
