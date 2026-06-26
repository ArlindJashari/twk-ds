import {
  TawakkalnaToolbarFilterIcon, TawakkalnaToolbarDisplayIcon, TawakkalnaToolbarSidebarIcon,
  TawakkalnaCustomViewIcon, TawakkalnaAddViewIcon, PlusIcon,
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
          <IconButton variant="filled" label="Filter"><TawakkalnaToolbarFilterIcon /></IconButton>
          <IconButton variant="filled" label="Display options"><TawakkalnaToolbarDisplayIcon /></IconButton>
          <IconButton variant="filled" label="Layout"><TawakkalnaToolbarSidebarIcon /></IconButton>
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
          <IconButton label="Add new view"><TawakkalnaAddViewIcon /></IconButton>
        </>
      )}
      right={(
        <>
          <IconButton variant="filled" label="Filter"><TawakkalnaToolbarFilterIcon /></IconButton>
          <IconButton variant="filled" label="Display options"><TawakkalnaToolbarDisplayIcon /></IconButton>
          <IconButton variant="filled" label="Open details"><TawakkalnaToolbarSidebarIcon /></IconButton>
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
          <IconButton variant="filled" label="Add filter"><TawakkalnaToolbarFilterIcon /></IconButton>
          <IconButton variant="filled" label="Display options"><TawakkalnaToolbarDisplayIcon /></IconButton>
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
          <IconButton variant="filled" label="Add filter"><TawakkalnaToolbarFilterIcon /></IconButton>
          <IconButton variant="filled" label="Display options"><TawakkalnaToolbarDisplayIcon /></IconButton>
          <IconButton variant="filled" label="Close sidebar"><TawakkalnaToolbarSidebarIcon /></IconButton>
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
              <TawakkalnaCustomViewIcon className="text-icon-view" />
              m
            </span>
          </Tab>
          <IconButton label="Add new view" className="ml-3"><TawakkalnaAddViewIcon /></IconButton>
        </>
      )}
      right={(
        <>
          <IconButton variant="filled" label="Add filter"><TawakkalnaToolbarFilterIcon /></IconButton>
          <IconButton variant="filled" label="Display options"><TawakkalnaToolbarDisplayIcon /></IconButton>
          <IconButton variant="filled" label="Close sidebar"><TawakkalnaToolbarSidebarIcon /></IconButton>
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
          <PlusIcon size={12} strokeWidth={1.5} />
          Add resources
        </Tab>
      )}
    />
  )
}
