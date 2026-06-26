import { useMemo, useState } from 'react'
import PageFrame from '../PageFrame.jsx'
import {
  DisplayOptionsIcon, StackIcon, TawakkalnaToolbarDisplayIcon, TawakkalnaToolbarFilterIcon,
} from '../icons.jsx'
import { cn } from '../../lib/cn.js'
import { focusRing } from './primitives.js'
import DropdownMenu from './DropdownMenu.jsx'
import EmptyState from './EmptyState.jsx'
import IconButton from './IconButton.jsx'
import Select from './Select.jsx'
import Switch from './Switch.jsx'
import { FilterMenu } from './IssuePatterns.jsx'

function TimelineIcon(props) {
  return (
    <svg width={props.size ?? 14} height={props.size ?? 14} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" aria-hidden {...props}>
      <path d="M2.5 12.5h11M4 9.5V6M8 9.5V4M12 9.5V7" />
    </svg>
  )
}

export function PropertyChip({ active = false, onClick, children, className }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'inline-flex h-[24px] items-center rounded-full px-8 text-[11px] font-medium transition-colors',
        focusRing,
        active ? 'bg-ink text-content' : 'bg-well text-sub hover:bg-hover hover:text-ink',
        className,
      )}
    >
      {children}
    </button>
  )
}

function SettingRow({ label, children }) {
  return (
    <div className="flex items-center justify-between gap-12">
      <span className="shrink-0 text-[12px] font-medium text-sub">{label}</span>
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  )
}

function ViewModeToggle({ value, onChange, options }) {
  return (
    <div
      className="flex w-full items-center gap-[3px] rounded-full border-[0.5px] border-line-subtle bg-well p-[3px]"
      role="group"
      aria-label="View mode"
    >
      {options.map((option) => {
        const Icon = option.icon
        const active = value === option.value
        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={active}
            onClick={() => onChange?.(option.value)}
            className={cn(
              'flex h-[28px] min-w-0 flex-1 items-center justify-center gap-6 rounded-full text-[12px] font-medium transition-colors',
              focusRing,
              active ? 'bg-content text-ink shadow-stroke-faint' : 'text-sub hover:text-ink',
            )}
          >
            {Icon ? <Icon size={14} strokeWidth={1.5} aria-hidden /> : null}
            <span>{option.label}</span>
          </button>
        )
      })}
    </div>
  )
}

function ToggleRow({ label, checked, onChange }) {
  return (
    <div className="flex items-center justify-between gap-12 py-2">
      <span className="text-[12px] text-sub">{label}</span>
      <Switch checked={checked} onClick={() => onChange?.(!checked)} aria-label={label} />
    </div>
  )
}

