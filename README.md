# vaporhuman.com

Static artifact for the first production-oriented `vaporhuman.com` site.

Public site infrastructure is live, but edits in this source repo are local
drafts until separately approved for commit, push, deployment, and verification.

## Pages

- `index.html` - landing page
- `work.html` - production offer and private-intake route
- `shop.html` - Fourthwall-powered shop route
- `social.html` - static social/share route
- `about.html` - About VaporHuman
- `trust.html` - trust boundary and non-claims
- `faq.html` - current-site FAQ
- `privacy.html` - privacy posture for hosted intake, payment, and shop flows
- `terms.html` - terms for using the current site and paid discovery lane
- `refund-support.html` - refund, rescheduling, support, and provider routing
- `next-steps.html` - noindex confirmation and provider-redirect routing page
- `accessibility.html` - accessibility posture and known limits
- `sitemap/index.html` - human-readable sitemap at `/sitemap`
- `robots.txt` - crawler policy
- `sitemap.xml` - machine-readable page list

## Planning docs

- `docs/planning/privacy-first-analytics-localization-surfaces.md` - privacy-first
  planning packet for analytics, metrics, language, nationality, footer, and
  localization surfaces, including the evidence gate for moving local draft
  work to remote/public review; this does not make analytics, tracking,
  localization, forms, accounts, or public behavior live.
- `docs/handoffs/lead-intake-provider-runbook.md` - provider-selection packet
  for the first hosted lead-intake gate. It recommends Tally first, with
  HubSpot/CRM, webhooks, embeds, and analytics deferred to later gates.
- `docs/handoffs/paid-discovery-stripe-payment-link-runbook.md` - provider
  setup packet for the first Stripe-hosted paid-discovery link. It keeps
  checkout hosted by Stripe and defers embeds, subscriptions, donations, and
  custom scoped work to later gates.

## Boundaries

Keep the site static-only unless Irie explicitly approves a new gate:

- no embedded forms
- no login
- no embedded checkout or in-repo payment processing
- no direct donation flow or crowdfunding claim inside this repo
- lead intake uses a hosted Tally form link, not an embedded site form
- paid discovery uses a hosted Stripe Payment Link, not embedded checkout code
- no analytics or tracking scripts
- no public email address until the email lane has send/receive plus
  SPF/DKIM/DMARC proof

The site may link to an external Fourthwall shop because Fourthwall hosts the
storefront and checkout. The site may link to the external Tally work-intake
form because Tally hosts the form. The site may link to the external Stripe
paid-discovery page because Stripe hosts checkout. Embedding forms or checkout,
connecting `shop.vaporhuman.com`, adding more Stripe/PayPal links, wiring
CRM/webhooks, subscriptions, donations, or launching crowdfunding still requires
exact provider, DNS, privacy, and deployment approval.

Activation prep lives in
`../../docs/vaporhuman.com-static-activation-readiness.md`. Keep site launch
separate from the Google Workspace email lane until send/receive and
SPF/DKIM/DMARC proof are complete.

Preview by opening `index.html` in a browser or by using the repo preview
scripts from the VaporSites root.
