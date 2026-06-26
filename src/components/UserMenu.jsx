import Menu, { MenuItem, MenuSeparator } from './Menu.jsx'
import { UserAvatar, ChevronDown } from './icons.jsx'
import { user, userMenuItems } from '../lib/nav.js'

const triggerClassName =
  'flex h-[28px] min-w-0 shrink-0 items-center gap-6 rounded-[10px] px-[7px] text-left text-body outline-none transition-colors hover:bg-shell-hover focus-visible:ring-2 focus-visible:ring-accent'

const itemVariant = 'workspace'

export default function UserMenu() {
  return (
    <Menu
      label={`${user.name} account menu`}
      align="start"
      variant="workspace"
      trigger={(
        <button
          type="button"
          aria-label={`${user.name} account menu`}
          className={triggerClassName}
        >
          <UserAvatar size={20} initials={user.initials} />
          <span className="truncate text-[13px] font-ui leading-none">{user.name}</span>
          <ChevronDown size={8} strokeWidth={1.75} className="shrink-0 text-body" />
        </button>
      )}
    >
      {userMenuItems.map((item, index) => {
        if (item.type === 'separator') {
          return <MenuSeparator key={`sep-${index}`} variant={itemVariant} />
        }
        return (
          <MenuItem
            key={item.label}
            href={item.href ? `#${item.href}` : undefined}
            keys={item.keys}
            variant={itemVariant}
          >
            {item.label}
          </MenuItem>
        )
      })}
    </Menu>
  )
}

export function UserMenuTriggerContent() {
  return (
    <>
      <UserAvatar size={20} initials={user.initials} />
      <span className="truncate text-[13px] font-ui leading-none">{user.name}</span>
    </>
  )
}
