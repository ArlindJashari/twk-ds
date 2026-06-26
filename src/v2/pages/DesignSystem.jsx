import { useState } from 'react'
import {
  Avatar, Badge, Button, Card, CardContent, CardDescription, CardFooter,
  CardHeader, CardTitle, IconButton, IssueCheckbox, IssueRow, GroupHeader, Link,
  PriorityIcon, StatusIcon, StatCard, ModuleCard, ActivityItem, SelectionBar, Tab,
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow, Tag, Toolbar,
  Input, Textarea, Select, Switch, Slider, Field, FieldGroup, FieldHint, FieldError,
  Label, RadioGroup, Radio, Toggle, ToggleGroup,
  Modal, AlertDialog, Sheet, Popover, Tooltip, HoverCard,
  Alert, Progress, Skeleton, SkeletonGroup, EmptyState, Separator,
  ToastProvider, useToast,
  Breadcrumb, Pagination, NavItem, Kbd, KbdCombo,
  MenuItem, MenuSeparator, MenuLabel, DropdownMenu, ContextMenu, CommandPalette,
  Accordion, Collapsible, AspectRatio,
  ChatBubble, TypingIndicator, PromptBar, AiResponseCard, ModelSelector,
  Text, ColorSwatch, TokenGrid,
} from '../components/ui/index.js'
import {
  StudiesIcon, PersonasIcon, LibraryIcon, TemplatesIcon, StoriesIcon, FeaturesIcon,
  FirebaseIcon, HomeIcon, SettingsIcon, SearchIcon, FilterIcon, PlusIcon, StarIcon,
  BellIcon, SparkleIcon, LinkIcon,
} from '../../components/icons.jsx'

const NAV = [
  ['colors', 'Colors'], ['typography', 'Typography'], ['spacing', 'Spacing & radius'],
  ['buttons', 'Buttons'], ['icon-buttons', 'Icon buttons'], ['badges', 'Badges & tags'],
  ['avatars', 'Avatars'], ['forms', 'Forms'], ['selection', 'Selection'],
  ['cards', 'Cards'], ['tables', 'Tables'], ['list-rows', 'List rows'],
  ['priority', 'Priority & status'], ['tabs', 'Tabs'], ['nav', 'Navigation'],
  ['menus', 'Menus'], ['overlays', 'Overlays'], ['feedback', 'Feedback'],
  ['loading', 'Loading'], ['progress', 'Progress'], ['disclosure', 'Disclosure'],
  ['command', 'Command'], ['stats', 'Stats'], ['chat', 'AI · Chat'], ['ai', 'AI · Patterns'],
]

function Section({ id, title, docs, children }) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-[hsl(var(--border))] py-9 first:border-t-0">
      <div className="mb-5">
        <h2 className="text-xl font-semibold tracking-tight text-[hsl(var(--foreground))]">{title}</h2>
        {docs ? <p className="mt-0.5 font-mono text-xs text-[hsl(var(--muted-foreground))]">{docs}</p> : null}
      </div>
      <div className="flex flex-wrap items-center gap-4 rounded-[var(--radius)] border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-6">
        {children}
      </div>
    </section>
  )
}

const Row = ({ children }) => <div className="flex w-full flex-wrap items-center gap-3">{children}</div>
const Col = ({ children }) => <div className="flex w-full flex-col gap-3">{children}</div>

const brand = [
  ['--brand-green', 'brand-green', '#1aaa5b'], ['--brand-green-mid', 'green-mid', '#1b7a5f'],
  ['--brand-teal', 'brand-teal', '#114b47'], ['--brand-mist', 'brand-mist', '#f0f1f2'],
]
const ramp = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950']
const semantic = [
  ['primary'], ['secondary'], ['muted'], ['accent'], ['destructive'], ['success'], ['warning'], ['info'],
]

function ToastDemo() {
  const { toast } = useToast()
  return (
    <Row>
      <Button variant="outline" onClick={() => toast({ variant: 'info', title: 'Heads up', description: 'This is an info toast.' })}>Info</Button>
      <Button variant="outline" onClick={() => toast({ variant: 'success', title: 'Saved', description: 'Study saved successfully.' })}>Success</Button>
      <Button variant="outline" onClick={() => toast({ variant: 'warning', title: 'Careful', description: 'Unsaved changes.' })}>Warning</Button>
      <Button variant="outline" onClick={() => toast({ variant: 'danger', title: 'Error', description: 'Sync failed.' })}>Error</Button>
    </Row>
  )
}

