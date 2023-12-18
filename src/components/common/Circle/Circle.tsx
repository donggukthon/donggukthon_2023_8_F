import styled from '@emotion/styled'
import { forwardRef } from 'react'
import { ResponsiveValue } from 'types/ResponsiveValue'
import { Box } from '../Box'
import { ActionProps } from '../core/action'
import { BaseProps } from '../core/base'
import { ColorThemeKeys } from '../core/colors'

export type CircleProps = BaseProps &
  ActionProps & {
    size: ResponsiveValue<number>
    bgColor?: ResponsiveValue<ColorThemeKeys>
  }

export const Circle = styled(
  forwardRef<HTMLElement, CircleProps>(({ size, bgColor = 'transparent', children, ...props }, ref) => (
    <Box
      ref={ref}
      size={size}
      backgroundColor={bgColor}
      borderRadius="50%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      zIndex={0}
      overflow="hidden"
      {...props}
    >
      {children}
    </Box>
  ))
)()
