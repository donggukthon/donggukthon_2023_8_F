import { FC, ReactElement, RefCallback, useEffect, useMemo, useRef, useState } from 'react'
import styles from './style.module.scss'
import cx from 'classnames'
import { Portal } from '../Portal'
import { useBooleanState } from '@hooks/useBooleanState'
import { useWindowResizeEvent } from '@hooks/useWindowResizeEvent'
import { trackClickOutside } from '@utils/trackClickOutside'

export type PopperPositionType = 'bottom-start' | 'bottom' | 'bottom-end'

type PopperProps = {
  className?: string
  children: ReactElement
  position?: PopperPositionType
  // eslint-disable-next-line unused-imports/no-unused-vars
  renderOpener: (props: { openerRef: RefCallback<HTMLDivElement>; open: () => void }) => ReactElement
  onOpen?: () => void
  onClose?: () => void
}

export const Popper: FC<PopperProps> = ({
  className,
  children,
  position = 'bottom-start',
  renderOpener,
  onOpen,
  onClose,
}) => {
  const openerRef = useRef<HTMLDivElement>()
  const [anchorRect, setAnchorRect] = useState<DOMRect | null>(null)
  const { state: isOpen, setTrue: openPopper, setFalse: closePopper } = useBooleanState(false)

  useEffect(() => {
    if (isOpen) {
      trackClickOutside('#popper', closePopper)
    }

    isOpen ? onOpen?.() : onClose?.()
  }, [closePopper, onOpen, onClose, isOpen])

  const open = () => {
    if (!openerRef.current) {
      return
    }

    setAnchorRect(openerRef.current?.getBoundingClientRect())
    openPopper()
  }

  const updateAnchorRect = () => {
    if (!openerRef.current) {
      return
    }

    setAnchorRect(openerRef.current?.getBoundingClientRect())
  }

  const setRef = (ref: HTMLDivElement) => {
    if (!ref) {
      return null
    }

    openerRef.current = ref
  }

  const popperLayout = useMemo(() => {
    if (!anchorRect) {
      return null
    }

    switch (position) {
      case 'bottom':
        return [`calc(${(anchorRect.left + anchorRect.right) / 2}px - 50%)`, `${anchorRect.bottom + 10}px`]
      case 'bottom-start':
        return [`${anchorRect.left}px`, `${anchorRect.bottom + 10}px`]
      case 'bottom-end':
        return [`calc(${anchorRect.right}px - 100%)`, `${anchorRect.bottom + 10}px`]
    }
  }, [anchorRect, position])

  useWindowResizeEvent(updateAnchorRect, 'throttle', 100)

  return (
    <>
      {renderOpener({ openerRef: setRef, open })}
      {popperLayout !== null && isOpen && (
        <Portal id="popper">
          <div
            className={cx(className, styles['popper'])}
            style={{ transform: `translate(${popperLayout[0]}, ${popperLayout[1]})` }}
          >
            {children}
          </div>
        </Portal>
      )}
    </>
  )
}