const VARIANT_CONFIG = {
  issues: {
    views: [
      { value: 'list', label: 'List', icon: StackIcon },
      { value: 'board', label: 'Board', icon: DisplayOptionsIcon },
    ],
    settings: [
      { id: 'grouping', labelKey: 'grouping', defaultValue: 'status', options: ['status', 'none', 'priority', 'project'] },
      { id: 'subGrouping', labelKey: 'subGrouping', defaultValue: 'none', options: ['none', 'priority', 'assignee'] },
      { id: 'ordering', labelKey: 'ordering', defaultValue: 'priority', options: ['priority', 'manual', 'created', 'updated'] },
    ],
    toggles: [
      { id: 'orderCompleted', labelKey: 'orderCompleted', defaultChecked: false },
      { id: 'showSubIssues', labelKey: 'showSubIssues', defaultChecked: true },
    ],
    listOptions: [
      { id: 'nestedSubIssues', labelKey: 'nestedSubIssues', defaultChecked: false },
      { id: 'showEmptyGroups', labelKey: 'showEmptyGroups', defaultChecked: false },
    ],
    properties: [
      'id', 'status', 'assignee', 'priority', 'project', 'dueDate', 'milestone',
      'labels', 'links', 'timeInStatus', 'created', 'updated', 'pullRequests',
    ],
    defaultActive: ['id', 'status', 'assignee', 'priority', 'pullRequests'],
    showListOptions: true,
    showFooter: false,
  },
  projects: {
    views: [
      { value: 'list', label: 'List', icon: StackIcon },
      { value: 'board', label: 'Board', icon: DisplayOptionsIcon },
      { value: 'timeline', label: 'Timeline', icon: TimelineIcon },
    ],
    settings: [
      { id: 'grouping', labelKey: 'grouping', defaultValue: 'none', options: ['none', 'status', 'lead'] },
      { id: 'ordering', labelKey: 'ordering', defaultValue: 'manual', options: ['manual', 'name', 'priority', 'targetDate'] },
      { id: 'showClosed', labelKey: 'showClosed', defaultValue: 'all', options: ['all', 'open', 'closed'] },
    ],
    toggles: [],
    listOptions: [],
    properties: [
      'milestones', 'targetDate', 'initiatives', 'lead', 'status', 'members', 'startDate',
      'teams', 'health', 'dependencies', 'labels', 'rollout', 'updateSchedule', 'priority',
      'updates', 'projects',
    ],
    defaultActive: ['milestones', 'status', 'priority', 'updates', 'projects'],
    showListOptions: false,
    showFooter: true,
  },
  simple: {
    views: [
      { value: 'list', label: 'List', icon: StackIcon },
      { value: 'grid', label: 'Grid', icon: DisplayOptionsIcon },
    ],
    settings: [],
    toggles: [],
    listOptions: [],
    properties: ['name', 'status', 'owner', 'sessions', 'updated'],
    defaultActive: ['name', 'status', 'owner', 'updated'],
    showListOptions: false,
    showFooter: false,
  },
}

