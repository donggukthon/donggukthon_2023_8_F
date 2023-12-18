import { FC } from 'react'
import { Flex } from '../Flex'
import { FlexProps } from '../Flex/Flex'

type CenterProps = Omit<FlexProps, 'align' | 'justify'>

export const Center: FC<CenterProps> = ({ children, ref, ...restProps }) => (
  <Flex ref={ref} align="center" justify="center" {...restProps}>
    {children}
  </Flex>
)
