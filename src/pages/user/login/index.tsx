import { Column } from '@components/common/Column'
import { Footer } from '@components/common/Footer'
import { Header } from '@components/common/Header'
import { Paper } from '@components/common/Paper'
import { Position } from '@components/common/Position'
import { Space } from '@components/common/Space'
import { UserLoginPage as UserLoginPageComponent } from '@components/user/login/UserLoginPage'
import { FOOTER_HEIGHT, HEADER_HEIGHT, MOBILE_ROOT_MAX_WIDTH } from '@constants/layout'
import { MetaTags } from '@libs/seo'
import { getUrl } from '@utils/getUrl'
import type { NextPage } from 'next'

const UserLoginPagePath = '/user/login'

type UserLoginPageProps = {}

export const getUserLoginPageUrl = (params: UserLoginPageProps) => getUrl<UserLoginPageProps>(UserLoginPagePath, params)

const UserLoginPage: NextPage<UserLoginPageProps> = () => (
  <Position position={'relative'}>
    <Paper bgColor={'temp.#DACDC3'}>
      <Column maxWidth={[MOBILE_ROOT_MAX_WIDTH, '100%']} minHeight={`100vh`} pb={FOOTER_HEIGHT} mx={'auto'}>
        <MetaTags />
        <Header />
        <Space height={HEADER_HEIGHT} />
        <UserLoginPageComponent />
        <Footer />
      </Column>
    </Paper>
  </Position>
)

export default UserLoginPage
