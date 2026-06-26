import { BellIcon, MenuIcon, StarIcon, TeamMark } from '../../components/icons.jsx'
import { IconButton } from './ui/index.js'

export default function IssuesHeader({ team = 'Surfarch', onOpenSidebar }) {
  return (
    <header className="flex h-11 shrink-0 items-center justify-between border-b border-[hsl(var(--border))] bg-[hsl(var(--background))] px-4">
      <div className="flex min-w-0 items-center gap-2">
        <button
          type="button"
          onClick={onOpenSidebar}
          aria-label="Open navigation"
          className="grid size-8 shrink-0 place-items-center rounded-md text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--accent))] lg:hidden v2-focus-ring"
        >
          <MenuIcon size={16} />
        </button>
        <a href="#/v2/team" className="flex shrink-0 items-center v2-focus-ring">
          <TeamMark size={16} />
        </a>
        <span className="text-sm text-[hsl(var(--muted-foreground))]" aria-hidden>/</span>
        <h1 className="truncate text-sm font-medium text-[hsl(var(--muted-foreground))]">{team}</h1>
        <span className="text-sm text-[hsl(var(--muted-foreground))]" aria-hidden>›</span>
        <span className="truncate text-sm font-semibold text-[hsl(var(--foreground))]">Issues</span>
        <IconButton label="Add to favorites" size="sm" className="ms-1">
          <StarIcon size={14} strokeWidth={1.5} />
        </IconButton>
      </div>
      <a
        href="#/"
        className="me-2 hidden h-8 items-center rounded-[calc(var(--radius)-2px)] border border-[hsl(var(--border))] bg-[hsl(var(--background))] px-3 text-xs font-medium text-[hsl(var(--muted-foreground))] shadow-[var(--shadow-sm)] transition-colors hover:bg-[hsl(var(--accent))] sm:inline-flex v2-focus-ring"
      >
        Version 1
      </a>
      <IconButton label="Setup active issues notifications" size="sm">
        <BellIcon size={14} strokeWidth={1.5} />
      </IconButton>
    </header>
  )
}
