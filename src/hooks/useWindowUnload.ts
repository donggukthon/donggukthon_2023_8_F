import { useEffect } from 'react'

export const useWindowUnload = (callback: (_e: BeforeUnloadEvent) => void) => {
  const unsetBeforeUnload = () => {
    window.onbeforeunload = null
  }

  useEffect(() => {
    if (callback) {
      window.onbeforeunload = (e) => {
        return callback(e)
      }
    }

    return unsetBeforeUnload
  }, [callback])

  return {
    unsetBeforeUnload,
  }
}
