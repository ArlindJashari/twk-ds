import { useEffect, useState } from 'react'
import {
  primaryNav, navGroups, midNav, devNav, isActive,
} from '../lib/nav.js'
import {
  SearchIcon, ComposeIcon, ChevronDown, ChevronRight, SidebarHelpIcon,
} from './icons.jsx'
import UserMenu from './UserMenu.jsx'

const rowBase =
  'group flex h-[28px] w-full items-center gap-8 rounded-lg text-[13px] leading-none outline-none transition-colors focus-visible:ring-2 focus-visible:ring-accent'

const groupLabelBase =
  'group flex h-[28px] w-full items-center gap-[2px] rounded-lg text-[12px] font-medium leading-none outline-none transition-colors focus-visible:ring-2 focus-visible:ring-accent'

function rowTone(active) {
  return [
    rowBase,
    'pl-10 pr-[9px] font-medium',
    active
      ? 'bg-nav-active-bg text-nav-active'
      : 'text-nav hover:bg-shell-hover hover:text-nav-active',
  ].join(' ')
}

function groupLabelTone(active) {
  return [
    groupLabelBase,
    'pl-[15px] pr-[9px]',
    active
      ? 'bg-nav-active-bg text-nav-active'
      : 'text-nav hover:bg-shell-hover hover:text-nav-active',
  ].join(' ')
}

function iconTone(active) {
  return active ? 'text-nav-active' : 'text-nav group-hover:text-nav-active'
}

function NavRow({ item, currentPath, onNavigate }) {
  const active = isActive(currentPath, item.path)
  const Icon = item.icon
  return (
    <a
      href={`#${item.path}`}
      aria-current={active ? 'page' : undefined}
      onClick={onNavigate}
      className={rowTone(active)}
    >
      <Icon size={14} strokeWidth={1.5} className={iconTone(active)} />
      <span className="flex-1 truncate">{item.label}</span>
    </a>
  )
}

function NavGroupRow({ group, currentPath, onNavigate }) {
  const groupActive = isActive(currentPath, group.path)
  const childActive = group.children.some((c) => isActive(currentPath, c.path))
  const [open, setOpen] = useState(true)

  useEffect(() => {
    if (childActive || groupActive) setOpen(true)
  }, [childActive, groupActive])

  return (
    <div className="mt-8">
      <a
        href={`#${group.path}`}
        aria-current={groupActive ? 'page' : undefined}
        onClick={onNavigate}
        className={groupLabelTone(groupActive)}
      >
        <span className="truncate">{group.label}</span>
        <button
          type="button"
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); setOpen((v) => !v) }}
          aria-label={`${open ? 'Collapse' : 'Expand'} ${group.label}`}
          className="grid size-[12px] shrink-0 place-items-center rounded-xs text-nav hover:text-nav-active"
        >
          {open
            ? <ChevronDown size={10} strokeWidth={1.75} />
            : <ChevronRight size={10} strokeWidth={1.75} />}
        </button>
      </a>
      {open && (
        <div className="mt-[1px] flex flex-col gap-[1px]">
          {group.children.map((child) => (
            <NavRow key={child.path} item={child} currentPath={currentPath} onNavigate={onNavigate} />
          ))}
        </div>
      )}
    </div>
  )
}

function DevNavRow({ item, currentPath, onNavigate }) {
  const active = isActive(currentPath, item.path)
  const Icon = item.icon
  return (
    <a
      href={`#${item.path}`}
      aria-current={active ? 'page' : undefined}
      onClick={onNavigate}
      className={[
        rowBase,
        'mt-16 ps-10 pe-[9px] font-medium',
        'border-[0.5px] border-line bg-content shadow-panel',
        active
          ? 'text-accent ring-2 ring-accent/15'
          : 'text-ink hover:bg-hover hover:shadow-pop',
      ].join(' ')}
    >
      <Icon size={14} strokeWidth={1.5} className="text-accent" />
      <span className="flex-1 truncate">{item.label}</span>
    </a>
  )
}

export default function Sidebar({ currentPath, onNavigate, onSearch, hideHeader = false }) {
  const openHelp = (event) => {
    onNavigate?.(event)
    window.location.hash = '#/help'
  }

  return (
    <div className="relative flex h-full flex-col bg-sidebar">
      {!hideHeader && (
        <div className="flex h-[52px] shrink-0 flex-col px-12 pt-8">
          <div className="flex h-[44px] items-center">
            <UserMenu />
            <div className="min-w-0 flex-1" aria-hidden="true" />
            <div className="flex shrink-0 items-center gap-4">
              <button
                type="button"
                aria-label="Search"
                title="Search (⌘K)"
                onClick={onSearch}
                className="grid size-[28px] place-items-center rounded-full border-[0.5px] border-transparent px-[2px] text-[12px] font-medium text-body outline-none transition-colors hover:bg-shell-hover focus-visible:ring-2 focus-visible:ring-accent"
              >
                <SearchIcon size={14} strokeWidth={1.5} />
              </button>
              <button
                type="button"
                aria-label="New issue"
                title="New issue"
                className="grid size-[28px] place-items-center rounded-full border-[0.5px] border-transparent bg-content px-[2px] text-[12px] font-medium text-body shadow-panel outline-none transition-colors hover:bg-shell-hover focus-visible:ring-2 focus-visible:ring-accent"
              >
                <ComposeIcon size={14} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      )}

      <div className={`min-h-0 flex-1 overflow-hidden ${hideHeader ? '' : 'mt-[7.5px] mb-[2px]'}`}>
        <nav aria-label="Primary" className="flex h-full flex-col overflow-y-auto px-12 pb-[52px]">
          <div className="flex flex-col gap-[1px]">
            {primaryNav.map((item) => <NavRow key={item.path} item={item} currentPath={currentPath} onNavigate={onNavigate} />)}
            <NavGroupRow group={navGroups[0]} currentPath={currentPath} onNavigate={onNavigate} />
            {midNav.map((item) => <NavRow key={item.path} item={item} currentPath={currentPath} onNavigate={onNavigate} />)}
            <NavGroupRow group={navGroups[1]} currentPath={currentPath} onNavigate={onNavigate} />
            <DevNavRow item={devNav} currentPath={currentPath} onNavigate={onNavigate} />
          </div>
        </nav>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[44px] px-[10px] py-[10px]">
        <button
          type="button"
          aria-label="Open Help menu"
          onClick={openHelp}
          className="pointer-events-auto grid size-[24px] place-items-center rounded-full border-[0.5px] border-transparent px-[2px] text-[12px] font-medium leading-none text-body outline-none transition-colors hover:bg-[lch(96_0_282)] focus-visible:outline-none"
        >
          <span aria-hidden="true" className="flex size-[14px] items-center justify-center overflow-hidden [&_svg]:size-[14px]">
            <SidebarHelpIcon />
          </span>
        </button>
      </div>
    </div>
  )
}
