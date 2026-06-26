import { describe, it, expect, beforeEach } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import App from './App.jsx'

beforeEach(() => {
  window.location.hash = ''
})

describe('App shell', () => {
  it('renders dashboard by default', () => {
    render(<App />)
    expect(screen.getByText('Arlind Jashari')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: 'Dashboard' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Overview' })).toBeInTheDocument()
    expect(screen.getByText('Ask Tawakkalna')).toBeInTheDocument()
  })

  it('opens search page with keyboard shortcut', async () => {
    render(<App />)
    fireEvent.keyDown(document, { key: 'k', metaKey: true })
    expect(window.location.hash).toBe('#/search')
    expect(await screen.findByRole('searchbox', { name: 'Search by describing your project…' })).toBeInTheDocument()
  })

  it('shows placeholder for user stories', () => {
    window.location.hash = '#/user-stories'
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: 'User stories' })).toBeInTheDocument()
    expect(screen.getByText('This view is not implemented yet.')).toBeInTheDocument()
  })

  it('shows studies empty state', () => {
    window.location.hash = '#/usability/studies'
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: 'Studies' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'No studies yet' })).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Create study' }))
    expect(screen.getByRole('dialog', { name: 'New study' })).toBeInTheDocument()
  })

  it('shows create team settings', () => {
    window.location.hash = '#/settings/teams/new'
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: 'Create a new team' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Back to app' })).toBeInTheDocument()
  })
})
