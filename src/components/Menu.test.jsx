import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Menu, { MenuItem } from './Menu.jsx'

function Fixture() {
  return (
    <div>
      <button data-testid="outside">outside</button>
      <Menu label="Test menu" trigger={<button>Open</button>}>
        <MenuItem onClick={() => {}}>One</MenuItem>
        <MenuItem onClick={() => {}}>Two</MenuItem>
      </Menu>
    </div>
  )
}

describe('Menu', () => {
  it('toggles open with the trigger and sets aria-expanded', () => {
    render(<Fixture />)
    const trigger = screen.getByRole('button', { name: 'Open' })
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    fireEvent.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('menu', { name: 'Test menu' })).toBeInTheDocument()
  })

  it('closes on Escape', () => {
    render(<Fixture />)
    fireEvent.click(screen.getByRole('button', { name: 'Open' }))
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(screen.queryByRole('menu')).toBeNull()
  })

  it('closes on outside click', () => {
    render(<Fixture />)
    fireEvent.click(screen.getByRole('button', { name: 'Open' }))
    fireEvent.mouseDown(screen.getByTestId('outside'))
    expect(screen.queryByRole('menu')).toBeNull()
  })

  it('supports arrow-key navigation', () => {
    render(<Fixture />)
    fireEvent.click(screen.getByRole('button', { name: 'Open' }))
    const one = screen.getByRole('menuitem', { name: 'One' })
    const two = screen.getByRole('menuitem', { name: 'Two' })
    one.focus()
    fireEvent.keyDown(one, { key: 'ArrowDown' })
    expect(two).toHaveFocus()
  })
})
