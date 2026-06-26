export const focusRing = 'v2-focus-ring'

export const btnBase = [
  'inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap',
  'text-sm font-medium leading-none transition-colors',
  'rounded-[calc(var(--radius)-2px)]',
  focusRing,
  'disabled:pointer-events-none disabled:opacity-50',
].join(' ')

export const inputBase = [
  'w-full rounded-[calc(var(--radius)-2px)] border border-[hsl(var(--input))]',
  'bg-[hsl(var(--background))] px-3 py-2 text-sm text-[hsl(var(--foreground))]',
  'placeholder:text-[hsl(var(--muted-foreground))]',
  'transition-colors focus-visible:border-[hsl(var(--ring))] focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring)/0.2)]',
  'disabled:cursor-not-allowed disabled:opacity-50',
  focusRing,
].join(' ')

export const toolbar = 'flex h-11 shrink-0 items-center justify-between px-4'
export const toolbarBordered = 'border-b border-[hsl(var(--border))]'

export const navRow = [
  'group flex h-7 w-full items-center gap-2 rounded-md px-2.5 text-[13px] font-medium leading-none transition-colors',
  focusRing,
].join(' ')
