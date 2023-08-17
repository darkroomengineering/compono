import { useDocumentReadyState, useIntersectionObserver } from '@studio-freight/hamo'
import cn from 'clsx'
import { useEffect, useRef, useState } from 'react'
import s from './lottie.module.scss'

export function Lottie({ animation, speed = 1, loop = true, className, viewThreshold = 0, id = '' }) {
  const lottieRef = useRef(null)
  const animator = useRef(null)
  const [lottie, setLottie] = useState()

  const [setRef, { isIntersecting }] = useIntersectionObserver({
    threshold: viewThreshold,
  })
  const readyState = useDocumentReadyState()

  const fetchJson = async (externalAnimation) => {
    const response = await fetch(externalAnimation)
    const json = await response.json()
    return json
  }

  useEffect(() => {
    if (readyState === 'complete') {
      //needed to render on 'svg'
      import('lottie-web/build/player/lottie.min').then((Lottie) => setLottie(Lottie.default))
    }
  }, [readyState])

  useEffect(() => {
    if (!lottie) return

    if (typeof animation === 'string') {
      // external link or json file in public folder
      fetchJson(animation).then((json) => {
        animator.current = lottie?.loadAnimation({
          container: lottieRef.current,
          animationData: json,
          renderer: animation.includes('http') ? 'svg' : 'canvas',
          autoplay: false,
          loop,
          name: id,
        })
      })
    } else {
      // json data inside code
      animator.current = lottie?.loadAnimation({
        container: lottieRef.current,
        animationData: animation,
        renderer: 'canvas',
        autoplay: false,
        loop,
        name: id,
      })
    }

    animator.current?.setSpeed(speed)
    return () => animator.current?.destroy()
  }, [lottie])

  useEffect(() => {
    if (animator.current && isIntersecting) {
      animator.current?.play()
    } else {
      animator.current?.pause()
    }
  }, [animator.current, isIntersecting])

  return (
    <div
      aria-hidden="true"
      className={cn(className, s.lottie)}
      ref={(node) => {
        lottieRef.current = node
        setRef(node)
      }}
    />
  )
}
