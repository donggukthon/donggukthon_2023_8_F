import { ChangeEvent, FC } from 'react'
import { useFormContext, useController } from 'react-hook-form'
import { CheckBoxField, CheckBoxFieldProps } from '../CheckBoxField'
import { FormFieldProps } from '../type'

type FormCheckBoxFieldProps = FormFieldProps<
  Omit<CheckBoxFieldProps, 'errorMessage'> & {
    onChange?: (_value: boolean, _event: ChangeEvent<HTMLInputElement>) => void
  },
  boolean
>

export const FormCheckBoxField: FC<FormCheckBoxFieldProps> = ({ name, rules, defaultValue, onChange, ...props }) => {
  const { control } = useFormContext()
  const { field, fieldState } = useController({
    name,
    control,
    defaultValue,
    rules: { ...rules, onChange: (e) => onChange?.(e.target.value, e) },
  })

  return <CheckBoxField checked={field.value} errorMessage={fieldState.error?.message} {...field} {...props} />
}
