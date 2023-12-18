import { CONTAINER_MAX_WIDTH } from '@constants/layout'
import styled from '@emotion/styled'
import { forwardRef } from 'react'
import { variant } from 'styled-system'
import { ResponsiveValue } from 'types/ResponsiveValue'
import { Box } from '../Box'
import { BaseProps } from '../core/base'
import { ColorThemeKeys } from '../core/colors'
import { LayoutProps } from '../core/layout'

type ContainerProps = BaseProps &
  LayoutProps & { size: 'sm' | 'md' | 'lg' | 'full' } & (
    | {
        full?: never
        bg?: never
      }
    | {
        full: boolean
        bg?: ResponsiveValue<ColorThemeKeys>
      }
  )

export const Container = styled(
  forwardRef<HTMLElement, ContainerProps>(({ full, bg, ...props }, ref) => {
    if (!full) {
      return <Box ref={ref} width={['calc(100% - 0px)', '100%']} m="0 auto" {...props} />
    }

    return (
      <Box ref={ref} width="100%" overflow-x="hidden" bg={bg}>
        <Box width={['calc(100% - 0px)', '100%']} m="0 auto" {...props} />
      </Box>
    )
  }),
  {
    shouldForwardProp: (props) => props !== 'size',
  }
)<ContainerProps>(
  variant({
    prop: 'size',
    variants: {
      sm: {
        maxWidth: CONTAINER_MAX_WIDTH,
      },
      md: {
        maxWidth: 960,
      },
      lg: {
        maxWidth: 1120,
      },
      full: {
        maxWidth: 'auto',
      },
    },
  })
)
