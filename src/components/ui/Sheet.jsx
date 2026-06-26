import { useEffect } from 'react'
import { CloseIcon } from '../icons.jsx'
import { cn } from '../../lib/cn.js'
import { focusRing, modalOverlay } from './primitives.js'
import IconButton from './IconButton.jsx'

const sides = {
  start: 'inset-y-0 start-0 border-e',
  end: 'inset-y-0 end-0 border-s',
}

export default function Sheet({ open, onClose, side = 'end', title, description, children, className }) {
  useEffect(() => {
    if (!open) return undefined
    const onKey = (event) => { if (event.key === 'Escape') onClose?.() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className={modalOverlay}
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={(event) => { if (event.target === event.currentTarget) onClose?.() }}
    >
      <div
        className={cn(
          'fixed flex w-full max-w-[360px] flex-col border-[0.5px] border-line bg-content shadow-modal',
          sides[side],
          className,
        )}
      >
        <div className="flex h-[44px] shrink-0 items-center justify-between border-b border-line px-12">
          <div className="min-w-0">
            {title ? <h2 className="truncate text-[13px] font-medium text-body">{title}</h2> : null}
            {description ? <p className="truncate text-[11px] text-faint">{description}</p> : null}
          </div>
          <IconButton label="Close" size="sm" onClick={onClose}>
            <CloseIcon size={14} strokeWidth={1.5} />
          </IconButton>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto p-16">{children}</div>
      </div>
    </div>
  )
}
