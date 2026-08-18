import { useEffect, useState } from "react";
import { MENU, CONTACT, type NavItem } from "@/data/nav";
import { SocialIcons } from "./SocialIcons";
import { SiteLink } from "./SiteLink";
import logoAsset from "@/assets/mastr-tents-and-shades-logo.jpg.asset.json";

function DropdownList({ items, level = 0 }: { items: NavItem[]; level?: number }) {
  return (
    <ul
      className={`mts-dropdown absolute ${
        level === 0 ? "left-0 top-full" : "left-full top-0"
      } z-50 hidden min-w-[260px] border border-black/10 bg-white py-1 shadow-lg`}
    >
      {items.map((item) => (
        <li key={item.href} className="mts-menu-item relative">
          <SiteLink
            href={item.href}
            className="flex items-center justify-between whitespace-nowrap px-4 py-2 text-[16px] font-medium tracking-[-0.5px] text-mts-gold hover:bg-mts-light hover:text-mts-navy"
          >
            {item.label}
            {item.children ? <span className="ml-3 text-xs">›</span> : null}
          </SiteLink>
          {item.children ? <DropdownList items={item.children} level={level + 1} /> : null}
        </li>
      ))}
    </ul>
  );
}

function MobileItem({ item, depth = 0, onNavigate }: { item: NavItem; depth?: number; onNavigate: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <li className="border-b border-black/10">
      <div className="flex items-center justify-between">
        <SiteLink
          href={item.href}
          onClick={onNavigate}
          className="block flex-1 py-3 text-[15px] text-mts-navy"
          style={{ paddingLeft: depth * 16 }}
        >
          {item.label}
        </SiteLink>
        {item.children ? (
          <button
            type="button"
            aria-label={`Toggle ${item.label}`}
            onClick={() => setOpen((v) => !v)}
            className="px-4 py-3 text-mts-navy"
          >
            {open ? "−" : "+"}
          </button>
        ) : null}
      </div>
      {item.children && open ? (
        <ul>
          {item.children.map((c) => (
            <MobileItem key={c.href} item={c} depth={depth + 1} onNavigate={onNavigate} />
          ))}
        </ul>
      ) : null}
    </li>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 260);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header>
      {/* Top bar */}
      <div className="bg-white">
        <div className="mts-header-container flex flex-wrap items-center justify-between gap-3 border-b border-black/10 py-3">
          <SocialIcons className="gap-5" color="text-mts-gold hover:text-mts-navy" iconClassName="h-[26px] w-[26px]" />
          <div className="flex flex-wrap items-center gap-10">
            <a
              href={CONTACT.mobileTel}
              className="flex items-center gap-2 text-[17px] font-medium text-mts-gold hover:text-mts-navy"
            >
              <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden="true">
                <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.2 1l-2.3 2.2z" />
              </svg>
              CALL US: {CONTACT.mobile}
            </a>
            <SiteLink
              href="/we-are-here-to-help/"
              className="flex items-center gap-2 text-[17px] font-medium text-mts-gold hover:text-mts-navy"
            >
              <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden="true">
                <path d="M2 5h20v3H2zm0 5h20v3H2zm0 5h13v3H2z" />
              </svg>
              GET A QUOTE
            </SiteLink>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-white">
        <div className="mts-header-container flex items-center justify-between py-3">
          <SiteLink href="/" ariaLabel="Master Tents and Shades">
            <img
              src={logoAsset.url}
              alt="Master Tents and Shades"
              width={231}
              height={48}
              className="h-[48px] w-auto sm:h-[60px]"
            />
          </SiteLink>

          <nav className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {MENU.map((item) => (
                <li key={item.href} className="mts-menu-item relative">
                  <SiteLink
                    href={item.href}
                    className="block py-4 text-[18px] font-medium tracking-[-0.4px] text-mts-navy hover:text-mts-gold"
                    activeClassName="block py-4 text-[18px] font-medium tracking-[-0.4px] text-mts-gold"
                  >
                    {item.label}
                  </SiteLink>
                  {item.children ? <DropdownList items={item.children} /> : null}
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            className="lg:hidden text-mts-navy"
            aria-label="Menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor" aria-hidden="true">
              <path d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z" />
            </svg>
          </button>
        </div>

        {mobileOpen ? (
          <nav className="lg:hidden border-t border-black/10 bg-white">
            <ul className="mts-container py-2">
              {MENU.map((item) => (
                <MobileItem key={item.href} item={item} onNavigate={() => setMobileOpen(false)} />
              ))}
            </ul>
          </nav>
        ) : null}
      </div>

      {/* Sticky bar shown on scroll */}
      <div
        className={`fixed left-0 right-0 top-0 z-50 bg-mts-gold transition-transform duration-300 ${
          scrolled ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mx-auto flex max-w-full items-stretch">
          <SiteLink href="/" className="hidden shrink-0 items-center bg-mts-gold px-8 py-3 sm:flex">
            <img
              src="/img/Master-Only-Icon-376x126x0x22x376x80x1720163472.jpg"
              alt="Master Tents and Shades"
              width={192}
              height={40}
              className="h-[40px] w-auto mix-blend-multiply"
            />
          </SiteLink>
          <div className="grid flex-1 grid-cols-1 divide-x divide-white/40 border-l border-white/40 sm:grid-cols-3">
            <div className="px-4 py-3 text-center text-white">
              <p className="text-[15px] font-semibold">CALL US:</p>
              <a href={CONTACT.mobileTel} className="text-[15px] font-semibold">
                {CONTACT.mobile}
              </a>
            </div>
            <div className="hidden px-4 py-3 text-center text-white sm:block">
              <p className="text-[15px] font-semibold">Office time</p>
              <p className="text-[15px] font-semibold">{CONTACT.officeTime}</p>
            </div>
            <div className="hidden px-4 py-3 text-center text-white sm:block">
              <p className="text-[15px] font-semibold">Mail Us:</p>
              <a href={`mailto:${CONTACT.email}`} className="text-[15px] font-semibold">
                {CONTACT.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
