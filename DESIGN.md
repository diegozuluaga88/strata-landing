# DESIGN.md — Strata Design System (for AI design skills)

This file lets design skills (Impeccable, Taste, UI UX Pro Max) **inherit** the Strata
design system instead of inventing one. Source of truth: `Strata Design System/strata-ds/governance/*`
and `src/styles/tokens/*`. When in doubt, query the `strata-ds` MCP (`get_laws`, `get_tokens`, `get_anti_patterns`).

## Golden rule
Never hardcode hex colors, raw Tailwind state classes (`green-500`, `red-500`), or use the lime
brand as text. Always use semantic tokens.

## The 7 LAWS (absolute)
1. **No hardcoded colors / raw Tailwind state colors** — use semantic tokens (`bg-primary`, `text-foreground`).
2. **Lime (`brand-300` `#E6F993`) is never text** — only: CTA button bg, thin active/decorative border, icon bg, focus ring. (Contrast 1.8:1 fails WCAG.)
3. **Never white text on lime** — always `text-primary-foreground` (`#02060C`) on `bg-primary`.
4. **Token layering** — prefer Semantic > Brand primitive > Neutral primitive.
5. **No manual `dark:` classes** — semantic tokens already resolve light/dark. Toggle the `.dark` class only.
6. **Use only the `--color-*` namespace** (not legacy `--primary: #27272a`).
7. **Every interactive element needs a hover state** (`hover:* transition-colors`).

## Semantic tokens (light / dark)
| Token | Light | Dark | Use |
|---|---|---|---|
| `bg-background` | `#EBECEE` | `#02060C` | page root |
| `bg-card` | `#fafafa` | `#0B0F1A` | cards/panels (border-defined in dark) |
| `bg-muted` / `bg-secondary` / `bg-accent` | `#fafafa` | `#141E2C` | raised/hover surfaces |
| `text-foreground` | `#02060C` | `#EBECEE` | body & headings |
| `text-muted-foreground` | `#616A76` | `#B4BBC2` | secondary text |
| `bg-primary` | `#E6F993` | `#C3E433` | primary CTA / lime accent |
| `text-primary-foreground` | `#02060C` | `#02060C` | text/icon on lime |
| `border-border` | `#D0D4D8` | `#141E2C` | 1px borders |

Fonts: `font-brand` = PP Monument Extended (headlines), `font-sans` = Inter (body).
Note: `success`/`warning`/`info`/`ai` are NOT mapped in this project's `tailwind.config.js` — do not use `text-success` etc. here.

## Anti-patterns to avoid (from governance)
- `text-green-500` / `text-red-500` → use semantic tokens.
- `bg-white` / `bg-[#EBECEE]` → use `bg-background` / `bg-card`.
- Lime as text on white, or lime as a full section background.
- `text-zinc-900 dark:text-white` per component → use `text-foreground`.
- Clickable cards without hover.
- More than one `bg-primary` **button** per section.

## Lime usage in THIS landing (restraint)
Lime appears only as: the primary CTA buttons ("Open …"), the 2px top accent border on product
cards, and focus rings. Icons and chips are neutral (`border-border`, `text-foreground`).
