import { BackIcon, ProfileIcon } from '../components/icons.jsx'

function FormSection({ title, description, children }) {
  return (
    <section className="mb-24">
      {title && (
        <div className="mb-10">
          <h2 className="text-[13px] font-semibold text-ink">{title}</h2>
          {description && <p className="mt-4 text-[13px] text-sub">{description}</p>}
        </div>
      )}
      <div className="overflow-hidden rounded-[8px] border border-line-strong bg-content">{children}</div>
    </section>
  )
}

function FormRow({ label, description, children, hint }) {
  return (
    <div className="flex items-center justify-between gap-16 border-b border-line-subtle px-16 py-12 last:border-b-0">
      <div className="min-w-0 flex-1">
        <div className="text-[13px] font-medium text-ink">{label}</div>
        {description && <div className="mt-2 text-[13px] text-sub">{description}</div>}
      </div>
      <div className="shrink-0">{hint ? <span className="text-[13px] text-faint">{hint}</span> : children}</div>
    </div>
  )
}

export default function CreateTeam() {
  return (
    <div className="mx-auto max-w-[640px] px-24 py-28">
      <a href="#/settings" className="mb-20 inline-flex items-center gap-4 text-[13px] font-medium text-sub outline-none hover:text-ink">
        <BackIcon size={14} /> Back
      </a>
      <h1 className="text-[24px] font-semibold tracking-[-0.02em] text-ink">Create a new team</h1>
      <p className="mt-6 text-[15px] text-sub">Create a new team to manage separate cycles, workflows, and notifications</p>
      <div className="mt-28">
        <FormSection>
          <FormRow label="Icon & Name">
            <div className="flex items-center gap-8">
              <span className="grid size-[32px] place-items-center rounded-[6px] bg-field text-faint"><ProfileIcon size={16} /></span>
              <input type="text" placeholder="e.g. Engineering" className="h-[32px] w-[240px] rounded-[6px] border border-line-strong bg-content px-10 text-[13px] text-ink outline-none placeholder:text-faint focus:border-accent focus:ring-2 focus:ring-accent-soft" />
            </div>
          </FormRow>
          <FormRow label="Identifier" description="Used to identify issues from this team (e.g. ENG-123)">
            <input type="text" placeholder="e.g. ENG" className="h-[32px] w-[120px] rounded-[6px] border border-line-strong bg-content px-10 text-right font-berkeley text-[13px] text-ink outline-none placeholder:text-faint focus:border-accent focus:ring-2 focus:ring-accent-soft" />
          </FormRow>
          <FormRow label="Parent team" hint="Available on Business" />
        </FormSection>
        <FormSection title="Team access" description="All members in your workspace will be able to see and join this team unless you make it private.">
          <FormRow label="Change team access" hint="Available on Business" />
        </FormSection>
        <FormSection title="Timezone" description="Used for team schedules, dates, and cycle start times">
          <FormRow label="Timezone">
            <select defaultValue="cet" className="h-[32px] w-[320px] appearance-none rounded-[6px] border border-line-strong bg-content bg-[length:12px] bg-[right_10px_center] bg-no-repeat px-10 text-[13px] text-ink outline-none focus:border-accent focus:ring-2 focus:ring-accent-soft" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23a1a1aa' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")" }}>
              <option value="cet">GMT+2:00 - Central European Time - Belgrade</option>
            </select>
          </FormRow>
        </FormSection>
      </div>
    </div>
  )
}
