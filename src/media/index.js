import { Image } from './image'
import { Lottie } from './lottie'
import { Video } from './video'
import { useState } from 'react'

const extensions = [
  {
    type: 'IsImage',
    extensions: ['jpg', 'jpeg', 'png', 'webp', 'svg'],
  },
  { type: 'IsVideo', extensions: ['mp4', 'webm', 'ogg', 'vimeo', 'youtu'] },
  { type: 'IsLottie', extensions: ['json'] },
]

const belongsTo = (extension) =>
  extensions.find(({ extensions }) => extensions.some((filetype) => extension.includes(filetype)))?.type

export const Media = ({ className, media, onLoad, ...props }) => {
  if (!media?.source) return null

  const extension = belongsTo(media.source)

  if (extension) {
    return options[extension]({ className, media, onLoad, ...props })
  }

  console.warn('media not supported, please check if extension is correct or should be added to media-switch component')

  return null
}

const options = {
  IsImage: function ({ className, media, onLoad, style = {}, ...props }) {
    return (
      <Image
        style={{ display: 'block', ...style }}
        className={className}
        src={media.source}
        alt={media.caption}
        fill
        {...props}
        onLoad={(e) => {
          onLoad?.(e.currentTarget.currentSrc)
        }}
      />
    )
  },
  IsLottie: function ({ className, media, ...props }) {
    const animation = media.source

    return <Lottie className={className} animation={animation} {...props} />
  },
  IsVideo: function ({ className, media, onLoad, poster, ...props }) {
    const { embedded, fill, priority, ...mapProps } = props
    const [loaded, setLoaded] = useState()

    return (
      <div className={className}>
        {poster && (
          <Image
            src={poster}
            alt={media.caption}
            fill={fill}
            priority={priority}
            style={{ visibility: loaded ? 'hidden' : 'visible' }}
            {...mapProps}
          />
        )}
        <Video
          alt={media.caption}
          src={media.source}
          embedded={embedded}
          onLoad={() => {
            setLoaded(true)
            onLoad?.(media.source)
          }}
          {...mapProps}
        />
      </div>
    )
  },
}
