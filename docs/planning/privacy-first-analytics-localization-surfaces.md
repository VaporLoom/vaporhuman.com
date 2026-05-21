# Privacy-first analytics and localization surfaces

**Status:** planning packet; starts as local draft, then may move remote-visible after evidence review and exact approval
**Issue:** VaporLoom/vaporhuman.com#1
**Purpose:** define privacy-first analytics, language, nationality, footer, and localization planning boundaries for the static `vaporhuman.com` artifact without changing public site behavior.

## Current boundary

The current public artifact is static-only and now uses outbound hosted links
for Tally work intake and Stripe paid discovery. Existing source boundaries
still prohibit embedded forms, login, embedded checkout, in-repo payment
processing, donation flow, subscriptions, analytics, tracking scripts, public
email address, CRM endpoints, webhooks, or live assistant service without a
separate gate.

This packet does not change that. It is a planning surface only.

Local prototype note, 2026-05-21: login, currency, language, admin dashboard,
analytics, billing, support search, and account behavior should be treated as
application functionality, not content pages to polish indefinitely. The Astro
draft may show disabled header controls and architecture packets for these
surfaces, but it should not add static `/login.html` or `/dashboard.html`
routes as substitutes for real app work. These controls must not include forms,
provider redirects, cookies, storage, tags, external collection, or live
behavior until a separate implementation and deployment gate approves them.

Membership note, 2026-05-21: the desired model is free-first membership with
paid tiers hidden from primary presentation. Pricing and paid-tier options
should appear only after a member reaches a documented rate limit. Billing,
checkout, pricing copy, entitlements, receipts, taxes, cancellation, and
support remain separate approval gates.

Support note, 2026-05-21: a future support knowledge base should start with
searchable articles, topic browsing, common task paths, and guided escalation.
Local prototypes may include support pages and article routes as noindex static
content only. Support ticket capture, live chat, article feedback, query logs,
external search providers, and member-specific support history remain separate
approval gates.

Support chat bot note, 2026-05-21: a support bot can fit the future
architecture if it sits behind the knowledge base, cites known support
articles, asks for minimal context, and escalates unresolved or sensitive
issues. It must not store transcripts, call a model, read account context,
create tickets, or answer from private data until provider, privacy, retention,
prompt, retrieval, and human-escalation gates are approved.

Streaming integration note, 2026-05-21: VaporStream/VaporTwitch member support
may later cover generated emojis, overlays, and direct upload workflows. Keep
this as routed support taxonomy in `vaporhuman.com`; do not implement platform
API upload, account authorization, moderation, or live placement from this repo
without a separate cross-repo/provider gate.

VaporArch improvement note, 2026-05-21: VaporArch may later help by producing
research-backed improvement proposals for support articles, rate-limit copy,
streaming workflows, safety boundaries, or product friction. In this repo,
model that as a proposal queue only. Auto-publish is a valid future
VaporArch capability, but it needs exact publish surface, source set, evidence
threshold, owner approval model, rollback, sensitive-topic exclusions, and
post-publish monitoring before activation. Auto-research jobs, provider reads,
GitHub issue mutation, cross-repo edits, and auto-publication require separate
approval gates and source/evidence review.

Production-source note, 2026-05-21: the Astro draft should stay lean enough to
serve as production source. Removed planning/prototype routes include
`/login.html`, `/dashboard.html`, `/architecture.html`, `/experience.html`,
`/support.html`, support article routes, `/continuity.html`, and
`/donations.html`. The production source may include `/work.html` as the public
offer and private-intake route, but it must not add a form, public email
address, CRM endpoint, checkout link, payment provider, analytics script, or
live account behavior until the exact provider/data gates are approved. The
`npm run qa` command is allowed as local static-output verification only; it
checks generated files for scripts, forms, storage, tracking endpoints, OAuth
endpoints, stale non-production routes, and sitemap consistency. It does not
prove legal, privacy, deployment, provider, or public behavior readiness.

OpenClaw handoff note, 2026-05-21: keep OpenClaw in the loop through sanitized
local handoff packets rather than mutating OpenClaw config, queues, provider
accounts, GitHub metadata, DNS, hosting, or deployment state. Current handoff:
`docs/handoffs/openclaw-production-publishing-provider-handoff.md`.

Fourthwall note, 2026-05-21: the user provided an existing Fourthwall shop URL
linked to StreamElements: `https://irievision-co-shop.fourthwall.com/`. It is
safe for the static source to link to that external storefront as a commerce
route because checkout remains hosted by Fourthwall. Connecting
`shop.vaporhuman.com` to Fourthwall requires Fourthwall dashboard access and DNS
changes, so it remains a separate provider/DNS gate.

