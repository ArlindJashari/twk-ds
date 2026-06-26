import { useCallback, useState } from 'react'
import {
  StudiesIcon, PersonasIcon, LibraryIcon, TemplatesIcon,
  StoriesIcon, FeaturesIcon, FirebaseIcon, LinkIcon,
  UsabilityIcon, DirectoryIcon, UpdatesIcon,
} from '../../components/icons.jsx'
import PageFrame from '../components/PageFrame.jsx'
import {
  dashboardStats, quickLinks, recentActivity, recentStories,
  recentStudies, workspaceModules,
} from '../../lib/dashboard.js'
import {
  ActivityItem, Avatar, Badge, IssueRow, Link, ModuleCard,
  PriorityIcon, StatCard, StatusIcon, Table, TableBody, TableCell,
  TableHead, TableHeader, TableRow, Tag,
} from '../components/ui/index.js'
import { v2Href } from '../lib/paths.js'

const quickLinkIcons = {
  Studies: StudiesIcon,
  Personas: PersonasIcon,
  Library: LibraryIcon,
  Templates: TemplatesIcon,
  'User stories': StoriesIcon,
  Features: FeaturesIcon,
  Firebase: FirebaseIcon,
}

const moduleIcons = {
  Usability: UsabilityIcon,
  'User stories': StoriesIcon,
  Directory: DirectoryIcon,
}

// Dashboard data carries v1 hash hrefs (#/path) — remap to the v2 namespace.
const toV2 = (hashHref) => v2Href(hashHref.replace(/^#/, ''))

function SectionHeading({ id, icon: Icon, title, action }) {
  return (
    <div className="mb-3 flex items-center justify-between gap-2">
      <div className="flex items-center gap-2">
        <Icon size={14} strokeWidth={1.5} className="text-[hsl(var(--muted-foreground))]" />
        <h2 id={id} className="text-sm font-semibold text-[hsl(var(--foreground))]">{title}</h2>
      </div>
      {action}
    </div>
  )
}

export default function Home() {
  const [selectedStories, setSelectedStories] = useState(() => new Set(['US-103']))

  const toggleStory = useCallback((id) => {
    setSelectedStories((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }, [])

  return (
    <PageFrame>
      <div className="flex flex-col gap-7 px-6 py-7">
        <section aria-labelledby="quick-links-title">
          <SectionHeading id="quick-links-title" icon={LinkIcon} title="Quick links" />
          <div className="flex flex-wrap gap-1.5">
            {quickLinks.map((link) => {
              const Icon = quickLinkIcons[link.label]
              return (
                <Tag key={link.path} href={v2Href(link.path)} icon={Icon}>
                  {link.label}
                </Tag>
              )
            })}
          </div>
        </section>

        <section aria-labelledby="overview-title">
          <SectionHeading id="overview-title" icon={UpdatesIcon} title="Overview" />
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {dashboardStats.map((stat) => (
              <StatCard key={stat.label} {...stat} href={toV2(stat.href)} />
            ))}
          </div>
        </section>

        <div className="grid gap-7 xl:grid-cols-[minmax(0,1fr)_280px]">
          <div className="flex min-w-0 flex-col gap-7">
            <section aria-labelledby="studies-title">
              <SectionHeading
                id="studies-title"
                icon={StudiesIcon}
                title="Recent studies"
                action={<Link href={v2Href('/usability/studies')} className="text-xs">View all</Link>}
              />
              <div className="overflow-hidden rounded-[var(--radius)] border border-[hsl(var(--border))] bg-[hsl(var(--card))]">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Study</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-end">Participants</TableHead>
                      <TableHead className="text-end">Updated</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentStudies.map((study) => (
                      <TableRow key={study.id} interactive>
                        <TableCell className="font-mono text-xs text-[hsl(var(--muted-foreground))]">{study.id}</TableCell>
                        <TableCell>
                          <a
                            href={v2Href(`/usability/studies/${study.id.toLowerCase()}`)}
                            className="font-medium text-[hsl(var(--foreground))] outline-none hover:text-[hsl(var(--primary))] v2-focus-ring"
                          >
                            {study.title}
                          </a>
                        </TableCell>
                        <TableCell>
                          <Badge variant={study.status} dot>
                            {study.status === 'progress' ? 'In progress' : study.status === 'done' ? 'Done' : 'Todo'}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-end tabular-nums text-[hsl(var(--muted-foreground))]">
                          {study.participants}
                        </TableCell>
                        <TableCell className="text-end tabular-nums text-[hsl(var(--muted-foreground))]">{study.date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </section>

            <section aria-labelledby="stories-title">
              <SectionHeading
                id="stories-title"
                icon={StoriesIcon}
                title="Recent user stories"
                action={<Link href={v2Href('/user-stories')} className="text-xs">View all</Link>}
              />
              <div className="overflow-hidden rounded-[var(--radius)] border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-1">
                {recentStories.map((story) => (
                  <IssueRow
                    key={story.id}
                    id={story.id}
                    title={story.title}
                    date={story.date}
                    href={v2Href(`/user-stories/${story.id.toLowerCase()}`)}
                    priority={<PriorityIcon level={story.priority ?? 'none'} />}
                    status={<StatusIcon status={story.status} />}
                    assignee={<Avatar size="xs" initials="AJ" />}
                    checked={selectedStories.has(story.id)}
                    selected={selectedStories.has(story.id)}
                    onCheck={() => toggleStory(story.id)}
                  />
                ))}
              </div>
            </section>
          </div>

          <aside className="flex flex-col gap-7">
            <section aria-labelledby="workspaces-title">
              <SectionHeading id="workspaces-title" icon={DirectoryIcon} title="Workspaces" />
              <div className="flex flex-col gap-2">
                {workspaceModules.map((mod) => (
                  <ModuleCard
                    key={mod.title}
                    {...mod}
                    href={toV2(mod.href)}
                    icon={moduleIcons[mod.title]}
                  />
                ))}
              </div>
            </section>

            <section aria-labelledby="activity-title">
              <SectionHeading id="activity-title" icon={UpdatesIcon} title="Recent activity" />
              <div className="rounded-[var(--radius)] border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-1">
                {recentActivity.map((item) => (
                  <ActivityItem key={item.id} text={item.text} time={item.time} />
                ))}
              </div>
            </section>
          </aside>
        </div>
      </div>
    </PageFrame>
  )
}
