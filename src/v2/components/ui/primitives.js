export const focusRing = 'v2-focus-ring'

export const btnBase = [
  'inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap',
  'text-sm font-medium leading-none transition-colors',
  'rounded-[calc(var(--v2-radius)-2px)]',
  focusRing,
  'disabled:pointer-events-none disabled:opacity-50',
].join(' ')

export const inputBase = [
  'w-full rounded-[calc(var(--v2-radius)-2px)] border border-[hsl(var(--v2-input))]',
  'bg-[hsl(var(--v2-background))] px-3 py-2 text-sm text-[hsl(var(--v2-foreground))]',
  'placeholder:text-[hsl(var(--v2-muted-foreground))]',
  'transition-colors focus-visible:border-[hsl(var(--v2-ring))] focus-visible:ring-2 focus-visible:ring-[hsl(var(--v2-ring)/0.2)]',
  'disabled:cursor-not-allowed disabled:opacity-50',
  focusRing,
].join(' ')

export const toolbar = 'flex h-11 shrink-0 items-center justify-between px-4'
export const toolbarBordered = 'border-b border-[hsl(var(--v2-border))]'

export const navRow = [
  'group flex h-7 w-full items-center gap-2 rounded-md px-2.5 text-[13px] font-medium leading-none transition-colors',
  focusRing,
].join(' ')
