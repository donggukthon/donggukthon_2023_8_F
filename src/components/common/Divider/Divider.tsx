import { FC } from 'react'
import { Box, BoxProps } from '../Box'
import { BaseProps } from '../core/base'
import { ResponsiveValue } from 'types/ResponsiveValue'
import { ColorThemeKeys } from '../core/colors'

export type DividerProps = BaseProps &
  Pick<BoxProps, 'display' | 'mx' | 'my'> & {
    color?: ResponsiveValue<ColorThemeKeys>
    direction?: 'horizontal' | 'vertical'
    spacing?: ResponsiveValue<number>
    thickness?: ResponsiveValue<number>
  }

export const Divider: FC<DividerProps> = ({
  color = 'gray.300',
  direction = 'horizontal',
  spacing,
  thickness = 1,
  ...props
}) => {
  const isHorizontal = direction === 'horizontal'
  const isVertical = direction === 'vertical'

  return (
    <Box
      flex="none"
      bg={color}
      width={isHorizontal ? '100%' : `${thickness}px`}
      height={isHorizontal ? `${thickness}px` : '100%'}
      mx={isVertical ? spacing : undefined}
      my={isHorizontal ? spacing : undefined}
      {...props}
    />
  )
}
