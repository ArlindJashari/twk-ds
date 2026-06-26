/** Merge class names — falsy values dropped. */
export function cn(...parts) {
  return parts.filter(Boolean).join(' ')
}
