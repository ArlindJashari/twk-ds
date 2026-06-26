import { cloneElement, useId, useRef, useState } from 'react'
import { cn } from '../../lib/cn.js'
import { useDismiss } from '../../lib/hooks.js'
import { menuPanel } from './primitives.js'

export default function Popover({ trigger, children, align = 'start', label = 'Popover' }) {
  const [open, setOpen] = useState(false)
  const id = useId()
  const ref = useDismiss(open, () => setOpen(false))
  const triggerRef = useRef(null)

  const triggerElement = cloneElement(trigger, {
    ref: triggerRef,
    'aria-expanded': open,
    'aria-controls': open ? id : undefined,
    onClick: (event) => {
      trigger.props.onClick?.(event)
      setOpen((value) => !value)
    },
  })

  return (
    <div ref={ref} className="relative inline-flex">
      {triggerElement}
      {open ? (
        <div
          id={id}
          role="dialog"
          aria-label={label}
          className={cn(
            'absolute top-[calc(100%+6px)] z-40 bg-content',
            menuPanel,
            align === 'end' ? 'end-0' : 'start-0',
          )}
        >
          {children}
        </div>
      ) : null}
    </div>
  )
}