Audience/UX note, 2026-05-21: analytics, graphs, demographics, revenue,
provider readiness, support queues, and operational metrics are admin-only
business intelligence surfaces. Client/member-facing surfaces should show only
approved summaries, account states, support answers, rate-limit messages,
upgrade prompts, and creation workflows that have passed UX-agent review. The
desired member experience should feel magical and outcome-oriented, but uploads,
publishing, billing, account changes, and platform placement still require
explicit user approval and rollback paths.

UX review should cover audience fit, promise control, approval moments, empty
states, limit states, accessibility, and trust language before member-facing
surfaces move out of local prototype status.

Audience field recommendation, 2026-05-21: add `Audience` as a local dry-run
routing field before changing GitHub. Evidence: this packet now needs different
decisions for public pages, member/client UX, admin-only business intelligence,
internal agent automation, and provider/platform integrations. Existing project
practice already uses `Exposure` for privacy/public-review posture, but
`Exposure` does not tell an agent who the surface is for. Recommended local
single-select values are `Public`, `Member / Client`, `Admin / Operator`,
`Internal Agent`, `Provider / Integration`, `Mixed / Needs Split`, and
`Unknown / Review Needed`.

Do not create or mutate a GitHub field yet. GitHub Projects single-select
fields are filterable and issue fields can provide structured organization
metadata, but organization issue fields are in public preview, projects have a
field budget, and this workspace already has core operating fields such as
`Status`, `Priority`, `Area`, `Department`, `System`, `Work Type`, and
`Exposure`. A GitHub `Audience` field should wait for a read-only schema
inventory, option-name review, null/backfill policy, and exact provider
mutation gate.

Local proof criteria: every architecture lane should carry one primary
`Audience` value before promotion; `Mixed / Needs Split` should trigger either
a split packet or explicit owner review; `Admin / Operator` should keep
dashboards, demographics, revenue, and operational metrics out of member
navigation; `Member / Client` should trigger UX review; provider-facing work
should trigger provider authorization and rollback review; and GitHub field
mutation should wait until the field proves useful across at least three active
packets without option churn.

Implementation packet note, 2026-05-21: the local architecture prototype may
also list gated implementation packets for identity, admin analytics,
rate-limit pricing, support search, support bot behavior, streaming asset
workflows, and VaporArch proposals. These packets are routing contracts, not
implementation approval. Each packet should preserve owner, audience, Exposure,
local proof, and blocked-until gates before any code, provider, GitHub, billing,
analytics, model, platform, or publishing behavior is activated.

Planning starts as a local draft because the target remote and public
site are public-facing surfaces. Local draft status is not meant to be a
permanent state. It is the holding phase before evidence proves the packet is
safe to move remote, publish as repo-visible documentation, or become public
site behavior.

Project metadata context: `VaporLoom/vaporhuman.com#1` is classified with
Exposure `Sensitive Work`. Keep that Exposure class until a later review
explicitly changes it.

## Goals

- Decide what VaporHuman would want to learn from site usage before adding any analytics surface.
- Keep measurement compatible with the site's trust posture: useful, plain-language, privacy-first, and easy to explain.
- Separate safe static-site quality checks from visitor analytics.
- Define future language/localization surfaces without adding dropdowns, translated pages, cookies, scripts, accounts, or location inference.
- Treat nationality/demographics as sensitive by default, not as a casual personalization feature.
- Name cross-repo owners before any implementation work moves out of this deploy artifact.

## Non-goals

This packet does not approve:

- analytics or tracking scripts
- cookies, local storage, fingerprinting, pixels, beacons, session replay, heatmaps, A/B testing, ad tech, or consent banners
- analytics/provider account creation or dashboard reads
- hosting log reads, visitor-data reads, IP/user-agent/referrer analysis, demographic analysis, or provider exports
- language dropdowns, language pages, translated public copy, locale routing, nationality selectors, or footer changes
- forms, login, accounts, contact capture, public email, payments, donation flows, or dashboards
- public pricing pages, checkout, billing, receipts, paid entitlements, or upgrade prompts outside a rate-limit context
- support chat bots, model calls, transcript storage, ticket creation, article feedback capture, or automated improvement publishing
- DNS, hosting, deployment, GitHub Pages settings, commits, pushes, issue closeout, or GitHub metadata changes

## Privacy posture

Default rule: measure the site without identifying visitors.

Preferred posture for any future analytics gate:

