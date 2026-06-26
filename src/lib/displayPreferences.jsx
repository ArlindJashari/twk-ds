import { createContext, useContext, useMemo, useState } from 'react'

const DisplayPreferencesContext = createContext(null)

export function DisplayPreferencesProvider({ children, defaultTheme = 'light', defaultDirection = 'ltr' }) {
  const [theme, setTheme] = useState(defaultTheme)
  const [direction, setDirection] = useState(defaultDirection)

  const value = useMemo(
    () => ({ theme, direction, setTheme, setDirection }),
    [theme, direction],
  )

  return (
    <DisplayPreferencesContext.Provider value={value}>
      {children}
    </DisplayPreferencesContext.Provider>
  )
}

export function useDisplayPreferences() {
  const ctx = useContext(DisplayPreferencesContext)
  if (!ctx) {
    throw new Error('useDisplayPreferences requires DisplayPreferencesProvider')
  }
  return ctx
}
