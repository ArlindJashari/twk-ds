import { cn } from '../../lib/cn.js'
import { focusRing } from './primitives.js'

const pageBtn =
  'inline-flex h-[28px] min-w-[28px] items-center justify-center rounded-lg px-8 text-[12px] font-medium text-sub transition-colors hover:bg-hover hover:text-ink'

export default function Pagination({
  page = 1,
  totalPages = 1,
  onPageChange,
  prevLabel = 'Prev',
  nextLabel = 'Next',
  className,
}) {
  const pages = Array.from({ length: Math.min(totalPages, 5) }, (_, index) => index + 1)

  return (
    <nav aria-label="Pagination" className={cn('flex items-center gap-4', className)}>
      <button
        type="button"
        className={cn(pageBtn, focusRing, page <= 1 && 'pointer-events-none opacity-40')}
        onClick={() => onPageChange?.(page - 1)}
        disabled={page <= 1}
      >
        ‹ {prevLabel}
      </button>
      {pages.map((item) => (
        <button
          key={item}
          type="button"
          aria-current={page === item ? 'page' : undefined}
          className={cn(
            pageBtn,
            focusRing,
            page === item && 'bg-tab-active text-ink shadow-stroke-faint',
          )}
          onClick={() => onPageChange?.(item)}
        >
          {item}
        </button>
      ))}
      {totalPages > 5 ? <span className="px-4 text-[12px] text-faint">…</span> : null}
      <button
        type="button"
        className={cn(pageBtn, focusRing, page >= totalPages && 'pointer-events-none opacity-40')}
        onClick={() => onPageChange?.(page + 1)}
        disabled={page >= totalPages}
      >
        {nextLabel} ›
      </button>
    </nav>
  )
}
