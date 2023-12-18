import { DEFAULT_CONTENT_DATA } from '@constants/metadata'
import { HOST_URL } from '@constants/url'
import NextHead from 'next/head'
import { useRouter } from 'next/router'
import { FC } from 'react'

type MetaTagsProps = {
  title?: string
  ogTitle?: string
  description?: string
  ogDescription?: string
  thumbnail?: string
  keywords?: string
  themeColor?: string
}

export const MetaTags: FC<MetaTagsProps> = ({
  title,
  ogTitle,
  description,
  ogDescription,
  thumbnail,
  keywords,
  themeColor,
}) => {
  const { asPath } = useRouter()
  const metaTitle = title || DEFAULT_CONTENT_DATA.TITLE
  const metaOgTitle = ogTitle || metaTitle

  const metaDescription = (description || DEFAULT_CONTENT_DATA.DESCRIPTION).substring(0, 90)
  const metaOgDescription = ogDescription?.substring(0, 90) || metaDescription

  const metaThumbnail = thumbnail || DEFAULT_CONTENT_DATA.THUMBNAIL_PATH
  const metaKeyword = keywords || DEFAULT_CONTENT_DATA.KEYWORDS
  const metaThemeColor = themeColor || DEFAULT_CONTENT_DATA.THEME_COLOR
  const metaUrl = `${HOST_URL}${asPath}`

  return (
    <NextHead>
      <title>{metaTitle}</title>
      <meta property="og:title" content={metaOgTitle} />
      <meta name="twitter:title" content={metaOgTitle} />
      <meta name="subject" content={metaOgTitle} />
      <link rel="icon" href="/favicon.ico" />

      <meta name="description" content={metaDescription} />
      <meta property="og:description" content={metaOgDescription} />
      <meta name="twitter:description" content={metaOgDescription} />

      <meta property="og:image" content={metaThumbnail} />
      <meta name="twitter:image" content={metaThumbnail} />

      <meta name="keywords" content={metaKeyword} />

      <meta name="apple-mobile-web-app-status-bar-style" content={metaThemeColor} />
      <meta name="msapplication-TileColor" content={metaThemeColor} />
      <meta name="theme-color" content={metaThemeColor} />

      <meta property="og:url" content={metaUrl} />
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-JH32K8L3HR" />
      <script
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-JH32K8L3HR');
            `,
        }}
      />
    </NextHead>
  )
}
