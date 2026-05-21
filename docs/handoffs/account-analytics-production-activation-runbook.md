# Account and Analytics Production Activation Runbook

Status: local draft activation packet. Do not paste secrets into git.

## What Is Prepared

- The public site can expose an account entry link when
  `PUBLIC_ACCOUNT_PORTAL_URL` is set at build time.
- The public site can emit a consent-gated Google Analytics tag when
  `PUBLIC_GA_MEASUREMENT_ID` is set at build time.
- Without those values, the generated static site remains no-account-link and
  no-analytics.

## Account Gate

Provider values needed outside git:

- Production portal URL, likely a protected app subdomain.
- Supabase project URL.
- Supabase publishable key.
- First approved admin account.
- Approved redirect URLs for the deployed portal.

Activation sequence:

1. Deploy the account portal to a protected host.
2. Configure Supabase Auth redirects for the deployed portal.
3. Run the reviewed profile and role SQL with Row Level Security enabled.
4. Pre-create approved users or otherwise enforce invite-only access.
5. Set `PUBLIC_ACCOUNT_PORTAL_URL` for the public site build.
6. Build, QA, deploy, and verify the public Account link.

## Google Analytics Gate

Provider values needed outside git:

- GA4 web stream Measurement ID, starting with `G-`.
- GA4 property ID for internal dashboard API reads.
- Google Cloud project with Google Analytics Data API enabled.
- Dashboard-only credential path, such as a service account or OAuth flow,
  stored only in the internal dashboard environment.

Activation sequence:

1. Create or choose the GA4 property and web data stream for `vaporhuman.com`.
2. Copy the Measurement ID from the web stream.
3. Decide whether Google signals/demographics are enabled in GA. Treat
   demographic and interest reports as aggregate, thresholded, admin-only data.
4. Set `PUBLIC_GA_MEASUREMENT_ID` for the public site build.
5. Build and run QA with that environment value.
6. Deploy and verify that no Google tag loads before analytics consent, then
   verify a page visit after consent.

## VaporDash And VaporOps Gate

Internal dashboards should consume aggregate data only:

- page path totals and trends,
- acquisition/source summaries,
- coarse country/region/language only when useful,
- demographic reports only when available, thresholded, and admin-only,
- Stripe/Tally/Fourthwall metrics only after separate provider gates.

Do not put GA credentials, dashboard API keys, raw exports, visitor IDs,
provider screenshots, or private customer records in this public repo.

## Current Stop Lines

- No live tracking until a real Measurement ID is supplied and deployed.
- No public account creation until the portal is deployed and invite policy is
  verified.
- No VaporDash/VaporOps API ingestion until the internal dashboard repo and
  credential storage path are selected.
