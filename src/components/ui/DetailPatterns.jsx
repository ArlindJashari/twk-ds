import { useEffect, useRef, useState } from 'react'
import { CaretDown, CalendarIcon, LabelsIcon, PlusIcon, ProfileIcon, ProjectsIcon, SlackIcon } from '../icons.jsx'
import { cn } from '../../lib/cn.js'
import { focusRing } from './primitives.js'
import IconButton from './IconButton.jsx'
import Link from './Link.jsx'
import { PriorityIcon, StatusIcon } from './PriorityStatus.jsx'

function DoneStatusIcon(props) {
  return <StatusIcon status="done" {...props} />
}

function useAutoHeight(ref, value) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.height = 'auto'
    el.style.height = `${el.scrollHeight}px`
  }, [ref, value])
}

export function ProjectMark({ size = 48, icon: Icon = ProjectsIcon, className }) {
  return (
    <span
      className={cn('grid shrink-0 place-items-center rounded-[10px] bg-well text-faint', className)}
      style={{ width: size, height: size }}
      aria-hidden
    >
      <Icon size={Math.round(size * 0.45)} strokeWidth={1.5} />
    </span>
  )
}

export function DetailFreeField({
  value = '',
  onChange,
  placeholder,
  rows = 1,
  variant = 'summary',
  className,
  id,
}) {
  const ref = useRef(null)
  useAutoHeight(ref, value)

  return (
    <textarea
      ref={ref}
      id={id}
      value={value}
      onChange={(event) => onChange?.(event.target.value)}
      placeholder={placeholder}
      rows={rows}
      className={cn(
        'w-full resize-none border-0 bg-transparent p-0 outline-none placeholder:text-faint',
        variant === 'summary' ? 'text-[14px] leading-[1.45]' : 'text-[13px] leading-[1.6]',
        value ? 'text-body' : '',
        focusRing,
        className,
      )}
    />
  )
}

export function DetailPropertyPill({ icon: Icon, label, muted = false, onClick, className }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'inline-flex h-[28px] shrink-0 items-center gap-6 rounded-full px-6 py-[3px] text-[13px] font-normal transition-colors',
        focusRing,
        muted ? 'text-faint hover:bg-hover hover:text-sub' : 'text-ink hover:bg-hover',
        className,
      )}
    >
      {Icon ? <Icon size={14} strokeWidth={1.5} className="shrink-0 text-faint" /> : null}
      <span>{label}</span>
    </button>
  )
}

export function DetailFieldBlock({ label, children, className }) {
  return (
    <section className={cn('mt-28', className)}>
      <h4 className="text-[13px] font-medium text-sub">{label}</h4>
      <div className="mt-8">{children}</div>
    </section>
  )
}

export function ProjectDetailMain({
  copy,
  title = 'n',
  summary = '',
  onSummaryChange,
  description = '',
  onDescriptionChange,
  icon: Icon = ProjectsIcon,
  className,
}) {
  const c = copy ?? {}

  return (
    <div className={cn('max-w-[720px]', className)}>
      <ProjectMark icon={Icon} />
      <h1 className="mt-14 text-[28px] font-semibold tracking-[-0.022em] text-ink">{title}</h1>
      <DetailFreeField
        variant="summary"
        value={summary}
        onChange={onSummaryChange}
        placeholder={c.addSummary ?? 'Add a short summary…'}
        className="mt-10"
      />
      <InlinePropertyBar label={c.properties ?? 'Properties'} className="mt-24">
        <DetailPropertyPill icon={DoneStatusIcon} label={c.completed ?? 'Completed'} />
        <DetailPropertyPill icon={PriorityIcon} label={c.noPriority ?? 'No priority'} />
        <DetailPropertyPill icon={ProfileIcon} label={c.lead ?? 'Lead'} muted />
        <DetailPropertyPill icon={CalendarIcon} label={c.targetDate ?? 'Target date'} muted />
        <DetailPropertyPill icon={ProjectsIcon} label={c.teamName ?? 'Surfarch'} />
      </InlinePropertyBar>
      <DetailFieldBlock label={c.resources ?? 'Resources'}>
        <button
          type="button"
          className="text-[13px] text-faint transition-colors hover:text-ink"
        >
          + {c.addResource ?? 'Add document or link…'}
        </button>
      </DetailFieldBlock>
      <DetailFieldBlock label={c.descriptionLabel ?? 'Description'}>
        <DetailFreeField
          variant="body"
          value={description}
          onChange={onDescriptionChange}
          placeholder={c.descriptionPlaceholder ?? 'Write a description, a project brief, or collect ideas…'}
          rows={3}
        />
      </DetailFieldBlock>
      <button
        type="button"
        className="mt-28 inline-flex h-[28px] items-center rounded-full px-8 text-[13px] text-faint transition-colors hover:bg-hover hover:text-ink"
      >
        + {c.addMilestone ?? 'Milestone'}
      </button>
    </div>
  )
}

export function DetailLayout({ main, sidebar, className }) {
  return (
    <div className={cn('flex min-h-0 flex-1 overflow-hidden', className)}>
      <div className="min-w-0 flex-1 overflow-y-auto px-24 py-28">{main}</div>
      {sidebar}
    </div>
  )
}

export function DetailsSidebar({ children, className }) {
  return (
    <aside
      className={cn(
        'hidden w-[280px] shrink-0 overflow-y-auto border-s border-line-subtle bg-content px-16 py-20 lg:block',
        className,
      )}
    >
      <div className="flex flex-col gap-16">{children}</div>
    </aside>
  )
}

