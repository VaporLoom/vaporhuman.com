# Paid discovery Stripe Payment Link runbook

**Status:** provider setup packet; sanitized; no provider account read or
mutated
**Date:** 2026-05-21
**Repo:** `vaporhuman.com`
**Audience:** Internal Agent
**Exposure:** Sensitive Work until reviewed

## Activation status

The public Stripe Payment Link is available at:

`https://buy.stripe.com/8x27sM4P76rb4Qo5Wd4ow00`

This is safe to place as an outbound hosted-checkout link after source review.
It is not a Stripe API integration, embedded buy button, webhook, subscription,
donation, tax engine, invoice automation, account system, or analytics surface.

User-reported setup context on 2026-05-21:

- Stripe live account setup was completed;
- PayPal Business exists and was used in the broader setup context;
- no bank account, routing number, tax ID, identity document, Stripe account ID,
  API key, webhook secret, receipt, customer data, or private screenshot was
  stored in this repo.

## Decision

Use **Stripe Payment Links** for the first paid service path.

Reasoning:

- Stripe Payment Links are hosted by Stripe and can be shared on a website
  without adding checkout code to this repo.
- Stripe documents Payment Links as no-code, reusable payment pages that can
  support products, subscriptions, and customer-chosen payment amounts.
- Stripe-hosted checkout keeps PCI/payment handling outside `vaporhuman.com`.
- The first paid offer should be a narrow paid-discovery service, not a broad
  donation, membership, or guaranteed product delivery claim.

Official docs referenced:

- Stripe no-code payments:
  `https://docs.stripe.com/payments/no-code`
- Stripe Payment Links:
  `https://docs.stripe.com/payments/payment-links`
- Create a payment link:
  `https://docs.stripe.com/payment-links/create?pricing-model=standard`

## First offer

Recommended product name:

`VaporHuman Paid Discovery Session`

Recommended description:

`A remote consultation to review your workflow, website, lead path, automation
needs, or AI/business operations setup and recommend the next practical step.`

Recommended public boundary:

`This is a paid discovery session, not emergency support, professional advice,
tax/legal/financial/accounting certification, guaranteed delivery, employment
advice, investment advice, or a promise that a larger build will be accepted.`

Recommended price posture:

- start with a fixed price that is easy to honor;
- avoid subscriptions until delivery cadence is defined;
- avoid donation language unless eligibility, tax wording, refund language, and
  purpose are reviewed;
- use invoices for custom scoped work after intake review.

Suggested starting price options for the user to choose from:

- `$49` quick-fit review
- `$99` discovery session
- `$149` deeper workflow review

Default recommendation: `$99`.

## Stripe setup checklist

User-owned provider steps:

1. Open Stripe Dashboard.
2. Go to Payment Links.
3. Create a new payment link.
4. Product name: `VaporHuman Paid Discovery Session`.
5. Product description: use the recommended description above.
6. Price: user-selected fixed price.
7. Quantity: one.
8. Customer details: collect name and email.
9. Receipts: keep Stripe automatic receipts enabled if available.
10. Confirmation/success behavior: Stripe default hosted confirmation is
    acceptable for the first gate.
11. Copy only the public `https://buy.stripe.com/...` link. Done:
    `https://buy.stripe.com/8x27sM4P76rb4Qo5Wd4ow00`.
12. Do not send Stripe passwords, secret keys, restricted keys, account IDs,
    webhook secrets, tax IDs, bank data, customer data, or private screenshots.

## Source integration after public link exists

Assistant-owned source steps after exact approval:

1. Add the Stripe Payment Link URL to
   `prototype/astro-vaporhuman/src/data/conversion.ts`.
2. Add a paid-discovery CTA to `/work.html`.
3. Add public copy that separates paid discovery from donations, tax claims,
   emergency support, guaranteed results, and professional advice.
4. Keep it as an outbound Stripe-hosted link. Do not embed Stripe buy buttons
   or scripts in the first activation.
5. Run `npm run build` and `npm run qa`.
6. Sync Astro `dist` to the repo root artifact.
7. Verify no scripts, checkout code, secret keys, analytics, forms, cookies,
   or webhook endpoints were added.
8. Commit, push, and verify public routes only after explicit approval.

## Stop conditions

Stop before public activation if:

- the Stripe link is in test mode or preview-only;
- the product copy implies a guaranteed outcome, professional certification,
  emergency support, legal/tax/financial/accounting advice, nonprofit status,
  tax deductibility, investment, or employment decision authority;
- Stripe requires account, tax, bank, identity, or compliance setup that the
  assistant cannot verify without private evidence;
- the requested source change would add Stripe scripts, embedded checkout, API
  keys, webhook endpoints, or backend code before a separate implementation
  gate.
