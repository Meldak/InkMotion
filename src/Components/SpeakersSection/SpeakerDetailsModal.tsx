import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { type Speaker } from "./SpeakerCard";

interface SpeakerDetailsModalProps {
    speaker: Speaker | null;
    onClose: () => void;
}

/** Ventana modal con el perfil completo de un ponente. */
export function SpeakerDetailsModal({ speaker, onClose }: SpeakerDetailsModalProps) {
    const closeButtonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (!speaker) return undefined;

        const previouslyFocusedElement = document.activeElement as HTMLElement | null;
        const previousBodyOverflow = document.body.style.overflow;

        const closeOnEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose();
        };

        document.body.style.overflow = "hidden";
        document.addEventListener("keydown", closeOnEscape);
        closeButtonRef.current?.focus();

        return () => {
            document.body.style.overflow = previousBodyOverflow;
            document.removeEventListener("keydown", closeOnEscape);
            previouslyFocusedElement?.focus();
        };
    }, [onClose, speaker]);

    if (!speaker) return null;

    return createPortal(
        <div
            className="speaker-details-modal"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) onClose();
            }}
        >
            <section
                className="speaker-details-modal__dialog"
                role="dialog"
                aria-modal="true"
                aria-labelledby="speaker-details-modal-title"
            >
                <button
                    className="speaker-details-modal__close"
                    ref={closeButtonRef}
                    type="button"
                    onClick={onClose}
                    aria-label="Cerrar perfil"
                >
                    ×
                </button>

                <div className="speaker-details-modal__intro">
                    <div className="speaker-details-modal__image-wrapper">
                        {speaker.imageUrl ? (
                            <img
                                className="speaker-details-modal__image"
                                src={speaker.imageUrl}
                                alt={speaker.imageAlt ?? `Retrato de ${speaker.name}`}
                            />
                        ) : (
                            <span className="speaker-details-modal__image-placeholder" aria-hidden="true">
                                {speaker.name.charAt(0)}
                            </span>
                        )}
                    </div>

                    <div className="speaker-details-modal__identity">
                        <p className="speaker-details-modal__eyebrow">Ponente</p>
                        <h2 className="speaker-details-modal__name" id="speaker-details-modal-title">
                            {speaker.name}
                        </h2>
                        {speaker.role && <p className="speaker-details-modal__role">{speaker.role}</p>}
                        {speaker.title && <p className="speaker-details-modal__title">{speaker.title}</p>}
                        {speaker.topic && <p className="speaker-details-modal__topic">{speaker.topic}</p>}
                    </div>
                </div>

                <div className="speaker-details-modal__content">
                    {speaker.trajectory && (
                        <section className="speaker-details-modal__section" aria-labelledby="speaker-trajectory-title">
                            <h3 id="speaker-trajectory-title">Trayectoria</h3>
                            <p>{speaker.trajectory}</p>
                        </section>
                    )}

                    {speaker.biography && (
                        <section className="speaker-details-modal__section" aria-labelledby="speaker-biography-title">
                            <h3 id="speaker-biography-title">Semblanza</h3>
                            <p>{speaker.biography}</p>
                        </section>
                    )}

                    {speaker.socialLinks && speaker.socialLinks.length > 0 && (
                        <section className="speaker-details-modal__section" aria-labelledby="speaker-social-title">
                            <h3 id="speaker-social-title">Encuéntrale en</h3>
                            <ul className="speaker-details-modal__social-links">
                                {speaker.socialLinks.map((link) => (
                                    <li key={`${link.label}-${link.href}`}>
                                        <a href={link.href} target="_blank" rel="noopener noreferrer">
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}
                </div>
            </section>
        </div>,
        document.body,
    );
}
