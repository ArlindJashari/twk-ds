import { cloneElement, useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { CaretRight, SearchIcon } from './icons.jsx'
import Kbd from './ui/Kbd.jsx'

const MENU_GAP = 4.5

const panelVariants = {
  default: 'min-w-[210px] rounded-lg p-4 shadow-pop',
  workspace:
    'w-[226px] rounded-panel border-[0.5px] border-line bg-surface p-0 pb-[6px] pt-[6px] shadow-[0_6px_18px_rgba(0,0,0,0.02),0_3px_9px_rgba(0,0,0,0.04)]',
  filter:
    'w-[260px] rounded-lg border-[0.5px] border-line bg-content p-0 pb-4 pt-0 shadow-pop',
}

const itemVariants = {
  default:
    'gap-8 rounded-xs px-8 py-[6px] hover:bg-hover focus-visible:bg-hover',
  workspace: '',
  filter: 'gap-8 px-10 py-[6px] hover:bg-hover focus-visible:bg-hover',
}

function getMenuStyle(trigger, align) {
  if (!trigger) return null
  const rect = trigger.getBoundingClientRect()
  const top = rect.bottom + MENU_GAP
  if (align === 'end') {
    return { top, left: rect.right, transform: 'translateX(-100%)' }
  }
  return { top, left: rect.left }
}

export default function Menu({
  trigger,
  children,
  align = 'end',
  label = 'Menu',
  variant = 'default',
}) {
  const [open, setOpen] = useState(false)
  const [menuStyle, setMenuStyle] = useState(null)
  const id = useId()
  const containerRef = useRef(null)
  const panelRef = useRef(null)
  const triggerRef = useRef(null)

  const updatePosition = useCallback(() => {
    setMenuStyle(getMenuStyle(triggerRef.current, align))
  }, [align])

  useLayoutEffect(() => {
    if (!open) return undefined
    updatePosition()
    const onScrollOrResize = () => updatePosition()
    window.addEventListener('resize', onScrollOrResize)
    window.addEventListener('scroll', onScrollOrResize, true)
    return () => {
      window.removeEventListener('resize', onScrollOrResize)
      window.removeEventListener('scroll', onScrollOrResize, true)
    }
  }, [open, updatePosition])

  useEffect(() => {
    if (!open) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    const onPointer = (event) => {
      const inTrigger = containerRef.current?.contains(event.target)
      const inPanel = panelRef.current?.contains(event.target)
      if (!inTrigger && !inPanel) setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onPointer)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onPointer)
    }
  }, [open])

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
          panelRef.current?.querySelector('[role^="menuitem"]')?.focus()
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
    <div ref={containerRef} className="relative">
      {triggerElement}
      {open && menuStyle && createPortal(
        <div
          ref={panelRef}
          id={id}
          role="menu"
          aria-label={label}
          style={menuStyle}
          className={[
            'fixed z-50 bg-content',
            panelVariants[variant],
          ].join(' ')}
          onClick={(event) => {
            if (event.target.closest('[data-menu-persist]')) return
            setOpen(false)
          }}
          onKeyDown={onMenuKeyDown}
        >
          {children}
        </div>,
        document.body,
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

export function MenuSearch({ placeholder, shortcut }) {
  return (
    <div
      data-menu-persist
      className="flex items-center gap-8 border-b border-line-subtle px-10 py-8"
      onClick={(event) => event.stopPropagation()}
    >
      <SearchIcon size={14} strokeWidth={1.5} className="shrink-0 text-faint" />
      <input
        type="text"
        placeholder={placeholder}
        className="min-w-0 flex-1 bg-transparent text-[13px] text-body outline-none placeholder:text-faint"
        onClick={(event) => event.stopPropagation()}
      />
      {shortcut ? <Kbd className="shrink-0">{shortcut}</Kbd> : null}
    </div>
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
  icon: Icon,
}) {
  const hasTrailing = Boolean(keys || shortcut || submenu)
  const trailing = hasTrailing ? (
    <span className="ms-auto flex shrink-0 items-center gap-8 ps-8">
      {keys ? <MenuShortcut keys={keys} /> : shortcut ? <MenuShortcut>{shortcut}</MenuShortcut> : null}
      {submenu ? (
        <CaretRight size={12} className="shrink-0 text-faint rtl:rotate-180" aria-hidden />
      ) : null}
    </span>
  ) : null
  const leading = Icon ? (
    <Icon size={14} strokeWidth={1.5} className="shrink-0 text-faint" />
  ) : null
  const content = (
    <>
      {leading}
      <span className="min-w-0 flex-1 truncate">{children}</span>
      {trailing}
    </>
  )

  if (variant === 'workspace') {
    const innerClassName = [
      'relative flex h-[32px] w-full items-center gap-8 rounded-lg px-[8px] pe-[12px]',
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
  if (variant === 'workspace' || variant === 'filter') {
    return (
      <div className="py-[6px]" role="separator">
        <div className="h-px bg-line-subtle" />
      </div>
    )
  }
  return <div className="my-4 h-px bg-line-subtle" role="separator" />
}
