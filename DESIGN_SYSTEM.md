# TawakkalnaOS Design System

> **For AI agents:** Read this file before building any UI. Match Tawakkalna visual language exactly. Import primitives from `src/components/ui`. Never invent colors, radii, or spacing outside `src/theme.css` tokens.

## Philosophy

TawakkalnaOS follows **Tawakkalna's design language**: quiet surfaces, precise typography, pill controls, 28px interaction targets, hairline borders, and restrained accent color. The product shell (`AppShell`, `Sidebar`, `PageFrame`) already implements layout — new pages compose inside that shell using these tokens and components.

**Reference:** Live showcase: `#/designsystem`

---

## Stack

| Layer | Choice |
|-------|--------|
| Framework | React 19 + Vite SPA |
| Styling | Tailwind CSS v4 (`@theme` in `src/theme.css`) |
| Icons | `lucide-react` + `src/components/icons.jsx` |
| Routing | Hash routes (`#/path`) via `useHashRoute` |

---

## Tokens (`src/theme.css`)

### Surfaces

| Token | Use |
|-------|-----|
| `bg-shell` | App background, outer chrome |
| `bg-sidebar` | Sidebar background |
| `bg-content` | Main panel, cards |
| `bg-well` | Nested sections, group headers, table headers |
| `bg-surface` | Elevated pills, icon button filled state |
| `bg-hover` | Row/button hover |
| `bg-active` | Pressed, skeleton base |
| `bg-field` | Input backgrounds |

### Text

| Token | Use |
|-------|-----|
| `text-ink` | Primary headings, emphasis |
| `text-body` | Default body, page titles |
| `text-sub` | Descriptions, secondary copy |
| `text-faint` | Metadata, timestamps, placeholders |
| `text-muted` | Counts, de-emphasized data |
| `text-nav` / `text-nav-active` | Sidebar navigation |
| `text-pill-muted` | Inactive toolbar pills |

### Accent & semantic

| Token | Use |
|-------|-----|
| `bg-accent` / `text-onaccent` | Primary CTA, focus rings |
| `bg-accent-soft` | Selection, soft highlights |
| `bg-success` / `bg-success-soft` | Done, positive status |
| `bg-warning` / `bg-warning-soft` | In progress, caution |
| `bg-danger` / `bg-danger-soft` | Errors, destructive |
| `bg-priority-*` | Issue/story priority badges |

### Borders & shadows

| Utility | Use |
|---------|-----|
| `border-line` | Standard dividers |
| `border-line-subtle` | Card borders, inputs |
| `shadow-stroke` / `shadow-stroke-faint` | Hairline ring on pills |
| `shadow-panel` | Toolbar pills, quick-link chips |
| `shadow-pop` | Dropdown menus |
| `shadow-modal` | Modals (future) |

### Typography

- **Font:** Inter Variable (`font-[inherit]` default)
- **Weights:** `font-normal` (400), `font-[450]` book, `font-medium` (500), `font-ui` (510), `font-semibold` (590)
- **Mono:** `font-berkeley` for IDs (`STY-12`, `SUR-4`), shortcuts
- **Scale:**
  - Page header: `text-[13px] font-medium text-body`
  - Section title: `text-[13px] font-ui text-ink`
  - Card title: `text-[15px] font-ui text-ink`
  - Body: `text-[13px] leading-[1.45]`
  - Caption: `text-[12px] text-faint`
  - Label: `text-[11px] font-medium uppercase tracking-wide text-faint`

### Spacing

`--spacing: 1px` — Tailwind numbers are pixels: `px-8` = 8px, `gap-12` = 12px, `p-16` = 16px, `py-28` = 28px.

**Preferred rhythm:** 4, 6, 8, 10, 12, 16, 24, 28, 32.

### Radii

`rounded-xs` (4) · `rounded-sm` (5) · `rounded-md` (6) · `rounded-lg` (8) · `rounded-xl` (10) · `rounded-panel` (12) · `rounded-full` (pills)

---

## Layout patterns

### Page structure

```jsx
import PageFrame from '../components/PageFrame.jsx'

export default function MyPage() {
  return (
    <PageFrame toolbar={<MyToolbar />}>
      <div className="flex flex-col gap-28 px-24 py-28">
        {/* content */}
      </div>
    </PageFrame>
  )
}
```

### Toolbar (44px)

Use `Toolbar` from `src/components/ui/Tabs.jsx` or existing `ViewToolbar` exports. Left: pill tabs. Right: 28px circle icon buttons.

### Content header (44px)

`ContentHeader` — title left, optional circular action right. Border bottom `border-line`.

### Sidebar rows (28px)

`h-[28px] rounded-lg pl-10 pr-[9px] text-[13px] font-medium`. Active: `bg-nav-active-bg text-nav-active`.

---

## Components (`src/components/ui`)

Always import from the barrel:

```jsx
import { Button, Input, Badge, Table, TableHead, ... } from '../components/ui/index.js'
```

### Buttons

| Variant | When |
|---------|------|
| `primary` | Main CTA (accent) |
| `secondary` | Secondary actions, bordered |
| `ghost` | Tertiary, inline |
| `ink` | High-emphasis create actions (dark) |
| `soft` | Accent-tinted secondary |
| `danger` | Destructive confirm |

Sizes: `sm` (24px), `md` (28px), `lg` (30px). Always `rounded-full`.

### Icon buttons

28px circles. `default` = transparent toolbar style. `filled` = white surface + shadow (display/filter). Use `label` for a11y.

### Forms

Wrap in `Field` + `Label` + `FieldHint` / `FieldError`. Inputs use `bg-field`, `rounded-lg`, `text-[13px]`.

### Tabs

Pill tabs: `Tab`, `TabList`, `TabPanel`. Active = `bg-tab-active text-ink`. Inactive = `bg-content text-faint`.

