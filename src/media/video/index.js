import cn from 'clsx'
import s from './video.module.scss'

export const Video = ({ className, src, alt = '', onLoad, ...props }) => {
  return (
    <video
      className={cn(className, s.video)}
      src={src}
      alt={alt}
      muted
      autoPlay
      loop
      playsInline
      type={`type/${src.split('.').pop()}`}
      onCanPlay={() => {
        onLoad?.(src)
      }}
      {...props}
    />
  )
}
