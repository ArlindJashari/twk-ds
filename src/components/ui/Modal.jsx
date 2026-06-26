import { useEffect, useRef } from 'react'
import { CloseIcon } from '../icons.jsx'
import { cn } from '../../lib/cn.js'
import { focusRing, modalOverlay, modalPanel } from './primitives.js'
import IconButton from './IconButton.jsx'

export function Modal({ open, onClose, title, children, className, size = 'md' }) {
  const panelRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => { if (e.key === 'Escape') onClose?.() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  const sizes = {
    sm: 'max-w-[360px]',
    md: 'max-w-[480px]',
    lg: 'max-w-[640px]',
  }

  return (
    <div
      className={modalOverlay}
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={(e) => { if (e.target === e.currentTarget) onClose?.() }}
    >
      <div ref={panelRef} className={cn(modalPanel, sizes[size], className)}>
        {title ? (
          <div className="flex h-[44px] items-center justify-between border-b border-line px-12">
            <h2 className="text-[13px] font-medium text-body">{title}</h2>
            <IconButton label="Close" size="sm" onClick={onClose}>
              <CloseIcon size={14} strokeWidth={1.5} />
            </IconButton>
          </div>
        ) : null}
        <div className="p-16">{children}</div>
      </div>
    </div>
  )
}

export function ModalFooter({ className, children }) {
  return (
    <div className={cn('mt-16 flex items-center justify-end gap-8', className)}>
      {children}
    </div>
  )
}
