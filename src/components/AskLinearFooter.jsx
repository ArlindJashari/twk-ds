import { HistoryIcon, PaperPlaneIcon } from './icons.jsx'

export default function AskLinearFooter() {
  return (
    <div
      data-agent-toolbar-bounds
      className="pointer-events-none -mt-[6px] mb-4 hidden h-[30px] shrink-0 items-center justify-end gap-6 px-[2px] pt-[2px] pr-8 lg:mr-8 lg:flex"
    >
      <button
        type="button"
        aria-label="Ask Tawakkalna"
        className="pointer-events-auto flex h-[28px] items-center gap-6 rounded-lg pl-10 pr-12 text-[12px] font-medium text-faint outline-none transition-colors hover:bg-hover hover:text-body focus-visible:ring-2 focus-visible:ring-accent"
      >
        <PaperPlaneIcon size={14} strokeWidth={1.5} className="text-faint" />
        Ask Tawakkalna
      </button>
      <button
        type="button"
        aria-label="History"
        className="pointer-events-auto grid size-[28px] place-items-center rounded-lg text-body outline-none transition-colors hover:bg-hover hover:text-ink focus-visible:ring-2 focus-visible:ring-accent"
      >
        <HistoryIcon size={16} strokeWidth={1.5} />
      </button>
    </div>
  )
}
