import styled from '@emotion/styled'
import { Box, BoxProps } from '@components/common/Box'
import { ComponentType, SVGProps, ButtonHTMLAttributes, PropsWithChildren, forwardRef } from 'react'
import { variant } from 'styled-system'
import fontVariants from '@components/common/Font/fontVariants'
import { getPropVariant } from '@components/common/core/propVariant'
import { BaseProps } from '@components/common/core/base'

export type TextButtonProps = Omit<BaseProps, 'as'> &
  Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled' | 'type'> &
  Pick<BoxProps, 'onClick'> & {
    kind: 'accent' | 'primary' | 'secondary'
    size: 'sm' | 'lg'
    LeftIconComponent?: ComponentType<SVGProps<SVGSVGElement>>
    RightIconComponent?: ComponentType<SVGProps<SVGSVGElement>>
    underline?: boolean
  }

const sizePropVariant = {
  lg: {
    iconSize: 16,
  },
  sm: {
    iconSize: 16,
  },
}

export const TextButton = styled(
  forwardRef<HTMLButtonElement, PropsWithChildren<TextButtonProps>>(
    ({ size, LeftIconComponent, RightIconComponent, children, ...props }, ref) => {
      const { iconSize } = getPropVariant(size, sizePropVariant)

      return (
        <Box ref={ref} as="button" type="button" display="flex" flexShrink={0} alignItems="center" {...props}>
          {LeftIconComponent && (
            <Box mr={4} size={iconSize}>
              <LeftIconComponent />
            </Box>
          )}
          {children}
          {RightIconComponent && <RightIconComponent style={{ marginLeft: '2px', width: '16px', height: '16px' }} />}
        </Box>
      )
    }
  ),
  {
    shouldForwardProp: (props) => props !== 'kind' && props !== 'underline',
  }
)<TextButtonProps>(
  variant({
    prop: 'kind',
    variants: {
      accent: {
        color: 'primary.accent',
        path: {
          stroke: 'primary.accent',
        },
        '&:hover': {
          color: 'primary.base',
          path: {
            stroke: 'primary.base',
          },
        },
        '&:disabled': {
          cursor: 'default',
          color: 'gray.400',
          path: {
            stroke: 'gray.400',
          },
        },
      },
      primary: {
        color: 'gray.700',
        path: {
          stroke: 'gray.700',
        },
        '&:hover': {
          color: 'primary.base',
          path: {
            stroke: 'primary.base',
          },
        },
        '&:disabled': {
          cursor: 'default',
          color: 'gray.400',
          path: {
            stroke: 'gray.400',
          },
        },
      },
      secondary: {
        color: 'gray.600',
        path: {
          stroke: 'gray.600',
        },
        '&:hover': {
          color: 'gray.700',
          path: {
            stroke: 'gray.700',
          },
        },
        '&:disabled': {
          cursor: 'default',
          color: 'gray.400',
          path: {
            stroke: 'gray.400',
          },
        },
      },
    },
  }),
  variant({
    prop: 'size',
    variants: {
      lg: { ...fontVariants['heading-16-medium'] },
      sm: { ...fontVariants['heading-14-medium'] },
    },
  }),
  variant({
    prop: 'underline',
    variants: {
      true: { textDecorationLine: 'underline' },
    },
  })
)
