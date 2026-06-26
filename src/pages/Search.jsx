import { useEffect, useMemo, useRef, useState } from 'react'
import { allItems } from '../lib/nav.js'
import SearchEmptyIllustration from '../components/SearchEmptyIllustration.jsx'
import { LinearSearchInputIcon } from '../components/icons.jsx'
import { SearchToolbar } from '../components/ViewToolbar.jsx'

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
        <div className="flex h-[44px] items-center border-b border-line px-8">
          <div className="flex min-w-0 flex-1 items-center pr-[25px]">
            <LinearSearchInputIcon className="ml-[9px] shrink-0 text-pill-muted" />
            <div className="relative ml-px min-w-0 flex-1">
              {!query && (
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 left-8 flex items-center text-[13px] font-[450] leading-none text-body"
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
                className="h-[22px] w-full bg-transparent pl-8 text-[15px] font-[450] leading-[22px] text-body outline-none"
              />
            </div>
          </div>
        </div>
        <SearchToolbar activeTab={activeTab} />
      </header>

      {query.trim() ? (
        <div className="min-h-0 flex-1 overflow-y-auto px-8 py-6">
          {results.length > 0 ? (
            <div role="list" aria-label="Search results" className="flex flex-col gap-[1px]">
              {results.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={`${item.path}-${item.label}`}
                    href={`#${item.path}`}
                    className="group flex min-h-[40px] items-center gap-8 rounded-lg px-10 py-8 text-[13px] font-medium text-pill-muted outline-none hover:bg-shell-hover hover:text-nav-active focus-visible:bg-shell-hover focus-visible:text-nav-active"
                  >
                    <Icon size={16} strokeWidth={1.5} className="shrink-0 text-pill-muted group-hover:text-nav-active" />
                    <span className="min-w-0 flex-1 truncate">{item.label}</span>
                    <span className="hidden truncate font-berkeley text-[11px] text-faint sm:block">{item.path}</span>
                  </a>
                )
              })}
            </div>
          ) : (
            <div className="flex min-h-[280px] flex-col items-center justify-center text-center">
              <p className="text-[13px] font-medium text-ink">No matching results</p>
              <p className="mt-6 text-[13px] font-medium text-pill-muted">Try a different search term.</p>
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-1 flex-col items-center justify-center gap-8 pb-48 text-center">
          <SearchEmptyIllustration />
          <div className="flex flex-col gap-[7px]">
            <span className="text-[13px] font-medium text-ink">Search</span>
            <span className="text-[13px] font-medium text-pill-muted">Find issues, projects, and documents</span>
          </div>
        </div>
      )}
    </div>
  )
}
