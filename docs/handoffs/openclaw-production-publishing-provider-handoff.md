# OpenClaw handoff: production publishing and provider selection

**Status:** local handoff packet; sanitized; no provider accounts read or mutated
**Date:** 2026-05-21
**Repo:** `vaporhuman.com`
**Audience:** Internal Agent
**Exposure:** Sensitive Work until reviewed

## Reported user intent

The user wants to move `vaporhuman.com` from planning/prototype toward a live
production website that generates leads and income. They want to start using
VaporHuman privately while it grows, then publish public conversion paths. They
also want OpenClaw kept in the loop.

Recent user direction:

- unnecessary pages should be removed;
- work/contact/sales language should support lead intake;
- lead intake should collect company name, company size, product/service
  selection, and an additional message;
- social/share pages are desired;
- donations, support payments, suite product/service checkout such as
  VaporCustos, and crowdfunding should be planned for activation;
- providers can now be selected, but exact provider setup and account mutation
  still need approval.

## Verified local source state

The Astro source is now lean and production-oriented. Current generated public
pages are:

- `/`
- `/work.html`
- `/about.html`
- `/trust.html`
- `/faq.html`
- `/accessibility.html`
- `/sitemap/`
- `/sitemap.xml`
- `/robots.txt`

Removed from generated Astro output:

- `/login.html`
- `/dashboard.html`
- `/architecture.html`
- `/experience.html`
- `/support.html`
- support article routes
- `/continuity.html`
- `/donations.html`

`/work.html` is the current public offer/private-intake surface. It now has
approved outbound links to the hosted Tally work-intake form and the hosted
Stripe paid-discovery Payment Link. It does not embed a form or checkout,
publish a public email address, connect a CRM endpoint, add an analytics script,
activate subscriptions, add account behavior, or add provider webhooks.

## OpenClaw status check

Read-only `openclaw status --json` was checked locally on 2026-05-21. Summary:

- default agent: `main`
- gateway: local loopback reachable
- active tasks: 0
- queued tasks: 0
- memory plugin: enabled
- no OpenClaw config, sessions, queues, gateways, memory, or provider accounts
  were mutated

## Provider research summary

Use official/current provider docs before implementation. As of this handoff:

- Stripe Payment Links are the fastest fit for services, support payments,
  pay-what-you-want support, and recurring subscriptions. Stripe documents
  Payment Links for payments, subscriptions, tips, and donations, but Stripe
  support states tips must connect to goods/services and donations must connect
  to a specific charitable purpose.
- PayPal Donate can fit donation-style support only if the account is eligible
  to create Donate buttons and the public language is accurate.
- Fourthwall is already available through the user-provided shop URL
  `https://irievision-co-shop.fourthwall.com/`, linked to StreamElements. This
  should be promoted as the first live commerce lane because checkout and order
  handling stay external to this repo.
- Fourthwall custom domain support exists. Recommended target:
  `shop.vaporhuman.com`, not the root domain, so the main site can remain on
  `vaporhuman.com`.
- Kickstarter and Indiegogo fit campaign-style crowdfunding better than normal
  website checkout. Kickstarter collects a 5% platform fee from successfully
  funded projects, with payment processing also collected by Stripe. Indiegogo
  currently documents a 5% platform fee plus payment processing on collected
  funds.
- GoFundMe may fit donation/cause-style fundraising, but product/service sales
  and suite checkout should stay with a commerce/payment provider.

## Recommended routing

Suggested provider split:

- **Lead intake:** start with Tally as a hosted form link after the exact
  public form URL, retention, notification owner, spam protection, and privacy
  notice are approved. See
  `docs/handoffs/lead-intake-provider-runbook.md`.
- **Paid services and suite checkout:** Stripe Payment Links first.
  First recommended link: `VaporHuman Paid Discovery Session`. See
  `docs/handoffs/paid-discovery-stripe-payment-link-runbook.md`.
- **Merch/live creator commerce:** existing Fourthwall shop first; later connect
  `shop.vaporhuman.com` through Fourthwall plus DNS approval.
- **Donation/support payment:** Stripe Payment Links as support/tip for
  services or a clearly defined purpose; PayPal Donate only if eligibility and
  wording pass review.
- **Crowdfunding campaign:** Kickstarter or Indiegogo only after reward tiers,
  fulfillment promises, refund policy, and campaign copy are reviewed.
- **Analytics:** defer until after lead/payment flows are correct; start with
  privacy-first aggregate measurement only.

## Exact gates before live behavior

OpenClaw should not mutate provider accounts, GitHub metadata, OpenClaw config,
DNS, hosting, deployment, payment links, checkout, forms, public email, CRM, or
analytics without a fresh exact approval.

Next approval gates:

1. Verify the Tally `VaporHuman Work Intake` public form URL is live, then keep
   embed, CRM, webhook, analytics, and payment routing as separate gates.
2. Verify the first Stripe Payment Link for
   `VaporHuman Paid Discovery Session`, then keep embedded checkout,
   subscriptions, invoices, donations/support payments, taxes, PayPal buttons,
   and suite checkout as separate gates.
3. Select crowdfunding path: none, Kickstarter, Indiegogo, GoFundMe, Patreon,
   or a staged campaign later.
4. Approve public wording for donations/support payments so it does not imply
   nonprofit status, tax deductibility, investment, guaranteed delivery, or
   unavailable products.
5. Approve exact source changes that add outbound provider URLs.
6. Approve commit, push, deploy, and post-deploy verification separately.

## OpenClaw next task recommendation

OpenClaw should route the next packet as:

- repo: `vaporhuman.com`
- work type: Production Conversion
- audience: Public + Internal Agent
- exposure: Sensitive Work
- owners needed: VaporHuman, VaporSafe, VaporDomain, VaporSpeed, VaporSites
- action: prepare provider-selection checklist and implementation packet for
  lead intake, Stripe Payment Links, donation/support payment wording,
  crowdfunding campaign selection, and deployment readiness.

Keep public source work static until the provider URLs and legal/financial
language are approved.
