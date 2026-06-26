import { useEffect, useRef } from 'react'
import { cn } from '../../lib/cn.js'
import {
  CalendarIcon, CalendarPlusIcon, ChevronDown, CloseIcon, DotsIcon, FilePlusIcon,
  LinkIcon, MaximizeIcon, PaperclipIcon, ProjectsIcon, SparkleIcon, StatusIcon,
  LabelsIcon,   ProfileIcon, SlidersIcon,
} from '../icons.jsx'
import { focusRing, modalOverlay } from './primitives.js'
import Button from './Button.jsx'
import DropdownMenu from './DropdownMenu.jsx'
import IconButton from './IconButton.jsx'
import { MenuItem, MenuSearch, MenuSeparator } from '../Menu.jsx'
import { PriorityIcon } from './PriorityStatus.jsx'
import Kbd from './Kbd.jsx'

export function PropertyPill({ icon: Icon, label, onClick, className }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'inline-flex h-[28px] shrink-0 items-center gap-6 rounded-full border-[0.5px] border-line-subtle bg-content px-10 text-[12px] font-medium text-pill-muted shadow-stroke-faint transition-colors hover:bg-hover hover:text-body',
        focusRing,
        className,
      )}
    >
      {Icon ? <Icon size={14} strokeWidth={1.5} className="shrink-0 text-faint" /> : null}
      <span>{label}</span>
    </button>
  )
}

export function IssueOverflowMenu({ label, copy }) {
  return (
    <DropdownMenu
      label={label}
      variant="filter"
      align="start"
      trigger={(
        <IconButton variant="filled" label={label} size="sm">
          <DotsIcon size={14} strokeWidth={1.5} />
        </IconButton>
      )}
    >
      <MenuItem icon={CalendarIcon} submenu keys={['D']}>{copy.setDueDate}</MenuItem>
      <MenuItem icon={CalendarPlusIcon}>{copy.makeRecurring}</MenuItem>
      <MenuItem icon={LinkIcon} keys={['⌃', 'L']}>{copy.addLink}</MenuItem>
      <MenuSeparator />
      <MenuItem icon={FilePlusIcon} keys={['⌘', '⇧', 'O']}>{copy.addSubIssue}</MenuItem>
    </DropdownMenu>
  )
}

function LayoutTemplateIcon(props) {
  return (
    <svg width={props.size ?? 14} height={props.size ?? 14} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <rect x="2.5" y="2.5" width="11" height="11" rx="1.5" />
      <path d="M5.5 2.5v11M2.5 6.5h11" />
    </svg>
  )
}

export function FilterMenu({ label, copy, trigger }) {
  const groups = [
    [
      { icon: SparkleIcon, label: copy.aiFilter },
      { icon: SlidersIcon, label: copy.advancedFilter },
    ],
    [
      { icon: StatusIcon, label: copy.status, submenu: true },
      { icon: ProfileIcon, label: copy.assignee, submenu: true },
      { icon: ProfileIcon, label: copy.agent, submenu: true },
      { icon: ProfileIcon, label: copy.creator, submenu: true },
      { icon: PriorityIcon, label: copy.priority, submenu: true },
      { icon: LabelsIcon, label: copy.labels, submenu: true },
      { icon: LinkIcon, label: copy.relations, submenu: true },
      { icon: LabelsIcon, label: copy.suggestedLabel, submenu: true },
      { icon: CalendarIcon, label: copy.dates, submenu: true },
    ],
    [
      { icon: ProjectsIcon, label: copy.project, submenu: true },
      { icon: SlidersIcon, label: copy.projectProperties, submenu: true },
    ],
    [
      { icon: ProfileIcon, label: copy.subscribers, submenu: true },
      { icon: LinkIcon, label: copy.externalSource, submenu: true },
      { icon: StatusIcon, label: copy.autoClosed, submenu: true },
      { icon: FilePlusIcon, label: copy.content, submenu: true },
      { icon: LinkIcon, label: copy.links, submenu: true },
      { icon: LayoutTemplateIcon, label: copy.template, submenu: true },
    ],
  ]

  return (
    <DropdownMenu
      label={label}
      variant="filter"
      align="start"
      trigger={trigger ?? <Button variant="secondary">{copy.openFilter}</Button>}
    >
      <MenuSearch placeholder={copy.addFilter} shortcut="F" />
      {groups.map((group, groupIndex) => (
        <div key={groupIndex}>
          {groupIndex > 0 ? <MenuSeparator variant="filter" /> : null}
          {group.map((item) => (
            <MenuItem
              key={item.label}
              variant="filter"
              icon={item.icon}
              submenu={item.submenu}
              onClick={() => {}}
            >
              {item.label}
            </MenuItem>
          ))}
        </div>
      ))}
    </DropdownMenu>
  )
}

