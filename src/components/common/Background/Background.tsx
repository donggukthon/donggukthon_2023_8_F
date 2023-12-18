import { BaseProps } from '../core/base'
import { ForwardStyle } from '../ForwardStyle'
import { ForwardStyleProps } from '../ForwardStyle/ForwardStyle'
import styled from '@emotion/styled'
import { ResponsiveValue } from 'types/ResponsiveValue'
import { ColorThemeKeys } from '../core/colors'
import { CSSProperties } from 'react'
import { getPaddedResponsiveArray } from '@utils/getPaddedResponsiveArray'

type BackgroundProps = Omit<BaseProps, 'as' | 'ref'> &
  Pick<ForwardStyleProps, 'children'> & {
    color?: ResponsiveValue<ColorThemeKeys>
    image?: ResponsiveValue<string>
    size?: ResponsiveValue<CSSProperties['backgroundSize']>
    position?: ResponsiveValue<CSSProperties['backgroundPosition']>
    shadow?: ResponsiveValue<CSSProperties['boxShadow']>
    background?: ResponsiveValue<CSSProperties['background']>
  }

export const Background = styled(({ color, image, size, position, shadow, ...props }: BackgroundProps) => {
  const sources = getPaddedResponsiveArray(image).map((source) => `url('${source}')`)
  const backgroundImageProps = image
    ? {
        backgroundImage: sources,
        backgroundSize: size,
        backgroundPosition: position,
        backgroundRepeat: 'no-repeat',
      }
    : null

  return <ForwardStyle backgroundColor={color} boxShadow={shadow} {...backgroundImageProps} {...props} />
})<BackgroundProps>()
