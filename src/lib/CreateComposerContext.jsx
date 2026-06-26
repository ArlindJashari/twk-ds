import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { CreateComposer } from '../components/ui/IssuePatterns.jsx'
import { getCreateComposerCopy } from './createComposer.js'

const CreateComposerContext = createContext(null)

function readPageLocale() {
  if (typeof document === 'undefined') return 'en'
  const lang = document.querySelector('[lang="ar"]')?.getAttribute('lang')
  return lang === 'ar' ? 'ar' : 'en'
}

export function CreateComposerProvider({ children }) {
  const [open, setOpen] = useState(false)
  const [type, setType] = useState('issue')
  const [copyOverride, setCopyOverride] = useState(null)

  const openCreate = useCallback((createType = 'issue', override) => {
    setType(createType)
    setCopyOverride(override ?? null)
    setOpen(true)
  }, [])

  const close = useCallback(() => {
    setOpen(false)
    setCopyOverride(null)
  }, [])

  const copy = useMemo(() => {
    if (copyOverride) return copyOverride
    return getCreateComposerCopy(type, readPageLocale())
  }, [copyOverride, type, open])

  const value = useMemo(() => ({ openCreate }), [openCreate])

  return (
    <CreateComposerContext.Provider value={value}>
      {children}
      <CreateComposer open={open} onClose={close} copy={copy} />
    </CreateComposerContext.Provider>
  )
}

export function useCreateComposer() {
  const ctx = useContext(CreateComposerContext)
  if (!ctx) {
    throw new Error('useCreateComposer requires CreateComposerProvider')
  }
  return ctx
}
