import styles from './Intro.module.css'

export default function Intro() {
  return (
    <section className={styles.intro}>
      <div className="reveal">
        <div className="eyebrow">Om platsen · 01</div>
        <h2>Sex hus.<br />En <em>fjällsida</em>.<br />En familj.</h2>
      </div>
      <div className="reveal d2">
        <p className={`lede ${styles.lede}`}>
          GrandGårdarna ligger på sin egen lilla återvändsgata på Sälfjället —{' '}
          <strong>180 meter från Falken-liften och 950 meter från Sälfjällstorget</strong>.
          Allt på bekvämt gångavstånd, ingenting i vägen för utsikten.
        </p>
        <div className={styles.quote}>
          "Vi sköter stugorna som om vi bodde i dem själva — för det är så vi vill att de ska kännas när ni kommer."
          <span className={styles.sig}>— Mikael Hultman, värd sedan 1998</span>
        </div>
      </div>
    </section>
  )
}
