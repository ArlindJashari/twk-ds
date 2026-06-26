import { cn } from '../../lib/cn.js'
import { focusRing } from './primitives.js'

export function Toggle({ pressed, onPressedChange, className, children, ...props }) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={() => onPressedChange?.(!pressed)}
      className={cn(
        'inline-flex h-[28px] items-center justify-center rounded-lg border-[0.5px] px-10 text-[12px] font-medium transition-colors',
        focusRing,
        pressed
          ? 'border-line-subtle bg-tab-active text-ink shadow-stroke-faint'
          : 'border-transparent text-sub hover:bg-hover hover:text-ink',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export function ToggleGroup({ value, onChange, options, className }) {
  return (
    <div className={cn('inline-flex items-center gap-2 rounded-full bg-well p-2', className)} role="group">
      {options.map((option) => (
        <Toggle
          key={option.value}
          pressed={value === option.value}
          onPressedChange={() => onChange?.(option.value)}
        >
          {option.label}
        </Toggle>
      ))}
    </div>
  )
}
