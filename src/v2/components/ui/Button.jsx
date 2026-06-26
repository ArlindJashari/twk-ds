import { forwardRef } from 'react'
import { cn } from '../../../lib/cn.js'
import { btnBase } from './primitives.js'

const variants = {
  default: 'bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] shadow-[var(--shadow-sm)] hover:bg-[hsl(var(--primary)/0.9)]',
  secondary: 'border border-[hsl(var(--input))] bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] shadow-[var(--shadow-sm)] hover:bg-[hsl(var(--secondary)/0.8)]',
  destructive: 'bg-[hsl(var(--destructive))] text-[hsl(var(--destructive-foreground))] shadow-[var(--shadow-sm)] hover:bg-[hsl(var(--destructive)/0.9)]',
  outline: 'border border-[hsl(var(--input))] bg-[hsl(var(--background))] shadow-[var(--shadow-sm)] hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--accent-foreground))]',
  ghost: 'hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--accent-foreground))]',
  link: 'text-[hsl(var(--primary))] underline-offset-4 hover:underline',
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
