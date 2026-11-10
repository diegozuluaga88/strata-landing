import { useState } from 'react'
import clsx from 'clsx'
import { ArrowRightIcon, CheckIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { products } from '../../lib/preview'

const slug = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-')

// One compact row per hub: name, its first point and the Open button are always visible;
// the full description and points open in place (one hub at a time).
export function Products({ className }: { className?: string }) {
  const [openHub, setOpenHub] = useState<string | null>(null)

  return (
    <section
      aria-labelledby="hubs-heading"
      className={clsx('anim-fadeup anim-delay-1 relative overflow-hidden rounded-3xl', className)}
    >
      <div
        className="absolute inset-0 scale-105 bg-[url('/login-bg.jpg')] bg-cover bg-center blur-[2px]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      <div className="text-legible relative p-4 sm:p-5">
        <p
          id="hubs-heading"
          className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-white/80"
        >
          The system in action
        </p>

        <div className="grid gap-2">
          {products.map((product) => {
            const isOpen = openHub === product.name
            const detailsId = `hub-details-${slug(product.name)}`

            return (
              <article
                key={product.name}
                className={clsx(
                  'group rounded-2xl border bg-black/40 backdrop-blur-sm transition-colors duration-200 hover:border-white/25 hover:bg-black/55',
                  isOpen ? 'border-white/25' : 'border-white/10',
                )}
              >
                <div className="flex flex-wrap items-center gap-x-4 gap-y-3 p-3 sm:flex-nowrap sm:p-4">
                  <h2 className="min-w-0 basis-full sm:flex-1 sm:basis-auto">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={detailsId}
                      onClick={() => setOpenHub(isOpen ? null : product.name)}
                      className="flex w-full min-w-0 cursor-pointer items-center gap-3 rounded-xl text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                    >
                      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/5">
                        <product.icon className="h-5 w-5 text-white" aria-hidden="true" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span
                          data-hub-name
                          className="block font-brand text-base font-bold leading-tight text-white"
                        >
                          {product.name}
                        </span>
                        <span className="mt-0.5 line-clamp-2 text-[13px] font-medium leading-snug text-white/75">
                          {product.points[0]}
                        </span>
                      </span>
                      <ChevronDownIcon
                        className={clsx(
                          'h-4 w-4 shrink-0 text-white/70 transition-transform duration-200',
                          isOpen && 'rotate-180',
                        )}
                        aria-hidden="true"
                      />
                    </button>
                  </h2>

                  <a
                    href={product.href}
                    aria-label={`Open ${product.name}`}
                    className="ml-12 inline-flex shrink-0 items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-[13px] font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:ml-0 sm:min-w-[13rem] sm:justify-center"
                  >
                    Open {product.name}
                    <ArrowRightIcon
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </div>

                <div
                  id={detailsId}
                  hidden={!isOpen}
                  className="border-t border-white/10 px-3 pb-4 pt-3 sm:px-4 sm:pl-16"
                >
                  <p className="text-[13px] font-medium leading-snug text-white/80">
                    {product.tagline}
                  </p>
                  <ul className="mt-3 grid gap-1">
                    {product.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-[13px] leading-snug text-white/90">
                        <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-white/70" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
