import styles from './Piste.module.css'

const stats = [
  { val: '−12', unit: '°C', label: 'Just nu' },
  { val: '84', unit: 'cm', label: 'Snödjup' },
  { val: '12', unit: '/14', label: 'Liftar öppna' },
]

export default function Piste() {
  return (
    <section className={styles.piste} id="piste">
      <div className={styles.pisteHead}>
        <div className="reveal">
          <div className="eyebrow">Liftsystem · 05</div>
          <h2>Skidan på,<br />liften <em>tar</em><br />dig vidare.</h2>
        </div>
      </div>
      <div className={styles.pisteFrame}>
        <img src={`${import.meta.env.BASE_URL}assets/pistkarta.png`} alt="Pistkarta över Sälfjället med GrandGårdarna utmarkerade" />
        <div className={styles.pisteOverlay}>
          {stats.map(s => (
            <div className={styles.stat} key={s.label}>
              <b>{s.val}<em>{s.unit}</em></b>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Stats row shown below image on mobile */}
      <div className={styles.pisteStatsMobile}>
        {stats.map(s => (
          <div className={styles.stat} key={s.label}>
            <b>{s.val}<em>{s.unit}</em></b>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
