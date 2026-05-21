import styles from './CtaBand.module.css'

const ArrowIcon = () => (
  <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
    <path d="M1 5h12m-4-4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function CtaBand() {
  return (
    <section className={styles.ctaBand}>
      <h2 className="reveal">Säsong 26/27<br />är <em>öppen</em>.</h2>
      <p className="reveal d2">
        Vinter v.49 → v.16. Sommarstugor från midsommar.<br />
        Bokningen bekräftas inom 24 timmar av Mikael personligen.
      </p>
      <div className={`${styles.row} reveal d3`}>
        <a className={styles.primary} href="#booka">Boka stuga <ArrowIcon /></a>
        <a className={styles.ghost} href="tel:0706360751">Eller ring 070-636 07 51</a>
      </div>
    </section>
  )
}