- Aggregate first.
- No account identity.
- No cross-site identity.
- No advertising network.
- No sale or sharing of visitor data.
- No raw IP retention by VaporHuman-owned artifacts.
- No session replay, heatmaps, keystroke capture, or behavioral fingerprinting.
- No inferred demographics.
- No precise geography.
- No hidden collection. Any public measurement should be explainable in plain language.
- Retention should be short by default and justified before extension.

If a future provider cannot support this posture, the default answer is no analytics.

## Allowed metrics categories

Planning-safe now:

- Static page inventory: which pages exist, titles, descriptions, sitemap coverage, robots policy.
- Static quality checks: broken internal links, missing titles, missing meta descriptions, accessibility lint findings, sitemap validity.
- Content readiness: pages that need review, future public-copy gates, footer/navigation consistency.
- Localization readiness: source-language inventory and glossary candidates.

Future-only, after exact approval:

- Coarse aggregate page views by page path.
- Coarse aggregate outbound-link clicks if any future outbound links exist.
- Coarse aggregate language/locale selection counts if a manual selector exists.
- Coarse aggregate consent state if a consent UI is ever required.
- Static deployment health summaries from approved public build/status sources.

Any future report should prefer period totals and trends over person/session records.

## Disallowed data by default

Do not collect or store in this repo:

- IP addresses
- user agents
- full referrers
- visitor IDs
- account IDs
- emails, names, handles, phone numbers, or contact details
- exact location, GPS, city-level location, or address data
- nationality, ethnicity, race, citizenship, religion, health, age, gender, disability, or other sensitive demographic fields
- browser fingerprinting values
- session replays, heatmaps, scroll maps, click maps, or form recordings
- raw hosting logs
- analytics provider exports
- provider account IDs, billing data, dashboards, screenshots, API payloads, or private evidence

## Consent and account posture

Current site posture:

- No accounts.
- No forms.
- No public contact capture.
- No cookies or analytics scripts.
- No consent UI needed for current static behavior.

Future posture:

- If a future metric can be collected without cookies, cross-site tracking, identity, or sensitive data, document why consent UI is or is not required before implementation.
- If cookies, local storage, tracking scripts, third-party embeds, accounts, or contact capture are proposed, stop for a privacy/legal/safety review.
- Do not create a consent banner just to make tracking feel acceptable. First ask whether the tracking is necessary at all.

## Language, nationality, and localization decisions

Language is a usability surface. Nationality is sensitive and should stay parked by default.

Language decisions to make later:

- Source language and canonical copy owner.
- Translation priority: which languages, why, and for whom.
- Translation model: human translation, AI-assisted draft with human review, or no translation yet.
- URL shape: separate pages, path prefix, or static notes only.
- Accessibility: language attributes, readable switcher labels, and no hidden auto-redirects.
- Review cadence: how translated content stays aligned with source copy.

Nationality/demographic posture:

- Do not ask for nationality on the public site by default.
- Do not infer nationality from IP, browser settings, language, timezone, or referrer.
- Do not use nationality as a proxy for personalization, eligibility, pricing, legal status, or segmentation.
- If a future legal/compliance or localization use case truly needs country/jurisdiction, frame it as a coarse "region/jurisdiction" decision, not identity profiling, and require a separate review.

## Footer and dropdown surfaces

Current footer:

- Static navigation.
- Static site-boundary reminders.
- Static "United States" marker.
- No selector or interactive control.

Future options, each requiring a separate implementation gate:

1. Keep static footer marker only.
   - Lowest risk.
   - No visitor data.
   - Best default until localization exists.

2. Add a non-functional "Language: English" footer note.
   - Still static.
   - Useful only if it clarifies current availability.

3. Add a manual language dropdown or language links.
   - Requires translated pages, URL policy, accessibility review, no tracking by default, and no automatic locale inference.

4. Add region/jurisdiction information.
   - Requires legal/privacy review and careful wording.
   - Should not ask for or infer nationality.

Do not add dropdowns, scripts, translated pages, or footer copy changes from this packet.

## Local-to-remote readiness plan

Use this sequence before moving local draft work to remote or public exposure:

1. **Local draft**
   - Keep planning in local docs while the wording is still exploratory.
   - Verify no secrets, private provider evidence, visitor data, account data,
     DNS/provider details, raw logs, raw analytics exports, private identities,
     or unreviewed claims are present.
   - Confirm the packet remains a plan, not a live analytics/localization
     implementation.

