import { isServer } from '@utils/browser'
import { useEffect, useState } from 'react'

export const useMediaQuery = (query: string, defaultValue = false) => {
  const [matches, setMatches] = useState(() => {
    if (isServer) {
      return defaultValue
    }

    return window.matchMedia(query).matches
  })

  useEffect(() => {
    const media = window.matchMedia(query)
    const updateMatch = () => setMatches(media.matches)

    if (media.addEventListener) {
      media.addEventListener('change', updateMatch)
      return () => media.removeEventListener('change', updateMatch)
    }

    media.addListener(updateMatch)
    return () => media.removeListener(updateMatch)
  }, [matches, query])

  return matches
}
