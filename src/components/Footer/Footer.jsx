import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.ftWrap}>
        <div className={styles.ftTop}>
          <div>
            <div className={styles.brand}>Grand<em>Gårdarna</em><br />i Sälen</div>
            <p>Familjeägt sedan 1998. Sex genuina timmerhus på Sälfjället, med glidavstånd till liften och hela Sälfjällets liftsystem inom räckhåll.</p>
          </div>
          <div>
            <h5>Sidor</h5>
            <a href="#stugor">Stugorna</a>
            <a href="#omrade">Här finns vi</a>
            <a href="#piste">Liftsystem</a>
            <a href="#galleri">Galleri</a>
            <a href="#booka">Bokning</a>
          </div>
          <div>
            <h5>Kontakt</h5>
            <a href="tel:0706360751">070-636 07 51</a>
            <a href="mailto:mikael@hultmansfastigheter.se">mikael@hultmansfastigheter.se</a>
            <a href="mailto:info@hultmansfastigheter.se">info@hultmansfastigheter.se</a>
          </div>
          <div>
            <h5>Adress</h5>
            <span>Vrilvägen 13</span>
            <span>780 67 Sälen</span>
            <span>61.16°N · 13.27°E</span>
          </div>
        </div>
        <div className={styles.ftBottom}>
          <span>© Hultmans i Örebro AB · 2026</span>
        </div>
      </div>
    </footer>
  )
}
