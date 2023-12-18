import { ChangeEvent, FC } from 'react'
import { useController, useFormContext } from 'react-hook-form'
import { TextAreaField, TextAreaFieldProps } from '../TextAreaField'
import { FormFieldProps } from '../type'

type FormTextAreaFieldProps = FormFieldProps<
  Omit<TextAreaFieldProps, 'errorMessage'> & {
    onChange?: (_value: string, _event: ChangeEvent<HTMLInputElement>) => void
  }
>

export const FormTextAreaField: FC<FormTextAreaFieldProps> = ({ name, defaultValue, rules, onChange, ...props }) => {
  const { control } = useFormContext()
  const { field, fieldState } = useController({
    name,
    control,
    defaultValue,
    rules: { ...rules, onChange: (e) => onChange?.(e.target.value, e) },
  })

  return <TextAreaField errorMessage={fieldState.error?.message} {...field} {...props} />
}
