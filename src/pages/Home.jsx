import { useCallback, useState } from 'react'
import {
  StudiesIcon, PersonasIcon, LibraryIcon, TemplatesIcon,
  StoriesIcon, FeaturesIcon, FirebaseIcon, LinkIcon,
  UsabilityIcon, DirectoryIcon, UpdatesIcon,
} from '../components/icons.jsx'
import PageFrame from '../components/PageFrame.jsx'
import {
  dashboardStats, quickLinks, recentActivity, recentStories,
  recentStudies, workspaceModules,
} from '../lib/dashboard.js'
import {
  ActivityItem, Avatar, Badge, IssueRow, Link, ModuleCard,
  PriorityIcon, StatCard, StatusIcon, Table, TableBody, TableCell,
  TableHead, TableHeader, TableRow, Tag, Text,
} from '../components/ui/index.js'

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

function SectionHeading({ id, icon: Icon, title, action }) {
  return (
    <div className="mb-12 flex items-center justify-between gap-8">
      <div className="flex items-center gap-8">
        <Icon size={14} strokeWidth={1.5} className="text-faint" />
        <h2 id={id} className="text-[13px] font-ui text-ink">{title}</h2>
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
      <div className="flex flex-col gap-28 px-24 py-28">
        <section aria-labelledby="quick-links-title">
          <SectionHeading id="quick-links-title" icon={LinkIcon} title="Quick links" />
          <div className="flex flex-wrap gap-6">
            {quickLinks.map((link) => {
              const Icon = quickLinkIcons[link.label]
              return (
                <Tag key={link.path} href={`#${link.path}`} icon={Icon}>
                  {link.label}
                </Tag>
              )
            })}
          </div>
        </section>

        <section aria-labelledby="overview-title">
          <SectionHeading id="overview-title" icon={UpdatesIcon} title="Overview" />
          <div className="grid gap-12 sm:grid-cols-2 xl:grid-cols-4">
            {dashboardStats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </section>

        <div className="grid gap-28 xl:grid-cols-[minmax(0,1fr)_280px]">
          <div className="flex min-w-0 flex-col gap-28">
            <section aria-labelledby="studies-title">
              <SectionHeading
                id="studies-title"
                icon={StudiesIcon}
                title="Recent studies"
                action={(
                  <Link href="#/usability/studies" className="text-[12px]">
                    View all
                  </Link>
                )}
              />
              <div className="overflow-hidden rounded-lg border border-line-subtle bg-content">
                <Table className="border-0 rounded-none">
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Study</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Participants</TableHead>
                      <TableHead className="text-right">Updated</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentStudies.map((study) => (
                      <TableRow key={study.id} interactive>
                        <TableCell className="font-berkeley text-faint">{study.id}</TableCell>
                        <TableCell>
                          <a
                            href={`#/usability/studies/${study.id.toLowerCase()}`}
                            className="font-medium text-ink outline-none hover:text-accent focus-visible:ring-2 focus-visible:ring-accent"
                          >
                            {study.title}
                          </a>
                        </TableCell>
                        <TableCell>
                          <Badge variant={study.status} size="sm" dot>
                            {study.status === 'progress' ? 'In progress' : study.status === 'done' ? 'Done' : 'Todo'}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right tabular-nums text-faint">
                          {study.participants}
                        </TableCell>
                        <TableCell className="text-right tabular-nums text-faint">{study.date}</TableCell>
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
                action={<Link href="#/user-stories" className="text-[12px]">View all</Link>}
              />
              <div className="overflow-hidden rounded-lg border border-line-subtle bg-content py-4">
                {recentStories.map((story) => (
                  <IssueRow
                    key={story.id}
                    id={story.id}
                    title={story.title}
                    date={story.date}
                    href={`#/user-stories/${story.id.toLowerCase()}`}
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

          <aside className="flex flex-col gap-28">
            <section aria-labelledby="workspaces-title">
              <SectionHeading id="workspaces-title" icon={DirectoryIcon} title="Workspaces" />
              <div className="flex flex-col gap-8">
                {workspaceModules.map((mod) => (
                  <ModuleCard
                    key={mod.title}
                    {...mod}
                    icon={moduleIcons[mod.title]}
                  />
                ))}
              </div>
            </section>

            <section aria-labelledby="activity-title">
              <SectionHeading id="activity-title" icon={UpdatesIcon} title="Recent activity" />
              <div className="rounded-lg border border-line-subtle bg-content px-4 py-4">
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
