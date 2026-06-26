import PageFrame from '../components/PageFrame.jsx'
import { StandardPageToolbar } from '../components/ViewToolbar.jsx'
import { EmptyState } from '../components/ui/index.js'
import { useCreateComposer } from '../lib/CreateComposerContext.jsx'

export default function Studies() {
  const { openCreate } = useCreateComposer()

  return (
    <PageFrame toolbar={<StandardPageToolbar />}>
      <EmptyState
        title="No studies yet"
        description="Create your first usability study or generate an example to explore the product."
        actionLabel="Create study"
        onAction={() => openCreate('study')}
      />
    </PageFrame>
  )
}
