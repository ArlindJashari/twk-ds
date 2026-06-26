import PageFrame from '../components/PageFrame.jsx'
import { ProjectsToolbar } from '../components/ViewToolbar.jsx'
import { ProjectsEmptyIcon } from '../components/icons.jsx'
import { useCreateComposer } from '../lib/CreateComposerContext.jsx'

export default function Projects() {
  const { openCreate } = useCreateComposer()

  return (
    <PageFrame toolbar={<ProjectsToolbar />}>
      <div className="flex flex-1 flex-col items-center justify-center px-24 py-48 text-center">
        <ProjectsEmptyIcon size={100} className="mb-24 text-sub" />
        <h2 className="text-[15px] font-semibold leading-[23px] text-body">Projects</h2>
        <p className="mt-8 max-w-[340px] text-[13px] font-[450] leading-[18px] text-sub">
          Projects are larger units of work with a clear outcome, such as a new feature you want to ship.
          They can be shared across multiple teams and are comprised of issues and optional documents.
        </p>
        <div className="mt-76 flex items-center gap-8">
          <button type="button" onClick={() => openCreate('project')} aria-label="Create new project" className="flex h-[28px] items-center gap-6 rounded-full bg-accent px-10 text-[12px] font-medium text-onaccent outline-none transition-colors hover:bg-accent-hover focus-visible:ring-2 focus-visible:ring-accent-soft">
            <span>Create new project</span>
            <span className="flex shrink-0 items-center gap-[2px] opacity-90">
              <kbd className="grid h-[16px] min-w-[16px] place-items-center rounded-[3px] bg-white/20 px-[3px] font-berkeley text-[9px] leading-none">N</kbd>
              <kbd className="grid h-[16px] min-w-[16px] place-items-center rounded-[3px] bg-white/20 px-[3px] font-berkeley text-[9px] leading-none">P</kbd>
            </span>
          </button>
          <button type="button" className="h-[28px] rounded-full border border-pill-border bg-content px-10 text-[12px] font-medium text-body outline-none transition-colors hover:bg-hover focus-visible:ring-2 focus-visible:ring-accent">
            Documentation
          </button>
        </div>
      </div>
    </PageFrame>
  )
}
