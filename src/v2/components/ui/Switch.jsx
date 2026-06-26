import { cn } from '../../../lib/cn.js'
import { focusRing } from './primitives.js'

export default function Switch({ checked, onChange, label, disabled }) {
  const sw = (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={onChange}
      className={cn(
        'relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors',
        checked ? 'bg-[hsl(var(--primary))]' : 'bg-[hsl(var(--input))]',
        disabled && 'opacity-50',
        focusRing,
      )}
    >
      <span
        className={cn(
          'inline-block size-4 transform rounded-full bg-[hsl(var(--background))] shadow-[var(--shadow-sm)] transition-transform',
          checked ? 'translate-x-[18px]' : 'translate-x-0.5',
        )}
      />
    </button>
  )
  if (!label) return sw
  return <label className="inline-flex items-center gap-2 text-sm">{sw}{label}</label>
}
