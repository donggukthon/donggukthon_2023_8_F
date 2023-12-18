import { FC, forwardRef } from 'react'
import { Flex, FlexProps } from '../Flex/Flex'

export type ColumnProps = Omit<FlexProps, 'direction'>

export const Column: FC<ColumnProps> = forwardRef<HTMLElement, ColumnProps>((props, ref) => (
  <Flex ref={ref} direction="column" {...props} />
))
