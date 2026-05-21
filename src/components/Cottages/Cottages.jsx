import styles from './Cottages.module.css'

const ArrowIcon = () => (
  <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
    <path d="M1 5h10m-4-4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const cottages = [
  {
    image: '/assets/ovre-exterior.jpg',
    tag: 'Timmerhus · 60 m²',
    price: 'fr. 7 400 kr / vecka',
    num: 'I',
    title: 'Övre',
    titleEm: 'GrandGårdarna',
    addresses: ['Mellangårdsv. 13A · 13B', 'Övregårdsv. 5A · 5B', 'Övregårdsv. 9A · 9B'],
    desc: 'Riktiga timmerhus i två våningar — souterräng nedan och en luftig storstuga ovan. Sex ordinarie bäddar i två sovrum (4+2) plus två extra i soffan. Storstugan har kabel-TV, fullt utrustad köksavdelning, bastu, torkskåp och solaltan med utemöbler.',
    specs: [{ val: '60', label: 'm²' }, { val: '6+2', label: 'bäddar' }, { val: '2', label: 'sovrum' }, { val: '1', label: 'bastu' }],
  },
  {
    image: '/assets/storstuga-exterior.jpg',
    imagePosition: 'center 40%',
    tag: 'Storstuga · 135 m²',
    price: 'fr. 13 200 kr / vecka',
    num: 'II',
    title: 'GrandGårdarna',
    titleEm: 'Storstuga',
    addresses: ['Vrilvägen 13A · 13B'],
    desc: 'Stora genuina timmerhus, 135 m² med elva bäddar i tre sovrum och sovloft (2+4+3+2). En härlig storstuga öppnar sig kring den öppna spisen, med fullutrustad köksavdelning — micro, ugn, diskmaskin, kyl och frys. Två badrum med dusch, separat toalett och en stor bastu.',
    specs: [{ val: '135', label: 'm²' }, { val: '11', label: 'bäddar' }, { val: '3', label: 'sovrum' }, { val: '1', label: 'öppen spis' }],
  },
]

export default function Cottages() {
  return (
    <section className={styles.cottages} id="stugor">
      <div className={styles.cottagesHead}>
        <div className="reveal">
          <div className="eyebrow">Stugorna · 02</div>
          <h2>Två storlekar.<br />Samma <em>fjäll</em>.</h2>
        </div>
        <p className="lede reveal d2">
          Riktiga timmerhus i två våningar — välj efter sällskap och känsla. Alla har egen bastu,
          fullt kök, skidbod och uttag för motorvärmare. Storstugorna har dessutom öppen spis och diskmaskin.
        </p>
      </div>

      {cottages.map((c, i) => (
        <article className={styles.cottage} key={i}>
          <div className={`${styles.cottageImg} reveal`}>
            <div
              className={styles.img}
              style={{ backgroundImage: `url('${c.image}')`, backgroundPosition: c.imagePosition || 'center' }}
            />
            <span className={styles.tag}>{c.tag}</span>
            <span className={styles.price}>{c.price}</span>
          </div>
          <div className={`${styles.cottageInfo} reveal d2`}>
            <div className={styles.num}>{c.num}</div>
            <h3>{c.title} <em>{c.titleEm}</em></h3>
            <div className={styles.addrs}>
              {c.addresses.map((a, j) => <span key={j}>{a}</span>)}
            </div>
            <p className={styles.desc}>{c.desc}</p>
            <div className={styles.specs}>
              {c.specs.map((s, j) => (
                <div className={styles.s} key={j}>
                  <b>{s.val}</b>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
            <div className={styles.cta}>
              <a className={styles.primary} href="#booka">Kolla tillgänglighet <ArrowIcon /></a>
              <a className={styles.ghost} href="#galleri">Fler bilder ↗</a>
            </div>
          </div>
        </article>
      ))}
    </section>
  )
}
