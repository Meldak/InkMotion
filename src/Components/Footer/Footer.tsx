import type { ReactNode } from "react";

export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface FooterProps {
  links?: FooterLink[];
  legalText?: string;
  children?: ReactNode;
  className?: string;
}

/** Pie de página con enlaces y espacio opcional para contenido adicional. */
export function Footer({ links = [], legalText, children, className = "" }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`site-footer ${className}`.trim()}>
      {children && <div className="site-footer__content">{children}</div>}

      {links.length > 0 && (
        <nav className="site-footer__navigation" aria-label="Enlaces del pie de página">
          <ul className="site-footer__list">
            {links.map(({ label, href, external }) => (
              <li className="site-footer__item" key={`${label}-${href}`}>
                <a
                  className="site-footer__link"
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <small className="site-footer__legal">{legalText ?? `© ${currentYear}. Todos los derechos reservados.`}</small>
    </footer>
  );
}
