import { CloseIcon } from '../icons.jsx'
import { cn } from '../../lib/cn.js'
import { focusRing } from './primitives.js'

const actionBtn =
  'flex h-[28px] shrink-0 items-center gap-6 rounded-full px-10 text-[12px] font-medium text-ink transition-colors hover:bg-hover'

function BacklogIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
      <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.25" strokeDasharray="2 2" />
    </svg>
  )
}

function ActionsIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M6 3.5h7M6 8h7M6 12.5h7M3 3.5h.01M3 8h.01M3 12.5h.01"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default function SelectionBar({ count = 0, onClear, onMoveToBacklog, onActions, className }) {
  if (!count) return null

  return (
    <div
      className={cn('pointer-events-none absolute inset-x-0 bottom-16 z-20 flex justify-center', className)}
      role="status"
      aria-live="polite"
    >
      <div className="pointer-events-auto flex h-[44px] items-center gap-8 rounded-full bg-surface px-8 shadow-selection-bar">
        <span className="shrink-0 ps-12 pe-2 text-[12px] text-ink">
          {count}
          {' '}
          selected
        </span>
        <div className="flex items-center gap-8">
          <button type="button" className={cn(actionBtn, focusRing)} onClick={onMoveToBacklog}>
            <BacklogIcon />
            Move to Backlog
          </button>
          <button type="button" className={cn(actionBtn, focusRing)} onClick={onActions}>
            <ActionsIcon />
            Actions
          </button>
        </div>
        <button
          type="button"
          aria-label="Clear selected"
          onClick={onClear}
          className={cn(
            'grid size-[28px] shrink-0 place-items-center rounded-full text-ink transition-colors hover:bg-hover',
            focusRing,
          )}
        >
          <CloseIcon size={14} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  )
}
