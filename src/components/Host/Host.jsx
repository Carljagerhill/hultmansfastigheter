import styles from './Host.module.css'

export default function Host() {
  return (
    <section className={styles.host} id="vard">
      <div className={styles.hostWrap}>
        <div className="reveal">
          <div className="eyebrow">Värden · 07</div>
          <h2>Familjeägt<br />sedan <em>1998</em>.</h2>
          <p style={{ marginTop: 32 }}>
            GrandGårdarna har drivits av familjen Hultman i nästan tre decennier. Sex timmerhus, en plats, en familj.
            Alla våra stugor byggdes med riktig timmerkonstruktion och har underhållits varje sommar sedan vi tog över.
          </p>
          <p>
            Vi tror på att en stuga ska kännas som ett hem som någon redan tagit hand om — inte ett hotellrum med en
            nyckelkod. Hör av dig direkt till Mikael om du har frågor, vill se på något specifikt eller behöver hjälp
            att hitta rätt stuga.
          </p>
        </div>
        <div className={`${styles.hostCard} reveal d2`}>
          <div className={styles.label}>Värd & kontakt</div>
          <div className={styles.name}>Mikael<br /><em>Hultman</em></div>
          <a className={styles.phone} href="tel:0706360751">070-636 07 51</a>
          <a className={styles.email} href="mailto:mikael@hultmansfastigheter.se">mikael@hultmansfastigheter.se</a>
          <div className={styles.role}>Hultmans i Örebro AB · Sälen</div>
        </div>
      </div>
    </section>
  )
}
