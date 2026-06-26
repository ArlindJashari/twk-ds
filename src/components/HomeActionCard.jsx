import { PlusIcon, SparkleIcon } from './icons.jsx'
import Button from './ui/Button.jsx'

export default function HomeActionCard({
  title, description, href, illustration: Illustration,
}) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-[14px] border border-line-subtle bg-content shadow-stroke-faint">
      <div className="relative h-[184px] shrink-0 overflow-hidden bg-well">
        <Illustration />
      </div>
      <div className="flex flex-1 flex-col p-16">
        <h3 className="text-[15px] font-ui text-ink">{title}</h3>
        <p className="mt-6 min-h-[38px] text-[13px] leading-[1.45] text-sub">{description}</p>
        <div className="mt-16 flex flex-wrap items-center gap-8">
          <Button variant="ink" size="md" href={href} className="gap-4">
            <PlusIcon size={12} strokeWidth={2} />
            Create
          </Button>
          <Button variant="secondary" size="md" className="gap-6">
            <SparkleIcon size={12} strokeWidth={1.5} className="text-faint" />
            Generate example
          </Button>
        </div>
      </div>
    </article>
  )
}
