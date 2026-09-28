export interface Speaker {
  id: string;
  name: string;
  role?: string;
  topic?: string;
  imageUrl?: string;
  imageAlt?: string;
}

interface SpeakerCardProps {
  speaker: Speaker;
}

/** Tarjeta individual para una persona expositora. */
export function SpeakerCard({ speaker }: SpeakerCardProps) {
  return (
    <article className="speaker-card">
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
