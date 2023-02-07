import { useIsTouchDevice } from '@studio-freight/hamo'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import { useWindowSize } from 'react-use'

export function Kinesis({ children, className, speed = 100 }) {
  const { width, height } = useWindowSize()
  const isTouchDevice = useIsTouchDevice()

  const childRef = useRef()

  useEffect(() => {
    const onMouseMove = (e) => {
      if (isTouchDevice) return
      const x = (e.clientX / width - 0.5) * 2 * speed
      const y = (e.clientY / height - 0.5) * 2 * speed

      gsap.to(childRef.current, {
        x,
        y,
        duration: 1,
        ease: 'expo.out',
      })
    }

    window.addEventListener('mousemove', onMouseMove, false)

    return () => {
      window.removeEventListener('mousemove', onMouseMove, false)
    }
  }, [speed])

  return (
    <div className={className}>
      <div ref={childRef}>{children}</div>
    </div>
  )
}
