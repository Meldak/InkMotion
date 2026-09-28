import { SpeakerCard, type Speaker } from "./SpeakerCard";

interface SpeakersSectionProps {
  speakers: Speaker[];
  title?: string;
  subtitle?: string;
  className?: string;
}

/** Sección que agrupa las ponencias y sus expositores. */
export function SpeakersSection({
  speakers,
  title = "Expositores y ponencias",
  subtitle,
  className = "",
}: SpeakersSectionProps) {
  return (
    <section className={`speakers-section ${className}`.trim()} id="expositores" aria-labelledby="speakers-title">
      <header className="speakers-section__header">
        <h2 className="speakers-section__title" id="speakers-title">
          {title}
        </h2>
        {subtitle && <p className="speakers-section__subtitle">{subtitle}</p>}
      </header>

      <div className="speakers-section__grid">
        {speakers.map((speaker) => (
          <SpeakerCard key={speaker.id} speaker={speaker} />
        ))}
      </div>
    </section>
  );
}
