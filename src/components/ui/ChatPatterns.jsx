import { cn } from '../../lib/cn.js'
import Avatar from './Avatar.jsx'
import Button from './Button.jsx'
import IconButton from './IconButton.jsx'
import { PlusIcon } from '../icons.jsx'

export function ChatBubble({ role = 'user', avatar, children, meta, className }) {
  const isUser = role === 'user'
  return (
    <div className={cn('flex gap-10', isUser ? 'flex-row-reverse' : 'flex-row', className)}>
      {avatar}
      <div className={cn('min-w-0 max-w-[420px]', isUser ? 'text-end' : 'text-start')}>
        <div
          className={cn(
            'rounded-lg px-12 py-10 text-[13px] leading-[1.45]',
            isUser ? 'bg-accent text-onaccent' : 'border border-line-subtle bg-well text-body',
          )}
        >
          {children}
        </div>
        {meta ? <p className="mt-4 text-[11px] text-faint">{meta}</p> : null}
      </div>
    </div>
  )
}

export function TypingIndicator({ className }) {
  return (
    <div className={cn('flex items-center gap-6', className)} role="status" aria-label="Typing">
      {[0, 1, 2].map((index) => (
        <span
          key={index}
          className="size-[6px] animate-pulse rounded-full bg-faint"
          style={{ animationDelay: `${index * 150}ms` }}
        />
      ))}
    </div>
  )
}

export function PromptBar({ value, onChange, onSubmit, placeholder, className }) {
  return (
    <div className={cn('flex items-center gap-8 rounded-panel border border-line-subtle bg-content p-8 shadow-stroke-faint', className)}>
      <IconButton variant="filled" label="Attach" size="sm">
        <PlusIcon size={14} strokeWidth={1.5} />
      </IconButton>
      <textarea
        rows={1}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="min-h-[32px] min-w-0 flex-1 resize-none bg-transparent py-6 text-[13px] text-body outline-none placeholder:text-faint"
      />
      <Button size="sm" onClick={onSubmit}>Send</Button>
    </div>
  )
}

export function AiResponseCard({ title, model, children, onCopy, className }) {
  return (
    <div className={cn('w-full max-w-[480px] rounded-lg border border-line-subtle bg-content shadow-stroke-faint', className)}>
      <div className="flex items-center justify-between border-b border-line-subtle px-12 py-10">
        <div className="flex items-center gap-8">
          <Avatar size="xs" initials="AI" className="bg-accent text-onaccent" />
          <span className="text-[12px] text-faint">{model ?? title}</span>
        </div>
        {onCopy ? (
          <Button variant="ghost" size="xs" onClick={onCopy}>Copy</Button>
        ) : null}
      </div>
      <div className="p-12 text-[13px] leading-[1.45] text-body">{children}</div>
    </div>
  )
}