2. **Repo-ready review**
   - Review the exact diff that would become remote-visible.
   - Classify the change with the existing Exposure field. This issue remains
     `Sensitive Work` unless the reviewer explicitly lowers or raises it.
   - Check that the doc describes future gates without creating accounts,
     scripts, cookies, forms, dashboards, localization routes, footer UI, DNS
     changes, or deployment behavior.
   - Confirm no public claim implies analytics are active, translations are
     available, donations/contact are open, or visitor data is collected.

3. **Remote documentation gate**
   - If repo-ready review passes, approve the exact staging, commit, and push
     of the planning packet.
   - Treat a push to the remote as remote-visible documentation, not as public
     site activation.
   - Do not close the issue until the pushed commit and issue scope match.

4. **Private-to-public transition review**
   - Before any planning text becomes public site copy or public behavior,
     perform a separate review of audience, claims, privacy language,
     accessibility, legal/compliance sensitivity, and rollback path.
   - Re-check the Exposure field before implementation. `Sensitive Work` means
     public exposure needs human review, not just a clean local diff.
   - Require VaporHuman and VaporSafe review for trust/consent/privacy claims;
     add VaporSites, VaporDomain, VaporSpeed, or VaporDrive only when their
     surface is actually involved.

5. **Public behavior gate**
   - Only after the private-to-public review passes, approve a separate
     implementation packet for any footer UI, language selector, localized
     page, analytics option, consent UI, deployment, or verification.
   - Keep deployment and public verification as their own gate after source
     changes are approved, committed, and pushed.

Evidence that can prove readiness:

- Clean repo status except the intended planning files.
- Reviewed diff with only docs changes.
- Passing `git diff --check`.
- Targeted search finding no secrets, provider/account data, visitor data,
  raw logs, analytics exports, token-like values, private identities, or
  accidental implementation changes.
- Static-site files unchanged unless a later implementation gate approves
  them.
- Explicit Exposure classification recorded for the issue or closeout.
- Clear next-gate wording that separates remote documentation from public
  site behavior.

Evidence that blocks remote/public movement:

- Any visitor, provider, account, billing, DNS, hosting-log, analytics export,
  IP, user-agent, referrer, demographic, nationality, health, identity, or
  private-contact data.
- Any script, cookie, storage, form, account, dashboard, localization route,
  footer UI, deployment, provider setup, or DNS change bundled into the docs
  packet.
- Any public wording that suggests analytics, translation, contact, donations,
  accounts, or services are active when they are not.
- Missing or stale Exposure classification for the issue.

## Cross-repo coordination

- `vaporhuman.com`: public static artifact planning and deploy-repo docs.
- `VaporHuman`: consent, trust, identity, public-facing governance, and claims.
- `VaporSites`: source-site implementation, preview, static generation, deployment packet, and public artifact preparation.
- `VaporDomain`: DNS, hosting/provider posture, domain activation, email/domain records, and provider-bound proof.
- `VaporDrive`: evidence retention policy if reports, exports, or private proof artifacts ever exist.
- `VaporSpeed`: metrics taxonomy, cost/benefit, reporting cadence, and measurement usefulness.
- `VaporSafe`: privacy/security/compliance review, sensitive data boundaries, and stop lines.

Sibling-repo edits require separate approval.

## Next exact approval gates

Choose one narrow gate at a time:

1. **Commit this planning packet.**
   - First complete the repo-ready review above, including Exposure
     `Sensitive Work`.
   - Stage and commit only this docs packet and README link, then optionally push and close the existing issue if explicitly approved.

2. **Static QA metrics dry run.**
   - Use local files only to report page inventory, sitemap coverage, links, titles, and accessibility/static checks.
   - No visitor data or provider reads.

3. **Analytics provider/options review.**
   - Public research only unless provider account reads are separately approved.
   - Compare no-analytics, server-log aggregate, privacy-preserving analytics provider, and self-hosted options.

4. **Localization copy plan.**
   - Define language priorities, URL shape, source-of-truth copy, and review process.
   - No public page changes yet.

5. **Footer/language UI implementation packet.**
   - Mock exact static copy/UI behavior and accessibility requirements.
   - No deployment until a separate deploy gate.

6. **Deployment and public verification gate.**
   - Only after source/deploy repo changes are approved, committed, pushed, deployed, and verified.

## Stop conditions

Stop immediately if a step would require provider dashboards, hosting logs, analytics exports, visitor data, IPs, user agents, referrers, demographics, account IDs, DNS/provider state, public site behavior changes, scripts, cookies, forms, accounts, deployments, GitHub metadata, or sibling-repo edits without a fresh exact approval.
