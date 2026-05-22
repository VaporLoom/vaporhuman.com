import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join, relative } from "node:path";

const root = process.cwd();
const dist = join(root, "dist");

const failures = [];
const notes = [];
const gaMeasurementId = process.env.PUBLIC_GA_MEASUREMENT_ID || "";
const analyticsGateEnabled = /^G-[A-Z0-9-]+$/i.test(gaMeasurementId);
const commentedAnalyticsBlockPattern =
  /<!-- vaporhuman-analytics-consent:start -->[\s\S]*?<!-- vaporhuman-analytics-consent:end -->/g;
const generatedAnalyticsBlockPattern =
  /<section class="analytics-consent"[\s\S]*?<\/section><script>\(function\(\)\{const measurementId = "[^"]+";[\s\S]*?<\/script>/g;

function fail(message) {
  failures.push(message);
}

function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = join(dir, entry.name);
    return entry.isDirectory() ? walk(fullPath) : [fullPath];
  });
}

function routeReferencePattern(route) {
  const escaped = route.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`(?:^|["'(/=\\s])/?${escaped}(?:$|["')?#<\\s])`, "i");
}

function stripApprovedAnalyticsBlocks(content, rel) {
  const blocks = [
    ...content.matchAll(commentedAnalyticsBlockPattern),
    ...content.matchAll(generatedAnalyticsBlockPattern)
  ];
  if (blocks.length === 0) return content;

  if (!analyticsGateEnabled) {
    fail(`analytics consent block generated without PUBLIC_GA_MEASUREMENT_ID in ${rel}`);
    return content;
  }

  for (const match of blocks) {
    const block = match[0];
    for (const signal of [
      gaMeasurementId,
      "data-analytics-consent",
      "data-analytics-accept",
      "data-analytics-decline",
      "vh_analytics_consent",
      "googletagmanager.com/gtag/js",
      "analytics_storage",
      "ad_storage",
      "ad_user_data",
      "ad_personalization"
    ]) {
      if (!block.includes(signal)) {
        fail(`approved analytics block is missing ${signal} in ${rel}`);
      }
    }
  }

  return content
    .replace(commentedAnalyticsBlockPattern, "")
    .replace(generatedAnalyticsBlockPattern, "");
}

