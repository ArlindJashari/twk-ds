import { AlignLeft, Languages, Moon, Sun } from 'lucide-react'
import { cn } from '../../lib/cn.js'
import { focusRing } from './primitives.js'

function IconSegmentGroup({ label, value, options, onChange }) {
  return (
    <div className="flex items-center gap-6" role="group" aria-label={label}>
      <div className="flex items-center gap-2 rounded-full bg-well p-2">
        {options.map((option) => {
          const Icon = option.icon
          const active = value === option.value
          return (
            <button
              key={option.value}
              type="button"
              aria-pressed={active}
              aria-label={option.label}
              title={option.label}
              onClick={() => onChange(option.value)}
              className={cn(
                'grid size-[28px] place-items-center rounded-full transition-colors',
                focusRing,
                active
                  ? 'bg-tab-active text-ink shadow-stroke-faint'
                  : 'text-sub hover:bg-hover hover:text-ink',
              )}
            >
              <Icon size={14} strokeWidth={1.5} aria-hidden />
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default function DisplayPreferencesBar({ theme, direction, onThemeChange, onDirectionChange, className }) {
  return (
    <div className={cn('ms-auto flex flex-wrap items-center gap-12', className)}>
      <IconSegmentGroup
        label="Theme"
        value={theme}
        onChange={onThemeChange}
        options={[
          { value: 'light', label: 'Light theme', icon: Sun },
          { value: 'dark', label: 'Dark theme', icon: Moon },
        ]}
      />
      <IconSegmentGroup
        label="Direction"
        value={direction}
        onChange={onDirectionChange}
        options={[
          { value: 'ltr', label: 'LTR', icon: AlignLeft },
          { value: 'rtl', label: 'RTL + Arabic', icon: Languages },
        ]}
      />
    </div>
  )
}
