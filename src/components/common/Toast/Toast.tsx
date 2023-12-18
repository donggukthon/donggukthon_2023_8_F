import { ComponentType, FC, SVGProps, useEffect, useRef } from 'react'
import styles from './style.module.scss'
import cx from 'classnames'
import { Portal } from '../Portal'
import { atom, useAtom } from 'jotai'
import { useBooleanState } from '@hooks/useBooleanState'
import CloseIcon from '../svgs/CloseIcon'
import FailIcon from '../svgs/FailIcon'
import GreenAlarmIcon from '../svgs/GreenAlarmIcon'
import GreenCheckIcon from '../svgs/GreenCheckIcon'

const DURATION_MS = 2000

type ToastContentProps = {
  message: string
  type: 'success' | 'alarm' | 'fail' | 'none'
  closeable?: boolean
}

export const toastPropsAtom = atom<ToastContentProps | null>(null)

export const ToastComponent = ({
  opened,
  message,
  closeable,
  closeToast,
  IconComponent,
}: {
  opened: boolean
  message: string
  closeable?: boolean
  closeToast: () => void
  IconComponent: ComponentType<SVGProps<SVGSVGElement>> | null
}) => (
  <div className={cx(styles['toast'], { [styles.open]: opened, [styles.close]: !opened })}>
    <div className={styles.content}>
      {IconComponent && <IconComponent className={styles.icon} />}
      <div className={styles.title}>{message}</div>
    </div>
    {closeable && <CloseIcon className={styles['close-icon']} onClick={closeToast} />}
  </div>
)

const toastIconVariant: Record<ToastContentProps['type'], ComponentType<SVGProps<SVGSVGElement>> | null> = {
  success: GreenCheckIcon,
  fail: FailIcon,
  none: null,
  alarm: GreenAlarmIcon,
}

export const Toast: FC = () => {
  const timer = useRef<ReturnType<typeof setTimeout>>()
  const [toastProps] = useAtom(toastPropsAtom)
  const { state: isToastOpen, setTrue: openToast, setFalse: closeToast } = useBooleanState(false)

  useEffect(() => {
    if (toastProps) {
      openToast()
    }

    if (!toastProps?.closeable) {
      timer.current = setTimeout(() => {
        closeToast()
      }, DURATION_MS)
    }

    return () => {
      if (!timer.current) {
        return
      }

      clearTimeout(timer.current)
    }
  }, [closeToast, openToast, toastProps])

  return (
    <>
      {toastProps && (
        <Portal id="toast">
          <ToastComponent
            opened={isToastOpen}
            message={toastProps.message}
            closeable={toastProps.closeable}
            closeToast={closeToast}
            IconComponent={toastIconVariant[toastProps.type]}
          />
        </Portal>
      )}
    </>
  )
}
