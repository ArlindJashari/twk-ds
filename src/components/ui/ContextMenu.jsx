import { useCallback, useState } from 'react'
import { cn } from '../../lib/cn.js'
import { menuPanel } from './primitives.js'

export default function ContextMenu({ children, items, className }) {
  const [open, setOpen] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const onContextMenu = useCallback((event) => {
    event.preventDefault()
    setPosition({ x: event.clientX, y: event.clientY })
    setOpen(true)
  }, [])

  const close = useCallback(() => setOpen(false), [])

  return (
    <>
      <div
        className={cn(
          'grid place-items-center rounded-lg border border-dashed border-line-subtle bg-well text-[12px] text-faint',
          className,
        )}
        onContextMenu={onContextMenu}
        onClick={close}
      >
        {children}
      </div>
      {open ? (
        <>
          <button type="button" className="fixed inset-0 z-40 cursor-default" aria-label="Close menu" onClick={close} />
          <div
            role="menu"
            className={cn(menuPanel, 'fixed z-50 py-4')}
            style={{ top: position.y, left: position.x }}
          >
            {items.map((item) => (
              <button
                key={item.label}
                type="button"
                role="menuitem"
                className={cn(
                  'flex w-full items-center gap-8 px-12 py-8 text-start text-[13px] transition-colors hover:bg-hover',
                  item.destructive ? 'text-danger' : 'text-ink',
                )}
                onClick={() => { item.onSelect?.(); close() }}
              >
                <span className="flex-1">{item.label}</span>
                {item.shortcut ? <span className="text-[11px] text-faint">{item.shortcut}</span> : null}
              </button>
            ))}
          </div>
        </>
      ) : null}
    </>
  )
}
