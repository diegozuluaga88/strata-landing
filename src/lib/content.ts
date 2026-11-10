import type { ComponentType, SVGProps } from 'react'
import {
  SparklesIcon,
  Squares2X2Icon,
  Square3Stack3DIcon,
  DocumentMagnifyingGlassIcon,
  ScaleIcon,
  BuildingOffice2Icon,
} from '@heroicons/react/24/outline'

// Mirrors apps/landing/src/lib/content.ts on development. Production uses lucide-react;
// the prototype maps each icon to its heroicons equivalent.
type Icon = ComponentType<SVGProps<SVGSVGElement>>

export interface Pillar {
  title: string
  body: string
  icon: Icon
}

export interface Product {
  name: string
  tagline: string
  points: string[]
  href: string
  icon: Icon
}

export const pillars: Pillar[] = [
  {
    title: 'AI + Experts',
    body: 'Strata automates the routine workflows — order processing, acknowledgment matching, and quoting — so your experts handle only the exceptions that require human judgment.',
    icon: SparklesIcon,
  },
  {
    title: 'One Ecosystem',
    body: 'Every step from quote to PO to invoice flows through a single connected operational layer — entered once, never re-typed, visible in real time across manufacturers, dealers, rep groups, and installers.',
    icon: Squares2X2Icon,
  },
  {
    title: 'On Your Tools',
    body: 'Strata integrates with your existing ERP, CRM, and ordering platforms — including e-manage|ONE, CFI Suite, Hedberg, and ProjectMatrix. No rip-and-replace required.',
    icon: Square3Stack3DIcon,
  },
]

export const products: Product[] = [
  {
    name: 'Quote Converter',
    tagline:
      "Strata's Quote Converter automatically transforms any RFQ PDF or email into a structured, import-ready quote — reading line items, mapping them to your catalog, and drafting the complete quote without copy-paste or manual re-entry.",
    points: [
      'Reads PDFs, emails, and price lists automatically',
      'Maps line items directly to your product catalog',
      'Drafts the complete quote — no manual data entry',
    ],
    href: '/quote-converter/',
    icon: DocumentMagnifyingGlassIcon,
  },
  {
    name: 'Expert Hub',
    tagline:
      "Strata's Expert Hub checks vendor acknowledgments against your POs in seconds — field by field — automatically resolving routine exceptions and escalating only what genuinely needs a human decision.",
    points: [
      'Field-by-field PO vs. acknowledgment matching',
      'Auto-resolves routine exceptions instantly',
      'Escalates only what requires human review',
    ],
    href: '/expert-hub/',
    icon: ScaleIcon,
  },
  {
    name: 'Dealer Hub',
    tagline:
      "Strata's Dealer Hub gives dealers a single place to track acknowledgments and transactions end to end — every document, status, and action in one connected view.",
    points: [
      'Tracks every acknowledgment and transaction in one place',
      'Surfaces document status without digging through email',
      'Connects directly into the same Strata operational layer',
    ],
    href: '/dealer-hub/',
    icon: BuildingOffice2Icon,
  },
  {
    name: 'Manufacturer Hub',
    tagline:
      "Strata's Dealer Hub gives dealers a single place to track acknowledgments and transactions end to end — every document, status, and action in one connected view.",
    points: [
      'Tracks every acknowledgment and transaction in one place',
      'Surfaces document status without digging through email',
      'Connects directly into the same Strata operational layer',
    ],
    href: '/mfg-hub/',
    icon: BuildingOffice2Icon,
  },
]

export const demoHub = {
  title: 'See Strata in action',
  body: 'Try guided demos built for your workflows',
  cta: 'Open demos',
}

// Per-environment URL baked in at build time (GitHub Environment var); unset/blank = hidden.
export function getDemoHubUrl(): string | undefined {
  const url = import.meta.env.VITE_DEMO_HUB_URL?.trim()
  return url || undefined
}
