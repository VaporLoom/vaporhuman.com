# Lead intake provider runbook

**Status:** provider-selection packet; sanitized; no provider account read or
mutated
**Date:** 2026-05-21
**Repo:** `vaporhuman.com`
**Audience:** Internal Agent
**Exposure:** Sensitive Work until reviewed

## Activation status

The public Tally form is available at:

`https://tally.so/r/WOjO8k`

This is safe to place as an outbound hosted-form link after source review. It
is not a script embed, CRM endpoint, webhook, payment flow, account system, or
analytics surface.

## Decision

Use **Tally** as the first lead-intake provider for `vaporhuman.com`.

Reasoning:

- `vaporhuman.com` is currently a static GitHub Pages site. Tally supports a
  hosted form link, so the first public activation can avoid adding scripts,
  cookies, local storage, custom backend code, or a live CRM endpoint to this
  repo.
- Tally documents standard embeds, full-page embeds, hidden page/query fields,
  and webhooks. Webhooks can later route submissions into a private admin
  dashboard, CRM, queue, or automation endpoint after retention, spam, and
  security gates are approved.
- HubSpot is better for the later CRM/admin-dashboard lane, but its embedded
  forms are intentionally loaded through HubSpot-hosted JavaScript and fit a
  heavier marketing/CRM stack. It should wait until contact ownership,
  tracking, consent, and admin workflows are approved.
- Formspree is a reasonable static-site endpoint fallback, but it exposes a
  direct form endpoint in site source and is less useful than Tally for a
  quick branded intake experience plus no-code review.

Official docs referenced:

- Tally embed docs: `https://tally.so/help/embed-your-form`
- Tally webhooks docs: `https://tally.so/help/webhooks`
- Formspree HTML form docs:
  `https://help.formspree.io/articles/building-your-form/building-an-html-form/`
- HubSpot forms docs:
  `https://developers.hubspot.com/docs/cms/start-building/building-blocks/modules/forms`
- Google Analytics demographics docs:
  `https://support.google.com/analytics/answer/12948931`

## First form shape

Create one Tally form named:

`VaporHuman Work Intake`

Recommended public fields:

1. Company / Project Name
2. Contact Name
3. Email Address
4. Company Size
   - Solo
   - 2-10
   - 11-50
   - 51-200
   - 201+
5. What Do You Need Help With?
   - AI Workflow Help
   - Website / Lead Generation
   - Creator / Streaming Assets
   - Knowledge Base / Support System
   - Accounting / Admin Automation
   - VaporHuman Suite Product
   - Other / Not Sure Yet
6. Buying Stage
   - Exploring Options
   - Need A Recommendation
   - Ready For A Proposal
   - Ready To Start
7. Main Goal
8. Message
9. Consent checkbox:
   `I agree that VaporHuman may use this information to respond to my request.
   I will not submit secrets, payment details, or emergency requests.`

Recommended hidden fields:

- `originPage`
- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_content`
- `suiteInterest`

## Activation phases

### Phase 1: Hosted form link

Use the Tally-hosted public form URL as the first live lead path.

Public source change after approval:

- Update `/work.html` CTA from internal `#private-intake` to the Tally form
  URL.
- Add clear outbound-provider copy:
  `The intake form is hosted by Tally. Do not submit secrets, payment data, or
  emergency requests.`
- Keep the form offsite to avoid adding scripts or cookies to `vaporhuman.com`.
- Verify the Tally form works on mobile and desktop.

### Phase 2: Branded form route

After Phase 1 has live proof, decide whether to add:

- a dedicated `/intake.html` page that links out to Tally;
- a standard Tally embed;
- a full-page Tally embed;
- or a custom backend form.

Embedding should be a separate gate because it adds third-party script behavior
to the public site.

### Phase 3: Private admin routing

After lead capture works, connect Tally webhooks to a private endpoint or
automation lane.

Required before webhook activation:

- endpoint owner and hosting provider;
- signing-secret storage plan;
- retention policy;
- spam/failure handling;
- notification destination;
- no raw private submissions committed to Git;
- rollback plan.

Tally webhooks support signed requests and retries, which is useful for a later
VaporHuman admin dashboard or private queue.

## Analytics posture

Do not add Google Analytics or demographics collection as the first gate.

Google Analytics demographic reporting depends on consented users and
Google-signals-style data, and Google may apply thresholds when counts are low.
That makes it a later privacy/consent gate, not a prerequisite for collecting
initial qualified leads.

Recommended order:

1. lead intake works;
2. shop domain finishes;
3. first payment/support path is accurate;
4. privacy notice and consent posture are reviewed;
5. analytics provider is selected;
6. only then add GA4, privacy-first analytics, or server-side aggregate
   measurement.

## Manual setup checklist

User-owned provider steps:

1. Create or open a Tally account. Done.
2. Create `VaporHuman Work Intake`. Done.
3. Add the public fields listed above. Done.
4. Configure notification email inside Tally. Basic/free notification is
   acceptable; custom recipients/subjects/PDF attachments can wait for Tally
   Pro if lead volume proves it is worth it.
5. Publish the form. Done.
6. Copy the public form URL. Done: `https://tally.so/r/WOjO8k`.
7. Do not send account passwords, tokens, API keys, billing data, or private
   submissions.

Assistant-owned source steps after exact approval:

1. Add the Tally URL to `prototype/astro-vaporhuman/src/data/conversion.ts`.
2. Update `/work.html` CTA and provider copy.
3. Run `npm run build` and `npm run qa`.
4. Sync Astro `dist` to the repo root artifact.
5. Verify no scripts, cookies, secrets, tokens, or unexpected provider behavior
   were introduced.
6. Commit, push, and verify public routes only after explicit approval.

## Stop conditions

Stop before activation if:

- the provider URL is private, preview-only, or not published;
- the form asks for secrets, payment data, private keys, recovery codes, or
  sensitive personal data;
- the form implies emergency support, professional advice, guaranteed delivery,
  tax deductibility, investment, or nonprofit status;
- the source change would add third-party scripts before embed approval;
- the setup requires raw provider account evidence or private lead data in Git.
