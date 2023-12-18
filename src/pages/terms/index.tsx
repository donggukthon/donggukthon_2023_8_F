import { Column } from '@components/common/Column'
import { Footer } from '@components/common/Footer'
import { Header } from '@components/common/Header'
import { Paper } from '@components/common/Paper'
import { Position } from '@components/common/Position'
import { Space } from '@components/common/Space'
import { FOOTER_HEIGHT, HEADER_HEIGHT, MOBILE_ROOT_MAX_WIDTH } from '@constants/layout'
import { MetaTags } from '@libs/seo'
import { getUrl } from '@utils/getUrl'
import { TermsPage as TermsPageComponent } from 'components/terms/TermsPage'
import type { NextPage } from 'next'

const TermsPagePath = '/terms'

type TermsPageProps = {}

export const getTermsPageUrl = (params: TermsPageProps) => getUrl<TermsPageProps>(TermsPagePath, params)

const TermsPage: NextPage<TermsPageProps> = () => (
  <Position position={'relative'}>
    <Paper bgColor={'temp.#DACDC3'}>
      <Column maxWidth={[MOBILE_ROOT_MAX_WIDTH, '100%']} minHeight={`100vh`} pb={FOOTER_HEIGHT} mx={'auto'}>
        <MetaTags />
        <Header />
        <Space height={HEADER_HEIGHT} />
        <TermsPageComponent />
        <Footer />
      </Column>
    </Paper>
  </Position>
)

export default TermsPage
