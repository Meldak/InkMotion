export type SocialPlatform = "instagram" | "facebook" | "tiktok" | "university";

export interface SocialLink {
    platform: SocialPlatform;
    href: string;
    label?: string;
    external?: boolean;
}

interface SocialLinksProps {
    links: SocialLink[];
    title?: string;
    showLabels?: boolean;
    className?: string;
}

const DEFAULT_LABELS: Record<SocialPlatform, string> = {
    instagram: "Instagram",
    facebook: "Facebook",
    tiktok: "TikTok",
    university: "Página de la universidad",
};

function SocialIcon({ platform }: { platform: SocialPlatform }) {
    switch (platform) {
        case "instagram":
            return (
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
                    <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
                    <circle cx="17.4" cy="6.6" r="1.2" fill="currentColor" />
                </svg>
            );
        case "facebook":
            return (
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path
                        fill="currentColor"
                        d="M13.7 21v-8h2.7l.4-3.1h-3.1V7.95c0-.9.25-1.5 1.55-1.5H16.9V3.68c-.29-.04-1.28-.12-2.43-.12-2.4 0-4.05 1.47-4.05 4.17v2.17H7.7V13h2.72v8h3.28Z"
                    />
                </svg>
            );
        case "tiktok":
            return (
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path
                        fill="currentColor"
                        d="M15.72 3c.28 2.07 1.43 3.31 3.28 3.45v3.04a7.1 7.1 0 0 1-3.22-.96v6.17a5.54 5.54 0 1 1-4.8-5.49v3.05a2.52 2.52 0 1 0 1.78 2.41V3h2.96Z"
                    />
                </svg>
            );
        case "university":
            return (
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path
                        fill="currentColor"
                        d="m12 3 9 4.5v1.6H3V7.5L12 3Zm-6.3 7.8h2.1v6.1H5.7v-6.1Zm5.25 0h2.1v6.1h-2.1v-6.1Zm5.25 0h2.1v6.1h-2.1v-6.1ZM3.5 19h17v2h-17v-2Z"
                    />
                </svg>
            );
    }
}

/** Enlaces accesibles a las redes sociales y al sitio institucional. */
export function SocialLinks({
    links,
    title = "Síguenos",
    showLabels = false,
    className = "",
}: SocialLinksProps) {
    if (links.length === 0) return null;

    return (
        <section className={`social-links ${className}`.trim()} aria-labelledby="social-links-title">
            {title && <h2 className="social-links__title" id="social-links-title">{title}</h2>}

            <ul className="social-links__list">
                {links.map(({ platform, href, label, external = true }) => {
                    const accessibleLabel = label ?? DEFAULT_LABELS[platform];

                    return (
                        <li className="social-links__item" key={`${platform}-${href}`}>
                            <a
                                className="social-links__link"
                                href={href}
                                target={external ? "_blank" : undefined}
                                rel={external ? "noopener noreferrer" : undefined}
                                aria-label={accessibleLabel}
                            >
                                <span className="social-links__icon">
                                    <SocialIcon platform={platform} />
                                </span>
                                {showLabels && <span className="social-links__label">{accessibleLabel}</span>}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}
