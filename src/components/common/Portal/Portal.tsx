import { FC, ReactElement, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { findOrCreateElementById } from '@utils/findOrCreateElementById'

type PortalProps = {
  id: string
  children: ReactElement
  position?: 'relative' | 'unset'
}

export const Portal: FC<PortalProps> = ({ id, children, position = 'relative' }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const container = document.fullscreenElement ? document.fullscreenElement : findOrCreateElementById(id)

  return ReactDOM.createPortal(<div style={{ zIndex: 3000, position }}>{children}</div>, container)
}
