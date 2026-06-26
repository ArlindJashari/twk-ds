import PageFrame from '../components/PageFrame.jsx'
import { ProjectsToolbar } from '../components/ViewToolbar.jsx'
import { ProjectsEmptyIcon } from '../../components/icons.jsx'
import { useCreateComposer } from '../../lib/CreateComposerContext.jsx'
import { Button } from '../components/ui/index.js'

export default function Projects() {
  const { openCreate } = useCreateComposer()

  return (
    <PageFrame toolbar={<ProjectsToolbar />}>
      <div className="flex flex-1 flex-col items-center justify-center px-6 py-12 text-center">
        <ProjectsEmptyIcon size={100} className="mb-6 text-[hsl(var(--muted-foreground))]" />
        <h2 className="text-base font-semibold text-[hsl(var(--foreground))]">Projects</h2>
        <p className="mt-2 max-w-[340px] text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
          Projects are larger units of work with a clear outcome, such as a new feature you want to ship.
          They can be shared across multiple teams and are comprised of issues and optional documents.
        </p>
        <div className="mt-10 flex items-center gap-2">
          <Button onClick={() => openCreate('project')}>
            Create new project
          </Button>
          <Button variant="outline">
            Documentation
          </Button>
        </div>
      </div>
    </PageFrame>
  )
}
