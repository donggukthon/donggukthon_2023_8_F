import { ChangeEvent, FC } from 'react'
import { useFormContext, useController } from 'react-hook-form'
import { SelectField, SelectFieldProps } from '../SelectField'
import { FormFieldProps } from '../type'

type FormSelectFieldProps = FormFieldProps<
  Omit<SelectFieldProps, 'errorMessage'> & {
    onChange?: (_value: boolean, _event: ChangeEvent<HTMLInputElement>) => void
  },
  boolean
>

export const FormSelectField: FC<FormSelectFieldProps> = ({ name, rules, defaultValue, onChange, ...props }) => {
  const { control } = useFormContext()
  const { field, fieldState } = useController({
    name,
    control,
    defaultValue,
    rules: { ...rules, onChange: (e) => onChange?.(e.target.value, e) },
  })

  return <SelectField errorMessage={fieldState.error?.message} {...field} {...props} />
}
