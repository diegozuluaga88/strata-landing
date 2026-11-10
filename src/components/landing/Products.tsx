import { ArrowRightIcon, CheckIcon } from '@heroicons/react/24/outline'
import { products } from '../../lib/preview'

export function Products() {
  return (
    <div className="anim-fadeup anim-delay-2 relative overflow-hidden rounded-3xl">
      <div
        className="absolute inset-0 scale-105 bg-[url('/login-bg.jpg')] bg-cover bg-center blur-[2px]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      <div className="text-legible relative p-4 sm:p-5">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-white/80">
          The system in action
        </p>

        <div className="grid gap-3">
          {products.map((product) => (
            <article
              key={product.name}
              className="group rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-white/25 hover:bg-black/55"
            >
              <span className="mb-3 block h-1 w-8 rounded-full bg-primary" aria-hidden="true" />

              <div className="flex items-start gap-3">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/5">
                  <product.icon className="h-5 w-5 text-white" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h2 className="font-brand text-base font-bold leading-tight text-white">
                    {product.name}
                  </h2>
                  <p className="mt-1 text-[13px] font-medium leading-snug text-white/80">
                    {product.tagline}
                  </p>
                </div>
              </div>

              <ul className="mt-3 grid gap-1">
                {product.points.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-[13px] text-white/90">
                    <CheckIcon className="h-3.5 w-3.5 shrink-0 text-white/70" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>

              <a
                href={product.href}
                aria-label={`Open ${product.name}`}
                className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-[13px] font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Open {product.name}
                <ArrowRightIcon
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
