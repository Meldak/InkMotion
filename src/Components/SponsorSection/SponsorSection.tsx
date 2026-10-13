import { SponsorLogo, type Sponsor } from "./SponsorLogo";

interface SponsorsSectionProps {
    sponsors: Sponsor[];
    title?: string;
    subtitle?: string;
    className?: string;
}

/** Sección reutilizable para presentar los logotipos de patrocinadores y aliados. */
export function SponsorsSection({
    sponsors,
    title = "Patrocinadores",
    subtitle,
    className = "",
}: SponsorsSectionProps) {
    if (sponsors.length === 0) return null;

    return (
        <section
            className={`sponsors-section ${className}`.trim()}
            id="patrocinadores"
            aria-labelledby="sponsors-title"
        >
            <header className="sponsors-section__header">
                <h2 className="sponsors-section__title" id="sponsors-title">
                    {title}
                </h2>
                {subtitle && <p className="sponsors-section__subtitle">{subtitle}</p>}
            </header>

            <div className="sponsors-section__grid">
                {sponsors.map((sponsor) => (
                    <SponsorLogo key={sponsor.id} sponsor={sponsor} />
                ))}
            </div>
        </section>
    );
}
