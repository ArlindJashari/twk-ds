import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './theme.css'
import './v2/tokens.css'
import App from './App.jsx'

// Path URLs like /designsystem → hash route
if (typeof window !== 'undefined') {
  const { pathname, hash } = window.location
  const designSystemPath = pathname.match(/\/(designsystem|design-system)$/)
  if (designSystemPath && !hash) {
    window.location.replace(`${pathname.replace(/\/(designsystem|design-system)$/, '') || ''}#/designsystem`)
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
