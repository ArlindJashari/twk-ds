import { cn } from '../../../lib/cn.js'

export function Label({ className, children, ...props }) {
  return (
    <label className={cn('text-sm font-medium leading-none text-[hsl(var(--foreground))]', className)} {...props}>
      {children}
    </label>
  )
}

export function Field({ className, children }) {
  return <div className={cn('flex flex-col gap-2', className)}>{children}</div>
}

export function FieldGroup({ className, children }) {
  return <div className={cn('flex flex-col gap-4', className)}>{children}</div>
}

export function FieldHint({ className, children }) {
  return <p className={cn('text-xs text-[hsl(var(--muted-foreground))]', className)}>{children}</p>
}

export function FieldError({ className, children }) {
  return <p className={cn('text-xs font-medium text-[hsl(var(--destructive))]', className)}>{children}</p>
}
