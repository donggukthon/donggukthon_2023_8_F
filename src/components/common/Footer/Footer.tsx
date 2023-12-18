import { Column } from '@components/common/Column'
import { FC } from 'react'

type FooterProps = {
  className?: string
}

export const Footer: FC<FooterProps> = ({ className }) => {
  return <Column className={className}>Footer</Column>
}
