# Static launch readiness and hygiene gate

**Created:** 2026-05-22
**Updated:** 2026-05-23
**Status:** repo-ready planning record after local hygiene review
**Surface:** `vaporhuman.com` static deploy artifact, Astro source, and local
source-asset handling

## Gate purpose

Capture the safe post-redesign readiness posture for the public static site,
record the current verification evidence, and separate repo hygiene from
provider or public-behavior mutation.

This gate does not change the public site, provider accounts, DNS, GitHub Pages
settings, analytics, forms, checkout, email, account behavior, or OpenClaw
runtime state.

## Sidecar and OpenClaw result

Codex CLI sidecar was invoked with explicit `gpt-5.5` and
`model_reasoning_effort="xhigh"` in read-only mode. The sidecar confirmed the
safe next gate should be a local-only static launch readiness artifact rather
than source edits or publication.

The sidecar could not complete its own filesystem review because its internal
read-only shell hit a Windows sandbox spawn failure. OpenClaw/Chappie completed
the local checks directly instead.

On 2026-05-23, OpenClaw approved a follow-up local repo hygiene/readiness
closeout gate for this file and the local icon source bundle. The approved
posture was to keep the source zip local unless proven safe and useful to
publish, and to commit only sanitized readiness documentation and exact ignore
rules.

## Local verification performed

- Read `AGENTS.md`, `README.md`, and
  `docs/planning/privacy-first-analytics-localization-surfaces.md`.
- Confirmed repo status started clean on `main...origin/main`, except the
  local source icon zip and this planning file before the hygiene closeout.
- Ran `npm run qa` from `prototype/astro-vaporhuman`; result passed with
  15 HTML files and 18 text output files scanned after the redesign and icon
  pass.
- Scanned generated root output outside `prototype/` and `docs/` for forms,
  scripts, Google tracking endpoints, storage/cookie/fetch/XHR signals,
  mailto links, and PayPal checkout endpoints; no matches were found.
- Checked root internal links across the static HTML files; local root links
  resolved.
- Checked root HTML files for description, Open Graph, Twitter card, canonical
  metadata, favicon metadata, and theme color.
- Reviewed `robots.txt`, `sitemap.xml`, and `CNAME`; they point at
  `https://vaporhuman.com/`, list the current production pages, and keep the
  noindex routing page out of the sitemap.
- Scanned public HTML/source page copy for the restricted direct descriptors
  and donation/crowdfunding/fundraising/PayPal language; no public-copy matches
  were found.
- The icon/brand asset gate shipped in commit
  `18d9b8e211d4d50bf6b076ede7e5295eb2775251`. GitHub Pages built that commit,
  and live checks confirmed the homepage, favicon routes, Apple touch icon,
  SVG/PNG icon routes, and direct VaporPong page returned `200`.
- Live browser checks confirmed the header brand mark rendered, mobile and
  reduced-motion viewport checks had no horizontal overflow, and the homepage
  and VaporPong page had no console errors or warnings.

## Current readiness posture

- The current site remains static-only.
- Tally, Stripe, and Fourthwall remain external hosted provider routes.
- No embedded form, embedded checkout, public login, public dashboard, live
  assistant, analytics script, tracking pixel, cookie, local storage, public
  email address, or hidden collection was introduced by this gate.
- The public copy continues to frame provider paths as hosted/external and
  keeps human approval and explicit gates visible.
- The local icon source zip at
  `assets/2026-05-22-vaporhuman_icon_assets_v2.zip` is kept as local source
  provenance and is ignored by exact path. Publishing that source bundle would
  be a separate brand-source publication decision.

## Remaining review questions

- Irie should review the live site for voice, offer clarity, and visual feel.
- If edits are needed, they should be named as a small polish list before source
  changes begin.
- Commit, push, deployment, and post-deploy public verification remain separate
  exact gates under this repo's `AGENTS.md`.
- Provider path changes remain separate: Tally settings, Stripe settings,
  Fourthwall custom domain, DNS, analytics, accounts, forms, checkout, public
  email, and live assistant behavior are not approved by this packet.

## Suggested next exact gates

1. **Named local polish gate**
   - Irie provides specific live-site feedback.
   - Edit only the named copy, mobile, provider-wording, social/share, or
     launch-checklist items.
   - Verify with `npm run qa`, static scans, link checks, diff review, and
     protected-data review.
   - Stop before staging, commit, push, or deploy unless explicitly approved.

2. **Repo-ready publication gate**
   - Review the exact local diff for this readiness record and ignore rule.
   - Approve staging, commit, push, deployment trigger if needed, public
     verification, and rollback path in one explicit gate.

3. **Provider activation planning gate**
   - Select exactly one provider surface to review, such as Tally, Stripe,
     Fourthwall subdomain, analytics, account portal, or public email.
   - Keep provider dashboards, DNS, billing, forms, checkout, account behavior,
     and tracking inactive until the exact provider/data/rollback gate is
     approved.

4. **VaporGames/VaporPong verification gate**
   - Start with current evidence before proposing game or embed changes.
   - Verify whether the standalone first playable VaporPong lane is already
     complete.
   - Keep VaporHuman embedding, accounts, monetization, leaderboards, provider
     setup, and public launch behind separate gates.

## Stop conditions

Stop before any action that would:

- mutate provider accounts, DNS, hosting, GitHub settings, OpenClaw runtime,
  payment setup, analytics, forms, checkout, email, or live-assistant behavior;
- add public claims about guaranteed safety, privacy, advice, outcomes,
  donations, crowdfunding, or regulated professional services;
- store secrets, provider evidence, visitor data, raw logs, raw sessions,
  transcripts, payment data, private identities, or contact submissions in this
  repo;
- stage, commit, push, publish, deploy, or change remotes without exact
  approval.
