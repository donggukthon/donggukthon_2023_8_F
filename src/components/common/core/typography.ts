import { CSSProperties } from 'react'
import { ResponsiveValue } from 'types/ResponsiveValue'
import {
  system,
  compose,
  typography as systemTypography,
  TypographyProps as SystemTypographyProps,
} from 'styled-system'

export type CustomTypographyProps = {
  wordBreak?: ResponsiveValue<CSSProperties['wordBreak']>
  wordWrap?: ResponsiveValue<CSSProperties['wordWrap']>
  whiteSpace?: ResponsiveValue<CSSProperties['whiteSpace']>
  textDecoration?: ResponsiveValue<CSSProperties['textDecorationLine']>
  lineBreak?: ResponsiveValue<CSSProperties['lineBreak']>
  lineLimit?: ResponsiveValue<number>
}

export type TypographyProps = SystemTypographyProps & CustomTypographyProps

export const customTypography = system({
  wordBreak: true,
  wordWrap: true,
  whiteSpace: true,
  lineBreak: true,
  textDecoration: true,
  lineLimit: (value: number) => ({
    display: '-webkit-box',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: value,
  }),
})

export const typography = compose(systemTypography, customTypography)
