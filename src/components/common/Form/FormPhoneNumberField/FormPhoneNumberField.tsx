import { usePrevious } from '@hooks/usePrevious'
import { forceNumberOnlyOnKeyPress } from '@utils/forceNumberOnlyOnKeyPress'
import { FC, useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import { FormTextField, FormTextFieldProps } from '../FormTextField'

type FormPhoneNumberFieldProps = Omit<FormTextFieldProps, 'autoFocusNext'> & {
  className?: string
  autoFocusNextName?: string
}

export const FormPhoneNumberField: FC<FormPhoneNumberFieldProps> = ({ name, rules, autoFocusNextName, ...props }) => {
  const { watch, setValue } = useFormContext()
  const phoneNumber = watch(name)
  const prevPhoneNumber = usePrevious(phoneNumber)

  useEffect(() => {
    if (prevPhoneNumber && phoneNumber.length < prevPhoneNumber.length) {
      setValue(name, phoneNumber.trim())
      return
    }

    if (phoneNumber && (phoneNumber.length === 4 || phoneNumber.length === 9)) {
      setValue(name, `${phoneNumber.slice(0, phoneNumber.length - 1)} ${phoneNumber.slice(phoneNumber.length - 1)}`)
      return
    }
  }, [phoneNumber, name, prevPhoneNumber, setValue])

  return (
    <FormTextField
      name={name}
      type="tel"
      maxLength={13}
      inputMode="numeric"
      rules={{ maxLength: 13, minLength: 13, ...(rules ?? {}) }}
      autoFocusNext={autoFocusNextName ? { hurdle: 13, next: autoFocusNextName } : undefined}
      onKeyPress={forceNumberOnlyOnKeyPress}
      {...props}
    />
  )
}
