import NextImage from 'next/image'

export const Image = ({
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
}) => {
  let ResolvedImage = NextImage

  if ('default' in ResolvedImage) {
    ResolvedImage = ResolvedImage.default
  }

  return (
    <ResolvedImage
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
}
