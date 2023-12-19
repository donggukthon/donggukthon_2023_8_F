/* eslint-disable unused-imports/no-unused-vars */
import { Column } from '@components/common/Column'
import { Container } from '@components/common/Container'
import { Font } from '@components/common/Font'
import { Image } from '@components/common/Image'
import { Paper } from '@components/common/Paper'
import { Position } from '@components/common/Position'
import { Row } from '@components/common/Row'
import { Space } from '@components/common/Space'
import { TreeViewer } from '@components/tree/TreeViewer'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import editIconImg from 'public/images/edit_icon.png'
import treeDetailsBackgroundImg from 'public/images/tree_details_background.png'
import { FC } from 'react'
import { ChristmasLetter } from '../ChristmasLetter'

type TreeDetailsPageProps = {
  className?: string
}

export const TreeDetailsPage: FC<TreeDetailsPageProps> = ({ className }) => {
  const { push } = useRouter()

  const onClickCustomizeTreeButton = () => {
    push('/tree/customize')
  }

  return (
    <Container size={'sm'}>
      <Position position={'relative'}>
        <Paper bgColor={'white'}>
          <Column>
            <Position position={'absolute'} top={0} left={0}>
              <Column height={400} overflow={'hidden'}>
                <StyledImage
                  src={treeDetailsBackgroundImg}
                  alt={'tree details background image'}
                  width={500}
                  height={400}
                  background={false}
                />
              </Column>
            </Position>
            <StyledPaper bgColor={'white'}>
              <Column className={className} minHeight={'100vh'}>
                <TreeViewer />
                <Space height={20} />
                <Row align={'center'} justify={'end'} mt={-40} mr={10}>
                  <StyledButtonPaper bgColor={'temp.#475482'} radius={8}>
                    <Row
                      justify={'center'}
                      gap={5}
                      height={40}
                      align={'center'}
                      px={12}
                      cursor={'pointer'}
                      onClick={onClickCustomizeTreeButton}
                    >
                      <Image src={editIconImg} width={20} height={20} alt={'edit icon image'} background={false} />
                      <Font type={'btn-14-medium'} color={'white'}>
                        내 트리 꾸미기
                      </Font>
                    </Row>
                  </StyledButtonPaper>
                </Row>
                <Space height={40} />
                <Row justify={'center'}>
                  <ChristmasLetter />
                </Row>
              </Column>
            </StyledPaper>
          </Column>
        </Paper>
      </Position>
    </Container>
  )
}

const StyledPaper = styled(Paper)`
  /* background: linear-gradient(180deg, #596592 0%, rgba(75, 83, 112, 0) 100%); */
`

const StyledButtonPaper = styled(Paper)`
  &&& {
    z-index: 2;
  }
`

const StyledImage = styled(Image)`
  img {
    width: 100%;
    height: auto;
    margin-top: -300px;
  }
`
