import clsx from 'clsx'
import { pillars } from '../../lib/content'

// Pillars sit beside the hero at desktop (one stacked list) and in three columns on tablet.
export function Pillars({ className }: { className?: string }) {
  return (
    <dl
      className={clsx(
        'anim-fadeup anim-delay-1 grid gap-x-6 gap-y-5 sm:grid-cols-3 lg:grid-cols-1 lg:content-center lg:gap-y-4 lg:border-l lg:border-border lg:pl-10',
        className,
      )}
    >
      {pillars.map((pillar) => (
        <div key={pillar.title}>
          <dt className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-primary">
              <pillar.icon className="h-4 w-4 text-primary-foreground" aria-hidden="true" />
            </span>
            {pillar.title}
          </dt>
          <dd className="mt-2 text-[13px] leading-relaxed text-muted-foreground lg:mt-1 lg:pl-9">
            {pillar.body}
          </dd>
        </div>
      ))}
    </dl>
  )
}
