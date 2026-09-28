import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/inkmotion-styles.css"

import { EventLandingPage } from './Components/EventLandingPage'
import { Brand } from './Components'

import { navigationItems } from './data/navigation.ts'
import { CarouselItems } from './data/carousel.ts'
import { speakers2026 } from './data/speakers.ts'
import { footerLinks } from './data/links.ts'

import logoImg from './assets/Logo-black.webp';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <EventLandingPage
      navigationItems={navigationItems}
      carouselSlides={CarouselItems}
      eventDate="2026-11-13T10:00:00"
      speakers={speakers2026}
      footerLinks={footerLinks}
      brand={<Brand
        name=''
        icon={<img src={logoImg} alt="" />}
        className='' />}

    />
  </StrictMode>,
)
