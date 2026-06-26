import { forwardRef } from 'react'
import { cn } from '../../../lib/cn.js'
import { inputBase } from './primitives.js'

const caret = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23a1a1aa' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")"

const Select = forwardRef(function Select({ options = [], placeholder, className, children, ...props }, ref) {
  return (
    <select
      ref={ref}
      className={cn(inputBase, 'h-9 appearance-none bg-[length:12px] bg-[right_0.75rem_center] bg-no-repeat pe-9', className)}
      style={{ backgroundImage: caret }}
      {...props}
    >
      {placeholder ? <option value="" disabled>{placeholder}</option> : null}
      {options.map((o) => (
        <option key={o.value ?? o} value={o.value ?? o}>{o.label ?? o}</option>
      ))}
      {children}
    </select>
  )
})

export default Select
