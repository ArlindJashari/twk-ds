import { BellIcon, MenuIcon, StarIcon, TeamMark } from './icons.jsx'
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
          <MenuIcon size={16} />
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
          <StarIcon size={14} strokeWidth={1.5} />
        </IconButton>
      </div>
      <IconButton label="Setup active issues notifications" size="sm" className="text-faint">
        <BellIcon size={14} strokeWidth={1.5} />
      </IconButton>
    </header>
  )
}
