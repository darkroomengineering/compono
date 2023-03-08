import { useLenis } from '@studio-freight/react-lenis'
import { clamp, mapRange } from 'lib/maths'
import { useEffect, useRef, useState } from 'react'
import { useWindowSize } from 'react-use'
import useMeasure from 'react-use-measure'
import s from './scrollbar.module.scss'

export function Scrollbar({ theme: { color, border, borderSize, borderRadius, minHeight, positionRight } }) {
  const thumb = useRef()
  const { width: windowWidth, height: windowHeight } = useWindowSize()
  const lenis = useLenis()
  const [innerMeasureRef, { height: innerHeight }] = useMeasure()
  const [thumbMeasureRef, { height: thumbHeight }] = useMeasure()

  useLenis(({ scroll, limit }) => {
    const progress = scroll / limit

    thumb.current.style.transform = `translate3d(0,${progress * (innerHeight - thumbHeight)}px,0)`
  })

  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    if (!clicked) return

    function onPointerMove(e) {
      e.preventDefault()

      const offset = (windowHeight - innerHeight) / 2
      const y = mapRange(0, windowHeight, e.clientY, -offset, innerHeight + offset)

      const progress = clamp(0, y / innerHeight, 1)
      const newPos = lenis.limit * progress

      lenis.direction === 'vertical' ? window.scrollTo(0, newPos) : window.scrollTo(newPos, 0)
    }

    function onPointerUp() {
      setClicked(false)
    }

    window.addEventListener('pointermove', onPointerMove, false)
    window.addEventListener('pointerup', onPointerUp, false)

    return () => {
      window.removeEventListener('pointermove', onPointerMove, false)
      window.removeEventListener('pointerup', onPointerUp, false)
    }
  }, [clicked, windowHeight, windowWidth, lenis, innerHeight])

  return (
    <div
      className={s.scrollbar}
      style={{
        '--color': theme.color,
        '--border': theme.border,
        '--min-height': theme.minHeight,
        '--position-right': theme.positionRight,
        '--border-size': theme.borderSize,
        '--border-radius': theme.borderRadius,
      }}
    >
      <div ref={innerMeasureRef} className={s.inner}>
        <div
          className={s.thumb}
          ref={(node) => {
            thumb.current = node
            thumbMeasureRef(node)
          }}
          onPointerDown={() => {
            setClicked(true)
          }}
        />
      </div>
    </div>
  )
}
