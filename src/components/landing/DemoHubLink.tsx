import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { demoHub, getDemoHubUrl } from '../../lib/content'

// Production wraps the anchor in the design-system <Button asChild>; the classes are the same.
export function DemoHubLink() {
  const url = getDemoHubUrl()
  if (!url) return null

  return (
    <div className="anim-fadeup anim-delay-2 mt-6 flex max-w-xl flex-wrap items-center gap-x-4 gap-y-3 border-t border-border pt-4">
      <p className="min-w-[15rem] flex-1 text-[13px] leading-relaxed text-muted-foreground">
        <span className="font-semibold text-foreground">{demoHub.title}</span> — {demoHub.body}
      </p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-[13px] font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
      >
        {demoHub.cta}
        <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
      </a>
    </div>
  )
}
