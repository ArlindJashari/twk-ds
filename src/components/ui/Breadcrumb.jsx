import Link from './Link.jsx'

export default function Breadcrumb({ items, className }) {
  return (
    <nav aria-label="Breadcrumb" className={['flex flex-wrap items-center gap-6 text-[12px]', className].filter(Boolean).join(' ')}>
      {items.map((item, index) => (
        <span key={item.label} className="flex items-center gap-6">
          {index > 0 ? <span className="text-faint" aria-hidden>/</span> : null}
          {item.href ? (
            <Link href={item.href} variant="subtle">{item.label}</Link>
          ) : (
            <span className="font-medium text-ink" aria-current="page">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
