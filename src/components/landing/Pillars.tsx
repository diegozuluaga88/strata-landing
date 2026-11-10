import clsx from 'clsx'
import { pillars } from '../../lib/content'

// Pillars run as one full-width band under the hero and the hubs (three columns from 640px).
export function Pillars({ className }: { className?: string }) {
  return (
    <dl
      className={clsx(
        'anim-fadeup anim-delay-2 grid gap-x-10 gap-y-5 border-t border-border pt-8 sm:grid-cols-3',
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
          <dd className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{pillar.body}</dd>
        </div>
      ))}
    </dl>
  )
}
