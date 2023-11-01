import { useLenis } from '@studio-freight/react-lenis'
import { createContext, useCallback, useEffect, useRef, useState } from 'react'

export const PageTransitionContext = createContext()

export function PageTransition({ Component, pageProps }) {
  const current = useRef()
  const next = useRef()

  const [components, setComponents] = useState(() => [{ ...Component, pageProps }])
  const [lifecycle, setLifecycle] = useState('starting')
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    if (!Component) return

    const currentPage = components[0].pageProps.id || components[0].render?.displayName
    const nextPage = pageProps.id || Component.render?.displayName

    if (currentPage === nextPage) return

    setComponents((data) => [data[0], { ...Component, pageProps }])
  }, [Component, pageProps])

  const lenis = useLenis()

  const onAnimationEnded = useCallback(
    ({ scrollTo }) => {
      if (scrollTo) {
        lenis.scrollTo(0, { immediate: true, force: true })
      }
      current.current = next.current
      next.current = null
      if (components.length > 1) return setComponents((data) => [data[1]])
      if (components.length === 1) return setLifecycle('resting')
    },
    [lenis, components]
  )

  const onAnimationStart = useCallback(async () => {
    const from = components[0]?.render?.displayName
    const to = components[1]?.render?.displayName

    if (components.length === 1) return

    setIsTransitioning(true)
    lenis.stop()

    if (next?.current?.preAnimateIn) {
      await next.current.preAnimateIn({ from, to })
    }
    if (current?.current?.animateOut) {
      await current.current.animateOut({ from, to })
    }

    onAnimationEnded({ scrollTo: true })

    setIsTransitioning(false)

    if (current?.current?.animateIn) {
      await current.current.animateIn({ from, to })
    }

    lenis.start()
  }, [lenis, components, onAnimationEnded])

  useEffect(() => {
    if (components.length === 1 && lifecycle !== 'starting') return setLifecycle('resting')

    if (lifecycle === 'transitioning' || components.length < 1) return

    setLifecycle('transitioning')

    onAnimationStart()
  }, [components, onAnimationStart])

  const getPosition = useCallback(
    (i) => {
      if (components.length > 1) {
        return i === 0
          ? {}
          : {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              zIndex: -1,
            }
      }
    },
    [components]
  )

  return (
    <>
      {isTransitioning && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 9999,
            pointerEvents: 'auto',
          }}
        />
      )}
      <PageTransitionContext.Provider value={isTransitioning}>
        {components.map((Page, i) => (
          <Page
            ref={(node) => (i === 0 ? (current.current = node) : (next.current = node))}
            style={getPosition(i)}
            {...Page.pageProps}
            key={Page.pageProps.id || Page.render?.displayName}
          />
        ))}
      </PageTransitionContext.Provider>
    </>
  )
}
