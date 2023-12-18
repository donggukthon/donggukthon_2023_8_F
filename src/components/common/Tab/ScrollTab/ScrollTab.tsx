import React, { Children, ReactElement, useEffect } from 'react'
import { BaseProps } from '@components/common/core/base'
import { TabProps } from '../Tab'
import { Box } from '@components/common/Box'
import styled from '@emotion/styled'
import { debounce } from 'lodash'
import { Circle } from '@components/common/Circle'
import { Position } from '@components/common/Position'
import { Border } from '@components/common/Border'
import ArrowLeftSmallIcon from '@components/common/svgs/ArrowLeftSmallIcon'
import ArrowRightSmallIcon from '@components/common/svgs/ArrowRightSmallIcon'

type ScrollTabProps = BaseProps & {
  children: ReactElement<TabProps>[]
  offsetX?: number
  underline?: boolean
}

export const ScrollTab = styled(({ className, offsetX = 0, underline, children, ...props }: ScrollTabProps) => {
  const [displayScroll, setDisplayScroll] = React.useState({
    start: false,
    end: false,
  })

  const tabListRef = React.useRef<HTMLElement>(null)
  const childrenArray = Children.toArray(children)

  useEffect(() => {
    const tabListElement = tabListRef.current
    if (!tabListElement) {
      return
    }

    updateScroll()
    const updateAfterScroll = debounce(updateScroll, 50)

    tabListElement.addEventListener('scroll', updateAfterScroll)

    return () => tabListElement.removeEventListener('scroll', updateAfterScroll)
  }, [])

  const getScrollSize = () => {
    if (!tabListRef.current) {
      return 0
    }

    const containerSize = tabListRef.current.clientWidth
    let totalSize = 0
    const tabItems = Array.from(tabListRef.current.children)

    for (let i = 0; i < tabItems.length; i += 1) {
      const tab = tabItems[i]
      if (totalSize + tab.clientWidth > containerSize) {
        if (i === 0) {
          totalSize = containerSize
        }
        break
      }
      totalSize += tab.clientWidth
    }

    return totalSize
  }

  const updateScroll = () => {
    if (!tabListRef.current) {
      return
    }

    const { scrollWidth, clientWidth, scrollLeft } = tabListRef.current
    const showStartScroll = scrollLeft > 1
    const showEndScroll = scrollLeft < scrollWidth - clientWidth - 1

    setDisplayScroll({ start: showStartScroll, end: showEndScroll })
  }

  const moveScrollTo = (scrollLeft: number) => {
    if (!tabListRef.current) {
      return
    }

    tabListRef.current.scrollLeft += scrollLeft
    updateScroll()
  }

  const moveToLeft = () => {
    moveScrollTo(getScrollSize() * -1)
  }

  const moveToRight = () => {
    moveScrollTo(getScrollSize())
  }

  return (
    <Box position="relative" width="100%" className={className}>
      <Box
        ref={tabListRef}
        display="flex"
        hideScroll={true}
        overflowX={['scroll', 'hidden']}
        px={[offsetX, 0]}
        mx={[offsetX * -1, 0]}
        {...props}
      >
        {childrenArray.map((child, index) => (
          <Box key={index} flexShrink={0}>
            <Box mr={index < childrenArray.length - 1 ? [18, 22] : 0}>{child}</Box>
          </Box>
        ))}
      </Box>

      {underline && (
        <Box position="absolute" height={1} left={0} right={0} bottom={0} zIndex={-1} backgroundColor="gray.200" />
      )}

      <Box display={displayScroll.start ? 'flex' : 'none'}>
        <Position position="absolute" type="vertical-full" left={0}>
          <LeftShadowBox />
        </Position>
        <Position position="absolute" top={16} left={-36}>
          <Border color="gray.400">
            <Circle size={24} className="desktop" cursor="pointer" onClick={moveToLeft}>
              <ArrowLeftSmallIcon width={12} height={12} />
            </Circle>
          </Border>
        </Position>
      </Box>
      <Box display={displayScroll.end ? 'flex' : 'none'}>
        <Position position="absolute" type="vertical-full" right={0}>
          <RightShadowBox />
        </Position>
        <Position position="absolute" top={16} right={-36}>
          <Border color="gray.400">
            <Circle size={24} className="desktop" cursor="pointer" onClick={moveToRight}>
              <ArrowRightSmallIcon width={12} height={12} />
            </Circle>
          </Border>
        </Position>
      </Box>
    </Box>
  )
})`
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  scrollbar-width: none;
  scrollbar-height: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

const RightShadowBox = styled.div`
  width: 32px;
  background: linear-gradient(270deg, #ffffff 0%, rgba(255, 255, 255, 0.2) 100%);
`

const LeftShadowBox = styled.div`
  width: 32px;
  background: linear-gradient(90deg, #ffffff 0%, rgba(255, 255, 255, 0.2) 100%);
`
