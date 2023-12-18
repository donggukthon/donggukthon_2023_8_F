import { ChangeEvent, FC } from 'react'
import { useController, useFormContext } from 'react-hook-form'
import { TextField, TextFieldProps } from '../TextField'
import { FormFieldProps } from '../type'

export type FormTextFieldProps = FormFieldProps<Omit<TextFieldProps, 'errorMessage'>> & {
  className?: string
  autoFocusNext?: { hurdle: number; next: string }
  onChange?: (_event: ChangeEvent<HTMLInputElement>, _value: string) => void
}

export const FormTextField: FC<FormTextFieldProps> = ({
  name,
  rules,
  defaultValue,
  autoFocusNext,
  onChange,
  ...props
}) => {
  const { control, setFocus } = useFormContext()
  const { field, fieldState } = useController({
    name,
    control,
    defaultValue: defaultValue ?? '',
    rules: {
      ...rules,
      onChange: (e) => {
        onChange?.(e, e.target.value)

        if (autoFocusNext?.hurdle && e.target.value.length >= autoFocusNext.hurdle) {
          setFocus(autoFocusNext.next)
        }
      },
    },
  })

  return <TextField error={Boolean(fieldState.error)} errorMessage={fieldState.error?.message} {...field} {...props} />
}
