import { useState } from 'react'
import { useReveal } from './hooks/useReveal'
import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import Booker from './components/Booker/Booker'
import Intro from './components/Intro/Intro'
import Band from './components/Band/Band'
import Cottages from './components/Cottages/Cottages'
import Included from './components/Included/Included'
import Area from './components/Area/Area'
import Piste from './components/Piste/Piste'
import Gallery from './components/Gallery/Gallery'
import Host from './components/Host/Host'
import CtaBand from './components/CtaBand/CtaBand'
import Footer from './components/Footer/Footer'
import Lightbox from './components/Lightbox/Lightbox'

export default function App() {
  const [lightbox, setLightbox] = useState({ src: null, caption: null })
  useReveal()

  return (
    <>
      <Nav />
      <Hero />
      <Booker />
      <Intro />
      <Band
        image="/assets/storstuga-exterior.jpg"
        tagline="Storstugan · 135 m²"
        title='Plats för<br/>hela <em>släkten</em>.'
        description="Elva bäddar i tre sovrum och sovloft. Öppen spis i den stora storstugan, två badrum och en bastu som värms snabbt."
      />
      <Cottages />
      <Band
        image="/assets/utsikt.jpg"
        tagline="Vy från solaltanen"
        title='Nittio kilometer<br/>fri <em>sikt</em>.'
        description="Mot Städjan i väster. Lika fin om morgonen med kaffe och frost som om kvällen när solen försvinner bakom fjället."
      />
      <Included />
      <Area />
      <Piste />
      <Gallery onOpen={(src, caption) => setLightbox({ src, caption })} />
      <Host />
      <CtaBand />
      <Footer />
      <Lightbox
        src={lightbox.src}
        caption={lightbox.caption}
        onClose={() => setLightbox({ src: null, caption: null })}
      />
    </>
  )
}
