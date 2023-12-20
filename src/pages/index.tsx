import { Paper } from '@components/common/Paper'
import { Space } from '@components/common/Space'
import { MainPage as MainPageComponent } from '@components/main/MainPage'
import { BreadcrumbListSnippet, BREADCRUMBS, MetaTags } from '@libs/seo'
import { OrganizationSnippet } from '@libs/seo/OrganizationSnippet'
import { getUrl } from '@utils/getUrl'
import type { GetServerSideProps, NextPage } from 'next'
import { dehydrate, DehydratedState, QueryClient } from 'react-query'

const MainPagePath = '/'

type MainPageProps = {}

export const getMainPageUrl = (params: MainPageProps = {}) => getUrl<MainPageProps>(MainPagePath, params)

const MainPage: NextPage<MainPageProps> = () => {
  return (
    <>
      <OrganizationSnippet />
      <BreadcrumbListSnippet breadcrumbs={[BREADCRUMBS.HOME]} />
      <MetaTags title="나만의 3D 트리" description="3D 트리를 꾸미면서 후원를 해보세요!" />
      <Paper bgColor={'temp.#DACDC3'}>
        <MainPageComponent />
        <Space height={20} />
      </Paper>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<{ dehydratedState: DehydratedState }, MainPageProps> = async () => {
  const queryClient = new QueryClient()

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default MainPage
