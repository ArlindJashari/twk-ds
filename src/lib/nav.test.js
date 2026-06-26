import { describe, it, expect } from 'vitest'
import {
  primaryNav, navGroups, midNav, bottomNav, allItems, isActive, titleForPath,
  userMenuItems,
} from './nav.js'

describe('isActive', () => {
  it('treats root as home', () => {
    expect(isActive('/', '/')).toBe(true)
    expect(isActive('/usability', '/')).toBe(false)
  })

  it('matches nested paths', () => {
    expect(isActive('/usability/studies', '/usability')).toBe(true)
    expect(isActive('/directory/features', '/directory')).toBe(true)
  })
})

describe('navigation content', () => {
  it('has home', () => {
    expect(primaryNav.map((i) => i.label)).toEqual(['Home'])
  })

  it('has usability children', () => {
    expect(navGroups[0].children.map((c) => c.label)).toEqual(['Studies', 'Personas', 'Library', 'Templates'])
  })

  it('has directory children', () => {
    expect(navGroups[1].children.map((c) => c.label)).toEqual(['Features', 'Firebase'])
  })

  it('has user stories between groups', () => {
    expect(midNav.map((i) => i.label)).toEqual(['User stories'])
  })

  it('has no bottom sidebar links', () => {
    expect(bottomNav).toEqual([])
  })

  it('contains product areas only', () => {
    const labels = allItems.map((i) => i.label)
    for (const word of ['Home', 'Usability', 'Studies', 'User stories', 'Directory', 'Users', 'Help']) {
      expect(labels).toContain(word)
    }
    expect(labels).not.toContain('Inbox')
    expect(labels).not.toContain('Reviews')
  })

  it('resolves titles by path', () => {
    expect(titleForPath('/')).toBe('Dashboard')
    expect(titleForPath('/usability/studies')).toBe('Studies')
    expect(titleForPath('/settings/teams/new')).toBe('Create a new team')
  })

  it('exposes user account menu items', () => {
    const labels = userMenuItems
      .filter((item) => item.type !== 'separator')
      .map((item) => item.label)
    expect(labels).toEqual(['Settings', 'Users', 'Help', 'Log out'])
    expect(labels).not.toContain('Invite and manage members')
    expect(labels).not.toContain('Download desktop app')
    expect(labels).not.toContain('Switch workspace')
  })
})
