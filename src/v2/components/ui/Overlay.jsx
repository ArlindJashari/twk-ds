import { useEffect } from 'react'
import { cn } from '../../../lib/cn.js'
import Button from './Button.jsx'

function Backdrop({ onClose }) {
  return <div className="absolute inset-0 bg-[hsl(var(--foreground)/0.4)] backdrop-blur-[1px]" onClick={onClose} aria-hidden />
}

function useEsc(open, onClose) {
  useEffect(() => {
    if (!open) return undefined
    const h = (e) => { if (e.key === 'Escape') onClose?.() }
    document.addEventListener('keydown', h)
    return () => document.removeEventListener('keydown', h)
  }, [open, onClose])
}

export function Modal({ open, onClose, title, description, children, footer }) {
  useEsc(open, onClose)
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 grid place-items-center p-4" role="dialog" aria-modal="true" aria-label={title}>
      <Backdrop onClose={onClose} />
      <div className="relative z-10 w-full max-w-md rounded-[var(--radius)] border border-[hsl(var(--border))] bg-[hsl(var(--popover))] p-6 text-[hsl(var(--popover-foreground))] shadow-[var(--shadow-lg)]">
        {title ? <h2 className="text-lg font-semibold tracking-tight">{title}</h2> : null}
        {description ? <p className="mt-1 text-sm text-[hsl(var(--muted-foreground))]">{description}</p> : null}
        <div className="mt-4">{children}</div>
        {footer ? <div className="mt-6 flex justify-end gap-2">{footer}</div> : null}
      </div>
    </div>
  )
}

export function ModalFooter({ children }) {
  return <>{children}</>
}

export function AlertDialog({ open, onClose, title, description, confirmLabel = 'Confirm', cancelLabel = 'Cancel', destructive, onConfirm }) {
  useEsc(open, onClose)
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 grid place-items-center p-4" role="alertdialog" aria-modal="true" aria-label={title}>
      <Backdrop onClose={onClose} />
      <div className="relative z-10 w-full max-w-md rounded-[var(--radius)] border border-[hsl(var(--border))] bg-[hsl(var(--popover))] p-6 shadow-[var(--shadow-lg)]">
        <h2 className="text-lg font-semibold tracking-tight text-[hsl(var(--foreground))]">{title}</h2>
        <p className="mt-1 text-sm text-[hsl(var(--muted-foreground))]">{description}</p>
        <div className="mt-6 flex justify-end gap-2">
          <Button variant="outline" onClick={onClose}>{cancelLabel}</Button>
          <Button variant={destructive ? 'destructive' : 'default'} onClick={() => { onConfirm?.(); onClose?.() }}>{confirmLabel}</Button>
        </div>
      </div>
    </div>
  )
}

export function Sheet({ open, onClose, side = 'right', title, description, children }) {
  useEsc(open, onClose)
  if (!open) return null
  const sideClass = side === 'left'
    ? 'inset-y-0 start-0 border-e'
    : 'inset-y-0 end-0 border-s'
  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label={title}>
      <Backdrop onClose={onClose} />
      <div className={cn('absolute w-[320px] max-w-[85vw] border-[hsl(var(--border))] bg-[hsl(var(--popover))] p-6 shadow-[var(--shadow-lg)]', sideClass)}>
        {title ? <h2 className="text-lg font-semibold tracking-tight text-[hsl(var(--foreground))]">{title}</h2> : null}
        {description ? <p className="mt-1 text-sm text-[hsl(var(--muted-foreground))]">{description}</p> : null}
        <div className="mt-4">{children}</div>
      </div>
    </div>
  )
}
