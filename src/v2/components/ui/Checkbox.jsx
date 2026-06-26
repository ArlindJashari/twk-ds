import { cn } from '../../../lib/cn.js'
import { focusRing } from './primitives.js'

export function IssueCheckbox({ checked, onChange, label }) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      aria-label={label}
      onClick={onChange}
      className={cn(
        'grid size-4 place-items-center rounded-[4px] border border-[hsl(var(--primary))] transition-colors',
        checked && 'bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]',
        focusRing,
      )}
    >
      {checked ? (
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
          <path d="M2 5.2L4.1 7.3L8 3.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : null}
    </button>
  )
}
