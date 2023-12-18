import { FC } from 'react'
import Head from 'next/head'

type CanonicalProps = {
  href: string
}

export const Canonical: FC<CanonicalProps> = ({ href }) => (
  <Head>
    <link rel="canonical" href={`${process.env.WEB_URL}${href}`} />
  </Head>
)
