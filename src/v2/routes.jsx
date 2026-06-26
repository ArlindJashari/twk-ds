import AppShell from './components/AppShell.jsx'
import Home from './pages/Home.jsx'
import Issues from './pages/Issues.jsx'
import Projects from './pages/Projects.jsx'
import Search from './pages/Search.jsx'
import Studies from './pages/Studies.jsx'
import CreateTeam from './pages/CreateTeam.jsx'
import PlaceholderPage from './pages/PlaceholderPage.jsx'
import DesignSystem from './pages/DesignSystem.jsx'
import { fromV2Path } from './lib/paths.js'
import { titleForPath } from '../lib/nav.js'

function v2RouteConfig(appPath) {
  if (appPath === '/') {
    return { page: Home, title: 'Dashboard' }
  }
  if (appPath === '/designsystem' || appPath === '/design-system') {
    return { designSystem: true, page: DesignSystem }
  }
  if (appPath === '/search' || appPath.startsWith('/search/')) {
    return { page: Search, hideHeader: true, pageProps: { path: appPath } }
  }
  if (appPath === '/usability/studies' || appPath.startsWith('/usability/studies/')) {
    return { page: Studies, title: 'Studies', headerAction: { label: 'New study', createType: 'study' } }
  }
  if (appPath === '/projects' || appPath.startsWith('/projects/')) {
    return { page: Projects, title: 'Projects', headerAction: { label: 'New project', createType: 'project' } }
  }
  if (appPath === '/issues' || appPath.startsWith('/issues/')) {
    return { page: Issues, title: 'Issues', hideHeader: true }
  }
  if (appPath === '/settings/teams/new') {
    return { page: CreateTeam, title: 'Create a new team' }
  }

  const title = titleForPath(appPath)
  if (title === 'Not found') {
    return { page: PlaceholderPage, title: appPath, pageProps: { path: appPath } }
  }
  return { page: PlaceholderPage, title, pageProps: { path: appPath } }
}

export default function V2Routes({ path }) {
  const appPath = fromV2Path(path)
  const config = v2RouteConfig(appPath)
  const Page = config.page

  if (config.designSystem) {
    return (
      <div className="v2-root min-h-screen">
        <Page />
      </div>
    )
  }

  return (
    <div className="v2-root">
      <AppShell
        currentPath={path}
        title={config.title}
        headerAction={config.headerAction}
        hideHeader={config.hideHeader}
      >
        <Page title={config.title} path={appPath} {...(config.pageProps ?? {})} />
      </AppShell>
    </div>
  )
}
