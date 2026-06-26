import { useCallback, useState } from 'react'
import { todoIssues } from '../lib/data.js'
import IssuesHeader from '../components/IssuesHeader.jsx'
import { IssuesToolbar } from '../components/ViewToolbar.jsx'
import { CaretDown, PlusIcon, UserAvatarIcon } from '../components/icons.jsx'
import {
  GroupHeader, IssueRow, PriorityIcon, SelectionBar, StatusIcon,
} from '../components/ui/index.js'

export default function Issues() {
  const [selected, setSelected] = useState(() => new Set())

  const toggleIssue = useCallback((id) => {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }, [])

  const clearSelection = useCallback(() => setSelected(new Set()), [])

  return (
    <div className="relative flex min-h-0 flex-1 flex-col">
      <IssuesHeader />
      <IssuesToolbar />
      <div className="flex-1 overflow-y-auto px-8 pb-8">
        <div className="pt-2">
          <GroupHeader
            label="Todo"
            count={todoIssues.length}
            leading={(
              <>
                <CaretDown size={10} className="shrink-0 text-faint" />
                <StatusIcon status="todo" />
              </>
            )}
            onAdd={() => {}}
          />
          <div className="flex flex-col">
            {todoIssues.map((issue) => (
              <IssueRow
                key={issue.id}
                className="mx-0"
                id={issue.id}
                title={issue.title}
                date={issue.date}
                href={`#${issue.id}`}
                priority={<PriorityIcon level={issue.priority ?? 'none'} />}
                status={<StatusIcon status="todo" />}
                assignee={(
                  <span className="grid size-[18px] place-items-center rounded-full text-faint">
                    <UserAvatarIcon size={14} strokeWidth={1.25} />
                  </span>
                )}
                checked={selected.has(issue.id)}
                selected={selected.has(issue.id)}
                onCheck={() => toggleIssue(issue.id)}
              />
            ))}
          </div>
        </div>
      </div>
      <SelectionBar
        count={selected.size}
        onClear={clearSelection}
        onMoveToBacklog={() => {}}
        onActions={() => {}}
      />
    </div>
  )
}
