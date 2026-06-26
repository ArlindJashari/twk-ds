import { useState } from 'react'
import DesignSystemLayout from '../components/DesignSystemLayout.jsx'
import {
  CaretDown, FilterIcon, HomeIcon, PlusIcon, SearchIcon, SlidersIcon, SparkleIcon, StudiesIcon,
} from '../components/icons.jsx'
import {
  Alert, Avatar, Badge, Button, Card, CardBody, CardDescription, CardFooter,
  CardMedia, CardTitle, Checkbox, IssueCheckbox, ColorSwatch, Divider, DropdownMenu, EmptyState, Field,
  FieldError, FieldGroup, FieldHint, GroupHeader, IconButton, Input, IssueRow, Kbd, KbdCombo,
  Label, Link, MenuItem, MenuLabel, MenuSeparator, Modal, ModalFooter, NavItem, Panel,
  PanelBody, PanelHeader, PriorityIcon, Progress, Radio, SearchTrigger, Select, SelectionBar, ShowcaseRow,
  ShowcaseSection, ShowcaseStack, Skeleton, SkeletonGroup, StatusIcon, Switch, Tab, TabList,
  TabPanel, Table, TableBody, TableCell, TableHead, TableHeader, TableRow, Tag, Text, Textarea,
  Toast, ToastProvider, TokenGrid, Toolbar, useToast,
} from '../components/ui/index.js'

const NAV = [
  { id: 'colors', label: 'Colors' },
  { id: 'typography', label: 'Typography' },
  { id: 'spacing', label: 'Spacing' },
  { id: 'buttons', label: 'Buttons' },
  { id: 'icon-buttons', label: 'Icon buttons' },
  { id: 'forms', label: 'Forms' },
  { id: 'selection', label: 'Selection' },
  { id: 'badges', label: 'Badges & tags' },
  { id: 'avatars', label: 'Avatars' },
  { id: 'cards', label: 'Cards' },
  { id: 'tables', label: 'Tables' },
  { id: 'list-rows', label: 'List & issues' },
  { id: 'priority', label: 'Priority & status' },
  { id: 'tabs', label: 'Tabs & toolbars' },
  { id: 'search', label: 'Search' },
  { id: 'nav', label: 'Navigation' },
  { id: 'menus', label: 'Menus' },
  { id: 'modals', label: 'Modals' },
  { id: 'toasts', label: 'Toasts' },
  { id: 'panels', label: 'Panels' },
  { id: 'alerts', label: 'Alerts' },
  { id: 'empty', label: 'Empty states' },
  { id: 'loading', label: 'Loading' },
  { id: 'progress', label: 'Progress' },
  { id: 'links', label: 'Links & kbd' },
  { id: 'dividers', label: 'Dividers' },
]

function StudyPlaceholder() {
  return (
    <div className="flex h-full items-center justify-center p-16">
      <div className="w-full max-w-[120px] rounded-lg border border-line-subtle bg-surface p-8 shadow-panel">
        <div className="mb-6 h-[6px] w-2/3 rounded-xs bg-accent/30" />
        <div className="space-y-4">
          <div className="h-[4px] rounded-xs bg-line" />
          <div className="h-[4px] w-4/5 rounded-xs bg-line" />
        </div>
      </div>
    </div>
  )
}

export default function DesignSystem() {
  const [tab, setTab] = useState('active')
  const [sw, setSw] = useState(true)
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <ToastProvider>
    <DesignSystemContent
      tab={tab} setTab={setTab} sw={sw} setSw={setSw}
      modalOpen={modalOpen} setModalOpen={setModalOpen}
    />
    </ToastProvider>
  )
}

