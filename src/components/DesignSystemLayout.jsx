import { BackIcon } from './icons.jsx'

export default function DesignSystemLayout({ children }) {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-shell text-ink">
      <header className="flex h-[44px] shrink-0 items-center border-b border-line bg-content px-12">
        <a
          href="#/"
          className="inline-flex h-[28px] items-center gap-6 rounded-lg px-8 text-[13px] font-medium text-sub outline-none transition-colors hover:bg-hover hover:text-ink focus-visible:ring-2 focus-visible:ring-accent"
        >
          <BackIcon size={14} strokeWidth={1.5} />
          Back to app
        </a>
        <span className="mx-12 h-[16px] w-px bg-line-subtle" aria-hidden />
        <span className="text-[13px] font-medium text-body">Design system</span>
      </header>
      <div className="min-h-0 flex-1 overflow-hidden bg-content lg:m-8 lg:rounded-panel lg:border-[0.5px] lg:border-line lg:shadow-panel">
        {children}
      </div>
    </div>
  )
}
