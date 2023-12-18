import NextHead from 'next/head'
import { FC } from 'react'

type FAQType = {
  question: string
  answer: string
}

type FAQPageSnippetProps = {
  faq: FAQType[]
}

export const FAQPageSnippet: FC<FAQPageSnippetProps> = ({ faq }) => (
  <NextHead>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faq.map(({ question, answer }) => ({
            '@type': 'Question',
            name: question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: answer,
            },
          })),
        }),
      }}
    />
  </NextHead>
)