### Tables

For lists of studies, features, users, stories:

```jsx
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>ID</TableHead>
      ...
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow interactive>
      <TableCell className="font-berkeley text-faint">STY-1</TableCell>
      ...
    </TableRow>
  </TableBody>
</Table>
```

Row height ~44px feel via `py-10`. Hover: `interactive` prop.

### Issue rows (`IssueRow`)

Tawakkalna issues list row — `src/components/ui/ListRow.jsx` + `primitives.js`.

| Token | Value |
|-------|-------|
| Height | `44px` |
| Outer inset (card lists) | `mx-8` — highlight does not touch container edges |
| Inner padding | `pl-[16px] pr-[16px]` — symmetric; date gap matches checkbox side |
| Column gap | `8px` between checkbox, priority, id, status, title |
| Checkbox slot | `18px` |
| Icon slots | `16px` |
| Date | `12px`, `font-[450]`, `whitespace-nowrap` |

Hover/selected backgrounds use a `::before` layer inside the row bounds, not full card width.

### Cards

`Card` + `CardMedia` + `CardBody` + `CardTitle` + `CardDescription` + `CardFooter`. Home action cards use `rounded-[14px]` — prefer `Card` for new work.

### Badges & tags

- **Badge:** status, priority (variants: `urgent`, `high`, `medium`, `low`, `none`, `success`, `warning`, `danger`)
- **Tag:** navigational chips with optional icon (quick links pattern)

### Menus

Use existing `Menu` from `src/components/Menu.jsx`. Variants: `default`, `workspace`.

### Empty states

`EmptyState` with title, description, optional CTA. Center in bordered `bg-content` panel.

### Loading

`Skeleton` + `SkeletonGroup`. Uses `.skeleton-shimmer` from theme.

---

## Domain components (product-specific)

| Area | Existing | Build with |
|------|----------|------------|
| Home hub | `HomeActionCard`, quick-link tags | `Card`, `Tag`, `Button` |
| Issues list | `Issues.jsx` row pattern | `Table` or custom 44px rows |
| Search | `Search.jsx` command palette | `Input`, `Tab`, `KbdCombo` |
| Settings | `SettingsLayout` | `Field`, `Input`, `Select` |
| Studies / Personas / Directory | Placeholder pages | `Table`, `EmptyState`, `Badge` |
| User stories | Not built | `Card`, `Textarea`, `Badge` |

---

## Rules for new pages

1. **Shell:** Never rebuild sidebar/header — use `AppShell` via `App.jsx` routing.
2. **Tokens only:** No raw `#hex` in JSX. Extend `theme.css` if a new semantic color is needed.
3. **Controls:** 28px height for pills/buttons in toolbars. 44px for toolbars and list rows.
4. **Focus:** `focus-visible:ring-2 focus-visible:ring-accent` on all interactives.
5. **Icons:** 14px in nav/toolbar, `strokeWidth={1.5}` for Lucide.
6. **Links:** Hash routes `href="#/path"`. Use `Link` component for inline text links.
7. **Keyboard:** Show shortcuts via `Kbd` / `KbdCombo` where appropriate (⌘K search, etc.).
8. **Motion:** Respect `prefers-reduced-motion`. Use existing keyframes only.
9. **Spacing:** Page padding `px-24 py-28`. Section gaps `gap-28`.
10. **Compose:** Prefer `ui/*` primitives over one-off styled `<button>`.

### Example: Dashboard page

```jsx
import PageFrame from '../components/PageFrame.jsx'
import { Button, Card, CardBody, CardTitle, CardDescription, Tag, Text } from '../components/ui/index.js'

export default function Dashboard() {
  return (
    <PageFrame>
      <div className="flex flex-col gap-28 px-24 py-28">
        <div>
          <Text variant="title" as="h1">Dashboard</Text>
          <Text variant="sub" className="mt-6">Overview of your workspace.</Text>
        </div>
        <div className="grid gap-12 lg:grid-cols-3">
          {/* stat cards, recent studies table, etc. */}
        </div>
      </div>
    </PageFrame>
  )
}
```

---

## File map

```
src/
  theme.css              # All design tokens
  components/
    ui/                  # Primitives (import from index.js)
    AppShell.jsx         # Layout shell
    Sidebar.jsx          # Navigation
    PageFrame.jsx        # Page wrapper
    ViewToolbar.jsx      # Domain toolbars
    Menu.jsx             # Dropdown menus
  pages/
    DesignSystem.jsx     # Live component showcase (#/designsystem)
  lib/
    cn.js                # className helper
    nav.js               # Route titles & nav tree
```

---

## Recommendations

1. **Migrate inline buttons** in `HomeActionCard` to `Button` variants for consistency.
2. **Wire orphan pages** (`Issues`, `Inbox`, `Reviews`) using `Table` + `Toolbar` patterns.
3. **Add Modal/Dialog** primitive next — use `shadow-modal`, `rounded-panel`, 32px header.
4. **Add Toast** for async feedback (study saved, sync error).
5. **Command palette** — elevate Search to global ⌘K overlay using existing search UI.
6. **Dark mode** — defer; tokens are light-only today. Add `[data-theme=dark]` block when ready.
7. **Storybook optional** — `#/designsystem` is the living catalog; keep it updated when adding primitives.

---

## Checklist before shipping UI

- [ ] Uses tokens from `theme.css`
- [ ] Imports from `src/components/ui`
- [ ] 28px / 44px control heights respected
- [ ] Focus rings on interactives
- [ ] Hash links for internal navigation
- [ ] Empty/loading/error states considered
- [ ] New primitive added to `DesignSystem.jsx` showcase
- [ ] This doc updated if new tokens or patterns added
