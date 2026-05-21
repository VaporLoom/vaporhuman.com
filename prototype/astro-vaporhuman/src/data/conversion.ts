export const intakeFields = [
  {
    label: "Company name",
    example: "Acme Studio, solo founder, creator brand, or internal team"
  },
  {
    label: "Company size",
    example: "Solo, 2-10, 11-50, 51-200, or 201+"
  },
  {
    label: "Product or service",
    example:
      "Private continuity, workflow audit, support architecture, launch readiness, VaporCustos, or suite integration"
  },
  {
    label: "Buying stage",
    example: "Exploring, needs proposal, ready for pilot, or ready for paid build"
  },
  {
    label: "Main goal",
    example:
      "Generate leads, improve operations, organize AI work, support customers, or build a private product lane"
  },
  {
    label: "Message",
    example:
      "Short context about what you want VaporHuman to help build, fix, or make usable"
  }
];

export const productSelections = [
  "VaporHuman private continuity system",
  "Assistant workflow audit",
  "Support knowledge base architecture",
  "Launch readiness and public trust review",
  "VaporCustos selected suite service",
  "VaporArch improvement proposal loop",
  "VaporStream / VaporTwitch creator workflow",
  "Not sure yet"
];

export const providerRecommendations = [
  {
    title: "Lead intake",
    provider: "Tally, Typeform, HubSpot, or custom form endpoint",
    status: "Provider selection needed",
    body:
      "Use for company name, company size, product/service selection, buying stage, and message capture."
  },
  {
    title: "Paid services",
    provider: "Stripe Payment Links",
    status: "Recommended first",
    body:
      "Fastest path for service packages, paid discovery, suite offers, subscriptions, or pay-what-you-want support payments."
  },
  {
    title: "Creator shop",
    provider: "Fourthwall with StreamElements",
    status: "Existing account available",
    body:
      "Use the current Fourthwall shop as the first live income route while service checkout, donation wording, and crowdfunding are prepared."
  },
  {
    title: "Donation-style support",
    provider: "Stripe Payment Links or PayPal Donate",
    status: "Wording and eligibility gate",
    body:
      "Use only with accurate support/tip/donation language, provider eligibility, refund policy, and no tax-deductibility claim unless verified."
  },
  {
    title: "Campaign crowdfunding",
    provider: "Kickstarter or Indiegogo",
    status: "Campaign packet needed",
    body:
      "Best for a public launch campaign with reward tiers, funding goal, fulfillment promises, updates, and campaign-specific risk language."
  }
];

export const checkoutTargets = [
  {
    title: "IrieVision Fourthwall shop",
    body:
      "Existing merch and creator-commerce storefront linked to StreamElements.",
    status: "Live external shop"
  },
  {
    title: "VaporHuman private intake",
    body:
      "Paid discovery, continuity mapping, workflow audit, or launch readiness work.",
    status: "Stripe Payment Link pending"
  },
  {
    title: "VaporCustos suite service",
    body:
      "Selected suite product/service checkout target for custody, control, or protected workflow work.",
    status: "Product terms and checkout gate required"
  },
  {
    title: "Support the VaporHuman lane",
    body:
      "Support payment, tip, sponsorship, or donation-style contribution for the public trust and continuity work.",
    status: "Payment wording and provider gate required"
  },
  {
    title: "Crowdfunding campaign",
    body:
      "Public campaign for VaporHuman or the broader suite, with defined deliverables and reward tiers.",
    status: "Kickstarter or Indiegogo packet required"
  }
];

export const sharePages = [
  {
    title: "VaporHuman",
    path: "/",
    body: "Share the main private AI continuity systems page."
  },
  {
    title: "Work With VaporHuman",
    path: "/work.html",
    body: "Share the production offer and private intake page."
  },
  {
    title: "VaporHuman Shop",
    path: "/shop.html",
    body: "Share the Fourthwall-powered shop route."
  },
  {
    title: "Trust Boundary",
    path: "/trust.html",
    body: "Share the human-approval and non-claims posture."
  },
  {
    title: "FAQ",
    path: "/faq.html",
    body: "Share the current plain-language answers."
  }
];

export const conversionGates = [
  "Choose lead destination: CRM, email provider, database, or private queue.",
  "Choose checkout provider and product catalog owner.",
  "Approve privacy notice, retention, refunds, receipts, taxes, and support policy.",
  "Add spam protection and failure-state copy before public lead capture.",
  "Verify provider settings and rollback before deployment."
];

export const fourthwallShop = {
  title: "IrieVision shop",
  url: "https://irievision-co-shop.fourthwall.com/",
  futureDomain: "shop.vaporhuman.com",
  provider: "Fourthwall",
  connectedPlatform: "StreamElements",
  status: "Existing external storefront",
  body:
    "Use this as the first live commerce path while VaporHuman-specific service payments, donation/support links, and crowdfunding are prepared.",
  domainGate:
    "Connect the custom subdomain in Fourthwall Settings > Domain, then add the DNS records at the domain provider. Keep the root domain on the main VaporHuman site."
};

export const shopActions = [
  {
    title: "Visit the live shop",
    body:
      "Send supporters to the existing Fourthwall storefront for current merch and creator-commerce support."
  },
  {
    title: "Prepare shop.vaporhuman.com",
    body:
      "Use a subdomain for Fourthwall so the main site can remain the source for trust, intake, services, and future product routing."
  },
  {
    title: "Promote on stream",
    body:
      "Keep the StreamElements integration active so purchases and memberships can become live support moments during streams."
  }
];
