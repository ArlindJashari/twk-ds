import { cn } from '../../lib/cn.js'

const variants = {
  default: 'border border-line-subtle bg-content shadow-stroke-faint',
  elevated: 'border border-line-subtle bg-content shadow-panel',
  well: 'border border-line-subtle bg-well',
  action: 'border border-line-subtle bg-content shadow-stroke-faint rounded-[14px]',
  flat: 'bg-content',
}

export function Card({ variant = 'default', className, children, ...props }) {
  return (
    <article className={cn('flex flex-col overflow-hidden', variants[variant], className)} {...props}>
      {children}
    </article>
  )
}

export function CardMedia({ className, children }) {
  return (
    <div className={cn('relative h-[184px] shrink-0 overflow-hidden bg-well', className)}>
      {children}
    </div>
  )
}

export function CardBody({ className, children }) {
  return <div className={cn('flex flex-1 flex-col p-16', className)}>{children}</div>
}

export function CardTitle({ className, children }) {
  return <h3 className={cn('text-[15px] font-ui text-ink', className)}>{children}</h3>
}

export function CardDescription({ className, children }) {
  return <p className={cn('mt-6 min-h-[38px] text-[13px] leading-[1.45] text-sub', className)}>{children}</p>
}

export function CardFooter({ className, children }) {
  return <div className={cn('mt-16 flex flex-wrap items-center gap-8', className)}>{children}</div>
}
