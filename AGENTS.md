# AGENTS.md - vaporhuman.com

These instructions apply to `C:\Vaporware\vaporhuman.com`.

## Purpose

- `vaporhuman.com` is the public static site repo for the first VaporHuman
  trust and continuity site.
- Treat source edits as local drafts until commit, push, deployment, and public
  verification are separately approved.
- Public behavior, public claims, publishing, DNS, hosting, analytics,
  localization, forms, email, payments, and deployment all remain explicit
  gates.

## Startup Read Order

Before proposing or making changes:

1. Read this `AGENTS.md`.
2. Read `README.md`.
3. Read `docs/planning/privacy-first-analytics-localization-surfaces.md` when
   the work touches analytics, metrics, language, nationality, footer,
   localization, public behavior, or related planning.
4. Check `git status --porcelain=v1 --branch --untracked-files=all`.

If a future subdirectory adds a more specific `AGENTS.md`, follow that file for
work inside its scope while preserving the stricter public-facing and privacy
gates.

## Working Rules

- Start with read-only investigation before editing.
- Preserve unrelated user, OpenClaw, or other-assistant changes.
- Keep the site static-only unless a new gate explicitly approves otherwise.
- Do not add forms, login, checkout, payment flow, donation flow, fundraising
  claim, contact capture, analytics, tracking scripts, public email addresses,
  localization behavior, external embeds, cookies, accounts, or dynamic
  behavior without exact approval.
- Do not change DNS, hosting, deployment, GitHub Pages settings, provider
  accounts, analytics providers, payment providers, email provider settings, or
  public launch state without exact approval.
- Do not stage, commit, push, publish, deploy, or change remotes without
  explicit approval for that exact action.
- Do not mutate GitHub issues, Projects, labels, milestones, settings,
  provider state, OpenClaw config, OpenClaw memory, gateways, queues, sessions,
  skills, or plugins without exact approval.

## Privacy And Evidence

- Do not store secrets, credentials, private keys, `.env` contents, recovery
  codes, payment data, private identity documents, account data, provider
  dashboards, billing, usage, token data, raw logs, raw sessions, transcripts,
  prompts, prompt/output history, raw memory, private messages, analytics
  exports, contact submissions, or unredacted sensitive personal data.
- Do not create public contact, donation, compliance, security, health,
  financial, legal, or governance claims without review.
- Use sanitized summaries when referencing private VaporHuman, provider,
  email, analytics, or deployment evidence.

## Local Draft And Promotion Gates

- Local edits are local draft work until reviewed.
- Moving changes to repo-ready or remote-visible state requires a clean diff,
  targeted verification, protected-data review, and exact staging/commit/push
  approval.
- Public-facing changes require private-to-public review, deployment approval,
  post-deploy verification, and a rollback path.
- Unknown Exposure should be treated as review-needed.

## Verification

- For content-only static edits, inspect the diff and relevant HTML/CSS.
- For visual or layout changes, preview locally and verify desktop and mobile
  behavior before requesting publication.
- For `sitemap.xml`, `robots.txt`, `CNAME`, or URL changes, verify consistency
  across linked pages before requesting deployment.

## Expected Closeout

When changing files, report:

- changed paths,
- verification performed,
- protected-data check,
- unresolved assumptions,
- next approval gate, if any.
