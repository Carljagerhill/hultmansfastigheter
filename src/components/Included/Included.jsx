import styles from './Included.module.css'

const amenities = [
  { n: '01', title: 'Bastu', desc: 'Egen vedeldad bastu i varje stuga.' },
  { n: '02', title: 'WiFi 100/100', desc: 'Fritt trådlöst nät i hela stugan.' },
  { n: '03', title: 'Parkering', desc: 'Egen p-plats med motorvärmaruttag.' },
  { n: '04', title: 'Skidbod', desc: 'Värmd förvaring för utrustning.' },
  { n: '05', title: 'Kabel-TV', desc: 'Standardkanaler i storstugan.' },
  { n: '06', title: 'Diskmaskin', desc: 'I Storstugan.' },
  { n: '07', title: 'Öppen spis', desc: 'I Storstugan. Första lådan ved ingår.' },
  { n: '08', title: 'Solaltan', desc: 'Utemöbler, grill på begäran.' },
]

const delays = ['', ' d2', ' d3', ' d4', '', ' d2', ' d3', ' d4']

export default function Included() {
  return (
    <section className={styles.included}>
      <div className={styles.includedWrap}>
        <div className={styles.includedHead}>
          <div className="reveal">
            <div className="eyebrow">Vad ingår · 03</div>
            <h2>Allt det<br /><em>självklara</em>.</h2>
          </div>
          <p className="lede reveal d2">
            Bastu, fullt utrustat kök, kabel-TV, WiFi, skidbod och uttag för motorvärmare i samtliga stugor.
            Storstugorna har dessutom öppen spis och diskmaskin.
          </p>
        </div>
        <div className={styles.ameGrid}>
          {amenities.map((a, i) => (
            <div className={`${styles.ame} reveal${delays[i]}`} key={i}>
              <div className={styles.n}>{a.n}</div>
              <h4>{a.title}</h4>
              <p>{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
