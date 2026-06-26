import { useEffect, useRef, useState } from 'react'
import { cn } from '../../lib/cn.js'
import { useDismiss, useFocusTrap } from '../../lib/hooks.js'
import { menuItemInset, menuItemInner, modalOverlay } from './primitives.js'
import { CommandInput } from './SearchInput.jsx'

function mergeRefs(...refs) {
  return (node) => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') ref(node)
      else if (ref) ref.current = node
    })
  }
}

export default function CommandPalette({ open, onClose, items = [], placeholder = 'Search…' }) {
  const [query, setQuery] = useState('')
  const panelRef = useRef(null)
  const inputRef = useRef(null)
  const dismissRef = useDismiss(open, onClose)
  useFocusTrap(open, panelRef, inputRef)

  useEffect(() => {
    if (!open) return undefined
    setQuery('')
    const timer = requestAnimationFrame(() => inputRef.current?.focus())
    return () => cancelAnimationFrame(timer)
  }, [open])

  if (!open) return null

  const filtered = items.filter((item) => item.label.toLowerCase().includes(query.toLowerCase()))

  return (
    <div
      className={cn(modalOverlay, 'items-start pt-[14vh]')}
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
      onClick={(event) => { if (event.target === event.currentTarget) onClose?.() }}
    >
      <div
        ref={mergeRefs(panelRef, dismissRef)}
        className="w-full max-w-[520px] overflow-hidden rounded-panel border-[0.5px] border-line bg-content shadow-modal"
      >
        <CommandInput
          inputRef={inputRef}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={placeholder}
        />
        <div className="max-h-[280px] overflow-y-auto pb-[6px] pt-[6px]">
          {filtered.map((item) => (
            <div key={item.id} className={menuItemInset}>
              <button
                type="button"
                className={menuItemInner}
                onClick={() => { item.onSelect?.(); onClose?.() }}
              >
                {item.icon ? <span className="shrink-0 text-faint">{item.icon}</span> : null}
                <span className="min-w-0 flex-1 truncate">{item.label}</span>
                {item.shortcut ? (
                  <span className="ms-auto shrink-0 ps-8 text-[11px] text-faint">{item.shortcut}</span>
                ) : null}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
