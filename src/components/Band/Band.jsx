import styles from './Band.module.css'

export default function Band({ image, tagline, title, description }) {
  return (
    <section className={styles.band}>
      <div className={styles.bg} style={{ backgroundImage: `url('${image}')` }} />
      <div className={styles.inner}>
        <div className="reveal">
          <div className={styles.tagline}>{tagline}</div>
          <h3 dangerouslySetInnerHTML={{ __html: title }} />
        </div>
        <p className="reveal d2">{description}</p>
      </div>
    </section>
  )
}
