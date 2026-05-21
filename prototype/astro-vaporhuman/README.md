# VaporHuman Astro Source

Local draft for the production-oriented `vaporhuman.com` source architecture.

This source keeps the public output static while moving authoring into
structured Astro layouts and components. It does not approve deployment,
GitHub Pages changes, analytics, forms, accounts, localization, provider
reads, payment processing, lead capture, or public behavior changes.

## Commands

```powershell
npm install
npm run build
npm run qa
npm run dev
```

## Boundaries

- Static output only.
- No forms, login, checkout, analytics, tracking, cookies, public email,
  account system, localization behavior, payment processing, CRM capture, or
  live assistant service.
- No deployment until a separate publication gate approves source promotion,
  hosting behavior, and rollback.

## Production Page Set

The generated public page set is intentionally small:

- `/`
- `/work.html`
- `/shop.html`
- `/social.html`
- `/about.html`
- `/trust.html`
- `/faq.html`
- `/accessibility.html`
- `/sitemap`
- `/sitemap.xml`
- `/robots.txt`

The removed planning/prototype routes are intentionally not generated:
`/login.html`, `/dashboard.html`, `/architecture.html`, `/experience.html`,
`/support.html`, support article routes, `/continuity.html`, and
`/donations.html`.

`/work.html` is the production offer surface. It describes the private intake
lane and service packages without adding a form, CRM, checkout, analytics,
public email address, or provider integration. `/shop.html` promotes the
existing Fourthwall storefront as an external live commerce lane.

Run `npm run qa` after `npm run build` to check that generated output does not
include scripts, forms, storage, tracking endpoints, OAuth endpoints, or stale
non-production routes.

Do not add a Google tag, Tag Manager container, Measurement ID, OAuth URL,
cookie, local storage, account database, lead form, public email address,
checkout link, payment provider, CRM endpoint, or provider API call until a
later exact approval gate covers privacy copy, consent posture, security
review, deployment, and rollback.
