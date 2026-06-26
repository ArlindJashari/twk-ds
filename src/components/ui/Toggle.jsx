import { cn } from '../../lib/cn.js'
import { focusRing, pill } from './primitives.js'

export function Toggle({ pressed, onPressedChange, className, children, ...props }) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={() => onPressedChange?.(!pressed)}
      className={cn(
        pill,
        'min-w-[56px] justify-center border-transparent',
        focusRing,
        pressed
          ? 'bg-content text-ink shadow-stroke-faint'
          : 'bg-transparent text-tab-inactive-text hover:bg-hover/60 hover:text-ink',
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
    <div
      className={cn(
        'inline-flex items-center gap-[3px] rounded-full border-[0.5px] border-line-subtle bg-well p-[3px]',
        className,
      )}
      role="group"
    >
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
