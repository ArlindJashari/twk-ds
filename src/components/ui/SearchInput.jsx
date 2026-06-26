import { cn } from '../../lib/cn.js'
import { focusRing } from './primitives.js'
import { SearchIcon } from '../icons.jsx'
import Kbd from './Kbd.jsx'

export default function SearchTrigger({ placeholder = 'Search…', shortcut = '⌘K', onClick, className }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'flex h-[32px] w-full max-w-[480px] items-center gap-8 rounded-full border border-line-subtle bg-content px-12 text-left shadow-stroke-faint transition-colors hover:bg-hover',
        focusRing,
        className,
      )}
    >
      <SearchIcon size={14} strokeWidth={1.5} className="shrink-0 text-pill-muted" />
      <span className="min-w-0 flex-1 truncate text-[13px] font-[450] text-faint">{placeholder}</span>
      {shortcut ? <Kbd className="shrink-0">{shortcut}</Kbd> : null}
    </button>
  )
}

export function CommandInput({ value, onChange, placeholder, icon: Icon = SearchIcon, className, inputRef, ...props }) {
  return (
    <div className={cn('flex h-[44px] items-center border-b border-line px-8', className)}>
      <Icon size={14} strokeWidth={1.5} className="ml-[9px] shrink-0 text-pill-muted" />
      <input
        ref={inputRef}
        type="text"
        role="searchbox"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={cn(
          'h-[22px] min-w-0 flex-1 bg-transparent pl-8 text-[15px] font-[450] leading-[22px] text-body',
          focusRing,
        )}
        {...props}
      />
    </div>
  )
}
