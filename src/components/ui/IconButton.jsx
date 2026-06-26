import { forwardRef } from 'react'
import { cn } from '../../lib/cn.js'
import {
  focusRing, iconBtn, iconBtnAccent, iconBtnDefault, iconBtnFilled,
  iconBtnLg, iconBtnMd, iconBtnSm,
} from './primitives.js'

const variants = {
  default: iconBtnDefault,
  filled: iconBtnFilled,
  accent: iconBtnAccent,
}

const sizes = { sm: iconBtnSm, md: iconBtnMd, lg: iconBtnLg }

const base = cn(iconBtn, focusRing, 'disabled:pointer-events-none disabled:opacity-50')

const IconButton = forwardRef(function IconButton(
  { variant = 'default', size = 'md', className, type = 'button', label, ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      aria-label={label}
      title={label}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  )
})

export default IconButton
