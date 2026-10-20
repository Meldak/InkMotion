import { type CarouselSlide } from "../Components";
import bnr1 from "../assets/Carousel/I&M.webp";
import bnr2 from "../assets/carousel/I&M_Sponsors.webp";

export const CarouselItems: CarouselSlide[] = [
    {
        id: "BNR1",
        src: bnr1,
        alt: "Ink & Motion",
        title: "¡Nos vemos en Ink & Motion!",
        description: "13 y 14 de Noviembre",
        href: "#",

    },
    {
        id: "BNR2",
        src: bnr2,
        alt: "Sponsors",
        title: "Conoce a nuestros patrocinadores",
        description: "¡Gracias a ellos por hacer posible este evento!",
        href: "#sponsors",
    }
];