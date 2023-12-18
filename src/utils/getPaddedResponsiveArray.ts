import { BREAKPOINTS } from '@constants/breakpoints'
import { range } from 'lodash'
import { ResponsiveValue } from 'types/ResponsiveValue'

export const getPaddedResponsiveArray = <Type>(value: ResponsiveValue<Type>) => {
  const arrayValue = Array.isArray(value) ? value : [value]
  const breakpointCount = BREAKPOINTS.length

  if (breakpointCount < arrayValue.length) {
    return arrayValue.slice(0, breakpointCount + 1)
  }

  const lastValue = arrayValue[arrayValue.length - 1]
  return range(breakpointCount + 1).map((idx) => {
    if (idx < arrayValue.length) {
      return arrayValue[idx]
    }

    return lastValue
  })
}
