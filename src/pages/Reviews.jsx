import { ReviewsToolbar } from '../components/ViewToolbar.jsx'

export default function Reviews() {
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <ReviewsToolbar />
      <div className="flex flex-1 flex-col items-center justify-center px-24 py-48 text-center">
        <p className="text-[13px] text-pill-muted">No reviews assigned to you.</p>
      </div>
    </div>
  )
}
