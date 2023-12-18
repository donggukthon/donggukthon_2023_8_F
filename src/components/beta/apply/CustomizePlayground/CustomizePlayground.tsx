import { Border } from '@components/common/Border'
import { ContainedButton } from '@components/common/Button/ContainedButton'
import { Column } from '@components/common/Column'
import { Font } from '@components/common/Font'
import { CheckBox } from '@components/common/Form/CheckBox'
import { Image } from '@components/common/Image'
import { Paper } from '@components/common/Paper'
import { Row } from '@components/common/Row'
import { Space } from '@components/common/Space'
import { ThreeElement } from '@components/common/TreeGroupElement/ThreeElement'
import styled from '@emotion/styled'
import { useBooleanState } from '@hooks/useBooleanState'
import { Slider } from 'antd'
import { FC, useState } from 'react'
import { TEST_COLOR_LIST } from '../BetaApplyPage/constant'

type CustomizePlaygroundProps = {
  className?: string
}

let randomColor = [...Array(4)].map(() => TEST_COLOR_LIST[Math.floor(Math.random() * TEST_COLOR_LIST.length)])

const decorationFileList = [
  [
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
  [
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
  // [
  //   {
  //     url: '/models/decoration_6_1.glb',
  //     previewUrl: '/images/decoration_6_1.jpeg',
  //   },
  //   {
  //     url: '/models/decoration_6_2.glb',
  //     previewUrl: '/images/decoration_6_2.jpeg',
  //   },
  // ],
  [
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
  [
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
]

// 4: 팔찌, 5: 지팡이, 6: 종, 7: 선물상자, 8: 별

const DEFAULT_DATA = [
  {
    name: '베타테스터',
    decorationList: [
      {
        url: '/models/tree_1.glb',
        urlList: ['/models/tree_1.glb', '/models/tree_2.glb', '/models/tree_3.glb', '/models/tree_4.glb'],
        position: [0, 0.3, 0],
        scale: [0.3, 0.3, 0.3],
        rotate: [0, 0, 0],
        type: 'GLB',
      },
      {
        color: randomColor[1],
        url: '/models/decoration_5_2.glb',
        urlList: ['/models/decoration_5_1.glb', '/models/decoration_5_2.glb', '/models/decoration_5_3.glb'],
        position: [0, 0, 0.15],
        scale: [0.1, 0.1, 0.1],
        rotate: [0.2, 0.3, 0.4],
        type: 'GLB',
      },
      // {
      //   color: randomColor[2],
      //   url: '/models/decoration_6_1.glb',
      //   urlList: ['/models/decoration_6_1.glb', '/models/decoration_6_2.glb'],
      //   position: [0.1, 0.1, -0.1],
      //   scale: [0.2, 0.2, 0.2],
      //   rotate: [0.2, 0.3, 0.4],
      //   type: 'GLB',
      // },
      {
        color: randomColor[2],
        url: '/models/decoration_7_1.glb',
        urlList: ['/models/decoration_7_1.glb', '/models/decoration_7_2.glb', '/models/decoration_7_3.glb'],
        position: [0, 0.2, -0.15],
        scale: [0.3, 0.3, 0.3],
        rotate: [0.2, 0.3, 0.4],
        type: 'GLB',
      },
      {
        color: randomColor[0],
        url: '/models/decoration_8_1.glb',
        urlList: ['/models/decoration_8_1.glb', '/models/decoration_8_2.glb', '/models/decoration_8_3.glb'],
        position: [0, 0.4, 0],
        scale: [0.3, 0.3, 0.3],
        type: 'GLB',
      },
    ],
  },
]

type DirectionType = 'RESET' | 'RIGHT' | 'LEFT' | 'OPPOSITE'
export const CustomizePlayground: FC<CustomizePlaygroundProps> = ({ className }) => {
  const { state: autoRotate, toggleState: toggleAutoRotate } = useBooleanState(true)
  const [selectedDecoration, setSelectedDecoration] = useState<number>(0)
  const [testTreeList, _setTestTreeList] = useState(DEFAULT_DATA)

  const onClickSelectedDecoration = (index: number) => () => {
    _setTestTreeList((prev) => {
      const newPosition = [
        DEFAULT_DATA[0].decorationList[index].position[0],
        DEFAULT_DATA[0].decorationList[index].position[1],
        DEFAULT_DATA[0].decorationList[index].position[2],
      ]
      const newDecorationList = prev[0].decorationList.map((value2, index2) =>
        index === index2 ? { ...value2, position: newPosition } : { ...value2 }
      ) as any
      return [
        {
          ...prev[0],
          decorationList: newDecorationList,
        },
      ]
    })
    setSelectedDecoration(index)
  }

  const selectedDecorationItem = testTreeList[0].decorationList[selectedDecoration]

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
        const newPosition = [
          DEFAULT_DATA[0].decorationList[index].position[0],
          DEFAULT_DATA[0].decorationList[index].position[1],
          DEFAULT_DATA[0].decorationList[index].position[2],
        ]
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
        const newPosition = [
          DEFAULT_DATA[0].decorationList[index].position[2],
          DEFAULT_DATA[0].decorationList[index].position[1],
          DEFAULT_DATA[0].decorationList[index].position[0],
        ]
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
        const newPosition = [
          -1 * DEFAULT_DATA[0].decorationList[index].position[2],
          DEFAULT_DATA[0].decorationList[index].position[1],
          DEFAULT_DATA[0].decorationList[index].position[0],
        ]
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
        const newPosition = [
          DEFAULT_DATA[0].decorationList[index].position[0],
          DEFAULT_DATA[0].decorationList[index].position[1],
          -1 * DEFAULT_DATA[0].decorationList[index].position[2],
        ]
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

  const _onChangeColor = (index: number, value: string) => () => {
    _setTestTreeList((prev) => {
      const newDecorationList = prev[0].decorationList.map((value2, index2) =>
        index === index2 ? { ...value2, color: value } : { ...value2 }
      ) as any
      return [
        {
          ...prev[0],
          decorationList: newDecorationList,
        },
      ]
    })
  }

  return (
    <Paper bgColor={'white'}>
      <Column className={className}>
        <Column>
          <ThreeElement testTreeList={testTreeList} height={400} cameraPosition={[0, 0, 4]} autoRotate={autoRotate} />
          <Row align={'center'} onClick={toggleAutoRotate} gap={10} ml={10} cursor={'pointer'}>
            <CheckBox checked={autoRotate} />
            <Font type={['heading-12-medium', 'heading-14-medium']} color={'gray.800'}>
              자동 회전
            </Font>
          </Row>
        </Column>
        <Space height={20} />
        <Border radius={4} thickness={1} color={'gray.300'}>
          <Column width={'100%'} p={20}>
            <Row gap={10}>
              <ContainedButton
                kind={selectedDecoration === 0 ? 'cta' : 'secondary-accent'}
                size={'sm'}
                onClick={onClickSelectedDecoration(0)}
              >
                트리
              </ContainedButton>
              <ContainedButton
                kind={selectedDecoration === 1 ? 'cta' : 'secondary-accent'}
                size={'sm'}
                onClick={onClickSelectedDecoration(1)}
              >
                지팡이
              </ContainedButton>
              {/* <ContainedButton
                kind={selectedDecoration === 2 ? 'cta' : 'secondary-accent'}
                size={'sm'}
                onClick={onClickSelectedDecoration(2)}
              >
                방울
              </ContainedButton> */}
              <ContainedButton
                kind={selectedDecoration === 2 ? 'cta' : 'secondary-accent'}
                size={'sm'}
                onClick={onClickSelectedDecoration(2)}
              >
                선물상자
              </ContainedButton>
              <ContainedButton
                kind={selectedDecoration === 3 ? 'cta' : 'secondary-accent'}
                size={'sm'}
                onClick={onClickSelectedDecoration(3)}
              >
                별
              </ContainedButton>
            </Row>
            <Space height={[20, 30]} />
            <Row gap={20} align={'center'}>
              <Row width={30}>
                <Font type={['heading-12-medium', 'heading-14-medium']} color={'gray.800'} wordBreak={'keep-all'}>
                  종류
                </Font>
              </Row>
              {decorationFileList[selectedDecoration].map((value) => (
                <Paper
                  key={`decoration_file_list_${value.url}`}
                  radius={8}
                  borderColor={'gray.300'}
                  overflow={'hidden'}
                >
                  <Row cursor={'pointer'} onClick={onClickKind(selectedDecoration, value.url)}>
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
            <Row gap={20} align={'center'}>
              <Row width={30}>
                <Font type={['heading-12-medium', 'heading-14-medium']} color={'gray.800'} wordBreak={'keep-all'}>
                  크기
                </Font>
              </Row>
              <Slider
                style={{ width: 200, marginTop: 5, marginBottom: 5 }}
                min={0.01}
                max={1}
                value={selectedDecorationItem.scale[0]}
                onChange={onChangeSlider(selectedDecoration)}
                step={0.01}
              />
            </Row>
            <Space height={[5, 15]} />
            {selectedDecoration !== 0 && (
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
                    onClick={onClickPosition(selectedDecoration, 'RESET')}
                    style={{ marginBottom: 5, marginTop: 5 }}
                  >
                    리셋
                  </ContainedButton>
                  <ContainedButton
                    kind={'secondary-gray'}
                    size={'sm'}
                    onClick={onClickPosition(selectedDecoration, 'RIGHT')}
                    style={{ marginBottom: 5, marginTop: 5 }}
                  >
                    90도 오른쪽
                  </ContainedButton>
                  <ContainedButton
                    kind={'secondary-gray'}
                    size={'sm'}
                    onClick={onClickPosition(selectedDecoration, 'LEFT')}
                    style={{ marginBottom: 5, marginTop: 5 }}
                  >
                    90도 왼쪽
                  </ContainedButton>
                  <ContainedButton
                    kind={'secondary-gray'}
                    size={'sm'}
                    onClick={onClickPosition(selectedDecoration, 'OPPOSITE')}
                    style={{ marginBottom: 5, marginTop: 5 }}
                  >
                    정반대
                  </ContainedButton>
                </Row>
              </Row>
            )}
            <Space height={[5, 15]} />
            {/* <Row gap={20}>
              <Row width={30}>
                <Font type={['heading-12-medium', 'heading-14-medium']} color={'gray.800'} wordBreak={'keep-all'}>
                  색상
                </Font>
              </Row>
              <Row width={200}>
                <GridList row={4} column={4} columnGap={5} rowGap={5}>
                  {TEST_COLOR_LIST.map((value, index) => (
                    <Row
                      width={40}
                      height={20}
                      style={{ background: value, borderWidth: 2 }}
                      cursor={'pointer'}
                      onClick={onChangeColor(selectedDecoration, value)}
                      key={`test_color_item_${index}`}
                    />
                  ))}
                </GridList>
              </Row>
            </Row> */}
          </Column>
        </Border>
      </Column>
    </Paper>
  )
}

const PreviewImage = styled(Image)`
  img {
    object-fit: contain;
  }
`
