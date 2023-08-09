import cn from 'clsx'
import s from './marquee.module.scss'
import { useIntersectionObserver } from '@studio-freight/hamo'

const Marquee = ({
  children,
  repeat = 2,
  duration = 5,
  offset = 0,
  inverted = false,
  className,
  animationStart = true,
  ...props
}) => {
  const [setIntersectionRef, intersection] = useIntersectionObserver({ threshold: 0 })

  return (
    <div
      ref={setIntersectionRef}
      {...props}
      className={cn(className, s.marquee, inverted && s.inverted, intersection?.isIntersecting && 'running')}
      style={{
        '--duration': duration + 's',
        '--offset': (offset % 100) + '%',
        '--animation-status': intersection?.isIntersecting && animationStart ? 'running' : 'paused',
      }}
    >
      {new Array(repeat).fill(children).map((_, i) => (
        <div key={i} className={s.inner} aria-hidden={i !== 0 ?? undefined} data-nosnippet={i !== 0 ? "" : undefined}>
          {children}
        </div>
      ))}
    </div>
  )
}

export { Marquee }
