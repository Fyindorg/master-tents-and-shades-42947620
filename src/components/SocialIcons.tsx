import { CONTACT } from "@/data/nav";



function LinkedIn({ cls }: { cls: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cls} aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.5 2h17A1.5 1.5 0 0 1 22 3.5v17a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 20.5v-17A1.5 1.5 0 0 1 3.5 2zm2.4 2.9a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5zM4.4 19.1h3v-9.2h-3v9.2zm5 0h3v-5.1c0-1.2.55-1.9 1.6-1.9 1 0 1.4.7 1.4 1.9v5.1h3v-5.6c0-2.5-1.3-3.8-3.2-3.8-1.4 0-2.2.7-2.6 1.4h-.05V9.9h-3.15c.04.85 0 9.2 0 9.2z"
      />
    </svg>
  );
}
function Instagram({ cls }: { cls: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={cls} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function Twitter({ cls }: { cls: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cls} aria-hidden="true">
      <path d="M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.4-1.3 1.7-2.2-.8.5-1.7.8-2.6 1a4 4 0 0 0-6.9 3.7A11.5 11.5 0 0 1 3.5 4.7a4 4 0 0 0 1.3 5.4c-.7 0-1.3-.2-1.8-.5 0 2 1.4 3.6 3.2 4-.6.2-1.2.2-1.8.1a4 4 0 0 0 3.7 2.8A8 8 0 0 1 2 18.1a11.4 11.4 0 0 0 6.3 1.8c7.5 0 11.6-6.2 11.6-11.6v-.5c.8-.6 1.5-1.3 2.1-2z" />
    </svg>
  );
}
function Telegram({ cls }: { cls: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cls} aria-hidden="true">
      <path d="M22.1 3.2 1.9 11c-.7.27-.68 1.28.03 1.52l5.05 1.68 1.9 5.5c.2.6.98.76 1.4.28l2.6-2.9 5.06 3.7c.5.37 1.22.1 1.36-.52l3.5-15.4c.15-.68-.53-1.24-1.17-.98zM8.9 13.9 18.6 6.6l-8.5 8.9-.4 3.1-.8-4.7z" />
    </svg>
  );
}
function Facebook({ cls }: { cls: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cls} aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.5 2h17A1.5 1.5 0 0 1 22 3.5v17a1.5 1.5 0 0 1-1.5 1.5H16v-7.1h2.4l.36-2.8H16V9.32c0-.8.23-1.35 1.39-1.35H18.8V5.47c-.26-.04-1.1-.11-2.09-.11-2.07 0-3.48 1.26-3.48 3.58v2.16h-2.34v2.8h2.34V22H3.5A1.5 1.5 0 0 1 2 20.5v-17A1.5 1.5 0 0 1 3.5 2z"
      />
    </svg>
  );
}
function WhatsApp({ cls }: { cls: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" className={cls} aria-hidden="true">
      <path d="M12 2.6a9.4 9.4 0 0 0-8.05 14.26L2.7 21.3l4.57-1.2A9.4 9.4 0 1 0 12 2.6z" />
      <path d="M9.1 7.9c.2 0 .35.1.45.35l.75 1.7c.1.2.06.4-.05.55l-.5.65c-.13.17-.15.33-.05.5a6.4 6.4 0 0 0 2.8 2.5c.2.1.37.06.5-.1l.62-.72c.14-.16.32-.2.5-.12l1.7.78c.24.11.33.27.3.5-.1.85-.9 1.6-1.9 1.7-2.7.26-6.4-3.4-6.2-6.15.08-1 .8-1.85 1.7-1.94z" />
    </svg>
  );
}

export function SocialIcons({ className = "", color = "", iconClassName = "h-5 w-5" }: { className?: string; color?: string; iconClassName?: string }) {
  const items = [
    { href: CONTACT.linkedin, label: "LinkedIn", Icon: LinkedIn },
    { href: CONTACT.instagram, label: "Instagram", Icon: Instagram },
    { href: CONTACT.twitter, label: "Twitter", Icon: Twitter },
    { href: `mailto:${CONTACT.email}`, label: "Telegram", Icon: Telegram },
    { href: CONTACT.facebook, label: "Facebook", Icon: Facebook },
    { href: CONTACT.whatsapp, label: "WhatsApp", Icon: WhatsApp },
  ];
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {items.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={color || "text-mts-navy hover:text-mts-gold"}
        >
          <Icon cls={iconClassName} />
        </a>
      ))}
    </div>
  );
}
