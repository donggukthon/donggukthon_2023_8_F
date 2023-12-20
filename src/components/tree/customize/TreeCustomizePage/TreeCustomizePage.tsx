import { useGetTreeDetailsQuery } from '@apis/getTreeDetails'
import { usePostDecorationUpdateMutation } from '@apis/postDecorationUpdate'
import { Column } from '@components/common/Column'
import { Container } from '@components/common/Container'
import { Paper } from '@components/common/Paper'
import { useUserInfo } from '@hooks/useUserInfo'
import { FC, useEffect, useState } from 'react'
import { TreeCustomizeEditor } from '../TreeCustomizeEditor'

type TreeCustomizePageProps = {
  className?: string
}

export const DEFAULT_DECORATION_LIST_DATA = [
  {
    decorationType: 'TREE',
    url: '/models/tree_2.glb',
    position: [0, 0.3, 0],
    scale: [0.3, 0.3, 0.3],
    rotate: [0, 0, 0],
    type: 'GLB',
  },
]

export const TreeCustomizePage: FC<TreeCustomizePageProps> = ({ className }) => {
  const { userInfo } = useUserInfo()

  const userId = userInfo ? userInfo.id : 0

  const { data: treeDetailsData } = useGetTreeDetailsQuery({ variables: { id: userId } })
  const [testTreeList, setTestTreeList] = useState<any>()
  const { mutate: decorationUpdateMutate } = usePostDecorationUpdateMutation({})

  const treeDetailsMetaData = treeDetailsData?.data?.meta
  const onSubmit = (testTreeData: any) => () => {
    const newTestTreeData = { ...testTreeData, name: userInfo?.name }
    decorationUpdateMutate({ metadata: JSON.stringify(newTestTreeData) })
  }

  useEffect(() => {
    const metadata = {
      name: userInfo?.name,
      decorationList: DEFAULT_DECORATION_LIST_DATA,
    }

    if (!treeDetailsMetaData && userId !== 0) {
      decorationUpdateMutate({ metadata: JSON.stringify(metadata) })
      setTestTreeList([metadata])
      return
    }
    if (treeDetailsMetaData) {
      setTestTreeList([JSON.parse(treeDetailsMetaData)])
      return
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container size={'sm'}>
      <Paper>
        <Column className={className} minHeight={'100vh'} pb={40}>
          {testTreeList && <TreeCustomizeEditor testTreeList={testTreeList} onSubmit={onSubmit} />}
        </Column>
      </Paper>
    </Container>
  )
}
