import { cn } from '../../lib/cn.js'

const variants = {
  page: 'text-[13px] font-medium text-body',
  section: 'text-[13px] font-ui text-ink',
  title: 'text-[15px] font-ui text-ink',
  body: 'text-[13px] leading-[1.45] text-body',
  sub: 'text-[13px] leading-[1.45] text-sub',
  caption: 'text-[12px] text-faint',
  label: 'text-[11px] font-medium uppercase tracking-wide text-faint',
  mono: 'font-berkeley text-[12px] text-body',
}

export default function Text({
  variant = 'body',
  as,
  className,
  children,
  ...props
}) {
  const Tag = as ?? (variant === 'page' ? 'h1' : variant === 'section' ? 'h2' : variant === 'title' ? 'h3' : 'p')
  return (
    <Tag className={cn(variants[variant], className)} {...props}>
      {children}
    </Tag>
  )
}
