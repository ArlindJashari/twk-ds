import { forwardRef, useCallback } from 'react'
import { cn } from '../../lib/cn.js'
import { focusRing } from './primitives.js'

function fillPercent(value, defaultValue, min, max) {
  const v = Number(value ?? defaultValue ?? min)
  const lo = Number(min)
  const hi = Number(max)
  if (hi <= lo) return 0
  return Math.min(100, Math.max(0, ((v - lo) / (hi - lo)) * 100))
}

const Slider = forwardRef(function Slider({
  className, value, defaultValue, min = 0, max = 100, onChange, onInput, style, ...props
}, ref) {
  const pct = fillPercent(value, defaultValue, min, max)

  const syncFill = useCallback((el) => {
    const next = fillPercent(el.value, undefined, el.min, el.max)
    el.style.setProperty('--slider-fill', `${next}%`)
  }, [])

  const handleChange = useCallback((event) => {
    syncFill(event.currentTarget)
    onChange?.(event)
  }, [onChange, syncFill])

  const handleInput = useCallback((event) => {
    syncFill(event.currentTarget)
    onInput?.(event)
  }, [onInput, syncFill])

  return (
    <input
      ref={ref}
      type="range"
      min={min}
      max={max}
      {...(value !== undefined ? { value } : { defaultValue })}
      onChange={handleChange}
      onInput={handleInput}
      style={{ '--slider-fill': `${pct}%`, ...style }}
      className={cn(
        'slider-input h-[6px] w-full max-w-[280px] cursor-pointer appearance-none bg-transparent',
        '[&::-webkit-slider-thumb]:size-[14px] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full',
        '[&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-accent [&::-webkit-slider-thumb]:bg-content [&::-webkit-slider-thumb]:shadow-stroke',
        '[&::-moz-range-thumb]:size-[14px] [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-2',
        '[&::-moz-range-thumb]:border-accent [&::-moz-range-thumb]:bg-content [&::-moz-range-thumb]:border-solid',
        focusRing,
        className,
      )}
      {...props}
    />
  )
})

export default Slider
