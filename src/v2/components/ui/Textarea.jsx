import { forwardRef } from 'react'
import { cn } from '../../../lib/cn.js'
import { inputBase } from './primitives.js'

const Textarea = forwardRef(function Textarea({ className, ...props }, ref) {
  return <textarea ref={ref} className={cn(inputBase, 'min-h-[80px] resize-y py-2', className)} {...props} />
})

export default Textarea
