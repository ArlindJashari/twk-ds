import { cn } from '../../../lib/cn.js'

export function Card({ className, children, ...props }) {
  return (
    <article
      className={cn(
        'rounded-[var(--v2-radius)] border border-[hsl(var(--v2-border))] bg-[hsl(var(--v2-card))] text-[hsl(var(--v2-card-foreground))] shadow-[var(--v2-shadow-sm)]',
        className,
      )}
      {...props}
    >
      {children}
    </article>
  )
}

export function CardHeader({ className, children }) {
  return <div className={cn('flex flex-col gap-1.5 p-6 pb-4', className)}>{children}</div>
}

export function CardTitle({ className, children }) {
  return <h3 className={cn('text-base font-semibold leading-none tracking-tight', className)}>{children}</h3>
}

export function CardDescription({ className, children }) {
  return <p className={cn('text-sm text-[hsl(var(--v2-muted-foreground))]', className)}>{children}</p>
}

export function CardContent({ className, children }) {
  return <div className={cn('p-6 pt-0', className)}>{children}</div>
}

export function CardFooter({ className, children }) {
  return <div className={cn('flex items-center p-6 pt-0', className)}>{children}</div>
}
