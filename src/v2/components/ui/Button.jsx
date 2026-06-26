import { forwardRef } from 'react'
import { cn } from '../../../lib/cn.js'
import { btnBase } from './primitives.js'

const variants = {
  default: 'bg-[hsl(var(--v2-primary))] text-[hsl(var(--v2-primary-foreground))] shadow-[var(--v2-shadow-sm)] hover:bg-[hsl(var(--v2-primary)/0.9)]',
  secondary: 'border border-[hsl(var(--v2-input))] bg-[hsl(var(--v2-secondary))] text-[hsl(var(--v2-secondary-foreground))] shadow-[var(--v2-shadow-sm)] hover:bg-[hsl(var(--v2-secondary)/0.8)]',
  destructive: 'bg-[hsl(var(--v2-destructive))] text-[hsl(var(--v2-destructive-foreground))] shadow-[var(--v2-shadow-sm)] hover:bg-[hsl(var(--v2-destructive)/0.9)]',
  outline: 'border border-[hsl(var(--v2-input))] bg-[hsl(var(--v2-background))] shadow-[var(--v2-shadow-sm)] hover:bg-[hsl(var(--v2-accent))] hover:text-[hsl(var(--v2-accent-foreground))]',
  ghost: 'hover:bg-[hsl(var(--v2-accent))] hover:text-[hsl(var(--v2-accent-foreground))]',
  link: 'text-[hsl(var(--v2-primary))] underline-offset-4 hover:underline',
}

const sizes = {
  sm: 'h-8 px-3 text-xs',
  default: 'h-9 px-4',
  lg: 'h-10 px-6',
  icon: 'size-9',
}

const Button = forwardRef(function Button(
  { variant = 'default', size = 'default', className, type = 'button', href, ...props },
  ref,
) {
  const classes = cn(btnBase, variants[variant], sizes[size], className)
  if (href) {
    return <a ref={ref} href={href} className={classes} {...props} />
  }
  return <button ref={ref} type={type} className={classes} {...props} />
})

export default Button
