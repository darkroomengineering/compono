import { useEffect } from 'react'

export function RealViewport() {
  useEffect(() => {
    //https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
    function onWindowResize() {
      document.documentElement.style.setProperty(
        '--vh',
        window.innerHeight * 0.01 + 'px'
      )
    }

    window.addEventListener('resize', onWindowResize, false)
    onWindowResize()

    return () => {
      window.removeEventListener('resize', onWindowResize, false)
    }
  }, [])

  return null
}
