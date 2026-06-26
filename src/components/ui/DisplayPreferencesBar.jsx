import { AlignLeft, Languages, Moon, Sun } from 'lucide-react'
import { cn } from '../../lib/cn.js'
import { focusRing } from './primitives.js'

function IconSegmentGroup({ label, value, options, onChange }) {
  return (
    <div className="flex items-center gap-6" role="group" aria-label={label}>
      <span className="text-[11px] font-medium uppercase tracking-wide text-faint">{label}</span>
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
                'inline-flex h-[28px] items-center gap-6 rounded-full px-10 text-[12px] font-medium transition-colors',
                focusRing,
                active
                  ? 'bg-tab-active text-ink shadow-stroke-faint'
                  : 'text-sub hover:bg-hover hover:text-ink',
              )}
            >
              <Icon size={14} strokeWidth={1.5} aria-hidden />
              <span>{option.shortLabel}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default function DisplayPreferencesBar({
  theme,
  direction,
  onThemeChange,
  onDirectionChange,
  labels,
  className,
}) {
  const l = labels ?? {
    theme: 'Theme',
    direction: 'Direction',
    light: 'Light',
    dark: 'Dark',
    ltr: 'LTR',
    rtlArabic: 'RTL + Arabic',
  }

  return (
    <div className={cn('ms-auto flex flex-wrap items-center gap-12', className)}>
      <IconSegmentGroup
        label={l.theme}
        value={theme}
        onChange={onThemeChange}
        options={[
          { value: 'light', label: l.light, shortLabel: l.light, icon: Sun },
          { value: 'dark', label: l.dark, shortLabel: l.dark, icon: Moon },
        ]}
      />
      <IconSegmentGroup
        label={l.direction}
        value={direction}
        onChange={onDirectionChange}
        options={[
          { value: 'ltr', label: l.ltr, shortLabel: l.ltr, icon: AlignLeft },
          { value: 'rtl', label: l.rtlArabic, shortLabel: l.rtlArabic, icon: Languages },
        ]}
      />
    </div>
  )
}
