import { forwardRef } from 'react'
import { cn } from '../../lib/cn.js'
import { focusRing } from './primitives.js'

const Switch = forwardRef(function Switch({ className, checked, onClick, ...props }, ref) {
  return (
    <button
      ref={ref}
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={onClick}
      className={cn(
        'relative box-border inline-flex h-[20px] w-[36px] shrink-0 cursor-pointer rounded-full border border-line-subtle p-0 transition-colors',
        checked ? 'border-accent bg-accent' : 'bg-field',
        focusRing,
        'disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    >
      <span
        aria-hidden
        className={cn(
          'pointer-events-none absolute top-1/2 size-[16px] -translate-y-1/2 rounded-full bg-content shadow-stroke',
          'transition-[inset-inline-start] duration-200 ease-out',
          checked ? 'start-[calc(100%-18px)]' : 'start-[2px]',
        )}
      />
    </button>
  )
})

export default Switch
