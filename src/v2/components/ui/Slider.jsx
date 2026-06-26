import { cn } from '../../../lib/cn.js'

export default function Slider({ value = 0, min = 0, max = 100, onChange, className }) {
  const pct = ((value - min) / (max - min)) * 100
  return (
    <input
      type="range"
      min={min}
      max={max}
      value={value}
      onChange={(e) => onChange?.(Number(e.target.value))}
      className={cn('slider-input w-full cursor-pointer', className)}
      style={{ '--slider-fill': `${pct}%` }}
    />
  )
}
