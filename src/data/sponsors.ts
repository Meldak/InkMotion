import { type Sponsor } from "../Components";

import universityLogo from "/src/assets/sponsors/LOGOUO.png";
import Abrakadabra from "/src/assets/sponsors/Abrakadabra.png";
import CentroHistorico from "/src/assets/sponsors/Logo Centro Historico.png";
import CiudadDelDiseño from "/src/assets/sponsors/CiudaddelDiseño.png";
import Huesuda from "/src/assets/sponsors/huesuda.png";
import LuxStudio from "/src/assets/sponsors/LuxStudio.png";
import Nahlli from "/src/assets/sponsors/LogoNahlliBlack.png";
import Ollilowa from "/src/assets/sponsors/ollilowa.png";
import Cobrita from "/src/assets/sponsors/cobrita.png";
import TheBagheera from "/src/assets/sponsors/Bagheera.png";
import BlueMonkey from "/src/assets/sponsors/BlueMonkey.png";

export const SponsorsData: Sponsor[] = [
    {
        id: "uo",
        name: "Universidad de Oriente",
        logoSrc: universityLogo,
        website: "https://uo.edu.mx",
    },
    {
        id: "abrakadabra",
        name: "Abrakadabra",
        logoSrc: Abrakadabra,
        website: "https://www.instagram.com/abk_mx",
    },
    {
        id: "centro-historico",
        name: "Centro Histórico",
        logoSrc: CentroHistorico,
        // website: "https://www.instagram.com/inkandmotion.uo",
    },
    {
        id: "ciudad-del-diseño",
        name: "Ciudad del Diseño",
        logoSrc: CiudadDelDiseño,
        // website: "https://www.instagram.com/inkandmotion.uo",
    },
    {
        id: "huesuda",
        name: "Huesuda",
        logoSrc: Huesuda,
        website: "https://www.instagram.com/mellevalahuesuda",
    },
    {
        id: "lux-studio",
        name: "Lux Studio",
        logoSrc: LuxStudio,
        website: "https://www.instagram.com/lux.studio.pue",
    },
    {
        id: "nahlli",
        name: "Nahlli",
        logoSrc: Nahlli,
        // website: "https://www.instagram.com/inkandmotion.uo",
    },
    {
        id: "ollilowa",
        name: "Ollilowa",
        logoSrc: Ollilowa,
        // website: "https://www.instagram.com/ollilowa_studio",
    },
    {
        id: "cobrita",
        name: "Cobrita",
        logoSrc: Cobrita,
        // website: "https://www.instagram.com/inkandmotion.uo",
    },
    {
        id: "the-bagheera",
        name: "The Bagheera",
        logoSrc: TheBagheera,
        // website: "https://www.instagram.com/inkandmotion.uo",
    },
    {
        id: "blue-monkey",
        name: "Blue Monkey",
        logoSrc: BlueMonkey,
        website: "https://www.instagram.com/bluee_monkey_studio",
    }
];