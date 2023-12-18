import { Children, FC, ReactElement } from 'react'
import { TabProps } from '../Tab'
import { Box } from '@components/common/Box'

type FittedTabProps = {
  className?: string
  offsetX?: number
  children: ReactElement<TabProps>[]
}

export const FittedTab: FC<FittedTabProps> = ({ children, offsetX = 20, ...props }) => {
  const childrenArray = Children.toArray(children)

  return (
    <Box
      position="relative"
      display="flex"
      alignItems="center"
      flexWrap="nowrap"
      px={[offsetX, 0]}
      mx={[offsetX * -1, 0]}
      {...props}
    >
      <Box position="absolute" height={1} left={0} right={0} bottom={0} backgroundColor="gray.200" />
      {childrenArray.map((child, index) => (
        <Box key={index} flexGrow={1} flexShrink={0} mr={index < childrenArray.length - 1 ? [18, 22] : 0}>
          {child}
        </Box>
      ))}
    </Box>
  )
}
