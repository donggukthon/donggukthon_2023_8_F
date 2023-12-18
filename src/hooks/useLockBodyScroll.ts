import { useEffect, useRef } from 'react'

export const useLockBodyScroll = (locked = false) => {
  const bodyStyleRef = useRef({ paddingRight: '', overflow: '' })

  const lockBodyScroll = () => {
    bodyStyleRef.current = {
      paddingRight: document.body.style.paddingRight,
      overflow: document.body.style.overflow,
    }

    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth
    document.body.style.paddingRight = `${scrollBarWidth}px`
    document.body.style.overflow = 'hidden'
  }

  const unlockBodyScroll = () => {
    document.body.style.paddingRight = bodyStyleRef.current.paddingRight
    document.body.style.overflow = bodyStyleRef.current.overflow
  }

  useEffect(() => {
    if (locked) {
      lockBodyScroll()
    } else {
      unlockBodyScroll()
    }

    return () => {
      unlockBodyScroll()
    }
  }, [locked])
}
