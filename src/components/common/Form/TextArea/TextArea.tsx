import { forwardRef, TextareaHTMLAttributes } from 'react'
import styles from './style.module.scss'
import cx from 'classnames'

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  className?: string
  error?: boolean
  resize?: boolean
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, error, resize = false, ...inputAttributes }, ref) => (
    <textarea
      ref={ref}
      className={cx(className, styles['text-area'], { [styles.error]: error, [styles.resize]: resize })}
      {...inputAttributes}
    />
  )
)
