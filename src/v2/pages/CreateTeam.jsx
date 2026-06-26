import { BackIcon, ProfileIcon } from '../../components/icons.jsx'
import { v2Href } from '../lib/paths.js'

function FormSection({ title, description, children }) {
  return (
    <section className="mb-6">
      {title && (
        <div className="mb-2.5">
          <h2 className="text-sm font-semibold text-[hsl(var(--foreground))]">{title}</h2>
          {description && <p className="mt-1 text-sm text-[hsl(var(--muted-foreground))]">{description}</p>}
        </div>
      )}
      <div className="overflow-hidden rounded-[var(--radius)] border border-[hsl(var(--border))] bg-[hsl(var(--card))]">{children}</div>
    </section>
  )
}

function FormRow({ label, description, children, hint }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-[hsl(var(--border))] px-4 py-3 last:border-b-0">
      <div className="min-w-0 flex-1">
        <div className="text-sm font-medium text-[hsl(var(--foreground))]">{label}</div>
        {description && <div className="mt-0.5 text-sm text-[hsl(var(--muted-foreground))]">{description}</div>}
      </div>
      <div className="shrink-0">{hint ? <span className="text-sm text-[hsl(var(--muted-foreground))]">{hint}</span> : children}</div>
    </div>
  )
}

const fieldClass =
  'h-8 rounded-[calc(var(--radius)-2px)] border border-[hsl(var(--input))] bg-[hsl(var(--background))] px-2.5 text-sm text-[hsl(var(--foreground))] outline-none placeholder:text-[hsl(var(--muted-foreground))] transition-colors focus-visible:border-[hsl(var(--ring))] focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring)/0.2)]'

export default function CreateTeam() {
  return (
    <div className="mx-auto max-w-[640px] px-6 py-7">
      <a href={v2Href('/settings')} className="mb-5 inline-flex items-center gap-1 text-sm font-medium text-[hsl(var(--muted-foreground))] outline-none hover:text-[hsl(var(--foreground))] v2-focus-ring">
        <BackIcon size={14} /> Back
      </a>
      <h1 className="text-2xl font-semibold tracking-tight text-[hsl(var(--foreground))]">Create a new team</h1>
      <p className="mt-1.5 text-base text-[hsl(var(--muted-foreground))]">Create a new team to manage separate cycles, workflows, and notifications</p>
      <div className="mt-7">
        <FormSection>
          <FormRow label="Icon & Name">
            <div className="flex items-center gap-2">
              <span className="grid size-8 place-items-center rounded-[calc(var(--radius)-2px)] bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))]"><ProfileIcon size={16} /></span>
              <input type="text" placeholder="e.g. Engineering" className={`${fieldClass} w-[240px]`} />
            </div>
          </FormRow>
          <FormRow label="Identifier" description="Used to identify issues from this team (e.g. ENG-123)">
            <input type="text" placeholder="e.g. ENG" className={`${fieldClass} w-[120px] text-end font-mono`} />
          </FormRow>
          <FormRow label="Parent team" hint="Available on Business" />
        </FormSection>
        <FormSection title="Team access" description="All members in your workspace will be able to see and join this team unless you make it private.">
          <FormRow label="Change team access" hint="Available on Business" />
        </FormSection>
        <FormSection title="Timezone" description="Used for team schedules, dates, and cycle start times">
          <FormRow label="Timezone">
            <select defaultValue="cet" className={`${fieldClass} w-[320px] appearance-none bg-[length:12px] bg-[right_10px_center] bg-no-repeat`} style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23a1a1aa' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")" }}>
              <option value="cet">GMT+2:00 - Central European Time - Belgrade</option>
            </select>
          </FormRow>
        </FormSection>
      </div>
    </div>
  )
}
