import { Font } from '@components/common/Font'
import { Link } from '@components/common/Link'
import { FC } from 'react'

type NotFoundPageProps = {
  className?: string
}

export const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {
  return (
    <div className={className}>
      <Font type={'body-10-regular'}>찾을 수 없는 페이지입니다. 문제가 지속되면 고객센터로 문의해주세요.</Font>
      <Link href="/">
        <Font type={'body-10-regular'}>메인페이지 바로가기</Font>
      </Link>
    </div>
  )
}
