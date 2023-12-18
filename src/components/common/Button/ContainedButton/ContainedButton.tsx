/* eslint-disable unused-imports/no-unused-vars */
import { Box, BoxProps } from '@components/common/Box'
import { BaseProps } from '@components/common/core/base'
import { getPropVariant } from '@components/common/core/propVariant'
import fontVariants from '@components/common/Font/fontVariants'
import styled from '@emotion/styled'
import { ButtonHTMLAttributes, ComponentType, forwardRef, PropsWithChildren, SVGProps } from 'react'
import { variant } from 'styled-system'
import { ResponsiveValue } from 'types/ResponsiveValue'

export type ContainedButtonProps = Omit<BaseProps, 'as'> &
  ButtonHTMLAttributes<HTMLButtonElement> &
  Pick<BoxProps, 'onClick'> & {
    full?: ResponsiveValue<boolean>
    disabled?: ResponsiveValue<boolean>
    round?: ResponsiveValue<boolean>
    kind: ResponsiveValue<'cta' | 'primary' | 'secondary-gray' | 'secondary-accent'>
    size: ResponsiveValue<'xs' | 'sm' | 'md' | 'lg' | 'xl'>
    LeftIconComponent?: ComponentType<SVGProps<SVGSVGElement>>
    RightIconComponent?: ComponentType<SVGProps<SVGSVGElement>>
  }

const sizePropVariant = {
  xl: {
    iconSize: 20,
  },
  lg: {
    iconSize: 16,
  },
  md: {
    iconSize: 16,
  },
  sm: {
    iconSize: 16,
  },
  xs: {
    iconSize: 12,
  },
}

export const ContainedButton = styled(
  forwardRef<HTMLElement, PropsWithChildren<ContainedButtonProps>>(
    ({ size, children, LeftIconComponent, RightIconComponent, full, ...props }, ref) => {
      const { iconSize } = getPropVariant(size, sizePropVariant)

      return (
        <Box
          ref={ref}
          as="button"
          type="button"
          borderRadius={4}
          display="flex"
          justifyContent="center"
          alignItems="center"
          whiteSpace="nowrap"
          flexShrink={full ? 'initial' : 0}
          {...props}
        >
          {LeftIconComponent && (
            <Box mr={4} size={iconSize}>
              <LeftIconComponent width="100%" height="100%" />
            </Box>
          )}
          {children}
          {RightIconComponent && (
            <Box ml={2} size={iconSize}>
              <RightIconComponent />
            </Box>
          )}
        </Box>
      )
    }
  ),
  {
    shouldForwardProp: (props) => props !== 'kind',
  }
)<ContainedButtonProps>(
  variant({
    prop: 'kind',
    variants: {
      cta: {
        color: 'white',
        backgroundColor: 'primary.500',
        '&:hover': {
          backgroundColor: 'temp.#4F463E',
        },
        '&:active': {
          backgroundColor: 'primary.700',
        },
        '&:disabled': {
          cursor: 'default',
          color: 'gray.500',
          backgroundColor: 'gray.200',
          path: {
            fill: 'gray.500',
          },
        },
        '& path': {
          fill: 'white',
        },
      },
      primary: {
        color: 'white',
        backgroundColor: 'gray.800',
        '&:hover': {
          backgroundColor: 'gray.900',
        },
        '&:active': {
          backgroundColor: 'black',
        },
        '&:disabled': {
          cursor: 'default',
          color: 'gray.500',
          backgroundColor: 'gray.200',
          path: {
            fill: 'gray.500',
          },
        },
        '& path': {
          fill: 'white',
        },
      },
      'secondary-gray': {
        color: 'gray.650',
        border: '1px solid black',
        borderColor: 'gray.400',
        backgroundColor: 'white',
        '&:hover': {
          borderColor: 'gray.500',
        },
        '&:active': {
          backgroundColor: 'gray.50',
        },
        '&:disabled': {
          cursor: 'default',
          color: 'gray.500',
          border: 'none',
          backgroundColor: 'gray.200',
          path: {
            fill: 'gray.500',
          },
        },
        path: {
          fill: 'gray.650',
        },
      },
      'secondary-accent': {
        color: 'primary.500',
        border: '1px solid',
        borderColor: 'primary.500',
        backgroundColor: 'white',
        '&:hover': {
          borderColor: 'primary.600',
        },
        '&:active': {
          backgroundColor: 'primary.50',
          borderColor: 'primary.600',
        },
        '&:disabled': {
          cursor: 'default',
          color: 'gray.500',
          border: 'none',
          backgroundColor: 'gray.200',
          path: {
            fill: 'gray.500',
          },
        },
        path: {
          fill: 'primary.500',
        },
      },
    },
  }),
  variant({
    prop: 'size',
    variants: {
      xl: {
        maxHeight: 56,
        padding: '16px 20px',
        ...fontVariants['heading-16-semi-bold'],
      },
      lg: {
        maxHeight: 44,
        padding: '11px 16px',
        ...fontVariants['heading-15-semi-bold'],
      },
      md: {
        maxHeight: 40,
        padding: '10px 14px',
        ...fontVariants['heading-14-semi-bold'],
      },
      sm: {
        maxHeight: 32,
        padding: '7px 12px',
        ...fontVariants['heading-13-semi-bold'],
      },
      xs: {
        maxHeight: 28,
        padding: '6px 10px',
        ...fontVariants['heading-12-semi-bold'],
      },
    },
  }),
  variant({
    prop: 'full',
    variants: {
      true: {
        width: '100%',
      },
      false: {
        width: 'auto',
      },
    },
  }),
  variant({
    prop: 'round',
    variants: {
      true: {
        borderRadius: '100px',
      },
      false: {
        borderRadius: '0',
      },
    },
  })
)
