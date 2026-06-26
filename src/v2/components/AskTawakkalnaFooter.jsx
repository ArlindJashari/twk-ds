import { HistoryIcon, PaperPlaneIcon } from '../../components/icons.jsx'

export default function AskTawakkalnaFooter() {
  return (
    <div className="pointer-events-none -mt-1.5 mb-4 hidden h-8 shrink-0 items-center justify-end gap-2 px-2 pe-4 lg:me-2 lg:flex">
      <button
        type="button"
        aria-label="Ask Tawakkalna"
        className="pointer-events-auto flex h-8 items-center gap-2 rounded-md px-3 text-xs font-medium text-[hsl(var(--muted-foreground))] transition-colors hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--foreground))] v2-focus-ring"
      >
        <PaperPlaneIcon size={14} strokeWidth={1.5} />
        Ask Tawakkalna
      </button>
      <button
        type="button"
        aria-label="History"
        className="pointer-events-auto grid size-8 place-items-center rounded-md text-[hsl(var(--muted-foreground))] transition-colors hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--foreground))] v2-focus-ring"
      >
        <HistoryIcon size={16} strokeWidth={1.5} />
      </button>
    </div>
  )
}
