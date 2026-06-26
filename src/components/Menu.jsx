import { cloneElement, useId, useRef, useState } from 'react'
import { CaretRight } from './icons.jsx'
import { useDismiss } from '../lib/hooks.js'

const panelVariants = {
  default: 'min-w-[210px] rounded-lg p-4 shadow-pop',
  workspace:
    'w-[226px] rounded-panel border-[0.5px] border-line bg-surface p-0 pb-[6px] pt-[6px] shadow-[0_6px_18px_rgba(0,0,0,0.02),0_3px_9px_rgba(0,0,0,0.04)]',
}

const itemVariants = {
  default:
    'gap-8 rounded-xs px-8 py-[6px] hover:bg-hover focus-visible:bg-hover',
  workspace: '',
}

export default function Menu({
  trigger,
  children,
  align = 'end',
  label = 'Menu',
  variant = 'default',
}) {
  const [open, setOpen] = useState(false)
  const id = useId()
  const ref = useDismiss(open, () => setOpen(false))
  const triggerRef = useRef(null)

  const triggerElement = cloneElement(trigger, {
    ref: triggerRef,
    'aria-haspopup': 'menu',
    'aria-expanded': open,
    'aria-controls': open ? id : undefined,
    className: [
      trigger.props.className,
      open && variant === 'workspace' ? 'ring-2 ring-accent' : '',
    ].filter(Boolean).join(' '),
    onClick: (event) => {
      trigger.props.onClick?.(event)
      setOpen((value) => !value)
    },
    onKeyDown: (event) => {
      trigger.props.onKeyDown?.(event)
      if (event.key === 'ArrowDown') {
        event.preventDefault()
        setOpen(true)
        requestAnimationFrame(() => {
          ref.current?.querySelector('[role^="menuitem"]')?.focus()
        })
      }
    },
  })

  const onMenuKeyDown = (event) => {
    const items = [...event.currentTarget.querySelectorAll('[role^="menuitem"]')]
    const currentIndex = items.indexOf(document.activeElement)

    if (event.key === 'Escape') {
      event.preventDefault()
      event.stopPropagation()
      setOpen(false)
      triggerRef.current?.focus()
    } else if (event.key === 'ArrowDown' && items.length > 0) {
      event.preventDefault()
      items[(currentIndex + 1 + items.length) % items.length].focus()
    } else if (event.key === 'ArrowUp' && items.length > 0) {
      event.preventDefault()
      items[(currentIndex - 1 + items.length) % items.length].focus()
    } else if (event.key === 'Home' && items.length > 0) {
      event.preventDefault()
      items[0].focus()
    } else if (event.key === 'End' && items.length > 0) {
      event.preventDefault()
      items[items.length - 1].focus()
    }
  }

  return (
    <div ref={ref} className="relative">
      {triggerElement}
      {open && (
        <div
          id={id}
          role="menu"
          aria-label={label}
          className={[
            'absolute top-[calc(100%+4.5px)] z-40 bg-content',
            panelVariants[variant],
            align === 'end' ? 'end-0' : 'start-0',
          ].join(' ')}
          onClick={() => setOpen(false)}
          onKeyDown={onMenuKeyDown}
        >
          {children}
        </div>
      )}
    </div>
  )
}

export function MenuShortcut({ keys, children }) {
  if (keys) {
    if (keys.length === 2) {
      const isModifier = /^[⌘⌃⌥⇧]$/.test(keys[0])
      return (
        <span className="flex shrink-0 items-center gap-[2px] text-[11px] font-normal leading-none text-[lch(40_1_282)]">
          <kbd className="font-[inherit]">{keys[0]}</kbd>
          {isModifier ? null : <span>then</span>}
          <kbd className="font-[inherit]">{keys[1]}</kbd>
        </span>
      )
    }
    return (
      <span className="flex shrink-0 items-center gap-[4px] text-[11px] font-normal leading-none text-[lch(40_1_282)]">
        {keys.map((key) => (
          <kbd key={key} className="font-[inherit]">{key}</kbd>
        ))}
      </span>
    )
  }
  return (
    <span className="ms-12 flex shrink-0 items-center gap-[3px] text-[11px] font-normal leading-none text-[lch(40_1_282)]">
      {children}
    </span>
  )
}

export function MenuItem({
  children,
  onClick,
  href,
  shortcut,
  keys,
  submenu = false,
  variant = 'default',
}) {
  const hasTrailing = Boolean(keys || shortcut || submenu)
  const trailing = hasTrailing ? (
    <span className="ms-auto flex shrink-0 items-center gap-8 ps-8">
      {keys ? <MenuShortcut keys={keys} /> : shortcut ? <MenuShortcut>{shortcut}</MenuShortcut> : null}
      {submenu ? (
        <CaretRight size={12} className="shrink-0 text-[lch(40_1_282)] rtl:rotate-180" aria-hidden />
      ) : null}
    </span>
  ) : null
  const content = (
    <>
      <span className="min-w-0 flex-1 truncate">{children}</span>
      {trailing}
    </>
  )

  if (variant === 'workspace') {
    const innerClassName = [
      'relative flex h-[32px] w-full items-center rounded-lg px-[8px] pe-[12px]',
      'text-start text-[13px] font-normal leading-[19.5px] text-ink outline-none transition-colors',
      'hover:bg-menu-hover focus-visible:bg-menu-hover',
    ].join(' ')
    const shell = href ? (
      <a role="menuitem" href={href} className={innerClassName}>
        {content}
      </a>
    ) : (
      <button role="menuitem" type="button" onClick={onClick} className={innerClassName}>
        {content}
      </button>
    )
    return <div className="px-[6px]">{shell}</div>
  }

  const className = [
    'flex w-full items-center text-start text-[13px] font-normal text-ink outline-none transition-colors',
    itemVariants[variant],
  ].join(' ')
  if (href) {
    return (
      <a role="menuitem" href={href} className={className}>
        {content}
      </a>
    )
  }
  return (
    <button role="menuitem" type="button" onClick={onClick} className={className}>
      {content}
    </button>
  )
}

export function MenuLabel({ children }) {
  return <div className="px-8 py-[6px] text-[11px] font-medium uppercase tracking-wide text-faint">{children}</div>
}

export function MenuSeparator({ variant = 'default' }) {
  if (variant === 'workspace') {
    return (
      <div className="py-[6px]" role="separator">
        <div className="h-px bg-line-subtle" />
      </div>
    )
  }
  return <div className="my-4 h-px bg-line-subtle" role="separator" />
}
