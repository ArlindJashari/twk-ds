import { InboxIcon } from '../components/icons.jsx'

export default function Inbox() {
  return (
    <div className="flex min-h-0 flex-1 flex-col items-center justify-center px-24 py-48 text-center">
      <InboxIcon size={48} strokeWidth={1.25} className="mb-16 text-faint" />
      <p className="text-[13px] text-pill-muted">No notifications</p>
    </div>
  )
}
