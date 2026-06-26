import { cn } from '../../lib/cn.js'
import { focusRing, navActive, navIdle, navRow } from './primitives.js'

export function NavItem({ href, active, icon: Icon, children, onClick, className }) {
  return (
    <a
      href={href}
      aria-current={active ? 'page' : undefined}
      onClick={onClick}
      className={cn(navRow, focusRing, active ? navActive : navIdle, className)}
    >
      {Icon ? (
        <Icon
          size={14}
          strokeWidth={1.5}
          className={active ? 'text-nav-active' : 'text-nav group-hover:text-nav-active'}
        />
      ) : null}
      <span className="flex-1 truncate">{children}</span>
    </a>
  )
}

export function NavGroupLabel({ active, children, className }) {
  return (
    <span
      className={cn(
        'flex h-[28px] items-center ps-[15px] pe-[9px] text-[12px] font-medium leading-none',
        active ? 'text-nav-active' : 'text-nav',
        className,
      )}
    >
      {children}
    </span>
  )
}
