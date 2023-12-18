import styled from '@emotion/styled'
import shouldForwardProp from '@styled-system/should-forward-prop'
import { FC } from 'react'
import {
  BackgroundProps,
  BordersProps,
  BoxShadowProps,
  ColorProps,
  FlexboxProps,
  MarginProps,
  PaddingProps,
  PositionProps,
  background,
  border,
  boxShadow,
  color,
  compose,
  flexbox,
  margin,
  padding,
  position,
  space,
} from 'styled-system'
import { ActionProps, action } from '../core/action'
import { BaseProps, base } from '../core/base'
import { LayoutProps, layout } from '../core/layout'
import { TransformProps, transform } from '../core/transform'
import { TypographyProps, typography } from '../core/typography'

export const boxStyleFn = compose(
  typography,
  space,
  color,
  flexbox,
  layout,
  margin,
  padding,
  border,
  position,
  base,
  action,
  background,
  boxShadow,
  transform
)

export type MarginShortcutProps = Pick<MarginProps, 'm' | 'mt' | 'mb' | 'ml' | 'mr' | 'my' | 'mx'>
export type PaddingShortcutProps = Pick<PaddingProps, 'p' | 'pt' | 'pb' | 'pl' | 'pr' | 'py' | 'px'>
export type BoxProps = BaseProps &
  TypographyProps &
  LayoutProps &
  PositionProps &
  ColorProps &
  BackgroundProps &
  FlexboxProps &
  BordersProps &
  ActionProps &
  MarginShortcutProps &
  PaddingShortcutProps &
  BoxShadowProps &
  TransformProps

export const Box = styled('div', { shouldForwardProp })(boxStyleFn) as FC<BoxProps>
