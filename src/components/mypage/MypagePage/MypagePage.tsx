import { Column } from '@components/common/Column'
import { FC } from 'react'

type MypagePageProps = {
  className?: string
}

export const MypagePage: FC<MypagePageProps> = ({ className }) => {
  return <Column className={className}>MypagePage</Column>
}
