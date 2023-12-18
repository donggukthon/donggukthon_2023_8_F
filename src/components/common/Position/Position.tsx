import { BaseProps } from '../core/base'
import { PositionProps as PositionSystemProps, variant } from 'styled-system'
import { ForwardStyle } from '../ForwardStyle'
import { ForwardStyleProps } from '../ForwardStyle/ForwardStyle'
import styled from '@emotion/styled'
import { ResponsiveValue } from 'types/ResponsiveValue'

type PositionProps = Omit<BaseProps, 'as' | 'ref'> &
  Pick<PositionSystemProps, 'top' | 'right' | 'left' | 'bottom'> &
  Pick<ForwardStyleProps, 'children'> & {
    type?: ResponsiveValue<
      'full' | 'vertical-full' | 'horizontal-full' | 'center' | 'vertical-center' | 'horizontal-center' | null
    >
    position: PositionSystemProps['position']
  }

export const Position = styled((props: PositionProps) => <ForwardStyle {...props} />)<PositionProps>(
  variant({
    prop: 'type',
    variants: {
      full: {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },
      'vertical-full': {
        top: 0,
        bottom: 0,
      },
      'horizontal-full': {
        left: 0,
        right: 0,
      },
      center: {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      },
      'vertical-center': {
        top: '50%',
        transform: 'translateY(-50%)',
      },
      'horizontal-center': {
        left: '50%',
        transform: 'translateX(-50%)',
      },
    },
  })
)
