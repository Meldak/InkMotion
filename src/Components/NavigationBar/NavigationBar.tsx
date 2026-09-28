import type { ReactNode } from "react";

export interface NavigationItem {
  label: string;
  href: string;
  active?: boolean;
  external?: boolean;
}

interface NavigationBarProps {
  items: NavigationItem[];
  brand?: ReactNode;
  brandHref?: string;
  className?: string;
}

/** Barra de navegación reutilizable para la cabecera del evento. */
export function NavigationBar({
  items,
  brand,
  brandHref = "/",
  className = "",
}: NavigationBarProps) {
  return (
    <nav className={`navigation-bar ${className}`.trim()} aria-label="Navegación principal">
      {brand && (
        <a className="navigation-bar__brand" href={brandHref}>
          {brand}
        </a>
      )}

      <ul className="navigation-bar__list">
        {items.map(({ label, href, active, external }) => (
          <li className="navigation-bar__item" key={`${label}-${href}`}>
            <a
              className="navigation-bar__link"
              href={href}
              aria-current={active ? "page" : undefined}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
