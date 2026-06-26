import { useEffect } from 'react'
import { cn } from '../../lib/cn.js'
import { modalOverlay, modalPanel } from './primitives.js'
import Button from './Button.jsx'

export default function AlertDialog({
  open,
  onClose,
  onConfirm,
  title,
  description,
  cancelLabel = 'Cancel',
  confirmLabel = 'Confirm',
  destructive = false,
}) {
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
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-desc"
      onClick={(event) => { if (event.target === event.currentTarget) onClose?.() }}
    >
      <div className={cn(modalPanel, 'max-w-[400px] p-16')}>
        <h2 id="alert-dialog-title" className="text-[15px] font-ui text-ink">{title}</h2>
        {description ? (
          <p id="alert-dialog-desc" className="mt-8 text-[13px] leading-[1.45] text-sub">{description}</p>
        ) : null}
        <div className="mt-16 flex items-center justify-end gap-8">
          <Button variant="ghost" onClick={onClose}>{cancelLabel}</Button>
          <Button variant={destructive ? 'danger' : 'primary'} onClick={onConfirm}>{confirmLabel}</Button>
        </div>
      </div>
    </div>
  )
}
