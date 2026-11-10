# PRODUCT.md — Strata landing brief (for AI design skills)

## What this is
A **reference landing page** for Strata. Minimalist, single-viewport-first, English copy,
light theme by default with a dark toggle. It explains the Strata ecosystem and presents the
Strata hubs. Production (gostrata.app, `apps/landing` in the product repo) was built from this
prototype; the prototype now mirrors production's `development` branch, so layout work is done
here first. No "Talk to an Expert" / Calendly yet.

## What Strata is
Strata is **not new software** — it is an **AI layer** that sits on top of the systems a contract
dealer or manufacturer already uses (Core, eManage, QuickBooks, Outlook). It removes manual
re-entry: data is entered once and flows from quote → PO → invoice across systems. Routine work
is automated; experts only handle the real exceptions. It lives inside the tools teams already use
(Outlook, Teams, Excel, Copilot).

## Audience & tone
- Audience: commercial-furniture **contract dealers** and **manufacturers** (US). Two reader
  profiles — CEO/management (light theme) and operations (dark theme).
- Tone: confident, direct, persuasive, calm. Qualitative — **no invented metrics or charts**.
  Plain business English, no hype, no jargon.

## Value pillars
1. **Zero re-entry** — data flows across systems, entered once, never re-typed.
2. **Automation first** — routine work resolves itself; experts handle only real exceptions.
3. **Lives in your tools** — inside Outlook, Teams and Excel.

## Hubs on the page
One list in `src/lib/content.ts` (`products`), same copy and links as production:
Quote Converter, Expert Hub, Dealer Hub and Manufacturer Hub. More hubs are coming, so the hubs
section must take any number of entries without layout changes. Under the hero, an optional
"See Strata in action" link opens the Demo Hub when `VITE_DEMO_HUB_URL` is set.

## Out of scope (this build)
Real auth, "Talk to an Expert" and Calendly CTAs, any numeric stats, dashboard mockups, charts,
and copy changes to hub names, links or text.
