import { useEffect } from 'react'
import styles from './Lightbox.module.css'

export default function Lightbox({ src, caption, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  if (!src) return null

  return (
    <div className={styles.lb} onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <button className={styles.close} onClick={onClose} aria-label="Stäng">✕</button>
      <img src={src} alt={caption} />
      {caption && <div className={styles.cap}>{caption}</div>}
    </div>
  )
}
