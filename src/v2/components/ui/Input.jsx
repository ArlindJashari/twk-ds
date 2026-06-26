import { forwardRef } from 'react'
import { cn } from '../../../lib/cn.js'
import { inputBase } from './primitives.js'

const Input = forwardRef(function Input({ className, ...props }, ref) {
  return <input ref={ref} className={cn(inputBase, 'h-9', className)} {...props} />
})

export default Input
