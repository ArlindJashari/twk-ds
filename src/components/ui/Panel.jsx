import { cn } from '../../lib/cn.js'

const variants = {
  default: 'border-[0.5px] border-line bg-content shadow-panel',
  well: 'bg-well',
  flat: 'bg-content',
}

export function Panel({ variant = 'default', className, children, ...props }) {
  return (
    <div
      className={cn('overflow-hidden rounded-panel lg:rounded-panel', variants[variant], className)}
      {...props}
    >
      {children}
    </div>
  )
}

export function PanelHeader({ title, action, className, children }) {
  return (
    <header className={cn('flex h-[44px] shrink-0 items-center border-b border-line px-8', className)}>
      {children ?? (
        <>
          <h1 className="min-w-0 flex-1 truncate text-[13px] font-medium text-body">{title}</h1>
          {action}
        </>
      )}
    </header>
  )
}

export function PanelBody({ className, children }) {
  return (
    <div className={cn('min-h-0 flex-1 overflow-y-auto', className)}>
      {children}
    </div>
  )
}
