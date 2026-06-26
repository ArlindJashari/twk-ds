import { ChevronDown } from '../icons.jsx'
import { cn } from '../../lib/cn.js'

export default function Accordion({ items, className }) {
  return (
    <div className={cn('w-full divide-y divide-line-subtle overflow-hidden rounded-lg border border-line-subtle bg-content', className)}>
      {items.map((item) => (
        <details key={item.id} className="group px-12 py-10" defaultOpen={item.defaultOpen || undefined}>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-8 text-[13px] font-medium text-ink [&::-webkit-details-marker]:hidden">
            <span>{item.title}</span>
            <ChevronDown size={14} className="shrink-0 text-faint transition-transform group-open:rotate-180" />
          </summary>
          <div className="mt-8 text-[13px] leading-[1.45] text-sub">{item.content}</div>
        </details>
      ))}
    </div>
  )
}