export function IssueComposer(props) {
  return <CreateComposer {...props} />
}

export function CreateComposer({ open, onClose, copy }) {
  const titleRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => { if (e.key === 'Escape') onClose?.() }
    document.addEventListener('keydown', onKey)
    requestAnimationFrame(() => titleRef.current?.focus())
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className={modalOverlay}
      role="dialog"
      aria-modal="true"
      aria-label={copy.newIssue}
      onClick={(e) => { if (e.target === e.currentTarget) onClose?.() }}
    >
      <div className="flex w-full max-w-[680px] flex-col overflow-hidden rounded-panel border-[0.5px] border-line bg-content shadow-modal">
        <div className="flex items-center justify-between gap-8 px-16 pt-14">
          <div className="flex min-w-0 items-center gap-8">
            <span className="grid size-[20px] shrink-0 place-items-center rounded-full bg-accent text-[10px] font-semibold text-onaccent">
              {copy.teamInitials}
            </span>
            <nav aria-label="Breadcrumb" className="flex min-w-0 items-center gap-6 text-[12px] text-sub">
              <span className="font-medium text-body">{copy.team}</span>
              <ChevronDown size={10} className="rotate-[-90deg] text-faint rtl:rotate-90" aria-hidden />
              <span className="truncate text-faint">{copy.newIssue}</span>
            </nav>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <IconButton label={copy.expand} size="sm">
              <MaximizeIcon size={14} strokeWidth={1.5} />
            </IconButton>
            <IconButton label={copy.close} size="sm" onClick={onClose}>
              <CloseIcon size={14} strokeWidth={1.5} />
            </IconButton>
          </div>
        </div>

        <div className="px-16 pb-12 pt-10">
          <input
            ref={titleRef}
            type="text"
            placeholder={copy.issueTitle}
            className="w-full bg-transparent text-[20px] font-medium leading-[1.3] text-ink outline-none placeholder:text-faint"
          />
          <textarea
            rows={2}
            placeholder={copy.addDescription}
            className="mt-10 w-full resize-none bg-transparent text-[13px] leading-[1.45] text-body outline-none placeholder:text-faint"
          />
        </div>

        <div className="flex flex-wrap items-center gap-6 px-16 pb-14">
          <PropertyPill icon={StatusIcon} label={copy.todo} />
          <PropertyPill icon={PriorityIcon} label={copy.priority} />
          <PropertyPill icon={ProfileIcon} label={copy.assignee} />
          <PropertyPill icon={ProjectsIcon} label={copy.project} />
          <PropertyPill icon={LabelsIcon} label={copy.labels} />
          <IssueOverflowMenu label={copy.moreActions} copy={copy} />
        </div>

        <div className="flex items-center justify-between border-t border-line-subtle px-16 py-12">
          <IconButton variant="ghost" label={copy.attach} size="sm">
            <PaperclipIcon size={14} strokeWidth={1.5} />
          </IconButton>
          <div className="flex items-center gap-6">
            <Button onClick={onClose}>{copy.createIssue}</Button>
            <IconButton variant="filled" label={copy.createOptions} size="sm">
              <ChevronDown size={12} />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export function FilterMenuShortcut({ children }) {
  return (
    <span className="ms-auto shrink-0">
      <Kbd>{children}</Kbd>
    </span>
  )
}
