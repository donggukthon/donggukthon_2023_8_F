import { useEffect, useState } from 'react'

export type useIsWindowResizingProps = {
  onResizing: () => {}
}

export const useIsWindowResizing = ({ onResizing }: useIsWindowResizingProps) => {
  const [isResizing, setIsResizing] = useState(false)

  useEffect(() => {
    const onResizingEvent = () => {
      setIsResizing(true)
      onResizing()
    }

    window.addEventListener('resize', onResizingEvent)

    return () => {
      setIsResizing(false)
      window.removeEventListener('resize', onResizingEvent)
    }
  }, [onResizing])

  return {
    isResizing,
  }
}
