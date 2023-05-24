import { useRect, useWindowSize } from '@studio-freight/hamo'
import { useLenis } from '@studio-freight/react-lenis'
import { cloneElement, useState } from 'react'
import s from './fixed-slides.module.scss'

export function FixedSlides({ length, children }) {
  const [contentIndex, setContentIndex] = useState()
  const [setRef, rect] = useRect()
  const { height: windowHeight } = useWindowSize()

  useLenis(({ scroll }) => {
    if (!rect) return
    if (scroll > rect.top) {
      setContentIndex(Math.floor((scroll - rect.top) / windowHeight))
    }
  })

  return (
    <div
      className={s['fixed-slides']}
      ref={(node) => {
        viewRef(node)
        setRef(node)
      }}
      style={{ '--length': `${(length + 1) * 100}vh` }}
    >
      <div className={s['sticky-wrapper']}>
        <div className={s.sticky}>
          {children.map((child) => {
            return cloneElement(child, { index: contentIndex })
          })}
        </div>
      </div>
      <ProgressBar progress={`${((contentIndex + 1) * 100) / length}%`} />
    </div>
  )
}

function ProgressBar({ progress }) {
  return (
    <div
      className={s['progress-bar']}
      style={{
        '--progress': progress,
      }}
    />
  )
}
