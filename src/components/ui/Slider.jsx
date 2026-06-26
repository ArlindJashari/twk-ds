import { forwardRef } from 'react'
import { cn } from '../../lib/cn.js'
import { focusRing } from './primitives.js'

const Slider = forwardRef(function Slider({ className, ...props }, ref) {
  return (
    <input
      ref={ref}
      type="range"
      className={cn(
        'h-[6px] w-full max-w-[280px] cursor-pointer appearance-none rounded-full bg-well accent-accent',
        '[&::-webkit-slider-thumb]:size-[14px] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full',
        '[&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-line-subtle [&::-webkit-slider-thumb]:bg-content [&::-webkit-slider-thumb]:shadow-stroke',
        '[&::-moz-range-thumb]:size-[14px] [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border',
        '[&::-moz-range-thumb]:border-line-subtle [&::-moz-range-thumb]:bg-content',
        focusRing,
        className,
      )}
      {...props}
    />
  )
})

export default Slider
