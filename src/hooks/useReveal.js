import { useEffect } from 'react'

export function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
          } else if (e.boundingClientRect.top > (e.rootBounds?.bottom ?? window.innerHeight)) {
            // Element is below the viewport — user scrolled up past it — reset so it re-animates on next scroll down
            e.target.classList.remove('in')
          }
          // Element above viewport: keep .in so it stays visible
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -80px 0px' }
    )
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}
