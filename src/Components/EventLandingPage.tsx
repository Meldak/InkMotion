import type { ReactNode } from "react";
import {
  EventCountdown,
  Footer,
  ImageCarousel,
  NavigationBar,
  SpeakersSection,
  type CarouselSlide,
  type FooterLink,
  type NavigationItem,
  type Speaker,
} from "../Components";

interface EventLandingPageProps {
  navigationItems: NavigationItem[];
  carouselSlides: CarouselSlide[];
  eventDate: string | Date;
  speakers: Speaker[];
  footerLinks?: FooterLink[];
  brand?: ReactNode;
}

/**
 * Composición de la distribución del mockup:
 * navegación y carrusel, fecha/cuenta regresiva, expositores y pie de página.
 */
export function EventLandingPage({
  navigationItems,
  carouselSlides,
  eventDate,
  speakers,
  footerLinks,
  brand,
}: EventLandingPageProps) {

  return (
    <div className="event-page">
      <header className="event-page__hero">
        <NavigationBar items={navigationItems} brand={brand} />
        <ImageCarousel slides={carouselSlides} autoPlay />
      </header>

      <main className="event-page__content">
        <EventCountdown
          completedMessage="El evento ya ha comenzado."
          title="El evento comienza en"
          location="Universidad Oriente,
          Plantel Central,
          Av. 21 Ote. 1816"
          targetDate={eventDate} />
        <SpeakersSection speakers={speakers} />
      </main>

      <Footer links={footerLinks} />
    </div>
  );
}
