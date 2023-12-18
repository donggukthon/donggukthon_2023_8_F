import { useEffect } from 'react'
import { debounce, throttle } from 'lodash'

const WINDOW_RESIZE_DEBOUNCE_DELAY_MS = 300

export function useWindowResizeEvent(
  eventListener: () => void,
  type?: 'debounce' | 'throttle',
  delay = WINDOW_RESIZE_DEBOUNCE_DELAY_MS
) {
  useEffect(() => {
    const handleResize = type === 'debounce' ? debounce(eventListener, delay) : throttle(eventListener, delay)

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [delay, eventListener, type])
}
