import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join, relative } from "node:path";

const root = process.cwd();
const dist = join(root, "dist");

const failures = [];
const notes = [];

function fail(message) {
  failures.push(message);
}

function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = join(dir, entry.name);
    return entry.isDirectory() ? walk(fullPath) : [fullPath];
  });
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
    { name: "Stripe checkout endpoint", pattern: /checkout\.stripe\.com|buy\.stripe\.com/i },
    { name: "PayPal checkout endpoint", pattern: /paypal\.com\/checkout|paypal\.me/i }
  ];

  for (const file of textFiles) {
    const content = readFileSync(file, "utf8");
    const rel = relative(root, file);
    for (const check of forbidden) {
      if (check.pattern.test(content)) {
        fail(`${check.name} found in ${rel}`);
      }
    }
  }

  const noindexRoutes = [];

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
    "about.html",
    "trust.html",
    "faq.html",
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
      "Company name",
      "Company size",
      "Product or service",
      "VaporCustos",
      "Stripe Payment Link pending",
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

  for (const file of textFiles) {
    const content = readFileSync(file, "utf8");
    const rel = relative(root, file);
    for (const staleRoute of staleRoutes) {
      if (content.includes(staleRoute)) {
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
