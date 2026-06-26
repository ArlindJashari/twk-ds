import { useEffect, useRef, useState } from 'react'
import DesignSystemLayout from '../components/DesignSystemLayout.jsx'
import { DisplayPreferencesProvider, useLocale } from '../lib/displayPreferences.jsx'
import { getDesignSystemCopy } from '../lib/designSystemI18n.js'
import {
  CaretDown, HomeIcon, LinearToolbarDisplayIcon, LinearToolbarFilterIcon, PlusIcon, SearchIcon, SparkleIcon, StudiesIcon,
} from '../components/icons.jsx'
import {
  Alert, AlertDialog, Accordion, AiResponseCard, AspectRatio, Avatar, Badge, Breadcrumb, Button, Card, CardBody, CardDescription, CardFooter,
  CardMedia, CardTitle, ChatBubble, Checkbox, Collapsible, CommandPalette, ContextMenu, IssueCheckbox, ColorSwatch, Divider, DropdownMenu, EmptyState, Field,
  FieldError, FieldGroup, FieldHint, GroupHeader, HoverCard, IconButton, Input, IssueRow, issueRowLead,
  issueRowSlotCheckbox, Kbd, KbdCombo, Label, Link, ListRow, MenuItem, MenuLabel, MenuSeparator, Modal, ModalFooter, ModuleCard, NavItem, Pagination, Panel,
  PanelBody, PanelHeader, Popover, PriorityIcon, Progress, PromptBar, Radio, SearchTrigger, Select, SelectionBar, Sheet, ShowcaseRow,
  ShowcaseSection, ShowcaseStack, Skeleton, SkeletonGroup, Slider, StatCard, StatusIcon, Switch, Tab, TabList,
  TabPanel, Table, TableBody, TableCell, TableHead, TableHeader, TableRow, Tag, Text, Textarea, ToggleGroup,
  Toast, ToastProvider, TokenGrid, Toolbar, Tooltip, TypingIndicator, useToast,
} from '../components/ui/index.js'

const NAV_IDS = [
  'colors', 'typography', 'spacing', 'buttons', 'icon-buttons', 'forms', 'selection',
  'badges', 'avatars', 'cards', 'tables', 'list-rows', 'priority', 'tabs', 'search',
  'nav', 'menus', 'modals', 'toasts', 'panels', 'alerts', 'empty', 'loading', 'progress',
  'links', 'slider', 'toggle', 'overlays', 'breadcrumb', 'accordion', 'command', 'stats', 'chat', 'dividers',
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
  const [sliderVal, setSliderVal] = useState(70)
  const [toggleView, setToggleView] = useState('grid')
  const [sheetOpen, setSheetOpen] = useState(false)
  const [alertOpen, setAlertOpen] = useState(false)
  const [cmdOpen, setCmdOpen] = useState(false)
  const [page, setPage] = useState(1)
  const [prompt, setPrompt] = useState('')

  return (
    <DisplayPreferencesProvider>
      <DesignSystemContent
        tab={tab} setTab={setTab} sw={sw} setSw={setSw}
        modalOpen={modalOpen} setModalOpen={setModalOpen}
        sliderVal={sliderVal} setSliderVal={setSliderVal}
        toggleView={toggleView} setToggleView={setToggleView}
        sheetOpen={sheetOpen} setSheetOpen={setSheetOpen}
        alertOpen={alertOpen} setAlertOpen={setAlertOpen}
        cmdOpen={cmdOpen} setCmdOpen={setCmdOpen}
        page={page} setPage={setPage}
        prompt={prompt} setPrompt={setPrompt}
      />
    </DisplayPreferencesProvider>
  )
}

function ToastDemo({ copy }) {
  const { toast } = useToast()
  const t = copy.sections.toasts
  return (
    <ShowcaseRow>
      <Button variant="secondary" onClick={() => toast({ variant: 'info', title: t.savedTitle, message: t.savedMessage })}>{t.info}</Button>
      <Button variant="secondary" onClick={() => toast({ variant: 'success', title: t.doneTitle, message: t.doneMessage })}>{t.success}</Button>
      <Button variant="secondary" onClick={() => toast({ variant: 'warning', message: t.warningMessage })}>{t.warning}</Button>
      <Button variant="secondary" onClick={() => toast({ variant: 'danger', title: t.errorTitle, message: t.errorMessage })}>{t.danger}</Button>
    </ShowcaseRow>
  )
}

