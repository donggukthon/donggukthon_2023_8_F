import { throttle } from 'lodash'
import { RefObject, useEffect, useRef, useState } from 'react'

type useScrolledOutResult<T> = {
  isScrolled: boolean
  targetRef: RefObject<T>
}

export const useScrolledOut = <T extends HTMLElement>(enable = true, yOffset = 0): useScrolledOutResult<T> => {
  const targetRef = useRef<T>(null)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    if (enable === false) {
      return () => {}
    }

    const checkScrollMoveOnTop = throttle(() => {
      if (!targetRef.current) {
        setIsScrolled(window.pageYOffset - yOffset > 0)
        return
      }

      setIsScrolled(targetRef.current.getBoundingClientRect().top === 0)
    }, 100)

    window.addEventListener('scroll', checkScrollMoveOnTop)

    return () => {
      window.removeEventListener('scroll', checkScrollMoveOnTop)
    }
  }, [enable, yOffset])

  return { targetRef, isScrolled }
}
