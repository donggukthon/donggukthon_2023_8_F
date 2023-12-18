import { ComponentType, FC, SVGProps } from 'react'
import { ActionProps } from '../core/action'
import { BaseProps } from '../core/base'
import { ResponsiveValue } from 'types/ResponsiveValue'
import { Box } from '../Box'
import { ColorThemeKeys, getHexFromColorKey } from '../core/colors'
import styled from '@emotion/styled'

type IconProps = BaseProps &
  ActionProps & {
    size: ResponsiveValue<number>
    color: ColorThemeKeys
    IconComponent: ComponentType<SVGProps<SVGSVGElement>>
  }

export const Icon: FC<IconProps> = ({ size, color, IconComponent, ...props }) => (
  <IconWrapper size={size} {...props} fill={getHexFromColorKey(color)}>
    <IconComponent width="100%" height="100%" />
  </IconWrapper>
)

const IconWrapper = styled(Box)<{ fill: string }>`
  path {
    fill: ${({ fill }) => fill};
  }
`
