import React, { CSSProperties, Ref } from 'react'
import { ResponsiveValue, system } from 'styled-system'

export type BaseProps<T = undefined> = {
  as?: keyof JSX.IntrinsicElements
  id?: string
  className?: string
  style?: any
  cursor?: ResponsiveValue<CSSProperties['cursor']>
  children?: React.ReactNode
} & (T extends undefined
  ? {
      ref?: Ref<HTMLElement>
    }
  : {
      ref?: Ref<T>
    })

export const base = system({
  cursor: true,
})
