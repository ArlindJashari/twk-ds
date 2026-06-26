import { cn } from '../../../lib/cn.js'
import { focusRing } from './primitives.js'

export function RadioGroup({ className, children }) {
  return <div role="radiogroup" className={cn('flex flex-col gap-2', className)}>{children}</div>
}

export function Radio({ checked, onChange, label, name, disabled }) {
  return (
    <label className={cn('inline-flex items-center gap-2 text-sm', disabled ? 'opacity-50' : 'cursor-pointer')}>
      <button
        type="button"
        role="radio"
        aria-checked={checked}
        name={name}
        disabled={disabled}
        onClick={onChange}
        className={cn(
          'grid size-4 place-items-center rounded-full border border-[hsl(var(--primary))] transition-colors',
          focusRing,
        )}
      >
        {checked ? <span className="size-2 rounded-full bg-[hsl(var(--primary))]" /> : null}
      </button>
      {label}
    </label>
  )
}
