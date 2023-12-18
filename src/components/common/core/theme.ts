import { BREAKPOINTS } from '@constants/breakpoints'
import { colors } from './colors'
import { mixins } from './mixins'

export const theme = {
  breakpoints: BREAKPOINTS,
  /**
   * WARNING(@dnacu)
   * 지우면 큰일납니다. 내부 동작방식 때문에 지우면 0~8 숫자가 default space scale array의 index로 동작해서 다 망가집니다.
   */
  space: {},
  colors,
  ...mixins,
}
