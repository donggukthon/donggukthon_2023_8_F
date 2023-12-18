import { useEffect, useState } from 'react'

export const useLazyUnmount = (state: boolean, delay: number) => {
  const [isMounted, setIsMounted] = useState(state)

  useEffect(() => {
    if (state) {
      setIsMounted(state)
      return undefined
    }
    const timer = setTimeout(() => {
      setIsMounted(false)
    }, delay)
    return () => {
      clearTimeout(timer)
    }
  }, [delay, state])

  return isMounted
}
