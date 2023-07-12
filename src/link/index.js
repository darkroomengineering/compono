import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { forwardRef } from 'react'

const SHALLOW_URLS = ['?demo=true']

export const Link = forwardRef(({ href, children, shallow, scroll, fallback = 'div', ...props }, ref) => {
  const router = useRouter()

  if (typeof href !== 'string') {
    const Tag = fallback

    return (
      <Tag ref={ref} {...props}>
        {children}
      </Tag>
    )
  }

  const isExternal = href?.startsWith('http')
  const isProtocol = href?.startsWith('mailto:') || href?.startsWith('tel:')
  const needsShallow = !!SHALLOW_URLS.find((url) => href?.includes(url))
  const isSamePath = router?.pathname === href

  return (
    <NextLink
      ref={ref}
      href={href}
      shallow={needsShallow || shallow}
      scroll={scroll}
      {...((isProtocol || isExternal) && {
        target: '_blank',
        rel: 'noopener noreferrer',
      })}
      onClick={(e) => {
        if (isSamePath) e.preventDefault()
        props?.onClick?.()
      }}
      {...props}
    >
      {children}
    </NextLink>
  )
})

Link.displayName = 'Link'
