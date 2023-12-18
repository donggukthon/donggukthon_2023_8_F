import { Column } from '@components/common/Column'
import { Footer } from '@components/common/Footer'
import { Header } from '@components/common/Header'
import { Paper } from '@components/common/Paper'
import { Position } from '@components/common/Position'
import { Space } from '@components/common/Space'
import { IntroducePage as IntroducePageComponent } from '@components/introduce/IntroducePage'
import { FOOTER_HEIGHT, HEADER_HEIGHT, MOBILE_ROOT_MAX_WIDTH } from '@constants/layout'
import { MetaTags } from '@libs/seo'
import { getUrl } from '@utils/getUrl'
import type { NextPage } from 'next'

const IntroducePagePath = '/introduce'

type IntroducePageProps = {}

export const getIntroducePageUrl = (params: IntroducePageProps) => getUrl<IntroducePageProps>(IntroducePagePath, params)

const IntroducePage: NextPage<IntroducePageProps> = () => (
  <Position position={'relative'}>
    <Paper bgColor={'temp.#DACDC3'}>
      <Column maxWidth={[MOBILE_ROOT_MAX_WIDTH, '100%']} minHeight={'100vh'} pb={FOOTER_HEIGHT} mx={'auto'}>
        <MetaTags />
        <Header title={'서비스 소개'} />
        <Space height={HEADER_HEIGHT} />
        <IntroducePageComponent />
        <Footer />
      </Column>
    </Paper>
  </Position>
)

export default IntroducePage
