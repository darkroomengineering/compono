import { useLenis } from '@studio-freight/react-lenis'
import Tempus from '@studio-freight/tempus'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useEffect } from 'react'
import '../styles/global.scss'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
  ScrollTrigger.defaults({ markers: process.env.NODE_ENV === 'development' })

  // merge rafs
  gsap.ticker.lagSmoothing(0)
  gsap.ticker.remove(gsap.updateRoot)
  Tempus.add((time) => {
    gsap.updateRoot(time / 1000)
  }, 0)

  // reset scroll position
  window.scrollTo(0, 0)
  window.history.scrollRestoration = 'manual'
}

function MyApp({ Component, pageProps }) {
  const lenis = useLenis(ScrollTrigger.update)
  useEffect(ScrollTrigger.refresh, [lenis])

  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
