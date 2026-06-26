import { cn } from '../../lib/cn.js'

const variants = {
  default: 'text-body hover:text-ink',
  accent: 'text-accent hover:text-accent-hover',
  subtle: 'text-sub hover:text-body',
  nav: 'text-nav hover:text-nav-active',
}

export default function Link({ variant = 'default', className, href, children, ...props }) {
  return (
    <a
      href={href}
      className={cn(
        'outline-none transition-colors focus-visible:ring-2 focus-visible:ring-accent',
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  )
}
