import { cn } from '../../lib/cn.js'

const variants = {
  default: 'bg-line-subtle',
  strong: 'bg-line',
}

export default function Divider({ variant = 'default', className, vertical = false }) {
  return (
    <div
      role="separator"
      className={cn(
        variants[variant],
        vertical ? 'mx-8 h-full w-px self-stretch' : 'my-8 h-px w-full',
        className,
      )}
    />
  )
}
