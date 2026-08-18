import { CONTACT } from "@/data/nav";
import { SiteLink } from "./SiteLink";
import { SocialIcons } from "./SocialIcons";

const PRODUCT_LINKS = [
  { label: "All kind of Pergola Shades", href: "/pergola-suppliers-in-dubai/" },
  { label: "All kind of Parking Shades", href: "/car-parking-shade-suppliers-uae/" },
  { label: "All kind of Tensile Shades", href: "/new-sun-shade-suppliers-in-dubai/" },
  { label: "New Awning Shades", href: "/new-awning-shades-in-dubai/" },
  { label: "New Umbrella Shades", href: "/umbrella-shades-in-uae/" },
];

export function Footer() {
  return (
    <footer
      className="text-white"
      style={{ backgroundImage: "linear-gradient(rgb(31, 67, 87) 0%, rgb(35, 21, 26) 100%)" }}
    >
      <div className="mts-container pt-10 pb-4">
        <div className="grid gap-8 md:grid-cols-3 md:items-start">
          {/* Contact */}
          <div className="text-[16px] leading-[32px] text-white">
            <p className="mb-2 font-semibold leading-[28.8px]">{CONTACT.company}</p>
            <p>
              <a href={CONTACT.officeTel} className="hover:text-mts-gold">
                {CONTACT.office}
              </a>{" "}
              |{" "}
              <a href={CONTACT.mobileTel} className="hover:text-mts-gold">
                {CONTACT.mobile}
              </a>
            </p>
            <p>
              <a href={`mailto:${CONTACT.email}`} className="hover:text-mts-gold">
                {CONTACT.email}
              </a>
            </p>
            {CONTACT.addressLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          {/* Logo + socials */}
          <div className="flex flex-col items-center">
            <SiteLink href="/">
              <img
                src="/img/icon-1.png"
                alt="Master Tents and Shades"
                width={180}
                height={139}
                className="h-[139px] w-auto"
              />
            </SiteLink>
            <SocialIcons className="mt-2 gap-3 [&_svg]:h-7 [&_svg]:w-7" color="text-white hover:text-mts-gold" />
          </div>

          {/* Products */}
          <div className="text-[16px] leading-[32px] md:text-right">
            <p className="mb-2 font-semibold leading-[25.6px]">Our Products / Services</p>
            <ul>
              {PRODUCT_LINKS.map((l) => (
                <li key={l.href}>
                  <SiteLink href={l.href} className="text-[#f2f4f7] hover:text-mts-gold">
                    {l.label}
                  </SiteLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="mt-6 border-0 border-t-2" style={{ borderTopColor: "rgba(31, 67, 87, 0.75)" }} />

        <p className="py-4 text-center text-[16px] text-white/45">
          © {new Date().getFullYear()} All Rights Reserved. Master Tents and Shades LLC in Dubai, Sharjah, Abu Dhabi
          All over UAE.
        </p>
      </div>
    </footer>
  );
}
