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
import { FC, useState } from 'react'
import { AutoRotateSwitch } from '../AutoRotateSwitch/'
import { ChristmasLetterModal } from '../details/ChirstmasLetterModal'

type TreeViewerProps = {
  className?: string
  treeList: any
  treeId: number
}

export const TreeViewer: FC<TreeViewerProps> = ({ className, treeList, treeId }) => {
  const [name, _setName] = useState('테스트')
  const [content, _setContent] = useState('테스트입니다 테스트입니다')
  const { state: autoRotate, toggleState: toggleAutoRotate } = useBooleanState(true)
  const [order, setOrder] = useState<number>(+treeId)
  const { value } = useIncrementalValue(order, 300)

  const testTreeList = treeList

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

  return (
    <Paper>
      <Column className={className}>
        <Row justify={'between'} pl={20} align={'center'} style={{ zIndex: 2 }}>
          <Row justify={'center'} align={'center'} gap={5}>
            <Row align={'center'}>
              <StyledFont type={['heading-16-medium', 'heading-20-medium']} color={'white'}>
                <HighlightFontWrapper> {testTreeList[order].name}</HighlightFontWrapper> 님의 트리
              </StyledFont>
            </Row>
          </Row>
          <ChristmasLetterModal name={name} content={content} />
        </Row>
        <Column>
          <Position position={'relative'}>
            <Row height={400} overflow={'hidden'}>
              <ThreeElement
                testTreeList={testTreeList}
                height={800}
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
  font-family: 'KingSejongInstitute';
  font-weight: 800;
  color: #17ffff;
`

const StyledPaper = styled(Paper)`
  background: transparent;
`

const StyledFont = styled(Font)`
  font-family: 'KingSejongInstitute';
`
