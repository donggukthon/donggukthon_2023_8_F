import { ResponsiveValue, variant } from 'styled-system'
import styled from '@emotion/styled'
import fontVariants from './fontVariants'
import { ColorThemeKeys } from '../core/colors'
import { BaseProps } from '../core/base'
import { Box, BoxProps } from '../Box'
import { ActionProps } from '../core/action'
import { CustomTypographyProps } from '../core/typography'
import { forwardRef } from 'react'

export type FontType = keyof typeof fontVariants

type FontProps = BaseProps &
  Pick<BoxProps, 'textAlign'> &
  CustomTypographyProps &
  ActionProps & {
    type: ResponsiveValue<FontType>
    color?: ResponsiveValue<ColorThemeKeys>
  }

export const Font = styled(
  forwardRef<HTMLElement, FontProps>((props, ref) => <Box ref={ref} as={props.as ?? 'p'} {...props} />),
  {
    shouldForwardProp: (props) => props !== 'type',
  }
)<FontProps>(
  variant({
    prop: 'type',
    variants: fontVariants,
  }),
  variant({
    prop: 'underline',
    variants: {
      true: {
        textDecoration: 'underline',
      },
    },
  })
)
