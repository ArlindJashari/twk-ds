import { cn } from '../../lib/cn.js'

export default function Kbd({ className, children }) {
  return (
    <kbd
      className={cn(
        'inline-flex h-[18px] min-w-[18px] items-center justify-center rounded-[4px] border border-line-subtle bg-well px-4 text-[11px] font-normal leading-none text-faint',
        className,
      )}
    >
      {children}
    </kbd>
  )
}

export function KbdCombo({ keys, className }) {
  return (
    <span className={cn('inline-flex items-center gap-[3px]', className)}>
      {keys.map((key, i) => (
        <span key={key} className="inline-flex items-center gap-[3px]">
          {i > 0 && !/^[⌘⌃⌥⇧]$/.test(keys[i - 1]) ? (
            <span className="text-[11px] text-faint">then</span>
          ) : null}
          <Kbd>{key}</Kbd>
        </span>
      ))}
    </span>
  )
}
