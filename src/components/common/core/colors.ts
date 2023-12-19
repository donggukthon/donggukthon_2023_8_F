import { DotNestedKeys } from 'types/DotNestedKeys'

export const baseColors = {
  white: '#ffffff',
  black: '#000000',
  green: {
    '50': '#f4fbfb',
    '100': '#ebfaf8',
    '200': '#9cf0e2',
    '300': '#33d8be',
    '400': '#1ac6ac',
    '500': '#09ad97',
    '600': '#008f7f',
    '700': '#006c63',
    '800': '#005a54',
    '900': '#004744',
  },
  gray: {
    '50': '#f8f9fa',
    '100': '#f1f3f5',
    '200': '#e9ecef',
    '300': '#dee2e6',
    '400': '#ccd2d8',
    '500': '#aeb5ba',
    '600': '#888e94',
    '650': '#646a70',
    '700': '#484f54',
    '750': '#3a3e43',
    '800': '#32363a',
    '850': '#26282b',
    '900': '#1f2022',
    '950': '#17181a',
  },
  red: {
    '400': '#E6635E',
  },
  orange: {
    '400': '#F19C38',
  },
  yellow: {
    '400': '#FFB800',
  },
  transparent: 'transparent',
  temp: {
    '#D9D9D9': '#D9D9D9',
    '#ffcb9c': '#ffcb9c',
    '#2D44D7': '#2D44D7',
    '#1926CD': '#1926CD',
    '#19275F': '#19275F',
    '#354894': '#354894',
    '#255747': '#255747',
    '#1E4639': '#1E4639',
    '#006692': '#006692',
    '#27A9C6': '#27A9C6',
    '#10192C': '#10192C',
    '#00DFB3': '#00DFB3',
    '#faebd7': '#faebd7',
    '#839BC1': '#839BC1',
    '#F1FFEA': '#F1FFEA',
    '#A5D191': '#A5D191',
    '#F4B85F': '#F4B85F',
    '#FFFDD8': '#FFFDD8',
    '#EEF3FF': '#EEF3FF',
    '#D0CCCC': '#D0CCCC',
    '#4D5B4A': '#4D5B4A',
    '#9B7356': '#9B7356',
    '#DACDC3': '#DACDC3aa',
    '#D7C8BD': '#D7C8BD',
    '#FFFDFD85': '#FFFDFD85',
    '#4F463E': '#4F463E',
    '#475482': '#475482',
    '#596592': '#596592',
    '#17FFFF': '#17FFFF',
    '#5073B5': '#5073B5',
    '#AA9788': '#AA9788',
    '#BC5952': '#BC5952',
    '#588C7E': '#588C7E',
    '#FFFDFD': '#FFFDFD',
    '#F4EAE4': '#F4EAE4',
    '#2a396b': '#2a396b',
    '#2a396b55': '#2a396b88',
    '#2d3968': '#2d3968',
    '#2d396855': '#2d396888',
    '#CEBAAC': '#CEBAAC',
  },
}

export const colors = {
  ...baseColors,
  primary: { ...baseColors.green, accent: baseColors.green[500], base: baseColors.green[800] },
}

export type BaseColorThemeKeys = DotNestedKeys<typeof baseColors>
export type ColorThemeKeys = DotNestedKeys<typeof colors>

// sort array. arg name is targetColorKeys. example ['gray.100', 'black', 'green.100', 'green.50', 'gray.200', 'gray.50', 'gray.900'] -> ['black', 'gray.50', 'gray.100', 'gray.200', 'gray.900', 'green.50', 'green.100'']
const sortColorKeys = <T extends string>(targetColorKeys: T[]): T[] => {
  const colorKeys = targetColorKeys.map((colorKey) => {
    const [colorName, colorLevel] = colorKey.split('.')
    return { colorName, colorLevel: colorLevel ? Number(colorLevel) : 0 }
  })

  const sortedColorKeys = colorKeys.sort((a, b) => {
    if (a.colorName < b.colorName) {
      return -1
    } else if (a.colorName > b.colorName) {
      return 1
    } else {
      return a.colorLevel - b.colorLevel
    }
  })

  return sortedColorKeys.map((sortedColorKey) => {
    return sortedColorKey.colorLevel === 0
      ? sortedColorKey.colorName
      : `${sortedColorKey.colorName}.${sortedColorKey.colorLevel}`
  }) as T[]
}

const getColorKeys = <T extends string>(targetColors: any) => {
  const keys: T[] = []

  const extractColorKeysLoop = (intermediateColorObj: typeof targetColors | Record<string, string>, prefix: string) => {
    let colorKey: keyof typeof intermediateColorObj
    for (colorKey in intermediateColorObj) {
      const value = intermediateColorObj[colorKey]

      if (typeof value === 'string') {
        keys.push(`${prefix}${colorKey}` as T)
      } else {
        extractColorKeysLoop(value, `${prefix}${colorKey}.`)
      }
    }
  }

  extractColorKeysLoop(targetColors, '')
  return sortColorKeys<T>(keys)
}

export const baseColorKeys: BaseColorThemeKeys[] = getColorKeys<BaseColorThemeKeys>(baseColors)
export const colorKeys: ColorThemeKeys[] = getColorKeys<ColorThemeKeys>(colors)

export const getHexFromColorKey = (colorKey: ColorThemeKeys): string => {
  const color = colorKey.split('.').reduce((tempColor: Record<string, any> | string, item: string) => {
    if (typeof tempColor !== 'string') {
      tempColor = tempColor[item]
    }
    return tempColor
  }, colors) as string

  return color
}
