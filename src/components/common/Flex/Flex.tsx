import { getPaddedResponsiveArray } from '@utils/getPaddedResponsiveArray'
import cx from 'classnames'
import React, { FC, forwardRef, Fragment, isValidElement } from 'react'
import { ResponsiveValue } from 'types/ResponsiveValue'
import { Box, BoxProps } from '../Box'
import { MarginShortcutProps, PaddingShortcutProps } from '../Box/Box'
import { ActionProps } from '../core/action'
import { BaseProps } from '../core/base'
import { LayoutProps } from '../core/layout'

export type FlexProps = BaseProps & {
  align?: ResponsiveValue<
    'unset' | 'center' | 'end' | 'self-end' | 'self-start' | 'start' | 'baseline' | 'normal' | 'stretch'
  >
  justify?: ResponsiveValue<
    'unset' | 'center' | 'end' | 'start' | 'stretch' | 'normal' | 'between' | 'around' | 'evenly'
  >
  gap?: ResponsiveValue<number | null>
  direction?: ResponsiveValue<'row' | 'column'>
  reverse?: ResponsiveValue<boolean>
  wrap?: Pick<BoxProps, 'flexWrap'>['flexWrap']
  shrink?: Pick<BoxProps, 'flexShrink'>['flexShrink']
  flex?: Pick<BoxProps, 'flex'>['flex']
} & LayoutProps &
  MarginShortcutProps &
  PaddingShortcutProps &
  ActionProps

export const Flex: FC<FlexProps> = forwardRef<HTMLElement, FlexProps>(
  (
    {
      className,
      children,
      as = 'div',
      align,
      justify,
      gap = [null, null],
      direction = 'row',
      reverse = false,
      wrap = 'nowrap',
      shrink,
      flex,
      ...restProps
    },
    ref
  ) => {
    const responsiveReserve = getPaddedResponsiveArray(reverse)
    const responsiveDirection = getPaddedResponsiveArray(direction).map((directionItem, index) =>
      responsiveReserve[index] ? (`${directionItem}-reverse` as const) : directionItem
    )

    const responsiveJustifyContent = getPaddedResponsiveArray(justify).map((spaceItem) => {
      if (typeof spaceItem === 'number' || typeof spaceItem === 'undefined') return 'start'

      if (['between', 'around', 'evenly'].includes(spaceItem)) return `space-${spaceItem}` as const

      return spaceItem
    })

    const responsiveGap = getPaddedResponsiveArray(gap)
    const rowGap = responsiveDirection.reduce((width: Array<number | null>, directionItem, index) => {
      width.push(directionItem.includes('row') ? responsiveGap[index] : null)
      return width
    }, [])
    const columnGap = responsiveDirection.reduce((height: Array<number | null>, directionItem, index) => {
      height.push(directionItem.includes('column') ? responsiveGap[index] : null)
      return height
    }, [])

    return (
      <Box
        ref={ref}
        as={as}
        className={cx(className)}
        display="flex"
        alignItems={align}
        justifyContent={responsiveJustifyContent}
        flexDirection={responsiveDirection}
        flexWrap={wrap}
        flexShrink={shrink}
        flex={flex}
        {...restProps}
      >
        {React.Children.toArray(children)
          .filter(isValidElement)
          .map((child, index, items) => (
            <Fragment key={index}>
              {child}
              {index < items.length - 1 && <Box width={rowGap} height={columnGap} flexGrow={0} flexShrink={0} />}
            </Fragment>
          ))}
      </Box>
    )
  }
)
