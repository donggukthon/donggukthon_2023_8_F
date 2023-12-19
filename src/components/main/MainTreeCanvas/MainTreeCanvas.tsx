import { Column } from '@components/common/Column'
import { ThreeElement } from '@components/common/TreeGroupElement/ThreeElement'
import { FC, useState } from 'react'

type MainTreeCanvasProps = {
  className?: string
}

const DEFAULT_POSITION = [0, 0.2, -0.4]

// 4: 팔찌, 5: 지팡이, 6: 종, 7: 선물상자, 8: 별

const DEFAULT_DATA = [
  {
    name: '베타테스터',
    decorationList: [
      {
        decorationType: 'TREE',
        url: '/models/tree_4.glb',
        position: [0, 0.23, 0],
        scale: [0.22, 0.22, 0.22],
        rotate: [0, 0, 0],
        type: 'GLB',
      },
      {
        decorationType: 'DECORATION_8',
        url: '/models/decoration_8_3.glb',
        position: [0, 0.3, 0],
        scale: [0.3, 0.3, 0.3],
        rotate: [0.66, 0, 0],
        type: 'GLB',
      },
      {
        decorationType: 'DECORATION_7',
        url: '/models/decoration_7_2.glb',
        position: [0, -0.15, 0.17],
        scale: [0.25, 0.25, 0.25],
        rotate: [0, 0, 0],
        type: 'GLB',
      },
      {
        decorationType: 'DECORATION_5',
        url: '/models/decoration_5_2.glb',
        position: [-0.08, 0.2, 0.02],
        scale: [0.1, 0.1, 0.1],
        rotate: [-0.5, 0, 0.4],
        type: 'GLB',
      },
      {
        decorationType: 'DECORATION_6',
        url: '/models/decoration_6_1.glb',
        position: [-0.075, 0.08, -0.08],
        scale: [0.15, 0.15, 0.15],
        rotate: [-0.7, 0, 0.2],
        type: 'GLB',
      },
      {
        decorationType: 'DECORATION_5',
        url: '/models/decoration_5_3.glb',
        position: [0.12, -0.08, 0.06],
        scale: [0.1, 0.1, 0.1],
        rotate: [-0.5, 0, 0.4],
        type: 'GLB',
      },
    ],
  },
]

export const MainTreeCanvas: FC<MainTreeCanvasProps> = ({ className }) => {
  const [testTreeList, _setTestTreeList] = useState(DEFAULT_DATA)
  return (
    <Column className={className}>
      <ThreeElement
        testTreeList={testTreeList}
        width={'100%'}
        height={800}
        cameraPosition={[0, 0, 4]}
        autoRotate={true}
      />
    </Column>
  )
}
