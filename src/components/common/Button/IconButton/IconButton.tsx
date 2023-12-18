/* eslint-disable unused-imports/no-unused-vars */
import styled from '@emotion/styled'
import { Box, BoxProps } from '@components/common/Box'
import { variant } from 'styled-system'
import { ButtonHTMLAttributes, ComponentType, SVGProps } from 'react'
import { BaseProps } from '@components/common/core/base'
import { ResponsiveValue } from 'types/ResponsiveValue'
import { getPropVariant } from '@components/common/core/propVariant'
import { colors } from '@components/common/core/colors'

export type IconButtonProps = Omit<BaseProps, 'as'> &
  ButtonHTMLAttributes<HTMLButtonElement> &
  Pick<BoxProps, 'onClick'> & {
    disabled?: ResponsiveValue<boolean>
    size: ResponsiveValue<'xs' | 'sm' | 'md' | 'lg' | 'xl'>
    IconComponent: ComponentType<SVGProps<SVGSVGElement>>
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

export const IconButton = styled(({ size, IconComponent, ...props }: IconButtonProps) => {
  const { iconSize } = getPropVariant(size, sizePropVariant)

  return (
    <StyledBox
      as="button"
      type="button"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexShrink={0}
      {...props}
    >
      <Box size={iconSize}>
        <IconComponent width="100%" height="100%" />
      </Box>
    </StyledBox>
  )
})<IconButtonProps>(
  variant({
    prop: 'size',
    variants: {
      xl: {
        width: 56,
        height: 56,
      },
      lg: {
        width: 44,
        height: 44,
      },
      md: {
        width: 40,
        height: 40,
      },
      sm: {
        width: 32,
        height: 32,
      },
      xs: {
        width: 28,
        height: 28,
      },
    },
  })
)

const StyledBox = styled(Box)`
  border-radius: 50%;
  border: 1px solid ${colors.gray[400]};

  &:hover {
    border-color: ${colors.gray[500]};
  }

  &:active {
    border-color: ${colors.gray[500]};
    background-color: ${colors.gray[50]};
  }

  &:disabled {
    cursor: default;
    border-color: ${colors.gray[200]};
    background-color: ${colors.gray[200]};
  }
`
