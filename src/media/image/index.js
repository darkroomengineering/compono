import NextImage from 'next/image'
import { forwardRef } from 'react'

export const Image = forwardRef(function Image(
  {
    className,
    style,
    loading = 'eager',
    objectFit = 'cover',
    quality = 90,
    alt = '',
    fill,
    width,
    height,
    src,
    ...restProps
  },
  ref,
) {
  let ResolvedImage = NextImage

  if ('default' in ResolvedImage) {
    ResolvedImage = ResolvedImage.default
  }

  return (
    <ResolvedImage
      ref={ref}
      src={src}
      className={className}
      style={{ objectFit, ...style }}
      loading={loading}
      quality={quality}
      alt={alt}
      fill={fill}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      {...restProps}
    />
  )
})
