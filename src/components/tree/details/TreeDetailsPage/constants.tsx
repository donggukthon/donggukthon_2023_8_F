export const TEST_COLOR_LIST = [
  '#ffff33',
  '#9966ff',
  '#3366ff',
  '#cc3366',
  '#ffcccc',
  '#333300',
  '#330000',
  '#003300',
  '#000033',
  '#383441',
  '#ffcb9c',
  '#2D44D7',
  '#1926CD',
  '#19275F',
  '#354894',
  '#255747',
  '#1E4639',
  '#006692',
  '#27A9C6',
  '#10192C',
  '#00DFB3',
  '#faebd7',
  '#839BC1',
  '#F1FFEA',
  '#A5D191',
  '#F4B85F',
  '#4D5B4A',
]

const TEST_NAME_LIST = ['이민지', '황재형', '유수민', '이설', '홍정표', '김동민']

export const TEST_TREE_LIST = () => {
  return TEST_NAME_LIST.map((value) => {
    let randomColor = [...Array(3)].map(() => TEST_COLOR_LIST[Math.floor(Math.random() * TEST_COLOR_LIST.length)])
    return {
      name: value,
      decorationList: [
        { color: randomColor[0], url: '/models/decoration_2.stl', position: [0, 0, 0.15], scale: [0.5, 0.5, 0.5] },
        {
          color: randomColor[1],
          url: '/models/decoration_3.stl',
          position: [0, 0.15, -0.2],
          scale: [0.2, 0.2, 0.2],
          rotate: [0.2, 0.3, 0.4],
          type: 'STL',
        },
        {
          color: randomColor[2],
          url: '/models/decoration_4_1.glb',
          position: [0, 0.2, -0.4],
          scale: [0.1, 0.1, 0.1],
          rotate: [0.2, 0.3, 0.4],
          type: 'GLB',
        },
      ],
    }
  })
}
