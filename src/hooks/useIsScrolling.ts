import { useEffect, useRef, useState } from 'react'

export type useIsScrollingProps = {
  onScrolling?: () => void
  onScrollEnd?: () => void
}

export const useIsScrolling = <T extends HTMLElement>(props?: useIsScrollingProps) => {
  const handleScrollEnd = useRef<any>(null)
  const target = useRef<T>(null)
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    const onScrollingEvent = () => {
      if (handleScrollEnd.current) {
        clearTimeout(handleScrollEnd.current)
        props?.onScrolling?.()
        setIsScrolling(true)
      }
      handleScrollEnd.current = setTimeout(() => {
        props?.onScrollEnd?.()
        setIsScrolling(false)
      }, 200)
    }

    const targetCurrent = target.current

    ;(targetCurrent ?? window).addEventListener('scroll', onScrollingEvent)

    return () => {
      (targetCurrent ?? window).removeEventListener('scroll', onScrollingEvent)
    }
  }, [isScrolling, props, target])

  return {
    target,
    isScrolling,
  }
}
