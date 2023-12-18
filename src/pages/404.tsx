import { NotFoundPage } from '@components/404'
import { NextPage } from 'next'

type NotFoundProps = {
  className?: string
}

const NotFound: NextPage<NotFoundProps> = ({ className }) => (
  <>
    <NotFoundPage className={className} />
  </>
)

export default NotFound
