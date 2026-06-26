import {
  TawakkalnaToolbarSidebarIcon,
  TawakkalnaCustomViewIcon, TawakkalnaAddViewIcon, PlusIcon,
} from '../../components/icons.jsx'
import { IconButton, Tab, Toolbar } from './ui/index.js'
import { v2Href } from '../lib/paths.js'

export function IssuesToolbar() {
  return (
    <Toolbar
      bordered={false}
      left={(
        <>
          <Tab href={v2Href('/issues/all')}>All issues</Tab>
          <Tab href={v2Href('/issues/active')} active>Active</Tab>
          <Tab href={v2Href('/issues/backlog')}>Backlog</Tab>
          <IconButton label="Add new view"><TawakkalnaAddViewIcon /></IconButton>
        </>
      )}
      right={(
        <>
          <IconButton variant="outline" label="Filter"><TawakkalnaCustomViewIcon /></IconButton>
          <IconButton variant="outline" label="Display"><TawakkalnaCustomViewIcon /></IconButton>
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
    <Toolbar
      bordered={false}
      left={(
        <>
          {tabs.map((tab) => (
            <Tab key={tab.id} href={v2Href(tab.path)} active={activeTab === tab.id} muted>
              {tab.label}
            </Tab>
          ))}
        </>
      )}
      right={(
        <>
          <IconButton variant="outline" label="Filter"><TawakkalnaCustomViewIcon /></IconButton>
          <IconButton variant="outline" label="Display"><TawakkalnaCustomViewIcon /></IconButton>
        </>
      )}
    />
  )
}

export function StandardPageToolbar({ left = null }) {
  return (
    <Toolbar
      bordered={false}
      left={left}
      right={(
        <>
          <IconButton variant="outline" label="Filter"><TawakkalnaCustomViewIcon /></IconButton>
          <IconButton variant="outline" label="Display"><TawakkalnaCustomViewIcon /></IconButton>
        </>
      )}
    />
  )
}

export function ProjectsToolbar() {
  return (
    <Toolbar
      left={<Tab active>All projects</Tab>}
      right={(
        <>
          <IconButton variant="outline" label="Filter"><TawakkalnaCustomViewIcon /></IconButton>
          <IconButton label="New project"><PlusIcon size={14} strokeWidth={1.5} /></IconButton>
        </>
      )}
    />
  )
}
