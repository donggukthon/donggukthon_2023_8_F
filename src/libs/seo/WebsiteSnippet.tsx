import NextHead from 'next/head'
import { FC } from 'react'

type WebsiteSnippetProps = {}

export const WebsiteSnippet: FC<WebsiteSnippetProps> = () => (
  <NextHead>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          url: 'https://donggukton.net',
        }),
      }}
    />
  </NextHead>
)
