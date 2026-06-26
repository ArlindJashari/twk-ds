import { useCallback, useEffect, useRef, useState } from 'react'
import Sidebar from './Sidebar.jsx'
import ContentHeader from './ContentHeader.jsx'
import AskTawakkalnaFooter from './AskTawakkalnaFooter.jsx'
import { CloseIcon, SearchIcon, ComposeIcon } from '../../components/icons.jsx'
import { UserMenuTriggerContent } from './UserMenu.jsx'
import { useDismiss, useFocusTrap, useMediaQuery } from '../../lib/hooks.js'
import { useCreateComposer } from '../../lib/CreateComposerContext.jsx'
import { v2Href } from '../lib/paths.js'

const SIDEBAR_W = 'w-[244px]'

export default function AppShell({
  currentPath, title, headerAction, hideHeader = false, children,
}) {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const drawerRef = useDismiss(drawerOpen && !isDesktop, () => setDrawerOpen(false))
  const closeDrawerRef = useRef(null)
  useFocusTrap(drawerOpen && !isDesktop, drawerRef, closeDrawerRef)

  const { openCreate } = useCreateComposer()

  const openSearch = useCallback(() => {
    setDrawerOpen(false)
    window.location.hash = v2Href('/search').slice(1)
  }, [])

  useEffect(() => { if (isDesktop) setDrawerOpen(false) }, [isDesktop])

  useEffect(() => {
    const onShortcut = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        openSearch()
      }
    }
    document.addEventListener('keydown', onShortcut)
    return () => document.removeEventListener('keydown', onShortcut)
  }, [openSearch])

  return (
    <div className="flex h-screen overflow-hidden bg-[hsl(var(--secondary))] text-[hsl(var(--foreground))]">
      <aside className={`relative hidden shrink-0 lg:block ${SIDEBAR_W}`}>
        <Sidebar currentPath={currentPath} onNavigate={() => {}} onSearch={openSearch} />
      </aside>

      {drawerOpen && !isDesktop && (
        <div className="fixed inset-0 z-40 lg:hidden" role="dialog" aria-modal="true" aria-label="Navigation">
          <div className="absolute inset-0 bg-[hsl(var(--foreground)/0.3)] backdrop-blur-[1px]" aria-hidden="true" />
          <aside ref={drawerRef} className={`absolute inset-y-0 start-0 shadow-lg ${SIDEBAR_W}`}>
            <div className="flex h-[52px] items-center gap-4 px-3">
              <span className="flex min-w-0 flex-1 items-center gap-2 px-1">
                <UserMenuTriggerContent />
              </span>
              <button type="button" onClick={openSearch} aria-label="Search" className="grid size-7 place-items-center rounded-md hover:bg-[hsl(var(--accent))]"><SearchIcon size={14} strokeWidth={1.5} /></button>
              <button type="button" onClick={() => openCreate('issue')} aria-label="New issue" className="grid size-7 place-items-center rounded-md border border-[hsl(var(--border))] bg-[hsl(var(--card))] hover:bg-[hsl(var(--accent))]"><ComposeIcon size={14} strokeWidth={1.5} /></button>
              <button ref={closeDrawerRef} type="button" onClick={() => setDrawerOpen(false)} aria-label="Close navigation" className="grid size-7 place-items-center rounded-md hover:bg-[hsl(var(--accent))]"><CloseIcon size={14} strokeWidth={1.5} /></button>
            </div>
            <Sidebar currentPath={currentPath} onNavigate={() => setDrawerOpen(false)} onSearch={openSearch} hideHeader />
          </aside>
        </div>
      )}

      <div
        className="relative flex min-w-0 flex-1 flex-col overflow-hidden"
        aria-hidden={drawerOpen && !isDesktop ? true : undefined}
      >
        <div className="flex min-h-0 flex-1 flex-col">
          <main className="relative flex min-h-0 flex-1 flex-col overflow-hidden border border-[hsl(var(--border))] bg-[hsl(var(--background))] shadow-[var(--shadow-sm)] lg:mt-2 lg:me-2 lg:mb-2 lg:rounded-[var(--radius)]">
            {!hideHeader && (
              <ContentHeader
                title={title}
                actionLabel={headerAction?.label}
                actionIcon={headerAction?.icon}
                onAction={headerAction ? () => openCreate(headerAction.createType ?? 'issue') : undefined}
                onOpenSidebar={() => setDrawerOpen(true)}
              />
            )}
            <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
              {children}
            </div>
          </main>
        </div>
        <AskTawakkalnaFooter />
      </div>
    </div>
  )
}
