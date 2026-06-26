import PageFrame from '../components/PageFrame.jsx'
import { StandardPageToolbar } from '../components/ViewToolbar.jsx'

export default function PlaceholderPage({ title, path }) {
  return (
    <PageFrame toolbar={<StandardPageToolbar />}>
      <div className="flex min-h-full flex-col items-center justify-center px-6 py-12 text-center">
        <p className="font-mono text-xs text-[hsl(var(--muted-foreground))]">{path}</p>
        <h2 className="mt-2 text-base font-semibold text-[hsl(var(--foreground))]">{title}</h2>
        <p className="mt-1 max-w-[420px] text-sm text-[hsl(var(--muted-foreground))]">This view is not implemented yet.</p>
      </div>
    </PageFrame>
  )
}
