import { useCallback, useEffect, useRef, useState } from 'react'

export function useHashRoute() {
  const read = () => {
    const hash = typeof window !== 'undefined' ? window.location.hash : ''
    const raw = hash.replace(/^#/, '') || '/'
    // Keep route when using in-page anchors: #/designsystem#colors → /designsystem
    const pathOnly = raw.split('#')[0]
    return pathOnly.startsWith('/') ? pathOnly : `/${pathOnly}`
  }
  const [path, setPath] = useState(read)

  useEffect(() => {
    const onChange = () => setPath(read())
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])

  const navigate = useCallback((to) => {
    window.location.hash = to
  }, [])

  return { path, navigate }
}

export function useDismiss(active, onClose) {
  const ref = useRef(null)

  useEffect(() => {
    if (!active) return
    const onKey = (event) => {
      if (event.key === 'Escape') onClose()
    }
    const onPointer = (event) => {
      if (ref.current && !ref.current.contains(event.target)) onClose()
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onPointer)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onPointer)
    }
  }, [active, onClose])

  return ref
}

export function useFocusTrap(active, ref, initialFocusRef) {
  useEffect(() => {
    if (!active || !ref.current) return

    const previouslyFocused = document.activeElement
    const focusableSelector = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'textarea:not([disabled])',
      'select:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
    ].join(',')

    const target = initialFocusRef?.current ?? ref.current.querySelector(focusableSelector)
    target?.focus()

    const onKeyDown = (event) => {
      if (event.key !== 'Tab') return
      const focusable = [...ref.current.querySelectorAll(focusableSelector)]
        .filter((element) => !element.hasAttribute('hidden'))
      if (focusable.length === 0) {
        event.preventDefault()
        return
      }

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus()
    }
  }, [active, initialFocusRef, ref])
}

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false,
  )

  useEffect(() => {
    const media = window.matchMedia(query)
    const onChange = () => setMatches(media.matches)
    onChange()
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [query])

  return matches
}
