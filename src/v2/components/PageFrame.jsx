export default function PageFrame({ toolbar, children }) {
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      {toolbar}
      <div className="min-h-0 flex-1 overflow-y-auto">{children}</div>
    </div>
  )
}
