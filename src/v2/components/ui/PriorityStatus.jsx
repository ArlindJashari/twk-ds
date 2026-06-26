import { cn } from '../../../lib/cn.js'
import { focusRing } from './primitives.js'

const statusColors = {
  todo: 'text-[hsl(var(--muted-foreground))]',
  progress: 'text-[hsl(var(--warning))]',
  done: 'text-[hsl(var(--success))]',
  cancelled: 'text-[hsl(var(--muted-foreground))]',
}

const priorityColors = {
  urgent: 'text-[hsl(var(--warning))]',
  high: 'text-[hsl(var(--warning))]',
  medium: 'text-[hsl(var(--info))]',
  low: 'text-[hsl(var(--muted-foreground))]',
  none: 'text-[hsl(var(--muted-foreground))]',
}

export function StatusIcon({ status = 'todo' }) {
  return (
    <span
      className={cn('grid size-4 place-items-center rounded-full border-2 border-current', statusColors[status])}
      aria-label={status}
    />
  )
}

export function PriorityIcon({ level = 'none' }) {
  return (
    <span className={cn('text-xs font-bold leading-none', priorityColors[level])} aria-label={`Priority ${level}`}>
      {level === 'urgent' ? '!!!' : level === 'high' ? '!!' : level === 'medium' ? '!' : '·'}
    </span>
  )
}
