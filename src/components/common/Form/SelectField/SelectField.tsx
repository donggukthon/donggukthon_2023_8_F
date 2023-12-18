import { forwardRef } from 'react'
import { FieldProps } from '../type'
import { Select, SelectProps } from '../Select'
import { FormField } from '../FormField'

export type SelectFieldProps = FieldProps<SelectProps>

export const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(
  ({ className, label, errorMessage, defaultMessage, successMessage, ...props }, ref) => (
    <FormField
      className={className}
      label={label}
      direction="horizontal"
      defaultMessage={defaultMessage}
      successMessage={successMessage}
      errorMessage={errorMessage}
      render={() => <Select ref={ref} {...props} />}
    />
  )
)