function DesignSystemContent({
  tab, setTab, sw, setSw, modalOpen, setModalOpen,
  sliderVal, setSliderVal, toggleView, setToggleView,
  sheetOpen, setSheetOpen, alertOpen, setAlertOpen,
  cmdOpen, setCmdOpen, page, setPage, prompt, setPrompt,
}) {
  const scrollRef = useRef(null)
  const locale = useLocale()
  const c = getDesignSystemCopy(locale)
  const nav = NAV_IDS.map((id) => ({ id, label: c.nav[id] }))
  const s = c.sections

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const scrollToSection = (id) => {
    const scroller = scrollRef.current
    const target = document.getElementById(id)
    if (!scroller || !target) return
    const top = scroller.scrollTop
      + (target.getBoundingClientRect().top - scroller.getBoundingClientRect().top)
      - 24
    scroller.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <DesignSystemLayout>
      <ToastProvider>
      <div className="flex min-h-0 flex-1 overflow-hidden">
        <aside className="hidden w-[200px] shrink-0 overflow-y-auto border-e border-line bg-well px-12 py-16 lg:block">
          <p className="mb-12 px-8 text-[11px] font-medium uppercase tracking-wide text-faint">
            {c.layout.componentsNav}
          </p>
          <nav className="flex flex-col gap-2">
            {nav.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="rounded-lg px-8 py-6 text-start text-[12px] font-medium text-sub transition-colors hover:bg-hover hover:text-ink"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </aside>

        <div ref={scrollRef} className="min-h-0 min-w-0 flex-1 overflow-y-auto overscroll-y-contain px-24 py-28">
          <header className="mb-32">
            <Text variant="title" as="h1" className="text-[20px]">{c.layout.title}</Text>
            <Text variant="sub" className="mt-6 max-w-[560px]">
              {c.layout.intro}{' '}
              <code className="rounded-xs bg-well px-4 py-2 font-berkeley text-[12px]">src/components/ui</code>
              {' '}{c.layout.introSuffix}{' '}
              <code className="rounded-xs bg-well px-4 py-2 font-berkeley text-[12px]">DESIGN_SYSTEM.md</code>.
            </Text>
          </header>

          <div className="flex flex-col gap-32">
            <ShowcaseSection id="colors" title={s.colors.title} description={s.colors.description}>
              <ShowcaseRow label={s.colors.surfaces}>
                <TokenGrid cols={6}>
                  <ColorSwatch name="shell" className="bg-shell" />
                  <ColorSwatch name="sidebar" className="bg-sidebar" />
                  <ColorSwatch name="content" className="bg-content" />
                  <ColorSwatch name="well" className="bg-well" />
                  <ColorSwatch name="surface" className="bg-surface" />
                  <ColorSwatch name="hover" className="bg-hover" />
                </TokenGrid>
              </ShowcaseRow>
              <ShowcaseRow label={s.colors.text}>
                <TokenGrid cols={4}>
                  <ColorSwatch name="ink" className="bg-ink" />
                  <ColorSwatch name="body" className="bg-body" />
                  <ColorSwatch name="sub" className="bg-sub" />
                  <ColorSwatch name="faint" className="bg-faint" />
                </TokenGrid>
              </ShowcaseRow>
              <ShowcaseRow label={s.colors.accentSemantic}>
                <TokenGrid cols={6}>
                  <ColorSwatch name="accent" className="bg-accent" />
                  <ColorSwatch name="success" className="bg-success" />
                  <ColorSwatch name="warning" className="bg-warning" />
                  <ColorSwatch name="danger" className="bg-danger" />
                  <ColorSwatch name="team" className="bg-team" />
                  <ColorSwatch name="workspace" className="bg-workspace" />
                </TokenGrid>
              </ShowcaseRow>
              <ShowcaseRow label={s.colors.priority}>
                <TokenGrid cols={5}>
                  <ColorSwatch name="urgent" className="bg-priority-urgent" />
                  <ColorSwatch name="high" className="bg-priority-high" />
                  <ColorSwatch name="medium" className="bg-priority-medium" />
                  <ColorSwatch name="low" className="bg-priority-low" />
                  <ColorSwatch name="none" className="bg-priority-none" />
                </TokenGrid>
              </ShowcaseRow>
            </ShowcaseSection>

            <ShowcaseSection id="typography" title={s.typography.title} description={s.typography.description}>
              <ShowcaseStack label={s.typography.scale}>
                <Text variant="page">{s.typography.page}</Text>
                <Text variant="title">{s.typography.cardTitle}</Text>
                <Text variant="section">{s.typography.section}</Text>
                <Text variant="body">{s.typography.body}</Text>
                <Text variant="sub">{s.typography.secondary}</Text>
                <Text variant="caption">{s.typography.caption}</Text>
                <Text variant="label">{s.typography.label}</Text>
                <Text variant="mono">{s.typography.mono}</Text>
              </ShowcaseStack>
            </ShowcaseSection>

            <ShowcaseSection id="spacing" title={s.spacing.title} description={s.spacing.description}>
              <ShowcaseRow label={s.spacing.radius}>
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
              <ShowcaseRow label={s.spacing.shadows}>
                <div className="flex flex-wrap gap-16">
                  <div className="h-[48px] w-[120px] rounded-lg bg-surface shadow-stroke" />
                  <div className="h-[48px] w-[120px] rounded-lg bg-surface shadow-panel" />
                  <div className="h-[48px] w-[120px] rounded-lg bg-surface shadow-pop" />
                  <div className="h-[48px] w-[120px] rounded-lg bg-surface shadow-modal" />
                </div>
              </ShowcaseRow>
            </ShowcaseSection>

            <ShowcaseSection id="buttons" title={s.buttons.title}>
              <ShowcaseRow label={s.buttons.variants}>
                <Button variant="primary">{s.buttons.primary}</Button>
                <Button variant="secondary">{s.buttons.secondary}</Button>
                <Button variant="ghost">{s.buttons.ghost}</Button>
                <Button variant="ink">{s.buttons.ink}</Button>
                <Button variant="soft">{s.buttons.soft}</Button>
                <Button variant="pill">{s.buttons.pill}</Button>
                <Button variant="danger">{s.buttons.danger}</Button>
              </ShowcaseRow>
              <ShowcaseRow label={s.buttons.sizes}>
                <Button size="xs">XS</Button>
                <Button size="sm">SM</Button>
                <Button size="md">MD</Button>
                <Button size="lg">LG</Button>
              </ShowcaseRow>
              <ShowcaseRow label={s.buttons.withIcon}>
                <Button variant="ink"><PlusIcon size={12} strokeWidth={2} />{s.buttons.create}</Button>
                <Button variant="secondary"><SparkleIcon size={12} />{s.buttons.generate}</Button>
              </ShowcaseRow>
              <ShowcaseRow label={s.buttons.states}>
                <Button disabled>{s.buttons.disabled}</Button>
              </ShowcaseRow>
            </ShowcaseSection>

            <ShowcaseSection id="icon-buttons" title={s.iconButtons.title} description={s.iconButtons.description}>
              <ShowcaseRow label={s.iconButtons.variants}>
                <IconButton variant="filled" label={s.iconButtons.filter}><LinearToolbarFilterIcon /></IconButton>
                <IconButton variant="filled" label={s.iconButtons.display}><LinearToolbarDisplayIcon /></IconButton>
                <IconButton variant="accent" label={s.buttons.create}><PlusIcon size={14} strokeWidth={1.5} /></IconButton>
              </ShowcaseRow>
              <ShowcaseRow label={s.iconButtons.sizes}>
                <IconButton size="sm" label={s.iconButtons.small}><SearchIcon size={12} /></IconButton>
                <IconButton size="md" label={s.iconButtons.medium}><SearchIcon size={14} /></IconButton>
                <IconButton size="lg" label={s.iconButtons.large}><SearchIcon size={16} /></IconButton>
              </ShowcaseRow>
            </ShowcaseSection>

            <ShowcaseSection id="forms" title={s.forms.title}>
              <div className="max-w-[400px]">
                <FieldGroup>
                  <Field>
                    <Label htmlFor="ds-name" required>{s.forms.name}</Label>
                    <Input id="ds-name" placeholder={s.forms.namePlaceholder} />
                    <FieldHint>{s.forms.nameHint}</FieldHint>
                  </Field>
                  <Field>
                    <Label htmlFor="ds-desc">{s.forms.description}</Label>
                    <Textarea id="ds-desc" placeholder={s.forms.descriptionPlaceholder} />
                  </Field>
                  <Field>
                    <Label htmlFor="ds-type">{s.forms.type}</Label>
                    <Select id="ds-type" defaultValue="usability">
                      <option value="usability">{s.forms.usabilityStudy}</option>
                      <option value="story">{s.forms.userStory}</option>
                      <option value="feature">{s.forms.featureSpec}</option>
                    </Select>
                  </Field>
                  <Field>
                    <Label htmlFor="ds-err">{s.forms.withError}</Label>
                    <Input id="ds-err" aria-invalid defaultValue="bad@" />
                    <FieldError>{s.forms.emailError}</FieldError>
                  </Field>
                </FieldGroup>
              </div>
            </ShowcaseSection>

            <ShowcaseSection id="selection" title={s.selection.title}>
              <ShowcaseRow label={s.selection.issueCheckbox}>
                <div className="w-[280px] overflow-hidden rounded-lg border border-line-subtle bg-content py-4">
                  <ListRow>
                    <div className={issueRowLead}>
                      <span className={issueRowSlotCheckbox}>
                        <IssueCheckbox checked={false} aria-label="Unchecked" />
                      </span>
                      <span className="text-[13px] text-sub">{s.selection.hoverRow}</span>
                    </div>
                  </ListRow>
                  <ListRow selected>
                    <div className={issueRowLead}>
                      <span className={issueRowSlotCheckbox}>
                        <IssueCheckbox checked aria-label={s.selection.checked} />
                      </span>
                      <span className="text-[13px] font-medium text-ink">{s.selection.selected}</span>
                    </div>
                  </ListRow>
                </div>
              </ShowcaseRow>
              <div className="relative flex h-[80px] items-end justify-center rounded-lg border border-line-subtle bg-well pb-16">
                <SelectionBar
                  count={1}
                  onClear={() => {}}
                  onMoveToBacklog={() => {}}
                  onActions={() => {}}
                  selectedLabel={s.selection.selectedCount}
                  moveToBacklogLabel={s.selection.moveToBacklog}
                  actionsLabel={s.selection.actions}
                  className="static bottom-auto"
                />
              </div>
              <ShowcaseRow label={s.selection.checkbox}>
                <label className="flex items-center gap-8 text-[13px]">
                  <Checkbox defaultChecked /> {s.selection.checked}
                </label>
                <label className="flex items-center gap-8 text-[13px]">
                  <Checkbox /> {s.selection.unchecked}
                </label>
                <label className="flex items-center gap-8 text-[13px] text-faint">
                  <Checkbox disabled /> {s.buttons.disabled}
                </label>
              </ShowcaseRow>
              <ShowcaseRow label={s.selection.radio}>
                <label className="flex items-center gap-8 text-[13px]">
                  <Radio name="ds-radio" defaultChecked /> {s.selection.optionA}
                </label>
                <label className="flex items-center gap-8 text-[13px]">
                  <Radio name="ds-radio" /> {s.selection.optionB}
                </label>
              </ShowcaseRow>
              <ShowcaseRow label={s.selection.switch}>
                <Switch checked={sw} onClick={() => setSw((v) => !v)} aria-label={s.selection.switch} />
                <Switch checked={false} aria-label={s.selection.unchecked} />
              </ShowcaseRow>
            </ShowcaseSection>

            <ShowcaseSection id="badges" title={s.badges.title}>
              <ShowcaseRow label={s.badges.badges}>
                <Badge>{s.badges.default}</Badge>
                <Badge variant="accent">{s.badges.accent}</Badge>
                <Badge variant="success">{s.badges.done}</Badge>
                <Badge variant="warning">{s.badges.inReview}</Badge>
                <Badge variant="danger">{s.badges.blocked}</Badge>
              </ShowcaseRow>
              <ShowcaseRow label={s.badges.priority}>
                <Badge variant="urgent">{s.badges.urgent}</Badge>
                <Badge variant="high">{s.badges.high}</Badge>
                <Badge variant="medium">{s.badges.medium}</Badge>
                <Badge variant="low">{s.badges.low}</Badge>
                <Badge variant="none">{s.badges.noPriority}</Badge>
              </ShowcaseRow>
              <ShowcaseRow label={s.badges.tags}>
                <Tag icon={StudiesIcon}>{s.badges.studies}</Tag>
                <Tag variant="active">{s.badges.active}</Tag>
                <Tag variant="accent">AI</Tag>
                <Tag variant="outline">{s.badges.outline}</Tag>
              </ShowcaseRow>
            </ShowcaseSection>

            <ShowcaseSection id="avatars" title={s.avatars.title}>
              <ShowcaseRow label={s.avatars.sizes}>
                <Avatar size="xs" initials="AJ" />
                <Avatar size="sm" initials="AJ" />
                <Avatar size="md" initials="AJ" />
                <Avatar size="lg" initials="AD" />
              </ShowcaseRow>
            </ShowcaseSection>

            <ShowcaseSection id="cards" title={s.cards.title}>
              <div className="grid gap-12 lg:grid-cols-2">
                <Card variant="elevated">
                  <CardMedia className="h-[120px]"><StudyPlaceholder /></CardMedia>
                  <CardBody>
                    <CardTitle>{s.cards.studyTitle}</CardTitle>
                    <CardDescription>{s.cards.studyDescription}</CardDescription>
                    <CardFooter>
                      <Button variant="ink" size="lg"><PlusIcon size={12} />{s.buttons.create}</Button>
                      <Button variant="secondary" size="lg">{s.cards.viewAll}</Button>
                    </CardFooter>
                  </CardBody>
                </Card>
                <Card variant="well">
                  <CardBody>
                    <CardTitle>{s.cards.flatTitle}</CardTitle>
                    <CardDescription>{s.cards.flatDescription}</CardDescription>
                  </CardBody>
                </Card>
              </div>
            </ShowcaseSection>

            <ShowcaseSection id="tables" title={s.tables.title} description={s.tables.description}>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>{s.tables.id}</TableHead>
                    <TableHead>{s.tables.name}</TableHead>
                    <TableHead>{s.tables.status}</TableHead>
                    <TableHead>{s.tables.owner}</TableHead>
                    <TableHead className="text-end">{s.tables.updated}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {s.tables.rows.map(([id, name, status, owner, date]) => (
                    <TableRow key={id} interactive>
                      <TableCell className="font-berkeley text-faint">{id}</TableCell>
                      <TableCell className="font-medium text-ink">{name}</TableCell>
                      <TableCell><Badge variant={status} size="sm">{status}</Badge></TableCell>
                      <TableCell><Avatar size="xs" initials={owner} /></TableCell>
                      <TableCell className="text-end text-faint tabular-nums">{date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ShowcaseSection>

            <ShowcaseSection id="list-rows" title={s.listRows.title} description={s.listRows.description}>
              <div className="max-w-[640px] overflow-hidden rounded-lg border border-line-subtle bg-content pb-8">
                <GroupHeader
                  label={s.listRows.todo}
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
                  {s.listRows.issues.map(([id, title], index) => (
                    <IssueRow
                      key={id}
                      id={id}
                      title={title}
                      date={s.listRows.date}
                      href="#"
                      priority={<PriorityIcon level={['none', 'medium', 'high'][index]} />}
                      status={<StatusIcon status={['todo', 'progress', 'done'][index]} />}
                      assignee={<Avatar size="xs" initials={['AJ', 'MK', 'AD'][index]} />}
                      checked={index === 0}
                      selected={index === 0}
                    />
                  ))}
                </div>
              </div>
            </ShowcaseSection>

            <ShowcaseSection id="priority" title={s.priority.title}>
              <ShowcaseRow label={s.priority.priority}>
                {['urgent', 'high', 'medium', 'low', 'none'].map((level) => (
                  <span key={level} className="flex items-center gap-6 text-[12px] text-sub">
                    <PriorityIcon level={level} />
                    {s.priority.levels[level]}
                  </span>
                ))}
              </ShowcaseRow>
              <ShowcaseRow label={s.priority.status}>
                {['todo', 'progress', 'done', 'cancelled'].map((status) => (
                  <span key={status} className="flex items-center gap-6 text-[12px] text-sub">
                    <StatusIcon status={status} />
                    {s.priority.statuses[status]}
                  </span>
                ))}
              </ShowcaseRow>
              <ShowcaseRow label={s.priority.statusBadges}>
                <Badge variant="todo" dot>{s.priority.todo}</Badge>
                <Badge variant="progress" dot>{s.priority.inProgress}</Badge>
                <Badge variant="done" dot>{s.priority.done}</Badge>
                <Badge variant="cancelled" dot>{s.priority.cancelled}</Badge>
              </ShowcaseRow>
            </ShowcaseSection>

            <ShowcaseSection id="tabs" title={s.tabs.title}>
              <TabList>
                <Tab active={tab === 'all'} onClick={() => setTab('all')}>{s.tabs.allIssues}</Tab>
                <Tab active={tab === 'active'} onClick={() => setTab('active')}>{s.tabs.active}</Tab>
                <Tab active={tab === 'backlog'} onClick={() => setTab('backlog')}>{s.tabs.backlog}</Tab>
                <Tab muted>{s.tabs.archived}</Tab>
              </TabList>
              <TabPanel>
                <p className="text-[13px] text-sub">{s.tabs.activeTab} <strong className="text-ink">{tab}</strong></p>
              </TabPanel>
              <div className="mt-16 overflow-hidden rounded-lg border border-line-subtle">
                <Toolbar
                  left={(
                    <>
                      <Tab active>{s.tabs.assigned}</Tab>
                      <Tab>{s.tabs.created}</Tab>
                      <Tab>{s.tabs.activity}</Tab>
                    </>
                  )}
                  right={(
                    <>
                      <IconButton variant="filled" label={s.iconButtons.filter}><LinearToolbarFilterIcon /></IconButton>
                      <IconButton variant="filled" label={s.iconButtons.display}><LinearToolbarDisplayIcon /></IconButton>
                    </>
                  )}
                />
                <div className="bg-content p-16 text-[13px] text-faint">{s.tabs.toolbarContent}</div>
              </div>
            </ShowcaseSection>

            <ShowcaseSection id="search" title={s.search.title}>
              <ShowcaseStack>
                <SearchTrigger placeholder={s.search.placeholder} onClick={() => { window.location.hash = '#/search' }} />
              </ShowcaseStack>
            </ShowcaseSection>

            <ShowcaseSection id="nav" title={s.navSection.title}>
              <div className="w-[220px] rounded-lg border border-line-subtle bg-sidebar p-8">
                <NavItem href="#/" active icon={HomeIcon}>{s.navSection.home}</NavItem>
                <NavItem href="#/usability/studies" icon={StudiesIcon}>{s.navSection.studies}</NavItem>
                <NavItem href="#/settings">{s.navSection.settings}</NavItem>
              </div>
            </ShowcaseSection>

            <ShowcaseSection id="menus" title={s.menus.title}>
              <ShowcaseRow>
                <DropdownMenu
                  label={s.selection.actions}
                  trigger={<Button variant="secondary">{s.menus.openMenu}</Button>}
                >
                  <MenuItem onClick={() => {}}>{s.menus.editStudy}</MenuItem>
                  <MenuItem onClick={() => {}} keys={['⌘', 'D']}>{s.menus.duplicate}</MenuItem>
                  <MenuSeparator />
                  <MenuItem onClick={() => {}}>{s.menus.archive}</MenuItem>
                </DropdownMenu>
                <DropdownMenu
                  variant="workspace"
                  label="Workspace"
                  trigger={<Button variant="ghost">{s.menus.workspaceMenu}</Button>}
                >
                  <MenuItem variant="workspace" href="#/">{s.navSection.home}</MenuItem>
                  <MenuItem variant="workspace" keys={['G', 'S']}>{s.navSection.settings}</MenuItem>
                  <MenuSeparator variant="workspace" />
                  <MenuLabel>{s.menus.teams}</MenuLabel>
                  <MenuItem variant="workspace">Surfarch</MenuItem>
                </DropdownMenu>
              </ShowcaseRow>
            </ShowcaseSection>

            <ShowcaseSection id="modals" title={s.modals.title}>
              <ShowcaseRow>
                <Button variant="secondary" onClick={() => setModalOpen(true)}>{s.modals.openModal}</Button>
              </ShowcaseRow>
              <Modal open={modalOpen} onClose={() => setModalOpen(false)} title={s.modals.createStudy}>
                <FieldGroup>
                  <Field>
                    <Label htmlFor="modal-name">{s.modals.name}</Label>
                    <Input id="modal-name" placeholder={s.modals.namePlaceholder} />
                  </Field>
                </FieldGroup>
                <ModalFooter>
                  <Button variant="ghost" onClick={() => setModalOpen(false)}>{s.modals.cancel}</Button>
                  <Button onClick={() => setModalOpen(false)}>{s.modals.create}</Button>
                </ModalFooter>
              </Modal>
            </ShowcaseSection>

            <ShowcaseSection id="toasts" title={s.toasts.title}>
              <ToastDemo copy={c} />
              <div className="mt-12 flex flex-wrap gap-8">
                <Toast variant="info" title={s.toasts.tipTitle}>{s.toasts.tipMessage}</Toast>
                <Toast variant="success" title={s.toasts.savedTitle}>{s.toasts.savedMessage}</Toast>
              </div>
            </ShowcaseSection>

            <ShowcaseSection id="panels" title={s.panels.title}>
              <Panel className="max-w-[400px]">
                <PanelHeader title={s.panels.studies} />
                <PanelBody className="p-16 text-[13px] text-sub">{s.panels.body}</PanelBody>
              </Panel>
            </ShowcaseSection>

            <ShowcaseSection id="alerts" title={s.alerts.title}>
              <ShowcaseStack>
                <Alert variant="info" title={s.alerts.tipTitle}>{s.alerts.tip}</Alert>
                <Alert variant="success" title={s.alerts.successTitle}>{s.alerts.success}</Alert>
                <Alert variant="warning" title={s.alerts.warningTitle}>{s.alerts.warning}</Alert>
                <Alert variant="danger" title={s.alerts.dangerTitle}>{s.alerts.danger}</Alert>
              </ShowcaseStack>
            </ShowcaseSection>

            <ShowcaseSection id="empty" title={s.empty.title}>
              <div className="rounded-lg border border-line-subtle bg-content">
                <EmptyState
                  title={s.empty.emptyTitle}
                  description={s.empty.emptyDescription}
                  actionLabel={s.empty.actionLabel}
                  actionHref="#/usability/studies"
                />
              </div>
            </ShowcaseSection>

            <ShowcaseSection id="loading" title={s.loading.title}>
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

            <ShowcaseSection id="progress" title={s.progress.title}>
              <div className="max-w-[320px] space-y-12">
                <Progress value={25} />
                <Progress value={60} />
                <Progress value={100} />
              </div>
            </ShowcaseSection>

            <ShowcaseSection id="links" title={s.links.title}>
              <ShowcaseRow>
                <Link href="#/">{s.links.defaultLink}</Link>
                <Link variant="accent" href="#/">{s.links.accent}</Link>
                <Link variant="subtle" href="#/">{s.links.subtle}</Link>
              </ShowcaseRow>
              <ShowcaseRow label={s.links.shortcuts}>
                <KbdCombo keys={['⌘', 'K']} />
                <KbdCombo keys={['G', 'S']} />
                <Kbd>Esc</Kbd>
              </ShowcaseRow>
            </ShowcaseSection>

            <ShowcaseSection id="slider" title={s.slider.title}>
              <ShowcaseRow>
                <Slider
                  value={sliderVal}
                  onChange={(event) => setSliderVal(Number(event.target.value))}
                  aria-label={s.slider.title}
                />
                <span className="text-[12px] tabular-nums text-faint">{sliderVal}</span>
              </ShowcaseRow>
            </ShowcaseSection>

            <ShowcaseSection id="toggle" title={s.toggle.title}>
              <ToggleGroup
                value={toggleView}
                onChange={setToggleView}
                options={[
                  { value: 'list', label: s.toggle.list },
                  { value: 'grid', label: s.toggle.grid },
                  { value: 'board', label: s.toggle.board },
                ]}
              />
            </ShowcaseSection>

            <ShowcaseSection id="overlays" title={s.overlays.title}>
              <ShowcaseRow>
                <Tooltip label={s.overlays.copy}>
                  <IconButton variant="filled" label={s.overlays.copy}>
                    <Kbd>C</Kbd>
                  </IconButton>
                </Tooltip>
                <Popover
                  label={s.overlays.popover}
                  trigger={<Button variant="secondary">{s.overlays.openPopover}</Button>}
                >
                  <div className="w-[200px] p-8">
                    <Text variant="label">{s.overlays.filters}</Text>
                    <Input className="mt-8" placeholder="…" />
                  </div>
                </Popover>
                <Button variant="secondary" onClick={() => setSheetOpen(true)}>{s.overlays.openSheet}</Button>
                <Button variant="danger" onClick={() => setAlertOpen(true)}>{s.overlays.openAlert}</Button>
              </ShowcaseRow>
              <ShowcaseRow label={s.overlays.hoverCard}>
                <HoverCard trigger="@workspace">
                  <strong>Workspace</strong>
                  <br />
                  {s.overlays.filterBody}
                </HoverCard>
              </ShowcaseRow>
              <Sheet open={sheetOpen} onClose={() => setSheetOpen(false)} title={s.overlays.filters} description={s.overlays.filterBody}>
                <FieldGroup>
                  <Field>
                    <Label>{s.forms.type}</Label>
                    <Select defaultValue="usability">
                      <option value="usability">{s.forms.usabilityStudy}</option>
                    </Select>
                  </Field>
                </FieldGroup>
              </Sheet>
              <AlertDialog
                open={alertOpen}
                onClose={() => setAlertOpen(false)}
                onConfirm={() => setAlertOpen(false)}
                title={s.overlays.deleteTitle}
                description={s.overlays.deleteDesc}
                cancelLabel={s.overlays.cancel}
                confirmLabel={s.overlays.delete}
                destructive
              />
            </ShowcaseSection>

            <ShowcaseSection id="breadcrumb" title={s.breadcrumb.title}>
              <ShowcaseStack>
                <Breadcrumb items={[
                  { label: s.breadcrumb.home, href: '#/' },
                  { label: s.breadcrumb.workspace, href: '#/projects' },
                  { label: s.breadcrumb.current },
                ]}
                />
                <Pagination page={page} totalPages={5} onPageChange={setPage} />
              </ShowcaseStack>
            </ShowcaseSection>

            <ShowcaseSection id="accordion" title={s.accordion.title}>
              <div className="grid gap-12 lg:grid-cols-2">
                <Accordion items={[
                  { id: '1', title: s.accordion.q1, content: s.accordion.a1, defaultOpen: true },
                  { id: '2', title: s.accordion.q2, content: s.accordion.a2 },
                ]}
                />
                <Collapsible title={s.accordion.advanced} count={s.accordion.count}>
                  <Input placeholder="top_p" readOnly defaultValue="0.9" />
                  <Input placeholder="top_k" readOnly defaultValue="40" />
                </Collapsible>
              </div>
            </ShowcaseSection>

            <ShowcaseSection id="command" title={s.command.title}>
              <ShowcaseRow>
                <Button variant="secondary" onClick={() => setCmdOpen(true)}>
                  {s.command.openCommand}
                  <KbdCombo keys={['⌘', 'K']} />
                </Button>
                <ContextMenu
                  className="h-[80px] w-[220px]"
                  items={[
                    { label: s.command.copy, shortcut: '⌘C' },
                    { label: s.command.regenerate, shortcut: '⌘R' },
                    { label: s.command.delete, destructive: true },
                  ]}
                >
                  {s.command.contextHint}
                </ContextMenu>
              </ShowcaseRow>
              <CommandPalette
                open={cmdOpen}
                onClose={() => setCmdOpen(false)}
                placeholder={s.search.placeholder}
                items={[
                  { id: 'home', label: s.command.goHome, shortcut: 'G H' },
                  { id: 'settings', label: s.command.settings, shortcut: 'G S' },
                ]}
              />
            </ShowcaseSection>

            <ShowcaseSection id="stats" title={s.stats.title}>
              <div className="grid gap-12 lg:grid-cols-3">
                <StatCard label={s.stats.requests} value="6,924" hint="▲ 12%" />
                <StatCard label={s.stats.tokens} value="14.0M" hint="▲ 3%" />
                <StatCard label={s.stats.latency} value="820ms" hint="▼ 40ms" />
              </div>
              <div className="mt-16 max-w-[400px]">
                <ModuleCard
                  title={s.stats.studies}
                  description={s.stats.studiesDesc}
                  href="#/usability/studies"
                  icon={StudiesIcon}
                  tone="usability"
                  metrics={[
                    { label: s.stats.metricSessions, value: '24' },
                    { label: s.stats.metricAvg, value: '8.2' },
                  ]}
                />
              </div>
              <ShowcaseRow label={s.stats.aspectRatio}>
                <AspectRatio>
                  <div className="flex h-full items-center justify-center bg-well text-[12px] text-faint">16:9</div>
                </AspectRatio>
              </ShowcaseRow>
            </ShowcaseSection>

            <ShowcaseSection id="chat" title={s.chat.title}>
              <ShowcaseStack>
                <ChatBubble
                  role="user"
                  avatar={<Avatar size="sm" initials="AJ" />}
                  meta={s.chat.metaUser}
                >
                  {s.chat.userMsg}
                </ChatBubble>
                <ChatBubble
                  role="assistant"
                  avatar={<Avatar size="sm" initials="AI" className="bg-accent" />}
                  meta={s.chat.metaAi}
                >
                  {s.chat.aiMsg}
                </ChatBubble>
                <TypingIndicator />
                <PromptBar
                  value={prompt}
                  onChange={(event) => setPrompt(event.target.value)}
                  placeholder={s.chat.promptPlaceholder}
                  onSubmit={() => setPrompt('')}
                />
                <AiResponseCard title={s.chat.aiTitle} model={s.chat.model} onCopy={() => {}}>
                  {s.chat.aiBody}
                </AiResponseCard>
              </ShowcaseStack>
            </ShowcaseSection>

            <ShowcaseSection id="dividers" title={s.dividers.title}>
              <div className="max-w-[320px]">
                <p className="text-[13px] text-body">{s.dividers.above}</p>
                <Divider />
                <p className="text-[13px] text-body">{s.dividers.below}</p>
              </div>
            </ShowcaseSection>
          </div>
        </div>
      </div>
      </ToastProvider>
    </DesignSystemLayout>
  )
}
