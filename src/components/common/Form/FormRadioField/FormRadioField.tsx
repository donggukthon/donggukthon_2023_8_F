import { FC } from 'react'
import { useFormContext, useController } from 'react-hook-form'
import { RadioField, RadioFieldProps } from '../RadioField'
import { FormFieldProps } from '../type'

type FormRadioFieldProps = FormFieldProps<Omit<RadioFieldProps, 'errorMessage'>>

export const FormRadioField: FC<FormRadioFieldProps> = ({ name, rules, checked = false, ...props }) => {
  const { control } = useFormContext()
  const { field, fieldState } = useController({
    name,
    control,
    rules,
  })

  return <RadioField checked={checked} errorMessage={fieldState.error?.message} {...field} {...props} />
}
