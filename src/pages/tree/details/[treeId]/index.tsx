import { Column } from '@components/common/Column'
import { Footer } from '@components/common/Footer'
import { Header } from '@components/common/Header'
import { Paper } from '@components/common/Paper'
import { Position } from '@components/common/Position'
import { Space } from '@components/common/Space'
import { TreeDetailsPage as TreeDetailsPageComponent } from '@components/tree/details/TreeDetailsPage'
import { FOOTER_HEIGHT, HEADER_HEIGHT, MOBILE_ROOT_MAX_WIDTH } from '@constants/layout'
import { useUrlParam } from '@hooks/useUrlParam'
import { MetaTags } from '@libs/seo'
import { getUrl } from '@utils/getUrl'
import type { NextPage } from 'next'

const TreeDetailsPagePath = '/tree/details/[treeId]'

type TreeDetailsPageProps = {}

export const getTreeDetailsPageUrl = (params: TreeDetailsPageProps) =>
  getUrl<TreeDetailsPageProps>(TreeDetailsPagePath, params)

const TreeDetailsPage: NextPage<TreeDetailsPageProps> = () => (
  <Position position={'relative'}>
    <Paper bgColor={'temp.#2d3968'}>
      <Column maxWidth={[MOBILE_ROOT_MAX_WIDTH, '100%']} minHeight={'100vh'} pb={FOOTER_HEIGHT} mx={'auto'}>
        <MetaTags />
        <Header isTreePage={true} title={'나만의 3D 트리'} />
        <Space height={HEADER_HEIGHT} />
        <TreeDetailsPageComponent />
        <Footer />
      </Column>
    </Paper>
  </Position>
)

export const useTreeDetailsPageUrlParam = () => {
  const treeId = useUrlParam('treeId', '')[0]

  return { treeId }
}

export default TreeDetailsPage
