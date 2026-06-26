import { forwardRef } from 'react'
import { ChevronDown } from '../icons.jsx'
import { cn } from '../../lib/cn.js'
import { focusRing, inputBase } from './primitives.js'

const Select = forwardRef(function Select({ className, children, ...props }, ref) {
  return (
    <div className="relative">
      <select
        ref={ref}
        className={cn(inputBase, focusRing, 'h-[32px] appearance-none ps-12 pe-28 text-[13px]', className)}
        {...props}
      >
        {children}
      </select>
      <ChevronDown
        size={12}
        className="pointer-events-none absolute end-10 top-1/2 -translate-y-1/2 text-faint"
        aria-hidden
      />
    </div>
  )
})

export default Select
