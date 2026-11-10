import { CubeIcon } from '@heroicons/react/24/outline'
import { products as baseProducts, type Product } from './content'

// Prototype-only: `?hubs=5` (or any N) pads the list with placeholder hubs so the layout
// can be checked as hubs are added, without touching the real list in content.ts.
const placeholder = (n: number): Product => ({
  name: `Test Hub ${n}`,
  tagline:
    'Placeholder hub used to check that the layout keeps working as new experiences are added to the list.',
  points: ['Placeholder point one', 'Placeholder point two', 'Placeholder point three'],
  href: '#',
  icon: CubeIcon,
})

function requestedCount(): number {
  if (typeof window === 'undefined') return 0
  const n = Number(new URLSearchParams(window.location.search).get('hubs'))
  return Number.isInteger(n) && n > 0 ? n : 0
}

const target = requestedCount()

export const products: Product[] =
  target > baseProducts.length
    ? [
        ...baseProducts,
        ...Array.from({ length: target - baseProducts.length }, (_, i) =>
          placeholder(baseProducts.length + i + 1),
        ),
      ]
    : baseProducts
