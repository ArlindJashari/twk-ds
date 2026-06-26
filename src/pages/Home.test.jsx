import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from './Home.jsx'

describe('Home dashboard', () => {
  it('renders quick links to product modules', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { name: 'Quick links' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /^Studies$/i })).toHaveAttribute('href', '#/usability/studies')
    expect(screen.getByRole('link', { name: /^Firebase$/i })).toHaveAttribute('href', '#/directory/firebase')
  })

  it('renders dashboard overview stats', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { name: 'Overview' })).toBeInTheDocument()
    expect(screen.getByText('Active studies')).toBeInTheDocument()
    expect(screen.getAllByText('User stories').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Features').length).toBeGreaterThan(0)
    expect(screen.getAllByText('8').length).toBeGreaterThan(0)
  })

  it('renders recent studies and stories', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { name: 'Recent studies' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Recent user stories' })).toBeInTheDocument()
    expect(screen.getByText('Checkout flow v2')).toBeInTheDocument()
    expect(screen.getByText(/save payment method/i)).toBeInTheDocument()
  })

  it('renders workspace modules and activity', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { name: 'Workspaces' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Recent activity' })).toBeInTheDocument()
    expect(screen.getByText('Usability')).toBeInTheDocument()
    expect(screen.getByText(/Session completed for Checkout flow v2/i)).toBeInTheDocument()
  })

  it('contains no forbidden legacy tracker concepts', () => {
    const { container } = render(<Home />)
    expect(container.textContent).not.toMatch(/Inbox|Issues|Reviews|Projects|Cycles|Initiatives/)
  })
})
