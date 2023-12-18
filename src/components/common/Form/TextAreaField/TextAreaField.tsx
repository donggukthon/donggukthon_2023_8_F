import { forwardRef } from 'react'
import { FieldProps } from '../type'
import { TextArea, TextAreaProps } from '../TextArea'
import { FormField } from '../FormField'

export type TextAreaFieldProps = FieldProps<TextAreaProps>

export const TextAreaField = forwardRef<HTMLTextAreaElement, TextAreaFieldProps>(
  ({ className, label, errorMessage, defaultMessage, successMessage, ...props }, ref) => (
    <FormField
      className={className}
      label={label}
      defaultMessage={defaultMessage}
      successMessage={successMessage}
      errorMessage={errorMessage}
      render={(error) => <TextArea ref={ref} error={error} {...props} />}
    />
  )
)
