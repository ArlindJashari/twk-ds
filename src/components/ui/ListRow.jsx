import { cn } from '../../lib/cn.js'
import {
  focusRing,
  groupHeader,
  issueRowDate,
  issueRowId,
  issueRowInsetX,
  issueRowLead,
  issueRowMeta,
  issueRowSlotCheckbox,
  issueRowSlotIcon,
  issueRowTitle,
  listRow,
} from './primitives.js'
import { IssueCheckbox } from './Checkbox.jsx'

export function ListRow({ href, className, selected, children, ...props }) {
  const Tag = href ? 'a' : 'div'
  return (
    <Tag
      href={href}
      data-selected={selected || undefined}
      className={cn(listRow, issueRowInsetX, focusRing, href && 'outline-none', className)}
      {...props}
    >
      {children}
    </Tag>
  )
}

export function IssueRow({
  id, title, date, href, priority, status, assignee, checked, onCheck, selected, className,
}) {
  const isSelected = selected ?? checked
  return (
    <ListRow href={href} selected={isSelected} className={className}>
      <div className={issueRowLead}>
        <span className={issueRowSlotCheckbox}>
          <IssueCheckbox
            checked={checked}
            onChange={onCheck}
            aria-label={`Select ${id}`}
          />
        </span>
        {priority ? (
          <span className={issueRowSlotIcon}>{priority}</span>
        ) : (
          <span className={issueRowSlotIcon} aria-hidden />
        )}
        <span className={issueRowId}>{id}</span>
        {status ? (
          <span className={cn(issueRowSlotIcon, 'ps-[1px]')}>{status}</span>
        ) : null}
        <span className={issueRowTitle}>{title}</span>
      </div>
      <div className={issueRowMeta}>
        {assignee}
        {date ? (
          <span className={issueRowDate}>{date}</span>
        ) : null}
      </div>
    </ListRow>
  )
}

export function GroupHeader({ label, count, leading, onAdd, className, children }) {
  return (
    <div className={cn(groupHeader, className)}>
      <div className="flex min-w-0 flex-1 items-center gap-8 ps-[10px]">
        {children}
        {leading}
        <span className="text-[13px] font-medium text-body">{label}</span>
        {count != null ? (
          <span className="text-[13px] font-[450] tabular-nums text-muted">{count}</span>
        ) : null}
      </div>
      {onAdd ? (
        <button
          type="button"
          aria-label={`Add ${label}`}
          onClick={onAdd}
          className={cn(
            'grid size-[24px] shrink-0 place-items-center rounded-lg text-faint transition-colors hover:bg-hover hover:text-sub',
            focusRing,
          )}
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      ) : null}
    </div>
  )
}
