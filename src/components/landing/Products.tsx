import type { CSSProperties } from 'react'
import clsx from 'clsx'
import { ArrowRightIcon, CheckIcon } from '@heroicons/react/24/outline'
import { products } from '../../lib/preview'

// Up to four hubs share one row; past that the rows stay balanced (5 → 3 + 2, 6 → 3 + 3).
function columnsFor(count: number) {
  return count <= 4 ? count : Math.ceil(count / 2)
}

export function Products({ className }: { className?: string }) {
  const style = { '--hub-cols': columnsFor(products.length) } as CSSProperties

  return (
    <section
      aria-labelledby="hubs-heading"
      className={clsx('anim-fadeup anim-delay-2 relative overflow-hidden rounded-3xl', className)}
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

        <div className="hub-grid" style={style}>
          {products.map((product) => (
            <article
              key={product.name}
              className="group flex flex-col rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-white/25 hover:bg-black/55"
            >
              <span className="mb-3 block h-1 w-8 rounded-full bg-primary" aria-hidden="true" />

              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/5">
                  <product.icon className="h-5 w-5 text-white" aria-hidden="true" />
                </span>
                <h2 className="font-brand text-base font-bold leading-tight text-white">
                  {product.name}
                </h2>
              </div>

              <p className="mt-3 text-[13px] font-medium leading-snug text-white/80">
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

              <div className="mt-auto pt-4">
                <a
                  href={product.href}
                  aria-label={`Open ${product.name}`}
                  className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-[13px] font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Open {product.name}
                  <ArrowRightIcon
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
