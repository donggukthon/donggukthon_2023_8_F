import { Column } from '@components/common/Column'
import { Footer } from '@components/common/Footer'
import { Header } from '@components/common/Header'
import { Paper } from '@components/common/Paper'
import { Position } from '@components/common/Position'
import { Space } from '@components/common/Space'
import { UserJoinPage as UserJoinPageComponent } from '@components/user/join/UserJoinPage'
import { FOOTER_HEIGHT, HEADER_HEIGHT, MOBILE_ROOT_MAX_WIDTH } from '@constants/layout'
import { MetaTags } from '@libs/seo'
import { getUrl } from '@utils/getUrl'
import type { NextPage } from 'next'

const UserJoinPagePath = '/user/join'

type UserJoinPageProps = {}

export const getUserJoinPageUrl = (params: UserJoinPageProps) => getUrl<UserJoinPageProps>(UserJoinPagePath, params)

const UserJoinPage: NextPage<UserJoinPageProps> = () => (
  <Position position={'relative'}>
    <Paper bgColor={'temp.#DACDC3'}>
      <Column maxWidth={[MOBILE_ROOT_MAX_WIDTH, '100%']} minHeight={`100vh`} pb={FOOTER_HEIGHT} mx={'auto'}>
        <MetaTags title={'회원가입 - 나만의 3D 트리'} description="겨울철 소중한 경험에 함께 참여해주세요!" />
        <Header title={'회원가입'} />
        <Space height={HEADER_HEIGHT} />
        <UserJoinPageComponent />
        <Footer />
      </Column>
    </Paper>
  </Position>
)

export default UserJoinPage
