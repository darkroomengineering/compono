import NextImage from 'next/image'

export function Image({ className, style, loading = 'eager', objectFit = 'cover', quality = 90, alt = '', ...props }) {
  return (
    <NextImage
      {...props}
      className={className}
      style={{ objectFit, ...style }}
      loading={loading}
      quality={quality}
      alt={alt}
    />
  )
}
