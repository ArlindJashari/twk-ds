import { cn } from '../../lib/cn.js'

export function Label({ className, children, htmlFor, required }) {
  return (
    <label
      htmlFor={htmlFor}
      className={cn('text-[13px] font-medium text-body', className)}
    >
      {children}
      {required ? <span className="ms-2 text-danger">*</span> : null}
    </label>
  )
}

export function Field({ className, children }) {
  return (
    <div className={cn('flex flex-col gap-6', className)}>
      {children}
    </div>
  )
}

export function FieldHint({ className, children }) {
  return (
    <p className={cn('text-[12px] text-faint', className)}>
      {children}
    </p>
  )
}

export function FieldError({ className, children }) {
  return (
    <p className={cn('text-[12px] text-danger', className)} role="alert">
      {children}
    </p>
  )
}

export function FieldGroup({ className, children }) {
  return (
    <div className={cn('flex flex-col gap-16', className)}>
      {children}
    </div>
  )
}