export function DetailsSection({
  title,
  action,
  footerLink,
  defaultOpen = true,
  children,
  className,
}) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <section className={cn('rounded-lg border border-line-subtle bg-well', className)}>
      <header className="flex h-[36px] items-center gap-6 px-10">
        <button
          type="button"
          aria-expanded={open}
          aria-label={open ? `Collapse ${title}` : `Expand ${title}`}
          onClick={() => setOpen((value) => !value)}
          className={cn('grid size-[20px] place-items-center rounded-md text-faint hover:bg-hover hover:text-ink', focusRing)}
        >
          <CaretDown size={10} className={cn('transition-transform', open && 'rotate-180')} />
        </button>
        <h3 className="min-w-0 flex-1 truncate text-[12px] font-medium text-sub">{title}</h3>
        {footerLink ? (
          <Link variant="subtle" href={footerLink.href} className="text-[12px]">
            {footerLink.label}
          </Link>
        ) : null}
        {action ?? (
          <IconButton size="sm" label={`Add ${title.toLowerCase()}`} className="text-faint">
            <PlusIcon size={12} strokeWidth={1.5} />
          </IconButton>
        )}
      </header>
      {open ? <div className="border-t border-line-subtle px-10 py-8">{children}</div> : null}
    </section>
  )
}

export function DetailPropertyRow({
  label,
  icon: Icon,
  value,
  placeholder,
  onClick,
  className,
}) {
  const Tag = onClick ? 'button' : 'div'
  const display = value ?? placeholder
  const isPlaceholder = !value && placeholder

  return (
    <Tag
      type={onClick ? 'button' : undefined}
      onClick={onClick}
      className={cn(
        'flex h-[32px] w-full items-center justify-between gap-12 rounded-lg px-4 text-start transition-colors',
        onClick && 'hover:bg-hover',
        focusRing,
        className,
      )}
    >
      <span className="shrink-0 text-[12px] text-faint">{label}</span>
      <span className={cn(
        'flex min-w-0 items-center justify-end gap-6 text-[12px] font-medium',
        isPlaceholder ? 'text-faint font-normal' : 'text-ink',
      )}
      >
        {Icon ? <Icon size={14} strokeWidth={1.5} className="shrink-0 text-faint" /> : null}
        <span className="truncate">{display}</span>
      </span>
    </Tag>
  )
}

export function DetailDateRow({ label = 'Dates', startLabel = 'Start', targetLabel = 'Target' }) {
  return (
    <div className="flex h-[32px] items-center justify-between gap-12 px-4">
      <span className="shrink-0 text-[12px] text-faint">{label}</span>
      <div className="flex min-w-0 items-center gap-6 text-[12px] text-faint">
        <span className="inline-flex items-center gap-4">
          <CalendarIcon size={14} strokeWidth={1.5} />
          {startLabel}
        </span>
        <span aria-hidden>→</span>
        <span className="inline-flex items-center gap-4">
          <CalendarIcon size={14} strokeWidth={1.5} />
          {targetLabel}
        </span>
      </div>
    </div>
  )
}

export function InlinePropertyBar({ label = 'Properties', children, className }) {
  return (
    <div className={cn('flex flex-wrap items-center gap-x-12 gap-y-6', className)}>
      <span className="shrink-0 text-[13px] text-faint">{label}</span>
      <div className="flex min-w-0 flex-wrap items-center gap-4">{children}</div>
    </div>
  )
}

export function ProjectPropertiesPanel({ copy }) {
  const c = copy ?? {}
  return (
    <>
      <DetailsSection title={c.properties ?? 'Properties'}>
        <div className="flex flex-col gap-2">
          <DetailPropertyRow label={c.status ?? 'Status'} icon={StatusIcon} value={c.completed ?? 'Completed'} />
          <DetailPropertyRow label={c.priority ?? 'Priority'} icon={PriorityIcon} value={c.noPriority ?? 'No priority'} />
          <DetailPropertyRow label={c.lead ?? 'Lead'} icon={ProfileIcon} placeholder={c.addLead ?? 'Add lead'} />
          <DetailPropertyRow label={c.members ?? 'Members'} icon={ProfileIcon} placeholder={c.addMembers ?? 'Add members'} />
          <DetailDateRow label={c.dates ?? 'Dates'} startLabel={c.start ?? 'Start'} targetLabel={c.target ?? 'Target'} />
          <DetailPropertyRow label={c.teams ?? 'Teams'} icon={ProjectsIcon} value={c.teamName ?? 'Surfarch'} />
          <DetailPropertyRow label={c.slack ?? 'Slack'} icon={SlackIcon} placeholder={c.connectSlack ?? 'Connect channel'} />
          <DetailPropertyRow label={c.labels ?? 'Labels'} icon={LabelsIcon} placeholder={c.addLabel ?? 'Add label'} />
        </div>
      </DetailsSection>

      <DetailsSection title={c.milestones ?? 'Milestones'}>
        <p className="px-4 text-[12px] leading-[1.45] text-sub">
          {c.milestonesHint ?? 'Add milestones to organize work within your project and break it into more granular stages.'}{' '}
          <Link variant="accent" href="#">{c.learnMore ?? 'Learn more'}</Link>
        </p>
      </DetailsSection>

      <DetailsSection
        title={c.activity ?? 'Activity'}
        footerLink={{ label: c.seeAll ?? 'See all', href: '#' }}
        action={null}
      >
        <p className="px-4 text-[12px] text-sub">
          <span className="font-medium text-ink">{c.actor ?? 'Arlind Jashari'}</span>
          {' '}{c.createdProject ?? 'created the project'} · {c.activityDate ?? 'Jun 23'}
        </p>
      </DetailsSection>
    </>
  )
}
