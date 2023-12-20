import { Column } from '@components/common/Column'
import { Font } from '@components/common/Font'
import { Image } from '@components/common/Image'
import { MusicPlayer } from '@components/common/MusicPlayer'
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
import { AutoRotateSwitch } from '../../AutoRotateSwitch'
import { ChristmasLetterModal } from '../ChirstmasLetterModal'

type TreeViewerProps = {
  className?: string
  treeList: any
  treeId: number
  isCaptureMode: boolean
}

export const TreeViewer: FC<TreeViewerProps> = ({ className, treeList, treeId: _treeId, isCaptureMode }) => {
  const [name, _setName] = useState('테스트')
  const [content, _setContent] = useState('테스트입니다 테스트입니다')
  const { state: autoRotate, toggleState: toggleAutoRotate, setFalse: _deactivateAutoRotate } = useBooleanState(true)
  const [order, setOrder] = useState<number>(0)
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
        <Row justify={'between'} height={40} pl={20} align={'center'} style={{ zIndex: 2 }}>
          {!isCaptureMode && (
            <>
              <Row justify={'center'} align={'center'} gap={5}>
                <StyledFont type={['heading-16-medium', 'heading-20-medium']} color={'white'}>
                  <HighlightFontWrapper> {testTreeList[order].name}</HighlightFontWrapper> 님의 트리
                </StyledFont>
              </Row>
              <Row align={'center'}>
                <ChristmasLetterModal name={name} content={content} />
                <MusicPlayer />
              </Row>
            </>
          )}
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

              {!isCaptureMode && (
                <Position position={'absolute'} left={0} top={0}>
                  <StyledPaper>
                    <Row justify={'center'} width={60} height={340} cursor={'pointer'} onClick={onClickPrevious}>
                      <Image
                        width={40}
                        height={40}
                        src={arrowCircleLeftIconImg}
                        alt={'arrow circle left icon image'}
                        background={false}
                        draggable={false}
                      />
                    </Row>
                  </StyledPaper>
                </Position>
              )}

              {!isCaptureMode && (
                <Position position={'absolute'} right={0} top={0}>
                  <StyledPaper>
                    <Row justify={'center'} width={60} height={340} cursor={'pointer'} onClick={onClickNext}>
                      <Image
                        width={40}
                        height={40}
                        src={arrowCircleRightIconImg}
                        alt={'arrow circle right icon image'}
                        background={false}
                        draggable={false}
                      />
                    </Row>
                  </StyledPaper>
                </Position>
              )}

              {!isCaptureMode && (
                <Position position={'absolute'} top={20} right={0}>
                  <AutoRotateSwitch checked={autoRotate} toggleAction={toggleAutoRotate} />
                </Position>
              )}
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
