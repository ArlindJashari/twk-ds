import { useEffect, useMemo, useRef, useState } from 'react'
import { allItems } from '../../lib/nav.js'
import SearchEmptyIllustration from '../../components/SearchEmptyIllustration.jsx'
import { TawakkalnaSearchInputIcon } from '../../components/icons.jsx'
import { SearchToolbar } from '../components/ViewToolbar.jsx'
import { v2Href } from '../lib/paths.js'

const TAB_BY_PATH = [
  { prefix: '/search/issues', id: 'issues' },
  { prefix: '/search/projects', id: 'projects' },
  { prefix: '/search/documents', id: 'documents' },
]

function activeTabFromPath(path) {
  const match = TAB_BY_PATH.find((tab) => path === tab.prefix || path.startsWith(`${tab.prefix}/`))
  return match?.id ?? 'all'
}

export default function Search({ path = '/search' }) {
  const inputRef = useRef(null)
  const [query, setQuery] = useState('')
  const activeTab = activeTabFromPath(path)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    if (!normalized) return []
    return allItems.filter((item) =>
      `${item.label} ${item.path}`.toLowerCase().includes(normalized),
    )
  }, [query])

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <header className="shrink-0">
        <div className="flex h-11 items-center border-b border-[hsl(var(--border))] px-4">
          <div className="flex min-w-0 flex-1 items-center pe-6">
            <TawakkalnaSearchInputIcon className="ms-2 shrink-0 text-[hsl(var(--muted-foreground))]" />
            <div className="relative ms-px min-w-0 flex-1">
              {!query && (
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 start-2 flex items-center text-sm leading-none text-[hsl(var(--muted-foreground))]"
                >
                  Search by describing your project…
                </span>
              )}
              <input
                ref={inputRef}
                type="text"
                role="searchbox"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                aria-label="Search by describing your project…"
                className="h-[22px] w-full bg-transparent ps-2 text-base leading-[22px] text-[hsl(var(--foreground))] outline-none"
              />
            </div>
          </div>
        </div>
        <SearchToolbar activeTab={activeTab} />
      </header>

      {query.trim() ? (
        <div className="min-h-0 flex-1 overflow-y-auto px-4 py-2">
          {results.length > 0 ? (
            <div role="list" aria-label="Search results" className="flex flex-col gap-px">
              {results.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={`${item.path}-${item.label}`}
                    href={v2Href(item.path)}
                    className="group flex min-h-[40px] items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-[hsl(var(--muted-foreground))] outline-none hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--accent-foreground))] v2-focus-ring"
                  >
                    <Icon size={16} strokeWidth={1.5} className="shrink-0 text-[hsl(var(--muted-foreground))] group-hover:text-[hsl(var(--accent-foreground))]" />
                    <span className="min-w-0 flex-1 truncate">{item.label}</span>
                    <span className="hidden truncate font-mono text-xs text-[hsl(var(--muted-foreground))] sm:block">{item.path}</span>
                  </a>
                )
              })}
            </div>
          ) : (
            <div className="flex min-h-[280px] flex-col items-center justify-center text-center">
              <p className="text-sm font-medium text-[hsl(var(--foreground))]">No matching results</p>
              <p className="mt-1.5 text-sm text-[hsl(var(--muted-foreground))]">Try a different search term.</p>
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-1 flex-col items-center justify-center gap-2 pb-12 text-center">
          <SearchEmptyIllustration />
          <div className="flex flex-col gap-[7px]">
            <span className="text-sm font-medium text-[hsl(var(--foreground))]">Search</span>
            <span className="text-sm font-medium text-[hsl(var(--muted-foreground))]">Find issues, projects, and documents</span>
          </div>
        </div>
      )}
    </div>
  )
}
