export const site = {
  name: "VaporHuman",
  origin: "https://vaporhuman.com",
  defaultDescription:
    "VaporHuman designs private AI continuity systems that keep human judgment, trust boundaries, and usable handoffs visible.",
  image: "/assets/vaporware-human-layer.png",
  nav: [
    { href: "/work.html", label: "Work With Us" },
    { href: "/shop.html", label: "Shop" },
    { href: "/social.html", label: "Social" },
    { href: "/games.html", label: "Play" },
    { href: "/about.html", label: "About" },
    { href: "/trust.html", label: "Trust" },
    { href: "/faq.html", label: "FAQ" }
  ],
  utilityActions: [
    { label: "Account", action: "account" }
  ],
  utilityControls: [
    { label: "Currency", value: "USD" },
    { label: "Language", value: "EN" }
  ],
  footerExplore: [
    { href: "/", label: "Home" },
    { href: "/work.html", label: "Work with VaporHuman" },
    { href: "/shop.html", label: "Shop" },
    { href: "/social.html", label: "Social and share" },
    { href: "/games.html", label: "Play VaporPong" },
    { href: "/about.html", label: "About" },
    { href: "/trust.html", label: "Trust boundary" },
    { href: "/faq.html", label: "FAQ" },
    { href: "/privacy.html", label: "Privacy" },
    { href: "/terms.html", label: "Terms" },
    { href: "/refund-support.html", label: "Refund and support" }
  ],
  footerFiles: [
    { href: "/privacy.html", label: "Privacy policy" },
    { href: "/terms.html", label: "Terms" },
    { href: "/refund-support.html", label: "Refund and support" },
    { href: "/accessibility.html", label: "Accessibility" },
    { href: "/sitemap", label: "Site map" },
    { href: "/sitemap.xml", label: "XML sitemap" },
    { href: "/robots.txt", label: "Robots" }
  ],
  crawlablePages: [
    "/",
    "/work.html",
    "/shop.html",
    "/social.html",
    "/games.html",
    "/about.html",
    "/trust.html",
    "/faq.html",
    "/privacy.html",
    "/terms.html",
    "/refund-support.html",
    "/accessibility.html",
    "/sitemap"
  ]
};

export type Card = {
  title: string;
  body: string;
  href?: string;
};
