import { forceNumberOnlyOnKeyPress } from '@utils/forceNumberOnlyOnKeyPress'
import { FC } from 'react'
import { FormTextField, FormTextFieldProps } from '../FormTextField'

type FormCreditCardPasswordFieldProps = Omit<FormTextFieldProps, 'autoFocusNext'> & {
  className?: string
  autoFocusNextName?: string
}

export const FormCreditCardPasswordField: FC<FormCreditCardPasswordFieldProps> = ({
  name,
  rules,
  autoFocusNextName,
  ...props
}) => (
  <FormTextField
    name={name}
    type="password"
    inputMode="numeric"
    maxLength={2}
    autoComplete="new-password"
    rules={{ maxLength: 2, minLength: 2, ...(rules ?? {}) }}
    autoFocusNext={autoFocusNextName ? { hurdle: 2, next: autoFocusNextName } : undefined}
    onKeyPress={forceNumberOnlyOnKeyPress}
    {...props}
  />
)
