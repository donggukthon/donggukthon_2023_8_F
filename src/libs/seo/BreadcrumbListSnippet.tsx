import { HOST_URL } from '@constants/url'
import NextHead from 'next/head'
import { FC } from 'react'

export type BreadcrumbType = {
  title: string
  pathname: string
}

type BreadcrumbListSnippetProps = {
  breadcrumbs: BreadcrumbType[]
}

export const BREADCRUMBS = {
  HOME: { title: 'Home', pathname: '' },
  CONTENTS: { title: '콘텐츠', pathname: `/contents` },
  COMMUNITY: { title: '커뮤니티', pathname: `/community` },
} as const

export const BreadcrumbListSnippet: FC<BreadcrumbListSnippetProps> = ({ breadcrumbs }) => (
  <NextHead>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: breadcrumbs.map(({ title, pathname }, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
              '@id': `${HOST_URL}${pathname}`,
              name: title,
            },
          })),
        }),
      }}
    />
  </NextHead>
)
