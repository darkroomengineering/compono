import { NextSeo } from 'next-seo'
import NextHead from 'next/head'

export function CustomHead({ title, description, image, keywords, twitter = { handle: '@studiofreight' } }) {
  return (
    <>
      <NextHead>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />

        <meta name="robots" content={process.env.NODE_ENV !== 'development' ? 'index,follow' : 'noindex,nofollow'} />
        <meta name="googlebot" content={process.env.NODE_ENV !== 'development' ? 'index,follow' : 'noindex,nofollow'} />

        <meta name="keywords" content={keywords && keywords.length ? keywords.join(',') : keywords} />
        <meta name="author" content="Studio Freight" />
        <meta name="referrer" content="no-referrer" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="geo.region" content="US" />

        {/* START FAVICON */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        {/* END FAVICON */}

        <title>{title}</title>
      </NextHead>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          type: 'website',
          locale: 'en_US',
          images: [
            {
              url: image ? image.url : '/og-image.jpg',
              width: image.width ? image.width : 1200,
              height: image.height ? image.height : 630,
              alt: title,
            },
          ],
          defaultImageWidth: 1200,
          defaultImageHeight: 630,
          site_name: '',
        }}
        twitter={{
          handle: twitter.handle,
          cardType: 'summary_large_image',
        }}
      />
    </>
  )
}