export function DisplayOptionsMenu({
  variant = 'issues',
  label = 'Display options',
  copy,
  trigger,
}) {
  const config = VARIANT_CONFIG[variant] ?? VARIANT_CONFIG.issues
  const [view, setView] = useState(config.views[0].value)
  const [settings, setSettings] = useState(() => (
    Object.fromEntries(config.settings.map((row) => [row.id, row.defaultValue]))
  ))
  const [toggles, setToggles] = useState(() => (
    Object.fromEntries([
      ...config.toggles.map((row) => [row.id, row.defaultChecked]),
      ...config.listOptions.map((row) => [row.id, row.defaultChecked]),
    ])
  ))
  const [activeProps, setActiveProps] = useState(() => new Set(config.defaultActive))

  const propertyLabels = useMemo(() => copy?.properties ?? {}, [copy])

  const triggerNode = trigger ?? (
    <IconButton variant="filled" label={label}>
      <TawakkalnaToolbarDisplayIcon />
    </IconButton>
  )

  return (
    <DropdownMenu label={label} variant="display" align="end" trigger={triggerNode}>
      <div className="p-12" data-menu-persist onClick={(e) => e.stopPropagation()}>
        <ViewModeToggle
          value={view}
          onChange={setView}
          options={config.views.map((v) => ({ ...v, label: copy?.views?.[v.value] ?? v.label }))}
        />

        {config.settings.length > 0 ? (
          <div className="mt-12 flex flex-col gap-8">
            {config.settings.map((row) => (
              <SettingRow key={row.id} label={copy?.[row.labelKey] ?? row.labelKey}>
                <Select
                  className="h-[28px] w-full text-[12px]"
                  value={settings[row.id]}
                  onChange={(e) => setSettings((prev) => ({ ...prev, [row.id]: e.target.value }))}
                >
                  {row.options.map((opt) => (
                    <option key={opt} value={opt}>{copy?.options?.[opt] ?? opt}</option>
                  ))}
                </Select>
              </SettingRow>
            ))}
          </div>
        ) : null}

        {config.toggles.length > 0 ? (
          <div className="mt-12 flex flex-col">
            {config.toggles.map((row) => (
              <ToggleRow
                key={row.id}
                label={copy?.[row.labelKey] ?? row.labelKey}
                checked={toggles[row.id]}
                onChange={(checked) => setToggles((prev) => ({ ...prev, [row.id]: checked }))}
              />
            ))}
          </div>
        ) : null}

        {config.showListOptions && config.listOptions.length > 0 ? (
          <div className="mt-12 border-t border-line-subtle pt-12">
            <p className="mb-8 text-[11px] font-medium uppercase tracking-wide text-faint">
              {copy?.listOptions ?? 'List options'}
            </p>
            {config.listOptions.map((row) => (
              <ToggleRow
                key={row.id}
                label={copy?.[row.labelKey] ?? row.labelKey}
                checked={toggles[row.id]}
                onChange={(checked) => setToggles((prev) => ({ ...prev, [row.id]: checked }))}
              />
            ))}
          </div>
        ) : null}

        <div className={cn('mt-12', config.showListOptions && 'border-t border-line-subtle pt-12')}>
          <p className="mb-8 text-[11px] font-medium uppercase tracking-wide text-faint">
            {copy?.displayProperties ?? 'Display properties'}
          </p>
          <div className="flex flex-wrap gap-4">
            {config.properties.map((key) => (
              <PropertyChip
                key={key}
                active={activeProps.has(key)}
                onClick={() => setActiveProps((prev) => {
                  const next = new Set(prev)
                  if (next.has(key)) next.delete(key)
                  else next.add(key)
                  return next
                })}
              >
                {propertyLabels[key] ?? key}
              </PropertyChip>
            ))}
          </div>
        </div>

        {config.showFooter ? (
          <div className="mt-12 flex items-center justify-between border-t border-line-subtle pt-12">
            <button type="button" className="text-[12px] font-medium text-sub transition-colors hover:text-ink">
              {copy?.reset ?? 'Reset'}
            </button>
            <button type="button" className="text-[12px] font-medium text-accent transition-colors hover:text-accent-hover">
              {copy?.setDefault ?? 'Set default for everyone'}
            </button>
          </div>
        ) : null}
      </div>
    </DropdownMenu>
  )
}

export function FilterToolbarMenu({ label = 'Add filter', copy, issueCopy }) {
  return (
    <FilterMenu
      label={label}
      align="end"
      copy={issueCopy ?? copy}
      trigger={(
        <IconButton variant="filled" label={label}>
          <TawakkalnaToolbarFilterIcon />
        </IconButton>
      )}
    />
  )
}

export function DisplayToolbarMenu({ variant = 'simple', label = 'Display options', copy }) {
  return <DisplayOptionsMenu variant={variant} label={label} copy={copy} />
}

export function ViewPage({
  toolbar,
  variant = 'content',
  children,
  className,
  contentClassName,
  emptyTitle,
  emptyDescription,
  emptyActionLabel,
  onEmptyAction,
  emptyActionHref,
  emptyIllustration,
}) {
  return (
    <PageFrame toolbar={toolbar}>
      {variant === 'empty' ? (
        <div className={cn('flex min-h-full flex-1 flex-col', className)}>
          <EmptyState
            illustration={emptyIllustration}
            title={emptyTitle}
            description={emptyDescription}
            actionLabel={emptyActionLabel}
            onAction={onEmptyAction}
            actionHref={emptyActionHref}
            className="min-h-full flex-1"
          />
        </div>
      ) : variant === 'flush' ? (
        <div className={cn('min-h-0 flex-1 overflow-y-auto', contentClassName, className)}>
          {children}
        </div>
      ) : (
        <div className={cn('flex min-h-0 flex-1 flex-col gap-28 overflow-y-auto px-24 py-28', contentClassName, className)}>
          {children}
        </div>
      )}
    </PageFrame>
  )
}
