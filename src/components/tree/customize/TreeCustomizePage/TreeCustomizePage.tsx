import { Column } from '@components/common/Column'
import { Container } from '@components/common/Container'
import { Paper } from '@components/common/Paper'
import { TREE_VIEWER_TEST_DATA } from '@components/tree/details/TreeViewer/constant'
import { useLocalStorage } from '@hooks/useLocalStorage'
import { FC, useEffect, useState } from 'react'
import { TreeCustomizeEditor } from '../TreeCustomizeEditor'

type TreeCustomizePageProps = {
  className?: string
}

export const TreeCustomizePage: FC<TreeCustomizePageProps> = ({ className }) => {
  const {
    value: localTestTreeList,
    setItem: setItemTestTreeList,
    removeItem: removeItemTestTreeList,
  } = useLocalStorage('test-tree-list')
  const { value: testLogin } = useLocalStorage('test-login')
  const userTestLogin: any = testLogin ?? '1'
  const [testTreeList, setTestTreeList] = useState<any>()

  const onSubmit = (testTreeData: any) => () => {
    let newTestTreeList = testTreeList.map((value: any, index: number) =>
      index === +userTestLogin ? testTreeData : value
    )
    removeItemTestTreeList()
    setItemTestTreeList(JSON.stringify(newTestTreeList))
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (!localTestTreeList) {
        setItemTestTreeList(JSON.stringify(TREE_VIEWER_TEST_DATA))
        setTestTreeList(TREE_VIEWER_TEST_DATA)
      } else {
        setTestTreeList(JSON.parse(localTestTreeList as string))
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container size={'sm'}>
      <Paper>
        <Column className={className} minHeight={'100vh'} pb={40}>
          {testTreeList && userTestLogin && (
            <TreeCustomizeEditor testTreeList={testTreeList} userId={+userTestLogin as number} onSubmit={onSubmit} />
          )}
        </Column>
      </Paper>
    </Container>
  )
}
