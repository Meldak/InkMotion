import { type Sponsor } from "../Components";

import universityLogo from "/src/assets/sponsors/logo-universidad-de-oriente.webp";
import sponsorLogo from "/src/assets/sponsors/Meldak.png";

export const SponsorsData: Sponsor[] = [
    {
        id: "uo",
        name: "Universidad de Oriente",
        logoSrc: universityLogo,
        website: "https://uo.edu.mx",
    },
    {
        id: "sponsor-one",
        name: "Patrocinador principal",
        logoSrc: sponsorLogo,
    },
];