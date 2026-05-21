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
    { href: "/about.html", label: "About" },
    { href: "/trust.html", label: "Trust" },
    { href: "/faq.html", label: "FAQ" }
  ],
  utilityActions: [
    { label: "Login", action: "login" }
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
    { href: "/about.html", label: "About" },
    { href: "/trust.html", label: "Trust boundary" },
    { href: "/faq.html", label: "FAQ" }
  ],
  footerFiles: [
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
    "/about.html",
    "/trust.html",
    "/faq.html",
    "/accessibility.html",
    "/sitemap"
  ]
};

export type Card = {
  title: string;
  body: string;
  href?: string;
};
