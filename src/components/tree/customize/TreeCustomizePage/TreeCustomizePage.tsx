import { ContainedButton } from '@components/common/Button/ContainedButton'
import { Column } from '@components/common/Column'
import { Container } from '@components/common/Container'
import { Paper } from '@components/common/Paper'
import { Row } from '@components/common/Row'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { TreeCustomizeEditor } from '../TreeCustomizeEditor'

type TreeCustomizePageProps = {
  className?: string
}

export const TreeCustomizePage: FC<TreeCustomizePageProps> = ({ className }) => {
  const { push } = useRouter()

  const onClickCancelButton = () => {
    push('/tree/details/1')
    return
  }
  const onClickCompleteButton = () => {
    return
  }

  return (
    <Container size={'sm'}>
      <Paper>
        <Column className={className} minHeight={'100vh'} pb={40}>
          <TreeCustomizeEditor />
          <Row mt={20} width={'100%'} justify={'end'} gap={10} pr={20}>
            <ContainedButton kind={'secondary-accent'} size={'md'} onClick={onClickCancelButton}>
              뒤로가기
            </ContainedButton>
            <ContainedButton kind={'cta'} size={'md'} onClick={onClickCompleteButton}>
              완료
            </ContainedButton>
          </Row>
        </Column>
      </Paper>
    </Container>
  )
}
