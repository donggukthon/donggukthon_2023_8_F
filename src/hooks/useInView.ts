import { useCallback, useRef, useState } from 'react'
import { useIntersectionObserver } from './useIntersectionObserver'

type Position = 'top' | 'bottom'

// eslint-disable-next-line no-undef
export const useInView = (initialInView: boolean, options?: IntersectionObserverInit) => {
  const previousScrollY = useRef(0)
  const [isInView, setIsInView] = useState(initialInView)
  const [position, setPosition] = useState<Position>('top')

  const callback = useCallback(
    (entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        setPosition(entry.boundingClientRect.y < previousScrollY.current ? 'bottom' : 'top')
        setIsInView(true)
      } else {
        setPosition(entry.boundingClientRect.y > previousScrollY.current ? 'bottom' : 'top')
        setIsInView(false)
      }

      previousScrollY.current = entry.boundingClientRect.y
    },
    [previousScrollY]
  )

  const { ref } = useIntersectionObserver((entry) => callback(entry), options)

  return { ref, isInView, position }
}
