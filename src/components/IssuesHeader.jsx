import { TeamMark } from './icons.jsx'
import { IconButton } from './ui/index.js'

export default function IssuesHeader({ team = 'Surfarch', onOpenSidebar }) {
  return (
    <header className="flex h-[44px] shrink-0 items-center justify-between border-b border-line bg-content px-8">
      <div className="flex min-w-0 items-center gap-8">
        <button
          type="button"
          onClick={onOpenSidebar}
          aria-label="Open navigation"
          className="grid size-[28px] shrink-0 place-items-center rounded-lg text-sub outline-none hover:bg-hover lg:hidden"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path d="M2.5 4h11M2.5 8h11M2.5 12h11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
        <a href="#/team" className="flex shrink-0 items-center outline-none focus-visible:ring-2 focus-visible:ring-accent">
          <TeamMark size={16} />
        </a>
        <span className="text-[13px] text-faint" aria-hidden>/</span>
        <h1 className="truncate text-[13px] font-medium text-body">{team}</h1>
        <span className="text-[13px] text-faint" aria-hidden>›</span>
        <span className="truncate text-[13px] font-medium text-ink">Issues</span>
        <IconButton
          label="Add to favorites"
          size="sm"
          className="ml-2 text-faint"
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path
              d="M8 2.5l1.55 3.14 3.47.5-2.51 2.45.59 3.45L8 10.67l-3.1 1.63.59-3.45-2.51-2.45 3.47-.5L8 2.5z"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinejoin="round"
            />
          </svg>
        </IconButton>
      </div>
      <IconButton label="Setup active issues notifications" size="sm" className="text-faint">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
          <path
            d="M8 2.25a4.25 4.25 0 0 0-4.25 4.25v2.18l-.92 1.84a.75.75 0 0 0 .67 1.08h9.01a.75.75 0 0 0 .67-1.08l-.92-1.84V6.5A4.25 4.25 0 0 0 8 2.25z"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinejoin="round"
          />
          <path d="M6.75 12.75a1.25 1.25 0 0 0 2.5 0" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
        </svg>
      </IconButton>
    </header>
  )
}