if (!existsSync(dist)) {
  fail("dist/ is missing. Run npm run build before npm run qa.");
} else {
  const files = walk(dist);
  const htmlFiles = files.filter((file) => file.endsWith(".html"));
  const textFiles = files.filter((file) => /\.(html|css|js|xml|txt)$/.test(file));

  const forbidden = [
    { name: "script tag", pattern: /<script\b/i },
    { name: "form tag", pattern: /<form\b/i },
    { name: "Google Tag Manager", pattern: /googletagmanager\.com/i },
    { name: "Google Analytics endpoint", pattern: /google-analytics\.com/i },
    { name: "gtag call", pattern: /\bgtag\s*\(/i },
    { name: "localStorage", pattern: /\blocalStorage\b/i },
    { name: "sessionStorage", pattern: /\bsessionStorage\b/i },
    { name: "document.cookie", pattern: /\bdocument\.cookie\b/i },
    { name: "fetch call", pattern: /\bfetch\s*\(/i },
    { name: "XMLHttpRequest", pattern: /\bXMLHttpRequest\b/i },
    { name: "Google account OAuth", pattern: /accounts\.google\.com/i },
    { name: "mailto link", pattern: /mailto:/i },
    { name: "PayPal checkout endpoint", pattern: /paypal\.com\/checkout|paypal\.me/i }
  ];

  const approvedStripeLinks = new Set([
    "https://buy.stripe.com/8x27sM4P76rb4Qo5Wd4ow00"
  ]);

  for (const file of textFiles) {
    const rel = relative(root, file);
    const relNormalized = rel.replace(/\\/g, "/");
    const isLocalGameAsset = relNormalized === "dist/games/vaporpong.html";
    const rawContent = readFileSync(file, "utf8");
    const content = stripApprovedAnalyticsBlocks(rawContent, rel);
    for (const check of forbidden) {
      if (isLocalGameAsset && check.name === "script tag") continue;
      if (check.pattern.test(content)) {
        fail(`${check.name} found in ${rel}`);
      }
    }

    const stripeMatches = content.matchAll(/https:\/\/(?:checkout|buy)\.stripe\.com\/[A-Za-z0-9?&_=.-]+/g);
    for (const match of stripeMatches) {
      if (!approvedStripeLinks.has(match[0])) {
        fail(`unapproved Stripe hosted checkout link found in ${rel}: ${match[0]}`);
      }
    }
  }

  const noindexRoutes = [
    "next-steps.html"
  ];

  for (const route of noindexRoutes) {
    const file = join(dist, route);
    if (!existsSync(file)) {
      fail(`expected noindex route missing: ${route}`);
      continue;
    }

    const content = readFileSync(file, "utf8");
    if (!/<meta name="robots" content="noindex,nofollow">/i.test(content)) {
      fail(`missing noindex,nofollow robots meta: ${route}`);
    }
  }

  const staleRoutes = [
    "login.html",
    "dashboard.html",
    "architecture.html",
    "experience.html",
    "support.html",
    "support/account-membership.html",
    "support/rate-limits.html",
    "support/privacy-analytics.html",
    "support/streaming-assets.html",
    "support/trust-boundary.html",
    "support/troubleshooting.html",
    "support/chat-bot.html",
    "support/improvement-proposals.html",
    "continuity.html",
    "donations.html"
  ];

  for (const staleRoute of staleRoutes) {
    if (existsSync(join(dist, staleRoute))) {
      fail(`stale non-production route was generated: ${staleRoute}`);
    }
  }

  const productionRoutes = [
    "index.html",
    "work.html",
    "shop.html",
    "social.html",
    "games.html",
    "games/vaporpong.html",
    "about.html",
    "trust.html",
    "faq.html",
    "privacy.html",
    "terms.html",
    "refund-support.html",
    "accessibility.html",
    "sitemap/index.html"
  ];

  for (const route of productionRoutes) {
    if (!existsSync(join(dist, route))) {
      fail(`expected production route missing: ${route}`);
    }
  }

  const workPath = join(dist, "work.html");
  if (existsSync(workPath)) {
    const work = readFileSync(workPath, "utf8");
    for (const signal of [
      "Company / Project Name",
      "Company Size",
      "What Do You Need Help With?",
      "https://tally.so/r/WOjO8k",
      "https://buy.stripe.com/8x27sM4P76rb4Qo5Wd4ow00",
      "VaporHuman Paid Discovery Session",
      "Accounting / Admin Automation",
      "Live Stripe-hosted payment link",
      "Before leads or money move"
    ]) {
      if (!work.includes(signal)) {
        fail(`work page conversion signal missing: ${signal}`);
      }
    }
  }

  const socialPath = join(dist, "social.html");
  if (existsSync(socialPath)) {
    const social = readFileSync(socialPath, "utf8");
    for (const signal of [
      "Share VaporHuman",
      "linkedin.com/sharing",
      "twitter.com/intent/tweet",
      "facebook.com/sharer"
    ]) {
      if (!social.includes(signal)) {
        fail(`social page share signal missing: ${signal}`);
      }
    }
  }

  const privacyPath = join(dist, "privacy.html");
  if (existsSync(privacyPath)) {
    const privacy = readFileSync(privacyPath, "utf8");
    const privacySignals = analyticsGateEnabled ? [
      "Tally hosts the work-intake form",
      "Stripe hosts the paid-discovery checkout",
      "Fourthwall hosts the creator shop",
      "Google Analytics",
      "Analytics is optional and consent-gated"
    ] : [
      "Tally hosts the work-intake form",
      "Stripe hosts the paid-discovery checkout",
      "Fourthwall hosts the creator shop",
      "does not include analytics scripts"
    ];
    for (const signal of privacySignals) {
      if (!privacy.includes(signal)) {
        fail(`privacy page signal missing: ${signal}`);
      }
    }
  }

  const termsPath = join(dist, "terms.html");
  if (existsSync(termsPath)) {
    const terms = readFileSync(termsPath, "utf8");
    for (const signal of [
      "No emergency use",
      "No guaranteed outcome",
      "Payment does not create unlimited service",
      "Refund and Support"
    ]) {
      if (!terms.includes(signal)) {
        fail(`terms page signal missing: ${signal}`);
      }
    }
  }

  const refundPath = join(dist, "refund-support.html");
  if (existsSync(refundPath)) {
    const refund = readFileSync(refundPath, "utf8");
    for (const signal of [
      "Completed discovery sessions are generally not refundable",
      "No emergency support",
      "Use the active provider route",
      "Fourthwall handles the creator shop"
    ]) {
      if (!refund.includes(signal)) {
        fail(`refund/support page signal missing: ${signal}`);
      }
    }
  }

  const nextStepsPath = join(dist, "next-steps.html");
  if (existsSync(nextStepsPath)) {
    const nextSteps = readFileSync(nextStepsPath, "utf8");
    for (const signal of [
      "robots\" content=\"noindex,nofollow",
      "After intake",
      "After paid discovery",
      "Open intake form",
      "This page is only a confirmation and routing surface"
    ]) {
      if (!nextSteps.includes(signal)) {
        fail(`next steps page signal missing: ${signal}`);
      }
    }
  }

  const shopPath = join(dist, "shop.html");
  if (existsSync(shopPath)) {
    const shop = readFileSync(shopPath, "utf8");
    for (const signal of [
      "irievision-co-shop.fourthwall.com",
      "Fourthwall",
      "StreamElements",
      "shop.vaporhuman.com"
    ]) {
      if (!shop.includes(signal)) {
        fail(`shop page signal missing: ${signal}`);
      }
    }
  }

  const gamesPath = join(dist, "games.html");
  if (existsSync(gamesPath)) {
    const games = readFileSync(gamesPath, "utf8");
    for (const signal of [
      "Play VaporPong",
      "/games/vaporpong.html",
      "does not require login, checkout, tracking, or a live assistant",
      "Player 1: W/S"
    ]) {
      if (!games.includes(signal)) {
        fail(`games page signal missing: ${signal}`);
      }
    }
  }

  const vaporPongPath = join(dist, "games", "vaporpong.html");
  if (existsSync(vaporPongPath)) {
    const vaporPong = readFileSync(vaporPongPath, "utf8");
    for (const signal of [
      "<canvas",
      "VaporPong",
      "Mode: CPU P1",
      "CPU: Normal",
      "CPU_SETTINGS",
      "All rights reserved.",
      "prefers-reduced-motion",
      "pointerdown",
      "function pauseGame"
    ]) {
      if (!vaporPong.includes(signal)) {
        fail(`VaporPong asset signal missing: ${signal}`);
      }
    }
    for (const blocked of [
      /https?:\/\//i,
      /<form\b/i,
      /<script[^>]+src=/i,
      /\blocalStorage\b/i,
      /\bsessionStorage\b/i,
      /\bdocument\.cookie\b/i,
      /\bfetch\s*\(/i,
      /\bXMLHttpRequest\b/i
    ]) {
      if (blocked.test(vaporPong)) {
        fail(`blocked behavior found in VaporPong asset: ${blocked}`);
      }
    }
  }

  for (const file of textFiles) {
    const content = readFileSync(file, "utf8");
    const rel = relative(root, file);
    for (const staleRoute of staleRoutes) {
      if (routeReferencePattern(staleRoute).test(content)) {
        fail(`stale non-production route reference found in ${rel}: ${staleRoute}`);
      }
    }
  }

  const sitemapPath = join(dist, "sitemap.xml");
  if (!existsSync(sitemapPath)) {
    fail("dist/sitemap.xml is missing");
  } else {
    const sitemap = readFileSync(sitemapPath, "utf8");
    for (const route of noindexRoutes) {
      if (sitemap.includes(route)) {
        fail(`noindex route is present in sitemap.xml: ${route}`);
      }
    }
  }

  notes.push(`${htmlFiles.length} HTML files checked`);
  notes.push(`${textFiles.length} text output files scanned`);
}

if (failures.length > 0) {
  console.error("QA failed:");
  for (const item of failures) console.error(`- ${item}`);
  process.exit(1);
}

console.log("QA passed:");
for (const item of notes) console.log(`- ${item}`);