function ToastDemo() {
  const { toast } = useToast()
  return (
    <ShowcaseRow>
      <Button variant="secondary" onClick={() => toast({ variant: 'info', title: 'Saved', message: 'Study updated.' })}>Info</Button>
      <Button variant="secondary" onClick={() => toast({ variant: 'success', title: 'Done', message: 'Session complete.' })}>Success</Button>
      <Button variant="secondary" onClick={() => toast({ variant: 'warning', message: 'Low sample size.' })}>Warning</Button>
      <Button variant="secondary" onClick={() => toast({ variant: 'danger', title: 'Error', message: 'Sync failed.' })}>Danger</Button>
    </ShowcaseRow>
  )
}

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function DesignSystemContent({ tab, setTab, sw, setSw, modalOpen, setModalOpen }) {
  return (
    <DesignSystemLayout>
      <div className="flex h-full min-h-0">
        <aside className="hidden w-[200px] shrink-0 border-r border-line bg-well px-12 py-16 lg:block">
          <p className="mb-12 px-8 text-[11px] font-medium uppercase tracking-wide text-faint">
            Components
          </p>
          <nav className="flex flex-col gap-2">
            {NAV.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="rounded-lg px-8 py-6 text-left text-[12px] font-medium text-sub transition-colors hover:bg-hover hover:text-ink"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </aside>

        <div className="min-w-0 flex-1 overflow-y-auto px-24 py-28">
          <header className="mb-32">
            <Text variant="title" as="h1" className="text-[20px]">Design system</Text>
            <Text variant="sub" className="mt-6 max-w-[560px]">
              Linear-inspired tokens and components for TawakkalnaOS. Use primitives from{' '}
              <code className="rounded-xs bg-well px-4 py-2 font-berkeley text-[12px]">src/components/ui</code>
              {' '}and follow <code className="rounded-xs bg-well px-4 py-2 font-berkeley text-[12px]">DESIGN_SYSTEM.md</code>.
            </Text>
          </header>

          <div className="flex flex-col gap-32">
            <ShowcaseSection id="colors" title="Colors" description="Semantic tokens from theme.css — never hardcode hex in components.">
              <ShowcaseRow label="Surfaces">
                <TokenGrid cols={6}>
                  <ColorSwatch name="shell" className="bg-shell" />
                  <ColorSwatch name="sidebar" className="bg-sidebar" />
                  <ColorSwatch name="content" className="bg-content" />
                  <ColorSwatch name="well" className="bg-well" />
                  <ColorSwatch name="surface" className="bg-surface" />
                  <ColorSwatch name="hover" className="bg-hover" />
                </TokenGrid>
              </ShowcaseRow>
              <ShowcaseRow label="Text">
                <TokenGrid cols={4}>
                  <ColorSwatch name="ink" className="bg-ink" />
                  <ColorSwatch name="body" className="bg-body" />
                  <ColorSwatch name="sub" className="bg-sub" />
                  <ColorSwatch name="faint" className="bg-faint" />
                </TokenGrid>
              </ShowcaseRow>
              <ShowcaseRow label="Accent & semantic">
                <TokenGrid cols={6}>
                  <ColorSwatch name="accent" className="bg-accent" />
                  <ColorSwatch name="success" className="bg-success" />
                  <ColorSwatch name="warning" className="bg-warning" />
                  <ColorSwatch name="danger" className="bg-danger" />
                  <ColorSwatch name="team" className="bg-team" />
                  <ColorSwatch name="workspace" className="bg-workspace" />
                </TokenGrid>
              </ShowcaseRow>
              <ShowcaseRow label="Priority">
                <TokenGrid cols={5}>
                  <ColorSwatch name="urgent" className="bg-priority-urgent" />
                  <ColorSwatch name="high" className="bg-priority-high" />
                  <ColorSwatch name="medium" className="bg-priority-medium" />
                  <ColorSwatch name="low" className="bg-priority-low" />
                  <ColorSwatch name="none" className="bg-priority-none" />
                </TokenGrid>
              </ShowcaseRow>
            </ShowcaseSection>

            <ShowcaseSection id="typography" title="Typography" description="Inter Variable. Weights: 400 normal, 450 book, 500 medium, 510 ui, 590 semibold.">
              <ShowcaseStack label="Scale">
                <Text variant="page">Page header — 13px medium body</Text>
                <Text variant="title">Card title — 15px ui</Text>
                <Text variant="section">Section — 13px ui</Text>
                <Text variant="body">Body — 13px regular</Text>
                <Text variant="sub">Secondary — 13px sub color</Text>
                <Text variant="caption">Caption — 12px faint</Text>
                <Text variant="label">Label — 11px uppercase</Text>
                <Text variant="mono">SUR-42 · Berkeley Mono</Text>
              </ShowcaseStack>
            </ShowcaseSection>

            <ShowcaseSection id="spacing" title="Spacing & radii" description="1px spacing unit. px-8 = 8px. Prefer 4/6/8/12/16/24/28 grid.">
              <ShowcaseRow label="Border radius">
                <div className="flex flex-wrap gap-12">
                  {[
                    ['xs', 'rounded-xs'],
                    ['sm', 'rounded-sm'],
                    ['md', 'rounded-md'],
                    ['lg', 'rounded-lg'],
                    ['xl', 'rounded-xl'],
                    ['panel', 'rounded-panel'],
                    ['full', 'rounded-full'],
                  ].map(([name, cls]) => (
                    <div key={name} className="flex flex-col items-center gap-6">
                      <div className={['size-[40px] border border-line-subtle bg-surface', cls].join(' ')} />
                      <span className="text-[11px] text-faint">{name}</span>
                    </div>
                  ))}
                </div>
              </ShowcaseRow>
              <ShowcaseRow label="Shadows">
                <div className="flex flex-wrap gap-16">
                  <div className="h-[48px] w-[120px] rounded-lg bg-surface shadow-stroke" />
                  <div className="h-[48px] w-[120px] rounded-lg bg-surface shadow-panel" />
                  <div className="h-[48px] w-[120px] rounded-lg bg-surface shadow-pop" />
                  <div className="h-[48px] w-[120px] rounded-lg bg-surface shadow-modal" />
                </div>
              </ShowcaseRow>
            </ShowcaseSection>

            <ShowcaseSection id="buttons" title="Buttons">
              <ShowcaseRow label="Variants">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="ink">Ink</Button>
                <Button variant="soft">Soft</Button>
                <Button variant="pill">Pill</Button>
                <Button variant="danger">Danger</Button>
              </ShowcaseRow>
              <ShowcaseRow label="Sizes">
                <Button size="xs">XS</Button>
                <Button size="sm">SM</Button>
                <Button size="md">MD</Button>
                <Button size="lg">LG</Button>
              </ShowcaseRow>
              <ShowcaseRow label="With icon">
                <Button variant="ink"><PlusIcon size={12} strokeWidth={2} />Create</Button>
                <Button variant="secondary"><SparkleIcon size={12} />Generate</Button>
              </ShowcaseRow>
              <ShowcaseRow label="States">
                <Button disabled>Disabled</Button>
              </ShowcaseRow>
            </ShowcaseSection>

            <ShowcaseSection id="icon-buttons" title="Icon buttons" description="28px circle — matches toolbar controls.">
              <ShowcaseRow label="Variants">
                <IconButton label="Filter"><FilterIcon size={14} strokeWidth={1.5} /></IconButton>
                <IconButton variant="filled" label="Display"><SlidersIcon size={14} strokeWidth={1.5} /></IconButton>
                <IconButton variant="accent" label="Create"><PlusIcon size={14} strokeWidth={1.5} /></IconButton>
              </ShowcaseRow>
              <ShowcaseRow label="Sizes">
                <IconButton size="sm" label="Small"><SearchIcon size={12} /></IconButton>
                <IconButton size="md" label="Medium"><SearchIcon size={14} /></IconButton>
                <IconButton size="lg" label="Large"><SearchIcon size={16} /></IconButton>
              </ShowcaseRow>
            </ShowcaseSection>

            <ShowcaseSection id="forms" title="Forms">
              <div className="max-w-[400px]">
                <FieldGroup>
                  <Field>
                    <Label htmlFor="ds-name" required>Name</Label>
                    <Input id="ds-name" placeholder="Study name" />
                    <FieldHint>Visible to your team.</FieldHint>
                  </Field>
                  <Field>
                    <Label htmlFor="ds-desc">Description</Label>
                    <Textarea id="ds-desc" placeholder="What are you testing?" />
                  </Field>
                  <Field>
                    <Label htmlFor="ds-type">Type</Label>
                    <Select id="ds-type" defaultValue="usability">
                      <option value="usability">Usability study</option>
                      <option value="story">User story</option>
                      <option value="feature">Feature spec</option>
                    </Select>
                  </Field>
                  <Field>
                    <Label htmlFor="ds-err">With error</Label>
                    <Input id="ds-err" aria-invalid defaultValue="bad@" />
                    <FieldError>Enter a valid email.</FieldError>
                  </Field>
                </FieldGroup>
              </div>
            </ShowcaseSection>

            <ShowcaseSection id="selection" title="Selection controls">
              <ShowcaseRow label="Issue checkbox">
                <div className="group flex h-[44px] w-[200px] items-center rounded-lg hover:bg-hover">
                  <IssueCheckbox checked={false} aria-label="Unchecked" />
                  <span className="text-[13px] text-sub">Hover row</span>
                </div>
                <div className="group flex h-[44px] w-[200px] items-center rounded-lg bg-row-selected">
                  <IssueCheckbox checked aria-label="Checked" />
                  <span className="text-[13px] text-ink">Selected</span>
                </div>
              </ShowcaseRow>
              <div className="relative flex h-[80px] items-end justify-center rounded-lg border border-line-subtle bg-well pb-16">
                <SelectionBar count={1} onClear={() => {}} onMoveToBacklog={() => {}} onActions={() => {}} className="static bottom-auto" />
              </div>
              <ShowcaseRow label="Checkbox">
                <label className="flex items-center gap-8 text-[13px]">
                  <Checkbox defaultChecked /> Checked
                </label>
                <label className="flex items-center gap-8 text-[13px]">
                  <Checkbox /> Unchecked
                </label>
                <label className="flex items-center gap-8 text-[13px] text-faint">
                  <Checkbox disabled /> Disabled
                </label>
              </ShowcaseRow>
              <ShowcaseRow label="Radio">
                <label className="flex items-center gap-8 text-[13px]">
                  <Radio name="ds-radio" defaultChecked /> Option A
                </label>
                <label className="flex items-center gap-8 text-[13px]">
                  <Radio name="ds-radio" /> Option B
                </label>
              </ShowcaseRow>
              <ShowcaseRow label="Switch">
                <Switch checked={sw} onClick={() => setSw((v) => !v)} aria-label="Toggle" />
                <Switch checked={false} aria-label="Off" />
              </ShowcaseRow>
            </ShowcaseSection>

            <ShowcaseSection id="badges" title="Badges & tags">
              <ShowcaseRow label="Badges">
                <Badge>Default</Badge>
                <Badge variant="accent">Accent</Badge>
                <Badge variant="success">Done</Badge>
                <Badge variant="warning">In review</Badge>
                <Badge variant="danger">Blocked</Badge>
              </ShowcaseRow>
              <ShowcaseRow label="Priority">
                <Badge variant="urgent">Urgent</Badge>
                <Badge variant="high">High</Badge>
                <Badge variant="medium">Medium</Badge>
                <Badge variant="low">Low</Badge>
                <Badge variant="none">No priority</Badge>
              </ShowcaseRow>
              <ShowcaseRow label="Tags">
                <Tag icon={StudiesIcon}>Studies</Tag>
                <Tag variant="active">Active</Tag>
                <Tag variant="accent">AI</Tag>
                <Tag variant="outline">Outline</Tag>
              </ShowcaseRow>
            </ShowcaseSection>

            <ShowcaseSection id="avatars" title="Avatars">
              <ShowcaseRow label="Sizes">
                <Avatar size="xs" initials="AJ" />
                <Avatar size="sm" initials="AJ" />
                <Avatar size="md" initials="AJ" />
                <Avatar size="lg" initials="AD" />
              </ShowcaseRow>
            </ShowcaseSection>

            <ShowcaseSection id="cards" title="Cards">
              <div className="grid gap-12 lg:grid-cols-2">
                <Card variant="elevated">
                  <CardMedia className="h-[120px]"><StudyPlaceholder /></CardMedia>
                  <CardBody>
                    <CardTitle>Usability study</CardTitle>
                    <CardDescription>Run AI + human tests on prototypes.</CardDescription>
                    <CardFooter>
                      <Button variant="ink" size="lg"><PlusIcon size={12} />Create</Button>
                      <Button variant="secondary" size="lg">View all</Button>
                    </CardFooter>
                  </CardBody>
                </Card>
                <Card variant="well">
                  <CardBody>
                    <CardTitle>Flat card</CardTitle>
                    <CardDescription>Well background variant for nested panels.</CardDescription>
                  </CardBody>
                </Card>
              </div>
            </ShowcaseSection>

            <ShowcaseSection id="tables" title="Tables" description="For directory, users, studies lists.">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Owner</TableHead>
                    <TableHead className="text-right">Updated</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    ['STY-12', 'Checkout flow v2', 'success', 'AJ', 'Mar 4'],
                    ['STY-11', 'Onboarding prototype', 'warning', 'MK', 'Mar 2'],
                    ['STY-10', 'Search redesign', 'accent', 'AD', 'Feb 28'],
                  ].map(([id, name, status, owner, date]) => (
                    <TableRow key={id} interactive>
                      <TableCell className="font-berkeley text-faint">{id}</TableCell>
                      <TableCell className="font-medium text-ink">{name}</TableCell>
                      <TableCell><Badge variant={status} size="sm">{status}</Badge></TableCell>
                      <TableCell><Avatar size="xs" initials={owner} /></TableCell>
                      <TableCell className="text-right text-faint tabular-nums">{date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ShowcaseSection>

            <ShowcaseSection id="list-rows" title="List & issue rows" description="44px rows — exact Linear issues list pattern.">
              <div className="max-w-[640px] overflow-hidden rounded-lg border border-line-subtle bg-content pb-8">
                <GroupHeader
                  label="Todo"
                  count={3}
                  leading={(
                    <>
                      <CaretDown size={10} className="shrink-0 text-faint" />
                      <StatusIcon status="todo" />
                    </>
                  )}
                  onAdd={() => {}}
                />
                <div className="flex flex-col">
                  <IssueRow
                    id="SUR-4"
                    title="Import your data"
                    date="Feb 3"
                    href="#"
                    priority={<PriorityIcon level="none" />}
                    status={<StatusIcon status="todo" />}
                    assignee={<Avatar size="xs" initials="AJ" />}
                    checked
                    selected
                  />
                  <IssueRow
                    id="SUR-3"
                    title="Connect your tools"
                    date="Feb 3"
                    href="#"
                    priority={<PriorityIcon level="medium" />}
                    status={<StatusIcon status="progress" />}
                    assignee={<Avatar size="xs" initials="MK" />}
                  />
                  <IssueRow
                    id="SUR-1"
                    title="Get familiar with Linear"
                    date="Feb 3"
                    href="#"
                    priority={<PriorityIcon level="high" />}
                    status={<StatusIcon status="done" />}
                    assignee={<Avatar size="xs" initials="AD" />}
                  />
                </div>
              </div>
            </ShowcaseSection>

            <ShowcaseSection id="priority" title="Priority & status icons">
              <ShowcaseRow label="Priority">
                {['urgent', 'high', 'medium', 'low', 'none'].map((level) => (
                  <span key={level} className="flex items-center gap-6 text-[12px] text-sub">
                    <PriorityIcon level={level} />
                    {level}
                  </span>
                ))}
              </ShowcaseRow>
              <ShowcaseRow label="Status">
                {['todo', 'progress', 'done', 'cancelled'].map((status) => (
                  <span key={status} className="flex items-center gap-6 text-[12px] text-sub">
                    <StatusIcon status={status} />
                    {status}
                  </span>
                ))}
              </ShowcaseRow>
              <ShowcaseRow label="Status badges">
                <Badge variant="todo" dot>Todo</Badge>
                <Badge variant="progress" dot>In progress</Badge>
                <Badge variant="done" dot>Done</Badge>
                <Badge variant="cancelled" dot>Cancelled</Badge>
              </ShowcaseRow>
            </ShowcaseSection>

            <ShowcaseSection id="tabs" title="Tabs & toolbars">
              <TabList>
                <Tab active={tab === 'all'} onClick={() => setTab('all')}>All issues</Tab>
                <Tab active={tab === 'active'} onClick={() => setTab('active')}>Active</Tab>
                <Tab active={tab === 'backlog'} onClick={() => setTab('backlog')}>Backlog</Tab>
                <Tab muted>Archived</Tab>
              </TabList>
              <TabPanel>
                <p className="text-[13px] text-sub">Active tab: <strong className="text-ink">{tab}</strong></p>
              </TabPanel>
              <div className="mt-16 overflow-hidden rounded-lg border border-line-subtle">
                <Toolbar
                  left={(
                    <>
                      <Tab active>Assigned</Tab>
                      <Tab>Created</Tab>
                      <Tab>Activity</Tab>
                    </>
                  )}
                  right={(
                    <>
                      <IconButton label="Filter"><FilterIcon size={14} /></IconButton>
                      <IconButton variant="filled" label="Display"><SlidersIcon size={14} /></IconButton>
                    </>
                  )}
                />
                <div className="bg-content p-16 text-[13px] text-faint">Toolbar content area</div>
              </div>
            </ShowcaseSection>

            <ShowcaseSection id="search" title="Search">
              <ShowcaseStack>
                <SearchTrigger placeholder="Search studies, sessions, themes…" onClick={() => { window.location.hash = '#/search' }} />
              </ShowcaseStack>
            </ShowcaseSection>

            <ShowcaseSection id="nav" title="Navigation items">
              <div className="w-[220px] rounded-lg border border-line-subtle bg-sidebar p-8">
                <NavItem href="#/" active icon={HomeIcon}>Home</NavItem>
                <NavItem href="#/usability/studies" icon={StudiesIcon}>Studies</NavItem>
                <NavItem href="#/settings">Settings</NavItem>
              </div>
            </ShowcaseSection>

            <ShowcaseSection id="menus" title="Menus">
              <ShowcaseRow>
                <DropdownMenu
                  label="Actions"
                  trigger={<Button variant="secondary">Open menu</Button>}
                >
                  <MenuItem onClick={() => {}}>Edit study</MenuItem>
                  <MenuItem onClick={() => {}} keys={['⌘', 'D']}>Duplicate</MenuItem>
                  <MenuSeparator />
                  <MenuItem onClick={() => {}}>Archive</MenuItem>
                </DropdownMenu>
                <DropdownMenu
                  variant="workspace"
                  label="Workspace"
                  trigger={<Button variant="ghost">Workspace menu</Button>}
                >
                  <MenuItem variant="workspace" href="#/">Home</MenuItem>
                  <MenuItem variant="workspace" keys={['G', 'S']}>Settings</MenuItem>
                  <MenuSeparator variant="workspace" />
                  <MenuLabel>Teams</MenuLabel>
                  <MenuItem variant="workspace">Surfarch</MenuItem>
                </DropdownMenu>
              </ShowcaseRow>
            </ShowcaseSection>

            <ShowcaseSection id="modals" title="Modals">
              <ShowcaseRow>
                <Button variant="secondary" onClick={() => setModalOpen(true)}>Open modal</Button>
              </ShowcaseRow>
              <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="Create study">
                <FieldGroup>
                  <Field>
                    <Label htmlFor="modal-name">Name</Label>
                    <Input id="modal-name" placeholder="Checkout flow v2" />
                  </Field>
                </FieldGroup>
                <ModalFooter>
                  <Button variant="ghost" onClick={() => setModalOpen(false)}>Cancel</Button>
                  <Button onClick={() => setModalOpen(false)}>Create</Button>
                </ModalFooter>
              </Modal>
            </ShowcaseSection>

            <ShowcaseSection id="toasts" title="Toasts">
              <ToastDemo />
              <div className="mt-12 flex flex-wrap gap-8">
                <Toast variant="info" title="Tip">Keyboard shortcuts save time.</Toast>
                <Toast variant="success" title="Saved">Study updated.</Toast>
              </div>
            </ShowcaseSection>

            <ShowcaseSection id="panels" title="Panels">
              <Panel className="max-w-[400px]">
                <PanelHeader title="Studies" />
                <PanelBody className="p-16 text-[13px] text-sub">Panel content — matches main content shell.</PanelBody>
              </Panel>
            </ShowcaseSection>

            <ShowcaseSection id="alerts" title="Alerts">
              <ShowcaseStack>
                <Alert variant="info" title="Tip">Use keyboard shortcuts to navigate faster.</Alert>
                <Alert variant="success" title="Study complete">12 participants finished the session.</Alert>
                <Alert variant="warning" title="Low sample">Fewer than 5 responses — results may vary.</Alert>
                <Alert variant="danger" title="Sync failed">Could not reach Firebase. Retry in settings.</Alert>
              </ShowcaseStack>
            </ShowcaseSection>

            <ShowcaseSection id="empty" title="Empty states">
              <div className="rounded-lg border border-line-subtle bg-content">
                <EmptyState
                  title="No studies yet"
                  description="Create your first usability study or generate an example to explore the product."
                  actionLabel="Create study"
                  actionHref="#/usability/studies"
                />
              </div>
            </ShowcaseSection>

            <ShowcaseSection id="loading" title="Loading">
              <SkeletonGroup>
                <Skeleton className="w-[200px]" />
                <Skeleton className="w-[320px]" />
                <div className="flex items-center gap-8">
                  <Skeleton variant="circle" className="size-[28px]" />
                  <Skeleton className="w-[140px]" />
                </div>
                <Skeleton variant="rect" className="h-[80px] w-full" />
              </SkeletonGroup>
            </ShowcaseSection>

            <ShowcaseSection id="progress" title="Progress">
              <div className="max-w-[320px] space-y-12">
                <Progress value={25} />
                <Progress value={60} />
                <Progress value={100} />
              </div>
            </ShowcaseSection>

            <ShowcaseSection id="links" title="Links & keyboard hints">
              <ShowcaseRow>
                <Link href="#/">Default link</Link>
                <Link variant="accent" href="#/">Accent</Link>
                <Link variant="subtle" href="#/">Subtle</Link>
              </ShowcaseRow>
              <ShowcaseRow label="Shortcuts">
                <KbdCombo keys={['⌘', 'K']} />
                <KbdCombo keys={['G', 'S']} />
                <Kbd>Esc</Kbd>
              </ShowcaseRow>
            </ShowcaseSection>

            <ShowcaseSection id="dividers" title="Dividers">
              <div className="max-w-[320px]">
                <p className="text-[13px] text-body">Above</p>
                <Divider />
                <p className="text-[13px] text-body">Below</p>
              </div>
            </ShowcaseSection>
          </div>
        </div>
      </div>
    </DesignSystemLayout>
  )
}
