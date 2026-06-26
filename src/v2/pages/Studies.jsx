import { StandardPageToolbar } from '../components/ViewToolbar.jsx'
import { ViewPage } from '../components/ui/index.js'
import { useCreateComposer } from '../../lib/CreateComposerContext.jsx'

export default function Studies() {
  const { openCreate } = useCreateComposer()

  return (
    <ViewPage
      variant="empty"
      toolbar={<StandardPageToolbar />}
      emptyTitle="No studies yet"
      emptyDescription="Create your first usability study or generate an example to explore the product."
      emptyActionLabel="Create study"
      onEmptyAction={() => openCreate('study')}
    />
  )
}
