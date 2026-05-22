export const intakeFields = [
  {
    label: "Company / Project Name",
    example: "Business, creator brand, internal team, or active project"
  },
  {
    label: "Contact Name",
    example: "Primary person for follow-up"
  },
  {
    label: "Email Address",
    example: "Reply address for this request"
  },
  {
    label: "Company Size",
    example: "Solo, 2-10, 11-50, 51-200, or 201+"
  },
  {
    label: "What Do You Need Help With?",
    example:
      "AI workflow, lead generation, creator assets, support systems, accounting/admin automation, or suite product help"
  },
  {
    label: "Buying Stage",
    example: "Exploring options, need a recommendation, ready for a proposal, or ready to start"
  },
  {
    label: "Main Goal",
    example:
      "The outcome that would make the work successful"
  },
  {
    label: "Message",
    example:
      "Context, timeline, tools, constraints, or details that help route the request"
  },
  {
    label: "Consent",
    example:
      "Agreement to use the submission to respond, with no secrets, payment details, or emergency requests"
  }
];

export const productSelections = [
  "AI Workflow Help",
  "Website / Lead Generation",
  "Creator / Streaming Assets",
  "Knowledge Base / Support System",
  "Accounting / Admin Automation",
  "VaporHuman Suite Product",
  "Other / Not Sure Yet"
];

export const leadIntakeForm = {
  title: "VaporHuman Work Intake",
  url: "https://tally.so/r/WOjO8k",
  provider: "Tally",
  status: "Live external intake link",
  body:
    "Use this hosted form for qualified work requests. Tally hosts the form; vaporhuman.com does not embed the form or run intake scripts.",
  boundary:
    "Do not submit secrets, payment details, private keys, recovery codes, sensitive personal data, or emergency requests."
};

export const paidDiscoveryLink = {
  title: "VaporHuman Paid Discovery Session",
  url: "https://buy.stripe.com/8x27sM4P76rb4Qo5Wd4ow00",
  provider: "Stripe Payment Link",
  status: "Live Stripe-hosted payment link",
  body:
    "A remote consultation to review your workflow, website, lead path, automation needs, or AI/business operations setup and recommend the next practical step.",
  boundary:
    "This is not emergency support, regulated advice, tax/legal/financial/accounting certification, guaranteed delivery, investment advice, or a promise that a larger build will be accepted."
};

export const providerRecommendations = [
  {
    title: "Lead intake",
    provider: "Tally hosted form",
    status: "Live external intake link",
    body:
      "Use for company/project details, contact details, company size, service interest, buying stage, goal, message, and consent."
  },
  {
    title: "Paid services",
    provider: "Stripe Payment Link",
    status: "Live paid-discovery link",
    body:
      "Use the hosted paid-discovery link for a first remote review before custom scope, invoices, subscriptions, or suite checkout."
  },
  {
    title: "Creator shop",
    provider: "Fourthwall with StreamElements",
    status: "Existing account available",
    body:
      "Use the current Fourthwall shop as the first live income route while service checkout and branded shop routing remain separate gates."
  },
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
      "Paid discovery session for workflow, website, lead path, automation, or AI/business operations review.",
    status: "Live Stripe-hosted payment link",
    href: paidDiscoveryLink.url
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
      "A future support lane would need provider wording, refund posture, receipts, taxes, and support policy before publication.",
    status: "Provider and policy gate required"
  },
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
  "Lead destination selected: Tally hosted form. Embeds, CRM routing, and webhooks remain separate gates.",
  "First paid service selected: Stripe-hosted paid discovery. Embeds, subscriptions, invoices, and suite checkout remain separate gates.",
  "Approve privacy notice, retention, refunds, receipts, taxes, and support policy.",
  "Verify notification delivery, spam protection, and failure-state copy before scaling lead capture.",
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
    "Use this as the first live commerce path while VaporHuman-specific service payments, support links, and campaign work remain separate gates.",
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