export default function DesignSystem() {
  const [checked, setChecked] = useState(true)
  const [sw, setSw] = useState(true)
  const [radio, setRadio] = useState('a')
  const [slider, setSlider] = useState(60)
  const [view, setView] = useState('list')
  const [modal, setModal] = useState(false)
  const [alert, setAlert] = useState(false)
  const [sheet, setSheet] = useState(false)
  const [cmd, setCmd] = useState(false)
  const [prompt, setPrompt] = useState('')

  return (
    <ToastProvider>
      <div className="v2-ds-scroll h-screen overflow-y-auto bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
        <header className="sticky top-0 z-20 flex h-14 items-center justify-between border-b border-[hsl(var(--border))] bg-[hsl(var(--background)/0.85)] px-6 backdrop-blur">
          <div className="flex items-center gap-2 font-bold">
            <span className="grid size-7 place-items-center rounded-[calc(var(--radius)-2px)] bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]">T</span>
            Tawakkalna — Design System
            <Badge variant="success" className="ms-1">v2</Badge>
          </div>
          <a href="#/" className="inline-flex h-8 items-center rounded-[calc(var(--radius)-2px)] border border-[hsl(var(--border))] bg-[hsl(var(--background))] px-3 text-xs font-medium text-[hsl(var(--muted-foreground))] shadow-[var(--shadow-sm)] transition-colors hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--foreground))] v2-focus-ring">
            Version 1
          </a>
        </header>

        <div className="mx-auto flex max-w-[1100px] gap-8 px-6">
          <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-[180px] shrink-0 overflow-y-auto py-9 lg:block">
            <nav className="flex flex-col gap-0.5">
              {NAV.map(([id, label]) => (
                <a key={id} href={`#/v2/designsystem#${id}`} onClick={(e) => { e.preventDefault(); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) }} className="rounded-[calc(var(--radius)-2px)] px-2.5 py-1.5 text-sm text-[hsl(var(--muted-foreground))] transition-colors hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--foreground))]">
                  {label}
                </a>
              ))}
            </nav>
          </aside>

          <main className="min-w-0 flex-1 pb-16">
            <div className="py-9">
              <p className="text-xs font-semibold uppercase tracking-wide text-[hsl(var(--primary))]">shadcn/ui · green-primary</p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight">Component library</h1>
              <p className="mt-2 max-w-[65ch] text-[hsl(var(--muted-foreground))]">
                The full component set used across the product, re-skinned to the Tawakkalna green-primary
                design system — brand green on midnight-slate neutrals, light + dark, RTL-ready.
              </p>
            </div>

            <Section id="colors" title="Colors" docs="tokens · brand + green ramp + semantic">
              <Col>
                <Text variant="label">Brand</Text>
                <TokenGrid>
                  {brand.map(([v, n, hex]) => <ColorSwatch key={n} color={`var(${v})`} name={n} value={hex} />)}
                </TokenGrid>
                <Text variant="label" className="mt-2">Green ramp</Text>
                <TokenGrid>
                  {ramp.map((s) => <ColorSwatch key={s} color={`var(--green-${s})`} name={`green-${s}`} />)}
                </TokenGrid>
                <Text variant="label" className="mt-2">Semantic</Text>
                <TokenGrid>
                  {semantic.map(([n]) => <ColorSwatch key={n} color={`hsl(var(--${n}))`} name={n} />)}
                </TokenGrid>
              </Col>
            </Section>

            <Section id="typography" title="Typography" docs="Inter · JetBrains Mono">
              <Col>
                <Text variant="title">Display title — 2xl</Text>
                <Text variant="section">Section heading — sm semibold</Text>
                <Text variant="body">Body text — the quick brown fox jumps over the lazy dog.</Text>
                <Text variant="sub">Sub / muted — secondary descriptive copy.</Text>
                <Text variant="caption">Caption — metadata and timestamps.</Text>
                <Text variant="label">Label — uppercase tracking</Text>
                <Text variant="mono">mono — STY-12 · ⌘K</Text>
              </Col>
            </Section>

            <Section id="spacing" title="Spacing & radius" docs="4px grid · --radius 0.5rem · shadows">
              <Row>
                {['sm', 'md', 'lg', 'xl', 'full'].map((r, i) => (
                  <div key={r} className="flex flex-col items-center gap-1.5">
                    <div className="size-14 border border-[hsl(var(--border))] bg-[hsl(var(--muted))]" style={{ borderRadius: r === 'full' ? 9999 : `calc(var(--radius) - ${[4, 2, 0, -2, 0][i]}px)` }} />
                    <span className="font-mono text-[10px] text-[hsl(var(--muted-foreground))]">{r}</span>
                  </div>
                ))}
                <Separator orientation="vertical" className="h-14" />
                {['sm', '', 'md', 'lg'].map((s, i) => (
                  <div key={i} className="size-14 rounded-[var(--radius)] bg-[hsl(var(--card))]" style={{ boxShadow: `var(--shadow${s ? '-' + s : ''})` }} />
                ))}
              </Row>
            </Section>

            <Section id="buttons" title="Buttons" docs="components/button">
              <Row>
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </Row>
              <Row>
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
                <Button><PlusIcon size={14} strokeWidth={1.5} /> With icon</Button>
                <Button disabled>Disabled</Button>
              </Row>
            </Section>

            <Section id="icon-buttons" title="Icon buttons" docs="composed">
              <Row>
                <IconButton label="Add" variant="ghost"><PlusIcon size={16} strokeWidth={1.5} /></IconButton>
                <IconButton label="Search" variant="outline"><SearchIcon size={16} strokeWidth={1.5} /></IconButton>
                <IconButton label="Filter" variant="filled"><FilterIcon size={16} strokeWidth={1.5} /></IconButton>
                <IconButton label="Favorite" variant="ghost" size="sm"><StarIcon size={14} strokeWidth={1.5} /></IconButton>
                <IconButton label="Bell" variant="ghost" size="lg"><BellIcon size={16} strokeWidth={1.5} /></IconButton>
              </Row>
            </Section>

            <Section id="badges" title="Badges & tags" docs="components/badge">
              <Row>
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="success" dot>Done</Badge>
                <Badge variant="warning" dot>In progress</Badge>
                <Badge variant="todo" dot>Todo</Badge>
              </Row>
              <Row>
                <Tag href="#/v2/usability/studies" icon={StudiesIcon}>Studies</Tag>
                <Tag href="#/v2/directory/features">Features</Tag>
              </Row>
            </Section>

            <Section id="avatars" title="Avatars" docs="components/avatar">
              <Row>
                <Avatar size="xs" initials="AJ" />
                <Avatar size="sm" initials="TW" />
                <Avatar size="md" initials="SA" />
                <Avatar size="lg" initials="NC" />
              </Row>
            </Section>

            <Section id="forms" title="Forms" docs="input · textarea · select · validation">
              <Col>
                <FieldGroup>
                  <Field>
                    <Label>Study name</Label>
                    <Input placeholder="e.g. Checkout flow v2" />
                    <FieldHint>Shown to participants.</FieldHint>
                  </Field>
                  <Field>
                    <Label>Description</Label>
                    <Textarea placeholder="What are you testing?" />
                  </Field>
                  <Field>
                    <Label>Type</Label>
                    <Select options={[{ value: 'u', label: 'Usability' }, { value: 's', label: 'Story' }, { value: 'f', label: 'Feature' }]} />
                  </Field>
                  <Field>
                    <Label>Identifier</Label>
                    <Input aria-invalid defaultValue="!" className="border-[hsl(var(--destructive))]" />
                    <FieldError>Identifier is required.</FieldError>
                  </Field>
                </FieldGroup>
              </Col>
            </Section>

            <Section id="selection" title="Selection" docs="checkbox · radio · switch · slider · toggle">
              <Col>
                <Row>
                  <label className="inline-flex items-center gap-2 text-sm"><IssueCheckbox checked={checked} onChange={() => setChecked((v) => !v)} label="t" /> Checkbox</label>
                  <Switch checked={sw} onChange={() => setSw((v) => !v)} label="Switch" />
                </Row>
                <RadioGroup>
                  <Radio checked={radio === 'a'} onChange={() => setRadio('a')} label="Option A" />
                  <Radio checked={radio === 'b'} onChange={() => setRadio('b')} label="Option B" />
                </RadioGroup>
                <div className="flex w-full max-w-xs items-center gap-3">
                  <Slider value={slider} onChange={setSlider} />
                  <span className="w-8 text-sm tabular-nums text-[hsl(var(--muted-foreground))]">{slider}</span>
                </div>
                <ToggleGroup options={[{ value: 'list', label: 'List' }, { value: 'grid', label: 'Grid' }, { value: 'board', label: 'Board' }]} value={view} onChange={setView} />
                <Toggle pressed={sw} onClick={() => setSw((v) => !v)}>Single toggle</Toggle>
              </Col>
            </Section>

            <Section id="cards" title="Cards" docs="components/card">
              <Card className="w-[320px]">
                <CardHeader>
                  <CardTitle>Checkout flow v2</CardTitle>
                  <CardDescription>Usability study · 8 participants</CardDescription>
                </CardHeader>
                <CardContent><p className="text-sm text-[hsl(var(--muted-foreground))]">Moderated sessions testing the redesigned checkout.</p></CardContent>
                <CardFooter className="gap-2"><Button size="sm">Open</Button><Button size="sm" variant="outline">Share</Button></CardFooter>
              </Card>
              <div className="flex w-[280px] flex-col gap-2 rounded-[var(--radius)] bg-[hsl(var(--muted))] p-4">
                <Text variant="section">Well surface</Text>
                <Text variant="sub">Flat nested container.</Text>
              </div>
            </Section>

            <Section id="tables" title="Tables" docs="components/table">
              <div className="w-full overflow-hidden rounded-[var(--radius)] border border-[hsl(var(--border))]">
                <Table>
                  <TableHeader><TableRow><TableHead>ID</TableHead><TableHead>Study</TableHead><TableHead>Status</TableHead><TableHead>Owner</TableHead></TableRow></TableHeader>
                  <TableBody>
                    <TableRow interactive><TableCell className="font-mono text-xs text-[hsl(var(--muted-foreground))]">STY-12</TableCell><TableCell>Checkout flow v2</TableCell><TableCell><Badge variant="progress" dot>In progress</Badge></TableCell><TableCell><Avatar size="xs" initials="AJ" /></TableCell></TableRow>
                    <TableRow interactive><TableCell className="font-mono text-xs text-[hsl(var(--muted-foreground))]">STY-09</TableCell><TableCell>Settings IA review</TableCell><TableCell><Badge variant="done" dot>Done</Badge></TableCell><TableCell><Avatar size="xs" initials="SA" /></TableCell></TableRow>
                  </TableBody>
                </Table>
              </div>
            </Section>

            <Section id="list-rows" title="List rows" docs="composed">
              <div className="w-full rounded-[var(--radius)] border border-[hsl(var(--border))] p-1">
                <GroupHeader label="Todo" count={2} leading={<StatusIcon status="todo" />} />
                {[['SUR-1', 'Import your data', 'todo', 'high'], ['SUR-2', 'Connect your tools', 'progress', 'medium']].map(([id, t, s, p]) => (
                  <IssueRow key={id} id={id} title={t} date="Feb 3" href="#/v2/issues" status={<StatusIcon status={s} />} priority={<PriorityIcon level={p} />} assignee={<Avatar size="xs" initials="AJ" />} checked={checked} selected={checked} onCheck={() => setChecked((v) => !v)} />
                ))}
              </div>
            </Section>

            <Section id="priority" title="Priority & status" docs="composed">
              <Row><PriorityIcon level="urgent" /><PriorityIcon level="high" /><PriorityIcon level="medium" /><PriorityIcon level="low" /><PriorityIcon level="none" /></Row>
              <Row><StatusIcon status="todo" /><StatusIcon status="progress" /><StatusIcon status="done" /><StatusIcon status="cancelled" /></Row>
              <Row><Badge variant="todo" dot>Todo</Badge><Badge variant="progress" dot>In progress</Badge><Badge variant="done" dot>Done</Badge></Row>
            </Section>

            <Section id="tabs" title="Tabs" docs="components/tabs">
              <div className="w-full">
                <Toolbar left={<><Tab active>All</Tab><Tab muted>Active</Tab><Tab muted>Backlog</Tab><Tab muted>Archived</Tab></>} right={<><IconButton label="Filter" variant="outline"><FilterIcon size={14} strokeWidth={1.5} /></IconButton></>} />
              </div>
            </Section>

            <Section id="nav" title="Navigation" docs="navitem · breadcrumb · pagination">
              <Col>
                <div className="w-[220px] rounded-[var(--radius)] border border-[hsl(var(--border))] p-2">
                  <NavItem icon={HomeIcon} label="Home" active />
                  <NavItem icon={StudiesIcon} label="Studies" />
                  <NavItem icon={SettingsIcon} label="Settings" />
                </div>
                <Breadcrumb items={[{ label: 'Home', href: '#/v2' }, { label: 'Usability', href: '#/v2/usability/studies' }, { label: 'Checkout flow v2' }]} />
                <Pagination page={2} total={5} onPrev={() => {}} onNext={() => {}} />
              </Col>
            </Section>

            <Section id="menus" title="Menus" docs="dropdown · context">
              <Row>
                <DropdownMenu trigger={<Button variant="outline">Open menu</Button>}>
                  <MenuLabel>Actions</MenuLabel>
                  <MenuItem keys={['E']}>Edit</MenuItem>
                  <MenuItem keys={['D']}>Duplicate</MenuItem>
                  <MenuSeparator />
                  <MenuItem destructive>Delete</MenuItem>
                </DropdownMenu>
                <ContextMenu trigger={<div className="grid h-9 w-48 place-items-center rounded-[calc(var(--radius)-2px)] border border-dashed border-[hsl(var(--border))] text-sm text-[hsl(var(--muted-foreground))]">Right-click me</div>}>
                  <MenuItem keys={['⌘', 'C']}>Copy</MenuItem>
                  <MenuItem>Regenerate</MenuItem>
                  <MenuSeparator />
                  <MenuItem destructive>Delete</MenuItem>
                </ContextMenu>
              </Row>
            </Section>

            <Section id="overlays" title="Overlays" docs="dialog · sheet · popover · tooltip · hovercard">
              <Row>
                <Button variant="outline" onClick={() => setModal(true)}>Dialog</Button>
                <Button variant="outline" onClick={() => setAlert(true)}>Alert dialog</Button>
                <Button variant="outline" onClick={() => setSheet(true)}>Sheet</Button>
                <Popover trigger={<Button variant="outline">Popover</Button>}>
                  <Text variant="section">Filters</Text>
                  <p className="mt-1 text-sm text-[hsl(var(--muted-foreground))]">Popover content panel.</p>
                </Popover>
                <Tooltip label="Tooltip text"><Button variant="outline">Hover me</Button></Tooltip>
                <HoverCard trigger={<Button variant="outline">@workspace</Button>}>
                  <Text variant="section">Surfarch</Text>
                  <p className="mt-1 text-[hsl(var(--muted-foreground))]">12 members · 8 studies</p>
                </HoverCard>
              </Row>
            </Section>

            <Section id="feedback" title="Feedback" docs="alert · toast">
              <Col>
                <Alert variant="info" title="Heads up">Tokens are sampled from the Tawakkalna logo.</Alert>
                <Alert variant="success" title="Saved">Your study was saved.</Alert>
                <Alert variant="warning" title="Careful">You have unsaved changes.</Alert>
                <Alert variant="danger" title="Error">Sync failed — retry.</Alert>
                <ToastDemo />
              </Col>
            </Section>

            <Section id="loading" title="Loading" docs="skeleton">
              <Col>
                <SkeletonGroup />
                <Row><Skeleton className="h-8 w-24" /><Skeleton className="size-8 rounded-full" /><Skeleton className="h-8 flex-1" /></Row>
              </Col>
            </Section>

            <Section id="progress" title="Progress" docs="components/progress">
              <Col>
                <Progress value={25} />
                <Progress value={60} />
                <Progress value={100} />
              </Col>
            </Section>

            <Section id="disclosure" title="Disclosure" docs="accordion · collapsible · aspect-ratio · links · kbd">
              <Col>
                <Accordion items={[{ title: 'What is a study?', content: 'A moderated or unmoderated usability session.', defaultOpen: true }, { title: 'How do I invite participants?', content: 'Share the study link from the detail page.' }]} />
                <Collapsible title="Advanced settings"><div className="flex gap-2"><Input placeholder="top_p" className="w-24" /><Input placeholder="top_k" className="w-24" /></div></Collapsible>
                <AspectRatio ratio={16 / 9} className="max-w-sm border border-[hsl(var(--border))] bg-[hsl(var(--muted))]"><div className="grid h-full place-items-center text-sm text-[hsl(var(--muted-foreground))]">16:9</div></AspectRatio>
                <Row><Link href="#/v2">Default link</Link><KbdCombo keys={['⌘', 'K']} /><Kbd>Esc</Kbd></Row>
              </Col>
            </Section>

            <Section id="command" title="Command palette" docs="components/command">
              <Button variant="outline" onClick={() => setCmd(true)}>Open command palette <KbdCombo keys={['⌘', 'K']} /></Button>
            </Section>

            <Section id="stats" title="Stats" docs="composed">
              <div className="grid w-full gap-3 sm:grid-cols-3">
                <StatCard label="Requests" value="6,924" hint="+12% this week" />
                <StatCard label="Tokens" value="14.0M" hint="context used" />
                <StatCard label="Latency" value="820ms" hint="p95" />
              </div>
              <div className="grid w-full gap-3 sm:grid-cols-2">
                <ModuleCard title="Usability" tone="usability" icon={StudiesIcon} description="AI + human studies" href="#/v2/usability/studies" metrics={[{ label: 'Sessions', value: 24 }, { label: 'Avg', value: '8m' }]} />
                <div className="rounded-[var(--radius)] border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-1">
                  <ActivityItem text="Session completed" time="2h ago" />
                  <ActivityItem text="US-104 moved to review" time="4h ago" />
                </div>
              </div>
            </Section>

            <Section id="chat" title="AI · Chat" docs="composed from primitives">
              <Col>
                <ChatBubble role="user" time="10:02">How many active studies do we have?</ChatBubble>
                <ChatBubble role="assistant" time="10:02">You have 8 active studies, 3 with running sessions.</ChatBubble>
                <TypingIndicator />
                <PromptBar value={prompt} onChange={setPrompt} onSubmit={() => setPrompt('')} />
              </Col>
            </Section>

            <Section id="ai" title="AI · Patterns" docs="response card · model selector">
              <Col>
                <ModelSelector model="Fable 5" tokens="14.0M" />
                <AiResponseCard model="Fable 5" onCopy={() => {}}>
                  Based on the latest sessions, the checkout redesign reduced drop-off by 18%. Recommend shipping v2 to 50% of traffic.
                </AiResponseCard>
              </Col>
            </Section>
          </main>
        </div>

        <SelectionBar count={checked ? 1 : 0} onClear={() => setChecked(false)} />
        <Modal open={modal} onClose={() => setModal(false)} title="Create study" description="Name your study to get started." footer={<><Button variant="outline" onClick={() => setModal(false)}>Cancel</Button><Button onClick={() => setModal(false)}>Create</Button></>}>
          <Field><Label>Name</Label><Input placeholder="e.g. Mobile onboarding" /></Field>
        </Modal>
        <AlertDialog open={alert} onClose={() => setAlert(false)} destructive title="Delete study?" description="This action cannot be undone." confirmLabel="Delete" onConfirm={() => {}} />
        <Sheet open={sheet} onClose={() => setSheet(false)} title="Filters" description="Refine the list."><div className="mt-4 flex flex-col gap-3"><Select options={['All', 'Active', 'Done']} /><Switch checked={sw} onChange={() => setSw((v) => !v)} label="Only mine" /></div></Sheet>
        <CommandPalette open={cmd} onClose={() => setCmd(false)} items={[{ label: 'Go to Dashboard', icon: HomeIcon, onSelect: () => { window.location.hash = '#/v2' } }, { label: 'Search studies', icon: StudiesIcon }, { label: 'Settings', icon: SettingsIcon }]} />
      </div>
    </ToastProvider>
  )
}
