import { useEffect, useState } from 'react'
import styles from './Nav.module.css'

const ArrowIcon = () => (
  <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
    <path d="M1 5h10m-4-4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a className={styles.brand} href="#top">
        <span className={styles.mark}>Grand<em>Gårdarna</em></span>
        <span className={styles.sub}>i&nbsp;Sälen</span>
      </a>
      <div className={styles.navlinks}>
        <a href="#stugor">Stugorna</a>
        <a href="#omrade">Här finns vi</a>
        <a href="#piste">Liftsystem</a>
        <a href="#galleri">Galleri</a>
        <a href="#vard">Värden</a>
      </div>
      <div className={styles.navtools}>
        <a className={styles.bookbtn} href="#booka">Boka <ArrowIcon /></a>
      </div>
    </nav>
  )
}
