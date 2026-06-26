import {
  FilterIcon, SlidersIcon,
  LinearToolbarFilterIcon, LinearToolbarDisplayIcon, LinearToolbarSidebarIcon,
  LinearCustomViewIcon, LinearAddViewIcon,
} from './icons.jsx'
import { IconButton, Tab, Toolbar } from './ui/index.js'

export function ReviewsToolbar() {
  return (
    <Toolbar
      left={(
        <>
          <Tab active>Assigned</Tab>
          <Tab>Created</Tab>
          <Tab>Subscribed</Tab>
          <Tab>Activity</Tab>
        </>
      )}
      right={(
        <>
          <IconButton label="Filter"><FilterIcon size={14} strokeWidth={1.5} /></IconButton>
          <IconButton variant="filled" label="Display options"><SlidersIcon size={14} strokeWidth={1.5} /></IconButton>
          <IconButton variant="filled" label="Layout"><LinearToolbarSidebarIcon /></IconButton>
        </>
      )}
    />
  )
}

export function IssuesToolbar() {
  return (
    <Toolbar
      bordered={false}
      left={(
        <>
          <Tab href="#/issues/all">All issues</Tab>
          <Tab href="#/issues/active" active>Active</Tab>
          <Tab href="#/issues/backlog">Backlog</Tab>
          <IconButton label="Add new view"><LinearAddViewIcon /></IconButton>
        </>
      )}
      right={(
        <>
          <IconButton variant="filled" label="Filter"><FilterIcon size={14} strokeWidth={1.5} /></IconButton>
          <IconButton variant="filled" label="Display options"><SlidersIcon size={14} strokeWidth={1.5} /></IconButton>
          <IconButton variant="filled" label="Open details"><LinearToolbarSidebarIcon /></IconButton>
        </>
      )}
    />
  )
}

export function SearchToolbar({ activeTab = 'all' }) {
  const tabs = [
    { id: 'all', label: 'All', path: '/search' },
    { id: 'issues', label: 'Issues', path: '/search/issues' },
    { id: 'projects', label: 'Projects', path: '/search/projects' },
    { id: 'documents', label: 'Documents', path: '/search/documents' },
  ]

  return (
    <Toolbar bordered={false}
      left={(
        <>
          {tabs.map((tab) => (
            <Tab key={tab.id} href={`#${tab.path}`} active={activeTab === tab.id} muted>
              {tab.label}
            </Tab>
          ))}
        </>
      )}
      right={(
        <>
          <IconButton variant="filled" label="Add filter"><LinearToolbarFilterIcon /></IconButton>
          <IconButton variant="filled" label="Display options"><LinearToolbarDisplayIcon /></IconButton>
        </>
      )}
    />
  )
}

export function StandardPageToolbar({ left = null }) {
  return (
    <Toolbar bordered={false}
      left={left}
      right={(
        <>
          <IconButton variant="filled" label="Add filter"><LinearToolbarFilterIcon /></IconButton>
          <IconButton variant="filled" label="Display options"><LinearToolbarDisplayIcon /></IconButton>
          <IconButton variant="filled" label="Close sidebar"><LinearToolbarSidebarIcon /></IconButton>
        </>
      )}
    />
  )
}

export function ProjectsToolbar() {
  return (
    <Toolbar bordered={false}
      left={(
        <>
          <Tab href="#/projects/all" active>All projects</Tab>
          <Tab href="#/projects/m" className="min-w-[54px]">
            <span className="flex items-center gap-6">
              <LinearCustomViewIcon className="text-icon-view" />
              m
            </span>
          </Tab>
          <IconButton label="Add new view" className="ml-3"><LinearAddViewIcon /></IconButton>
        </>
      )}
      right={(
        <>
          <IconButton variant="filled" label="Add filter"><LinearToolbarFilterIcon /></IconButton>
          <IconButton variant="filled" label="Display options"><LinearToolbarDisplayIcon /></IconButton>
          <IconButton variant="filled" label="Close sidebar"><LinearToolbarSidebarIcon /></IconButton>
        </>
      )}
    />
  )
}

export function TeamTabs() {
  return (
    <Toolbar
      left={(
        <>
          <Tab active>Overview</Tab>
          <Tab>Documents</Tab>
          <Tab>Members</Tab>
        </>
      )}
      right={(
        <Tab surface>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
            <path d="M12 5v14M5 12h14" />
          </svg>
          Add resources
        </Tab>
      )}
    />
  )
}
