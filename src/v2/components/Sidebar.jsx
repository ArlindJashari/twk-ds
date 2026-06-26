import { useEffect, useState } from 'react'
import {
  primaryNav, navGroups, midNav, devNav, isActive,
} from '../../lib/nav.js'
import {
  SearchIcon, ComposeIcon, ChevronDown, ChevronRight, SidebarHelpIcon,
} from '../../components/icons.jsx'
import UserMenu from './UserMenu.jsx'
import { fromV2Path, v2Href } from '../lib/paths.js'
import { focusRing, navRow } from './ui/primitives.js'

function rowTone(active) {
  return [
    navRow,
    active
      ? 'bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))]'
      : 'text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--accent-foreground))]',
  ].join(' ')
}

function iconTone(active) {
  return active ? 'text-[hsl(var(--primary))]' : 'text-[hsl(var(--muted-foreground))] group-hover:text-[hsl(var(--accent-foreground))]'
}

function NavRow({ item, currentPath, onNavigate }) {
  const appPath = fromV2Path(currentPath)
  const active = isActive(appPath, item.path)
  const Icon = item.icon
  return (
    <a
      href={v2Href(item.path)}
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
  const appPath = fromV2Path(currentPath)
  const groupActive = isActive(appPath, group.path)
  const childActive = group.children.some((c) => isActive(appPath, c.path))
  const [open, setOpen] = useState(true)

  useEffect(() => {
    if (childActive || groupActive) setOpen(true)
  }, [childActive, groupActive])

  return (
    <div className="mt-1">
      <a
        href={v2Href(group.path)}
        aria-current={groupActive ? 'page' : undefined}
        onClick={onNavigate}
        className={rowTone(groupActive)}
      >
        <span className="truncate">{group.label}</span>
        <button
          type="button"
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); setOpen((v) => !v) }}
          aria-label={`${open ? 'Collapse' : 'Expand'} ${group.label}`}
          className="ms-auto grid size-3 place-items-center rounded text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--accent-foreground))]"
        >
          {open ? <ChevronDown size={10} strokeWidth={1.75} /> : <ChevronRight size={10} strokeWidth={1.75} />}
        </button>
      </a>
      {open && (
        <div className="mt-px flex flex-col gap-px ps-2">
          {group.children.map((child) => (
            <NavRow key={child.path} item={child} currentPath={currentPath} onNavigate={onNavigate} />
          ))}
        </div>
      )}
    </div>
  )
}

function DevNavRow({ item, currentPath, onNavigate }) {
  const appPath = fromV2Path(currentPath)
  const active = isActive(appPath, item.path)
  const Icon = item.icon
  return (
    <a
      href={v2Href(item.path)}
      aria-current={active ? 'page' : undefined}
      onClick={onNavigate}
      className={[
        navRow,
        'mt-4 border border-[hsl(var(--border))] bg-[hsl(var(--card))] shadow-[var(--shadow-sm)]',
        active
          ? 'text-[hsl(var(--primary))] ring-2 ring-[hsl(var(--primary)/0.15)]'
          : 'text-[hsl(var(--foreground))] hover:bg-[hsl(var(--accent))]',
      ].join(' ')}
    >
      <Icon size={14} strokeWidth={1.5} className="text-[hsl(var(--primary))]" />
      <span className="flex-1 truncate">{item.label}</span>
    </a>
  )
}

export default function Sidebar({ currentPath, onNavigate, onSearch, hideHeader = false }) {
  const openHelp = (event) => {
    onNavigate?.(event)
    window.location.hash = v2Href('/help').slice(1)
  }

  return (
    <div className="relative flex h-full flex-col bg-[hsl(var(--muted))]">
      {!hideHeader && (
        <div className="flex h-[52px] shrink-0 flex-col px-3 pt-2">
          <div className="flex h-11 items-center">
            <UserMenu />
            <div className="min-w-0 flex-1" aria-hidden="true" />
            <div className="flex shrink-0 items-center gap-1">
              <button
                type="button"
                aria-label="Search"
                title="Search (⌘K)"
                onClick={onSearch}
                className={`grid size-8 place-items-center rounded-md text-[hsl(var(--muted-foreground))] transition-colors hover:bg-[hsl(var(--accent))] ${focusRing}`}
              >
                <SearchIcon size={14} strokeWidth={1.5} />
              </button>
              <button
                type="button"
                aria-label="New issue"
                title="New issue"
                className={`grid size-8 place-items-center rounded-md border border-[hsl(var(--border))] bg-[hsl(var(--card))] text-[hsl(var(--muted-foreground))] shadow-[var(--shadow-sm)] transition-colors hover:bg-[hsl(var(--accent))] ${focusRing}`}
              >
                <ComposeIcon size={14} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      )}

      <div className={`min-h-0 flex-1 overflow-hidden ${hideHeader ? '' : 'mt-2 mb-0.5'}`}>
        <nav aria-label="Primary" className="flex h-full flex-col overflow-y-auto px-3 pb-12">
          <div className="flex flex-col gap-px">
            {primaryNav.map((item) => <NavRow key={item.path} item={item} currentPath={currentPath} onNavigate={onNavigate} />)}
            <NavGroupRow group={navGroups[0]} currentPath={currentPath} onNavigate={onNavigate} />
            {midNav.map((item) => <NavRow key={item.path} item={item} currentPath={currentPath} onNavigate={onNavigate} />)}
            <NavGroupRow group={navGroups[1]} currentPath={currentPath} onNavigate={onNavigate} />
            <DevNavRow item={devNav} currentPath={currentPath} onNavigate={onNavigate} />
          </div>
        </nav>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-11 px-2.5 py-2.5">
        <button
          type="button"
          aria-label="Open Help menu"
          onClick={openHelp}
          className={`pointer-events-auto grid size-6 place-items-center rounded-full text-[hsl(var(--muted-foreground))] transition-colors hover:bg-[hsl(var(--accent))] ${focusRing}`}
        >
          <span aria-hidden="true" className="flex size-3.5 items-center justify-center overflow-hidden [&_svg]:size-3.5">
            <SidebarHelpIcon />
          </span>
        </button>
      </div>
    </div>
  )
}
