/* eslint-disable unused-imports/no-unused-vars */
import { TEST_COLOR_LIST } from '../TreeDetailsPage/constants'

let randomColor = [...Array(4)].map(() => TEST_COLOR_LIST[Math.floor(Math.random() * TEST_COLOR_LIST.length)]) // 1층

const Cal1 = (t: number) => {
  return [0.2 * Math.sin((t * Math.PI) / 180), -0.07, 0.2 * Math.cos((3.6 * t * Math.PI) / 180)]
}
// 2층
const Cal2 = (t: number) => {
  return [0.17 * Math.sin((3.6 * t * Math.PI) / 180), 0.05, 0.17 * Math.cos((3.6 * t * Math.PI) / 180)]
}
//3층
const Cal3 = (t: number) => {
  return [0.12 * Math.sin((3.6 * t * Math.PI) / 180), 0.25, 0.12 * Math.cos((3.6 * t * Math.PI) / 180)]
}

export const TREE_VIEWER_TEST_DATA = [
  {
    name: '베타테스터1',
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
        decorationType: 'DECORATION_1',
        url: '/models/decoration_7_3.glb',
        position: Cal3(82),
        floor: 3,
        degree: 82 * 3.6,
        scale: [0.15, 0.15, 0.15],
        rotate: [0.2, 0.3, 0.4],
        type: 'GLB',
      },
      {
        decorationType: 'DECORATION_2',
        url: '/models/decoration_7_1.glb',
        position: Cal3(12),
        floor: 12,
        degree: 12 * 3.6,
        scale: [0.4, 0.4, 0.4],
        rotate: [-0.1, 0.3, 0.4],
        type: 'GLB',
      },
      {
        decorationType: 'DECORATION_3',
        url: '/models/decoration_5_1.glb',
        position: Cal2(78),
        floor: 2,
        degree: 78 * 3.6,
        scale: [0.25, 0.25, 0.25],
        rotate: [0.2, 0.3, 0.4],
        type: 'GLB',
      },
      {
        decorationType: 'DECORATION_4',
        url: '/models/decoration_5_2.glb',
        position: Cal2(23),
        floor: 2,
        degree: 23 * 3.6,
        scale: [0.25, 0.25, 0.25],
        rotate: [-0.1, 0.3, 0.4],
        type: 'GLB',
      },
    ],
  },
  {
    name: '베타테스터2',
    decorationList: [
      {
        decorationType: 'TREE',
        url: '/models/tree_3.glb',
        position: [0, 0.3, 0],
        scale: [0.3, 0.3, 0.3],
        rotate: [0, 0, 0],
        type: 'GLB',
      },
      {
        decorationType: 'DECORATION_5',
        url: '/models/decoration_5_3.glb',
        position: Cal3(82),
        floor: 3,
        degree: 82 * 3.6,
        scale: [0.15, 0.15, 0.15],
        rotate: [0.2, 0.3, 0.4],
        type: 'GLB',
      },
      {
        decorationType: 'DECORATION_7',
        url: '/models/decoration_7_2.glb',
        position: Cal3(12),
        floor: 3,
        degree: 12 * 3.6,
        scale: [0.4, 0.4, 0.4],
        rotate: [-0.1, 0.3, 0.4],
        type: 'GLB',
      },
      {
        decorationType: 'DECORATION_8',
        url: '/models/decoration_8_1.glb',
        position: Cal2(78),
        floor: 2,
        degree: 78 * 3.6,
        scale: [0.5, 0.3, 0.3],
        rotate: [0.2, 0.3, 0.4],
        type: 'GLB',
      },
      {
        decorationType: 'DECORATION_6',
        url: '/models/decoration_6_2.glb',
        position: Cal2(23),
        floor: 2,
        degree: 23 * 3.6,
        scale: [0.25, 0.25, 0.25],
        rotate: [-0.1, 0.3, 0.4],
        type: 'GLB',
      },
      {
        decorationType: 'DECORATION_6',
        url: '/models/decoration_6_1.glb',
        position: Cal1(100),
        floor: 1,
        degree: 100 * 3.6,
        scale: [0.35, 0.35, 0.35],
        rotate: [0.2, 0.3, 0.4],
        type: 'GLB',
      },
    ],
  },
  {
    name: '베타테스터3',
    decorationList: [
      {
        decorationType: 'TREE',
        url: '/models/tree_2.glb',
        position: [0, 0.3, 0],
        scale: [0.3, 0.3, 0.3],
        rotate: [0, 0, 0],
        type: 'GLB',
      },
      {
        decorationType: 'DECORATION_7',
        url: '/models/decoration_7_3.glb',
        position: Cal3(70),
        floor: 3,
        degree: 70 * 3.6,
        scale: [0.3, 0.3, 0.3],
        rotate: [0.2, 0.3, 0.4],
        type: 'GLB',
      },
      {
        decorationType: 'DECORATION_8',
        url: '/models/decoration_8_1.glb',
        position: Cal3(20),
        floor: 3,
        degree: 20 * 3.6,
        scale: [0.4, 0.4, 0.4],
        rotate: [-0.1, 0.3, 0.4],
        type: 'GLB',
      },
      {
        decorationType: 'DECORATION_5',
        url: '/models/decoration_7_1.glb',
        position: Cal2(40),
        floor: 2,
        degree: 40 * 3.6,
        scale: [0.3, 0.3, 0.3],
        rotate: [0.2, 0.3, 0.4],
        type: 'GLB',
      },
      {
        decorationType: 'DECORATION_5',
        url: '/models/decoration_5_1.glb',
        position: Cal2(65),
        floor: 2,
        degree: 65 * 3.6,
        scale: [0.25, 0.25, 0.25],
        rotate: [-0.1, 0.3, 0.4],
        type: 'GLB',
      },
      {
        decorationType: 'DECORATION_5',
        url: '/models/decoration_5_3.glb',
        position: Cal1(95),
        floor: 1,
        degree: 95 * 3.6,
        scale: [0.15, 0.15, 0.15],
        rotate: [0.2, 0.3, 0.4],
        type: 'GLB',
      },
    ],
  },
]
