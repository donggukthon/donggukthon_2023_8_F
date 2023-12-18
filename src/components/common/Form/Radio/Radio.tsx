import { forwardRef, InputHTMLAttributes } from 'react'
import cx from 'classnames'
import styles from './style.module.scss'
import RadioOnIcon from '@components/common/svgs/RadioOnIcon'
import RadioOffIcon from '@components/common/svgs/RadioOffIcon'

export type RadioProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ className, checked = false, disabled = false, ...inputAttributes }, ref) => (
    <div
      className={cx(className, styles['radio'], {
        [styles.checked]: checked,
        [styles.enabled]: !disabled,
        [styles.disabled]: disabled,
      })}
    >
      <input ref={ref} hidden={true} type="radio" checked={checked} {...inputAttributes} />
      {checked ? <RadioOnIcon className={styles.icon} /> : <RadioOffIcon className={styles.icon} />}
    </div>
  )
)
