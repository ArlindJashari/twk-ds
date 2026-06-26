import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import Search from '../pages/Search.jsx'

const searchField = () => screen.getByRole('searchbox', { name: 'Search by describing your project…' })

describe('Search page', () => {
  it('shows search empty state copy', () => {
    const { container } = render(<Search path="/search" />)
    expect(searchField()).toBeInTheDocument()
    expect(container.querySelector('header svg')).toBeInTheDocument()
    expect(screen.getByText('Find issues, projects, and documents')).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'No search results illustration' })).toBeInTheDocument()
  })

  it('filters navigation routes', () => {
    render(<Search path="/search" />)
    fireEvent.change(searchField(), { target: { value: 'Studies' } })
    expect(screen.getByRole('link', { name: /Studies/ })).toBeInTheDocument()
  })

  it('shows no results state', () => {
    render(<Search path="/search" />)
    fireEvent.change(searchField(), { target: { value: 'not-a-real-route' } })
    expect(screen.getByText('No matching results')).toBeInTheDocument()
  })

  it('renders filter tabs', () => {
    render(<Search path="/search/issues" />)
    expect(screen.getByRole('link', { name: 'All' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Issues' })).toHaveAttribute('aria-current', 'page')
  })
})
