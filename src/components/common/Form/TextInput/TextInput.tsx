import { forwardRef, InputHTMLAttributes } from 'react'
import styles from './style.module.scss'
import cx from 'classnames'

export type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string
  error?: boolean
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ className, error, ...inputAttributes }, ref) => (
    <input
      ref={ref}
      type="text"
      className={cx(className, styles['text-input'], { [styles.error]: error })}
      {...inputAttributes}
    />
  )
)
