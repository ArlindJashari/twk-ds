import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './theme.css'
import App from './App.jsx'

// Path URLs like /designsystem → hash route
if (typeof window !== 'undefined') {
  const { pathname, hash } = window.location
  if (pathname.endsWith('/designsystem') && !hash) {
    window.location.replace(`${pathname.replace(/\/designsystem$/, '') || ''}#/designsystem`)
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
