import { useState } from 'react'
import { ChevronDown } from '../icons.jsx'
import { cn } from '../../lib/cn.js'
import { focusRing } from './primitives.js'
import IconButton from './IconButton.jsx'

export default function Collapsible({ title, count, children, defaultOpen = false, className }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className={cn('w-full rounded-lg border border-line-subtle bg-content p-12', className)}>
      <div className="flex items-center justify-between gap-8">
        <div className="flex items-center gap-8 text-[13px] font-medium text-ink">
          <span>{title}</span>
          {count != null ? <span className="font-[450] tabular-nums text-muted">{count}</span> : null}
        </div>
        <IconButton
          label={open ? 'Collapse' : 'Expand'}
          size="sm"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className={cn(open && '[&_svg]:rotate-180', focusRing)}
        >
          <ChevronDown size={14} strokeWidth={1.5} />
        </IconButton>
      </div>
      {open ? <div className="mt-12 flex flex-col gap-8">{children}</div> : null}
    </div>
  )
}
