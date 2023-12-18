import { useCallback, useEffect, useRef } from 'react'

type ObservedElement = Element | null

export const useIntersectionObserver = (
  callback: (_entry: IntersectionObserverEntry) => void,
  // eslint-disable-next-line no-undef
  options?: IntersectionObserverInit
) => {
  const observerRef = useRef<IntersectionObserver>()

  const unobserve = useCallback(() => {
    observerRef.current?.disconnect()
    observerRef.current = undefined
  }, [])

  const observe = useCallback(
    (targetElement: ObservedElement) => {
      if (!targetElement) {
        return
      }

      observerRef.current = new IntersectionObserver(([entry]: IntersectionObserverEntry[]) => {
        callback(entry)
      }, options)
      observerRef.current.observe(targetElement)
    },
    [callback, options]
  )

  useEffect(() => {
    return () => {
      observerRef.current?.disconnect()
      observerRef.current = undefined
    }
  }, [])

  const ref = useCallback(
    (targetElement: ObservedElement) => {
      unobserve()
      observe(targetElement)
    },
    [observe, unobserve]
  )

  return { ref }
}
