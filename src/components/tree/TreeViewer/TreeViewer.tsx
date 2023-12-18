import { Column } from '@components/common/Column'
import { Font } from '@components/common/Font'
import { Image } from '@components/common/Image'
import { Paper } from '@components/common/Paper'
import { Position } from '@components/common/Position'
import { Row } from '@components/common/Row'
import { ThreeElement } from '@components/common/TreeGroupElement/ThreeElement'
import styled from '@emotion/styled'
import { useBooleanState } from '@hooks/useBooleanState'
import { useIncrementalValue } from '@hooks/useIncrementValue'
import arrowCircleLeftIconImg from 'public/images/arrow_circle_left_icon.png'
import arrowCircleRightIconImg from 'public/images/arrow_circle_right_icon.png'
import shareIconImg from 'public/images/share_icon.png'
import treeIconImg from 'public/images/tree_icon.png'
import { FC, useState } from 'react'
import { AutoRotateSwitch } from '../AutoRotateSwitch/'
import { TREE_VIEWER_TEST_DATA } from './constant'

type TreeViewerProps = {
  className?: string
}

export const TreeViewer: FC<TreeViewerProps> = ({ className }) => {
  const { state: autoRotate, toggleState: toggleAutoRotate } = useBooleanState(true)
  const [testTreeList, _setTestTreeList] = useState(TREE_VIEWER_TEST_DATA)
  const [order, setOrder] = useState<number>(2)
  const { value } = useIncrementalValue(order, 300)

  const onClickPrevious = () => {
    setOrder((prev) => {
      if (prev !== 0) {
        return prev - 1
      }
      return prev
    })
  }
  const onClickNext = () => {
    setOrder((prev) => {
      if (prev !== testTreeList.length - 1) {
        return prev + 1
      }
      return prev
    })
  }
  const onClickShareButton = () => {}

  return (
    <Paper>
      <Column className={className}>
        <Row justify={'between'} px={20} mt={40} align={'center'}>
          <Row justify={'center'} align={'center'} gap={5}>
            <Image src={treeIconImg} alt={'tree icon image'} width={32} height={32} background={false} />
            <Row align={'center'}>
              <Font type={['heading-16-medium', 'heading-20-medium']} color={'white'}>
                <HighlightFontWrapper> {testTreeList[order].name}</HighlightFontWrapper> 님의 트리
              </Font>
            </Row>
          </Row>
          <Row cursor={'pointer'} onClick={onClickShareButton}>
            <Image
              src={shareIconImg}
              width={30}
              height={30}
              alt={'share icon image'}
              background={false}
              draggable={false}
            />
          </Row>
        </Row>
        <Column>
          <Position position={'relative'}>
            <Row height={400} overflow={'hidden'}>
              <ThreeElement
                testTreeList={testTreeList}
                height={400}
                cameraPosition={[0, 0, 4]}
                autoRotate={autoRotate}
                incrementValue={value}
                order={order}
              />
              <Position position={'absolute'} left={0} top={0}>
                <StyledPaper>
                  <Row justify={'center'} width={60} height={340}>
                    <Row cursor={'pointer'} onClick={onClickPrevious}>
                      <Image
                        width={40}
                        height={40}
                        src={arrowCircleLeftIconImg}
                        alt={'arrow circle left icon image'}
                        background={false}
                        draggable={false}
                      />
                    </Row>
                  </Row>
                </StyledPaper>
              </Position>
              <Position position={'absolute'} right={0} top={0}>
                <StyledPaper>
                  <Row justify={'center'} width={60} height={340}>
                    <Row cursor={'pointer'} onClick={onClickNext}>
                      <Image
                        width={40}
                        height={40}
                        src={arrowCircleRightIconImg}
                        alt={'arrow circle right icon image'}
                        background={false}
                        draggable={false}
                      />
                    </Row>
                  </Row>
                </StyledPaper>
              </Position>
              <Position position={'absolute'} top={20} right={0}>
                <AutoRotateSwitch checked={autoRotate} toggleAction={toggleAutoRotate} />
              </Position>
            </Row>
          </Position>
        </Column>
      </Column>
    </Paper>
  )
}

const HighlightFontWrapper = styled.span`
  font-weight: 800;
  color: #17ffff;
`

const StyledPaper = styled(Paper)`
  background: transparent;
`

type StyledSwitchProps = {
  checked: boolean
}
