/** Tawakkalna-exact shared class strings — single source of truth. */

export const focusRing = 'outline-none focus-visible:ring-2 focus-visible:ring-accent'

export const pill =
  'flex h-[28px] shrink-0 items-center gap-6 rounded-full border-[0.5px] border-transparent px-10 text-[12px] font-medium leading-none transition-colors'

export const pillActive = 'bg-tab-active text-ink'
export const pillInactive = 'bg-tab-inactive font-medium text-tab-inactive-text hover:bg-hover hover:text-ink'
export const pillMuted = 'bg-content text-pill-muted hover:bg-hover hover:text-ink'
export const pillSurface = 'bg-content text-ink hover:bg-hover'

export const iconBtn =
  'inline-flex shrink-0 items-center justify-center rounded-full border-[0.5px] border-transparent transition-colors'

export const iconBtnSm = 'size-[24px]'
export const iconBtnMd = 'size-[28px]'
export const iconBtnLg = 'size-[32px]'

export const iconBtnDefault = 'bg-transparent text-icon-toolbar hover:bg-hover hover:text-ink'
export const iconBtnFilled = 'bg-surface text-pill-muted shadow-panel hover:bg-hover hover:text-body'
export const iconBtnAccent = 'bg-accent text-onaccent hover:bg-accent-hover'

export const toolbar = 'flex h-[44px] shrink-0 items-center justify-between px-8'
export const toolbarBordered = 'border-b border-line'

export const issueRowInsetX = 'ps-[16px] pe-[16px]'

export const listRow =
  'group relative mx-8 flex h-[44px] items-center rounded-lg text-ink transition-colors before:pointer-events-none before:absolute before:inset-0 before:z-0 before:rounded-lg before:opacity-0 before:transition-opacity before:content-[""] hover:before:bg-hover hover:before:opacity-100 data-[selected=true]:before:bg-row-selected data-[selected=true]:before:opacity-100 [&>*]:relative [&>*]:z-[1]'

export const issueRowLead = 'flex min-w-0 flex-1 items-center gap-8'
export const issueRowSlotCheckbox = 'flex w-[18px] shrink-0 items-center justify-center'
export const issueRowSlotIcon = 'flex w-[16px] shrink-0 items-center justify-center text-faint'
export const issueRowId = 'shrink-0 whitespace-nowrap text-[13px] font-[450] leading-none text-issue-meta'
export const issueRowTitle = 'min-w-0 flex-1 truncate text-[13px] font-medium leading-none text-ink'
export const issueRowMeta = 'flex shrink-0 items-center gap-8 ps-8'
export const issueRowDate = 'shrink-0 whitespace-nowrap text-[12px] font-[450] leading-none tabular-nums text-issue-meta'

export const groupHeader =
  'flex h-[36px] items-center gap-8 rounded-lg bg-well pe-8'

export const navRow =
  'group flex h-[28px] w-full items-center gap-8 rounded-lg ps-10 pe-[9px] text-[13px] font-medium leading-none transition-colors'

export const navActive = 'bg-nav-active-bg text-nav-active'
export const navIdle = 'text-nav hover:bg-shell-hover hover:text-nav-active'

export const inputBase =
  'w-full rounded-lg border border-line-subtle bg-field text-ink transition-colors placeholder:text-faint focus:border-accent focus:ring-2 focus:ring-accent/20 disabled:cursor-not-allowed disabled:opacity-50'

export const menuPanel =
  'min-w-[210px] rounded-lg bg-content p-0 pb-[6px] pt-[6px] shadow-pop'

export const menuPanelWorkspace =
  'w-[226px] rounded-panel border-[0.5px] border-line bg-surface p-0 pb-[6px] pt-[6px] shadow-[0_6px_18px_rgba(0,0,0,0.02),0_3px_9px_rgba(0,0,0,0.04)]'

export const menuItemInset = 'px-[6px]'

export const menuItemInner =
  'relative flex h-[32px] w-full items-center gap-8 rounded-lg px-[8px] pe-[12px] text-start text-[13px] font-normal leading-[19.5px] text-ink outline-none transition-colors hover:bg-menu-hover focus-visible:bg-menu-hover'

export const menuItem = menuItemInner

export const menuItemWorkspace = menuItemInner

export const modalOverlay = 'fixed inset-0 z-50 flex items-center justify-center bg-ink/30 p-16 backdrop-blur-[1px]'
export const modalPanel = 'w-full max-w-[480px] overflow-hidden rounded-panel border-[0.5px] border-line bg-content shadow-modal'
