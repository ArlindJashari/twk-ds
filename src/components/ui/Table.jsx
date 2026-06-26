import { cn } from '../../lib/cn.js'

export function Table({ className, children }) {
  return (
    <div className={cn('w-full overflow-x-auto rounded-lg border border-line-subtle', className)}>
      <table className="w-full border-collapse text-start text-[13px]">
        {children}
      </table>
    </div>
  )
}

export function TableHeader({ className, children }) {
  return (
    <thead className={cn('border-b border-line bg-well', className)}>
      {children}
    </thead>
  )
}

export function TableBody({ className, children }) {
  return <tbody className={className}>{children}</tbody>
}

export function TableRow({ className, interactive = false, children, ...props }) {
  return (
    <tr
      className={cn(
        'border-b border-line-subtle last:border-b-0',
        interactive && 'transition-colors hover:bg-hover',
        className,
      )}
      {...props}
    >
      {children}
    </tr>
  )
}

export function TableHead({ className, children }) {
  return (
    <th
      className={cn(
        'px-12 py-10 text-[11px] font-medium uppercase tracking-wide text-faint',
        className,
      )}
    >
      {children}
    </th>
  )
}

export function TableCell({ className, children }) {
  return (
    <td className={cn('px-12 py-10 text-body', className)}>
      {children}
    </td>
  )
}
