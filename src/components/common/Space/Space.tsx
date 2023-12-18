import { FC, forwardRef } from 'react'
import { Box, BoxProps } from '../Box'
import { BaseProps } from '../core/base'

type SpaceProps = BaseProps & Pick<BoxProps, 'width' | 'height'>

export const Space: FC<SpaceProps> = forwardRef<HTMLElement, SpaceProps>(({ width, height }, ref) => {
  return <Box ref={ref} width={width} height={height} flex="0 0 auto" />
})
