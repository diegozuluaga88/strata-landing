# Strata Landing (reference)

Minimalist reference landing for the Strata ecosystem. Vite + React + TS + Tailwind, reusing the
Strata design-system tokens (`src/styles`). Light theme by default, dark via the nav toggle.

```bash
npm install
npm run dev      # http://localhost:8090
npm run build
```

- Content/data: `src/lib/content.ts` (mirrors production `apps/landing` on `development`)
- Components: `src/components/landing/` (`TopNav`, `Hero`, `DemoHubLink`, `Products`, `Footer`)
- Theme: `src/theme.tsx` (toggles `.dark`; default light)
- Design rules for AI skills: `DESIGN.md`; product brief: `PRODUCT.md`

Hub links are the production subpaths (`/dealer-hub/`…), so they only resolve on gostrata.app.

Prototype-only switches:
- `?hubs=5` (or any N) pads the hubs list with placeholder hubs (`src/lib/preview.ts`).
- `VITE_DEMO_HUB_URL=https://demo-qa.gostrata.app npm run dev` shows the Demo Hub link.

## Design skills (professional polish, bound to the Strata DS)

Three skills improve design quality. They are bound to Strata via `DESIGN.md` + `PRODUCT.md` so they
**inherit** our tokens and laws instead of inventing a look. Reusable across all Strata projects.

| Skill | Install | Use |
|---|---|---|
| **Impeccable** | `npx impeccable install` then `/impeccable init` (or `/plugin marketplace add pbakaus/impeccable`) | `/typeset`, `/colorize`, `/polish`, `/adapt`; **anti-slop gate**: `npx impeccable detect src/` |
| **UI UX Pro Max** | `/plugin marketplace add nextlevelbuilder/ui-ux-pro-max-skill` → `/plugin install ui-ux-pro-max@ui-ux-pro-max-skill` | layout intelligence, type pairing, a11y checks (contrast, focus, ARIA, touch targets) |
| **Taste** | `npx skills add Leonxlnx/taste-skill` (variant `minimalist`) | direction from brief, avoids templated UI, audit + pre-flight |

**Workflow:** Taste / UI UX Pro Max for direction & layout → Impeccable `/typeset` + `/colorize` +
`/polish` to refine to tokens → `npx impeccable detect src/` as the final gate (alongside the DS grep:
no hardcoded hex, no `*-500` state classes, no lime-as-text, no manual `dark:`).

> Note: installing these skills modifies your Claude Code / global config and pulls third-party
> packages — run the install steps intentionally. They were not auto-installed by the scaffold.
