import { forwardRef } from 'react'
import { cn } from '../../lib/cn.js'
import { focusRing, inputBase } from './primitives.js'

const sizes = {
  sm: 'h-[28px] px-10 text-[12px]',
  md: 'h-[32px] px-12 text-[13px]',
  lg: 'h-[36px] px-14 text-[13px]',
}

const Input = forwardRef(function Input({ size = 'md', className, ...props }, ref) {
  return (
    <input ref={ref} className={cn(inputBase, focusRing, sizes[size], className)} {...props} />
  )
})

export default Input
