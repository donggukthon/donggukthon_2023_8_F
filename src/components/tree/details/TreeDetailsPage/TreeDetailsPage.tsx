/* eslint-disable unused-imports/no-unused-vars */
import { useGetTreeDetailsQuery } from '@apis/getTreeDetails'
import { usePostDecorationUpdateMutation } from '@apis/postDecorationUpdate'
import { Column } from '@components/common/Column'
import { Container } from '@components/common/Container'
import { Font } from '@components/common/Font'
import { Image } from '@components/common/Image'
import { Paper } from '@components/common/Paper'
import { Position } from '@components/common/Position'
import { Row } from '@components/common/Row'
import { TreeViewer } from '@components/tree/details/TreeViewer'
import styled from '@emotion/styled'
import { useBooleanState } from '@hooks/useBooleanState'
import { useTreeDetailsPageUrlParam } from '@pages/tree/details/[treeId]'
import { useRouter } from 'next/router'
import donateButtonImg from 'public/images/donate_button.png'
import editIconImg from 'public/images/edit_icon.png'
import scanIconImg from 'public/images/scan_icon.png'
import treeDetailsBackground3Img from 'public/images/tree_details_background_4.png'
import { FC, useEffect, useState } from 'react'

type TreeDetailsPageProps = {
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

export const TreeDetailsPage: FC<TreeDetailsPageProps> = ({ className }) => {
  const { state: isCaptureMode, setTrue: activateCaptureMode, setFalse: deactivateCaptureMode } = useBooleanState(false)
  const { push } = useRouter()

  const [testTreeList, setTestTreeList] = useState<any>()
  const { treeId } = useTreeDetailsPageUrlParam()
  const { mutate: decorationUpdateMutate } = usePostDecorationUpdateMutation({})
  const { data: treeDetailsData } = useGetTreeDetailsQuery({ variables: { id: treeId } })

  const onClickCustomizeTreeButton = () => {
    push('/tree/customize')
  }
  const onClickScanButton = () => {
    activateCaptureMode()
  }
  const onClickDonateButton = () => {
    push('/donate')
  }

  useEffect(() => {
    const treeDetailsName = treeDetailsData?.data?.name
    const treeDetailsMetaData = treeDetailsData?.data?.meta

    const metadata = {
      name: treeDetailsName,
      decorationList: DEFAULT_DECORATION_LIST_DATA,
    }

    if (!treeDetailsMetaData) {
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
    <Position position={'relative'}>
      <Column className={className} maxWidth={'100vw'} minHeight={'100vh'} overflowX={'hidden'}>
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
              {testTreeList && <TreeViewer treeList={testTreeList} treeId={+treeId} isCaptureMode={isCaptureMode} />}
              {!isCaptureMode && (
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
              )}
              {!isCaptureMode && (
                <StyledColumn
                  width={'100%'}
                  justify={'center'}
                  mt={50}
                  p={10}
                  cursor={'pointer'}
                  onClick={onClickDonateButton}
                  gap={10}
                >
                  <Image
                    src={donateButtonImg}
                    width={[250, 300]}
                    height={[75, 90]}
                    alt={'donate button image'}
                    background={false}
                    draggable={false}
                  />
                  <Row width={'100%'} justify={'center'}>
                    <StyledFont type={['body-10-regular', 'btn-12-regular']} color={'gray.700'}>
                      {`서비스 수익금은 금융문제로 어려움을 겪는 이들을 돕는 "사회연대은행"에 기부합니다`}
                    </StyledFont>
                  </Row>
                </StyledColumn>
              )}
            </Column>
          </StyledPaper>
        </Container>
        {isCaptureMode && <StyledDeactivateCaptureRow cursor={'pointer'} onClick={deactivateCaptureMode} />}
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

const StyledColumn = styled(Column)`
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

const StyledFont = styled(Font)`
  font-family: 'KingSejongInstitute';
`

const StyledDeactivateCaptureRow = styled(Row)`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
`
