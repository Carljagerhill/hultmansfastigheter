import styles from './Booker.module.css'

const CalIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <rect x="1.5" y="2.5" width="11" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
    <path d="M1.5 5.5h11M4.5 1v3M9.5 1v3" stroke="currentColor" strokeWidth="1.4"/>
  </svg>
)
const ArrowIcon = () => (
  <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
    <path d="M1 5h12m-4-4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function Booker() {
  return (
    <div className={styles.bookerWrap} id="booka">
      <div className={styles.booker}>
        <div className={styles.f}>
          <label>Ankomst</label>
          <div className={styles.v}><CalIcon />Lör 19 dec 2026</div>
        </div>
        <div className={styles.f}>
          <label>Avresa</label>
          <div className={styles.v}><CalIcon />Lör 26 dec 2026</div>
        </div>
        <div className={styles.f}>
          <label>Gäster</label>
          <div className={styles.v}>6 vuxna · 2 barn</div>
        </div>
        <div className={styles.f}>
          <label>Stuga</label>
          <div className={styles.v}>Alla typer</div>
        </div>
        <button className={styles.go}>Sök <ArrowIcon /></button>
      </div>
    </div>
  )
}
