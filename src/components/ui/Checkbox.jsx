import { forwardRef } from 'react'
import { cn } from '../../lib/cn.js'
import { focusRing } from './primitives.js'

/** Linear issue-row checkbox — custom 14px box, reveals on row hover. */
export const IssueCheckbox = forwardRef(function IssueCheckbox(
  { checked, className, onChange, ...props },
  ref,
) {
  return (
    <span
      className={cn(
        'flex shrink-0 items-center justify-center opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100',
        checked && 'opacity-100',
        className,
      )}
    >
      <label
        className={cn(
          'grid size-[14px] cursor-pointer place-items-center rounded-[3px] border p-[2px] transition-colors',
          checked
            ? 'border-checkbox-checked bg-checkbox-checked text-onaccent'
            : 'border-checkbox-border bg-transparent text-transparent',
          focusRing,
        )}
      >
        <input
          ref={ref}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="sr-only"
          {...props}
        />
        {checked ? (
          <svg width="10" height="9" viewBox="0 0 10 9" fill="none" aria-hidden>
            <path
              d="M1.5 4.5 3.5 6.5 8.5 1.5"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : null}
      </label>
    </span>
  )
})

/** Standard form checkbox. */
const Checkbox = forwardRef(function Checkbox({ className, ...props }, ref) {
  return (
    <input
      ref={ref}
      type="checkbox"
      className={cn(
        'size-[16px] shrink-0 cursor-pointer rounded-[4px] border border-line-subtle bg-field accent-accent',
        focusRing,
        'disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    />
  )
})

export default Checkbox
