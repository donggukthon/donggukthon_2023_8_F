import { Border } from '@components/common/Border'
import { ContainedButton } from '@components/common/Button/ContainedButton'
import { Column } from '@components/common/Column'
import { Font } from '@components/common/Font'
import { Image } from '@components/common/Image'
import { Paper } from '@components/common/Paper'
import { Row } from '@components/common/Row'
import { Space } from '@components/common/Space'
import { useToast } from '@components/common/Toast'
import { ThreeElement } from '@components/common/TreeGroupElement/ThreeElement'
import { AutoRotateSwitch } from '@components/tree/AutoRotateSwitch'
import styled from '@emotion/styled'
import { useBooleanState } from '@hooks/useBooleanState'
import { Slider } from 'antd'
import decorationIcon1Img from 'public/images/decoration_icon_1.png'
import decorationIcon2Img from 'public/images/decoration_icon_2.png'
import decorationIcon4Img from 'public/images/decoration_icon_4.png'
import decorationIcon5Img from 'public/images/decoration_icon_5.png'
import decorationIcon6Img from 'public/images/decoration_icon_6.png'
import { FC, useEffect, useState } from 'react'
import { DecorationTypeType, getIndexByDecorationType } from './utils'

type TreeCustomizeEditorProps = {
  className?: string
}

const decorationFileList = [
  {
    label: '트리',
    decorationType: 'TREE',
    fileList: [
      {
        url: '/models/tree_1.glb',
        previewUrl: '/images/tree_1.jpeg',
      },
      {
        url: '/models/tree_2.glb',
        previewUrl: '/images/tree_2.jpeg',
      },
      {
        url: '/models/tree_3.glb',
        previewUrl: '/images/tree_3.jpeg',
      },
      {
        url: '/models/tree_4.glb',
        previewUrl: '/images/tree_4.jpeg',
      },
    ],
  },
  {
    label: '종',
    decorationType: 'DECORATION_6',
    fileList: [
      {
        url: '/models/decoration_6_1.glb',
        previewUrl: '/images/decoration_6_1.jpeg',
      },
      {
        url: '/models/decoration_6_2.glb',
        previewUrl: '/images/decoration_6_2.jpeg',
      },
    ],
  },
  {
    label: '지팡이',
    decorationType: 'DECORATION_5',
    fileList: [
      {
        url: '/models/decoration_5_1.glb',
        previewUrl: '/images/decoration_5_1.jpeg',
      },
      {
        url: '/models/decoration_5_2.glb',
        previewUrl: '/images/decoration_5_2.jpeg',
      },
      {
        url: '/models/decoration_5_3.glb',
        previewUrl: '/images/decoration_5_3.jpeg',
      },
    ],
  },
  {
    label: '선물상자',
    decorationType: 'DECORATION_7',
    fileList: [
      {
        url: '/models/decoration_7_1.glb',
        previewUrl: '/images/decoration_7_1.jpeg',
      },
      {
        url: '/models/decoration_7_2.glb',
        previewUrl: '/images/decoration_7_2.jpeg',
      },
      {
        url: '/models/decoration_7_3.glb',
        previewUrl: '/images/decoration_7_3.jpeg',
      },
    ],
  },
  {
    label: '별',
    decorationType: 'DECORATION_8',
    fileList: [
      {
        url: '/models/decoration_8_1.glb',
        previewUrl: '/images/decoration_8_1.jpeg',
      },
      {
        url: '/models/decoration_8_2.glb',
        previewUrl: '/images/decoration_8_2.jpeg',
      },
      {
        url: '/models/decoration_8_3.glb',
        previewUrl: '/images/decoration_8_3.jpeg',
      },
    ],
  },
]

const DEFAULT_POSITION = [0, 0.2, -0.4]

// 4: 팔찌, 5: 지팡이, 6: 종, 7: 선물상자, 8: 별

