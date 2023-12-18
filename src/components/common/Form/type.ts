import { RegisterOptions } from 'react-hook-form'

export type FieldProps<OwnProps> = {
  label?: string
  defaultMessage?: string
  successMessage?: string
  errorMessage?: string
} & OwnProps

export type FormFieldProps<OwnProps, Value = string> = {
  name: string
  defaultValue?: Value
  rules?: RegisterOptions
} & OwnProps
