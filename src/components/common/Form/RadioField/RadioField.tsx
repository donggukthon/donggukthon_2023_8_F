import { forwardRef } from 'react'
import cx from 'classnames'
import { FormField } from '../FormField'
import { FieldProps } from '../type'
import { Radio, RadioProps } from '../Radio'

export type RadioFieldProps = FieldProps<RadioProps>

export const RadioField = forwardRef<HTMLInputElement, RadioFieldProps>(
  ({ className, label, errorMessage, defaultMessage, successMessage, ...props }, ref) => (
    <FormField
      className={cx(className)}
      label={label}
      direction="horizontal"
      defaultMessage={defaultMessage}
      successMessage={successMessage}
      errorMessage={errorMessage}
      render={() => <Radio ref={ref} {...props} />}
    />
  )
)
