import { RefObject, useState } from 'react'
import { useCallback, useEffect, useRef } from 'react'
import { throttle } from 'lodash'

type UseInfiniteScrollProps = {
  threshold?: number
  callback?: () => void
}

type UseInfiniteScrollResult<T> = {
  targetRef: RefObject<T>
  reachedEnd: boolean
}
export const useInfiniteScroll = <T extends HTMLElement>(
  props?: UseInfiniteScrollProps
): UseInfiniteScrollResult<T> => {
  const { threshold = 10, callback } = props || {}
  const targetRef = useRef<T>(null)
  const [isReachedEnd, setIsReachedEnd] = useState(false)

  const isElementAtBottom = useCallback(
    (targetElement?: HTMLElement | null) => {
      const clientHeight = targetElement ? targetElement.clientHeight : window.screen.availHeight
      const scrollTop = targetElement ? targetElement.scrollTop : window.pageYOffset
      return scrollTop + clientHeight >= (targetElement?.scrollHeight ?? document.body.scrollHeight) - threshold
    },
    [threshold]
  )
  useEffect(() => {
    const eventListener = targetRef.current || window
    const scrollTargetElement = targetRef.current
    const checkScrollReachedEnd = throttle(
      () => {
        if (!isElementAtBottom(scrollTargetElement)) {
          setIsReachedEnd(false)
          return
        }

        setIsReachedEnd(true)
        callback?.()
      },
      100,
      { trailing: true }
    )

    eventListener.addEventListener('scroll', checkScrollReachedEnd)
    return () => eventListener.removeEventListener('scroll', checkScrollReachedEnd)
  }, [callback, isElementAtBottom])

  return { targetRef, reachedEnd: isReachedEnd }
}
