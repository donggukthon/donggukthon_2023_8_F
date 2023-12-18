import Flicking from '@egjs/react-flicking'
import { useCallback, useRef, useState } from 'react'

export const useSliderList = () => {
  const sliderRef = useRef<Flicking>(null)
  const [reachedTo, setReachedTo] = useState<{ start: boolean; end: boolean }>({ start: true, end: false })

  const moveToPrevSlide = useCallback(() => {
    if (!sliderRef.current || sliderRef.current.animating) {
      return
    }

    sliderRef.current.prev().catch(() => {})
  }, [sliderRef])

  const moveToNextSlide = useCallback(() => {
    if (!sliderRef.current || sliderRef.current.animating) {
      return
    }

    sliderRef.current.next().catch(() => {})
  }, [sliderRef])

  const moveToPrevPage = useCallback(() => {
    if (!sliderRef.current || sliderRef.current.animating) {
      return
    }

    const currentIndex = sliderRef.current.index ?? 0
    const visiblePanelCount = sliderRef.current.panels.filter((val) => val.visibleRatio === 1).length

    const index = Math.max(0, currentIndex - visiblePanelCount)

    sliderRef.current.moveTo(index).catch(() => {})
    setReachedTo({ start: index === 0, end: false })
  }, [sliderRef])

  const moveToNextPage = useCallback(() => {
    if (!sliderRef.current || sliderRef.current.animating) {
      return
    }

    const totalPanelCount = sliderRef.current.panelCount ?? 0
    const currentIndex = sliderRef.current.index ?? 0
    const visiblePanelCount = sliderRef.current.panels.filter((val) => val.visibleRatio === 1).length

    const index = Math.min(totalPanelCount - visiblePanelCount, currentIndex + visiblePanelCount)

    sliderRef.current.moveTo(index).catch(() => {})
    setReachedTo({ start: false, end: index === totalPanelCount - visiblePanelCount })
  }, [sliderRef])

  return { sliderRef, reachedTo, moveToPrevSlide, moveToNextSlide, moveToPrevPage, moveToNextPage }
}
