import { BackIcon } from './icons.jsx'
import DisplayPreferencesBar from './ui/DisplayPreferencesBar.jsx'
import { useDisplayPreferences, useLocale } from '../lib/displayPreferences.jsx'
import { getDesignSystemCopy } from '../lib/designSystemI18n.js'
import { cn } from '../lib/cn.js'

export default function DesignSystemLayout({ children }) {
  const { theme, direction, setTheme, setDirection } = useDisplayPreferences()
  const locale = useLocale()
  const copy = getDesignSystemCopy(locale)
  const isArabic = locale === 'ar'

  return (
    <div
      data-theme={theme}
      dir={direction}
      lang={isArabic ? 'ar' : 'en'}
      className={cn(
        'flex h-dvh flex-col overflow-hidden bg-shell text-ink',
        isArabic && 'font-arabic',
      )}
    >
      <header className="flex h-[44px] shrink-0 items-center gap-12 border-b border-line bg-content px-12">
        <a
          href="#/"
          className="inline-flex h-[28px] items-center gap-6 rounded-lg px-8 text-[13px] font-medium text-sub outline-none transition-colors hover:bg-hover hover:text-ink focus-visible:ring-2 focus-visible:ring-accent"
        >
          <BackIcon size={14} strokeWidth={1.5} />
          {copy.layout.backToApp}
        </a>
        <span className="h-[16px] w-px bg-line-subtle" aria-hidden />
        <span className="text-[13px] font-medium text-body">{copy.layout.title}</span>
        <DisplayPreferencesBar
          theme={theme}
          direction={direction}
          onThemeChange={setTheme}
          onDirectionChange={setDirection}
          labels={copy.switcher}
        />
      </header>
      <div className="flex min-h-0 flex-1 overflow-hidden lg:p-8">
        <div className="flex min-h-0 flex-1 overflow-hidden rounded-panel border-[0.5px] border-line bg-content shadow-panel">
          {children}
        </div>
      </div>
    </div>
  )
}
