import { forwardRef } from 'react'
import { cn } from '../../lib/cn.js'
import { focusRing } from './primitives.js'

const variants = {
  primary: 'bg-accent text-onaccent hover:bg-accent-hover active:bg-accent-press',
  secondary: 'border border-line-subtle bg-content text-body shadow-stroke-faint hover:bg-hover',
  ghost: 'bg-transparent text-body hover:bg-hover hover:text-ink',
  ink: 'bg-ink text-white hover:bg-body',
  danger: 'bg-danger text-white hover:bg-[#d93f44] active:bg-[#c9383d]',
  soft: 'bg-accent-soft text-accent-press hover:bg-[#dfe0f8]',
  pill: 'border-[0.5px] border-transparent bg-content text-faint shadow-stroke-faint hover:bg-hover hover:text-body',
}

const sizes = {
  xs: 'h-[24px] gap-4 px-8 text-[11px]',
  sm: 'h-[28px] gap-6 px-10 text-[12px]',
  md: 'h-[30px] gap-6 px-12 text-[12px]',
  lg: 'h-[32px] gap-8 px-14 text-[13px]',
}

const base = cn(
  'inline-flex shrink-0 items-center justify-center rounded-full font-medium leading-none transition-colors',
  focusRing,
  'disabled:pointer-events-none disabled:opacity-50',
)

const Button = forwardRef(function Button(
  { variant = 'primary', size = 'sm', className, type = 'button', href, ...props },
  ref,
) {
  const classes = cn(base, variants[variant], sizes[size], className)
  if (href) {
    return <a ref={ref} href={href} className={classes} {...props} />
  }
  return <button ref={ref} type={type} className={classes} {...props} />
})

export default Button
