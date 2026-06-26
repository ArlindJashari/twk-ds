import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Sidebar from './Sidebar.jsx'

const noop = () => {}

describe('Sidebar', () => {
  it('shows user account menu and actions', () => {
    render(<Sidebar currentPath="/" onNavigate={noop} onSearch={noop} />)
    expect(screen.getByText('Arlind Jashari')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Arlind Jashari account menu' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'New issue' })).toBeInTheDocument()
  })

  it('highlights Home on root', () => {
    render(<Sidebar currentPath="/" onNavigate={noop} onSearch={noop} />)
    const home = screen.getByRole('link', { name: 'Home' })
    expect(home).toHaveAttribute('aria-current', 'page')
  })

  it('shows product nav items only', () => {
    render(<Sidebar currentPath="/" onNavigate={noop} onSearch={noop} />)
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Usability' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'User stories' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Directory' })).toBeInTheDocument()
    expect(screen.queryByRole('link', { name: 'Users' })).not.toBeInTheDocument()
    expect(screen.queryByRole('link', { name: 'Settings' })).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Open Help menu' })).toBeInTheDocument()
    expect(screen.queryByText('Inbox')).not.toBeInTheDocument()
  })

  it('fires search', () => {
    let called = false
    render(<Sidebar currentPath="/" onNavigate={noop} onSearch={() => { called = true }} />)
    fireEvent.click(screen.getByRole('button', { name: 'Search' }))
    expect(called).toBe(true)
  })
})
