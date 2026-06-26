import { useEffect } from 'react'
import { useHashRoute } from '../lib/hooks.js'

export default function DesignSystemRedirect() {
  const { navigate } = useHashRoute()

  useEffect(() => {
    navigate('/designsystem')
  }, [navigate])

  return null
}
