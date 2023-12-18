import NextHead from 'next/head'
import { FC } from 'react'

type OrganizationSnippetProps = {}

export const OrganizationSnippet: FC<OrganizationSnippetProps> = () => (
  <NextHead>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: '',
          legalName: '나만의 3D 트리',
          url: 'https://donggukton.net',
          foundingDate: '2020',
          founders: [
            {
              '@type': 'Person',
              name: '황재형',
            },
          ],
          address: {
            '@type': 'PostalAddress',
            addressRegion: '서울',
            addressCountry: '대한민국',
          },
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: '고객센터',
            telephone: '010-3120-4914',
            email: 'ghkdwogud852@gmail.com',
          },
          sameAs: [],
        }),
      }}
    />
  </NextHead>
)
