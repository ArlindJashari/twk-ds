import { createContext, useCallback, useContext, useState } from 'react'
import { cn } from '../../../lib/cn.js'

const ToastContext = createContext(null)

const toneBar = {
  info: 'bg-[hsl(var(--info))]',
  success: 'bg-[hsl(var(--success))]',
  warning: 'bg-[hsl(var(--warning))]',
  danger: 'bg-[hsl(var(--destructive))]',
}

let seq = 0

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const dismiss = useCallback((id) => setToasts((t) => t.filter((x) => x.id !== id)), [])

  const toast = useCallback(({ title, description, variant = 'info' }) => {
    const id = ++seq
    setToasts((t) => [...t, { id, title, description, variant }])
    setTimeout(() => dismiss(id), 4000)
  }, [dismiss])

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div className="pointer-events-none fixed bottom-4 end-4 z-[60] flex w-[320px] max-w-[90vw] flex-col gap-2" aria-live="polite">
        {toasts.map((t) => (
          <div
            key={t.id}
            role="status"
            className="pointer-events-auto flex items-start gap-3 overflow-hidden rounded-[var(--radius)] border border-[hsl(var(--border))] bg-[hsl(var(--popover))] p-3 shadow-[var(--shadow-lg)]"
          >
            <span className={cn('mt-0.5 h-full w-1 shrink-0 self-stretch rounded-full', toneBar[t.variant])} />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-[hsl(var(--foreground))]">{t.title}</p>
              {t.description ? <p className="mt-0.5 text-xs text-[hsl(var(--muted-foreground))]">{t.description}</p> : null}
            </div>
            <button type="button" onClick={() => dismiss(t.id)} aria-label="Dismiss" className="shrink-0 text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]">×</button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const ctx = useContext(ToastContext)
  return ctx ?? { toast: () => {} }
}
