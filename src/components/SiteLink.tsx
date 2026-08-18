import { Link } from "@tanstack/react-router";
import type { CSSProperties, ReactNode } from "react";

type Props = {
  href: string;
  className?: string;
  activeClassName?: string;
  children: ReactNode;
  ariaLabel?: string;
  onClick?: () => void;
  style?: CSSProperties;
};

/**
 * Internal link helper. The site uses the original WordPress URL structure
 * (e.g. /about/), served by a catch-all slug route, so paths are passed as
 * plain strings.
 */
export function SiteLink({ href, className, activeClassName, children, ariaLabel, onClick, style }: Props) {
  const isExternal = /^(https?:|mailto:|tel:)/i.test(href);
  if (isExternal) {
    return (
      <a
        href={href}
        className={className}
        aria-label={ariaLabel}
        onClick={onClick}
        style={style}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }
  return (
    <Link
      to={href as unknown as "/"}
      className={className}
      aria-label={ariaLabel}
      onClick={onClick}
      style={style}
      {...(activeClassName ? { activeProps: { className: activeClassName } } : {})}
    >
      {children}
    </Link>
  );
}
