import { MenuIcon, PlusIcon } from '../../components/icons.jsx'

export default function ContentHeader({
  title,
  onOpenSidebar,
  actionLabel,
  actionIcon: ActionIcon = PlusIcon,
  onAction,
}) {
  return (
    <header className="flex h-11 shrink-0 items-center border-b border-[hsl(var(--v2-border))] bg-[hsl(var(--v2-background))] px-4">
      <button
        type="button"
        onClick={onOpenSidebar}
        aria-label="Open navigation"
        className="grid size-8 shrink-0 place-items-center rounded-md text-[hsl(var(--v2-muted-foreground))] hover:bg-[hsl(var(--v2-accent))] lg:hidden v2-focus-ring"
      >
        <MenuIcon size={16} strokeWidth={1.5} />
      </button>
      <h1 className="min-w-0 flex-1 truncate ps-2 text-sm font-semibold text-[hsl(var(--v2-foreground))]">{title}</h1>
      <a
        href="#/"
        className="me-2 hidden h-8 items-center rounded-[calc(var(--v2-radius)-2px)] border border-[hsl(var(--v2-border))] bg-[hsl(var(--v2-background))] px-3 text-xs font-medium text-[hsl(var(--v2-muted-foreground))] shadow-[var(--v2-shadow-sm)] transition-colors hover:bg-[hsl(var(--v2-accent))] hover:text-[hsl(var(--v2-foreground))] sm:inline-flex v2-focus-ring"
      >
        Version 1
      </a>
      {actionLabel && (
        <button
          type="button"
          aria-label={actionLabel}
          onClick={onAction}
          className="grid size-8 place-items-center rounded-md text-[hsl(var(--v2-muted-foreground))] transition-colors hover:bg-[hsl(var(--v2-accent))] hover:text-[hsl(var(--v2-foreground))] v2-focus-ring"
        >
          <ActionIcon size={14} strokeWidth={1.5} />
        </button>
      )}
    </header>
  )
}
