import styles from './Piste.module.css'

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
          <div className={styles.stat}><b>−12<em>°C</em></b><span>Just nu</span></div>
          <div className={styles.stat}><b>84<em>cm</em></b><span>Snödjup</span></div>
          <div className={styles.stat}><b>12<em>/14</em></b><span>Liftar öppna</span></div>
        </div>
      </div>
    </section>
  )
}
