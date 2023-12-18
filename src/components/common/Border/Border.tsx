import { BaseProps } from '../core/base'
import { ForwardStyle } from '../ForwardStyle'
import { ForwardStyleProps } from '../ForwardStyle/ForwardStyle'
import { ResponsiveValue } from 'types/ResponsiveValue'
import { ColorThemeKeys } from '../core/colors'
import { FC } from 'react'
import { getPaddedResponsiveArray } from '@utils/getPaddedResponsiveArray'

type BorderProps = Omit<BaseProps, 'as' | 'ref'> &
  Pick<ForwardStyleProps, 'children'> & {
    thickness?: ResponsiveValue<number>
    color?: ResponsiveValue<ColorThemeKeys>
    radius?: ResponsiveValue<number | string>
    top?: ResponsiveValue<boolean>
    bottom?: ResponsiveValue<boolean>
    left?: ResponsiveValue<boolean>
    right?: ResponsiveValue<boolean>
  }

type BorderWidthPropertyType =
  | 'borderWidth'
  | 'borderTopWidth'
  | 'borderBottomWidth'
  | 'borderLeftWidth'
  | 'borderRightWidth'

export const Border: FC<BorderProps> = ({
  thickness = 1,
  color,
  top,
  bottom,
  right,
  left,
  radius,
  ...props
}: BorderProps) => {
  const borderStyle = getPaddedResponsiveArray(color).map((c) => (c ? 'solid' : 'none'))
  const responsiveThickness = getPaddedResponsiveArray(thickness)
  const borderThickness: { [_key in BorderWidthPropertyType]?: typeof thickness } = {
    borderWidth: 0,
  }

  if (!top && !bottom && !right && !left) {
    borderThickness.borderWidth = thickness
  } else {
    const setDirectionThickness = (direction: ResponsiveValue<boolean>, thicknessProperty: BorderWidthPropertyType) => {
      borderThickness[thicknessProperty] = getPaddedResponsiveArray(direction).map((item, index) =>
        item ? responsiveThickness[index] : 0
      )
    }

    if (top) setDirectionThickness(top, 'borderTopWidth')
    if (bottom) setDirectionThickness(bottom, 'borderBottomWidth')
    if (left) setDirectionThickness(left, 'borderLeftWidth')
    if (right) setDirectionThickness(right, 'borderRightWidth')
  }

  return (
    <ForwardStyle borderColor={color} borderStyle={borderStyle} borderRadius={radius} {...borderThickness} {...props} />
  )
}
