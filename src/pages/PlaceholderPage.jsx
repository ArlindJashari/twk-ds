import PageFrame from '../components/PageFrame.jsx'
import { StandardPageToolbar } from '../components/ViewToolbar.jsx'

export default function PlaceholderPage({ title, path }) {
  return (
    <PageFrame toolbar={<StandardPageToolbar />}>
      <div className="flex min-h-full flex-col items-center justify-center px-24 py-48 text-center">
        <p className="font-berkeley text-[11px] text-faint">{path}</p>
        <h2 className="mt-8 text-[16px] font-semibold text-ink">{title}</h2>
        <p className="mt-4 max-w-[420px] text-[13px] text-sub">This view is not implemented yet.</p>
      </div>
    </PageFrame>
  )
}
