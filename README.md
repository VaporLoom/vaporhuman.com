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

## Boundaries

Keep the site static-only unless Irie explicitly approves a new gate:

- no forms
- no login
- no checkout or payment flow
- no direct donation flow or crowdfunding claim inside this repo
- no contact capture
- no analytics or tracking scripts
- no public email address until the email lane has send/receive plus
  SPF/DKIM/DMARC proof

The site may link to an external Fourthwall shop because Fourthwall hosts the
storefront and checkout. Connecting `shop.vaporhuman.com`, adding lead forms,
adding Stripe/PayPal links, or launching crowdfunding still requires exact
provider, DNS, privacy, and deployment approval.

Activation prep lives in
`../../docs/vaporhuman.com-static-activation-readiness.md`. Keep site launch
separate from the Google Workspace email lane until send/receive and
SPF/DKIM/DMARC proof are complete.

Preview by opening `index.html` in a browser or by using the repo preview
scripts from the VaporSites root.
