import { cn } from '../../../lib/cn.js'

export function Table({ className, children }) {
  return (
    <div className={cn('relative w-full overflow-auto', className)}>
      <table className="w-full caption-bottom text-sm">{children}</table>
    </div>
  )
}

export function TableHeader({ className, children }) {
  return <thead className={cn('[&_tr]:border-b [&_tr]:border-[hsl(var(--v2-border))]', className)}>{children}</thead>
}

export function TableBody({ className, children }) {
  return <tbody className={cn('[&_tr:last-child]:border-0', className)}>{children}</tbody>
}

export function TableRow({ className, interactive, ...props }) {
  return (
    <tr
      className={cn(
        'border-b border-[hsl(var(--v2-border))] transition-colors',
        interactive && 'hover:bg-[hsl(var(--v2-muted)/0.5)]',
        className,
      )}
      {...props}
    />
  )
}

export function TableHead({ className, children }) {
  return (
    <th className={cn('h-10 px-4 text-start align-middle text-xs font-medium text-[hsl(var(--v2-muted-foreground))]', className)}>
      {children}
    </th>
  )
}

export function TableCell({ className, children }) {
  return <td className={cn('p-4 align-middle text-[hsl(var(--v2-foreground))]', className)}>{children}</td>
}
