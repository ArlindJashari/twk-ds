import AppShell from './components/AppShell.jsx'
import SettingsLayout from './components/SettingsLayout.jsx'
import Home from './pages/Home.jsx'
import Issues from './pages/Issues.jsx'
import Projects from './pages/Projects.jsx'
import Search from './pages/Search.jsx'
import PlaceholderPage from './pages/PlaceholderPage.jsx'
import CreateTeam from './pages/CreateTeam.jsx'
import DesignSystem from './pages/DesignSystem.jsx'
import DesignSystemRedirect from './pages/DesignSystemRedirect.jsx'
import { useHashRoute } from './lib/hooks.js'
import { titleForPath } from './lib/nav.js'

function routeConfig(path) {
  if (path === '/') {
    return { page: Home, title: 'Dashboard' }
  }
  if (path === '/designsystem') {
    return { designSystem: true, page: DesignSystem }
  }
  if (path === '/design-system') {
    return { designSystem: true, page: DesignSystemRedirect }
  }
  if (path === '/search' || path.startsWith('/search/')) {
    return { page: Search, hideHeader: true, pageProps: { path } }
  }
  if (path === '/projects' || path.startsWith('/projects/')) {
    return { page: Projects, title: 'Projects', headerAction: { label: 'New project' } }
  }
  if (path === '/issues' || path.startsWith('/issues/')) {
    return { page: Issues, title: 'Issues', hideHeader: true }
  }
  if (path === '/settings/teams/new') {
    return { settings: true, page: CreateTeam }
  }

  const title = titleForPath(path)
  if (title === 'Not found') {
    return { page: PlaceholderPage, title: path, pageProps: { path } }
  }

  return { page: PlaceholderPage, title, pageProps: { path } }
}

export default function App() {
  const { path } = useHashRoute()
  const config = routeConfig(path)

  if (config.settings) {
    const Page = config.page
    return <SettingsLayout currentPath={path}><Page /></SettingsLayout>
  }

  if (config.designSystem) {
    const Page = config.page
    return <Page />
  }

  const Page = config.page

  return (
    <AppShell
      currentPath={path}
      title={config.title}
      headerAction={config.headerAction}
      hideHeader={config.hideHeader}
    >
      <Page title={config.title} path={path} {...(config.pageProps ?? {})} />
    </AppShell>
  )
}
