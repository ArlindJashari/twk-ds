import { useCallback, useState } from 'react'
import { cn } from '../../lib/cn.js'
import { menuItemInset, menuItemInner, menuPanel } from './primitives.js'

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
            className={cn(menuPanel, 'fixed z-50 p-0 pb-[6px] pt-[6px]')}
            style={{ top: position.y, left: position.x }}
          >
            {items.map((item) => (
              <div key={item.label} className={menuItemInset}>
                <button
                  type="button"
                  role="menuitem"
                  className={cn(
                    menuItemInner,
                    item.destructive ? 'text-danger' : 'text-ink',
                  )}
                  onClick={() => { item.onSelect?.(); close() }}
                >
                  <span className="min-w-0 flex-1 truncate">{item.label}</span>
                  {item.shortcut ? (
                    <span className="ms-auto shrink-0 ps-8 text-[11px] text-faint">{item.shortcut}</span>
                  ) : null}
                </button>
              </div>
            ))}
          </div>
        </>
      ) : null}
    </>
  )
}
