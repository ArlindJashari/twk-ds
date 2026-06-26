import { forwardRef } from 'react'
import { cn } from '../../lib/cn.js'
import { focusRing, inputBase } from './primitives.js'

const Textarea = forwardRef(function Textarea({ className, rows = 4, ...props }, ref) {
  return (
    <textarea
      ref={ref}
      rows={rows}
      className={cn(inputBase, focusRing, 'resize-y px-12 py-10 text-[13px] leading-[1.45]', className)}
      {...props}
    />
  )
})

export default Textarea
