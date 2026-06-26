import Menu, { MenuItem, MenuSeparator } from '../../components/Menu.jsx'
import { UserAvatar, ChevronDown } from '../../components/icons.jsx'
import { user, userMenuItems } from '../../lib/nav.js'
import { v2Href } from '../lib/paths.js'

const triggerClassName =
  'flex h-8 min-w-0 shrink-0 items-center gap-2 rounded-md px-2 text-start text-[hsl(var(--v2-foreground))] outline-none transition-colors hover:bg-[hsl(var(--v2-accent))] v2-focus-ring'

export default function UserMenu() {
  return (
    <Menu
      label={`${user.name} account menu`}
      align="start"
      variant="workspace"
      trigger={(
        <button type="button" aria-label={`${user.name} account menu`} className={triggerClassName}>
          <UserAvatar size={20} initials={user.initials} />
          <span className="truncate text-[13px] font-medium leading-none">{user.name}</span>
          <ChevronDown size={8} strokeWidth={1.75} className="shrink-0 text-[hsl(var(--v2-muted-foreground))]" />
        </button>
      )}
    >
      {userMenuItems.map((item, index) => {
        if (item.type === 'separator') {
          return <MenuSeparator key={`sep-${index}`} variant="workspace" />
        }
        return (
          <MenuItem
            key={item.label}
            href={item.href ? v2Href(item.href) : undefined}
            keys={item.keys}
            variant="workspace"
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
      <span className="truncate text-[13px] font-medium leading-none">{user.name}</span>
    </>
  )
}
