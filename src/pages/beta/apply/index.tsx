import { BetaApplyPage as BetaApplyPageComponent } from '@components/beta/apply/BetaApplyPage'
import { Column } from '@components/common/Column'
import { Footer } from '@components/common/Footer'
import { Paper } from '@components/common/Paper'
import { Position } from '@components/common/Position'
import { FOOTER_HEIGHT, MOBILE_ROOT_MAX_WIDTH } from '@constants/layout'
import { MetaTags } from '@libs/seo'
import { getUrl } from '@utils/getUrl'
import type { NextPage } from 'next'

const BetaApplyPagePath = '/beta/apply'

type BetaApplyPageProps = {}

export const getBetaApplyPageUrl = (params: BetaApplyPageProps) => getUrl<BetaApplyPageProps>(BetaApplyPagePath, params)

const BetaApplyPage: NextPage<BetaApplyPageProps> = () => (
  <Position position={'relative'}>
    <Paper bgColor={'temp.#DACDC3'}>
      <Column maxWidth={[MOBILE_ROOT_MAX_WIDTH, '100%']} minHeight={`100vh`} pb={FOOTER_HEIGHT} mx={'auto'}>
        <MetaTags
          title="나만의 3D 트리 베타테스터 모집"
          description="겨울철 소중한 경험에 함께 참여해주세요!"
          ogTitle="나만의 3D 트리 베타테스터 모집"
          ogDescription="겨울철 소중한 경험에 함께 참여해주세요!"
          thumbnail="/images/beta_apply_thumbnail.png"
          keywords={'나만의트리, 기부이벤트, 크리스마스, 크리스마스카드, 프로토타입, 사회문제'}
        />
        <BetaApplyPageComponent />
        <Footer />
      </Column>
    </Paper>
  </Position>
)

export default BetaApplyPage
