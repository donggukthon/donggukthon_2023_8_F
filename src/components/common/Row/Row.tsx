import { FC, forwardRef } from 'react'
import { Flex, FlexProps } from '../Flex/Flex'

export type RowProps = Omit<FlexProps, 'direction'>

export const Row: FC<RowProps> = forwardRef<HTMLElement, RowProps>((props, ref) => (
  <Flex ref={ref} direction="row" {...props} />
))
