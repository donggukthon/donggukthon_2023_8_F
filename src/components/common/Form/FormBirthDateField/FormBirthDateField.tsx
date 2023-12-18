import { forceNumberOnlyOnKeyPress } from '@utils/forceNumberOnlyOnKeyPress'
import { FC } from 'react'
import { FormTextField, FormTextFieldProps } from '../FormTextField'

type FormBirthDateFieldProps = FormTextFieldProps & {
  className?: string
  fullYear?: boolean
}

export const FormBirthDateField: FC<FormBirthDateFieldProps> = ({ name, fullYear = false, ...props }) => (
  <FormTextField
    name={name}
    type="text"
    inputMode="numeric"
    maxLength={fullYear ? 8 : 6}
    onKeyPress={forceNumberOnlyOnKeyPress}
    {...props}
  />
)
