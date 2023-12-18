import { useEffect, useRef, useState } from 'react'

export const useIncrementalValue = (targetValue: number, duration = 500) => {
  const [value, setValue] = useState(targetValue)
  const [isAnimating, setIsAnimating] = useState(false)
  const requestIdRef = useRef(null)

  useEffect(() => {
    const startTime = Date.now()
    const startValue = value

    const animate = () => {
      const elapsedTime = Date.now() - startTime
      const progress = Math.min(elapsedTime / duration, 1) < 0.9 ? Math.min(elapsedTime / duration, 1) : 1
      const newValue = startValue + (targetValue - startValue) * progress
      setValue(newValue)

      if (progress < 1) {
        requestIdRef.current = requestAnimationFrame(animate) as any
      } else {
        setIsAnimating(false)
        if (requestIdRef.current) {
          cancelAnimationFrame(requestIdRef.current)
        }
      }
    }

    requestIdRef.current = requestAnimationFrame(animate) as any

    return () => {
      if (requestIdRef.current) {
        cancelAnimationFrame(requestIdRef.current)
      }
      setIsAnimating(false)
    }
  }, [targetValue, duration, value])

  return { value, isAnimating }
}
