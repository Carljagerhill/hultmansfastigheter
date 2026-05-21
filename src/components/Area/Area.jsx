import styles from './Area.module.css'

const distances = [
  { name: 'Skidlift Falken', desc: 'Skidor / promenad', km: '180 m' },
  { name: 'Sälfjällstorget', desc: 'Butik · restaurang · uthyrning', km: '950 m' },
  { name: 'Snögubben & Liftcafé', desc: 'Restaurang vid pisten', km: '1,2 km' },
  { name: 'Sälen by', desc: 'ICA · systembolag · vårdcentral', km: '11 km' },
  { name: 'Mora flygplats', desc: 'Närmsta flygplats', km: '94 km' },
]

export default function Area() {
  return (
    <section className={styles.area} id="omrade">
      <div className={styles.areaHead}>
        <div className="reveal">
          <div className="eyebrow">Här finns vi · 04</div>
          <h2>180 m till<br />liften. <em>11 km</em><br />till byn.</h2>
        </div>
        <p className="lede reveal d2">
          Stugorna ligger i Lindvallen-systemet, med glidavstånd till Falken — som öppnar hela Sälfjällets liftsystem.
          Sälfjällstorget med butik, restauranger och skiduthyrning ligger en kort promenad bort.
        </p>
      </div>
      <div className={styles.areaGrid}>
        <div className={`${styles.mapCard} reveal`}>
          <svg viewBox="0 0 400 320">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M40 0H0V40" stroke="rgba(24,29,42,.06)" fill="none"/>
              </pattern>
            </defs>
            <rect width="400" height="320" fill="url(#grid)"/>
            <path d="M0,140 L60,80 L110,110 L160,60 L220,100 L280,50 L340,90 L400,70 L400,0 L0,0 Z" fill="rgba(24,29,42,.05)"/>
            <path d="M0,220 Q100,200 180,230 T400,210" stroke="rgba(24,29,42,.2)" strokeWidth="2" fill="none"/>
            <path d="M40,300 L160,200 L260,220 L380,160" stroke="rgba(24,29,42,.18)" strokeWidth="1.5" fill="none" strokeDasharray="3 3"/>
          </svg>
          <span className={styles.lbl} style={{ left: '58%', top: '60%' }}>GrandGårdarna</span>
          <span className={styles.pin} style={{ left: '58%', top: '60%' }}></span>
          <span className={styles.lbl} style={{ left: '32%', top: '44%' }}>Falken</span>
          <span className={`${styles.pin} ${styles.alt}`} style={{ left: '32%', top: '44%' }}></span>
          <span className={styles.lbl} style={{ left: '74%', top: '74%' }}>Sälfjällstorget</span>
          <span className={`${styles.pin} ${styles.alt}`} style={{ left: '74%', top: '74%' }}></span>
        </div>
        <div className={`${styles.distList} reveal d2`}>
          {distances.map((d, i) => (
            <div className={styles.d} key={i}>
              <div>
                <div className={styles.nm}>{d.name}</div>
                <span className={styles.ds}>{d.desc}</span>
              </div>
              <span className={styles.km}>{d.km}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
