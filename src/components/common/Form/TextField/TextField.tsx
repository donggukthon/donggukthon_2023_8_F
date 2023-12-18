import { forwardRef } from 'react'
import { FormField } from '../FormField'
import { TextInput, TextInputProps } from '../TextInput'
import { FieldProps } from '../type'

export type TextFieldProps = FieldProps<TextInputProps>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ className, label, error, errorMessage, defaultMessage, successMessage, ...props }, ref) => (
    <FormField
      className={className}
      label={label}
      error={error}
      defaultMessage={defaultMessage}
      successMessage={successMessage}
      errorMessage={errorMessage}
      render={(error) => <TextInput ref={ref} error={error} {...props} />}
    />
  )
)
