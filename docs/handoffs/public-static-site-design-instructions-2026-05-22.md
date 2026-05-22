# Public Static Site Design Instructions

Archived from the 2026-05-22 VaporHuman redesign session for reuse on future
static public-site design work. The original target was `vaporhuman.com`; adapt
project identity, provider posture, language restrictions, and public-claim
boundaries before applying this packet to another site.

## Original VaporHuman Website Development Instructions

## Project identity

VaporHuman.com is a public trust surface for private AI continuity systems.

The website must communicate:
- Human oversight remains central.
- Assistant output supports judgment; it does not replace it.
- Memory, handoffs, approvals, context, and boundaries are the core themes.
- The site is early, modest, and truthful.
- Provider-hosted workflows are used intentionally.

Do not write public-facing copy that overclaims product readiness, safety, privacy, automation, medical/legal/financial/employment authority, or guaranteed outcomes.

## Current operating posture

The current site uses:
- Static public pages.
- Tally for hosted work intake.
- Stripe for hosted paid discovery.
- Fourthwall for hosted shop/checkout.
- No embedded login.
- No embedded checkout.
- No analytics scripts.
- No tracking pixels.
- No hidden forms.
- No live assistant service.
- No public dashboard yet.

Preserve these boundaries unless explicitly asked otherwise.

## Language rules

Avoid using these public-facing words as direct descriptors of the site experience:
- professional
- fun
- immersive
- engaging
- interactive

The experience may still embody those qualities through structure, motion, pacing, clarity, and behavior.

Preferred tone:
- Clear
- Human-centered
- Trustworthy
- Precise
- Slightly futuristic
- Warm but not fluffy
- Technical without being cold

Avoid:
- Hype
- Startup clichés
- “Revolutionary”
- “AI-powered everything”
- “Fully automated”
- “Guaranteed”
- “Private by default” unless implementation proves it
- “Safe” as an absolute claim
- Any claim that AI can replace human responsibility

## Design direction

The redesign should feel like:
- A calm control room.
- A private operating layer.
- A continuity map becoming readable.
- A human checkpoint inside an AI workflow.
- A system that makes uncertainty visible.

Visual direction:
- Dark base or deep neutral foundation.
- High-contrast readable text.
- Vapor/glass/grid/circuit motifs used subtly.
- Motion that reveals structure rather than decoration.
- Cards, panels, timelines, step systems, and decision gates.
- Clear focus states and keyboard navigation.
- Respect `prefers-reduced-motion`.

## Page goals

### Home

Build a more active landing experience that:
- Shows the transformation from scattered AI work into a usable private workflow.
- Includes a hero with a system-map feeling.
- Includes a functional homepage element, such as a workflow-path selector, trust-gate explorer, or continuity map preview.
- Routes clearly to Work, Trust Boundary, About, and Shop.
- Keeps the “human in charge” message visible.

### About

Create origin-story storytelling with animation:
- Scroll-triggered or staged narrative.
- Show the movement from scattered context to structured continuity.
- Use abstract visual language: fragments, memory threads, checkpoints, handoff lanes, approval gates.
- Keep the story grounded and modest.
- Do not invent unverifiable company history.
- Make inactive sections like newsroom, careers, investors, events appear as intentional future placeholders, not abandoned areas.

### Work

Make service selection easier:
- Assistant workflow audit.
- Private continuity system.
- Product/support architecture.
- Launch readiness review.

Consider a client-fit selector that does not collect personal data and does not submit anything.

### Trust

Turn the trust boundary into a visual or expandable system:
- What is the system using to answer?
- What is uncertain?
- What needs human approval?
- What is not allowed?

Keep non-claims visible.

### FAQ

Use collapsible sections and simple filters if appropriate.

### Shop

Keep Fourthwall external.
Show the shop as a support lane.
Do not imply VaporHuman checkout is embedded.

### Social

Keep static share behavior.
No social embeds or tracking.
Use share cards and transparent explanation.

### Legal / policy pages

Keep them readable and plain.
Add section navigation if useful.
Do not make legal pages flashy.
Do not remove disclaimers.

## Technical requirements

Prefer a static-site-compatible implementation.

Acceptable:
- HTML
- CSS
- Vanilla JavaScript
- Lightweight SVG
- CSS animations
- Small local JS modules
- Static JSON content if useful
- Playwright tests

Avoid unless already present:
- Heavy frameworks
- New build systems
- Large animation dependencies
- Analytics
- Tracking libraries
- Client-side data collection
- External scripts that are not already required

If adding dependencies:
- Ask first unless the dependency is already present.
- Prefer no dependency when CSS/SVG/vanilla JS is enough.

## Accessibility requirements

Must include:
- Semantic HTML.
- Keyboard-operable controls.
- Visible focus states.
- Proper ARIA only where needed.
- Motion reduction via `prefers-reduced-motion`.
- Color contrast suitable for dark and light areas.
- No text trapped inside images.
- No essential information only conveyed through animation.
- Accordions/selectors must be accessible.
- Navigation must work without JavaScript where possible.

## Testing requirements

Use Playwright CLI where possible.

After implementation, run or create checks for:
- Home page loads.
- Navigation links work.
- Buttons and external links exist.
- Accordions/selectors are keyboard accessible.
- Reduced-motion mode does not break layout.
- Mobile viewport layout is usable.
- No console errors.
- No broken internal links.
- Legal/policy pages remain reachable.

## Implementation style

Before changing files:
1. Inspect the repo.
2. Identify the current architecture.
3. List the files that will change.
4. Preserve existing working external links.
5. Preserve policy and trust language unless improving clarity.

After changing files:
1. Summarize what changed.
2. List modified files.
3. List tests run.
4. List anything still unresolved.
5. Do not claim success unless tests passed or explain what could not be run.

## Non-negotiables

- No hidden tracking.
- No fake login.
- No fake dashboard.
- No fake AI assistant.
- No fake testimonials.
- No fake press.
- No invented team roster.
- No donation language unless provider/legal wording is ready.
- No professional-advice claims.
- No absolute safety/privacy guarantees.
- Human approval remains the center of the system.
