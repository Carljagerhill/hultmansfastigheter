import { useState, useCallback, useEffect } from 'react'
import styles from './Gallery.module.css'

const base = import.meta.env.BASE_URL
const tiles = [
  { src: `${base}assets/husbild.jpg`, label: 'Storstugan, vinter' },
  { src: `${base}assets/utsikt.jpg`, label: 'Utsikt mot Städjan' },
  { src: `${base}assets/kok1.jpg`, label: 'Köket' },
  { src: `${base}assets/sovloft.jpg`, label: 'Sovloftet' },
  { src: `${base}assets/hall.jpg`, label: 'Hall med trapp' },
  { src: `${base}assets/sovrum1.jpg`, label: 'Sovrum' },
  { src: `${base}assets/skylt.jpg`, label: 'Välkomstskylten' },
]

export default function Gallery({ onOpen }) {
  const [active, setActive] = useState(0)
  const [prev, setPrev] = useState(null)
  const [dir, setDir] = useState(1)
  const touchStartX = { current: null }

  const go = useCallback((idx) => {
    setDir(idx > active ? 1 : -1)
    setPrev(active)
    setActive(idx)
  }, [active])

  const goNext = useCallback(() => go((active + 1) % tiles.length), [go, active])
  const goPrev = useCallback(() => go((active - 1 + tiles.length) % tiles.length), [go, active])

  // Clear prev after transition
  useEffect(() => {
    if (prev === null) return
    const t = setTimeout(() => setPrev(null), 600)
    return () => clearTimeout(t)
  }, [prev])

  // Keyboard nav
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [goNext, goPrev])

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX }
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 40) diff > 0 ? goNext() : goPrev()
    touchStartX.current = null
  }

  return (
    <section className={styles.gallery} id="galleri">
      <div className={styles.galHead}>
        <div className="reveal">
          <div className="eyebrow">Galleri · 06</div>
          <h2>Smakprov från<br /><em>fjället</em>.</h2>
        </div>
      </div>

      <div className={styles.stage}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Slides */}
        {tiles.map((t, i) => (
          <div
            key={t.src}
            className={[
              styles.slide,
              i === active ? styles.slideActive : '',
              i === prev ? styles.slidePrev : '',
              i === prev && dir === 1 ? styles.slideExitLeft : '',
              i === prev && dir === -1 ? styles.slideExitRight : '',
            ].join(' ')}
            style={{ backgroundImage: `url('${t.src}')` }}
            onClick={() => i === active && onOpen(t.src, t.label)}
          />
        ))}

        {/* Gradient overlay */}
        <div className={styles.overlay} />

        {/* Bottom bar */}
        <div className={styles.bar}>
          <span className={styles.label}>{tiles[active].label}</span>
          <div className={styles.dots}>
            {tiles.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
                onClick={() => go(i)}
                aria-label={`Bild ${i + 1}`}
              />
            ))}
          </div>
          <span className={styles.counter}>{String(active + 1).padStart(2,'0')} / {String(tiles.length).padStart(2,'0')}</span>
        </div>

        {/* Arrow buttons */}
        <button className={`${styles.arrow} ${styles.arrowL}`} onClick={goPrev} aria-label="Föregående">
          <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
            <path d="M19 8H1M8 1L1 8l7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className={`${styles.arrow} ${styles.arrowR}`} onClick={goNext} aria-label="Nästa">
          <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
            <path d="M1 8h18M13 1l7 7-7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Progress bar */}
        <div className={styles.progress}>
          <div className={styles.progressFill} style={{ width: `${((active + 1) / tiles.length) * 100}%` }} />
        </div>
      </div>

      {/* Image title */}
      <div className={styles.imageTitle}>
        <span className={styles.imageTitleNum}>{String(active + 1).padStart(2, '0')}</span>
        <span className={styles.imageTitleLabel}>{tiles[active].label}</span>
        <span className={styles.imageTitleTotal}>av {tiles.length}</span>
      </div>
    </section>
  )
}
