import { throttle } from 'lodash'
import { Router } from 'next/router'
import { useEffect, useMemo, useRef } from 'react'

export type usePageReadEventProps = {
  threshold?: number[]
  onPageRead: () => void
}

export const usePageRead = ({ threshold: thresholdProp, onPageRead }: usePageReadEventProps) => {
  const threshold = useMemo(() => thresholdProp ?? [1], [thresholdProp])
  const thresholdEventChecker = useRef<boolean[]>((threshold ?? []).map((_) => false))

  useEffect(() => {
    const setScrollDepth = throttle(() => {
      const currentScrollPercent =
        window.scrollY / (document.documentElement.scrollHeight - document.documentElement.clientHeight)

      if (currentScrollPercent < Math.min(...threshold)) {
        return
      }

      const scrollThreshold = threshold.reduce((prevScrollThreshold, currentThreshold) =>
        currentScrollPercent >= currentThreshold ? currentThreshold : prevScrollThreshold
      )

      const currentThresholdIndex = threshold.findIndex((depth) => depth === scrollThreshold)

      if (thresholdEventChecker.current[currentThresholdIndex]) {
        return
      }

      thresholdEventChecker.current[currentThresholdIndex] = true
      onPageRead()
    }, 300)

    window.addEventListener('scroll', setScrollDepth)

    return () => {
      window.removeEventListener('scroll', setScrollDepth)
    }
  }, [onPageRead, threshold])

  useEffect(() => {
    const resetThresholdEventChecker = () => {
      thresholdEventChecker.current = threshold.map((_) => false)
    }

    Router.events.on('routeChangeComplete', resetThresholdEventChecker)

    return () => {
      Router.events.off('routeChangeComplete', resetThresholdEventChecker)
    }
  }, [threshold])
}
