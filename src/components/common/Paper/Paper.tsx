import { FC, forwardRef } from 'react'
import { BackgroundProps } from 'styled-system'
import { ResponsiveValue } from 'types/ResponsiveValue'
import { Border } from '../Border'
import { Box } from '../Box'
import { PaddingShortcutProps } from '../Box/Box'
import { ActionProps } from '../core/action'
import { BaseProps } from '../core/base'
import { ColorThemeKeys } from '../core/colors'
import { LayoutProps } from '../core/layout'
import { Elevation, ShadowLevelVariant } from '../Elevation/Elevation'

export type PaperProps = BaseProps &
  BackgroundProps &
  LayoutProps &
  PaddingShortcutProps & {
    bgColor?: ResponsiveValue<ColorThemeKeys>
    radius?: ResponsiveValue<number | string>
    borderColor?: ResponsiveValue<ColorThemeKeys>
    elevationLevel?: ShadowLevelVariant
  } & ActionProps

export const Paper: FC<PaperProps> = forwardRef<HTMLElement, PaperProps>(
  ({ elevationLevel = 0, bgColor = 'transparent', borderColor, radius, ...props }, ref) => (
    <Elevation level={elevationLevel}>
      <Border color={borderColor}>
        <Box borderRadius={radius} backgroundColor={bgColor} {...props} ref={ref} />
      </Border>
    </Elevation>
  )
)
