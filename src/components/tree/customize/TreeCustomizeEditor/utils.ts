export type DecorationTypeType = 'TREE' | 'DECORATION_5' | 'DECORATION_7' | 'DECORATION_8' | 'DECORATION_6'

export const getIndexByDecorationType = (value: DecorationTypeType) => {
  if (value === 'TREE') {
    return 0
  }
  if (value === 'DECORATION_5') {
    return 1
  }
  if (value === 'DECORATION_7') {
    return 2
  }
  if (value === 'DECORATION_8') {
    return 4
  }

  return 3
}

export const getDecorationTypeByIndex = (value: number) => {
  if (value === 0) {
    return 'TREE'
  }
  if (value === 1) {
    return 'DECORATION_5'
  }
  if (value === 2) {
    return 'DECORATION_7'
  }

  return 'DECORATION_8'
}
