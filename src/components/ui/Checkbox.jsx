import { forwardRef } from 'react'
import { cn } from '../../lib/cn.js'
import { focusRing } from './primitives.js'

function CheckboxCheckmark() {
  return (
    <svg width="10" height="9" viewBox="0 0 10 9" fill="none" aria-hidden>
      <path
        d="M1.5 4.5 3.5 6.5 8.5 1.5"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const boxSize = {
  14: 'size-[14px] rounded-[3px]',
  16: 'size-[16px] rounded-xs',
}

function CheckboxBox({ size = 16, className, disabled, inputRef, ...props }) {
  return (
    <label
      className={cn(
        'grid shrink-0 cursor-pointer place-items-center border border-checkbox-border bg-transparent p-[2px] transition-colors',
        boxSize[size],
        'has-[:checked]:border-checkbox-checked has-[:checked]:bg-checkbox-checked',
        disabled && 'cursor-not-allowed opacity-50',
        focusRing,
        className,
      )}
    >
      <input
        ref={inputRef}
        type="checkbox"
        disabled={disabled}
        className="peer sr-only"
        {...props}
      />
      <span className="text-transparent peer-checked:text-onaccent">
        <CheckboxCheckmark />
      </span>
    </label>
  )
}

/** Linear issue-row checkbox — custom 14px box, reveals on row hover. */
export const IssueCheckbox = forwardRef(function IssueCheckbox(
  { checked, className, onChange, ...props },
  ref,
) {
  return (
    <span
      className={cn(
        'flex w-[18px] shrink-0 items-center justify-center opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100',
        checked && 'opacity-100',
        className,
      )}
    >
      <CheckboxBox
        size={14}
        checked={checked}
        onChange={onChange}
        inputRef={ref}
        {...props}
      />
    </span>
  )
})

/** Standard form checkbox — same visual as issue row, 16px. */
const Checkbox = forwardRef(function Checkbox({ className, ...props }, ref) {
  return <CheckboxBox size={16} className={className} inputRef={ref} {...props} />
})

export default Checkbox
