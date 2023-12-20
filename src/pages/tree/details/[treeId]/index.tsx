import { prefetchGetTreeDetailsQuery } from '@apis/getTreeDetails'
import { Column } from '@components/common/Column'
import { Header } from '@components/common/Header'
import { Paper } from '@components/common/Paper'
import { Position } from '@components/common/Position'
import { Space } from '@components/common/Space'
import { TreeDetailsPage as TreeDetailsPageComponent } from '@components/tree/details/TreeDetailsPage'
import { HEADER_HEIGHT, MOBILE_ROOT_MAX_WIDTH } from '@constants/layout'
import { useUrlParam } from '@hooks/useUrlParam'
import { MetaTags } from '@libs/seo'
import { getUrl } from '@utils/getUrl'
import type { GetServerSideProps, NextPage } from 'next'
import { dehydrate, DehydratedState, QueryClient } from 'react-query'

const TreeDetailsPagePath = '/tree/details/[treeId]'

type TreeDetailsPageProps = { treeId: string }

export const getTreeDetailsPageUrl = (params: TreeDetailsPageProps) =>
  getUrl<TreeDetailsPageProps>(TreeDetailsPagePath, params)

const TreeDetailsPage: NextPage<TreeDetailsPageProps> = () => (
  <Position position={'relative'}>
    <Paper bgColor={'temp.#2d3968'}>
      <Column maxWidth={[MOBILE_ROOT_MAX_WIDTH, '100%']} minHeight={'100vh'} mx={'auto'}>
        <MetaTags title={'나만의 3D 트리'} description="겨울철 소중한 경험에 함께 참여해주세요!" />
        <Header isTreePage={true} title={'나만의 3D 트리'} />
        <Space height={HEADER_HEIGHT} />
        <TreeDetailsPageComponent />
      </Column>
    </Paper>
  </Position>
)

export const useTreeDetailsPageUrlParam = () => {
  const paramTreeId = useUrlParam('treeId', '')[0]

  const treeId = (() => {
    if (!paramTreeId) {
      return 0
    }
    if (typeof +paramTreeId !== 'number') {
      return 0
    }
    return +paramTreeId
  })()
  return { treeId }
}

export const getServerSideProps: GetServerSideProps<{ dehydratedState: DehydratedState }, TreeDetailsPageProps> =
  async (context) => {
    const queryClient = new QueryClient()

    const treeId = (() => {
      if (!context.params?.treeId) {
        return 0
      }
      if (typeof +context.params?.treeId !== 'number') {
        return 0
      }
      return +context.params?.treeId
    })()

    await prefetchGetTreeDetailsQuery(queryClient, {
      id: treeId,
    })

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    }
  }

export default TreeDetailsPage
