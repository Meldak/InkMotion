import { useEffect, useMemo, useState } from "react";

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface EventCountdownProps {
  targetDate: string | Date;
  title?: string;
  completedMessage?: string;
  location?: string;
  className?: string;
}

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

function getTimeRemaining(targetTime: number): TimeRemaining {
  const milliseconds = Math.max(0, targetTime - Date.now());

  return {
    days: Math.floor(milliseconds / DAY),
    hours: Math.floor((milliseconds % DAY) / HOUR),
    minutes: Math.floor((milliseconds % HOUR) / MINUTE),
    seconds: Math.floor((milliseconds % MINUTE) / SECOND),
  };
}

function pad(value: number) {
  return String(value).padStart(2, "0");
}

function formatDate(targetTime: number) {
  return new Intl.DateTimeFormat("es-MX", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(targetTime));
}

function formatTime(targetTime: number) {
  return new Intl.DateTimeFormat("es-MX", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(new Date(targetTime));
}

/** Muestra una cuenta regresiva hasta la fecha y hora indicada. */
export function EventCountdown({
  targetDate,
  title = "El evento comienza en",
  completedMessage = "El evento ya ha comenzado.",
  location,
  className = "",
}: EventCountdownProps) {
  const targetTime = useMemo(
    () =>
      targetDate instanceof Date
        ? targetDate.getTime()
        : new Date(targetDate).getTime(),
    [targetDate],
  );

  const isValidTargetDate = !Number.isNaN(targetTime);

  const [remaining, setRemaining] = useState(() =>
    getTimeRemaining(targetTime),
  );

  const [isCompleted, setIsCompleted] = useState(
    () => isValidTargetDate && targetTime <= Date.now(),
  );

  useEffect(() => {
    if (!isValidTargetDate) return undefined;

    const updateTime = () => {
      const timeRemaining = getTimeRemaining(targetTime);

      setRemaining(timeRemaining);
      setIsCompleted(targetTime <= Date.now());
    };

    updateTime();

    const timerId = window.setInterval(updateTime, SECOND);

    console.log("EventCountdown location:", location);


    return () => window.clearInterval(timerId);
  }, [isValidTargetDate, targetTime]);

  if (!isValidTargetDate) {
    return (
      <section className={`event-countdown ${className}`.trim()}>
        La fecha del evento no es válida.
      </section>
    );
  }

  if (isCompleted) {
    return (
      <section className={`event-countdown ${className}`.trim()}>
        <p className="event-countdown__completed">
          {completedMessage}
        </p>

        <div className="event-countdown__event-info">
          <div className="event-countdown__info-item">
            <span className="event-countdown__info-icon" aria-hidden="true">
              📅
            </span>

            <div>
              <span className="event-countdown__info-label">
                Fecha
              </span>

              <time dateTime={new Date(targetTime).toISOString()}>
                {formatDate(targetTime)}
              </time>
            </div>
          </div>

          <div className="event-countdown__info-item">
            <span className="event-countdown__info-icon" aria-hidden="true">
              🕐
            </span>

            <div>
              <span className="event-countdown__info-label">
                Hora
              </span>

              <time dateTime={new Date(targetTime).toISOString()}>
                {formatTime(targetTime)}
              </time>
            </div>
          </div>

          {location && (
            <div className="event-countdown__info-item">
              <span className="event-countdown__info-icon" aria-hidden="true">
                📍
              </span>

              <div>
                <span className="event-countdown__info-label">
                  Lugar
                </span>

                <span>
                  <a
                    href="https://www.google.com/maps"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {location}
                  </a>
                </span>
              </div>
            </div>
          )}
        </div>
      </section >
    );
  }

  const units = [
    { label: "Días", value: remaining.days },
    { label: "Horas", value: remaining.hours },
    { label: "Minutos", value: remaining.minutes },
    { label: "Segundos", value: remaining.seconds },
  ];

  return (
    <section
      className={`event-countdown ${className}`.trim()}
      aria-live="polite"
    >
      <div className="event-countdown__countdown">
        <p className="event-countdown__title">
          {title}
        </p>

        <div className="event-countdown__units">
          {units.map(({ label, value }) => (
            <div
              className="event-countdown__unit"
              key={label}
            >
              <span className="event-countdown__value">
                {pad(value)}
              </span>

              <span className="event-countdown__label">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="event-countdown__event-info">
        <div className="event-countdown__info-item">
          <span
            className="event-countdown__info-icon"
            aria-hidden="true"
          >
            📅
          </span>

          <div>
            <span className="event-countdown__info-label">
              Fecha
            </span>

            <time dateTime={new Date(targetTime).toISOString()}>
              {formatDate(targetTime)}
            </time>
          </div>
        </div>

        <div className="event-countdown__info-item">
          <span
            className="event-countdown__info-icon"
            aria-hidden="true"
          >
            🕐
          </span>

          <div>
            <span className="event-countdown__info-label">
              Hora
            </span>

            <time dateTime={new Date(targetTime).toISOString()}>
              {formatTime(targetTime)}
            </time>
          </div>
        </div>

        {location && (
          <div className="event-countdown__info-item">
            <span
              className="event-countdown__info-icon"
              aria-hidden="true"
            >
              📍
            </span>

            <div>
              <span className="event-countdown__info-label">
                Lugar
              </span>

              <span>{location}</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}