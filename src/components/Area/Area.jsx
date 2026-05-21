import { useEffect, useRef } from 'react'
import styles from './Area.module.css'

const GRANDGARDARNA = [61.16234524609035, 13.175033032918412]

const places = [
  { name: 'GrandGårdarna',        lat: 61.16234524609035,    lng: 13.175033032918412,   main: true  },
  { name: 'Skidlift Falken',      lat: 61.162585914025975,   lng: 13.180943962370117                },
  { name: 'Sälfjällstorget',      lat: 61.16541639932806,    lng: 13.175751206058697                },
  { name: 'Snögubben & Liftcafé', lat: 61.15325933178004,    lng: 13.175569385286929                },
  { name: 'Experium',             lat: 61.156267051381306,   lng: 13.205208112007085                },
  { name: 'Sälen by',             lat: 61.16128210174014,    lng: 13.260996128195298                },
  { name: 'Sälen flygplats',      lat: 61.1562905713094,     lng: 12.837444297650183                },
]

const distances = [
  { name: 'Skidlift Falken',      desc: 'Skidor / promenad',                km: '320 m'  },
  { name: 'Sälfjällstorget',      desc: 'Butik · restaurang · uthyrning',   km: '350 m'  },
  { name: 'Snögubben & Liftcafé', desc: 'Restaurang vid pisten',            km: '1 km'   },
  { name: 'Experium',             desc: 'Äventyrspark',                      km: '1,8 km' },
  { name: 'Sälen by',             desc: 'ICA · systembolag · vårdcentral',  km: '4,6 km' },
  { name: 'Sälen flygplats',      desc: 'Närmsta flygplats',                km: '18 km'  },
]

export default function Area() {
  const mapRef = useRef(null)
  const instanceRef = useRef(null)

  useEffect(() => {
    if (instanceRef.current) return

    import('leaflet').then(L => {
      L = L.default ?? L

      // Fix default icon paths broken by bundlers
      delete L.Icon.Default.prototype._getIconUrl
      L.Icon.Default.mergeOptions({
        iconUrl: `${import.meta.env.BASE_URL}leaflet/marker-icon.png`,
        iconRetinaUrl: `${import.meta.env.BASE_URL}leaflet/marker-icon-2x.png`,
        shadowUrl: `${import.meta.env.BASE_URL}leaflet/marker-shadow.png`,
      })

      const map = L.map(mapRef.current, { zoomControl: true, scrollWheelZoom: false })
      instanceRef.current = map

      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '© <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> © <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19,
      }).addTo(map)

      const greenIcon = L.divIcon({
        className: '',
        html: `<div style="width:16px;height:16px;border-radius:50%;background:#2d5a27;border:3px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,.35)"></div>`,
        iconSize: [16, 16], iconAnchor: [8, 8],
      })
      const darkIcon = L.divIcon({
        className: '',
        html: `<div style="width:12px;height:12px;border-radius:50%;background:#181d2a;border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,.3)"></div>`,
        iconSize: [12, 12], iconAnchor: [6, 6],
      })

      places.forEach(p => {
        L.marker([p.lat, p.lng], { icon: p.main ? greenIcon : darkIcon })
          .addTo(map)
          .bindPopup(`<b>${p.name}</b>`, { closeButton: false, offset: [0, -8] })
      })

      const bounds = L.latLngBounds(places.map(p => [p.lat, p.lng]))
      map.fitBounds(bounds, { padding: [32, 32] })
    })

    return () => {
      if (instanceRef.current) {
        instanceRef.current.remove()
        instanceRef.current = null
      }
    }
  }, [])

  return (
    <section className={styles.area} id="omrade">
      <div className={styles.areaHead}>
        <div className="reveal">
          <div className="eyebrow">Här finns vi · 04</div>
          <h2>320 m till<br />liften. <em>4,6 km</em><br />till byn.</h2>
        </div>
        <p className="lede reveal d2">
          Stugorna ligger i Lindvallen-systemet, med glidavstånd till Falken — som öppnar hela Sälfjällets liftsystem.
          Sälfjällstorget med butik, restauranger och skiduthyrning ligger en kort promenad bort.
        </p>
      </div>
      <div className={styles.areaGrid}>
        <div className={`${styles.mapCard} reveal`}>
          <div ref={mapRef} className={styles.leafletMap} />
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
