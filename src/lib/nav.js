import {
  HomeIcon, UsabilityIcon, StudiesIcon, PersonasIcon, LibraryIcon, TemplatesIcon,
  StoriesIcon, DirectoryIcon, FeaturesIcon, FirebaseIcon, UsersIcon, SettingsIcon, HelpIcon,
} from '../components/icons.jsx'

export const user = { name: 'Arlind Jashari', email: 'admin@nacew.com', initials: 'AJ' }

export const userMenuItems = [
  { label: 'Settings', href: '/settings', keys: ['G', 'S'] },
  { label: 'Users', href: '/users' },
  { type: 'separator' },
  { label: 'Help', href: '/help' },
  { label: 'Log out', keys: ['⌥', '⇧', 'Q'] },
]

export const primaryNav = [
  { label: 'Home', path: '/', icon: HomeIcon },
]

export const navGroups = [
  {
    label: 'Usability',
    path: '/usability',
    icon: UsabilityIcon,
    children: [
      { label: 'Studies', path: '/usability/studies', icon: StudiesIcon },
      { label: 'Personas', path: '/usability/personas', icon: PersonasIcon },
      { label: 'Library', path: '/usability/library', icon: LibraryIcon },
      { label: 'Templates', path: '/usability/templates', icon: TemplatesIcon },
    ],
  },
  {
    label: 'Directory',
    path: '/directory',
    icon: DirectoryIcon,
    children: [
      { label: 'Features', path: '/directory/features', icon: FeaturesIcon },
      { label: 'Firebase', path: '/directory/firebase', icon: FirebaseIcon },
    ],
  },
]

export const midNav = [
  { label: 'User stories', path: '/user-stories', icon: StoriesIcon },
]

export const helpNav = { label: 'Help', path: '/help', icon: HelpIcon }

export const devNav = { label: 'Design system', path: '/designsystem', icon: SettingsIcon }

export const bottomNav = []

export const allItems = [
  ...primaryNav,
  ...navGroups.flatMap((g) => [{ label: g.label, path: g.path, icon: g.icon }, ...g.children]),
  ...midNav,
  { label: 'Users', path: '/users', icon: UsersIcon },
  { label: 'Settings', path: '/settings', icon: SettingsIcon },
  helpNav,
  devNav,
].filter((item, index, arr) => arr.findIndex((i) => i.path === item.path) === index)

export function isActive(currentPath, target) {
  if (target === '/') return currentPath === '/'
  return currentPath === target || currentPath.startsWith(`${target}/`)
}

export function titleForPath(path) {
  if (path === '/') return 'Dashboard'
  if (path === '/designsystem') return 'Design system'
  if (path === '/design-system') return 'Design system'
  if (path === '/settings/teams/new') return 'Create a new team'
  const exact = allItems.find((i) => i.path === path)
  if (exact) return exact.label
  const parent = navGroups.find((g) => path.startsWith(`${g.path}/`))
  if (parent) {
    const child = parent.children.find((c) => c.path === path)
    if (child) return child.label
    return parent.label
  }
  return 'Not found'
}

export function breadcrumbsForPath() {
  return []
}
