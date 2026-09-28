import { useCallback, useEffect, useState } from "react";

export interface CarouselSlide {
  id: string;
  src: string;
  alt: string;
  title?: string;
  description?: string;
  href?: string;
}

interface ImageCarouselProps {
  slides: CarouselSlide[];
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

/** Carrusel controlado internamente; recibe únicamente los datos de cada diapositiva. */
export function ImageCarousel({
  slides,
  autoPlay = false,
  interval = 6000,
  className = "",
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = slides.length;

  useEffect(() => {
    setCurrentIndex((index) => Math.max(0, Math.min(index, totalSlides - 1)));
  }, [totalSlides]);

  const showPreviousSlide = useCallback(() => {
    setCurrentIndex((index) => (index - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const showNextSlide = useCallback(() => {
    setCurrentIndex((index) => (index + 1) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    if (!autoPlay || totalSlides < 2) return undefined;

    const timerId = window.setInterval(showNextSlide, interval);
    return () => window.clearInterval(timerId);
  }, [autoPlay, interval, showNextSlide, totalSlides]);

  if (totalSlides === 0) return null;

  const currentSlide = slides[currentIndex];
  const image = <img className="image-carousel__image" src={currentSlide.src} alt={currentSlide.alt} />;

  return (
    <section
      className={`image-carousel ${className}`.trim()}
      aria-roledescription="carrusel"
      aria-label="Imágenes destacadas"
    >
      <div className="image-carousel__viewport">
        {currentSlide.href ? (
          <a className="image-carousel__image-link" href={currentSlide.href}>
            {image}
          </a>
        ) : (
          image
        )}

        {(currentSlide.title || currentSlide.description) && (
          <div className="image-carousel__caption">
            {currentSlide.title && <h2 className="image-carousel__title">{currentSlide.title}</h2>}
            {currentSlide.description && <p className="image-carousel__description">{currentSlide.description}</p>}
          </div>
        )}
      </div>

      {totalSlides > 1 && (
        <>
          <button
            className="image-carousel__control image-carousel__control--previous"
            type="button"
            onClick={showPreviousSlide}
            aria-label="Imagen anterior"
          >
            ‹
          </button>
          <button
            className="image-carousel__control image-carousel__control--next"
            type="button"
            onClick={showNextSlide}
            aria-label="Imagen siguiente"
          >
            ›
          </button>

          <div className="image-carousel__indicators" aria-label="Seleccionar imagen">
            {slides.map((slide, index) => (
              <button
                className={`image-carousel__indicator${index === currentIndex ? " image-carousel__indicator--active" : ""}`}
                type="button"
                key={slide.id}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Mostrar imagen ${index + 1}`}
                aria-current={index === currentIndex ? "true" : undefined}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
