import { FC } from 'react'
import { Box } from '@components/common/Box'
import { BoxProps } from '../Box'
import { BaseProps } from '../core/base'
import { ResponsiveValue } from 'types/ResponsiveValue'
import { ColorThemeKeys } from '../core/colors'
import styled from '@emotion/styled'

type SkeletonProps = BaseProps &
  Pick<BoxProps, 'width' | 'height' | 'maxWidth' | 'maxHeight'> & {
    color?: ResponsiveValue<ColorThemeKeys>
    radius?: ResponsiveValue<number>
  }

export const Skeleton: FC<SkeletonProps> = ({ className, radius = 4, color = 'gray.100', ...props }) => (
  <StyledBox className={className} backgroundColor={color} borderRadius={radius} {...props} />
)

const StyledBox = styled(Box)`
  @keyframes fadeInOut {
    from {
      opacity: 0.6;
    }
    to {
      opacity: 1;
    }
  }

  animation: fadeInOut 1s ease-in-out infinite alternate;
`
