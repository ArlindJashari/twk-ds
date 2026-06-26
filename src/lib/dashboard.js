/** Dashboard data — mirrors synth-web product entities. Wire to API later. */

export const dashboardStats = [
  {
    label: 'Active studies',
    value: 8,
    hint: '3 running sessions',
    href: '#/usability/studies',
  },
  {
    label: 'Sessions',
    value: 24,
    hint: '12 completed this week',
    href: '#/usability/studies',
  },
  {
    label: 'User stories',
    value: 47,
    hint: '6 drafts in review',
    href: '#/user-stories',
  },
  {
    label: 'Features',
    value: 31,
    hint: 'In directory',
    href: '#/directory/features',
  },
]

export const recentStudies = [
  { id: 'STY-12', title: 'Checkout flow v2', status: 'progress', priority: 'high', participants: 8, date: 'Mar 4' },
  { id: 'STY-11', title: 'Onboarding prototype', status: 'progress', priority: 'medium', participants: 5, date: 'Mar 2' },
  { id: 'STY-10', title: 'Search redesign', status: 'todo', priority: 'low', participants: 0, date: 'Feb 28' },
  { id: 'STY-09', title: 'Settings IA review', status: 'done', priority: 'none', participants: 12, date: 'Feb 24' },
]

export const recentStories = [
  { id: 'US-104', title: 'As a user I can save payment method', status: 'progress', priority: 'medium', date: 'Mar 4' },
  { id: 'US-103', title: 'As an admin I can invite teammates', status: 'todo', priority: 'none', date: 'Mar 3' },
  { id: 'US-101', title: 'As a researcher I can export session notes', status: 'done', priority: 'low', date: 'Mar 1' },
]

export const recentActivity = [
  { id: 1, text: 'Session completed for Checkout flow v2', time: '2h ago', type: 'study' },
  { id: 2, text: 'US-104 moved to In review', time: '4h ago', type: 'story' },
  { id: 3, text: 'Firebase events updated for Search', time: 'Yesterday', type: 'directory' },
  { id: 4, text: 'Persona "Power researcher" edited', time: 'Yesterday', type: 'persona' },
  { id: 5, text: 'Template "Mobile task flow" created', time: 'Feb 28', type: 'template' },
]

export const workspaceModules = [
  {
    title: 'Usability',
    tone: 'usability',
    description: 'AI + human studies on prototypes',
    href: '#/usability/studies',
    metrics: [
      { label: 'Studies', value: 8 },
      { label: 'Personas', value: 5 },
      { label: 'Sessions', value: 24 },
    ],
  },
  {
    title: 'User stories',
    tone: 'stories',
    description: 'Developer-ready stories from designs',
    href: '#/user-stories',
    metrics: [
      { label: 'Stories', value: 47 },
      { label: 'Drafts', value: 6 },
      { label: 'Shipped', value: 18 },
    ],
  },
  {
    title: 'Directory',
    tone: 'directory',
    description: 'Canonical product knowledge base',
    href: '#/directory/features',
    metrics: [
      { label: 'Features', value: 31 },
      { label: 'Firebase', value: 14 },
      { label: 'Updated', value: '3d' },
    ],
  },
]

export const quickLinks = [
  { label: 'Studies', path: '/usability/studies' },
  { label: 'Personas', path: '/usability/personas' },
  { label: 'Library', path: '/usability/library' },
  { label: 'Templates', path: '/usability/templates' },
  { label: 'User stories', path: '/user-stories' },
  { label: 'Features', path: '/directory/features' },
  { label: 'Firebase', path: '/directory/firebase' },
]
