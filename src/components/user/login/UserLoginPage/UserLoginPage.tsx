import { Column } from '@components/common/Column'
import { FC } from 'react'

type UserLoginPageProps = {
  className?: string
}

export const UserLoginPage: FC<UserLoginPageProps> = ({ className }) => {
  return <Column className={className}>UserLoginPage</Column>
}
