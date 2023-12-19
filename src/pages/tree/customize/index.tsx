import { Column } from '@components/common/Column'
import { Footer } from '@components/common/Footer'
import { Header } from '@components/common/Header'
import { Paper } from '@components/common/Paper'
import { Position } from '@components/common/Position'
import { Space } from '@components/common/Space'
import { TreeCustomizePage as TreeCustomizePageComponent } from '@components/tree/customize/TreeCustomizePage'
import { HEADER_HEIGHT, MOBILE_ROOT_MAX_WIDTH } from '@constants/layout'
import { MetaTags } from '@libs/seo'
import { getUrl } from '@utils/getUrl'
import type { NextPage } from 'next'

const TreeCustomizePagePath = '/tree/customize'

type TreeCustomizePageProps = {}

export const getTreeCustomizePageUrl = (params: TreeCustomizePageProps) =>
  getUrl<TreeCustomizePageProps>(TreeCustomizePagePath, params)

const TreeCustomizePage: NextPage<TreeCustomizePageProps> = () => (
  <Position position={'relative'}>
    <Paper bgColor={'temp.#CEBAAC'}>
      <Column maxWidth={[MOBILE_ROOT_MAX_WIDTH, '100%']} minHeight={`100vh`} mx={'auto'}>
        <MetaTags />
        <Header title={'트리 꾸미기'} />
        <Space height={HEADER_HEIGHT} />
        <TreeCustomizePageComponent />
        <Footer />
      </Column>
    </Paper>
  </Position>
)

export default TreeCustomizePage
