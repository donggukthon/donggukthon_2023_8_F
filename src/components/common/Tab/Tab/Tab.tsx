import { BaseProps } from '../../core/base'
import { Box } from '../../Box'
import styled from '@emotion/styled'
import { variant } from 'styled-system'
import { Space } from '../../Space'
import { forwardRef, PropsWithChildren } from 'react'
import { ActionProps } from '@components/common/core/action'
import { Font } from '@components/common/Font'
import { getPropVariant } from '@components/common/core/propVariant'
import { ResponsiveValue } from 'types/ResponsiveValue'

export type TabProps = BaseProps &
  Pick<ActionProps, 'onClick'> & {
    count?: number
    highlight?: boolean
    underline?: boolean
    selected?: boolean
    textSize?: ResponsiveValue<'xs' | 'sm' | 'md' | 'lg'>
  }

const textSizePropVariant = {
  xs: {
    type: 'heading-15-semi-bold',
  },
  sm: {
    type: 'heading-16-semi-bold',
  },
  md: {
    type: 'heading-18-semi-bold',
  },
  lg: {
    type: 'heading-20-semi-bold',
  },
} as const

export const Tab = styled(
  forwardRef<HTMLElement, PropsWithChildren<TabProps>>(
    ({ count, underline, selected = false, textSize = ['xs', 'sm'], highlight, children, ...props }, ref) => {
      const { type } = getPropVariant(textSize, textSizePropVariant)

      return (
        <Box
          ref={ref}
          color="gray.500"
          position="relative"
          display="flex"
          flexGrow={1}
          flexShrink={0}
          justifyContent="center"
          alignItems="flex-start"
          px={2}
          py={[13, 16]}
          cursor="pointer"
          {...props}
        >
          <Box display="flex" alignItems={['center']}>
            <Font as="p" type={type}>
              {children}
            </Font>
            {count !== undefined && (
              <>
                <Space width={4} />
                <Font as="p" type={type}>
                  {count}
                </Font>
              </>
            )}
          </Box>
          {underline && selected && (
            <Box position="absolute" bottom={0} width="100%" height={2} backgroundColor="gray.800" />
          )}
          {highlight && <Box width={4} height={4} backgroundColor="primary.500" borderRadius="50%" />}
        </Box>
      )
    }
  )
)<TabProps>(
  variant({
    prop: 'selected',
    variants: {
      true: {
        color: 'gray.800',
      },
      false: {
        color: 'gray.500',
      },
    },
  })
)
