import { Column } from '@components/common/Column'
import { Footer } from '@components/common/Footer'
import { Header } from '@components/common/Header'
import { Paper } from '@components/common/Paper'
import { Position } from '@components/common/Position'
import { Space } from '@components/common/Space'
import { DonatePage as DonatePageComponent } from '@components/donate/DonatePage'
import { FOOTER_HEIGHT, HEADER_HEIGHT, MOBILE_ROOT_MAX_WIDTH } from '@constants/layout'
import { MetaTags } from '@libs/seo'
import { getUrl } from '@utils/getUrl'
import type { NextPage } from 'next'

const DonatePagePath = '/donate'

type DonatePageProps = {}

export const getDonatePageUrl = (params: DonatePageProps) => getUrl<DonatePageProps>(DonatePagePath, params)

const DonatePage: NextPage<DonatePageProps> = () => (
  <Position position={'relative'}>
    <Paper bgColor={'temp.#DACDC3'}>
      <Column maxWidth={[MOBILE_ROOT_MAX_WIDTH, '100%']} minHeight={`100vh`} pb={FOOTER_HEIGHT} mx={'auto'}>
        <MetaTags />
        <Header title={'기부하기'} />
        <Space height={HEADER_HEIGHT} />
        <DonatePageComponent />
        <Footer />
      </Column>
    </Paper>
  </Position>
)

export default DonatePage
