import { useState } from 'react'
import {
  PreferencesIcon, ProfileIcon, NotificationsIcon, CodeReviewsIcon, SecurityIcon,
  ConnectedAccountsIcon, AgentIcon, LabelsIcon, TemplatesIcon, SLAsIcon, StatusIcon,
  UpdatesIcon, SparkleIcon, InitiativesIcon, DocumentsIcon, CustomerRequestsIcon,
  ReleasesIcon, SearchIcon, HelpIcon, BackIcon,
} from '../../components/icons.jsx'
import AskTawakkalnaFooter from './AskTawakkalnaFooter.jsx'
import { v2Href } from '../lib/paths.js'

const sections = [
  { label: 'Personal', items: [
    { label: 'Preferences', path: '/settings/preferences', icon: PreferencesIcon },
    { label: 'Profile', path: '/settings/profile', icon: ProfileIcon },
    { label: 'Notifications', path: '/settings/notifications', icon: NotificationsIcon },
    { label: 'Code & reviews', path: '/settings/code-reviews', icon: CodeReviewsIcon },
    { label: 'Security & access', path: '/settings/security', icon: SecurityIcon },
    { label: 'Connected accounts', path: '/settings/connected-accounts', icon: ConnectedAccountsIcon },
    { label: 'Agent personalization', path: '/settings/agent', icon: AgentIcon },
  ]},
  { label: 'Issues', items: [
    { label: 'Labels', path: '/settings/labels', icon: LabelsIcon },
    { label: 'Templates', path: '/settings/templates', icon: TemplatesIcon },
    { label: 'SLAs', path: '/settings/slas', icon: SLAsIcon },
  ]},
  { label: 'Projects', items: [
    { label: 'Labels', path: '/settings/project-labels', icon: LabelsIcon },
    { label: 'Templates', path: '/settings/project-templates', icon: TemplatesIcon },
    { label: 'Statuses', path: '/settings/statuses', icon: StatusIcon },
    { label: 'Updates', path: '/settings/updates', icon: UpdatesIcon },
  ]},
  { label: 'Features', items: [
    { label: 'AI & Agents', path: '/settings/ai', icon: SparkleIcon },
    { label: 'Initiatives', path: '/settings/initiatives', icon: InitiativesIcon },
    { label: 'Documents', path: '/settings/documents', icon: DocumentsIcon },
    { label: 'Customer requests', path: '/settings/customer-requests', icon: CustomerRequestsIcon },
    { label: 'Releases', path: '/settings/releases', icon: ReleasesIcon },
  ]},
]

function SettingsSidebar({ currentPath }) {
  const [query, setQuery] = useState('')
  return (
    <aside className="flex h-full w-[240px] shrink-0 flex-col border-e border-[hsl(var(--v2-border))] bg-[hsl(var(--v2-muted))]">
      <div className="px-2.5 pt-2.5">
        <a href={v2Href('/')} className="inline-flex items-center gap-1 rounded-md px-1 py-1.5 text-sm font-medium text-[hsl(var(--v2-muted-foreground))] hover:bg-[hsl(var(--v2-accent))] hover:text-[hsl(var(--v2-foreground))] v2-focus-ring">
          <BackIcon size={14} /> Back to app
        </a>
      </div>
      <div className="px-2.5 py-2.5">
        <div className="flex h-8 items-center gap-1.5 rounded-md border border-[hsl(var(--v2-border))] bg-[hsl(var(--v2-background))] px-2">
          <SearchIcon size={14} className="shrink-0 text-[hsl(var(--v2-muted-foreground))]" />
          <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search..." aria-label="Search settings" className="min-w-0 flex-1 bg-transparent text-sm text-[hsl(var(--v2-foreground))] outline-none placeholder:text-[hsl(var(--v2-muted-foreground))]" />
        </div>
      </div>
      <nav className="flex-1 overflow-y-auto px-1.5 pb-4">
        {sections.map((section) => (
          <div key={section.label}>
            <div className="mb-0.5 mt-2 px-1.5 text-[11px] font-medium text-[hsl(var(--v2-muted-foreground))]">{section.label}</div>
            <div className="flex flex-col gap-px">
              {section.items.map((item) => {
                const Icon = item.icon
                const active = currentPath.endsWith(item.path)
                return (
                  <a key={item.path} href={v2Href(item.path)} aria-current={active ? 'page' : undefined} className={['flex h-7 items-center gap-1.5 rounded-md px-1.5 text-sm outline-none transition-colors v2-focus-ring', active ? 'bg-[hsl(var(--v2-accent))] font-medium text-[hsl(var(--v2-foreground))]' : 'font-normal text-[hsl(var(--v2-muted-foreground))] hover:bg-[hsl(var(--v2-accent))] hover:text-[hsl(var(--v2-foreground))]'].join(' ')}>
                    <Icon size={16} className={active ? 'text-[hsl(var(--v2-foreground))]' : 'text-[hsl(var(--v2-muted-foreground))]'} />
                    <span className="truncate">{item.label}</span>
                  </a>
                )
              })}
            </div>
          </div>
        ))}
      </nav>
      <div className="px-2 py-2">
        <a href={v2Href('/help')} aria-label="Help" className="grid size-7 place-items-center rounded-md text-[hsl(var(--v2-muted-foreground))] hover:bg-[hsl(var(--v2-accent))] v2-focus-ring"><HelpIcon size={16} /></a>
      </div>
    </aside>
  )
}

export default function SettingsLayout({ currentPath, children }) {
  return (
    <div className="flex h-screen overflow-hidden bg-[hsl(var(--v2-shell))] text-[hsl(var(--v2-foreground))]">
      <SettingsSidebar currentPath={currentPath} />
      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <div className="flex min-h-0 flex-1 flex-col">
          <main className="relative flex min-h-0 flex-1 flex-col overflow-hidden border border-[hsl(var(--v2-border))] bg-[hsl(var(--v2-background))] shadow-[var(--v2-shadow-sm)] lg:mt-2 lg:me-2 lg:mb-2 lg:rounded-[var(--v2-radius)]">
            <div className="min-h-0 flex-1 overflow-y-auto">{children}</div>
          </main>
        </div>
        <AskTawakkalnaFooter />
      </div>
    </div>
  )
}
