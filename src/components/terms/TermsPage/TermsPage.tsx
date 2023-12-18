import { Column } from '@components/common/Column'
import { FC } from 'react'

type TermsPageProps = {
  className?: string
}

export const TermsPage: FC<TermsPageProps> = ({ className }) => {
  return <Column className={className}>TermsPage</Column>
}
