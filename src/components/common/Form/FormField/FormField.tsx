import { FC, ReactElement } from 'react'
import cx from 'classnames'
import styles from './style.module.scss'

type FormFieldProps = {
  className?: string
  direction?: 'horizontal' | 'vertical'
  label?: string
  error?: boolean
  defaultMessage?: string
  successMessage?: string
  errorMessage?: string
  render: (_error: boolean) => ReactElement
}

export const FormField: FC<FormFieldProps> = ({
  className,
  label,
  direction = 'vertical',
  error,
  defaultMessage,
  successMessage,
  errorMessage,
  render,
}) => (
  <div className={cx(className, styles[direction], styles['form-field'])}>
    <label className={styles.label}>
      {label && <p className={styles.text}>{label}</p>}
      {render(Boolean(error || errorMessage))}
    </label>
    {defaultMessage && <p className={cx(styles.message, styles.default)}>{defaultMessage}</p>}
    {successMessage && <p className={cx(styles.message, styles.success)}>{successMessage}</p>}
    {errorMessage && <p className={cx(styles.message, styles.error)}>{errorMessage}</p>}
  </div>
)
