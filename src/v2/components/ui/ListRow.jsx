import { cn } from '../../../lib/cn.js'
import { focusRing } from './primitives.js'
import { IssueCheckbox } from './Checkbox.jsx'

export function GroupHeader({ label, count, leading, onAdd }) {
  return (
    <div className="mb-1 flex h-9 items-center gap-2 rounded-md bg-[hsl(var(--v2-muted))] px-3">
      {leading}
      <span className="text-sm font-medium text-[hsl(var(--v2-foreground))]">{label}</span>
      <span className="text-xs text-[hsl(var(--v2-muted-foreground))]">{count}</span>
      {onAdd ? (
        <button
          type="button"
          onClick={onAdd}
          aria-label={`Add to ${label}`}
          className={cn('ms-auto grid size-7 place-items-center rounded-md text-[hsl(var(--v2-muted-foreground))] hover:bg-[hsl(var(--v2-accent))]', focusRing)}
        >
          +
        </button>
      ) : null}
    </div>
  )
}

export function IssueRow({
  id, title, date, href, priority, status, assignee,
  checked, selected, onCheck, className,
}) {
  return (
    <div
      data-selected={selected || undefined}
      className={cn(
        'group flex h-11 items-center gap-2 rounded-md px-3 transition-colors hover:bg-[hsl(var(--v2-accent))]',
        selected && 'bg-[hsl(var(--v2-primary)/0.08)]',
        className,
      )}
    >
      <IssueCheckbox checked={checked} onChange={onCheck} label={`Select ${id}`} />
      <span className="w-4 shrink-0">{status}</span>
      <span className="shrink-0 font-mono text-xs text-[hsl(var(--v2-muted-foreground))]">{id}</span>
      <a
        href={href}
        className={cn('min-w-0 flex-1 truncate text-sm font-medium text-[hsl(var(--v2-foreground))] hover:text-[hsl(var(--v2-primary))]', focusRing)}
      >
        {title}
      </a>
      <span className="shrink-0">{priority}</span>
      <span className="shrink-0">{assignee}</span>
      <span className="shrink-0 text-xs tabular-nums text-[hsl(var(--v2-muted-foreground))]">{date}</span>
    </div>
  )
}
