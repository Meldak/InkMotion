export interface Sponsor {
    id: string;
    name: string;
    logoSrc: string;
    website?: string;
}

interface SponsorLogoProps {
    sponsor: Sponsor;
}

/** Logotipo individual; se vuelve enlazable cuando el patrocinador tiene sitio web. */
export function SponsorLogo({ sponsor }: SponsorLogoProps) {
    const logo = (
        <img
            className="sponsor-logo__image"
            src={sponsor.logoSrc}
            alt={`Logotipo de ${sponsor.name}`}
            loading="lazy"
        />
    );

    if (!sponsor.website) {
        return <div className="sponsor-logo">{logo}</div>;
    }

    return (
        <a
            className="sponsor-logo sponsor-logo--link"
            href={sponsor.website}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visitar el sitio de ${sponsor.name}`}
        >
            {logo}
        </a>
    );
}
