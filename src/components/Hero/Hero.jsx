import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const bgRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current && window.scrollY < window.innerHeight) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.35}px)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className={styles.hero} id="top">
      <div className={styles.heroBg} ref={bgRef} />
      <div />
      <div className={styles.heroBottom}>
        <h1 className={styles.heroTitle}>
          Vakna med<br />liften <em>på</em><br />baksidan.
        </h1>
        <div>
          <p className={styles.heroLede}>
            Sex genuina timmerhus på Sälfjället, med glidavstånd till Sälfjällets liftsystem.
            Bastu i alla hus, öppen spis i de stora — och nittio kilometer fri sikt mot Städjan från solaltanen.
          </p>
          <div className={styles.heroMeta}>
            <div className={styles.s}><b>6</b><span>Stugor</span></div>
            <div className={styles.s}><b>180<em>m</em></b><span>Till lift</span></div>
            <div className={styles.s}><b>90<em>km</em></b><span>Utsikt</span></div>
            <div className={styles.s}><b><em>1998</em></b><span>Familjeägt</span></div>
          </div>
        </div>
      </div>
      <div className={styles.scrollCue}>
        <span className={styles.line} />
      </div>
    </section>
  )
}
