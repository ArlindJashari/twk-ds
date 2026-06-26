import { cn } from '../../lib/cn.js'

const priorities = {
  urgent: 'text-priority-urgent',
  high: 'text-priority-high',
  medium: 'text-priority-medium',
  low: 'text-priority-low',
  none: 'text-priority-none',
}

export function PriorityIcon({ level = 'none', size = 14, className }) {
  const color = priorities[level] ?? priorities.none
  if (level === 'none') {
    return (
      <svg width={size} height={size} viewBox="0 0 16 16" className={cn(color, className)} aria-hidden>
        <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.25" strokeDasharray="2 2" fill="none" />
      </svg>
    )
  }
  if (level === 'urgent') {
    return (
      <svg width={size} height={size} viewBox="0 0 16 16" className={cn(color, className)} aria-hidden>
        <path d="M8 2.5 14 13H2L8 2.5z" stroke="currentColor" strokeWidth="1.25" fill="none" />
        <path d="M8 6.5v3.5M8 11.5h.01" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      </svg>
    )
  }
  const bars = { high: 3, medium: 2, low: 1 }
  const n = bars[level] ?? 1
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" className={cn(color, className)} aria-hidden>
      {[0, 1, 2].map((i) => (
        <rect
          key={i}
          x={3 + i * 4}
          y={12 - (i + 1) * 3}
          width="2.5"
          height={(i + 1) * 3}
          rx="0.5"
          fill={i < n ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeWidth="0.75"
        />
      ))}
    </svg>
  )
}

const statuses = {
  todo: 'text-status-todo',
  progress: 'text-status-progress',
  done: 'text-status-done',
  cancelled: 'text-status-cancelled',
}

export function StatusIcon({ status = 'todo', size = 14, className }) {
  const color = statuses[status] ?? statuses.todo
  if (status === 'done') {
    return (
      <svg width={size} height={size} viewBox="0 0 16 16" className={cn(color, className)} aria-hidden>
        <circle cx="8" cy="8" r="5.5" fill="currentColor" />
        <path d="M5.5 8 7 9.5 10.5 6" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  if (status === 'progress') {
    return (
      <svg width={size} height={size} viewBox="0 0 16 16" className={cn(color, className)} aria-hidden>
        <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.25" fill="none" />
        <path d="M8 2.5a5.5 5.5 0 0 1 0 11" fill="currentColor" />
      </svg>
    )
  }
  if (status === 'cancelled') {
    return (
      <svg width={size} height={size} viewBox="0 0 16 16" className={cn(color, className)} aria-hidden>
        <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.25" fill="none" />
        <path d="M5.5 5.5l5 5M10.5 5.5l-5 5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      </svg>
    )
  }
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" className={cn(color, className)} aria-hidden>
      <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.25" fill="none" />
    </svg>
  )
}
