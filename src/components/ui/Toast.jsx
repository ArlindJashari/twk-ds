import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { cn } from '../../lib/cn.js'

const ToastContext = createContext(null)

const variants = {
  info: 'border-line-subtle bg-content text-body shadow-pop',
  success: 'border-success/20 bg-success-soft text-success-text',
  warning: 'border-warning/30 bg-warning-soft text-warning-text',
  danger: 'border-danger/20 bg-danger-soft text-danger',
}

export function Toast({ variant = 'info', title, children, className }) {
  return (
    <div
      role="status"
      className={cn(
        'flex min-w-[280px] max-w-[400px] flex-col gap-4 rounded-lg border px-12 py-10 text-[13px] leading-[1.45]',
        variants[variant],
        className,
      )}
    >
      {title ? <p className="font-medium">{title}</p> : null}
      {children}
    </div>
  )
}

export function ToastProvider({ children }) {
  const [items, setItems] = useState([])

  const dismiss = useCallback((id) => {
    setItems((prev) => prev.filter((t) => t.id !== id))
  }, [])

  const toast = useCallback((opts) => {
    const id = crypto.randomUUID()
    setItems((prev) => [...prev, { id, ...opts }])
    setTimeout(() => dismiss(id), opts.duration ?? 4000)
    return id
  }, [dismiss])

  const value = useMemo(() => ({ toast, dismiss }), [toast, dismiss])

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="pointer-events-none fixed bottom-[52px] end-16 z-50 flex flex-col gap-8">
        {items.map((item) => (
          <div key={item.id} className="pointer-events-auto">
            <Toast variant={item.variant} title={item.title}>{item.message}</Toast>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useToast requires ToastProvider')
  return ctx
}
