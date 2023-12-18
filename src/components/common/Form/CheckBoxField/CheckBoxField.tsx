import { forwardRef } from 'react'
import cx from 'classnames'
import { FormField } from '../FormField'
import { FieldProps } from '../type'
import { CheckBox, CheckBoxProps } from '../CheckBox'

export type CheckBoxFieldProps = FieldProps<CheckBoxProps>

export const CheckBoxField = forwardRef<HTMLInputElement, CheckBoxFieldProps>(
  ({ className, label, errorMessage, defaultMessage, successMessage, ...props }, ref) => (
    <FormField
      className={cx(className)}
      label={label}
      direction="horizontal"
      defaultMessage={defaultMessage}
      successMessage={successMessage}
      errorMessage={errorMessage}
      render={() => <CheckBox ref={ref} {...props} />}
    />
  )
)
