import { TeamTabs } from '../components/ViewToolbar.jsx'
import {
  TeamMark, PlusIcon, StackIcon, UserAvatarIcon, SlackIcon, TeamSettingsIcon,
  IssueCircleIcon, ProjectsIcon, ViewsIcon,
} from '../components/icons.jsx'

const gotoLinks = [
  { label: 'Connect Slack channel…', href: '#', icon: SlackIcon },
  { label: 'Team settings', href: '#/settings/teams/new', icon: TeamSettingsIcon },
  { label: 'Issues', href: '#/issues', icon: IssueCircleIcon },
  { label: 'Projects', href: '#/projects', icon: ProjectsIcon },
  { label: 'Views', href: '#/team/views', icon: ViewsIcon },
]

export default function TeamOverview() {
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <TeamTabs />
      <div className="flex flex-1 gap-32 px-32 py-28">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-14">
            <TeamMark size={48} />
            <h2 className="text-[28px] font-semibold tracking-[-0.022em] text-ink">Surfarch</h2>
          </div>
          <p className="mt-10 text-[14px] text-faint">Add a description…</p>

          <section className="mt-36">
            <div className="flex items-center justify-between">
              <h3 className="text-[15px] font-semibold text-ink">Pinned resources</h3>
              <div className="flex items-center gap-6">
                <button type="button" aria-label="Add resource" className="grid size-[28px] place-items-center rounded-full border border-line text-sub outline-none transition-colors hover:bg-hover hover:text-ink focus-visible:ring-2 focus-visible:ring-accent">
                  <PlusIcon size={15} />
                </button>
                <button type="button" aria-label="Organize sections" className="grid size-[28px] place-items-center rounded-full border border-line text-sub outline-none transition-colors hover:bg-hover hover:text-ink focus-visible:ring-2 focus-visible:ring-accent">
                  <StackIcon size={15} />
                </button>
              </div>
            </div>
            <p className="mt-12 text-[14px] text-faint">
              Add documents and links. Organize by creating sections.
            </p>
          </section>
        </div>

        <aside className="w-[200px] shrink-0">
          <div>
            <h4 className="text-[13px] text-sub">Members</h4>
            <div className="mt-10">
              <span className="grid size-[26px] place-items-center rounded-full border border-line-strong text-faint">
                <UserAvatarIcon size={14} />
              </span>
            </div>
          </div>

          <div className="mt-28">
            <h4 className="text-[13px] text-sub">Go to</h4>
            <nav className="mt-8 flex flex-col gap-[2px]">
              {gotoLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="flex h-[28px] items-center gap-6 rounded-[6px] px-4 text-[13px] text-sub outline-none transition-colors hover:bg-hover hover:text-ink focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <Icon size={14} className="shrink-0 text-faint" />
                    <span className="truncate">{link.label}</span>
                  </a>
                )
              })}
            </nav>
          </div>
        </aside>
      </div>
    </div>
  )
}
