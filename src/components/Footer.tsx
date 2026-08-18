import { CONTACT, FOOTER_LINKS, MENU } from "@/data/nav";
import { SiteLink } from "./SiteLink";
import { SocialIcons } from "./SocialIcons";

export function Footer() {
  const productLinks = [
    ...(MENU.find((m) => m.label === "Tents")?.children ?? []).slice(0, 5),
    ...(MENU.find((m) => m.label === "Parking Shades")?.children ?? []).slice(0, 3),
  ];

  return (
    <footer
      className="text-white"
      style={{ background: "linear-gradient(135deg, #23151a 0%, #2d2226 50%, #1f4357 100%)" }}
    >
      <div className="mts-container grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <img
            src="/img/Master-Only-Icon-188x63x0x11x188x40x1720163472.jpg"
            alt="Master Tents and Shades"
            width={188}
            height={63}
            className="mb-5 h-[63px] w-auto"
          />
          <p className="text-[15px] leading-relaxed text-white/80">
            Master Tents and Shades is a leading manufacturer and supplier of tents, pergolas, car parking shades and
            tensile shade structures across the UAE.
          </p>
          <SocialIcons className="mt-5" color="text-white hover:text-mts-gold" />
        </div>

        <div>
          <h3 className="mb-5 font-serif text-[22px] text-white">Our Products</h3>
          <ul className="space-y-2">
            {productLinks.map((l) => (
              <li key={l.href}>
                <SiteLink href={l.href} className="text-[15px] text-white/80 hover:text-mts-gold">
                  {l.label}
                </SiteLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 font-serif text-[22px] text-white">Quick Links</h3>
          <ul className="space-y-2">
            {FOOTER_LINKS.map((l) => (
              <li key={l.href}>
                <SiteLink href={l.href} className="text-[15px] text-white/80 hover:text-mts-gold">
                  {l.label}
                </SiteLink>
              </li>
            ))}
            <li>
              <SiteLink href="/about/" className="text-[15px] text-white/80 hover:text-mts-gold">
                About Us
              </SiteLink>
            </li>
            <li>
              <SiteLink href="/we-are-here-to-help/" className="text-[15px] text-white/80 hover:text-mts-gold">
                Contact Us
              </SiteLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-5 font-serif text-[22px] text-white">Contact Us</h3>
          <address className="space-y-2 text-[15px] not-italic text-white/80">
            <p>{CONTACT.company}</p>
            {CONTACT.addressLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
            <p>
              Mobile:{" "}
              <a href={CONTACT.mobileTel} className="hover:text-mts-gold">
                {CONTACT.mobile}
              </a>
            </p>
            <p>
              Office:{" "}
              <a href={CONTACT.officeTel} className="hover:text-mts-gold">
                {CONTACT.office}
              </a>
            </p>
            <p>
              <a href={`mailto:${CONTACT.email}`} className="hover:text-mts-gold">
                {CONTACT.email}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mts-container py-5 text-center text-[14px] text-white/70">
          © {new Date().getFullYear()} Master Tents and Shades LLC. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
