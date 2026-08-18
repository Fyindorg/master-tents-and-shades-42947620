import { CONTACT } from "@/data/nav";

const items = [
  {
    label: "Call",
    href: CONTACT.mobileTel,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.9 21 3 13.1 3 3c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: `mailto:${CONTACT.email}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16v16H4z" />
        <path d="M4 6l8 7 8-7" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: CONTACT.whatsapp,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.6-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.2.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.6-1.2.1-.2 0-.4 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.8.8-1 1.9-.6 3.1a11 11 0 0 0 4.7 5c1.6.7 2.5.8 3.3.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.1-.4-.2z" />
      </svg>
    ),
  },
  {
    label: "Location",
    href: "https://maps.google.com/?q=Abraj+Al+Mamzar+Dubai+UAE",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s7-7.4 7-12a7 7 0 1 0-14 0c0 4.6 7 12 7 12z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
    external: true,
  },
];

export function MobileFooterUtility() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-black/10 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.08)]">
      <div className="flex items-stretch justify-between">
        {items.map(({ label, href, icon, external }) => (
          <a
            key={label}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="flex flex-1 flex-col items-center justify-center gap-1 border-r border-black/10 py-2 text-mts-gold last:border-r-0 hover:bg-black/5"
          >
            <span className="h-5 w-5">{icon}</span>
            <span className="text-[11px] font-medium tracking-wide text-mts-navy">{label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
