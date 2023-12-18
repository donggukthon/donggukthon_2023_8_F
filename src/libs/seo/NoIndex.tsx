import NextHead from 'next/head'
import { FC } from 'react'

type MetaTagsProps = {
  crawler?: string
}

export const NoIndex: FC<MetaTagsProps> = ({ crawler }) => (
  <NextHead>
    <meta name={crawler || 'robots'} content="noindex" />
  </NextHead>
)
