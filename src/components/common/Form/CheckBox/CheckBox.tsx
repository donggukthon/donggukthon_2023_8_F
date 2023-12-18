import { ChangeEvent, forwardRef, InputHTMLAttributes } from 'react'
import styles from './style.module.scss'
import cx from 'classnames'
import { useControlledState } from '@hooks/useControlledState'
import CheckIcon from '@components/common/svgs/CheckIcon'

export type CheckBoxProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string
  defaultChecked?: boolean
}

export const CheckBox = forwardRef<HTMLInputElement, CheckBoxProps>(
  (
    { className, checked: checkedProp, defaultChecked = false, disabled = false, onChange, ...inputAttributes },
    ref
  ) => {
    const [checked, setCheckedIfUncontrolled] = useControlledState({ controlled: checkedProp, default: defaultChecked })

    const changeChecked = (e: ChangeEvent<HTMLInputElement>) => {
      setCheckedIfUncontrolled(!checked)
      onChange?.(e)
    }

    return (
      <div
        className={cx(className, styles['check-box'], {
          [styles.checked]: checked,
          [styles.enabled]: !disabled,
          [styles.disabled]: disabled,
        })}
      >
        <input
          ref={ref}
          hidden={true}
          type="checkbox"
          checked={checked}
          onChange={changeChecked}
          {...inputAttributes}
        />
        <CheckIcon className={styles.icon} />
      </div>
    )
  }
)
