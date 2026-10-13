export interface Speaker {
  id: string;
  name: string;
  role?: string;
  title?: string;
  topic?: string;
  imageUrl?: string;
  imageAlt?: string;
  trajectory?: string;
  biography?: string;
  socialLinks?: SpeakerSocialLink[];
}

export interface SpeakerSocialLink {
  label: string;
  href: string;
}

interface SpeakerCardProps {
  speaker: Speaker;
  onSelect?: (speaker: Speaker) => void;
}

/** Tarjeta individual para una persona expositora. */
export function SpeakerCard({ speaker, onSelect }: SpeakerCardProps) {
  return (
    <article className="speaker-card">
      {onSelect && (
        <button
          className="speaker-card__trigger"
          type="button"
          onClick={() => onSelect(speaker)}
          aria-label={`Ver el perfil de ${speaker.name}`}
        />
      )}

      {speaker.imageUrl && (
        <img
          className="speaker-card__image"
          src={speaker.imageUrl}
          alt={speaker.imageAlt ?? `Retrato de ${speaker.name}`}
        />
      )}

      <div className="speaker-card__content">
        <h3 className="speaker-card__name">{speaker.name}</h3>
        {speaker.role && <p className="speaker-card__role">{speaker.role}</p>}
        {speaker.topic && <p className="speaker-card__topic">{speaker.topic}</p>}
      </div>
    </article>
  );
}
