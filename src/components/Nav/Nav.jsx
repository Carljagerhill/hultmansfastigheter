import { useEffect, useState } from 'react'
import styles from './Nav.module.css'

const ArrowIcon = () => (
  <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
    <path d="M1 5h10m-4-4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const links = [
  { href: '#stugor', label: 'Stugorna' },
  { href: '#omrade', label: 'Här finns vi' },
  { href: '#piste', label: 'Liftsystem' },
  { href: '#galleri', label: 'Galleri' },
  { href: '#vard', label: 'Värden' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on resize past breakpoint
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 1100) setOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''} ${open ? styles.menuOpen : ''}`}>
        <a className={styles.brand} href="#top" onClick={close}>
          <span className={styles.mark}>Grand<em>Gårdarna</em></span>
          <span className={styles.sub}>i&nbsp;Sälen</span>
        </a>
        <div className={styles.navlinks}>
          {links.map(l => <a key={l.href} href={l.href}>{l.label}</a>)}
        </div>
        <div className={styles.navtools}>
          <a className={styles.bookbtn} href="#booka" onClick={close}>Boka <ArrowIcon /></a>
          <button
            className={styles.burger}
            onClick={() => setOpen(o => !o)}
            aria-label={open ? 'Stäng meny' : 'Öppna meny'}
            aria-expanded={open}
          >
            <span className={styles.burgerLine} />
            <span className={styles.burgerLine} />
            <span className={styles.burgerLine} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`} aria-hidden={!open}>
        <nav className={styles.drawerNav}>
          {links.map(l => (
            <a key={l.href} href={l.href} className={styles.drawerLink} onClick={close}>
              {l.label}
            </a>
          ))}
          <a href="#booka" className={styles.drawerBook} onClick={close}>
            Boka stuga <ArrowIcon />
          </a>
        </nav>
      </div>
      {open && <div className={styles.backdrop} onClick={close} />}
    </>
  )
}
