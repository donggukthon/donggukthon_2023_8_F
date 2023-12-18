import { useEffect } from 'react'
import { useIsMobile } from './useIsMobile'

/**
 * @description
 * This hook will scroll to the element with the id that matches the hash in the URL.
 */
export const useHashScroll = () => {
  const isMobile = useIsMobile()

  useEffect(() => {
    const scrollTargetId = window.location.hash.replace('#', '')
    const scrollTarget = document.getElementById(scrollTargetId)
    if (!scrollTarget) {
      return
    }
    const navigationHeight = isMobile ? 54 : 80
    window.scrollTo({ top: scrollTarget.getBoundingClientRect().top + window.pageYOffset - navigationHeight })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
