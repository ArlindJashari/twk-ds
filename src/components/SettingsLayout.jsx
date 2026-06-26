import { useState } from 'react'
import {
  PreferencesIcon, ProfileIcon, NotificationsIcon, CodeReviewsIcon, SecurityIcon,
  ConnectedAccountsIcon, AgentIcon, LabelsIcon, TemplatesIcon, SLAsIcon, StatusIcon,
  UpdatesIcon, SparkleIcon, InitiativesIcon, DocumentsIcon, CustomerRequestsIcon,
  ReleasesIcon, SearchIcon, HelpIcon, BackIcon,
} from '../components/icons.jsx'
import AskTawakkalnaFooter from './AskTawakkalnaFooter.jsx'

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
    <aside className="flex h-full w-[240px] shrink-0 flex-col border-r border-line-subtle bg-[#f2f2f3]">
      <div className="px-10 pt-10">
        <a href="#/" className="inline-flex items-center gap-4 rounded-[6px] px-4 py-3 text-[13px] font-medium text-sub outline-none hover:bg-hover hover:text-ink">
          <BackIcon size={14} /> Back to app
        </a>
      </div>
      <div className="px-10 py-10">
        <div className="flex h-[30px] items-center gap-6 rounded-[6px] border border-line-strong bg-content px-8">
          <SearchIcon size={14} className="shrink-0 text-faint" />
          <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search..." aria-label="Search settings" className="min-w-0 flex-1 bg-transparent text-[13px] text-ink outline-none placeholder:text-faint" />
        </div>
      </div>
      <nav className="flex-1 overflow-y-auto px-6 pb-8">
        {sections.map((section) => (
          <div key={section.label}>
            <div className="mb-[2px] mt-8 px-6 text-[11px] font-medium text-faint">{section.label}</div>
            <div className="flex flex-col gap-[1px]">
              {section.items.map((item) => {
                const Icon = item.icon
                const active = currentPath === item.path
                return (
                  <a key={item.path} href={`#${item.path}`} aria-current={active ? 'page' : undefined} className={['flex h-[28px] items-center gap-6 rounded-[6px] px-6 text-[13px] outline-none transition-colors focus-visible:ring-2 focus-visible:ring-accent', active ? 'bg-active font-medium text-ink' : 'font-[450] text-sub hover:bg-hover hover:text-ink'].join(' ')}>
                    <Icon size={16} className={active ? 'text-ink' : 'text-faint'} />
                    <span className="truncate">{item.label}</span>
                  </a>
                )
              })}
            </div>
          </div>
        ))}
      </nav>
      <div className="px-8 py-8">
        <a href="#/help" aria-label="Help" className="grid size-[28px] place-items-center rounded-[6px] text-faint outline-none hover:bg-hover hover:text-sub"><HelpIcon size={16} /></a>
      </div>
    </aside>
  )
}

export default function SettingsLayout({ currentPath, children }) {
  return (
    <div className="flex h-screen overflow-hidden bg-shell text-ink">
      <SettingsSidebar currentPath={currentPath} />
      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <div className="flex min-h-0 flex-1 flex-col">
          <main className="relative flex min-h-0 flex-1 flex-col overflow-hidden border-[0.5px] border-line bg-content shadow-panel lg:mt-[8px] lg:mr-[8px] lg:mb-[8px] lg:rounded-panel">
            <div className="min-h-0 flex-1 overflow-y-auto">{children}</div>
          </main>
        </div>
        <AskTawakkalnaFooter />
      </div>
    </div>
  )
}
