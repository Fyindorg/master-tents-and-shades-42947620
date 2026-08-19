import { CONTACT } from "@/data/nav";



function LinkedIn({ cls }: { cls: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cls} aria-hidden="true">
      <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21H17.6v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21H9z" />
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
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" className={cls} aria-hidden="true">
      <path d="M21.5 3.5 2.8 10.9c-.6.2-.6 1 0 1.2l4.9 1.6 1.8 5.1c.2.6 1 .7 1.4.2l2.5-2.7 4.6 3.4c.5.4 1.2.1 1.3-.5l3-14.4c.1-.7-.5-1.2-1.1-1z" />
        <path d="M7.7 13.7 20.6 4.4l-9.7 11.9" />
    </svg>
  );
}
function Facebook({ cls }: { cls: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" className={cls} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M15.2 7.8h-1.6c-1 0-1.7.8-1.7 1.7V21" strokeLinecap="round" />
      <path d="M9.8 13.2h4.6" strokeLinecap="round" />
    </svg>
  );
}
function WhatsApp({ cls }: { cls: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cls} aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.6-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.2.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.6-1.2.1-.2 0-.4 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.8.8-1 1.9-.6 3.1a11 11 0 0 0 4.7 5c1.6.7 2.5.8 3.3.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.1-.4-.2z" />
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
