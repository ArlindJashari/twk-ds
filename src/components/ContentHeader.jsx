import { MenuIcon, PlusIcon } from './icons.jsx'

export default function ContentHeader({
  title,
  onOpenSidebar,
  actionLabel,
  actionIcon: ActionIcon = PlusIcon,
  onAction,
}) {
  return (
    <header className="flex h-[44px] shrink-0 items-center border-b border-line bg-content px-8">
      <button
        type="button"
        onClick={onOpenSidebar}
        aria-label="Open navigation"
        className="grid size-[28px] shrink-0 place-items-center rounded-lg text-sub outline-none hover:bg-hover lg:hidden"
      >
        <MenuIcon size={16} strokeWidth={1.5} />
      </button>
      <h1 className="min-w-0 flex-1 truncate pl-10 text-[13px] font-medium text-body">{title}</h1>
      <a href="#/v2" className="mr-8 hidden h-[24px] items-center rounded-full border-[0.5px] border-line bg-content px-10 text-[12px] font-medium text-body shadow-panel outline-none transition-colors hover:bg-hover hover:text-ink focus-visible:ring-2 focus-visible:ring-accent sm:inline-flex">Version 2</a>
      {actionLabel && (
        <button
          type="button"
          aria-label={actionLabel}
          onClick={onAction}
          className="grid size-[28px] place-items-center rounded-full border-[0.5px] border-transparent text-body outline-none transition-colors hover:bg-hover hover:text-ink"
        >
          <ActionIcon size={14} strokeWidth={1.5} />
        </button>
      )}
    </header>
  )
}
