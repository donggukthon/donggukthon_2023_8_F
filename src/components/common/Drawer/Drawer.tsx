import React, { FC, ReactElement } from 'react'
import styles from './style.module.scss'
import cx from 'classnames'
import { Portal } from '../Portal'
import { useLazyUnmount } from '@hooks/useLazyUnmount'
import { useLockBodyScroll } from '@hooks/useLockBodyScroll'
import { useControlledState } from '@hooks/useControlledState'

const ANIMATION_DURATION = 300

type DrawerProps = {
  className?: string
  opened?: boolean
  onClose?: () => void
  direction?: 'left' | 'right'
  renderOpener: (_: { openDrawer: () => void }) => ReactElement
  renderContent: (_: { closeDrawer: () => void }) => ReactElement
}

export const Drawer: FC<DrawerProps> = ({
  className,
  direction = 'left',
  opened: openedProp,
  onClose,
  renderOpener,
  renderContent,
}) => {
  const [opened, setOpened] = useControlledState({ controlled: openedProp, default: false })

  useLockBodyScroll(opened)
  const isMounted = useLazyUnmount(opened, ANIMATION_DURATION)

  const close = () => {
    setOpened(false)
    onClose?.()
  }

  return (
    <>
      {renderOpener({ openDrawer: () => setOpened(true) })}
      {isMounted && (
        <Portal id="drawer">
          <div className={cx(styles.drawer, { [styles.open]: opened, [styles.close]: !opened })}>
            <div className={styles.dimmer} onClick={close} />
            <div className={cx(className, styles['drawer-content'], styles[direction])}>
              {renderContent({ closeDrawer: () => setOpened(false) })}
            </div>
          </div>
        </Portal>
      )}
    </>
  )
}
