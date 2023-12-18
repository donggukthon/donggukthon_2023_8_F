import { ChangeEvent } from 'react'
import { useController, useFormContext } from 'react-hook-form'
import { FormField } from '../FormField'
import { FormRadioField } from '../FormRadioField'
import { FieldProps, FormFieldProps } from '../type'

export type OptionType = { label: string; value: string; [key: string]: any }

type FormRadioGroupFieldProps<T extends OptionType = OptionType> = FormFieldProps<
  Omit<
    FieldProps<{
      className?: string
      options: T[]
      onChange?: (_value: T, _event: ChangeEvent<HTMLInputElement>) => void
    }>,
    'errorMessage'
  >
>

export const FormRadioGroupField = <T extends OptionType = OptionType>({
  className,
  label,
  name,
  options,
  defaultValue,
  rules,
  onChange,
}: FormRadioGroupFieldProps<T>) => {
  const { control } = useFormContext()
  const { field, fieldState } = useController({
    name,
    control,
    defaultValue,
    rules: { ...rules, onChange: (e) => onChange?.(e.target.value, e) },
  })

  return (
    <FormField
      className={className}
      label={label}
      errorMessage={fieldState.error?.message}
      render={() => (
        <fieldset>
          {options.map(({ label, value }, idx) => (
            <FormRadioField
              key={idx}
              label={label}
              name={name}
              value={value}
              checked={field.value === value}
              rules={rules}
            />
          ))}
        </fieldset>
      )}
    />
  )
}
