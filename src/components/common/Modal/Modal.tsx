import { Portal } from '@components/common/Portal'
import { useControlledState } from '@hooks/useControlledState'
import { useLockBodyScroll } from '@hooks/useLockBodyScroll'
import cx from 'classnames'
import { FC, ReactElement } from 'react'
import { Box } from '../Box'
import { Position } from '../Position'
import { Row } from '../Row'
import styles from './style.module.scss'

const MOBILE_WIDTH = 'calc(100vw - 40px)'
const sizePropVariant = {
  sm: {
    contentWidth: 375,
  },
  md: {
    contentWidth: 540,
  },
  lg: {
    contentWidth: 720,
  },
}

export type ModalProps = {
  className?: string
  closeable?: boolean
  size: 'sm' | 'md' | 'lg'
  opened?: boolean
  onClose?: () => void
  renderOpener?: (_: { openModal: () => void }) => ReactElement
  renderContent: (_: { closeModal: () => void }) => ReactElement
}

export const Modal: FC<ModalProps> = ({
  className,
  size,
  closeable = false,
  opened: openedProp,
  onClose,
  renderOpener,
  renderContent,
}) => {
  const { contentWidth } = sizePropVariant[size]
  const [opened, setOpenedIfUncontrolled] = useControlledState({ controlled: openedProp, default: false })

  useLockBodyScroll(opened)

  const close = () => {
    setOpenedIfUncontrolled(false)
    onClose?.()
  }

  const closeIfCloseable = () => {
    if (!closeable) {
      return
    }

    close()
  }

  return (
    <>
      {renderOpener?.({ openModal: () => setOpenedIfUncontrolled(true) })}
      {opened && (
        <Portal id="modal">
          <Box>
            <Position position="fixed" type="full">
              <Box className={cx(styles.dimmer)} onClick={closeIfCloseable} />
            </Position>
            <Position position="fixed" type="center">
              <Row className={cx(className, styles['modal-content'])} width={[MOBILE_WIDTH, contentWidth]}>
                {renderContent({ closeModal: close })}
              </Row>
            </Position>
          </Box>
        </Portal>
      )}
    </>
  )
}
