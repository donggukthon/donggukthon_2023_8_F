import { useInfiniteScroll } from '@hooks/useInfiniteScroll'
import cx from 'classnames'
import React, { FC, useEffect } from 'react'
import styles from './style.module.scss'

type InfiniteScrollContainerProps = {
  className?: string
  callback?: () => void
  isAllowInfiniteScroll?: boolean
  isInnerScroll?: boolean
  children?: React.ReactNode
}

export const InfiniteScrollContainer: FC<InfiniteScrollContainerProps> = ({
  className,
  children,
  callback,
  isAllowInfiniteScroll = true,
  isInnerScroll = false,
}) => {
  const { targetRef, reachedEnd } = useInfiniteScroll<HTMLDivElement>()

  useEffect(() => {
    if (!reachedEnd) return

    if (isAllowInfiniteScroll) {
      callback?.()
    }
  }, [reachedEnd, callback, isAllowInfiniteScroll])

  return (
    <div className={cx(className, styles['infinite-scroll-container'])} ref={isInnerScroll ? targetRef : null}>
      {children}
    </div>
  )
}
