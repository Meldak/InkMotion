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

/** Muestra una cuenta regresiva hasta la fecha y hora indicada. */
export function EventCountdown({
  targetDate,
  title = "El evento comienza en",
  completedMessage = "El evento ya ha comenzado.",
  className = "",
}: EventCountdownProps) {
  const targetTime = useMemo(
    () => (targetDate instanceof Date ? targetDate.getTime() : new Date(targetDate).getTime()),
    [targetDate],
  );
  const isValidTargetDate = !Number.isNaN(targetTime);
  const [remaining, setRemaining] = useState(() => getTimeRemaining(targetTime));
  const isCompleted = isValidTargetDate && targetTime <= Date.now();

  useEffect(() => {
    if (!isValidTargetDate) return undefined;

    const updateTime = () => setRemaining(getTimeRemaining(targetTime));
    updateTime();

    const timerId = window.setInterval(updateTime, SECOND);
    return () => window.clearInterval(timerId);
  }, [isValidTargetDate, targetTime]);

  if (!isValidTargetDate) {
    return <section className={`event-countdown ${className}`.trim()}>La fecha del evento no es válida.</section>;
  }

  if (isCompleted) {
    return <section className={`event-countdown ${className}`.trim()}>{completedMessage}</section>;
  }

  const units = [
    { label: "Días", value: remaining.days },
    { label: "Horas", value: remaining.hours },
    { label: "Minutos", value: remaining.minutes },
    { label: "Segundos", value: remaining.seconds },
  ];

  return (
    <section className={`event-countdown ${className}`.trim()} aria-live="polite">
      <p className="event-countdown__title">{title}</p>
      <time className="event-countdown__date" dateTime={new Date(targetTime).toISOString()}>
        {new Date(targetTime).toLocaleString("es-MX", { dateStyle: "long", timeStyle: "short" })}
      </time>

      <div className="event-countdown__units">
        {units.map(({ label, value }) => (
          <div className="event-countdown__unit" key={label}>
            <span className="event-countdown__value">{pad(value)}</span>
            <span className="event-countdown__label">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
