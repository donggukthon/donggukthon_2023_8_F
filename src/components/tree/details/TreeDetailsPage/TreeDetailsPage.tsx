/* eslint-disable unused-imports/no-unused-vars */
import { Column } from '@components/common/Column'
import { Container } from '@components/common/Container'
import { Image } from '@components/common/Image'
import { Paper } from '@components/common/Paper'
import { Position } from '@components/common/Position'
import { Row } from '@components/common/Row'
import { useToast } from '@components/common/Toast'
import { TreeViewer } from '@components/tree/TreeViewer'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import editIconImg from 'public/images/edit_icon.png'
import scanIconImg from 'public/images/scan_icon.png'
import treeDetailsBackground3Img from 'public/images/tree_details_background_3.png'
import { FC } from 'react'

type TreeDetailsPageProps = {
  className?: string
}

export const TreeDetailsPage: FC<TreeDetailsPageProps> = ({ className }) => {
  const { push } = useRouter()
  const { showAlarmToast } = useToast()

  const onClickCustomizeTreeButton = () => {
    push('/tree/customize')
  }
  const onClickScanButton = () => {
    showAlarmToast({ message: '구현 중인 기능입니다.' })
  }

  return (
    <Position position={'relative'}>
      <Column className={className}>
        <StyledPosition position={'absolute'} top={250} style={{ zIndex: 0 }}>
          <StyledImageWrapper>
            <StyledImage
              src={treeDetailsBackground3Img}
              alt={'tree details background image'}
              width={500}
              height={500}
              background={false}
            />
          </StyledImageWrapper>
        </StyledPosition>
        <Container size={'sm'}>
          <StyledPaper>
            <Column style={{ zIndex: 2 }}>
              <TreeViewer />
              <Row align={'center'} justify={'between'} mt={-50} mx={10}>
                <StyledButtonPaper bgColor={'temp.#2d396855'} radius={30}>
                  <Row p={10} cursor={'pointer'} onClick={onClickScanButton}>
                    <Image src={scanIconImg} width={24} height={24} alt={'edit icon image'} background={false} />
                  </Row>
                </StyledButtonPaper>
                <StyledButtonPaper bgColor={'temp.#2d396855'} radius={30}>
                  <Row p={10} cursor={'pointer'} onClick={onClickCustomizeTreeButton}>
                    <Image
                      src={editIconImg}
                      width={24}
                      height={24}
                      alt={'edit icon image'}
                      background={false}
                      draggable={false}
                    />
                  </Row>
                </StyledButtonPaper>
              </Row>
            </Column>
          </StyledPaper>
        </Container>
      </Column>
    </Position>
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

const StyledPosition = styled(Position)`
  left: 50%;
  transform: translate(-50%, -50%);
`

const StyledImageWrapper = styled.span`
  max-width: 500px;
  min-width: 320px;
  overflow: hidden;
`

const StyledImage = styled(Image)`
  width: 1200px;
  z-index: 0;
  img {
    width: 1200px;
    height: auto;
    object-fit: cover;
    margin-left: calc(-60%);
  }
`