const DEFAULT_DATA = [
  {
    name: '베타테스터',
    decorationList: [
      {
        decorationType: 'TREE',
        url: '/models/tree_1.glb',
        position: [0, 0.3, 0],
        scale: [0.3, 0.3, 0.3],
        rotate: [0, 0, 0],
        type: 'GLB',
      },
      {
        decorationType: 'DECORATION_5',
        url: '/models/decoration_5_2.glb',
        position: DEFAULT_POSITION,
        scale: [0.1, 0.1, 0.1],
        rotate: [0.2, 0.3, 0.4],
        type: 'GLB',
      },
    ],
  },
]

type DirectionType = 'RESET' | 'RIGHT' | 'LEFT' | 'OPPOSITE'

const DECORATION_ICON_DIVIDE_RATIO = 3
const DECORATION_BUTTON_WIDTH = 60

export const TreeCustomizeEditor: FC<TreeCustomizeEditorProps> = ({ className }) => {
  const { showAlarmToast } = useToast()
  const { state: autoRotate, toggleState: toggleAutoRotate } = useBooleanState(true)
  const [selectedDecorationIndex, setSelectedDecorationIndex] = useState<number>(0)
  const [selectedDecorationType, setSelectedDecorationType] = useState<DecorationTypeType>('TREE')
  const [testTreeList, _setTestTreeList] = useState(DEFAULT_DATA)

  const onClickSelectedDecorationIndex = (index: number) => () => {
    setSelectedDecorationIndex(index)
  }

  const onClickSelectedDecoration = (value: DecorationTypeType) => () => {
    setSelectedDecorationType(value)
  }

  const selectedDecorationItem = testTreeList[0].decorationList[selectedDecorationIndex]

  const onClickKind = (index: number, url: string) => () => {
    _setTestTreeList((prev) => {
      const newDecorationList = prev[0].decorationList.map((value2, index2) =>
        index === index2 ? { ...value2, url } : { ...value2 }
      ) as any
      return [
        {
          ...prev[0],
          decorationList: newDecorationList,
        },
      ]
    })
  }

  const onClickPosition = (index: number, direction: DirectionType) => () => {
    if (direction === 'RESET') {
      _setTestTreeList((prev) => {
        const newPosition = [DEFAULT_POSITION[0], DEFAULT_POSITION[1], DEFAULT_POSITION[2]]
        const newDecorationList = prev[0].decorationList.map((value2, index2) =>
          index === index2 ? { ...value2, position: [...newPosition] } : { ...value2 }
        ) as any
        return [
          {
            ...prev[0],
            decorationList: newDecorationList,
          },
        ]
      })
      return
    }
    if (direction === 'RIGHT') {
      _setTestTreeList((prev) => {
        const newPosition = [DEFAULT_POSITION[2], DEFAULT_POSITION[1], DEFAULT_POSITION[0]]
        const newDecorationList = prev[0].decorationList.map((value2, index2) =>
          index === index2 ? { ...value2, position: [...newPosition] } : { ...value2 }
        ) as any
        return [
          {
            ...prev[0],
            decorationList: newDecorationList,
          },
        ]
      })
      return
    }
    if (direction === 'LEFT') {
      _setTestTreeList((prev) => {
        const newPosition = [-1 * DEFAULT_POSITION[2], DEFAULT_POSITION[1], DEFAULT_POSITION[0]]
        const newDecorationList = prev[0].decorationList.map((value2, index2) =>
          index === index2 ? { ...value2, position: [...newPosition] } : { ...value2 }
        ) as any
        return [
          {
            ...prev[0],
            decorationList: newDecorationList,
          },
        ]
      })
      return
    }
    if (direction === 'OPPOSITE') {
      _setTestTreeList((prev) => {
        const newPosition = [DEFAULT_POSITION[0], DEFAULT_POSITION[1], -1 * DEFAULT_POSITION[2]]
        const newDecorationList = prev[0].decorationList.map((value2, index2) =>
          index === index2 ? { ...value2, position: [...newPosition] } : { ...value2 }
        ) as any
        return [
          {
            ...prev[0],
            decorationList: newDecorationList,
          },
        ]
      })
      return
    }
  }

  const onChangeSlider = (index: number) => (value: number) => {
    if (isNaN(value)) {
      return
    }
    _setTestTreeList((prev) => {
      const newDecorationList = prev[0].decorationList.map((value2, index2) =>
        index === index2 ? { ...value2, scale: [value, value, value] } : { ...value2 }
      ) as any
      return [
        {
          ...prev[0],
          decorationList: newDecorationList,
        },
      ]
    })
  }

  const onClickCreateButton = () => {
    if (testTreeList[0].decorationList.length >= 6) {
      showAlarmToast({ message: '장식의 최대 개수를 초과했습니다.' })
      return
    }
    _setTestTreeList((prev) => {
      const newDecorationList = [
        ...prev[0].decorationList,
        {
          decorationType: 'DECORATION_5',
          url: '/models/decoration_5_2.glb',
          position: DEFAULT_POSITION,
          scale: [0.2, 0.2, 0.2],
          rotate: [0.2, 0.3, 0.4],
          type: 'GLB',
        },
      ]
      return [
        {
          ...prev[0],
          decorationList: newDecorationList,
        },
      ]
    })
    return
  }

  const onClickDeleteButton = (index: number) => () => {
    setSelectedDecorationIndex(0)

    _setTestTreeList((prev) => {
      const newDecorationList = prev[0].decorationList.filter((_value2, index2) => index !== index2)
      return [
        {
          ...prev[0],
          decorationList: newDecorationList,
        },
      ]
    })

    return
  }

  useEffect(() => {
    setSelectedDecorationType(
      testTreeList[0].decorationList[selectedDecorationIndex].decorationType as DecorationTypeType
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDecorationIndex])

  return (
    <StyledPaper>
      <Column className={className}>
        <Column overflow={'hidden'} height={400}>
          <ThreeElement testTreeList={testTreeList} height={400} cameraPosition={[0, 0, 4]} autoRotate={autoRotate} />
          <Row width={'100%'} justify={'end'} mt={-20} pr={15}>
            <AutoRotateSwitch checked={autoRotate} fontColor={'gray.700'} toggleAction={toggleAutoRotate} />
          </Row>
        </Column>
        <Column width={'100%'} p={20}>
          <Border radius={12} thickness={1} color={'gray.300'}>
            <Paper bgColor={'white'}>
              <Column width={'100%'} p={20}>
                <Row gap={20} align={'center'} height={32}>
                  <Row width={30}>
                    <Font type={['heading-12-medium', 'heading-14-medium']} color={'gray.800'} wordBreak={'keep-all'}>
                      장식
                    </Font>
                  </Row>
                  <Row gap={10} align={'center'}>
                    {testTreeList[0].decorationList.map((value, index) => (
                      <Paper
                        bgColor={selectedDecorationIndex !== index ? 'white' : 'temp.#475482'}
                        borderColor={'temp.#475482'}
                        radius={16}
                        key={`decoration_item_${value.url}`}
                      >
                        <Row
                          width={[24, 32]}
                          height={[24, 32]}
                          justify={'center'}
                          align={'center'}
                          onClick={onClickSelectedDecorationIndex(index)}
                          cursor={'pointer'}
                        >
                          <Font
                            type={['btn-12-bold', 'btn-16-bold']}
                            color={selectedDecorationIndex !== index ? 'temp.#475482' : 'white'}
                          >
                            {index + 1}
                          </Font>
                        </Row>
                      </Paper>
                    ))}
                    {testTreeList[0].decorationList.length < 6 && (
                      <Paper bgColor={'white'} borderColor={'temp.#475482'} radius={16}>
                        <Row
                          width={[24, 32]}
                          height={[24, 32]}
                          justify={'center'}
                          align={'center'}
                          onClick={onClickCreateButton}
                          cursor={'pointer'}
                        >
                          <Font type={['btn-12-bold', 'btn-16-bold']} color={'temp.#475482'}>
                            +
                          </Font>
                        </Row>
                      </Paper>
                    )}
                  </Row>
                </Row>
                <Space height={30} />
                <Row gap={20} align={'center'}>
                  <Row width={30}>
                    <Font type={['heading-12-medium', 'heading-14-medium']} color={'gray.800'} wordBreak={'keep-all'}>
                      종류
                    </Font>
                  </Row>
                  <Row gap={10} align={'center'}>
                    {selectedDecorationIndex === 0 ? (
                      <Paper radius={60} borderColor={'gray.200'}>
                        <Row
                          width={DECORATION_BUTTON_WIDTH}
                          height={DECORATION_BUTTON_WIDTH}
                          justify={'center'}
                          align={'center'}
                          p={10}
                          cursor={'pointer'}
                          onClick={onClickSelectedDecoration('TREE')}
                        >
                          <Image
                            src={decorationIcon1Img}
                            alt={'decoration icon 1 image'}
                            width={69 / DECORATION_ICON_DIVIDE_RATIO}
                            height={150 / DECORATION_ICON_DIVIDE_RATIO}
                            background={false}
                          />
                        </Row>
                      </Paper>
                    ) : (
                      <Row gap={10} align={'center'} wrap={'wrap'}>
                        <Paper radius={60} borderColor={'gray.200'}>
                          <Row
                            width={DECORATION_BUTTON_WIDTH}
                            height={DECORATION_BUTTON_WIDTH}
                            justify={'center'}
                            align={'center'}
                            p={10}
                            cursor={'pointer'}
                            onClick={onClickSelectedDecoration('DECORATION_6')}
                          >
                            <Image
                              src={decorationIcon2Img}
                              alt={'decoration icon 2 image'}
                              width={119 / DECORATION_ICON_DIVIDE_RATIO}
                              height={120 / DECORATION_ICON_DIVIDE_RATIO}
                              background={false}
                            />
                          </Row>
                        </Paper>
                        {/* <Paper radius={60} borderColor={'gray.200'}>
                          <Row
                            width={DECORATION_BUTTON_WIDTH}
                            height={DECORATION_BUTTON_WIDTH}
                            justify={'center'}
                            align={'center'}
                            p={10}
                            cursor={'pointer'}
                            onClick={onClickSelectedDecoration('DECORATION_5')}
                          >
                            <Image
                              src={decorationIcon3Img}
                              alt={'decoration icon 3 image'}
                              width={123 / DECORATION_ICON_DIVIDE_RATIO}
                              height={120 / DECORATION_ICON_DIVIDE_RATIO}
                              background={false}
                            />
                          </Row>
                        </Paper> */}
                        <Paper radius={60} borderColor={'gray.200'}>
                          <Row
                            width={DECORATION_BUTTON_WIDTH}
                            height={DECORATION_BUTTON_WIDTH}
                            justify={'center'}
                            align={'center'}
                            p={10}
                            cursor={'pointer'}
                            onClick={onClickSelectedDecoration('DECORATION_7')}
                          >
                            <Image
                              src={decorationIcon4Img}
                              alt={'decoration icon 4 image'}
                              width={62 / DECORATION_ICON_DIVIDE_RATIO}
                              height={130 / DECORATION_ICON_DIVIDE_RATIO}
                              background={false}
                            />
                          </Row>
                        </Paper>
                        <Paper radius={60} borderColor={'gray.200'}>
                          <Row
                            width={DECORATION_BUTTON_WIDTH}
                            height={DECORATION_BUTTON_WIDTH}
                            justify={'center'}
                            align={'center'}
                            p={10}
                            cursor={'pointer'}
                            onClick={onClickSelectedDecoration('DECORATION_5')}
                          >
                            <Image
                              src={decorationIcon5Img}
                              alt={'decoration icon 5 image'}
                              width={94 / DECORATION_ICON_DIVIDE_RATIO}
                              height={128 / DECORATION_ICON_DIVIDE_RATIO}
                              background={false}
                            />
                          </Row>
                        </Paper>
                        <Paper radius={60} borderColor={'gray.200'}>
                          <Row
                            width={DECORATION_BUTTON_WIDTH}
                            height={DECORATION_BUTTON_WIDTH}
                            justify={'center'}
                            align={'center'}
                            p={10}
                            cursor={'pointer'}
                            onClick={onClickSelectedDecoration('DECORATION_8')}
                          >
                            <Image
                              src={decorationIcon6Img}
                              alt={'decoration icon 6 image'}
                              width={88 / DECORATION_ICON_DIVIDE_RATIO}
                              height={100 / DECORATION_ICON_DIVIDE_RATIO}
                              background={false}
                            />
                          </Row>
                        </Paper>
                      </Row>
                    )}
                  </Row>
                </Row>
                <Space height={[20, 30]} />
                <Row gap={20} align={'center'}>
                  <Row width={30}>
                    <Font type={['heading-12-medium', 'heading-14-medium']} color={'gray.800'} wordBreak={'keep-all'}>
                      스킨
                    </Font>
                  </Row>
                  {decorationFileList[getIndexByDecorationType(selectedDecorationType)].fileList.map((value) => (
                    <Paper
                      key={`decoration_file_list_${value.url}`}
                      radius={8}
                      borderColor={'gray.300'}
                      overflow={'hidden'}
                    >
                      <Row cursor={'pointer'} onClick={onClickKind(selectedDecorationIndex, value.url)}>
                        <PreviewImage
                          width={50}
                          height={50}
                          alt={`decoration file preview`}
                          src={value.previewUrl}
                          background={false}
                        />
                      </Row>
                    </Paper>
                  ))}
                </Row>
                <Space height={[20, 30]} />
                {selectedDecorationType !== 'TREE' && (
                  <Row gap={20} align={'center'}>
                    <Row width={30}>
                      <Font type={['heading-12-medium', 'heading-14-medium']} color={'gray.800'} wordBreak={'keep-all'}>
                        크기
                      </Font>
                    </Row>
                    <Slider
                      style={{ width: 200, marginTop: 5, marginBottom: 5 }}
                      min={0.1}
                      max={1}
                      value={selectedDecorationItem.scale[0]}
                      onChange={onChangeSlider(selectedDecorationIndex)}
                      step={0.01}
                    />
                  </Row>
                )}
                <Space height={[5, 15]} />
                {selectedDecorationType !== 'TREE' && (
                  <Row gap={20} align={'center'}>
                    <Row width={30}>
                      <Font type={['heading-12-medium', 'heading-14-medium']} color={'gray.800'} wordBreak={'keep-all'}>
                        위치
                      </Font>
                    </Row>
                    <Row gap={10} wrap={'wrap'}>
                      <ContainedButton
                        kind={'secondary-gray'}
                        size={'sm'}
                        onClick={onClickPosition(selectedDecorationIndex, 'RESET')}
                        style={{ marginBottom: 5, marginTop: 5 }}
                      >
                        리셋
                      </ContainedButton>
                      <ContainedButton
                        kind={'secondary-gray'}
                        size={'sm'}
                        onClick={onClickPosition(selectedDecorationIndex, 'RIGHT')}
                        style={{ marginBottom: 5, marginTop: 5 }}
                      >
                        90도 오른쪽
                      </ContainedButton>
                      <ContainedButton
                        kind={'secondary-gray'}
                        size={'sm'}
                        onClick={onClickPosition(selectedDecorationIndex, 'LEFT')}
                        style={{ marginBottom: 5, marginTop: 5 }}
                      >
                        90도 왼쪽
                      </ContainedButton>
                      <ContainedButton
                        kind={'secondary-gray'}
                        size={'sm'}
                        onClick={onClickPosition(selectedDecorationIndex, 'OPPOSITE')}
                        style={{ marginBottom: 5, marginTop: 5 }}
                      >
                        정반대
                      </ContainedButton>
                    </Row>
                  </Row>
                )}
                <Space height={20} />
                <Row width={'100%'} height={30} justify={'end'}>
                  {selectedDecorationIndex !== 0 && (
                    <ContainedButton
                      kind={'secondary-gray'}
                      size={'md'}
                      onClick={onClickDeleteButton(selectedDecorationIndex)}
                    >
                      장식 삭제
                    </ContainedButton>
                  )}
                </Row>
              </Column>
            </Paper>
          </Border>
        </Column>
      </Column>
    </StyledPaper>
  )
}

const PreviewImage = styled(Image)`
  img {
    object-fit: contain;
  }
`

const StyledPaper = styled(Paper)`
  background: linear-gradient(180deg, #dacdc3 0%, rgba(218, 205, 195, 0) 100%);
`
